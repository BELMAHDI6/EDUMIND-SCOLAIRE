const path = require('path');
const fs = require('fs');
const os = require('os');

// ==========================================================================
// DATA ISOLATION (AppData / Local Data Store)
// ==========================================================================
function getDataDirectory() {
  if (process.env.EDUMIND_SCOLAIRE_DATA_DIR) {
    return path.resolve(process.env.EDUMIND_SCOLAIRE_DATA_DIR);
  }
  const base = process.env.APPDATA || process.env.LOCALAPPDATA || (
    process.platform === 'darwin'
      ? path.join(os.homedir(), 'Library', 'Application Support')
      : os.homedir()
  );
  return path.join(base, 'EDUMIND_Scolaire', 'data');
}

function getBackupDirectory() {
  const backupDir = path.join(getDataDirectory(), 'backups');
  if (!fs.existsSync(backupDir)) {
    fs.mkdirSync(backupDir, { recursive: true });
  }
  return backupDir;
}

function getDatabasePath() {
  const dataDir = getDataDirectory();
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  const targetDb = path.join(dataDir, 'edumind_scolaire.sqlite');
  const legacyLocalDb = path.join(__dirname, 'edumind_scolaire.sqlite');

  // Automatic one-time migration:
  // If safe isolated DB does not exist yet, but local edumind.sqlite exists in project folder:
  if (!fs.existsSync(targetDb) && fs.existsSync(legacyLocalDb)) {
    try {
      console.log('📦 [Data Isolation] Migration de la base de données vers le stockage sécurisé AppData...');
      fs.copyFileSync(legacyLocalDb, targetDb);

      // Also migrate existing backup archives if any
      const legacyBackups = path.join(__dirname, 'backups');
      const safeBackups = path.join(dataDir, 'backups');
      if (fs.existsSync(legacyBackups) && !fs.existsSync(safeBackups)) {
        fs.cpSync(legacyBackups, safeBackups, { recursive: true });
      }
      console.log('✅ [Data Isolation] Données migrées avec succès vers :', targetDb);
    } catch (e) {
      console.error('⚠️ [Data Isolation] Erreur de migration vers AppData, utilisation du dossier local :', e.message);
      return legacyLocalDb;
    }
  }

  return targetDb;
}

// Use Node's built-in sqlite module (Node 22+)
let db;
const dbPath = getDatabasePath();
try {
  const { DatabaseSync } = require('node:sqlite');
  db = new DatabaseSync(dbPath);
  // High performance PRAGMAs for concurrency and speed
  db.exec('PRAGMA journal_mode = WAL;');
  db.exec('PRAGMA synchronous = NORMAL;');
  db.exec('PRAGMA busy_timeout = 15000;');
  db.exec('PRAGMA cache_size = -64000;'); // 64MB in-memory cache
  db.exec('PRAGMA temp_store = MEMORY;');
  db.exec('PRAGMA mmap_size = 0;'); // Disable memory mapping on Windows to prevent corrupt/malformed handle collisions
  db.exec('PRAGMA wal_autocheckpoint = 1000;');
  db.exec('PRAGMA foreign_keys = ON;');

  // Self-healing integrity check on database startup
  try {
    const quick = db.prepare('PRAGMA quick_check;').get();
    if (!quick || Object.values(quick)[0] !== 'ok') {
      console.warn('⚠️ [DB Self-Healing] Index mismatch detected during startup. Executing REINDEX...');
      db.exec('REINDEX;');
      console.log('✅ [DB Self-Healing] Indexes successfully repaired via REINDEX.');
    }
  } catch (chkErr) {
    try {
      console.warn('⚠️ [DB Self-Healing] Startup check exception, attempting REINDEX:', chkErr.message);
      db.exec('REINDEX;');
    } catch (e) {}
  }

  console.log('✅ SQLite Database connected via node:sqlite at:', dbPath);
} catch (err) {
  console.error('Failed to load node:sqlite, falling back...', err);
}

// Sanitize parameters to avoid node:sqlite binding errors (e.g., undefined or boolean)
function sanitizeParam(val) {
  if (val === undefined || (typeof val === 'number' && Number.isNaN(val))) return null;
  if (typeof val === 'boolean') return val ? 1 : 0;
  return val;
}

function sanitizeParams(params) {
  if (!params) return [];
  if (Array.isArray(params)) {
    return params.map(sanitizeParam);
  }
  return [sanitizeParam(params)];
}

// Backup Utilities
function createInstantBackup(targetFilePath) {
  if (fs.existsSync(targetFilePath)) {
    try { fs.unlinkSync(targetFilePath); } catch (e) {}
  }
  const safePath = targetFilePath.replace(/\\/g, '/');
  db.exec(`VACUUM INTO '${safePath}'`);
  return targetFilePath;
}

function cleanupOldBackups(backupDir, maxKeep = 7) {
  try {
    if (!fs.existsSync(backupDir)) return;
    const files = fs.readdirSync(backupDir)
      .filter(f => f.startsWith('edumind_backup_') && f.endsWith('.sqlite'))
      .map(f => {
        const filePath = path.join(backupDir, f);
        const stats = fs.statSync(filePath);
        return { name: f, path: filePath, time: stats.mtimeMs };
      })
      .sort((a, b) => b.time - a.time); // Newest first

    if (files.length > maxKeep) {
      const toDelete = files.slice(maxKeep);
      for (const item of toDelete) {
        fs.unlinkSync(item.path);
        console.log(`🧹 [Backup] Ancienne sauvegarde d'archive nettoyée (${maxKeep} conservées) : ${item.name}`);
      }
    }
  } catch (err) {
    console.error('⚠️ [Backup] Erreur nettoyage des anciennes sauvegardes :', err.message);
  }
}

function performAutoBackup(maxKeep = 7) {
  try {
    const backupDir = getBackupDirectory();

    const today = new Date().toISOString().split('T')[0];
    const targetBackupFile = path.join(backupDir, `edumind_backup_${today}.sqlite`);

    // Take one daily backup snapshot automatically
    if (!fs.existsSync(targetBackupFile)) {
      createInstantBackup(targetBackupFile);
      console.log(`🛡️ [Backup] Sauvegarde automatique quotidienne créée : edumind_backup_${today}.sqlite`);
    } else {
      console.log(`ℹ️ [Backup] La sauvegarde automatique d'aujourd'hui est déjà prête (${today}).`);
    }

    // Retain only the last 7 daily archive copies
    cleanupOldBackups(backupDir, maxKeep);
  } catch (err) {
    console.error('⚠️ [Backup] Erreur lors de la sauvegarde automatique :', err.message);
  }
}

function restoreDatabase(incomingFilePath) {
  try {
    if (!fs.existsSync(incomingFilePath)) {
      return { success: false, error: 'Fichier de sauvegarde introuvable.' };
    }

    // 1. Validate SQLite header: "SQLite format 3\0"
    const fd = fs.openSync(incomingFilePath, 'r');
    const headerBuf = Buffer.alloc(16);
    fs.readSync(fd, headerBuf, 0, 16, 0);
    fs.closeSync(fd);
    if (!headerBuf.toString('utf8').startsWith('SQLite format 3')) {
      try { fs.unlinkSync(incomingFilePath); } catch (e) {}
      return { success: false, error: 'Le fichier fourni n\'est pas un fichier SQLite valide.' };
    }

    // 2. Perform integrity quick_check on incoming file
    const { DatabaseSync } = require('node:sqlite');
    try {
      const testDb = new DatabaseSync(incomingFilePath);
      const check = testDb.prepare('PRAGMA quick_check;').get();
      testDb.close();
      if (!check || Object.values(check)[0] !== 'ok') {
        try { fs.unlinkSync(incomingFilePath); } catch (e) {}
        return { success: false, error: 'La base de données sélectionnée semble corrompue.' };
      }
    } catch (verr) {
      try { fs.unlinkSync(incomingFilePath); } catch (e) {}
      return { success: false, error: 'Impossible de lire le fichier SQLite : ' + verr.message };
    }

    // 3. Create an automatic safety backup of current data before overwriting
    const backupDir = getBackupDirectory();
    const safetyBackup = path.join(backupDir, `edumind_pre_restore_backup_${Date.now()}.sqlite`);
    try {
      createInstantBackup(safetyBackup);
      console.log('🛡️ [Backup] Sauvegarde de sécurité créée avant restauration :', safetyBackup);
    } catch (bErr) {
      console.warn('⚠️ Impossible de créer la sauvegarde pré-restauration :', bErr.message);
    }

    // 4. Safely close active database connection
    const currentDbPath = getDatabasePath();
    try {
      db.exec('PRAGMA wal_checkpoint(TRUNCATE);');
    } catch (wErr) {}
    try {
      db.close();
    } catch (cErr) {
      console.warn('Fermeture connexion db précédente :', cErr.message);
    }

    // Clean up wal / shm files before copying new database
    const walPath = currentDbPath + '-wal';
    const shmPath = currentDbPath + '-shm';
    if (fs.existsSync(walPath)) try { fs.unlinkSync(walPath); } catch (e) {}
    if (fs.existsSync(shmPath)) try { fs.unlinkSync(shmPath); } catch (e) {}

    // 5. Replace edumind.sqlite with the restored file (with retries for OS handle release)
    let copied = false;
    let lastErr = null;
    for (let attempt = 0; attempt < 5; attempt++) {
      try {
        fs.copyFileSync(incomingFilePath, currentDbPath);
        copied = true;
        break;
      } catch (copyErr) {
        lastErr = copyErr;
        const start = Date.now();
        while (Date.now() - start < 150) {}
      }
    }
    if (!copied) {
      throw lastErr || new Error('Impossible d\'écraser la base de données actuelle.');
    }
    try { fs.unlinkSync(incomingFilePath); } catch (e) {}

    // Clean up any remaining wal / shm files to ensure clean state
    if (fs.existsSync(walPath)) try { fs.unlinkSync(walPath); } catch (e) {}
    if (fs.existsSync(shmPath)) try { fs.unlinkSync(shmPath); } catch (e) {}

    // 6. Re-open connection to restored database
    db = new DatabaseSync(currentDbPath);
    db.exec('PRAGMA journal_mode = WAL;');
    db.exec('PRAGMA synchronous = NORMAL;');
    db.exec('PRAGMA busy_timeout = 5000;');
    db.exec('PRAGMA foreign_keys = ON;');
    DB.raw = db;
    // Clear statement cache — old prepared statements are invalid after restore
    if (typeof DB.clearCache === 'function') DB.clearCache();
    else _stmtCache.clear();

    console.log('✅ [Restore] Base de données SQLite restaurée avec succès depuis :', incomingFilePath);
    return { success: true };
  } catch (err) {
    console.error('❌ [Restore] Erreur restauration base SQLite :', err);
    // Ensure db is connected even if error occurred
    try {
      const fallbackDbPath = getDatabasePath();
      db = new DatabaseSync(fallbackDbPath);
      db.exec('PRAGMA journal_mode = WAL;');
      db.exec('PRAGMA foreign_keys = ON;');
      DB.raw = db;
    } catch (reErr) {}
    return { success: false, error: err.message };
  }
}

// =====================================================================
// Prepared Statement Cache — avoids recompiling SQL on every call
// This is the key performance optimization for repeated operations.
// =====================================================================
const _stmtCache = new Map();
const STMT_CACHE_MAX = 150;

function getPrepared(sql) {
  if (_stmtCache.has(sql)) {
    return _stmtCache.get(sql);
  }
  const stmt = db.prepare(sql);
  if (_stmtCache.size >= STMT_CACHE_MAX) {
    // Evict the oldest entry (FIFO)
    _stmtCache.delete(_stmtCache.keys().next().value);
  }
  _stmtCache.set(sql, stmt);
  return stmt;
}

// Wrapper to provide clean helper methods: queryAll, queryOne, run, transaction
const DB = {
  exec: (sql) => db.exec(sql),
  queryAll: (sql, params = []) => {
    try {
      return getPrepared(sql).all(...sanitizeParams(params));
    } catch (err) {
      if (err.message && err.message.toLowerCase().includes('malformed')) {
        console.warn('⚠️ [DB Self-Healing] "malformed" detected in queryAll. Auto-reindexing...');
        try {
          db.exec('REINDEX;');
          _stmtCache.clear();
          return db.prepare(sql).all(...sanitizeParams(params));
        } catch (repairErr) {
          console.error('❌ [DB Self-Healing] Auto-repair failed:', repairErr.message);
        }
      }
      throw err;
    }
  },
  queryOne: (sql, params = []) => {
    try {
      return getPrepared(sql).get(...sanitizeParams(params));
    } catch (err) {
      if (err.message && err.message.toLowerCase().includes('malformed')) {
        console.warn('⚠️ [DB Self-Healing] "malformed" detected in queryOne. Auto-reindexing...');
        try {
          db.exec('REINDEX;');
          _stmtCache.clear();
          return db.prepare(sql).get(...sanitizeParams(params));
        } catch (repairErr) {
          console.error('❌ [DB Self-Healing] Auto-repair failed:', repairErr.message);
        }
      }
      throw err;
    }
  },
  run: (sql, params = []) => {
    // Write operations with automatic busy retry (up to 5 attempts) to prevent lock freezes
    let retries = 5;
    while (retries > 0) {
      try {
        return db.prepare(sql).run(...sanitizeParams(params));
      } catch (err) {
        if (err.message && err.message.toLowerCase().includes('malformed')) {
          console.warn('⚠️ [DB Self-Healing] "malformed" detected in run. Auto-reindexing...');
          try {
            db.exec('REINDEX;');
            _stmtCache.clear();
            return db.prepare(sql).run(...sanitizeParams(params));
          } catch (repairErr) {
            console.error('❌ [DB Self-Healing] Auto-repair failed:', repairErr.message);
          }
        }
        if (err.message && (err.message.includes('busy') || err.message.includes('locked')) && retries > 1) {
          retries--;
          const waitMs = 20 + Math.floor(Math.random() * 30);
          const start = Date.now();
          while (Date.now() - start < waitMs) {}
          continue;
        }
        throw err;
      }
    }
  },
  // Atomic transaction using BEGIN IMMEDIATE to prevent deadlocks between concurrent writers
  transaction: (callback) => {
    let retries = 5;
    while (retries > 0) {
      try {
        db.exec('BEGIN IMMEDIATE;');
        const result = callback(db);
        db.exec('COMMIT;');
        return result;
      } catch (err) {
        try { db.exec('ROLLBACK;'); } catch (rbErr) {}
        if (err.message && (err.message.includes('busy') || err.message.includes('locked')) && retries > 1) {
          retries--;
          const waitMs = 25 + Math.floor(Math.random() * 35);
          const start = Date.now();
          while (Date.now() - start < waitMs) {}
          continue;
        }
        throw err;
      }
    }
  },
  // Clears the cache — call this after restoreDatabase
  clearCache: () => _stmtCache.clear(),
  raw: db,
  close: () => {
    try {
      if (db) {
        db.exec('PRAGMA wal_checkpoint(TRUNCATE);');
        db.close();
        console.log('✅ [DB] Base de données SQLite checkpointée et fermée proprement.');
      }
    } catch (e) {
      console.warn('⚠️ [DB] Erreur fermeture SQLite :', e.message);
    }
  },
  createInstantBackup,
  cleanupOldBackups,
  performAutoBackup,
  restoreDatabase,
  getDataDirectory,
  getBackupDirectory,
  getDatabasePath
};

process.on('beforeExit', () => {
  try {
    if (db) {
      db.exec('PRAGMA wal_checkpoint(TRUNCATE);');
      db.close();
    }
  } catch (e) {}
});

// Initialize All Database Tables
function initDatabase() {
  db.exec(`
    -- Settings Table
    CREATE TABLE IF NOT EXISTS settings (
      key TEXT PRIMARY KEY,
      value TEXT
    );

    -- Levels (Niveaux)
    CREATE TABLE IF NOT EXISTS levels (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      category TEXT NOT NULL DEFAULT 'CEM', -- Primaire, CEM, Lycee, Langues, Formation
      display_order INTEGER DEFAULT 0
    );

    -- Subjects (Matières)
    CREATE TABLE IF NOT EXISTS subjects (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      code TEXT,
      color TEXT DEFAULT '#3b82f6',
      icon TEXT DEFAULT 'book'
    );

    -- Classrooms (Salles)
    CREATE TABLE IF NOT EXISTS rooms (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      capacity INTEGER NOT NULL DEFAULT 25,
      has_projector INTEGER DEFAULT 0,
      notes TEXT
    );

    -- Teachers (Enseignants)
    CREATE TABLE IF NOT EXISTS teachers (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      matricule TEXT UNIQUE,
      first_name TEXT NOT NULL,
      last_name TEXT NOT NULL,
      phone TEXT,
      email TEXT,
      subject_id INTEGER,
      remuneration_type TEXT DEFAULT 'percent', -- 'percent', 'fixed', 'hourly'
      remuneration_rate REAL DEFAULT 50.0,     -- e.g. 50%
      active INTEGER DEFAULT 1,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (subject_id) REFERENCES subjects(id) ON DELETE SET NULL
    );

    -- Groups (Groupes / Classes)
    CREATE TABLE IF NOT EXISTS groups (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      level_id INTEGER NOT NULL,
      subject_id INTEGER NOT NULL,
      teacher_id INTEGER NOT NULL,
      room_id INTEGER,
      school_year TEXT DEFAULT '2025-2026',
      day_of_week TEXT,                       -- 'Lundi', 'Mardi', etc.
      start_time TEXT,                        -- '14:00'
      end_time TEXT,                          -- '16:00'
      price_monthly REAL NOT NULL DEFAULT 2000, -- en DA
      max_students INTEGER DEFAULT 25,
      active INTEGER DEFAULT 1,
      FOREIGN KEY (level_id) REFERENCES levels(id),
      FOREIGN KEY (subject_id) REFERENCES subjects(id),
      FOREIGN KEY (teacher_id) REFERENCES teachers(id),
      FOREIGN KEY (room_id) REFERENCES rooms(id)
    );

    -- Families (العائلات) - required for legacy foreign key constraints
    CREATE TABLE IF NOT EXISTS families (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      phone TEXT,
      notes TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    -- Parents / Tuteurs (أولياء التلاميذ)
    CREATE TABLE IF NOT EXISTS parents (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      full_name TEXT NOT NULL,
      phone TEXT NOT NULL,
      phone_secondary TEXT,
      email TEXT,
      address TEXT,
      discount_percent REAL DEFAULT 0,        -- نسبة التخفيض اليدوية من المدير (%)
      notes TEXT,
      active INTEGER DEFAULT 1,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    -- Students (Élèves)
    CREATE TABLE IF NOT EXISTS students (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      matricule TEXT UNIQUE NOT NULL,
      first_name TEXT NOT NULL,
      last_name TEXT NOT NULL,
      gender TEXT DEFAULT 'M',                -- 'M' ou 'F'
      birth_date TEXT,
      phone TEXT,
      parent_id INTEGER,                      -- Liaison avec le parent
      parent_name TEXT,
      parent_phone TEXT,
      address TEXT,
      level_id INTEGER,
      photo_url TEXT,
      qr_code TEXT,
      notes TEXT,
      active INTEGER DEFAULT 1,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (parent_id) REFERENCES parents(id),
      FOREIGN KEY (level_id) REFERENCES levels(id)
    );

    -- Enrollments (Inscriptions des élèves aux groupes)
    CREATE TABLE IF NOT EXISTS enrollments (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      student_id INTEGER NOT NULL,
      group_id INTEGER NOT NULL,
      school_year TEXT DEFAULT '2025-2026',
      registration_date DATE DEFAULT (DATE('now')),
      discount_amount REAL DEFAULT 0,         -- Remise mensuelle accordée (ex: orphelin ou frères)
      status TEXT DEFAULT 'active',           -- 'active', 'suspended', 'cancelled'
      FOREIGN KEY (student_id) REFERENCES students(id) ON DELETE CASCADE,
      FOREIGN KEY (group_id) REFERENCES groups(id) ON DELETE CASCADE,
      UNIQUE(student_id, group_id, school_year)
    );

    -- Payments (Paiements / Reçus)
    CREATE TABLE IF NOT EXISTS payments (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      receipt_no TEXT UNIQUE NOT NULL,
      student_id INTEGER NOT NULL,
      group_id INTEGER NOT NULL,
      month_period TEXT NOT NULL,             -- '2026-09' ou 'Septembre 2026'
      base_amount REAL NOT NULL,              -- Prix du cours
      discount REAL DEFAULT 0,
      paid_amount REAL NOT NULL,              -- Montant payé en DA
      remaining_amount REAL DEFAULT 0,        -- Reste dû en DA
      payment_method TEXT DEFAULT 'espece',   -- 'espece', 'baridimob', 'cheque'
      payment_date DATETIME DEFAULT CURRENT_TIMESTAMP,
      notes TEXT,
      FOREIGN KEY (student_id) REFERENCES students(id),
      FOREIGN KEY (group_id) REFERENCES groups(id)
    );

    -- Attendance / Pointage (Pointage par code-barres / QR / Manuel)
    CREATE TABLE IF NOT EXISTS attendance (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      student_id INTEGER NOT NULL,
      group_id INTEGER NOT NULL,
      session_date DATE NOT NULL,
      check_in_time TIME NOT NULL,
      status TEXT DEFAULT 'present',          -- 'present', 'late', 'absent', 'excused'
      payment_status_snapshot TEXT,           -- 'paid', 'due' au moment du pointage
      notes TEXT,
      session_id INTEGER,
      FOREIGN KEY (student_id) REFERENCES students(id),
      FOREIGN KEY (group_id) REFERENCES groups(id)
    );

    -- Group Sessions (Suivi des séances de cours par groupe: date, numéro, sujet)
    CREATE TABLE IF NOT EXISTS group_sessions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      group_id INTEGER NOT NULL,
      session_date DATE NOT NULL,
      session_number INTEGER DEFAULT 1,
      start_time TEXT,
      end_time TEXT,
      topic TEXT,
      notes TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (group_id) REFERENCES groups(id) ON DELETE CASCADE,
      UNIQUE(group_id, session_date)
    );

    -- Expenses / Dépenses
    CREATE TABLE IF NOT EXISTS expenses (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      category TEXT DEFAULT 'Autre',          -- Loyer, Électricité, Fournitures, Salaire, etc.
      amount REAL NOT NULL,
      expense_date DATE DEFAULT (DATE('now')),
      notes TEXT
    );

    -- Caisse (Treasury Double-Entry Log: Entrees & Sorties)
    CREATE TABLE IF NOT EXISTS caisse (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      type TEXT NOT NULL CHECK (type IN ('entree', 'sortie')),
      category TEXT NOT NULL,                -- 'Paiement élève', 'Salaire enseignant', 'Loyer', etc.
      amount REAL NOT NULL,
      title TEXT NOT NULL,
      reference TEXT,                        -- N° reçu, chèque, bon de caisse
      payment_method TEXT DEFAULT 'espece',  -- 'espece', 'baridimob', 'cheque', etc.
      payment_id INTEGER,
      teacher_payout_id INTEGER,
      expense_id INTEGER,
      user_name TEXT DEFAULT 'Secrétariat',
      movement_date DATE DEFAULT (DATE('now')),
      movement_time TIME,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE INDEX IF NOT EXISTS idx_caisse_date ON caisse(movement_date);
    CREATE INDEX IF NOT EXISTS idx_caisse_type ON caisse(type);

    -- Teacher Remuneration Closures (Règlements des honoraires enseignants)
    CREATE TABLE IF NOT EXISTS teacher_payouts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      teacher_id INTEGER NOT NULL,
      group_id INTEGER,
      period TEXT NOT NULL,                   -- ex: '2026-09'
      remuneration_mode TEXT DEFAULT 'percent', -- 8 modes
      base_calculation REAL DEFAULT 0,
      rate_value REAL DEFAULT 0,
      students_count INTEGER DEFAULT 0,
      sessions_count INTEGER DEFAULT 0,
      hours_count REAL DEFAULT 0,
      total_collected REAL NOT NULL DEFAULT 0,
      teacher_share_percent REAL NOT NULL DEFAULT 50,
      teacher_share_amount REAL NOT NULL DEFAULT 0,
      paid_amount REAL NOT NULL DEFAULT 0,
      caisse_id INTEGER,
      payout_date DATETIME DEFAULT CURRENT_TIMESTAMP,
      notes TEXT,
      FOREIGN KEY (teacher_id) REFERENCES teachers(id)
    );

    -- High Performance Composite Indexes
    CREATE INDEX IF NOT EXISTS idx_students_matricule_nocase ON students(matricule COLLATE NOCASE);
    CREATE INDEX IF NOT EXISTS idx_students_qr_code_nocase ON students(qr_code COLLATE NOCASE);
    CREATE INDEX IF NOT EXISTS idx_students_active_level ON students(active, level_id);
    CREATE INDEX IF NOT EXISTS idx_students_names ON students(last_name, first_name);

    CREATE INDEX IF NOT EXISTS idx_enrollments_student_status ON enrollments(student_id, status);
    CREATE INDEX IF NOT EXISTS idx_enrollments_group_status ON enrollments(group_id, status);
    CREATE INDEX IF NOT EXISTS idx_enrollments_school_year ON enrollments(school_year);

    CREATE INDEX IF NOT EXISTS idx_payments_student_id ON payments(student_id);
    CREATE INDEX IF NOT EXISTS idx_payments_group_id ON payments(group_id);
    CREATE INDEX IF NOT EXISTS idx_payments_month_period ON payments(month_period);
    CREATE INDEX IF NOT EXISTS idx_payments_student_group_month ON payments(student_id, group_id, month_period);
    CREATE INDEX IF NOT EXISTS idx_payments_date ON payments(payment_date);

    CREATE INDEX IF NOT EXISTS idx_attendance_student_session ON attendance(student_id, session_date);
    CREATE INDEX IF NOT EXISTS idx_attendance_group_date ON attendance(group_id, session_date);
    CREATE UNIQUE INDEX IF NOT EXISTS idx_attendance_student_group_date ON attendance(student_id, group_id, session_date);

    CREATE INDEX IF NOT EXISTS idx_teachers_matricule_nocase ON teachers(matricule COLLATE NOCASE);
    CREATE INDEX IF NOT EXISTS idx_teachers_active ON teachers(active);
    CREATE INDEX IF NOT EXISTS idx_groups_active ON groups(active);
    CREATE INDEX IF NOT EXISTS idx_group_sessions_group_date ON group_sessions(group_id, session_date);
  `);

  // Data consistency repair: ensure all students have qr_code synchronized with matricule
  try {
    db.exec("UPDATE students SET qr_code = matricule WHERE qr_code IS NULL OR qr_code = '';");
  } catch (e) {
    console.warn('Student qr_code sync warning:', e);
  }

  // Populate Default Settings if empty
  const schoolName = DB.queryOne("SELECT value FROM settings WHERE key = 'school_name'");
  if (!schoolName) {
    db.exec(`
      INSERT INTO settings (key, value) VALUES
      ('school_name', 'EDUMIND Academy'),
      ('school_phone', '0550 00 00 00'),
      ('school_address', 'Alger, Algérie'),
      ('active_year', '2025-2026'),
      ('currency', 'DA'),
      ('language', 'fr'),
      ('theme', 'dark');
    `);
  }

  // Populate Default Levels if empty
  const levelsCount = DB.queryOne("SELECT COUNT(*) as count FROM levels");
  if (levelsCount.count === 0) {
    db.exec(`
      INSERT INTO levels (name, category, display_order) VALUES
      ('1ère Année Primaire (1AP)', 'Primaire', 1),
      ('2ème Année Primaire (2AP)', 'Primaire', 2),
      ('3ème Année Primaire (3AP)', 'Primaire', 3),
      ('4ème Année Primaire (4AP)', 'Primaire', 4),
      ('5ème Année Primaire (5AP)', 'Primaire', 5),
      ('1ère Année Moyenne (1AM)', 'CEM', 6),
      ('2ème Année Moyenne (2AM)', 'CEM', 7),
      ('3ème Année Moyenne (3AM)', 'CEM', 8),
      ('4ème Année Moyenne - BEM (4AM)', 'CEM', 9),
      ('1ère Année Secondaire (1AS)', 'Lycee', 10),
      ('2ème Année Secondaire (2AS)', 'Lycee', 11),
      ('3ème Année Secondaire - BAC (3AS)', 'Lycee', 12),
      ('Anglais Débutant (A1)', 'Langues', 13),
      ('Anglais Intermédiaire (B1)', 'Langues', 14),
      ('Français Communication', 'Langues', 15),
      ('Informatique & Robotique', 'Formation', 16);
    `);
  }

  // Populate Default Subjects if empty
  const subjectsCount = DB.queryOne("SELECT COUNT(*) as count FROM subjects");
  if (subjectsCount.count === 0) {
    db.exec(`
      INSERT INTO subjects (name, code, color, icon) VALUES
      ('Mathématiques', 'MATH', '#3b82f6', 'calculator'),
      ('Sciences Physiques', 'PHYS', '#8b5cf6', 'atom'),
      ('Sciences Naturelles', 'SNV', '#10b981', 'leaf'),
      ('Langue Française', 'FR', '#f59e0b', 'book-open'),
      ('Langue Anglaise', 'EN', '#ec4899', 'globe'),
      ('Langue Arabe', 'AR', '#06b6d4', 'feather'),
      ('Philosophie', 'PHILO', '#6366f1', 'brain');
    `);
  }

  // Populate Default Classrooms (Salles) if empty
  const roomsCount = DB.queryOne("SELECT COUNT(*) as count FROM rooms");
  if (roomsCount.count === 0) {
    db.exec(`
      INSERT INTO rooms (name, capacity, has_projector, notes) VALUES
      ('Salle Ibn Khaldoun (01)', 30, 1, 'Équipée d''un vidéoprojecteur'),
      ('Salle Al-Khwarizmi (02)', 25, 1, 'Climatisée'),
      ('Salle Avicenne (03)', 20, 0, 'Petite salle pour langues'),
      ('Salle Informatique (Lab)', 18, 1, '18 PC avec réseau local');
    `);
  }

  // Salles de classe par défaut initialisées avec succès.


  // Dynamic column migrations helper
  function addColumnIfNotExists(table, col, definition) {
    try {
      const cols = DB.queryAll(`PRAGMA table_info(${table})`);
      if (!cols.some(c => c.name === col)) {
        db.exec(`ALTER TABLE ${table} ADD COLUMN ${col} ${definition};`);
      }
    } catch (e) {
      console.warn(`Migration addColumn ${table}.${col}:`, e.message);
    }
  }

  // Ensure teachers columns for the 8 remuneration modes
  addColumnIfNotExists('teachers', 'tarif_heure', 'REAL DEFAULT 0');
  addColumnIfNotExists('teachers', 'tarif_seance', 'REAL DEFAULT 0');
  addColumnIfNotExists('teachers', 'salaire_fixe', 'REAL DEFAULT 0');
  addColumnIfNotExists('teachers', 'tarif_par_eleve', 'REAL DEFAULT 0');

  // Ensure teacher_payouts columns
  addColumnIfNotExists('teacher_payouts', 'remuneration_mode', "TEXT DEFAULT 'percent'");
  addColumnIfNotExists('teacher_payouts', 'base_calculation', 'REAL DEFAULT 0');
  addColumnIfNotExists('teacher_payouts', 'rate_value', 'REAL DEFAULT 0');
  addColumnIfNotExists('teacher_payouts', 'students_count', 'INTEGER DEFAULT 0');
  addColumnIfNotExists('teacher_payouts', 'sessions_count', 'INTEGER DEFAULT 0');
  addColumnIfNotExists('teacher_payouts', 'hours_count', 'REAL DEFAULT 0');
  addColumnIfNotExists('teacher_payouts', 'caisse_id', 'INTEGER');

  // Ensure attendance columns & group_sessions table
  addColumnIfNotExists('students', 'birth_place', 'TEXT');
  addColumnIfNotExists('students', 'parent_id', 'INTEGER');
  addColumnIfNotExists('attendance', 'notes', 'TEXT');
  addColumnIfNotExists('attendance', 'session_id', 'INTEGER');
  addColumnIfNotExists('teachers', 'photo_url', 'TEXT');

  // Parents Table Migration & Initial Sync from existing students
  try {
    db.exec(`
      CREATE TABLE IF NOT EXISTS parents (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        full_name TEXT NOT NULL,
        phone TEXT NOT NULL,
        phone_secondary TEXT,
        email TEXT,
        address TEXT,
        discount_percent REAL DEFAULT 0,
        notes TEXT,
        active INTEGER DEFAULT 1,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );
      CREATE INDEX IF NOT EXISTS idx_parents_phone ON parents(phone);
      CREATE INDEX IF NOT EXISTS idx_parents_name ON parents(full_name);
      CREATE INDEX IF NOT EXISTS idx_students_parent_id ON students(parent_id);
    `);

    // Auto-seed parents from existing students if parents table is empty
    const pCountRow = DB.queryOne("SELECT COUNT(*) as count FROM parents");
    if (!pCountRow || pCountRow.count === 0) {
      const existingStudents = DB.queryAll(`
        SELECT id, parent_name, parent_phone, address, phone
        FROM students
        WHERE parent_name IS NOT NULL AND TRIM(parent_name) != ''
      `);

      const parentMap = new Map();
      for (const s of existingStudents) {
        const rawName = (s.parent_name || '').trim();
        if (!rawName) continue;
        const rawPhone = (s.parent_phone || s.phone || '').trim();
        const key = `${rawName.toLowerCase()}_${rawPhone}`;

        let parentId;
        if (parentMap.has(key)) {
          parentId = parentMap.get(key);
        } else {
          const insertRes = DB.run(
            `INSERT INTO parents (full_name, phone, address, discount_percent) VALUES (?, ?, ?, 0)`,
            [rawName, rawPhone, s.address || null]
          );
          parentId = insertRes.lastInsertRowid;
          parentMap.set(key, parentId);
        }
        DB.run(`UPDATE students SET parent_id = ? WHERE id = ?`, [parentId, s.id]);
      }
      if (parentMap.size > 0) {
        console.log(`✅ [Migration] ${parentMap.size} parent(s) automatiquement initialisés depuis les élèves existants.`);
      }
    }
  } catch (err) {
    console.warn('Migration parents table error:', err.message);
  }

  // Entrance / Gate General Attendance table and sync
  try {
    db.exec(`
      CREATE TABLE IF NOT EXISTS entrance_attendance (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        person_type TEXT NOT NULL CHECK(person_type IN ('student', 'teacher')),
        person_id INTEGER NOT NULL,
        session_date DATE NOT NULL,
        check_in_time TIME NOT NULL,
        check_out_time TIME,
        duration_minutes INTEGER DEFAULT 0,
        status TEXT DEFAULT 'present',
        notes TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        UNIQUE(person_type, person_id, session_date)
      );
      CREATE INDEX IF NOT EXISTS idx_entrance_att_date ON entrance_attendance(session_date);
      CREATE INDEX IF NOT EXISTS idx_entrance_att_person ON entrance_attendance(person_type, person_id, session_date);

      CREATE TABLE IF NOT EXISTS group_sessions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        group_id INTEGER NOT NULL,
        session_date DATE NOT NULL,
        session_number INTEGER DEFAULT 1,
        start_time TEXT,
        end_time TEXT,
        topic TEXT,
        notes TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (group_id) REFERENCES groups(id) ON DELETE CASCADE,
        UNIQUE(group_id, session_date)
      );
      CREATE UNIQUE INDEX IF NOT EXISTS idx_attendance_student_group_date ON attendance(student_id, group_id, session_date);

      -- Critical Performance Indexes
      CREATE INDEX IF NOT EXISTS idx_students_matricule ON students(matricule);
      CREATE INDEX IF NOT EXISTS idx_students_active ON students(active);
      CREATE INDEX IF NOT EXISTS idx_students_level_id ON students(level_id);
      CREATE INDEX IF NOT EXISTS idx_enrollments_student_id ON enrollments(student_id);
      CREATE INDEX IF NOT EXISTS idx_enrollments_group_id ON enrollments(group_id);
      CREATE INDEX IF NOT EXISTS idx_enrollments_status ON enrollments(status);
      CREATE INDEX IF NOT EXISTS idx_payments_student_id ON payments(student_id);
      CREATE INDEX IF NOT EXISTS idx_payments_group_id ON payments(group_id);
      CREATE INDEX IF NOT EXISTS idx_payments_date ON payments(payment_date);
      CREATE INDEX IF NOT EXISTS idx_attendance_student_id ON attendance(student_id);
      CREATE INDEX IF NOT EXISTS idx_attendance_group_id ON attendance(group_id);
      CREATE INDEX IF NOT EXISTS idx_attendance_session_date ON attendance(session_date);
      CREATE INDEX IF NOT EXISTS idx_teachers_matricule ON teachers(matricule);
      CREATE INDEX IF NOT EXISTS idx_teachers_active ON teachers(active);
      CREATE INDEX IF NOT EXISTS idx_groups_teacher_id ON groups(teacher_id);
      CREATE INDEX IF NOT EXISTS idx_groups_subject_id ON groups(subject_id);
      CREATE INDEX IF NOT EXISTS idx_groups_active ON groups(active);
    `);

    // Ensure all teachers have a matricule
    db.exec(`UPDATE teachers SET matricule = 'ENS-' || substr('000' || id, -3, 3) WHERE matricule IS NULL OR matricule = '';`);
  } catch (e) {
    console.warn('Attendance / entrance table migration:', e.message);
  }

  // Backfill caisse from existing payments and expenses if caisse has no records
  try {
    const caisseCount = DB.queryOne("SELECT COUNT(*) as count FROM caisse").count;
    if (caisseCount === 0) {
      db.exec(`
        INSERT INTO caisse (type, category, amount, title, reference, payment_method, payment_id, user_name, movement_date, movement_time, created_at)
        SELECT 'entree', 'Paiement élève', paid_amount,
               'Paiement cours ' || month_period, receipt_no, payment_method, id, 'Secrétariat',
               DATE(payment_date), TIME(payment_date), payment_date
        FROM payments;

        INSERT INTO caisse (type, category, amount, title, reference, payment_method, expense_id, user_name, movement_date, movement_time, created_at)
        SELECT 'sortie', category, amount, title, 'DEP-' || id, 'espece', id, 'Secrétariat',
               expense_date, '12:00:00', expense_date || ' 12:00:00'
        FROM expenses;
      `);
    }
  } catch (caisseErr) {
    console.warn('Caisse backfill migration:', caisseErr.message);
  }

  // Public School Extensions (Canteen & Discipline & Teachers)
  try {
    try { db.exec("ALTER TABLE students ADD COLUMN regime TEXT DEFAULT 'demi_pensionnaire';"); } catch(e){}
    try { db.exec("ALTER TABLE students ADD COLUMN canteen_active INTEGER DEFAULT 1;"); } catch(e){}
    try { db.exec("ALTER TABLE students ADD COLUMN national_id TEXT;"); } catch(e){}
    try { db.exec("ALTER TABLE students ADD COLUMN birth_place TEXT;"); } catch(e){}
    try { db.exec("ALTER TABLE teachers ADD COLUMN grade TEXT DEFAULT 'prof_titulaire';"); } catch(e){}

    // Ensure Preparatoire level exists for primary education
    try {
      const hasPrep = db.prepare("SELECT id FROM levels WHERE category = 'Primaire' AND (name LIKE '%Préparatoire%' OR name LIKE '%تحضيري%')").get();
      if (!hasPrep) {
        db.prepare("INSERT INTO levels (name, category, display_order) VALUES ('القسم التحضيري (Préparatoire)', 'Primaire', 0)").run();
      }
    } catch(e){}

    // Default school_cycles if not set
    try {
      const hasCycles = db.prepare("SELECT value FROM settings WHERE key = 'school_cycles'").get();
      if (!hasCycles) {
        db.prepare("INSERT OR IGNORE INTO settings (key, value) VALUES ('school_cycles', ?)").run(JSON.stringify(['CEM']));
      }
    } catch(e){}

    db.exec(`
      CREATE TABLE IF NOT EXISTS canteen_attendance (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        student_id INTEGER NOT NULL,
        meal_date DATE NOT NULL,
        scan_time TIME NOT NULL,
        status TEXT DEFAULT 'served',
        notes TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (student_id) REFERENCES students(id) ON DELETE CASCADE,
        UNIQUE(student_id, meal_date)
      );

      CREATE TABLE IF NOT EXISTS canteen_subscriptions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        student_id INTEGER NOT NULL,
        school_year TEXT DEFAULT '2026-2027',
        trimester INTEGER NOT NULL,
        amount REAL DEFAULT 600,
        is_paid INTEGER DEFAULT 1,
        receipt_no TEXT,
        paid_date DATE DEFAULT (DATE('now')),
        FOREIGN KEY (student_id) REFERENCES students(id) ON DELETE CASCADE,
        UNIQUE(student_id, school_year, trimester)
      );

      CREATE TABLE IF NOT EXISTS discipline_absences (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        student_id INTEGER NOT NULL,
        absence_date DATE NOT NULL,
        time_slot TEXT NOT NULL,
        period_type TEXT DEFAULT 'absence',
        subject_name TEXT,
        is_justified INTEGER DEFAULT 0,
        justification_reason TEXT,
        justified_at DATETIME,
        billet_issued INTEGER DEFAULT 0,
        billet_number TEXT,
        billet_issued_at DATETIME,
        notes TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (student_id) REFERENCES students(id) ON DELETE CASCADE
      );
    `);
  } catch (pubErr) {
    console.warn('Public school extensions migration:', pubErr.message);
  }

  console.log('✅ EDUMIND Scolaire Database tables verified successfully!');
}

initDatabase();
performAutoBackup();

module.exports = DB;
