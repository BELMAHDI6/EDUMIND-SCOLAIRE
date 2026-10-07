const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const os = require('os');
const DB = require('./database');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json({ limit: '20mb' }));
app.use(express.urlencoded({ extended: true, limit: '20mb' }));
app.use('/api', (req, res, next) => {
  res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private');
  res.set('Pragma', 'no-cache');
  res.set('Expires', '0');
  next();
});

app.use(express.static(path.join(__dirname, 'public'), {
  etag: false,
  maxAge: 0,
  setHeaders: (res) => {
    res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private');
  }
}));

// Ensure public directories exist
const uploadDir = path.join(__dirname, 'public', 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// -------------------------------------------------------------
// SOFTWARE LICENSING & PROTECTION (VELOCE CRAFT)
// -------------------------------------------------------------
const LicenseManager = require('./license_manager');
const licenseMgr = new LicenseManager(DB);

const Updater = require('./updater');
const updater = new Updater(__dirname);

// Public License Endpoints (Never blocked)
app.get('/api/license/status', (req, res) => {
  try {
    const status = licenseMgr.getStatus();
    res.json({ success: true, ...status });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.post('/api/license/activate', (req, res) => {
  try {
    const { key } = req.body;
    const result = licenseMgr.activate(key);
    if (!result.success) {
      return res.status(400).json(result);
    }
    res.json(result);
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Cloud Auto-Update Endpoints (Never blocked)
app.get('/api/updates/check', async (req, res) => {
  try {
    let customUrl = null;
    try {
      customUrl = DB.queryOne("SELECT value FROM settings WHERE key = 'update_server_url'")?.value;
    } catch (e) {}
    const result = await updater.checkForUpdates(customUrl);
    res.json(result);
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.post('/api/updates/apply', async (req, res) => {
  try {
    const { zipUrl } = req.body;
    const result = await updater.applyUpdate(zipUrl);
    res.json(result);
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.post('/api/updates/restart', (req, res) => {
  res.json({ success: true, message: 'Redémarrage en cours...' });
  setTimeout(() => {
    process.exit(0);
  }, 1000);
});

// Network & Multi-Device LAN Info
app.get('/api/network/info', (req, res) => {
  try {
    const interfaces = os.networkInterfaces();
    const addresses = [];
    for (const [name, netList] of Object.entries(interfaces)) {
      for (const net of netList) {
        if (net.family === 'IPv4' && !net.internal) {
          addresses.push({
            name,
            ip: net.address,
            url: `http://${net.address}:${PORT}`
          });
        }
      }
    }
    res.json({
      success: true,
      hostname: os.hostname(),
      port: PORT,
      localUrl: `http://localhost:${PORT}`,
      addresses,
      primaryUrl: addresses.length > 0 ? addresses[0].url : `http://localhost:${PORT}`
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// API Protection Middleware: Blocks database access if license is expired or invalid
app.use('/api', (req, res, next) => {
  if (req.path.startsWith('/license/') || req.path.startsWith('/updates/') || req.path.startsWith('/network/')) {
    return next();
  }

  const status = licenseMgr.getStatus();
  if (!status.isLicensed) {
    return res.status(403).json({
      success: false,
      code: 'LICENSE_REQUIRED',
      status: status.status,
      message: status.message,
      hwid: status.hwid
    });
  }

  next();
});

function toNullableId(val) {
  if (val === undefined || val === null || val === '') return null;
  const num = Number(val);
  return Number.isNaN(num) ? null : num;
}

// -------------------------------------------------------------
// 1. DASHBOARD & STATS API
// -------------------------------------------------------------
app.get('/api/dashboard/stats', (req, res) => {
  try {
    const activeYear = DB.queryOne("SELECT value FROM settings WHERE key = 'active_year'")?.value || '2025-2026';

    // 1. Active Students
    const activeStudents = DB.queryOne("SELECT COUNT(*) as count FROM students WHERE active = 1").count;

    // 2. Inscriptions count
    const enrollments = DB.queryOne("SELECT COUNT(*) as count FROM enrollments WHERE school_year = ?", [activeYear]).count;

    // 3. Collected Today
    const todayCollected = DB.queryOne(
      "SELECT COALESCE(SUM(paid_amount), 0) as total FROM payments WHERE DATE(payment_date) = DATE('now')"
    ).total;

    // 4. Collected This Month
    const thisMonthCollected = DB.queryOne(
      "SELECT COALESCE(SUM(paid_amount), 0) as total FROM payments WHERE strftime('%Y-%m', payment_date) = strftime('%Y-%m', 'now')"
    ).total;

    // 5. Unpaid / Debts estimation
    // Calculation: Total price of all active enrollments for the current month minus payments already made
    const expectedMonthly = DB.queryOne(`
      SELECT COALESCE(SUM(g.price_monthly - e.discount_amount), 0) as expected
      FROM enrollments e
      JOIN groups g ON e.group_id = g.id
      WHERE e.status = 'active' AND e.school_year = ?
    `, [activeYear]).expected;

    const totalUnpaid = Math.max(0, expectedMonthly - thisMonthCollected);
    const recoveryRate = expectedMonthly > 0 ? Math.min(100, Math.round((thisMonthCollected / expectedMonthly) * 100)) : 100;

    // 6. Teachers, Parents & Subjects count
    const teachersCount = DB.queryOne("SELECT COUNT(*) as count FROM teachers WHERE active = 1").count;
    const parentsCount = DB.queryOne("SELECT COUNT(*) as count FROM parents WHERE active = 1")?.count || 0;
    const subjectsCount = DB.queryOne("SELECT COUNT(*) as count FROM subjects").count;
    const roomsCount = DB.queryOne("SELECT COUNT(*) as count FROM rooms").count;

    // 7. Revenue Evolution - 12 Months (Single Fast Grouped Query)
    const monthNames = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc'];
    const now = new Date();
    const startDate = new Date(now.getFullYear(), now.getMonth() - 11, 1).toISOString().slice(0, 7) + '-01';

    const revenueRows = DB.queryAll(`
      SELECT strftime('%Y-%m', payment_date) as monthKey,
             COALESCE(SUM(paid_amount), 0) as total 
      FROM payments 
      WHERE payment_date >= ?
      GROUP BY strftime('%Y-%m', payment_date)
    `, [startDate]);

    const revenueMap = new Map();
    revenueRows.forEach(r => revenueMap.set(r.monthKey, Number(r.total || 0)));

    const monthlyEvolution = [];
    for (let i = 11; i >= 0; i--) {
      const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const yearMonth = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
      const label = `${monthNames[d.getMonth()]} ${d.getFullYear()}`;
      monthlyEvolution.push({
        monthKey: yearMonth,
        label: label,
        amount: revenueMap.get(yearMonth) || 0
      });
    }

    // 8. Recent Payments
    const recentPayments = DB.queryAll(`
      SELECT p.id, p.receipt_no, p.paid_amount, p.payment_date, p.payment_method,
             s.first_name || ' ' || s.last_name as student_name,
             sub.name as subject_name,
             g.name as group_name
      FROM payments p
      JOIN students s ON p.student_id = s.id
      JOIN groups g ON p.group_id = g.id
      JOIN subjects sub ON g.subject_id = sub.id
      ORDER BY p.payment_date DESC, p.id DESC
      LIMIT 6
    `);

    // 9. Recent Unpaid / Impayés
    // Find enrolled students who haven't paid for current month
    const currentMonthStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
    const unpaidStudents = DB.queryAll(`
      SELECT s.id as student_id, s.first_name || ' ' || s.last_name as student_name, s.phone,
             g.name as group_name, sub.name as subject_name,
             (g.price_monthly - e.discount_amount) as amount_due
      FROM enrollments e
      JOIN students s ON e.student_id = s.id
      JOIN groups g ON e.group_id = g.id
      JOIN subjects sub ON g.subject_id = sub.id
      WHERE e.status = 'active'
        AND NOT EXISTS (
          SELECT 1 FROM payments p 
          WHERE p.student_id = e.student_id 
            AND p.group_id = e.group_id 
            AND (p.month_period = ? OR strftime('%Y-%m', p.payment_date) = ?)
        )
      LIMIT 6
    `, [currentMonthStr, currentMonthStr]);

    // 10. Notifications & Alerts
    const alerts = [];
    if (unpaidStudents.length > 0) {
      alerts.push({
        type: 'warning',
        title: 'Retards de paiement',
        message: `${unpaidStudents.length} élève(s) en attente de régularisation pour ce mois.`
      });
    }
    const todaySessions = DB.queryAll(`
      SELECT g.name, g.start_time, g.end_time, r.name as room_name, t.first_name || ' ' || t.last_name as teacher_name
      FROM groups g
      JOIN rooms r ON g.room_id = r.id
      JOIN teachers t ON g.teacher_id = t.id
      WHERE g.active = 1
      LIMIT 3
    `);

    // Public School Stats
    const demiPensionnaires = DB.queryOne("SELECT COUNT(*) as c FROM students WHERE active = 1 AND (regime = 'demi_pensionnaire' OR regime IS NULL)").c;
    const externes = DB.queryOne("SELECT COUNT(*) as c FROM students WHERE active = 1 AND regime = 'externe'").c;
    const mealsToday = DB.queryOne("SELECT COUNT(*) as c FROM canteen_attendance WHERE meal_date = DATE('now') AND status = 'served'")?.c || 0;
    const mealAttendanceRate = demiPensionnaires > 0 ? Math.round((mealsToday / demiPensionnaires) * 100) : 0;
    const classesCount = DB.queryOne("SELECT COUNT(*) as c FROM groups WHERE active = 1").c;
    const caisseBalance = DB.queryOne("SELECT COALESCE(SUM(CASE WHEN type = 'entree' THEN amount ELSE -amount END), 0) as balance FROM caisse")?.balance || 0;

    const recentCanteenScans = DB.queryAll(`
      SELECT ca.id, ca.scan_time, s.first_name, s.last_name, s.matricule, g.name as group_name
      FROM canteen_attendance ca
      JOIN students s ON ca.student_id = s.id
      LEFT JOIN enrollments e ON e.student_id = s.id AND e.status = 'active'
      LEFT JOIN groups g ON e.group_id = g.id
      WHERE ca.meal_date = DATE('now')
      ORDER BY ca.id DESC
      LIMIT 8
    `);

    res.json({
      success: true,
      activeYear,
      kpis: {
        activeStudents,
        demiPensionnaires,
        externes,
        mealsToday,
        mealAttendanceRate,
        classesCount,
        caisseBalance,
        enrollments,
        todayCollected,
        thisMonthCollected,
        totalUnpaid,
        recoveryRate,
        teachersCount,
        parentsCount,
        subjectsCount,
        roomsCount
      },
      recentCanteenScans,
      monthlyEvolution,
      recentPayments,
      unpaidStudents,
      alerts,
      todaySessions
    });
  } catch (err) {
    console.error('Error fetching dashboard stats:', err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// -------------------------------------------------------------
// 2. STUDENTS (ÉLÈVES) API
// -------------------------------------------------------------
app.get('/api/students', (req, res) => {
  try {
    const { search, level_id, status, payment_status } = req.query;

    const whereClauses = [];
    const params = [];

    // Filter by Active Status
    if (status === 'inactive') {
      whereClauses.push('s.active = 0');
    } else if (status === 'all') {
      // no filter
    } else {
      whereClauses.push('s.active = 1');
    }

    if (search && search.trim()) {
      whereClauses.push("(s.first_name LIKE ? OR s.last_name LIKE ? OR (s.last_name || ' ' || s.first_name) LIKE ? OR s.matricule LIKE ? OR s.phone LIKE ? OR s.parent_phone LIKE ? OR s.parent_name LIKE ? OR pr.full_name LIKE ? OR pr.phone LIKE ?)");
      const term = `%${search.trim()}%`;
      params.push(term, term, term, term, term, term, term, term, term);
    }

    if (level_id) {
      whereClauses.push('s.level_id = ?');
      params.push(level_id);
    }

    const whereSql = whereClauses.length > 0 ? `WHERE ${whereClauses.join(' AND ')}` : '';

    const sql = `
      WITH student_enr AS (
        SELECT e.student_id,
               COUNT(*) as active_groups_count,
               COALESCE(SUM(g.price_monthly - e.discount_amount), 0) as total_billed
        FROM enrollments e
        JOIN groups g ON e.group_id = g.id
        WHERE e.status = 'active'
        GROUP BY e.student_id
      ),
      student_pay AS (
        SELECT student_id,
               COALESCE(SUM(paid_amount), 0) as total_paid
        FROM payments
        GROUP BY student_id
      )
      SELECT s.*,
             COALESCE(l.name, '-') as level_name,
             COALESCE(pr.full_name, s.parent_name) as parent_name,
             COALESCE(pr.phone, s.parent_phone) as parent_phone,
             COALESCE(pr.discount_percent, 0) as parent_discount_percent,
             COALESCE(se.active_groups_count, 0) as active_groups_count,
             COALESCE(se.total_billed, 0) as total_billed,
             COALESCE(sp.total_paid, 0) as total_paid
      FROM students s
      LEFT JOIN levels l ON s.level_id = l.id
      LEFT JOIN parents pr ON s.parent_id = pr.id
      LEFT JOIN student_enr se ON s.id = se.student_id
      LEFT JOIN student_pay sp ON s.id = sp.student_id
      ${whereSql}
      ORDER BY s.id DESC
    `;

    let students = DB.queryAll(sql, params);

    // Calculate remaining and payment status for each student
    students = students.map(s => {
      const remaining = Math.max(0, Number(s.total_billed) - Number(s.total_paid));
      const payStatus = remaining <= 0 ? 'paid' : 'unpaid';
      return {
        ...s,
        remaining_due: remaining,
        payment_status: payStatus
      };
    });

    // Filter by payment_status if requested
    if (payment_status === 'paid') {
      students = students.filter(s => s.payment_status === 'paid');
    } else if (payment_status === 'unpaid') {
      students = students.filter(s => s.payment_status === 'unpaid');
    }

    res.json({ success: true, students });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.get('/api/students/:id', (req, res) => {
  try {
    const { id } = req.params;
    const student = DB.queryOne(`
      SELECT s.*, COALESCE(l.name, '-') as level_name,
             COALESCE(pr.full_name, s.parent_name) as parent_name,
             COALESCE(pr.phone, s.parent_phone) as parent_phone,
             COALESCE(pr.discount_percent, 0) as parent_discount_percent
      FROM students s
      LEFT JOIN levels l ON s.level_id = l.id
      LEFT JOIN parents pr ON s.parent_id = pr.id
      WHERE s.id = ?
    `, [id]);

    if (!student) {
      return res.status(404).json({ success: false, error: 'Élève non trouvé' });
    }

    // 1. Enrollments with group details
    const enrollments = DB.queryAll(`
      SELECT e.id as enrollment_id, e.registration_date, e.discount_amount, e.status as enrollment_status,
             g.id as group_id, g.name as group_name, g.day_of_week, g.start_time, g.end_time, g.price_monthly,
             sub.name as subject_name, sub.color as subject_color,
             t.first_name || ' ' || t.last_name as teacher_name,
             r.name as room_name
      FROM enrollments e
      JOIN groups g ON e.group_id = g.id
      JOIN subjects sub ON g.subject_id = sub.id
      JOIN teachers t ON g.teacher_id = t.id
      LEFT JOIN rooms r ON g.room_id = r.id
      WHERE e.student_id = ?
      ORDER BY e.id DESC
    `, [id]);

    // 2. Payments history
    const payments = DB.queryAll(`
      SELECT p.*, g.name as group_name, sub.name as subject_name,
             t.first_name || ' ' || t.last_name as teacher_name
      FROM payments p
      JOIN groups g ON p.group_id = g.id
      JOIN subjects sub ON g.subject_id = sub.id
      JOIN teachers t ON g.teacher_id = t.id
      WHERE p.student_id = ?
      ORDER BY p.payment_date DESC
    `, [id]);

    // 3. Financial calculations
    const totalBilled = enrollments
      .filter(e => e.enrollment_status === 'active')
      .reduce((sum, e) => sum + (Number(e.price_monthly) - Number(e.discount_amount || 0)), 0);
    const totalPaid = payments.reduce((sum, p) => sum + Number(p.paid_amount || 0), 0);
    const remainingDue = Math.max(0, totalBilled - totalPaid);

    // 4. Attendance & Absences Stats
    const attStats = DB.queryOne(`
      SELECT 
        COUNT(*) as total_sessions,
        COALESCE(SUM(CASE WHEN status = 'present' THEN 1 ELSE 0 END), 0) as present_count,
        COALESCE(SUM(CASE WHEN status = 'late' THEN 1 ELSE 0 END), 0) as late_count,
        COALESCE(SUM(CASE WHEN status = 'absent' THEN 1 ELSE 0 END), 0) as absent_count,
        COALESCE(SUM(CASE WHEN status = 'excused' THEN 1 ELSE 0 END), 0) as excused_count
      FROM attendance
      WHERE student_id = ?
    `, [id]) || {};

    const totalSessions = attStats.total_sessions || 0;
    const presentCount = attStats.present_count || 0;
    const attendanceRate = totalSessions > 0 ? Math.round((presentCount / totalSessions) * 100) : 100;

    // 5. Canteen attendance stats
    let canteenMeals = 0;
    try {
      canteenMeals = DB.queryOne("SELECT COUNT(*) as count FROM canteen_attendance WHERE student_id = ?", [id])?.count || 0;
    } catch (e) {}

    // 6. Absences & Discipline list
    let absences = [];
    try {
      absences = DB.queryAll(`
        SELECT a.id, a.session_date as date, a.check_in_time as time, a.status,
               COALESCE(sub.name, g.name, 'Séance générale') as subject_name,
               a.notes
        FROM attendance a
        LEFT JOIN groups g ON a.group_id = g.id
        LEFT JOIN subjects sub ON g.subject_id = sub.id
        WHERE a.student_id = ? AND a.status IN ('absent', 'late', 'excused')
        ORDER BY a.session_date DESC, a.id DESC
        LIMIT 100
      `, [id]);
    } catch (e) {}

    res.json({
      success: true,
      student,
      stats: {
        total_billed: totalBilled,
        total_paid: totalPaid,
        remaining_due: remainingDue,
        payments_count: payments.length,
        enrollments_count: enrollments.filter(e => e.enrollment_status === 'active').length,
        status_text: 'Scolarisé',
        attendance_rate: attendanceRate,
        total_sessions: totalSessions,
        present_count: presentCount,
        absent_count: attStats.absent_count || 0,
        late_count: attStats.late_count || 0,
        excused_count: attStats.excused_count || 0,
        canteen_meals: canteenMeals,
        regime: student.regime || 'demi_pensionnaire',
        canteen_active: student.canteen_active !== 0
      },
      absences,
      enrollments,
      payments
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.get('/api/students/:id/attendance', (req, res) => {
  try {
    const { id } = req.params;
    const attendance = DB.queryAll(`
      SELECT a.*, g.name as group_name, sub.name as subject_name,
             t.first_name || ' ' || t.last_name as teacher_name
      FROM attendance a
      JOIN groups g ON a.group_id = g.id
      JOIN subjects sub ON g.subject_id = sub.id
      JOIN teachers t ON g.teacher_id = t.id
      WHERE a.student_id = ?
      ORDER BY a.session_date DESC, a.check_in_time DESC
    `, [id]);

    res.json({ success: true, attendance });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.patch('/api/students/:id/toggle-status', (req, res) => {
  try {
    const { id } = req.params;
    const current = DB.queryOne("SELECT active FROM students WHERE id = ?", [id]);
    if (!current) return res.status(404).json({ success: false, error: 'Élève non trouvé' });
    const newStatus = current.active === 1 ? 0 : 1;
    DB.run("UPDATE students SET active = ? WHERE id = ?", [newStatus, id]);
    res.json({ success: true, active: newStatus });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.post('/api/students', (req, res) => {
  try {
    const { matricule: customMatricule, first_name, last_name, gender, birth_date, birth_place, phone, parent_id, parent_name, parent_phone, address, level_id, notes } = req.body;
    if (!first_name || !last_name) {
      return res.status(400).json({ success: false, error: 'Nom et Prénom sont requis' });
    }

    const newStudent = DB.transaction(() => {
      let matricule = (customMatricule || '').trim();

      if (matricule) {
        const existing = DB.queryOne("SELECT id FROM students WHERE matricule = ? COLLATE NOCASE", [matricule]);
        if (existing) {
          throw new Error(`Le matricule "${matricule}" est déjà utilisé par un autre élève.`);
        }
      } else {
        const activeYearSetting = DB.queryOne("SELECT value FROM settings WHERE key = 'active_year'")?.value || '2025-2026';
        const yearMatch = activeYearSetting.match(/\d{4}$/) || [new Date().getFullYear().toString()];
        const currentYear = yearMatch[0];

        let candidateNum = (DB.queryOne("SELECT MAX(id) as max_id FROM students")?.max_id || 0) + 1;
        matricule = `EDU-${currentYear}-${String(candidateNum).padStart(4, '0')}`;
        while (DB.queryOne("SELECT id FROM students WHERE matricule = ? COLLATE NOCASE", [matricule])) {
          candidateNum++;
          matricule = `EDU-${currentYear}-${String(candidateNum).padStart(4, '0')}`;
        }
      }

      const qr_code = matricule;

      // Resolve parent linkage
      let parentId = toNullableId(parent_id);
      let pName = parent_name ? parent_name.trim() : null;
      let pPhone = parent_phone ? parent_phone.trim() : null;

      if (parentId) {
        const pRecord = DB.queryOne("SELECT full_name, phone FROM parents WHERE id = ?", [parentId]);
        if (pRecord) {
          pName = pRecord.full_name;
          if (!pPhone) pPhone = pRecord.phone;
        }
      } else if (pName) {
        let existingP = DB.queryOne("SELECT id, phone FROM parents WHERE LOWER(TRIM(full_name)) = LOWER(?)", [pName]);
        if (existingP) {
          parentId = existingP.id;
          if (!pPhone) pPhone = existingP.phone;
        } else {
          const pIns = DB.run(
            "INSERT INTO parents (full_name, phone, address, discount_percent) VALUES (?, ?, ?, 0)",
            [pName, pPhone || '', address || null]
          );
          parentId = pIns.lastInsertRowid;
        }
      }

      const result = DB.run(`
        INSERT INTO students (matricule, first_name, last_name, gender, birth_date, birth_place, phone, parent_id, parent_name, parent_phone, address, level_id, qr_code, notes)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `, [matricule, first_name.trim(), last_name.trim(), gender || 'M', birth_date || null, birth_place || null, phone || null, parentId, pName, pPhone, address || null, toNullableId(level_id), qr_code, notes || null]);

      return DB.queryOne("SELECT * FROM students WHERE id = ?", [result.lastInsertRowid]);
    });

    res.json({ success: true, student: newStudent });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});

app.put('/api/students/:id', (req, res) => {
  try {
    const { id } = req.params;
    const { matricule: customMatricule, first_name, last_name, gender, birth_date, birth_place, phone, parent_id, parent_name, parent_phone, address, level_id, notes, photo_url } = req.body;
    
    const currentStudent = DB.queryOne("SELECT * FROM students WHERE id = ?", [id]);
    if (!currentStudent) {
      return res.status(404).json({ success: false, error: 'Élève non trouvé' });
    }

    let matricule = currentStudent.matricule;
    if (customMatricule && customMatricule.trim()) {
      const cleanMatricule = customMatricule.trim();
      const existing = DB.queryOne("SELECT id FROM students WHERE matricule = ? COLLATE NOCASE AND id != ?", [cleanMatricule, id]);
      if (existing) {
        return res.status(400).json({ success: false, error: `Le matricule "${cleanMatricule}" est déjà attribué à un autre élève.` });
      }
      matricule = cleanMatricule;
    }

    // Resolve parent linkage
    let parentId = toNullableId(parent_id);
    let pName = parent_name !== undefined ? (parent_name ? parent_name.trim() : null) : currentStudent.parent_name;
    let pPhone = parent_phone !== undefined ? (parent_phone ? parent_phone.trim() : null) : currentStudent.parent_phone;

    if (parentId) {
      const pRecord = DB.queryOne("SELECT full_name, phone FROM parents WHERE id = ?", [parentId]);
      if (pRecord) {
        pName = pRecord.full_name;
        if (!pPhone) pPhone = pRecord.phone;
      }
    } else if (pName && !parentId) {
      let existingP = DB.queryOne("SELECT id, phone FROM parents WHERE LOWER(TRIM(full_name)) = LOWER(?)", [pName]);
      if (existingP) {
        parentId = existingP.id;
        if (!pPhone) pPhone = existingP.phone;
      } else {
        const pIns = DB.run(
          "INSERT INTO parents (full_name, phone, address, discount_percent) VALUES (?, ?, ?, 0)",
          [pName, pPhone || '', address || null]
        );
        parentId = pIns.lastInsertRowid;
      }
    }

    DB.run(`
      UPDATE students 
      SET matricule = ?, qr_code = ?, first_name = ?, last_name = ?, gender = ?, birth_date = ?, birth_place = ?, phone = ?, 
          parent_id = ?, parent_name = ?, parent_phone = ?, address = ?, level_id = ?, notes = ?, photo_url = COALESCE(?, photo_url)
      WHERE id = ?
    `, [matricule, matricule, first_name.trim(), last_name.trim(), gender || 'M', birth_date || null, birth_place || null, phone || null, parentId, pName, pPhone, address || null, toNullableId(level_id), notes || null, photo_url || null, id]);

    res.json({ success: true, message: 'Élève mis à jour avec succès', matricule });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.delete('/api/students/:id', (req, res) => {
  try {
    const { id } = req.params;
    DB.run("UPDATE students SET active = 0 WHERE id = ?", [id]);
    res.json({ success: true, message: 'Élève désactivé avec succès' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Batch import students (Excel, Algerian Rakmana / Tarbiya platform)
app.post('/api/students/import-batch', (req, res) => {
  try {
    const { students = [], duplicateAction = 'skip', defaultLevelId = null, defaultGroupId = null } = req.body;
    if (!Array.isArray(students) || students.length === 0) {
      return res.status(400).json({ success: false, error: 'Aucun élève fourni pour l\'importation' });
    }

    const activeYearSetting = DB.queryOne("SELECT value FROM settings WHERE key = 'active_year'")?.value || '2025-2026';
    const yearMatch = activeYearSetting.match(/\d{4}$/) || [new Date().getFullYear().toString()];
    const currentYear = yearMatch[0];

    let candidateNum = (DB.queryOne("SELECT MAX(id) as max_id FROM students")?.max_id || 0) + 1;
    function generateUniqueMatricule() {
      let cand = `EDU-${currentYear}-${String(candidateNum++).padStart(4, '0')}`;
      while (DB.queryOne("SELECT id FROM students WHERE matricule = ? COLLATE NOCASE", [cand])) {
        cand = `EDU-${currentYear}-${String(candidateNum++).padStart(4, '0')}`;
      }
      return cand;
    }

    const allLevels = DB.queryAll("SELECT id, name FROM levels");
    const allGroups = DB.queryAll("SELECT id, name, level_id FROM groups WHERE active = 1");

    let importedCount = 0;
    let updatedCount = 0;
    let skippedCount = 0;
    const errors = [];
    const processed = [];

    DB.exec('BEGIN IMMEDIATE;');

    try {
      for (let i = 0; i < students.length; i++) {
        const item = students[i];
        const firstName = (item.first_name || '').trim();
        const lastName = (item.last_name || '').trim();

        if (!firstName && !lastName) {
          errors.push({ row: i + 1, error: 'الاسم واللقب فارغان' });
          continue;
        }

        // Normalize gender ('M' or 'F')
        let gender = 'M';
        const rawGender = String(item.gender || '').trim().toLowerCase();
        if (rawGender.includes('أنث') || rawGender.includes('انث') || rawGender === 'f' || rawGender.includes('fille') || rawGender.includes('femme')) {
          gender = 'F';
        }

        // Resolve birth date (accepts YYYY-MM-DD or DD/MM/YYYY)
        let birthDate = item.birth_date ? String(item.birth_date).trim() : null;
        if (birthDate && birthDate.includes('/')) {
          const parts = birthDate.split('/');
          if (parts.length === 3) {
            if (parts[2].length === 4) {
              birthDate = `${parts[2]}-${parts[1].padStart(2, '0')}-${parts[0].padStart(2, '0')}`;
            }
          }
        }

        const birthPlace = (item.birth_place || '').trim() || null;
        const parentName = (item.parent_name || '').trim() || null;
        const parentPhone = (item.parent_phone || item.phone || '').trim() || null;
        const phone = (item.phone || '').trim() || null;
        const address = (item.address || '').trim() || null;
        
        let notes = (item.notes || '').trim();
        if (item.statut && !notes.includes(item.statut)) {
          notes = notes ? `${notes} | الصفة: ${item.statut}` : `الصفة: ${item.statut}`;
        }
        if (item.raw_group && !notes.includes(item.raw_group)) {
          notes = notes ? `${notes} | الفوج المدرسي: ${item.raw_group}` : `الفوج المدرسي: ${item.raw_group}`;
        }
        notes = notes || null;

        // Resolve level
        let levelId = toNullableId(item.level_id) || toNullableId(defaultLevelId);
        if (!levelId && item.level_name) {
          const rawL = item.level_name.trim().toLowerCase();
          let matchedL = allLevels.find(l => {
            const dbL = l.name.toLowerCase();
            return dbL === rawL || rawL.includes(dbL) || dbL.includes(rawL);
          });
          if (!matchedL) {
            if (rawL.includes('1am') || rawL.includes('1 am') || (rawL.includes('1') && rawL.includes('متوسط'))) {
              matchedL = allLevels.find(l => l.name.includes('1AM'));
            } else if (rawL.includes('2am') || rawL.includes('2 am') || (rawL.includes('2') && rawL.includes('متوسط'))) {
              matchedL = allLevels.find(l => l.name.includes('2AM'));
            } else if (rawL.includes('3am') || rawL.includes('3 am') || (rawL.includes('3') && rawL.includes('متوسط'))) {
              matchedL = allLevels.find(l => l.name.includes('3AM'));
            } else if (rawL.includes('4am') || rawL.includes('4 am') || (rawL.includes('4') && rawL.includes('متوسط')) || rawL.includes('bem') || rawL.includes('بيام')) {
              matchedL = allLevels.find(l => l.name.includes('4AM') || l.name.includes('BEM'));
            } else if (rawL.includes('1as') || rawL.includes('1 as') || (rawL.includes('1') && rawL.includes('ثانوي'))) {
              matchedL = allLevels.find(l => l.name.includes('1AS'));
            } else if (rawL.includes('2as') || rawL.includes('2 as') || (rawL.includes('2') && rawL.includes('ثانوي'))) {
              matchedL = allLevels.find(l => l.name.includes('2AS'));
            } else if (rawL.includes('3as') || rawL.includes('3 as') || (rawL.includes('3') && rawL.includes('ثانوي')) || rawL.includes('bac') || rawL.includes('باك')) {
              matchedL = allLevels.find(l => l.name.includes('3AS') || l.name.includes('BAC'));
            } else if (rawL.includes('1ap') || (rawL.includes('1') && rawL.includes('ابتدائي'))) {
              matchedL = allLevels.find(l => l.name.includes('1AP'));
            } else if (rawL.includes('2ap') || (rawL.includes('2') && rawL.includes('ابتدائي'))) {
              matchedL = allLevels.find(l => l.name.includes('2AP'));
            } else if (rawL.includes('3ap') || (rawL.includes('3') && rawL.includes('ابتدائي'))) {
              matchedL = allLevels.find(l => l.name.includes('3AP'));
            } else if (rawL.includes('4ap') || (rawL.includes('4') && rawL.includes('ابتدائي'))) {
              matchedL = allLevels.find(l => l.name.includes('4AP'));
            } else if (rawL.includes('5ap') || (rawL.includes('5') && rawL.includes('ابتدائي'))) {
              matchedL = allLevels.find(l => l.name.includes('5AP'));
            }
          }
          if (matchedL) levelId = matchedL.id;
        }

        // Resolve group
        let groupId = toNullableId(item.group_id) || toNullableId(defaultGroupId);
        if (!groupId && item.group_name) {
          const cleanGName = String(item.group_name).trim().toLowerCase();
          const matchedG = allGroups.find(g => g.name.toLowerCase() === cleanGName || g.name.toLowerCase().includes(cleanGName) || (cleanGName.match(/\d+/) && g.name.includes(cleanGName.match(/\d+/)[0])));
          if (matchedG) groupId = matchedG.id;
        }

        let customMatricule = (item.matricule ? String(item.matricule).trim() : '');

        // Duplicate lookup: First by matricule if available, otherwise by (first_name + last_name + birth_date)
        let existingStudent = null;
        if (customMatricule) {
          existingStudent = DB.queryOne("SELECT * FROM students WHERE matricule = ? COLLATE NOCASE", [customMatricule]);
        }
        if (!existingStudent && firstName && lastName && birthDate) {
          existingStudent = DB.queryOne(
            "SELECT * FROM students WHERE LOWER(TRIM(first_name)) = LOWER(?) AND LOWER(TRIM(last_name)) = LOWER(?) AND birth_date = ?",
            [firstName, lastName, birthDate]
          );
        }

        let studentId = null;

        if (existingStudent) {
          // If the student was archived/deleted (active = 0), reactivate and update them!
          if (existingStudent.active === 0) {
            studentId = existingStudent.id;
            const updatedMatricule = customMatricule || existingStudent.matricule;
            DB.run(`
              UPDATE students
              SET active = 1,
                  first_name = ?, last_name = ?, gender = ?,
                  birth_date = COALESCE(?, birth_date),
                  birth_place = COALESCE(?, birth_place),
                  phone = COALESCE(?, phone),
                  parent_name = COALESCE(?, parent_name),
                  parent_phone = COALESCE(?, parent_phone),
                  address = COALESCE(?, address),
                  level_id = COALESCE(?, level_id),
                  notes = CASE WHEN ? IS NOT NULL THEN (COALESCE(notes || ' | ', '') || ?) ELSE notes END
              WHERE id = ?
            `, [
              firstName, lastName, gender,
              birthDate, birthPlace, phone, parentName, parentPhone, address,
              toNullableId(levelId), notes, notes, studentId
            ]);
            importedCount++;
            processed.push({ id: studentId, matricule: updatedMatricule, first_name: firstName, last_name: lastName, action: 'created' });
          } else if (duplicateAction === 'skip') {
            skippedCount++;
            processed.push({ id: existingStudent.id, matricule: existingStudent.matricule, first_name: firstName, last_name: lastName, action: 'skipped' });
            continue;
          } else {
            // Update existing active student
            studentId = existingStudent.id;
            const updatedMatricule = customMatricule || existingStudent.matricule;
            DB.run(`
              UPDATE students
              SET active = 1,
                  first_name = ?, last_name = ?, gender = ?,
                  birth_date = COALESCE(?, birth_date),
                  birth_place = COALESCE(?, birth_place),
                  phone = COALESCE(?, phone),
                  parent_name = COALESCE(?, parent_name),
                  parent_phone = COALESCE(?, parent_phone),
                  address = COALESCE(?, address),
                  level_id = COALESCE(?, level_id),
                  notes = CASE WHEN ? IS NOT NULL THEN (COALESCE(notes || ' | ', '') || ?) ELSE notes END
              WHERE id = ?
            `, [
              firstName, lastName, gender,
              birthDate, birthPlace, phone, parentName, parentPhone, address,
              toNullableId(levelId), notes, notes, studentId
            ]);
            updatedCount++;
            processed.push({ id: studentId, matricule: updatedMatricule, first_name: firstName, last_name: lastName, action: 'updated' });
          }
        } else {
          // Insert new
          const finalMatricule = customMatricule || generateUniqueMatricule();
          const qrCode = finalMatricule;

          const resInsert = DB.run(`
            INSERT INTO students (matricule, first_name, last_name, gender, birth_date, birth_place, phone, parent_name, parent_phone, address, level_id, qr_code, notes, active)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1)
          `, [
            finalMatricule, firstName, lastName, gender,
            birthDate, birthPlace, phone, parentName, parentPhone, address,
            toNullableId(levelId), qrCode, notes
          ]);

          studentId = resInsert.lastInsertRowid;
          importedCount++;
          processed.push({ id: studentId, matricule: finalMatricule, first_name: firstName, last_name: lastName, action: 'created' });
        }

        // Automatic group enrollment if group resolved
        if (groupId && studentId) {
          const isEnrolled = DB.queryOne("SELECT id FROM enrollments WHERE student_id = ? AND group_id = ? AND status = 'active'", [studentId, groupId]);
          if (!isEnrolled) {
            DB.run(`
              INSERT INTO enrollments (student_id, group_id, school_year, registration_date, status, discount_amount)
              VALUES (?, ?, ?, DATE('now'), 'active', 0)
            `, [studentId, groupId, activeYearSetting]);
          }
        }
      }

      DB.exec('COMMIT');
    } catch (loopErr) {
      DB.exec('ROLLBACK');
      throw loopErr;
    }

    res.json({
      success: true,
      total: students.length,
      imported: importedCount,
      updated: updatedCount,
      skipped: skippedCount,
      errors,
      processed
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// -------------------------------------------------------------
// 2.5 PARENTS & FAMILIES (أولياء التلاميذ) API
// -------------------------------------------------------------
app.get('/api/parents', (req, res) => {
  try {
    const { search, active } = req.query;
    let sql = `
      SELECT p.*,
             (SELECT COUNT(*) FROM students WHERE parent_id = p.id AND active = 1) as children_count
      FROM parents p
      WHERE 1=1
    `;
    const params = [];
    if (active !== undefined && active !== 'all') {
      sql += ' AND p.active = ?';
      params.push(parseInt(active) || 1);
    } else {
      sql += ' AND p.active = 1';
    }

    if (search && search.trim()) {
      sql += ` AND (
        p.full_name LIKE ? OR p.phone LIKE ? OR p.phone_secondary LIKE ? OR p.address LIKE ?
        OR EXISTS (
          SELECT 1 FROM students s 
          WHERE s.parent_id = p.id AND (
            s.first_name LIKE ? OR s.last_name LIKE ? OR 
            (s.last_name || ' ' || s.first_name) LIKE ? OR s.matricule LIKE ?
          )
        )
      )`;
      const term = `%${search.trim()}%`;
      params.push(term, term, term, term, term, term, term, term);
    }
    sql += ' ORDER BY p.id DESC';

    const parents = DB.queryAll(sql, params);

    // Enrich each parent with children summary and total family financial stats
    parents.forEach(p => {
      const children = DB.queryAll(`
        SELECT s.id, s.matricule, s.first_name, s.last_name, s.gender, s.phone, s.level_id, s.photo_url,
               COALESCE(l.name, '-') as level_name,
               (SELECT COUNT(*) FROM enrollments WHERE student_id = s.id AND status = 'active') as groups_count,
               COALESCE((
                 SELECT SUM(g.price_monthly - e.discount_amount) 
                 FROM enrollments e 
                 JOIN groups g ON e.group_id = g.id 
                 WHERE e.student_id = s.id AND e.status = 'active'
               ), 0) as total_billed,
               COALESCE((
                 SELECT SUM(paid_amount) 
                 FROM payments 
                 WHERE student_id = s.id
               ), 0) as total_paid
        FROM students s
        LEFT JOIN levels l ON s.level_id = l.id
        WHERE s.parent_id = ? AND s.active = 1
        ORDER BY s.first_name ASC
      `, [p.id]);

      p.children = children;
      p.children_count = children.length;
      p.total_billed = children.reduce((sum, c) => sum + Number(c.total_billed || 0), 0);
      p.total_paid = children.reduce((sum, c) => sum + Number(c.total_paid || 0), 0);
      p.total_debt = Math.max(0, p.total_billed - p.total_paid);
    });

    res.json({ success: true, parents });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.get('/api/parents/:id', (req, res) => {
  try {
    const { id } = req.params;
    const parent = DB.queryOne("SELECT * FROM parents WHERE id = ?", [id]);
    if (!parent) return res.status(404).json({ success: false, error: 'Parent introuvable' });

    const children = DB.queryAll(`
      SELECT DISTINCT s.*, COALESCE(l.name, '-') as level_name
      FROM students s
      LEFT JOIN levels l ON s.level_id = l.id
      WHERE (s.parent_id = ? OR (s.parent_name IS NOT NULL AND LOWER(TRIM(s.parent_name)) = LOWER(TRIM(?)))) AND s.active = 1
      ORDER BY s.first_name ASC
    `, [id, parent.full_name]);

    // For each child, get their enrollments and payments
    children.forEach(c => {
      c.parent_discount_percent = parent.discount_percent || 0;
      c.enrollments = DB.queryAll(`
        SELECT e.*, g.name as group_name, g.price_monthly, sub.name as subject_name, sub.color as subject_color,
               t.first_name || ' ' || t.last_name as teacher_name
        FROM enrollments e
        JOIN groups g ON e.group_id = g.id
        JOIN subjects sub ON g.subject_id = sub.id
        JOIN teachers t ON g.teacher_id = t.id
        WHERE e.student_id = ? AND e.status = 'active'
      `, [c.id]);

      c.payments = DB.queryAll(`
        SELECT p.*, g.name as group_name, sub.name as subject_name
        FROM payments p
        JOIN groups g ON p.group_id = g.id
        JOIN subjects sub ON g.subject_id = sub.id
        WHERE p.student_id = ?
        ORDER BY p.payment_date DESC
      `, [c.id]);

      const billed = c.enrollments.reduce((sum, e) => sum + (Number(e.price_monthly) - Number(e.discount_amount || 0)), 0);
      const paid = c.payments.reduce((sum, p) => sum + Number(p.paid_amount || 0), 0);
      c.total_billed = billed;
      c.total_paid = paid;
      c.total_debt = Math.max(0, billed - paid);
    });

    const totalBilled = children.reduce((sum, c) => sum + c.total_billed, 0);
    const totalPaid = children.reduce((sum, c) => sum + c.total_paid, 0);
    const totalDebt = Math.max(0, totalBilled - totalPaid);

    // Collect unpaid enrollments for all children of this parent
    const childIds = children.map(c => c.id);
    let unpaid = [];
    if (childIds.length > 0) {
      const placeholders = childIds.map(() => '?').join(',');
      unpaid = DB.queryAll(`
        SELECT e.student_id, (s.first_name || ' ' || s.last_name) as student_name,
               g.name as group_name, sub.name as subject_name,
               strftime('%Y-%m', 'now') as paid_month,
               (g.price_monthly - e.discount_amount) as amount_due
        FROM enrollments e
        JOIN students s ON e.student_id = s.id
        JOIN groups g ON e.group_id = g.id
        JOIN subjects sub ON g.subject_id = sub.id
        WHERE e.student_id IN (${placeholders}) AND e.status = 'active'
          AND NOT EXISTS (
            SELECT 1 FROM payments p 
            WHERE p.student_id = e.student_id AND p.group_id = e.group_id 
              AND strftime('%Y-%m', p.payment_date) = strftime('%Y-%m', 'now')
              AND (p.remaining_amount = 0 OR p.remaining_amount IS NULL)
          )
      `, childIds);
    }

    res.json({
      success: true,
      parent: {
        ...parent,
        children_count: children.length,
        total_billed: totalBilled,
        total_paid: totalPaid,
        total_debt: totalDebt
      },
      children,
      unpaid
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.post('/api/parents', (req, res) => {
  try {
    const { full_name, phone, phone_secondary, email, address, discount_percent, notes } = req.body;
    if (!full_name || !full_name.trim()) {
      return res.status(400).json({ success: false, error: 'Nom complet du parent requis' });
    }
    if (!phone || !phone.trim()) {
      return res.status(400).json({ success: false, error: 'Numéro de téléphone requis' });
    }

    const disc = Math.min(100, Math.max(0, parseFloat(discount_percent) || 0));

    const result = DB.run(`
      INSERT INTO parents (full_name, phone, phone_secondary, email, address, discount_percent, notes, active)
      VALUES (?, ?, ?, ?, ?, ?, ?, 1)
    `, [full_name.trim(), phone.trim(), phone_secondary?.trim() || null, email?.trim() || null, address?.trim() || null, disc, notes?.trim() || null]);

    const newParent = DB.queryOne("SELECT * FROM parents WHERE id = ?", [result.lastInsertRowid]);
    res.json({ success: true, parent: newParent, message: 'Parent enregistré avec succès' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.put('/api/parents/:id', (req, res) => {
  try {
    const { id } = req.params;
    const { full_name, phone, phone_secondary, email, address, discount_percent, notes } = req.body;
    if (!full_name || !full_name.trim()) {
      return res.status(400).json({ success: false, error: 'Nom complet du parent requis' });
    }

    const disc = Math.min(100, Math.max(0, parseFloat(discount_percent) || 0));

    DB.run(`
      UPDATE parents
      SET full_name = ?, phone = ?, phone_secondary = ?, email = ?, address = ?, discount_percent = ?, notes = ?
      WHERE id = ?
    `, [full_name.trim(), phone?.trim() || '', phone_secondary?.trim() || null, email?.trim() || null, address?.trim() || null, disc, notes?.trim() || null, id]);

    // Update parent_name and parent_phone on linked students
    DB.run(`
      UPDATE students
      SET parent_name = ?, parent_phone = ?
      WHERE parent_id = ?
    `, [full_name.trim(), phone?.trim() || '', id]);

    res.json({ success: true, message: 'Parent mis à jour avec succès' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.delete('/api/parents/:id', (req, res) => {
  try {
    const { id } = req.params;
    DB.run("UPDATE students SET parent_id = NULL WHERE parent_id = ?", [id]);
    DB.run("UPDATE parents SET active = 0 WHERE id = ?", [id]);
    res.json({ success: true, message: 'Parent supprimé avec succès' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Dedicated Echéances & Unpaid debts with parent and discount details
app.get('/api/echeances', (req, res) => {
  try {
    const { search, month } = req.query;
    const now = new Date();
    const currentMonthStr = month || `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;

    let sql = `
      SELECT s.id as student_id, s.matricule, s.first_name, s.last_name, (s.first_name || ' ' || s.last_name) as student_name, s.phone as student_phone,
             s.photo_url, COALESCE(l.name, '-') as level_name,
             COALESCE(pr.full_name, s.parent_name, '-') as parent_name,
             COALESCE(pr.phone, s.parent_phone, '-') as parent_phone,
             COALESCE(pr.discount_percent, 0) as parent_discount_percent,
             g.id as group_id, g.name as group_name, g.price_monthly,
             sub.name as subject_name, sub.color as subject_color,
             t.first_name || ' ' || t.last_name as teacher_name,
             (g.price_monthly - e.discount_amount) as amount_due,
             e.discount_amount
      FROM enrollments e
      JOIN students s ON e.student_id = s.id
      JOIN groups g ON e.group_id = g.id
      JOIN subjects sub ON g.subject_id = sub.id
      JOIN teachers t ON g.teacher_id = t.id
      LEFT JOIN levels l ON s.level_id = l.id
      LEFT JOIN parents pr ON s.parent_id = pr.id
      WHERE e.status = 'active' AND s.active = 1
        AND NOT EXISTS (
          SELECT 1 FROM payments p 
          WHERE p.student_id = e.student_id 
            AND p.group_id = e.group_id 
            AND (p.month_period = ? OR strftime('%Y-%m', p.payment_date) = ?)
            AND (p.remaining_amount = 0 OR p.remaining_amount IS NULL)
        )
    `;
    const params = [currentMonthStr, currentMonthStr];

    if (search && search.trim()) {
      sql += ` AND (
        s.first_name LIKE ? OR s.last_name LIKE ? OR (s.last_name || ' ' || s.first_name) LIKE ?
        OR s.matricule LIKE ? OR s.phone LIKE ? OR s.parent_phone LIKE ?
        OR pr.full_name LIKE ? OR pr.phone LIKE ? OR s.parent_name LIKE ?
        OR g.name LIKE ? OR sub.name LIKE ?
      )`;
      const term = `%${search.trim()}%`;
      params.push(term, term, term, term, term, term, term, term, term, term, term);
    }

    sql += ` ORDER BY s.last_name ASC, s.first_name ASC`;
    const unpaidList = DB.queryAll(sql, params);

    res.json({ success: true, month: currentMonthStr, unpaid: unpaidList, echeances: unpaidList });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// -------------------------------------------------------------
// 3. GROUPS & ENROLLMENTS API
// -------------------------------------------------------------
app.get('/api/groups', (req, res) => {
  try {
    const { status } = req.query;
    let whereClause = "WHERE g.active = 1";
    if (status === 'all') {
      whereClause = "";
    } else if (status === 'inactive') {
      whereClause = "WHERE g.active = 0";
    }

    const groups = DB.queryAll(`
      SELECT g.*, 
             COALESCE(l.name, 'Sans niveau') as level_name, 
             COALESCE(sub.name, 'Sans matière') as subject_name, 
             COALESCE(sub.color, '#3b82f6') as subject_color,
             COALESCE(t.first_name || ' ' || t.last_name, 'Non assigné') as teacher_name,
             COALESCE(r.name, '-') as room_name,
             (SELECT COUNT(*) FROM enrollments WHERE group_id = g.id AND status = 'active') as enrolled_count
      FROM groups g
      LEFT JOIN levels l ON g.level_id = l.id
      LEFT JOIN subjects sub ON g.subject_id = sub.id
      LEFT JOIN teachers t ON g.teacher_id = t.id
      LEFT JOIN rooms r ON g.room_id = r.id
      ${whereClause}
      ORDER BY g.id DESC
    `);

    // Calculate summary statistics across active groups
    const statsRow = DB.queryOne(`
      SELECT 
        COUNT(DISTINCT g.id) as active_groups_count,
        COALESCE(SUM(g.max_students), 0) as total_capacity,
        (
          SELECT COUNT(*) 
          FROM enrollments e 
          JOIN groups g2 ON e.group_id = g2.id 
          WHERE e.status = 'active' AND g2.active = 1
        ) as total_enrolled
      FROM groups g
      WHERE g.active = 1
    `);

    const activeCount = statsRow?.active_groups_count || 0;
    const totalCapacity = statsRow?.total_capacity || 0;
    const totalEnrolled = statsRow?.total_enrolled || 0;
    const fillRate = totalCapacity > 0 ? Math.min(100, Math.round((totalEnrolled / totalCapacity) * 100)) : 0;

    res.json({ 
      success: true, 
      groups,
      stats: {
        active_groups_count: activeCount,
        total_capacity: totalCapacity,
        total_enrolled: totalEnrolled,
        fill_rate: fillRate
      }
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.get('/api/groups/:id/students', (req, res) => {
  try {
    const { id } = req.params;
    const group = DB.queryOne(`
      SELECT g.*, l.name as level_name, sub.name as subject_name,
             t.first_name || ' ' || t.last_name as teacher_name,
             r.name as room_name
      FROM groups g
      LEFT JOIN levels l ON g.level_id = l.id
      LEFT JOIN subjects sub ON g.subject_id = sub.id
      LEFT JOIN teachers t ON g.teacher_id = t.id
      LEFT JOIN rooms r ON g.room_id = r.id
      WHERE g.id = ?
    `, [id]);

    if (!group) return res.status(404).json({ success: false, error: 'Groupe introuvable' });

    const students = DB.queryAll(`
      SELECT e.id as enrollment_id, e.registration_date, e.discount_amount, e.status as enrollment_status,
             s.id as student_id, s.matricule, s.first_name, s.last_name, s.phone, s.parent_phone,
             (SELECT COUNT(*) FROM payments WHERE student_id = s.id AND group_id = ?) as payments_count
      FROM enrollments e
      JOIN students s ON e.student_id = s.id
      WHERE e.group_id = ?
      ORDER BY s.last_name ASC
    `, [id, id]);

    res.json({ success: true, group, students });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.patch('/api/groups/:id/toggle-status', (req, res) => {
  try {
    const { id } = req.params;
    const current = DB.queryOne("SELECT active FROM groups WHERE id = ?", [id]);
    if (!current) return res.status(404).json({ success: false, error: 'Groupe non trouvé' });
    const newStatus = current.active === 1 ? 0 : 1;
    DB.run("UPDATE groups SET active = ? WHERE id = ?", [newStatus, id]);
    res.json({ success: true, active: newStatus });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Schedule & Room Conflict Checking Helper
function checkScheduleConflicts({ day_of_week, start_time, end_time, room_id, teacher_id, exclude_group_id }) {
  if (!day_of_week || !start_time || !end_time) return [];

  // Overlap condition: existing.start_time < new.end_time AND existing.end_time > new.start_time
  let sql = `
    SELECT g.*, r.name as room_name, t.first_name || ' ' || t.last_name as teacher_name, sub.name as subject_name
    FROM groups g
    LEFT JOIN rooms r ON g.room_id = r.id
    LEFT JOIN teachers t ON g.teacher_id = t.id
    LEFT JOIN subjects sub ON g.subject_id = sub.id
    WHERE g.active = 1
      AND g.day_of_week = ?
      AND g.start_time < ?
      AND g.end_time > ?
  `;
  const params = [day_of_week, end_time, start_time];

  if (exclude_group_id) {
    sql += ` AND g.id != ?`;
    params.push(Number(exclude_group_id));
  }

  const overlapping = DB.queryAll(sql, params);
  const conflicts = [];

  const targetRoomId = room_id ? Number(room_id) : null;
  const targetTeacherId = teacher_id ? Number(teacher_id) : null;

  overlapping.forEach(other => {
    if (targetRoomId && other.room_id === targetRoomId) {
      conflicts.push({
        type: 'room',
        group_id: other.id,
        group_name: other.name,
        room_name: other.room_name,
        message: `La salle « ${other.room_name} » est déjà occupée le ${day_of_week} de ${other.start_time} à ${other.end_time} par « ${other.name} »`
      });
    }
    if (targetTeacherId && other.teacher_id === targetTeacherId) {
      conflicts.push({
        type: 'teacher',
        group_id: other.id,
        group_name: other.name,
        teacher_name: other.teacher_name,
        message: `L'enseignant « ${other.teacher_name} » a déjà une séance le ${day_of_week} de ${other.start_time} à ${other.end_time} avec « ${other.name} »`
      });
    }
  });

  return conflicts;
}

app.post('/api/planning/check-conflicts', (req, res) => {
  try {
    const { day_of_week, start_time, end_time, room_id, teacher_id, exclude_group_id } = req.body;
    const conflicts = checkScheduleConflicts({
      day_of_week,
      start_time,
      end_time,
      room_id: toNullableId(room_id),
      teacher_id: toNullableId(teacher_id),
      exclude_group_id: toNullableId(exclude_group_id)
    });
    res.json({ success: true, hasConflicts: conflicts.length > 0, conflicts });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.get('/api/planning/rooms-availability', (req, res) => {
  try {
    const day_of_week = req.query.day_of_week || req.query.day;
    const { start_time, end_time, exclude_group_id } = req.query;
    const rooms = DB.queryAll("SELECT * FROM rooms ORDER BY name ASC");

    if (!day_of_week || !start_time || !end_time) {
      return res.json({
        success: true,
        rooms: rooms.map(r => ({ ...r, is_available: true, conflict: null }))
      });
    }

    let sql = `
      SELECT g.*, r.id as room_id, r.name as room_name,
             t.first_name || ' ' || t.last_name as teacher_name,
             sub.name as subject_name
      FROM groups g
      JOIN rooms r ON g.room_id = r.id
      LEFT JOIN teachers t ON g.teacher_id = t.id
      LEFT JOIN subjects sub ON g.subject_id = sub.id
      WHERE g.active = 1
        AND g.day_of_week = ?
        AND g.start_time < ?
        AND g.end_time > ?
    `;
    const params = [day_of_week, end_time, start_time];
    if (exclude_group_id) {
      sql += ` AND g.id != ?`;
      params.push(Number(exclude_group_id));
    }
    const busyRooms = DB.queryAll(sql, params);
    const busyMap = {};
    busyRooms.forEach(b => { busyMap[b.room_id] = b; });

    const result = rooms.map(room => ({
      ...room,
      is_available: !busyMap[room.id],
      conflict: busyMap[room.id] || null
    }));

    res.json({ success: true, rooms: result });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.post('/api/groups', (req, res) => {
  try {
    const { name, level_id, subject_id, teacher_id, room_id, day_of_week, start_time, end_time, price_monthly, max_students, force } = req.body;

    if (!force) {
      const conflicts = checkScheduleConflicts({
        day_of_week,
        start_time,
        end_time,
        room_id: toNullableId(room_id),
        teacher_id: toNullableId(teacher_id)
      });
      if (conflicts.length > 0) {
        return res.status(409).json({
          success: false,
          error: conflicts[0].message,
          conflicts
        });
      }
    }

    const result = DB.run(`
      INSERT INTO groups (name, level_id, subject_id, teacher_id, room_id, day_of_week, start_time, end_time, price_monthly, max_students)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `, [name, toNullableId(level_id), toNullableId(subject_id), toNullableId(teacher_id), toNullableId(room_id), day_of_week, start_time, end_time, parseFloat(price_monthly) || 2000, parseInt(max_students) || 25]);
    res.json({ success: true, groupId: result.lastInsertRowid });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.put('/api/groups/:id', (req, res) => {
  try {
    const { id } = req.params;
    const { name, level_id, subject_id, teacher_id, room_id, day_of_week, start_time, end_time, price_monthly, max_students, force } = req.body;

    if (!force) {
      const conflicts = checkScheduleConflicts({
        day_of_week,
        start_time,
        end_time,
        room_id: toNullableId(room_id),
        teacher_id: toNullableId(teacher_id),
        exclude_group_id: Number(id)
      });
      if (conflicts.length > 0) {
        return res.status(409).json({
          success: false,
          error: conflicts[0].message,
          conflicts
        });
      }
    }

    DB.run(`
      UPDATE groups
      SET name = ?, level_id = ?, subject_id = ?, teacher_id = ?, room_id = ?, 
          day_of_week = ?, start_time = ?, end_time = ?, price_monthly = ?, max_students = ?
      WHERE id = ?
    `, [name, toNullableId(level_id), toNullableId(subject_id), toNullableId(teacher_id), toNullableId(room_id), day_of_week, start_time, end_time, parseFloat(price_monthly) || 2000, parseInt(max_students) || 25, id]);
    res.json({ success: true, message: 'Groupe mis à jour avec succès' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.get('/api/enrollments', (req, res) => {
  try {
    const { search, group_id, status, school_year } = req.query;
    let sql = `
      SELECT 
        e.id, e.student_id, e.group_id, e.school_year, e.registration_date, e.discount_amount, e.status,
        s.first_name, s.last_name, s.matricule, s.phone, s.photo_url, s.level_id,
        l.name as level_name,
        g.name as group_name, g.price_monthly,
        sub.name as subject_name,
        TRIM(COALESCE(t.first_name, '') || ' ' || COALESCE(t.last_name, '')) as teacher_name
      FROM enrollments e
      JOIN students s ON e.student_id = s.id
      JOIN groups g ON e.group_id = g.id
      LEFT JOIN levels l ON s.level_id = l.id
      LEFT JOIN subjects sub ON g.subject_id = sub.id
      LEFT JOIN teachers t ON g.teacher_id = t.id
      WHERE 1=1
    `;
    const params = [];
    if (status && status !== 'all') {
      sql += ` AND e.status = ?`;
      params.push(status);
    }
    if (group_id && group_id !== 'all') {
      sql += ` AND e.group_id = ?`;
      params.push(group_id);
    }
    if (school_year && school_year !== 'all') {
      sql += ` AND e.school_year = ?`;
      params.push(school_year);
    }
    if (search && search.trim()) {
      const term = `%${search.trim()}%`;
      sql += ` AND (
        s.first_name LIKE ? OR 
        s.last_name LIKE ? OR 
        s.matricule LIKE ? OR 
        s.phone LIKE ? OR 
        g.name LIKE ? OR 
        sub.name LIKE ? OR 
        t.first_name LIKE ? OR 
        t.last_name LIKE ?
      )`;
      params.push(term, term, term, term, term, term, term, term);
    }
    sql += ` ORDER BY e.id DESC`;
    const rows = DB.queryAll(sql, params);
    res.json({ success: true, enrollments: rows });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.post('/api/enrollments', (req, res) => {
  try {
    const { student_id, group_id, school_year, discount_amount } = req.body;
    const year = school_year || '2025-2026';
    
    const result = DB.transaction(() => {
      const existing = DB.queryOne("SELECT id FROM enrollments WHERE student_id = ? AND group_id = ? AND school_year = ?", [student_id, group_id, year]);
      if (existing) {
        throw new Error('Cet élève est déjà inscrit dans ce groupe.');
      }

      return DB.run(`
        INSERT INTO enrollments (student_id, group_id, school_year, discount_amount, status)
        VALUES (?, ?, ?, ?, 'active')
      `, [student_id, group_id, year, discount_amount || 0]);
    });

    res.json({ success: true, enrollmentId: result.lastInsertRowid });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});

app.delete('/api/enrollments/:id', (req, res) => {
  try {
    const { id } = req.params;
    const { permanent } = req.query;
    if (permanent === 'true' || permanent === '1') {
      DB.run("DELETE FROM enrollments WHERE id = ?", [id]);
      return res.json({ success: true, message: 'Inscription supprimée définitivement' });
    }
    DB.run("UPDATE enrollments SET status = 'cancelled' WHERE id = ?", [id]);
    res.json({ success: true, message: 'Inscription annulée avec succès' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.patch('/api/enrollments/:id/reactivate', (req, res) => {
  try {
    const { id } = req.params;
    DB.run("UPDATE enrollments SET status = 'active' WHERE id = ?", [id]);
    res.json({ success: true, message: 'Inscription réactivée avec succès' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Batch enrollment (Multi-students into Multi-groups)
app.post('/api/enrollments/batch', (req, res) => {
  try {
    const { student_ids = [], group_ids = [], school_year, discount_amount = 0, registration_date } = req.body;
    if (!Array.isArray(student_ids) || student_ids.length === 0) {
      return res.status(400).json({ success: false, error: 'Veuillez sélectionner au moins un élève.' });
    }
    if (!Array.isArray(group_ids) || group_ids.length === 0) {
      return res.status(400).json({ success: false, error: 'Veuillez sélectionner au moins un groupe.' });
    }

    const activeYearSetting = school_year || DB.queryOne("SELECT value FROM settings WHERE key = 'active_year'")?.value || '2025-2026';
    const regDate = registration_date || new Date().toISOString().split('T')[0];
    const discount = parseFloat(discount_amount) || 0;

    let enrolledCount = 0;
    let reactivatedCount = 0;
    let alreadyActiveCount = 0;
    const details = [];

    DB.exec('BEGIN IMMEDIATE;');

    try {
      for (const studentId of student_ids) {
        for (const groupId of group_ids) {
          const existing = DB.queryOne("SELECT id, status FROM enrollments WHERE student_id = ? AND group_id = ? AND school_year = ?", [studentId, groupId, activeYearSetting]);

          if (existing) {
            if (existing.status === 'active') {
              alreadyActiveCount++;
              details.push({ student_id: studentId, group_id: groupId, status: 'already_active' });
            } else {
              DB.run("UPDATE enrollments SET status = 'active', discount_amount = ?, registration_date = ? WHERE id = ?", [discount, regDate, existing.id]);
              reactivatedCount++;
              details.push({ student_id: studentId, group_id: groupId, status: 'reactivated' });
            }
          } else {
            DB.run(`
              INSERT INTO enrollments (student_id, group_id, school_year, registration_date, discount_amount, status)
              VALUES (?, ?, ?, ?, ?, 'active')
            `, [studentId, groupId, activeYearSetting, regDate, discount]);
            enrolledCount++;
            details.push({ student_id: studentId, group_id: groupId, status: 'enrolled' });
          }
        }
      }

      DB.exec('COMMIT');
    } catch (loopErr) {
      DB.exec('ROLLBACK');
      throw loopErr;
    }

    res.json({
      success: true,
      totalStudents: student_ids.length,
      totalGroups: group_ids.length,
      totalCombinations: student_ids.length * group_ids.length,
      enrolled: enrolledCount,
      reactivated: reactivatedCount,
      alreadyActive: alreadyActiveCount,
      details
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// -------------------------------------------------------------
// 4. PAYMENTS & RECEIPTS API
// -------------------------------------------------------------
app.get('/api/payments/months', (req, res) => {
  try {
    const rows = DB.queryAll(`
      SELECT month_period, COUNT(*) as count, COALESCE(SUM(paid_amount), 0) as total_amount
      FROM payments
      GROUP BY month_period
      ORDER BY month_period DESC
    `);
    res.json({ success: true, months: rows });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.get('/api/payments', (req, res) => {
  try {
    const { search, month, months, from_month, to_month, group_id, method, all, limit } = req.query;
    let sql = `
      SELECT p.*, s.first_name || ' ' || s.last_name as student_name, s.matricule, s.phone as student_phone, s.parent_phone,
             g.name as group_name, sub.name as subject_name,
             t.first_name || ' ' || t.last_name as teacher_name
      FROM payments p
      JOIN students s ON p.student_id = s.id
      JOIN groups g ON p.group_id = g.id
      JOIN subjects sub ON g.subject_id = sub.id
      LEFT JOIN teachers t ON g.teacher_id = t.id
    `;
    const conditions = [];
    const params = [];

    if (search && search.trim()) {
      conditions.push(`(s.first_name LIKE ? OR s.last_name LIKE ? OR (s.first_name || ' ' || s.last_name) LIKE ? OR s.matricule LIKE ? OR p.receipt_no LIKE ? OR g.name LIKE ? OR sub.name LIKE ?)`);
      const term = `%${search.trim()}%`;
      params.push(term, term, term, term, term, term, term);
    }

    if (month && month.trim() && month !== 'all') {
      conditions.push(`p.month_period = ?`);
      params.push(month.trim());
    } else if (months && months.trim()) {
      const monthList = months.split(',').map(m => m.trim()).filter(Boolean);
      if (monthList.length > 0) {
        const placeholders = monthList.map(() => '?').join(',');
        conditions.push(`p.month_period IN (${placeholders})`);
        params.push(...monthList);
      }
    } else if (from_month || to_month) {
      if (from_month && from_month.trim()) {
        conditions.push(`p.month_period >= ?`);
        params.push(from_month.trim());
      }
      if (to_month && to_month.trim()) {
        conditions.push(`p.month_period <= ?`);
        params.push(to_month.trim());
      }
    }

    if (group_id && group_id !== 'all') {
      conditions.push(`p.group_id = ?`);
      params.push(Number(group_id));
    }

    if (method && method !== 'all') {
      conditions.push(`p.payment_method = ?`);
      params.push(method.trim());
    }

    if (conditions.length > 0) {
      sql += ` WHERE ` + conditions.join(' AND ');
    }

    sql += ` ORDER BY p.payment_date DESC, p.id DESC`;
    if (!all || all === 'false' || all === '0') {
      const maxLimit = Number(limit) || 300;
      sql += ` LIMIT ${maxLimit}`;
    }

    const payments = DB.queryAll(sql, params);
    res.json({ success: true, payments });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.get('/api/payments/:id', (req, res) => {
  try {
    const payment = DB.queryOne(`
      SELECT p.*, s.first_name, s.last_name, s.matricule, s.phone as student_phone, s.parent_phone,
             l.name as level_name,
             g.name as group_name, g.price_monthly,
             sub.name as subject_name,
             t.first_name || ' ' || t.last_name as teacher_name
      FROM payments p
      JOIN students s ON p.student_id = s.id
      LEFT JOIN levels l ON s.level_id = l.id
      JOIN groups g ON p.group_id = g.id
      JOIN subjects sub ON g.subject_id = sub.id
      JOIN teachers t ON g.teacher_id = t.id
      WHERE p.id = ?
    `, [req.params.id]);

    if (!payment) return res.status(404).json({ success: false, error: 'Reçu non trouvé' });
    res.json({ success: true, payment });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Bulletproof, Collision-Free Receipt Number Generator
function generateUniqueReceiptNo(prefix = 'REC') {
  const year = new Date().getFullYear();
  const rows = DB.queryAll(
    'SELECT receipt_no FROM payments WHERE receipt_no LIKE ? OR receipt_no LIKE ?',
    [`${prefix}-${year}-%`, `REC-${year}-%`]
  );
  let maxSeq = 0;
  for (const r of rows) {
    if (!r.receipt_no) continue;
    const parts = r.receipt_no.split('-');
    for (const p of parts) {
      const n = parseInt(p, 10);
      if (!isNaN(n) && n !== year && n > maxSeq) {
        maxSeq = n;
      }
    }
  }
  const maxIdRow = DB.queryOne('SELECT MAX(id) as max_id FROM payments');
  const baseline = Math.max(maxSeq, Number(maxIdRow?.max_id || 0));
  let nextSeq = baseline + 1;
  let candidate = `${prefix}-${year}-${String(nextSeq).padStart(5, '0')}`;
  while (DB.queryOne('SELECT id FROM payments WHERE receipt_no = ? OR receipt_no LIKE ?', [candidate, `${candidate}-%`])) {
    nextSeq++;
    candidate = `${prefix}-${year}-${String(nextSeq).padStart(5, '0')}`;
  }
  return candidate;
}

app.post('/api/payments', (req, res) => {
  try {
    const { student_id, group_id, month_period, paid_amount, discount, payment_method, notes } = req.body;
    
    const { newPayment, receipt_no } = DB.transaction(() => {
      // Fetch group base price
      const group = DB.queryOne("SELECT price_monthly FROM groups WHERE id = ?", [group_id]);
      const baseAmount = group ? group.price_monthly : 2000;
      const disc = parseFloat(discount) || 0;
      const paid = parseFloat(paid_amount) || 0;
      const remaining = Math.max(0, (baseAmount - disc) - paid);

      // Auto receipt number based on collision-free unique generator
      let receipt_no = generateUniqueReceiptNo('REC');

      let result;
      let attempts = 0;
      while (attempts < 5) {
        try {
          result = DB.run(`
            INSERT INTO payments (receipt_no, student_id, group_id, month_period, base_amount, discount, paid_amount, remaining_amount, payment_method, notes)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
          `, [receipt_no, student_id, group_id, month_period, baseAmount, disc, paid, remaining, payment_method || 'espece', notes]);
          break;
        } catch (insertErr) {
          if (insertErr.message && (insertErr.message.includes('receipt_no') || insertErr.message.includes('UNIQUE'))) {
            attempts++;
            receipt_no = generateUniqueReceiptNo('REC');
            continue;
          }
          throw insertErr;
        }
      }

      const newPayment = DB.queryOne(`
        SELECT p.*, s.first_name, s.last_name, s.matricule, s.phone as student_phone, s.parent_phone,
               l.name as level_name,
               g.name as group_name, g.price_monthly,
               sub.name as subject_name,
               t.first_name || ' ' || t.last_name as teacher_name
        FROM payments p
        JOIN students s ON p.student_id = s.id
        LEFT JOIN levels l ON s.level_id = l.id
        JOIN groups g ON p.group_id = g.id
        JOIN subjects sub ON g.subject_id = sub.id
        JOIN teachers t ON g.teacher_id = t.id
        WHERE p.id = ?
      `, [result.lastInsertRowid]);

      // Automatic Caisse Entry for paid amount
      if (paid > 0) {
        const nowP = new Date();
        const curDate = nowP.toISOString().split('T')[0];
        const curTime = nowP.toTimeString().split(' ')[0];
        DB.run(`
          INSERT INTO caisse (type, category, amount, title, reference, payment_method, payment_id, user_name, movement_date, movement_time)
          VALUES ('entree', 'Paiement élève', ?, ?, ?, ?, ?, 'Secrétariat', ?, ?)
        `, [
          paid,
          `Paiement cours ${month_period} - ${newPayment.first_name} ${newPayment.last_name}`,
          receipt_no,
          payment_method || 'espece',
          result.lastInsertRowid,
          curDate,
          curTime
        ]);
      }

      return { newPayment, receipt_no };
    });

    res.json({ success: true, payment: newPayment, receipt_no });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});

// 4.3 Get Student Dues and Enrollments Summary for Fast Payment
app.get('/api/students/:id/due-summary', (req, res) => {
  try {
    const studentId = req.params.id;
    const student = DB.queryOne(`
      SELECT s.id, s.matricule, s.first_name, s.last_name, s.phone, s.parent_phone, s.photo_url,
             l.name as level_name
      FROM students s
      LEFT JOIN levels l ON s.level_id = l.id
      WHERE s.id = ?
    `, [studentId]);

    if (!student) {
      return res.status(404).json({ success: false, error: 'Élève non trouvé' });
    }

    // Active enrollments
    const enrollments = DB.queryAll(`
      SELECT e.id as enrollment_id, e.group_id, e.discount_amount, e.school_year, e.registration_date,
             g.name as group_name, g.price_monthly,
             sub.name as subject_name, sub.color as subject_color,
             t.first_name || ' ' || t.last_name as teacher_name
      FROM enrollments e
      JOIN groups g ON e.group_id = g.id
      JOIN subjects sub ON g.subject_id = sub.id
      JOIN teachers t ON g.teacher_id = t.id
      WHERE e.student_id = ? AND e.status = 'active'
    `, [studentId]);

    // Recent payments for this student
    const payments = DB.queryAll(`
      SELECT p.id, p.receipt_no, p.group_id, p.month_period, p.base_amount, p.discount, p.paid_amount, p.remaining_amount, p.payment_date
      FROM payments p
      WHERE p.student_id = ?
      ORDER BY p.id DESC
    `, [studentId]);

    res.json({
      success: true,
      student,
      enrollments,
      payments
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 4.4 Multi-Payment (Multiple courses/months for a student in one unified receipt)
app.post('/api/payments/multi', (req, res) => {
  try {
    const { student_id, payment_method = 'espece', payment_date, notes = '', items = [] } = req.body;

    if (!student_id) {
      return res.status(400).json({ success: false, error: 'Identifiant élève manquant.' });
    }
    if (!Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ success: false, error: 'Aucun cours ou montant sélectionné pour le paiement.' });
    }

    const student = DB.queryOne(`
      SELECT s.*, l.name as level_name
      FROM students s
      LEFT JOIN levels l ON s.level_id = l.id
      WHERE s.id = ?
    `, [student_id]);

    if (!student) {
      return res.status(404).json({ success: false, error: 'Élève non trouvé.' });
    }

    const payDate = payment_date || new Date().toISOString().split('T')[0];
    const nowP = new Date();
    const curTime = nowP.toTimeString().split(' ')[0];

    DB.exec('BEGIN IMMEDIATE;');

    // Generate unified receipt number inside transaction lock
    const receipt_no = generateUniqueReceiptNo('REC');

    let totalPaid = 0;
    const createdPayments = [];

    try {
      let itemIdx = 0;
      for (const it of items) {
        const groupId = it.group_id;
        const monthPeriod = it.month_period || 'Septembre 2026';
        const baseAmount = parseFloat(it.base_amount) || 0;
        const discount = parseFloat(it.discount) || 0;
        const paidAmount = parseFloat(it.paid_amount) || 0;
        const remainingAmount = Math.max(0, (baseAmount - discount) - paidAmount);

        if (paidAmount <= 0 && remainingAmount <= 0 && baseAmount <= 0) continue;
        itemIdx++;

        const rowReceiptNo = items.length > 1 ? `${receipt_no}-${itemIdx}` : receipt_no;

        let resRun;
        let attempts = 0;
        let actualRowReceiptNo = rowReceiptNo;
        while (attempts < 5) {
          try {
            resRun = DB.run(`
              INSERT INTO payments (receipt_no, student_id, group_id, month_period, base_amount, discount, paid_amount, remaining_amount, payment_method, payment_date, notes)
              VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `, [
              actualRowReceiptNo,
              student_id,
              groupId,
              monthPeriod,
              baseAmount,
              discount,
              paidAmount,
              remainingAmount,
              payment_method,
              payDate,
              notes
            ]);
            break;
          } catch (rErr) {
            if (rErr.message && (rErr.message.includes('receipt_no') || rErr.message.includes('UNIQUE'))) {
              attempts++;
              const fallbackReceipt = generateUniqueReceiptNo('REC');
              actualRowReceiptNo = items.length > 1 ? `${fallbackReceipt}-${itemIdx}` : fallbackReceipt;
              continue;
            }
            throw rErr;
          }
        }

        totalPaid += paidAmount;

        const payRecord = DB.queryOne(`
          SELECT p.*, g.name as group_name, sub.name as subject_name, t.first_name || ' ' || t.last_name as teacher_name
          FROM payments p
          JOIN groups g ON p.group_id = g.id
          JOIN subjects sub ON g.subject_id = sub.id
          JOIN teachers t ON g.teacher_id = t.id
          WHERE p.id = ?
        `, [resRun.lastInsertRowid]);

        createdPayments.push(payRecord);
      }

      // Consolidate caisse movement if any amount was paid
      if (totalPaid > 0) {
        try {
          const courseNames = createdPayments.map(p => p.group_name).filter(Boolean).join(', ');
          DB.run(`
            INSERT INTO caisse (type, category, amount, title, reference, payment_method, user_name, movement_date, movement_time)
            VALUES ('entree', 'Paiement élève', ?, ?, ?, ?, 'Secrétariat', ?, ?)
          `, [
            totalPaid,
            `Paiement groupé (${createdPayments.length} cours) - ${student.first_name} ${student.last_name} (${courseNames.slice(0, 50)})`,
            receipt_no,
            payment_method,
            payDate,
            curTime
          ]);
        } catch (caisseErr) {
          console.warn('Auto caisse multi-payment entry:', caisseErr.message);
        }
      }

      DB.exec('COMMIT');
    } catch (txErr) {
      DB.exec('ROLLBACK');
      throw txErr;
    }

    res.json({
      success: true,
      receipt_no,
      total_paid: totalPaid,
      student,
      payments: createdPayments,
      payment_date: payDate,
      payment_method
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 4.5 Family Payment (Multiple children / courses under one parent in a single unified receipt with partial payment support)
app.post('/api/payments/family', (req, res) => {
  try {
    const { parent_id, parent_name, payment_method = 'espece', payment_date, notes = '', items = [] } = req.body;

    if (!Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ success: false, error: 'Aucun cours ou montant sélectionné pour le paiement familial.' });
    }

    const payDate = payment_date || new Date().toISOString().split('T')[0];
    const nowP = new Date();
    const curTime = nowP.toTimeString().split(' ')[0];

    // Fetch parent if parent_id provided
    let parent = null;
    if (parent_id) {
      parent = DB.queryOne("SELECT * FROM parents WHERE id = ?", [parent_id]);
    }
    const resolvedParentName = (parent && parent.full_name) || parent_name || 'Parent d\'élève';

    DB.exec('BEGIN IMMEDIATE;');

    // Generate unified family receipt number inside transaction lock
    const receipt_no = generateUniqueReceiptNo('REC-FAM');

    let totalPaid = 0;
    let totalBase = 0;
    let totalDiscount = 0;
    let totalNet = 0;
    let totalRemaining = 0;
    const createdPayments = [];
    const childrenIds = new Set();

    try {
      let itemIdx = 0;
      for (const it of items) {
        const studentId = parseInt(it.student_id, 10);
        const groupId = parseInt(it.group_id, 10);
        const monthPeriod = it.month_period || 'Septembre 2026';
        const baseAmount = parseFloat(it.base_amount) || 0;
        const discount = parseFloat(it.discount) || 0;
        const paidAmount = parseFloat(it.paid_amount) || 0;
        const netAmount = Math.max(0, baseAmount - discount);
        const remainingAmount = Math.max(0, netAmount - paidAmount);

        if (!studentId || !groupId) continue;
        if (paidAmount <= 0 && remainingAmount <= 0 && baseAmount <= 0) continue;

        itemIdx++;
        childrenIds.add(studentId);

        const rowReceiptNo = items.length > 1 ? `${receipt_no}-${itemIdx}` : receipt_no;

        let resRun;
        let attempts = 0;
        let actualRowReceiptNo = rowReceiptNo;
        while (attempts < 5) {
          try {
            resRun = DB.run(`
              INSERT INTO payments (receipt_no, student_id, group_id, month_period, base_amount, discount, paid_amount, remaining_amount, payment_method, payment_date, notes)
              VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `, [
              actualRowReceiptNo,
              studentId,
              groupId,
              monthPeriod,
              baseAmount,
              discount,
              paidAmount,
              remainingAmount,
              payment_method,
              payDate,
              notes ? `[Paiement Famille: ${resolvedParentName}] ${notes}` : `[Paiement Famille: ${resolvedParentName}]`
            ]);
            break;
          } catch (rErr) {
            if (rErr.message && (rErr.message.includes('receipt_no') || rErr.message.includes('UNIQUE'))) {
              attempts++;
              const fallbackReceipt = generateUniqueReceiptNo('REC-FAM');
              actualRowReceiptNo = items.length > 1 ? `${fallbackReceipt}-${itemIdx}` : fallbackReceipt;
              continue;
            }
            throw rErr;
          }
        }

        totalPaid += paidAmount;
        totalBase += baseAmount;
        totalDiscount += discount;
        totalNet += netAmount;
        totalRemaining += remainingAmount;

        const payRecord = DB.queryOne(`
          SELECT p.*, s.first_name, s.last_name, s.matricule, s.parent_name, s.parent_phone,
                 l.name as level_name,
                 g.name as group_name, sub.name as subject_name, sub.color as subject_color,
                 t.first_name || ' ' || t.last_name as teacher_name
          FROM payments p
          JOIN students s ON p.student_id = s.id
          LEFT JOIN levels l ON s.level_id = l.id
          JOIN groups g ON p.group_id = g.id
          JOIN subjects sub ON g.subject_id = sub.id
          JOIN teachers t ON g.teacher_id = t.id
          WHERE p.id = ?
        `, [resRun.lastInsertRowid]);

        createdPayments.push(payRecord);
      }

      // Consolidate caisse movement if any amount was paid
      if (totalPaid > 0) {
        try {
          const childrenCount = childrenIds.size;
          DB.run(`
            INSERT INTO caisse (type, category, amount, title, reference, payment_method, user_name, movement_date, movement_time)
            VALUES ('entree', 'Paiement élève', ?, ?, ?, ?, 'Secrétariat', ?, ?)
          `, [
            totalPaid,
            `Paiement familial (${childrenCount} enfant(s), ${createdPayments.length} cours) - ${resolvedParentName}`,
            receipt_no,
            payment_method,
            payDate,
            curTime
          ]);
        } catch (caisseErr) {
          console.warn('Auto caisse family payment entry:', caisseErr.message);
        }
      }

      DB.exec('COMMIT');
    } catch (txErr) {
      DB.exec('ROLLBACK');
      throw txErr;
    }

    res.json({
      success: true,
      receipt_no,
      total_paid: totalPaid,
      total_base: totalBase,
      total_discount: totalDiscount,
      total_net: totalNet,
      total_remaining: totalRemaining,
      parent: parent || { full_name: resolvedParentName, phone: req.body.parent_phone || '' },
      children_count: childrenIds.size,
      payments: createdPayments,
      payment_date: payDate,
      payment_method
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// -------------------------------------------------------------
// 5. POINTAGE & GESTION DES PRÉSENCES PAR GROUPE ET PAR SÉANCE
// -------------------------------------------------------------

// 5.1 Get all active groups with enrollment and sessions count
app.get('/api/attendance/groups', (req, res) => {
  try {
    const groups = DB.queryAll(`
      SELECT g.*, l.name as level_name, sub.name as subject_name,
             t.first_name || ' ' || t.last_name as teacher_name,
             r.name as room_name,
             (SELECT COUNT(*) FROM enrollments e WHERE e.group_id = g.id AND e.status = 'active') as students_count,
             (SELECT COUNT(*) FROM group_sessions gs WHERE gs.group_id = g.id) as sessions_count
      FROM groups g
      LEFT JOIN levels l ON g.level_id = l.id
      LEFT JOIN subjects sub ON g.subject_id = sub.id
      LEFT JOIN teachers t ON g.teacher_id = t.id
      LEFT JOIN rooms r ON g.room_id = r.id
      WHERE g.active = 1
      ORDER BY g.name ASC
    `);
    res.json({ success: true, groups });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 5.2 Get all sessions history for a group
app.get('/api/attendance/sessions', (req, res) => {
  try {
    const { group_id } = req.query;
    if (!group_id) return res.status(400).json({ success: false, error: 'group_id manquant' });

    const sessions = DB.queryAll(`
      SELECT gs.*,
             (SELECT COUNT(*) FROM attendance a WHERE a.group_id = gs.group_id AND a.session_date = gs.session_date AND a.status = 'present') as present_count,
             (SELECT COUNT(*) FROM attendance a WHERE a.group_id = gs.group_id AND a.session_date = gs.session_date AND a.status = 'absent') as absent_count,
             (SELECT COUNT(*) FROM attendance a WHERE a.group_id = gs.group_id AND a.session_date = gs.session_date AND a.status = 'late') as late_count,
             (SELECT COUNT(*) FROM attendance a WHERE a.group_id = gs.group_id AND a.session_date = gs.session_date AND a.status = 'excused') as excused_count,
             (SELECT COUNT(*) FROM attendance a WHERE a.group_id = gs.group_id AND a.session_date = gs.session_date) as total_marked
      FROM group_sessions gs
      WHERE gs.group_id = ?
      ORDER BY gs.session_date DESC, gs.id DESC
    `, [group_id]);

    res.json({ success: true, sessions });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 5.3 Get attendance sheet for a specific group and date
app.get('/api/attendance/sheet', (req, res) => {
  try {
    const { group_id } = req.query;
    let session_date = req.query.date;

    if (!group_id) return res.status(400).json({ success: false, error: 'group_id manquant' });

    if (!session_date) {
      session_date = new Date().toISOString().split('T')[0];
    }

    const group = DB.queryOne(`
      SELECT g.*, l.name as level_name, sub.name as subject_name,
             t.first_name || ' ' || t.last_name as teacher_name,
             r.name as room_name
      FROM groups g
      LEFT JOIN levels l ON g.level_id = l.id
      LEFT JOIN subjects sub ON g.subject_id = sub.id
      LEFT JOIN teachers t ON g.teacher_id = t.id
      LEFT JOIN rooms r ON g.room_id = r.id
      WHERE g.id = ?
    `, [group_id]);

    if (!group) return res.status(404).json({ success: false, error: 'Groupe non trouvé' });

    // Find if session entry exists for this date
    let session = DB.queryOne(`
      SELECT * FROM group_sessions WHERE group_id = ? AND session_date = ?
    `, [group_id, session_date]);

    const totalSessions = DB.queryOne(`
      SELECT COUNT(*) as count FROM group_sessions WHERE group_id = ?
    `, [group_id])?.count || 0;

    let defaultSessionNumber = totalSessions + 1;
    if (session && session.session_number) {
      defaultSessionNumber = session.session_number;
    }

    // Month string for checking payments (e.g. '2026-09')
    const monthStr = session_date.substring(0, 7);

    // Get all enrolled students in this group
    const students = DB.queryAll(`
      SELECT s.id as student_id, s.matricule, s.first_name, s.last_name, s.gender,
             s.phone, s.parent_phone, s.parent_name, s.photo_url,
             e.id as enrollment_id, e.registration_date, e.discount_amount
      FROM enrollments e
      JOIN students s ON e.student_id = s.id
      WHERE e.group_id = ? AND s.active = 1 AND e.status = 'active'
      ORDER BY s.last_name ASC, s.first_name ASC
    `, [group_id]);

    // Attach payment status, current date attendance, and cumulative attendance per student
    const studentRows = students.map(s => {
      // 1. Payment check for this month
      const payment = DB.queryOne(`
        SELECT paid_amount, remaining_amount, month_period
        FROM payments
        WHERE student_id = ? AND group_id = ? AND strftime('%Y-%m', payment_date) = ?
        ORDER BY id DESC LIMIT 1
      `, [s.student_id, group_id, monthStr]);

      let is_paid = false;
      let payment_badge = 'due';
      let payment_text = 'Impayé';

      if (payment) {
        if (payment.remaining_amount <= 0) {
          is_paid = true;
          payment_badge = 'paid';
          payment_text = 'À jour';
        } else {
          payment_badge = 'partial';
          payment_text = `Reste: ${payment.remaining_amount} DA`;
        }
      }

      // 2. Attendance on this session_date
      const att = DB.queryOne(`
        SELECT * FROM attendance
        WHERE student_id = ? AND group_id = ? AND session_date = ?
      `, [s.student_id, group_id, session_date]);

      // 3. Cumulative sessions attended for this group
      const cumStats = DB.queryOne(`
        SELECT 
          COUNT(*) as total_recorded,
          COALESCE(SUM(CASE WHEN status = 'present' THEN 1 ELSE 0 END), 0) as present_count,
          COALESCE(SUM(CASE WHEN status = 'absent' THEN 1 ELSE 0 END), 0) as absent_count,
          COALESCE(SUM(CASE WHEN status = 'late' THEN 1 ELSE 0 END), 0) as late_count,
          COALESCE(SUM(CASE WHEN status = 'excused' THEN 1 ELSE 0 END), 0) as excused_count
        FROM attendance
        WHERE student_id = ? AND group_id = ?
      `, [s.student_id, group_id]);

      return {
        ...s,
        is_paid,
        payment_badge,
        payment_text,
        attendance_id: att?.id || null,
        status: att?.status || null,
        check_in_time: att?.check_in_time || null,
        notes: att?.notes || '',
        sessions_attended: cumStats?.present_count || 0,
        sessions_total: totalSessions
      };
    });

    res.json({
      success: true,
      group,
      session_date,
      session: session || {
        session_number: defaultSessionNumber,
        start_time: group.start_time || '14:00',
        end_time: group.end_time || '16:00',
        topic: '',
        notes: ''
      },
      total_sessions: totalSessions,
      students: studentRows
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 5.4 Save attendance sheet (Batch upsert)
app.post('/api/attendance/sheet/save', (req, res) => {
  try {
    const { group_id, session_date, session_number, start_time, end_time, topic, notes, records } = req.body;
    if (!group_id || !session_date) {
      return res.status(400).json({ success: false, error: 'group_id et session_date requis' });
    }

    const sNumber = parseInt(session_number, 10) || 1;
    const sStartTime = start_time || null;
    const sEndTime = end_time || null;
    const sTopic = topic || null;
    const sNotes = notes || null;

    // 1. Upsert group_sessions
    DB.run(`
      INSERT INTO group_sessions (group_id, session_date, session_number, start_time, end_time, topic, notes)
      VALUES (?, ?, ?, ?, ?, ?, ?)
      ON CONFLICT(group_id, session_date) DO UPDATE SET
        session_number = excluded.session_number,
        start_time = excluded.start_time,
        end_time = excluded.end_time,
        topic = excluded.topic,
        notes = excluded.notes;
    `, [group_id, session_date, sNumber, sStartTime, sEndTime, sTopic, sNotes]);

    const sessionObj = DB.queryOne(`
      SELECT * FROM group_sessions WHERE group_id = ? AND session_date = ?
    `, [group_id, session_date]);

    const monthStr = session_date.substring(0, 7);
    const nowTime = new Date().toTimeString().split(' ')[0];

    // 2. Upsert each student record
    if (Array.isArray(records)) {
      for (const item of records) {
        if (!item.student_id) continue;
        const status = item.status || 'present';
        const itemNotes = item.notes || '';

        // Check payment snapshot
        const payment = DB.queryOne(`
          SELECT id, remaining_amount FROM payments
          WHERE student_id = ? AND group_id = ? AND strftime('%Y-%m', payment_date) = ?
        `, [item.student_id, group_id, monthStr]);

        const paymentSnapshot = (payment && (payment.remaining_amount === 0 || payment.remaining_amount === null)) ? 'paid' : 'due';

        DB.run(`
          INSERT INTO attendance (student_id, group_id, session_date, check_in_time, status, payment_status_snapshot, notes, session_id)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?)
          ON CONFLICT(student_id, group_id, session_date) DO UPDATE SET
            status = excluded.status,
            notes = excluded.notes,
            payment_status_snapshot = excluded.payment_status_snapshot,
            session_id = excluded.session_id;
        `, [item.student_id, group_id, session_date, nowTime, status, paymentSnapshot, itemNotes, sessionObj?.id || null]);
      }
    }

    res.json({
      success: true,
      message: 'Feuille de présence enregistrée avec succès',
      session: sessionObj
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 5.5 Full Attendance Matrix for a group with month filter
app.get('/api/attendance/matrix', (req, res) => {
  try {
    const { group_id, month } = req.query;
    if (!group_id) return res.status(400).json({ success: false, error: 'group_id manquant' });

    const group = DB.queryOne(`
      SELECT g.*, l.name as level_name, sub.name as subject_name,
             t.first_name || ' ' || t.last_name as teacher_name
      FROM groups g
      LEFT JOIN levels l ON g.level_id = l.id
      LEFT JOIN subjects sub ON g.subject_id = sub.id
      LEFT JOIN teachers t ON g.teacher_id = t.id
      WHERE g.id = ?
    `, [group_id]);

    if (!group) return res.status(404).json({ success: false, error: 'Groupe non trouvé' });

    // Distinct months with sessions count for this group
    const availableMonths = DB.queryAll(`
      SELECT DISTINCT strftime('%Y-%m', session_date) as month_val, COUNT(*) as count
      FROM group_sessions
      WHERE group_id = ?
      GROUP BY month_val
      ORDER BY month_val ASC
    `, [group_id]);

    // Sessions query with optional month filtering
    let sessionsSql = 'SELECT * FROM group_sessions WHERE group_id = ?';
    const sessionsParams = [group_id];

    if (month && month !== 'all') {
      if (month.includes(',')) {
        const monthsList = month.split(',').map(m => m.trim()).filter(Boolean);
        const placeholders = monthsList.map(() => '?').join(',');
        sessionsSql += ` AND strftime('%Y-%m', session_date) IN (${placeholders})`;
        sessionsParams.push(...monthsList);
      } else {
        sessionsSql += ` AND strftime('%Y-%m', session_date) = ?`;
        sessionsParams.push(month.trim());
      }
    }

    sessionsSql += ' ORDER BY session_date ASC, id ASC';
    const sessions = DB.queryAll(sessionsSql, sessionsParams);

    const students = DB.queryAll(`
      SELECT s.id as student_id, s.matricule, s.first_name, s.last_name, s.phone
      FROM enrollments e
      JOIN students s ON e.student_id = s.id
      WHERE e.group_id = ? AND s.active = 1 AND e.status = 'active'
      ORDER BY s.last_name ASC, s.first_name ASC
    `, [group_id]);

    const allAttendances = DB.queryAll(`
      SELECT student_id, session_date, status, notes
      FROM attendance
      WHERE group_id = ?
    `, [group_id]);

    const attendanceMap = {};
    for (const a of allAttendances) {
      const key = `${a.student_id}_${a.session_date}`;
      attendanceMap[key] = a.status;
    }

    const matrixRows = students.map(s => {
      const rowSessions = {};
      let presentCount = 0;
      let absentCount = 0;
      let lateCount = 0;
      let excusedCount = 0;

      for (const sess of sessions) {
        const key = `${s.student_id}_${sess.session_date}`;
        const st = attendanceMap[key] || null;
        rowSessions[sess.session_date] = st;
        if (st === 'present') presentCount++;
        else if (st === 'absent') absentCount++;
        else if (st === 'late') lateCount++;
        else if (st === 'excused') excusedCount++;
      }

      const totalHeld = sessions.length;
      const rate = totalHeld > 0 ? Math.round(((presentCount + (lateCount * 0.5)) / totalHeld) * 100) : 100;

      return {
        ...s,
        sessions: rowSessions,
        presentCount,
        absentCount,
        lateCount,
        excusedCount,
        totalHeld,
        attendanceRate: rate
      };
    });

    res.json({
      success: true,
      group,
      selected_month: month || 'all',
      available_months: availableMonths,
      sessions,
      students: matrixRows
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 5.6 Delete a session
app.delete('/api/attendance/session', (req, res) => {
  try {
    const { group_id, session_date } = req.body;
    if (!group_id || !session_date) {
      return res.status(400).json({ success: false, error: 'group_id et session_date requis' });
    }

    DB.run('DELETE FROM attendance WHERE group_id = ? AND session_date = ?', [group_id, session_date]);
    DB.run('DELETE FROM group_sessions WHERE group_id = ? AND session_date = ?', [group_id, session_date]);

    res.json({ success: true, message: 'Séance et présences supprimées avec succès' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Helper: Normalize Barcode Scanner (Douchette) Raw Input
// Handles AZERTY number row without Shift (&é"'(-è_çà -> 1234567890), Arabic keyboard scancodes, and control characters
function normalizeBarcodeCode(raw) {
  if (!raw) return '';
  let code = String(raw).trim().replace(/[\x00-\x1F\x7F]/g, '');

  // 1. Arabic-Indic digits to ASCII (٠-٩ -> 0-9)
  const arabicDigits = ['٠','١','٢','٣','٤','٥','٦','٧','٨','٩'];
  arabicDigits.forEach((d, i) => { code = code.replaceAll(d, String(i)); });

  // 2. Arabic keyboard scancodes for common prefixes (ثمث -> ELE, etc.)
  const arKeys = {
    'ث':'E', 'م':'L', 'ف':'T', 'ع':'U', 'ن':'N', 'س':'S',
    'ح':'P', 'د':'N', 'ق':'A', 'غ':'Y', 'ص':'W'
  };
  if (/[\u0600-\u06FF]/.test(code)) {
    let conv = '';
    for (let ch of code) conv += arKeys[ch] || ch;
    code = conv;
  }

  // 3. French AZERTY number row without Shift:
  // & -> 1, é -> 2, " -> 3, ' -> 4, ( -> 5, - -> 6, è -> 7, _ -> 8, ç -> 9, à -> 0
  const azertyDigits = {
    '&': '1', 'é': '2', 'É': '2',
    '"': '3',
    "'": '4',
    '(': '5',
    'è': '7', 'È': '7',
    '_': '8',
    'ç': '9', 'Ç': '9',
    'à': '0', 'À': '0'
  };

  if (/[éèçà&"'_]/.test(code) || /[\(\)]/.test(code)) {
    let conv = '';
    for (let i = 0; i < code.length; i++) {
      const ch = code[i];
      if (azertyDigits[ch] !== undefined) {
        conv += azertyDigits[ch];
      } else if (ch === '-' && (i === 3 || i === 8)) {
        // Keep hyphens in format like ELE-2026-0001
        conv += '-';
      } else if (ch === '-') {
        // On AZERTY, key 6 outputs '-'
        conv += '6';
      } else {
        conv += ch;
      }
    }
    code = conv;
  }

  return code.trim().toUpperCase();
}

// 5.7 RAPID ATTENDANCE BY BARCODE / QR SCAN
app.post('/api/pointage/scan', (req, res) => {
  try {
    const { code, group_id, session_date } = req.body;
    if (!code) {
      return res.status(400).json({ success: false, error: 'Code-barres / QR manquant' });
    }

    const rawCode = String(code).trim();
    const cleanCode = normalizeBarcodeCode(rawCode);
    const cleanNoDash = cleanCode.replace(/[^A-Za-z0-9]/g, '');

    // Find student by matricule, qr_code, no-dash variants, or id (case-insensitive)
    const student = DB.queryOne(`
      SELECT s.*, l.name as level_name 
      FROM students s
      LEFT JOIN levels l ON s.level_id = l.id
      WHERE (
        s.matricule = ? COLLATE NOCASE 
        OR s.qr_code = ? COLLATE NOCASE 
        OR REPLACE(s.matricule, '-', '') = ? COLLATE NOCASE
        OR REPLACE(s.qr_code, '-', '') = ? COLLATE NOCASE
        OR CAST(s.id AS TEXT) = ?
        OR s.matricule = ? COLLATE NOCASE
      ) AND s.active = 1
    `, [cleanCode, cleanCode, cleanNoDash, cleanNoDash, cleanCode, rawCode]);

    if (!student) {
      return res.status(404).json({
        success: false,
        error: `Élève non trouvé dans le système (${cleanCode || rawCode})`
      });
    }

    // Get groups student is enrolled in
    const activeGroups = DB.queryAll(`
      SELECT g.*, sub.name as subject_name, t.first_name || ' ' || t.last_name as teacher_name
      FROM enrollments e
      JOIN groups g ON e.group_id = g.id
      JOIN subjects sub ON g.subject_id = sub.id
      JOIN teachers t ON g.teacher_id = t.id
      WHERE e.student_id = ? AND e.status = 'active'
    `, [student.id]);

    let targetGroupId = group_id ? parseInt(group_id, 10) : null;
    let notInSelectedGroup = false;
    let autoAssignedGroup = null;

    if (targetGroupId) {
      const isEnrolled = activeGroups.some(g => g.id === targetGroupId);
      if (!isEnrolled) {
        if (activeGroups.length > 0) {
          // Gracefully accept student in their primary active group so scan does not fail!
          autoAssignedGroup = activeGroups[0];
          targetGroupId = autoAssignedGroup.id;
          notInSelectedGroup = false;
        } else {
          notInSelectedGroup = true;
        }
      }
    } else if (activeGroups.length > 0) {
      targetGroupId = activeGroups[0].id;
      autoAssignedGroup = activeGroups[0];
    }

    const now = new Date();
    const todayDate = session_date || now.toISOString().split('T')[0];
    const currentMonthStr = todayDate.substring(0, 7);
    let isPaid = false;
    let paymentInfo = null;
    let alreadyMarked = false;
    let existingTime = null;

    if (targetGroupId && !notInSelectedGroup) {
      // Check monthly payment
      paymentInfo = DB.queryOne(`
        SELECT * FROM payments 
        WHERE student_id = ? AND group_id = ? AND strftime('%Y-%m', payment_date) = ?
      `, [student.id, targetGroupId, currentMonthStr]);

      isPaid = !!(paymentInfo && (paymentInfo.remaining_amount === 0 || paymentInfo.remaining_amount === null));

      const checkInTime = now.toTimeString().split(' ')[0];

      // Check if already checked-in today for this group
      const existingAttendance = DB.queryOne(`
        SELECT id, status, check_in_time FROM attendance 
        WHERE student_id = ? AND group_id = ? AND session_date = ?
      `, [student.id, targetGroupId, todayDate]);

      if (existingAttendance && existingAttendance.status === 'present') {
        alreadyMarked = true;
        existingTime = existingAttendance.check_in_time;
      } else {
        // Insert or update attendance record to present
        DB.run(`
          INSERT INTO attendance (student_id, group_id, session_date, check_in_time, status, payment_status_snapshot)
          VALUES (?, ?, ?, ?, 'present', ?)
          ON CONFLICT(student_id, group_id, session_date) DO UPDATE SET
            status = 'present',
            check_in_time = excluded.check_in_time,
            payment_status_snapshot = excluded.payment_status_snapshot
        `, [student.id, targetGroupId, todayDate, checkInTime, isPaid ? 'paid' : 'due']);
      }
    }

    // Compute live stats for this target group and session
    let groupStats = null;
    if (targetGroupId) {
      const totalEnrolled = DB.queryOne(`
        SELECT COUNT(*) as count FROM enrollments WHERE group_id = ? AND status = 'active'
      `, [targetGroupId])?.count || 0;

      const presentCount = DB.queryOne(`
        SELECT COUNT(*) as count FROM attendance WHERE group_id = ? AND session_date = ? AND status = 'present'
      `, [targetGroupId, todayDate])?.count || 0;

      const groupRow = DB.queryOne(`
        SELECT g.name, sub.name as subject_name FROM groups g
        LEFT JOIN subjects sub ON g.subject_id = sub.id
        WHERE g.id = ?
      `, [targetGroupId]);

      groupStats = {
        totalEnrolled,
        presentCount,
        remainingCount: Math.max(0, totalEnrolled - presentCount),
        groupName: groupRow?.name || '',
        subjectName: groupRow?.subject_name || ''
      };
    }

    res.json({
      success: true,
      student,
      activeGroups,
      targetGroupId,
      notInSelectedGroup,
      alreadyMarked,
      existingTime,
      isPaid,
      paymentInfo,
      groupStats,
      status: isPaid ? 'PAID' : 'DUE',
      timestamp: new Date().toLocaleTimeString('fr-FR')
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 5.8 LIVE ATTENDANCE LIST FOR A GROUP & SESSION
app.get('/api/pointage/live-list', (req, res) => {
  try {
    const { group_id, session_date } = req.query;
    if (!group_id) {
      return res.status(400).json({ success: false, error: 'group_id requis' });
    }
    const todayDate = session_date || new Date().toISOString().split('T')[0];
    const monthStr = todayDate.substring(0, 7);

    // Enrolled students in this group
    const students = DB.queryAll(`
      SELECT s.id, s.matricule, s.first_name, s.last_name, s.photo_url, s.phone, s.parent_phone,
             a.id as attendance_id, a.check_in_time, a.status as attendance_status,
             p.id as payment_id, p.paid_amount, p.remaining_amount
      FROM enrollments e
      JOIN students s ON e.student_id = s.id
      LEFT JOIN attendance a ON a.student_id = s.id AND a.group_id = e.group_id AND a.session_date = ?
      LEFT JOIN payments p ON p.student_id = s.id AND p.group_id = e.group_id AND strftime('%Y-%m', p.payment_date) = ?
      WHERE e.group_id = ? AND e.status = 'active' AND s.active = 1
      ORDER BY 
        CASE WHEN a.status = 'present' THEN 0 ELSE 1 END,
        a.check_in_time DESC,
        s.last_name ASC
    `, [todayDate, monthStr, group_id]);

    const totalEnrolled = students.length;
    const presentCount = students.filter(s => s.attendance_status === 'present').length;
    const absentCount = students.filter(s => s.attendance_status === 'absent').length;
    const pendingCount = totalEnrolled - presentCount - absentCount;

    res.json({
      success: true,
      students,
      stats: {
        totalEnrolled,
        presentCount,
        absentCount,
        pendingCount: Math.max(0, pendingCount)
      }
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 5.9 CLOSE ATTENDANCE SESSION & AUTO-MARK REMAINING AS ABSENT
app.post('/api/attendance/close-session', (req, res) => {
  try {
    const { group_id, session_date, session_number, topic } = req.body;
    if (!group_id || !session_date) {
      return res.status(400).json({ success: false, error: 'group_id et session_date requis' });
    }

    const sNumber = parseInt(session_number, 10) || 1;
    const sTopic = topic || 'Séance de cours';
    const nowTime = new Date().toTimeString().split(' ')[0];

    // 1. Ensure group_sessions entry exists
    DB.run(`
      INSERT INTO group_sessions (group_id, session_date, session_number, topic)
      VALUES (?, ?, ?, ?)
      ON CONFLICT(group_id, session_date) DO UPDATE SET
        session_number = excluded.session_number
    `, [group_id, session_date, sNumber, sTopic]);

    const sessionObj = DB.queryOne(`
      SELECT id FROM group_sessions WHERE group_id = ? AND session_date = ?
    `, [group_id, session_date]);

    // 2. Fetch all active enrolled students in this group
    const enrolledStudents = DB.queryAll(`
      SELECT s.id, s.first_name, s.last_name, s.matricule
      FROM enrollments e
      JOIN students s ON e.student_id = s.id
      WHERE e.group_id = ? AND e.status = 'active' AND s.active = 1
    `, [group_id]);

    const monthStr = session_date.substring(0, 7);
    let presentCount = 0;
    let newlyMarkedAbsent = 0;
    let alreadyAbsent = 0;

    for (const st of enrolledStudents) {
      const existing = DB.queryOne(`
        SELECT id, status FROM attendance 
        WHERE student_id = ? AND group_id = ? AND session_date = ?
      `, [st.id, group_id, session_date]);

      if (existing && existing.status === 'present') {
        presentCount++;
        if (sessionObj?.id) {
          DB.run('UPDATE attendance SET session_id = ? WHERE id = ?', [sessionObj.id, existing.id]);
        }
      } else if (existing && (existing.status === 'late' || existing.status === 'excused')) {
        // Retain late or excused
        if (sessionObj?.id) {
          DB.run('UPDATE attendance SET session_id = ? WHERE id = ?', [sessionObj.id, existing.id]);
        }
      } else if (existing && existing.status === 'absent') {
        alreadyAbsent++;
        if (sessionObj?.id) {
          DB.run('UPDATE attendance SET session_id = ? WHERE id = ?', [sessionObj.id, existing.id]);
        }
      } else {
        // Not checked-in -> Automatically mark as absent!
        const payment = DB.queryOne(`
          SELECT id, remaining_amount FROM payments
          WHERE student_id = ? AND group_id = ? AND strftime('%Y-%m', payment_date) = ?
        `, [st.id, group_id, monthStr]);
        const paymentSnapshot = (payment && (payment.remaining_amount === 0 || payment.remaining_amount === null)) ? 'paid' : 'due';

        DB.run(`
          INSERT INTO attendance (student_id, group_id, session_date, check_in_time, status, payment_status_snapshot, session_id)
          VALUES (?, ?, ?, ?, 'absent', ?, ?)
          ON CONFLICT(student_id, group_id, session_date) DO UPDATE SET
            status = 'absent',
            session_id = excluded.session_id
        `, [st.id, group_id, session_date, nowTime, paymentSnapshot, sessionObj?.id || null]);
        newlyMarkedAbsent++;
      }
    }

    res.json({
      success: true,
      message: `Séance clôturée avec succès : ${presentCount} présents et ${newlyMarkedAbsent + alreadyAbsent} absents enregistrés.`,
      stats: {
        totalEnrolled: enrolledStudents.length,
        presentCount,
        newlyMarkedAbsent,
        totalAbsent: newlyMarkedAbsent + alreadyAbsent
      }
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 5.10 CANCEL AN ATTENDANCE CHECK-IN
app.delete('/api/pointage/cancel', (req, res) => {
  try {
    const { student_id, group_id, session_date } = req.body;
    if (!student_id || !group_id || !session_date) {
      return res.status(400).json({ success: false, error: 'Paramètres manquants' });
    }
    DB.run(`
      DELETE FROM attendance 
      WHERE student_id = ? AND group_id = ? AND session_date = ?
    `, [student_id, group_id, session_date]);

    res.json({ success: true, message: 'Pointage annulé' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// -------------------------------------------------------------
// 5.11 GENERAL ENTRANCE ATTENDANCE (POINTAGE D'ENTRÉE GÉNÉRALE)
// -------------------------------------------------------------

// Rapid entrance scan for all students and teachers without group selection
app.post('/api/entrance/scan', (req, res) => {
  try {
    const { code, session_date, mode } = req.body;
    if (!code) {
      return res.status(400).json({ success: false, error: 'Code-barres / QR manquant' });
    }

    const rawCode = String(code).trim();
    const cleanCode = normalizeBarcodeCode(rawCode);
    const cleanNoDash = cleanCode.replace(/[^A-Za-z0-9]/g, '');
    const scanMode = (mode || 'auto').toLowerCase(); // 'auto', 'in', 'out'

    // 1. Try finding in students first (multi-format matching)
    let person = null;
    let personType = null;

    const student = DB.queryOne(`
      SELECT s.*, l.name as level_name
      FROM students s
      LEFT JOIN levels l ON s.level_id = l.id
      WHERE (
        s.matricule = ? COLLATE NOCASE 
        OR s.qr_code = ? COLLATE NOCASE 
        OR REPLACE(s.matricule, '-', '') = ? COLLATE NOCASE
        OR REPLACE(s.qr_code, '-', '') = ? COLLATE NOCASE
        OR CAST(s.id AS TEXT) = ?
        OR s.matricule = ? COLLATE NOCASE
      ) AND s.active = 1
    `, [cleanCode, cleanCode, cleanNoDash, cleanNoDash, cleanCode, rawCode]);

    if (student) {
      personType = 'student';
      person = student;
    } else {
      // 2. Try finding in teachers
      const teacher = DB.queryOne(`
        SELECT t.*, sub.name as subject_name
        FROM teachers t
        LEFT JOIN subjects sub ON t.subject_id = sub.id
        WHERE (
          t.matricule = ? COLLATE NOCASE 
          OR REPLACE(t.matricule, '-', '') = ? COLLATE NOCASE 
          OR CAST(t.id AS TEXT) = ?
          OR t.matricule = ? COLLATE NOCASE
        ) AND t.active = 1
      `, [cleanCode, cleanNoDash, cleanCode, rawCode]);

      if (teacher) {
        personType = 'teacher';
        person = teacher;
      }
    }

    if (!person) {
      return res.status(404).json({
        success: false,
        error: 'المعرف غير موجود في النظام (لا ينتمي لأي تلميذ أو أستاذ مسجل)'
      });
    }

    const now = new Date();
    const todayDate = session_date || now.toISOString().split('T')[0];
    const currentTime = now.toTimeString().split(' ')[0]; // 'HH:MM:SS'

    // Check existing entrance record today
    const existing = DB.queryOne(`
      SELECT * FROM entrance_attendance
      WHERE person_type = ? AND person_id = ? AND session_date = ?
    `, [personType, person.id, todayDate]);

    let action = 'check_in';
    let checkInTime = currentTime;
    let checkOutTime = null;
    let durationMinutes = 0;
    let message = '';

    if (!existing) {
      // First scan today => Record Check-In
      const insertRes = DB.run(`
        INSERT INTO entrance_attendance (person_type, person_id, session_date, check_in_time, status)
        VALUES (?, ?, ?, ?, 'present')
      `, [personType, person.id, todayDate, currentTime]);

      action = 'check_in';
      checkInTime = currentTime;
      message = personType === 'student'
        ? `مرحباً بك يا ${person.first_name}، تم تسجيل دخولك بنجاح.`
        : `أهلاً بك أستاذ ${person.first_name} ${person.last_name}، تم تسجيل حضورك بنجاح.`;
    } else {
      // Already has a record today
      checkInTime = existing.check_in_time;
      checkOutTime = existing.check_out_time;
      durationMinutes = existing.duration_minutes || 0;

      if (scanMode === 'in') {
        action = 'already_in';
        message = `تم تسجيل الدخول مسبقاً لهذا اليوم عند الساعة ${checkInTime}.`;
      } else if (existing.check_out_time) {
        // Both in & out were already completed
        action = 'already_completed';
        message = `تم تسجيل الحضور والانصراف مسبقاً لهذا اليوم (الدخول: ${checkInTime} | الخروج: ${checkOutTime}).`;
      } else {
        // Has check_in but no check_out yet
        // Check time elapsed since check_in
        const inParts = existing.check_in_time.split(':').map(Number);
        const nowParts = currentTime.split(':').map(Number);
        const inSeconds = (inParts[0] || 0) * 3600 + (inParts[1] || 0) * 60 + (inParts[2] || 0);
        const nowSeconds = (nowParts[0] || 0) * 3600 + (nowParts[1] || 0) * 60 + (nowParts[2] || 0);
        const diffSeconds = nowSeconds - inSeconds;

        if (scanMode === 'auto' && diffSeconds < 120) {
          // Accidental quick re-scan within 2 minutes
          action = 'already_in';
          message = `تم تسجيل الدخول للتو عند الساعة ${checkInTime}.`;
        } else {
          // Record Check-Out
          durationMinutes = Math.max(1, Math.round(Math.max(0, diffSeconds) / 60));
          checkOutTime = currentTime;
          DB.run(`
            UPDATE entrance_attendance
            SET check_out_time = ?, duration_minutes = ?
            WHERE id = ?
          `, [checkOutTime, durationMinutes, existing.id]);

          const hours = Math.floor(durationMinutes / 60);
          const mins = durationMinutes % 60;
          const durText = hours > 0 ? `${hours} س و ${mins} د` : `${mins} دقيقة`;

          action = 'check_out';
          message = personType === 'student'
            ? `رافقتك السلامة يا ${person.first_name}، تم تسجيل الخروج (مدة التواجد: ${durText}).`
            : `رافقتك السلامة أستاذ ${person.last_name}، تم تسجيل الانصراف (مدة التواجد: ${durText}).`;
        }
      }
    }

    // Compute live stats for today
    const studentsPresent = DB.queryOne("SELECT COUNT(*) as count FROM entrance_attendance WHERE session_date = ? AND person_type = 'student'", [todayDate])?.count || 0;
    const studentsTotal = DB.queryOne("SELECT COUNT(*) as count FROM students WHERE active = 1")?.count || 0;
    const teachersPresent = DB.queryOne("SELECT COUNT(*) as count FROM entrance_attendance WHERE session_date = ? AND person_type = 'teacher'", [todayDate])?.count || 0;
    const teachersTotal = DB.queryOne("SELECT COUNT(*) as count FROM teachers WHERE active = 1")?.count || 0;

    res.json({
      success: true,
      action,
      person_type: personType,
      person: {
        id: person.id,
        matricule: person.matricule,
        first_name: person.first_name,
        last_name: person.last_name,
        photo_url: person.photo_url || null,
        gender: person.gender || 'M',
        level_name: person.level_name || null,
        subject_name: person.subject_name || null,
        phone: person.phone || person.parent_phone || null
      },
      attendance: {
        session_date: todayDate,
        check_in_time: checkInTime,
        check_out_time: checkOutTime,
        duration_minutes: durationMinutes
      },
      stats: {
        students_present: studentsPresent,
        students_total: studentsTotal,
        teachers_present: teachersPresent,
        teachers_total: teachersTotal,
        total_present: studentsPresent + teachersPresent
      },
      message,
      timestamp: currentTime
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Live list of entrance attendances for a given date
app.get('/api/entrance/live-list', (req, res) => {
  try {
    const { session_date, type, search } = req.query;
    const targetDate = session_date || new Date().toISOString().split('T')[0];

    let sql = `
      SELECT 
        ea.*,
        CASE 
          WHEN ea.person_type = 'student' THEN s.matricule
          ELSE t.matricule
        END as matricule,
        CASE 
          WHEN ea.person_type = 'student' THEN s.first_name
          ELSE t.first_name
        END as first_name,
        CASE 
          WHEN ea.person_type = 'student' THEN s.last_name
          ELSE t.last_name
        END as last_name,
        CASE 
          WHEN ea.person_type = 'student' THEN s.photo_url
          ELSE t.photo_url
        END as photo_url,
        CASE 
          WHEN ea.person_type = 'student' THEN s.gender
          ELSE 'M'
        END as gender,
        CASE 
          WHEN ea.person_type = 'student' THEN l.name
          ELSE sub.name
        END as extra_label,
        CASE 
          WHEN ea.person_type = 'student' THEN COALESCE(s.phone, s.parent_phone)
          ELSE t.phone
        END as phone
      FROM entrance_attendance ea
      LEFT JOIN students s ON ea.person_type = 'student' AND ea.person_id = s.id
      LEFT JOIN levels l ON s.level_id = l.id
      LEFT JOIN teachers t ON ea.person_type = 'teacher' AND ea.person_id = t.id
      LEFT JOIN subjects sub ON t.subject_id = sub.id
      WHERE ea.session_date = ?
    `;
    const params = [targetDate];

    if (type === 'student' || type === 'teacher') {
      sql += ` AND ea.person_type = ?`;
      params.push(type);
    }

    if (search && search.trim()) {
      const term = `%${search.trim()}%`;
      sql += ` AND (s.first_name LIKE ? OR s.last_name LIKE ? OR s.matricule LIKE ? OR t.first_name LIKE ? OR t.last_name LIKE ? OR t.matricule LIKE ?)`;
      params.push(term, term, term, term, term, term);
    }

    sql += ` ORDER BY ea.id DESC`;

    const records = DB.queryAll(sql, params);

    const studentsPresent = DB.queryOne("SELECT COUNT(*) as count FROM entrance_attendance WHERE session_date = ? AND person_type = 'student'", [targetDate])?.count || 0;
    const studentsTotal = DB.queryOne("SELECT COUNT(*) as count FROM students WHERE active = 1")?.count || 0;
    const teachersPresent = DB.queryOne("SELECT COUNT(*) as count FROM entrance_attendance WHERE session_date = ? AND person_type = 'teacher'", [targetDate])?.count || 0;
    const teachersTotal = DB.queryOne("SELECT COUNT(*) as count FROM teachers WHERE active = 1")?.count || 0;

    res.json({
      success: true,
      records,
      stats: {
        students_present: studentsPresent,
        students_total: studentsTotal,
        teachers_present: teachersPresent,
        teachers_total: teachersTotal,
        total_present: studentsPresent + teachersPresent
      }
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Delete entrance attendance record
app.delete('/api/entrance/:id', (req, res) => {
  try {
    const { id } = req.params;
    DB.run('DELETE FROM entrance_attendance WHERE id = ?', [id]);
    res.json({ success: true, message: 'Enregistrement de présence à l’entrée supprimé avec succès' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Single teacher details endpoint
app.get('/api/teachers/:id', (req, res) => {
  try {
    const { id } = req.params;
    const teacher = DB.queryOne(`
      SELECT t.*, sub.name as subject_name
      FROM teachers t
      LEFT JOIN subjects sub ON t.subject_id = sub.id
      WHERE t.id = ?
    `, [id]);

    if (!teacher) {
      return res.status(404).json({ success: false, error: 'Enseignant non trouvé' });
    }

    const groups = DB.queryAll(`
      SELECT g.*, sub.name as subject_name, l.name as level_name
      FROM groups g
      LEFT JOIN subjects sub ON g.subject_id = sub.id
      LEFT JOIN levels l ON g.level_id = l.id
      WHERE g.teacher_id = ? AND g.active = 1
    `, [id]);

    res.json({ success: true, teacher, groups });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// -------------------------------------------------------------
// Helper to calculate teacher earnings and dues across 8 modes for a month with deduction of payments already made
function calculateTeacherMonthlyFinancials(teacher, currentMonth) {
  const groupsData = DB.queryAll(`
    SELECT g.id as group_id, g.name as group_name, g.day_of_week, g.start_time, g.end_time, g.price_monthly,
           (SELECT COUNT(*) FROM enrollments WHERE group_id = g.id AND status = 'active') as students_count,
           COALESCE(SUM(p.paid_amount), 0) as total_collected,
           COUNT(DISTINCT p.student_id) as students_paid_count
    FROM groups g
    LEFT JOIN payments p ON p.group_id = g.id AND strftime('%Y-%m', p.payment_date) = ?
    WHERE g.teacher_id = ? AND g.active = 1
    GROUP BY g.id
  `, [currentMonth, teacher.id]);

  const totalCollected = groupsData.reduce((sum, g) => sum + g.total_collected, 0);
  const totalStudents = groupsData.reduce((sum, g) => sum + g.students_count, 0);

  // Estimate weekly hours from schedules
  let weeklyHours = 0;
  groupsData.forEach(g => {
    if (g.start_time && g.end_time) {
      const [sh, sm] = g.start_time.split(':').map(Number);
      const [eh, em] = g.end_time.split(':').map(Number);
      const diffHours = (eh + em / 60) - (sh + sm / 60);
      if (diffHours > 0) weeklyHours += diffHours;
    } else {
      weeklyHours += 2; // default 2 hours per session
    }
  });

  const sessionsPerMonth = groupsData.length * 4;
  const hoursPerMonth = Math.round(weeklyHours * 4 * 10) / 10;

  // 8 Remuneration Modes calculations
  const ratePercent = parseFloat(teacher.remuneration_rate) || 50;
  const tarifHeure = parseFloat(teacher.tarif_heure) || 1200;
  const tarifSeance = parseFloat(teacher.tarif_seance) || 2000;
  const salaireFixe = parseFloat(teacher.salaire_fixe) || 40000;
  const tarifParEleve = parseFloat(teacher.tarif_par_eleve) || 1000;

  // Existing payouts for this teacher in this specific period
  const periodPayouts = DB.queryAll(`
    SELECT tp.*, c.payment_method, c.reference as caisse_reference
    FROM teacher_payouts tp
    LEFT JOIN caisse c ON tp.caisse_id = c.id
    WHERE tp.teacher_id = ? AND tp.period = ?
    ORDER BY tp.id DESC
  `, [teacher.id, currentMonth]);

  const alreadyPaid = periodPayouts.reduce((sum, p) => sum + (parseFloat(p.paid_amount) || 0), 0);

  const rawModes = {
    percent: {
      label: 'Pourcentage sur encaissement (%)',
      rate: ratePercent,
      unit: '%',
      base: totalCollected,
      gross_amount: Math.round((totalCollected * ratePercent) / 100)
    },
    hourly: {
      label: 'Tarif horaire (par heure)',
      rate: tarifHeure,
      unit: 'DA/h',
      base: hoursPerMonth,
      gross_amount: Math.round(tarifHeure * hoursPerMonth)
    },
    per_session: {
      label: 'Tarif par séance',
      rate: tarifSeance,
      unit: 'DA/séance',
      base: sessionsPerMonth,
      gross_amount: Math.round(tarifSeance * sessionsPerMonth)
    },
    fixed_salary: {
      label: 'Salaire mensuel fixe',
      rate: salaireFixe,
      unit: 'DA',
      base: 1,
      gross_amount: Math.round(salaireFixe)
    },
    hourly_per_student: {
      label: 'Horaire × Nombre d’élèves',
      rate: tarifHeure,
      unit: 'DA/h/élève',
      base: hoursPerMonth * totalStudents,
      gross_amount: Math.round(tarifHeure * hoursPerMonth * totalStudents)
    },
    session_per_student: {
      label: 'Par séance × Nombre d’élèves',
      rate: tarifSeance,
      unit: 'DA/séance/élève',
      base: sessionsPerMonth * totalStudents,
      gross_amount: Math.round(tarifSeance * sessionsPerMonth * totalStudents)
    },
    percent_per_student: {
      label: 'Pourcentage par élève',
      rate: ratePercent,
      unit: '%/élève',
      base: totalCollected,
      gross_amount: Math.round((totalCollected * ratePercent) / 100)
    },
    fixed_per_student: {
      label: 'Forfait fixe par élève inscrit',
      rate: tarifParEleve,
      unit: 'DA/élève',
      base: totalStudents,
      gross_amount: Math.round(tarifParEleve * totalStudents)
    }
  };

  const modes = {};
  for (const [k, v] of Object.entries(rawModes)) {
    const gross = v.gross_amount;
    const remaining = Math.max(0, gross - alreadyPaid);
    let status = 'none';
    if (gross > 0 && alreadyPaid >= gross) status = 'paid';
    else if (gross > 0 && alreadyPaid > 0 && alreadyPaid < gross) status = 'partial';
    else if (gross > 0 && alreadyPaid === 0) status = 'unpaid';
    else if (gross === 0 && alreadyPaid > 0) status = 'paid';

    modes[k] = {
      ...v,
      already_paid: alreadyPaid,
      remaining,
      amount: remaining, // Amount to pay defaults to remaining balance!
      status
    };
  }

  const activeModeKey = teacher.remuneration_type || 'percent';
  const activeMode = modes[activeModeKey] || modes.percent;

  return {
    groupsData,
    totalCollected,
    totalStudents,
    sessionsPerMonth,
    hoursPerMonth,
    periodPayouts,
    alreadyPaid,
    activeModeKey,
    activeGross: activeMode.gross_amount,
    activeRemaining: activeMode.remaining,
    activeStatus: activeMode.status,
    modes
  };
}

// -------------------------------------------------------------
// 6. TEACHERS API (Corps Enseignant)
// -------------------------------------------------------------
app.get('/api/teachers', (req, res) => {
  try {
    const { search, month } = req.query;
    const currentMonth = month || new Date().toISOString().slice(0, 7);

    let sql = `
      SELECT t.*, (t.first_name || ' ' || t.last_name) as name, sub.name as subject_name,
             (SELECT COUNT(*) FROM groups WHERE teacher_id = t.id AND active = 1) as groups_count,
             (SELECT GROUP_CONCAT(name, ', ') FROM groups WHERE teacher_id = t.id AND active = 1) as assigned_groups
      FROM teachers t
      LEFT JOIN subjects sub ON t.subject_id = sub.id
      WHERE t.active = 1
    `;
    const params = [];
    if (search && search.trim()) {
      sql += ` AND (t.first_name LIKE ? OR t.last_name LIKE ? OR (t.first_name || ' ' || t.last_name) LIKE ? OR t.matricule LIKE ? OR t.phone LIKE ? OR t.grade LIKE ? OR sub.name LIKE ?)`;
      const term = `%${search.trim()}%`;
      params.push(term, term, term, term, term, term, term);
    }
    sql += ` ORDER BY t.id DESC`;
    const teachers = DB.queryAll(sql, params);

    // Optional legacy financial enrichment (safe fallback)
    teachers.forEach(t => {
      try {
        const fin = calculateTeacherMonthlyFinancials(t, currentMonth);
        t.month = currentMonth;
        t.estimated_gross = fin.activeGross;
        t.already_paid = fin.alreadyPaid;
        t.remaining_due = fin.activeRemaining;
        t.payout_status = fin.activeStatus;
      } catch (e) {
        t.payout_status = 'none';
      }
    });

    res.json({ success: true, teachers, month: currentMonth });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.post('/api/teachers', (req, res) => {
  try {
    const { matricule: customMatricule, first_name, last_name, phone, email, subject_id, grade, remuneration_type, remuneration_rate, tarif_heure, tarif_seance, salaire_fixe, tarif_par_eleve } = req.body;
    if (!first_name || !last_name) {
      return res.status(400).json({ success: false, error: 'Nom et Prénom de l’enseignant sont requis' });
    }

    const newTeacher = DB.transaction(() => {
      let matricule = (customMatricule || '').trim();
      if (matricule) {
        const existing = DB.queryOne("SELECT id FROM teachers WHERE matricule = ? COLLATE NOCASE", [matricule]);
        if (existing) {
          throw new Error(`Le matricule enseignant "${matricule}" est déjà utilisé.`);
        }
      } else {
        let candidateNum = (DB.queryOne("SELECT MAX(id) as max_id FROM teachers")?.max_id || 0) + 1;
        matricule = `ENS-${String(candidateNum).padStart(3, '0')}`;
        while (DB.queryOne("SELECT id FROM teachers WHERE matricule = ? COLLATE NOCASE", [matricule])) {
          candidateNum++;
          matricule = `ENS-${String(candidateNum).padStart(3, '0')}`;
        }
      }

      // Validate subject_id exists to prevent foreign key errors
      let validSubId = toNullableId(subject_id);
      if (validSubId) {
        const sCheck = DB.queryOne("SELECT id FROM subjects WHERE id = ?", [validSubId]);
        if (!sCheck) validSubId = null;
      }

      const result = DB.run(`
        INSERT INTO teachers (matricule, first_name, last_name, phone, email, subject_id, grade, remuneration_type, remuneration_rate, tarif_heure, tarif_seance, salaire_fixe, tarif_par_eleve, active)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1)
      `, [
        matricule, first_name.trim(), last_name.trim(), phone || null, email || null, validSubId,
        grade || 'prof_titulaire',
        remuneration_type || 'percent', parseFloat(remuneration_rate) || 50.0,
        parseFloat(tarif_heure) || 0, parseFloat(tarif_seance) || 0,
        parseFloat(salaire_fixe) || 0, parseFloat(tarif_par_eleve) || 0
      ]);

      return { teacherId: result.lastInsertRowid, matricule };
    });

    res.json({ success: true, teacherId: newTeacher.teacherId, matricule: newTeacher.matricule });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});

app.put('/api/teachers/:id', (req, res) => {
  try {
    const { id } = req.params;
    const { matricule: customMatricule, first_name, last_name, phone, email, subject_id, grade, remuneration_type, remuneration_rate, tarif_heure, tarif_seance, salaire_fixe, tarif_par_eleve } = req.body;
    
    const currentTeacher = DB.queryOne("SELECT * FROM teachers WHERE id = ?", [id]);
    if (!currentTeacher) {
      return res.status(404).json({ success: false, error: 'Enseignant non trouvé' });
    }

    let matricule = currentTeacher.matricule;
    if (customMatricule && customMatricule.trim()) {
      const cleanMatricule = customMatricule.trim();
      const existing = DB.queryOne("SELECT id FROM teachers WHERE matricule = ? COLLATE NOCASE AND id != ?", [cleanMatricule, id]);
      if (existing) {
        return res.status(400).json({ success: false, error: `Le matricule enseignant "${cleanMatricule}" est déjà attribué à un autre enseignant.` });
      }
      matricule = cleanMatricule;
    }

    DB.run(`
      UPDATE teachers 
      SET matricule = ?, first_name = ?, last_name = ?, phone = ?, email = ?, subject_id = ?, 
          grade = ?,
          remuneration_type = ?, remuneration_rate = ?,
          tarif_heure = ?, tarif_seance = ?, salaire_fixe = ?, tarif_par_eleve = ?
      WHERE id = ?
    `, [
      matricule, first_name.trim(), last_name.trim(), phone || null, email || null, toNullableId(subject_id),
      grade || currentTeacher.grade || 'prof_titulaire',
      remuneration_type || 'percent', parseFloat(remuneration_rate) || 50.0,
      parseFloat(tarif_heure) || 0, parseFloat(tarif_seance) || 0,
      parseFloat(salaire_fixe) || 0, parseFloat(tarif_par_eleve) || 0,
      id
    ]);
    res.json({ success: true, message: 'Enseignant mis à jour avec succès', matricule });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Calculate teacher earnings across 8 modes for a month with already-paid deduction
app.get('/api/teachers/:id/earnings', (req, res) => {
  try {
    const { id } = req.params;
    const { month } = req.query; // format 'YYYY-MM'
    const currentMonth = month || new Date().toISOString().slice(0, 7);

    const teacher = DB.queryOne("SELECT * FROM teachers WHERE id = ?", [id]);
    if (!teacher) return res.status(404).json({ success: false, error: 'Enseignant non trouvé' });

    const fin = calculateTeacherMonthlyFinancials(teacher, currentMonth);

    // Past payouts history across all periods for this teacher
    const payoutsHistory = DB.queryAll(`
      SELECT tp.*, c.payment_method, c.reference as caisse_reference
      FROM teacher_payouts tp
      LEFT JOIN caisse c ON tp.caisse_id = c.id
      WHERE tp.teacher_id = ?
      ORDER BY tp.id DESC
      LIMIT 20
    `, [id]);

    res.json({
      success: true,
      teacher,
      month: currentMonth,
      groupsData: fin.groupsData,
      totalCollected: fin.totalCollected,
      totalStudents: fin.totalStudents,
      sessionsPerMonth: fin.sessionsPerMonth,
      hoursPerMonth: fin.hoursPerMonth,
      modes: fin.modes,
      alreadyPaid: fin.alreadyPaid,
      periodPayouts: fin.periodPayouts,
      activeModeKey: fin.activeModeKey,
      activeGross: fin.activeGross,
      activeRemaining: fin.activeRemaining,
      activeStatus: fin.activeStatus,
      payoutsHistory
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Teacher Payout and Automatic Caisse Outflow
app.post('/api/teachers/payout', (req, res) => {
  try {
    const {
      teacher_id,
      period,
      remuneration_mode,
      base_calculation,
      rate_value,
      students_count,
      sessions_count,
      hours_count,
      total_collected,
      teacher_share_percent,
      gross_amount,
      paid_amount,
      payment_method,
      notes
    } = req.body;

    if (!teacher_id) return res.status(400).json({ success: false, error: 'Enseignant requis' });
    const amount = parseFloat(paid_amount);
    if (!amount || amount <= 0) return res.status(400).json({ success: false, error: 'Montant invalide' });

    const teacher = DB.queryOne("SELECT * FROM teachers WHERE id = ?", [teacher_id]);
    if (!teacher) return res.status(404).json({ success: false, error: 'Enseignant non trouvé' });

    const periodStr = period || new Date().toISOString().slice(0, 7);
    const nowP = new Date();
    const curDate = nowP.toISOString().split('T')[0];
    const curTime = nowP.toTimeString().split(' ')[0];

    const shareAmount = parseFloat(gross_amount) > 0 ? parseFloat(gross_amount) : amount;

    // 1. Insert into teacher_payouts
    const payoutResult = DB.run(`
      INSERT INTO teacher_payouts
        (teacher_id, period, remuneration_mode, base_calculation, rate_value, students_count, sessions_count, hours_count, total_collected, teacher_share_percent, teacher_share_amount, paid_amount, payout_date, notes)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP, ?)
    `, [
      teacher_id,
      periodStr,
      remuneration_mode || 'percent',
      parseFloat(base_calculation) || 0,
      parseFloat(rate_value) || 0,
      parseInt(students_count) || 0,
      parseInt(sessions_count) || 0,
      parseFloat(hours_count) || 0,
      parseFloat(total_collected) || 0,
      parseFloat(teacher_share_percent) || 0,
      shareAmount,
      amount,
      notes || null
    ]);

    const payoutId = payoutResult.lastInsertRowid;
    const receiptRef = `PAY-${nowP.getFullYear()}-${String(payoutId).padStart(4, '0')}`;

    // 2. Automatic Caisse Outflow
    const caisseRes = DB.run(`
      INSERT INTO caisse (type, category, amount, title, reference, payment_method, teacher_payout_id, user_name, movement_date, movement_time)
      VALUES ('sortie', 'Salaire enseignant', ?, ?, ?, ?, ?, 'Secrétariat', ?, ?)
    `, [
      amount,
      `Règlement honoraires ${teacher.first_name} ${teacher.last_name} (${periodStr})`,
      receiptRef,
      payment_method || 'espece',
      payoutId,
      curDate,
      curTime
    ]);

    DB.run("UPDATE teacher_payouts SET caisse_id = ? WHERE id = ?", [caisseRes.lastInsertRowid, payoutId]);

    const payout = DB.queryOne(`
      SELECT tp.*, t.first_name, t.last_name, t.matricule, t.phone, sub.name as subject_name
      FROM teacher_payouts tp
      JOIN teachers t ON tp.teacher_id = t.id
      LEFT JOIN subjects sub ON t.subject_id = sub.id
      WHERE tp.id = ?
    `, [payoutId]);

    res.json({
      success: true,
      payout,
      receiptRef,
      message: `Honoraires de ${amount.toLocaleString('fr-DZ')} DA enregistrés avec succès`
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Cancel / Delete a teacher payout and rollback associated caisse transaction
app.delete('/api/teachers/payouts/:id', (req, res) => {
  try {
    const { id } = req.params;
    const payout = DB.queryOne("SELECT * FROM teacher_payouts WHERE id = ?", [id]);
    if (!payout) {
      return res.status(404).json({ success: false, error: 'Règlement introuvable' });
    }

    // Delete associated caisse transaction to keep Treasury completely accurate
    if (payout.caisse_id) {
      DB.run("DELETE FROM caisse WHERE id = ?", [payout.caisse_id]);
    }
    DB.run("DELETE FROM caisse WHERE teacher_payout_id = ?", [id]);

    // Delete payout record
    DB.run("DELETE FROM teacher_payouts WHERE id = ?", [id]);

    res.json({
      success: true,
      message: `Règlement de ${Number(payout.paid_amount).toLocaleString('fr-DZ')} DA annulé et solde de caisse rétabli.`
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Past payouts list for a teacher
app.get('/api/teachers/:id/payouts', (req, res) => {
  try {
    const payouts = DB.queryAll(`
      SELECT tp.*, c.payment_method, c.reference as caisse_reference
      FROM teacher_payouts tp
      LEFT JOIN caisse c ON tp.caisse_id = c.id
      WHERE tp.teacher_id = ?
      ORDER BY tp.id DESC
    `, [req.params.id]);
    res.json({ success: true, payouts });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// -------------------------------------------------------------
// 7. CAISSE (TREASURY) & EXPENSES - COMPREHENSIVE ENGINE
// -------------------------------------------------------------
app.get('/api/caisse/summary', (req, res) => {
  try {
    const today = new Date().toISOString().split('T')[0];
    const currentMonth = new Date().toISOString().slice(0, 7);

    // Today's movements
    const todayIn = DB.queryOne("SELECT COALESCE(SUM(amount), 0) as total FROM caisse WHERE type = 'entree' AND movement_date = ?", [today]).total;
    const todayOut = DB.queryOne("SELECT COALESCE(SUM(amount), 0) as total FROM caisse WHERE type = 'sortie' AND movement_date = ?", [today]).total;

    // Current Month movements
    const monthIn = DB.queryOne("SELECT COALESCE(SUM(amount), 0) as total FROM caisse WHERE type = 'entree' AND strftime('%Y-%m', movement_date) = ?", [currentMonth]).total;
    const monthOut = DB.queryOne("SELECT COALESCE(SUM(amount), 0) as total FROM caisse WHERE type = 'sortie' AND strftime('%Y-%m', movement_date) = ?", [currentMonth]).total;

    // All-time totals & Net Balance
    const totalIn = DB.queryOne("SELECT COALESCE(SUM(amount), 0) as total FROM caisse WHERE type = 'entree'").total;
    const totalOut = DB.queryOne("SELECT COALESCE(SUM(amount), 0) as total FROM caisse WHERE type = 'sortie'").total;
    const soldeNet = totalIn - totalOut;

    // Category breakdown
    const categoriesIn = DB.queryAll("SELECT category, COALESCE(SUM(amount), 0) as total, COUNT(*) as count FROM caisse WHERE type = 'entree' GROUP BY category ORDER BY total DESC");
    const categoriesOut = DB.queryAll("SELECT category, COALESCE(SUM(amount), 0) as total, COUNT(*) as count FROM caisse WHERE type = 'sortie' GROUP BY category ORDER BY total DESC");

    res.json({
      success: true,
      today: {
        income: todayIn,
        expenses: todayOut,
        balance: todayIn - todayOut
      },
      month: {
        income: monthIn,
        expenses: monthOut,
        balance: monthIn - monthOut
      },
      allTime: {
        totalIncome: totalIn,
        totalExpenses: totalOut,
        soldeNet
      },
      categoriesIn,
      categoriesOut
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Caisse available months summary for export and reporting
app.get('/api/caisse/months', (req, res) => {
  try {
    const rows = DB.queryAll(`
      SELECT strftime('%Y-%m', movement_date) as month_period,
             COUNT(*) as count,
             COALESCE(SUM(CASE WHEN type = 'entree' THEN amount ELSE 0 END), 0) as total_entrees,
             COALESCE(SUM(CASE WHEN type = 'sortie' THEN amount ELSE 0 END), 0) as total_sorties,
             COALESCE(SUM(CASE WHEN type = 'entree' THEN amount ELSE -amount END), 0) as solde_net
      FROM caisse
      WHERE movement_date IS NOT NULL AND movement_date != ''
      GROUP BY strftime('%Y-%m', movement_date)
      ORDER BY month_period DESC
    `);
    res.json({ success: true, months: rows });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Caisse full movements log with filters
app.get('/api/caisse/movements', (req, res) => {
  try {
    const { type, category, from, to, month, months, from_month, to_month, method, search, all, limit } = req.query;
    let sql = `
      SELECT c.*,
             COALESCE(s.first_name || ' ' || s.last_name, t.first_name || ' ' || t.last_name, c.user_name) as person_name
      FROM caisse c
      LEFT JOIN payments p ON c.payment_id = p.id
      LEFT JOIN students s ON p.student_id = s.id
      LEFT JOIN teacher_payouts tp ON c.teacher_payout_id = tp.id
      LEFT JOIN teachers t ON tp.teacher_id = t.id
      WHERE 1 = 1
    `;
    const params = [];

    if (type && type !== 'all') {
      sql += ` AND c.type = ?`;
      params.push(type);
    }
    if (category && category !== 'all') {
      sql += ` AND c.category = ?`;
      params.push(category);
    }
    if (method && method !== 'all') {
      sql += ` AND c.payment_method = ?`;
      params.push(method);
    }
    if (from) {
      sql += ` AND c.movement_date >= ?`;
      params.push(from);
    }
    if (to) {
      sql += ` AND c.movement_date <= ?`;
      params.push(to);
    }
    if (month && month.trim()) {
      sql += ` AND strftime('%Y-%m', c.movement_date) = ?`;
      params.push(month.trim());
    } else if (months && months.trim()) {
      const monthList = months.split(',').map(m => m.trim()).filter(Boolean);
      if (monthList.length > 0) {
        const placeholders = monthList.map(() => '?').join(',');
        sql += ` AND strftime('%Y-%m', c.movement_date) IN (${placeholders})`;
        params.push(...monthList);
      }
    } else if (from_month || to_month) {
      if (from_month && from_month.trim()) {
        sql += ` AND strftime('%Y-%m', c.movement_date) >= ?`;
        params.push(from_month.trim());
      }
      if (to_month && to_month.trim()) {
        sql += ` AND strftime('%Y-%m', c.movement_date) <= ?`;
        params.push(to_month.trim());
      }
    }
    if (search && search.trim()) {
      sql += ` AND (c.title LIKE ? OR c.reference LIKE ? OR c.category LIKE ? OR s.first_name LIKE ? OR s.last_name LIKE ? OR t.first_name LIKE ? OR t.last_name LIKE ? OR c.user_name LIKE ?)`;
      const s = `%${search.trim()}%`;
      params.push(s, s, s, s, s, s, s, s);
    }

    sql += ` ORDER BY c.movement_date DESC, c.movement_time DESC, c.id DESC`;
    if (!all || all === 'false' || all === '0') {
      sql += ` LIMIT ?`;
      params.push(parseInt(limit) || 100);
    }

    const movements = DB.queryAll(sql, params);
    res.json({ success: true, movements });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Add manual caisse movement (Inflow or Outflow)
app.post('/api/caisse/add', (req, res) => {
  try {
    const { type, category, amount, title, reference, payment_method, user_name, movement_date } = req.body;
    if (!['entree', 'sortie'].includes(type)) {
      return res.status(400).json({ success: false, error: 'Type invalide (entree ou sortie requis)' });
    }
    const val = parseFloat(amount);
    if (!val || val <= 0) {
      return res.status(400).json({ success: false, error: 'Montant invalide' });
    }
    if (!title) {
      return res.status(400).json({ success: false, error: 'Titre / Désignation requise' });
    }

    const now = new Date();
    const dateM = movement_date || now.toISOString().split('T')[0];
    const timeM = now.toTimeString().split(' ')[0];

    const result = DB.run(`
      INSERT INTO caisse (type, category, amount, title, reference, payment_method, user_name, movement_date, movement_time)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `, [
      type,
      category || (type === 'entree' ? 'Autre entrée' : 'Autre dépense'),
      val,
      title,
      reference || (type === 'entree' ? `REC-M-${Date.now().toString().slice(-4)}` : `DEP-M-${Date.now().toString().slice(-4)}`),
      payment_method || 'espece',
      user_name || 'Secrétariat',
      dateM,
      timeM
    ]);

    // Also record into legacy expenses table if it's a sortie so legacy widgets don't break
    if (type === 'sortie') {
      try {
        DB.run(`
          INSERT INTO expenses (title, category, amount, expense_date, notes)
          VALUES (?, ?, ?, ?, ?)
        `, [title, category || 'Autre', val, dateM, reference]);
      } catch (e) {}
    }

    const newMovement = DB.queryOne("SELECT * FROM caisse WHERE id = ?", [result.lastInsertRowid]);
    res.json({ success: true, movement: newMovement });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Delete caisse movement
app.delete('/api/caisse/:id', (req, res) => {
  try {
    DB.run("DELETE FROM caisse WHERE id = ?", [req.params.id]);
    res.json({ success: true, message: 'Mouvement supprimé' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Legacy expenses POST for compatibility
app.post('/api/expenses', (req, res) => {
  try {
    const { title, category, amount, notes, expense_date } = req.body;
    const date = expense_date || new Date().toISOString().split('T')[0];
    const val = parseFloat(amount) || 0;

    const result = DB.run(`
      INSERT INTO expenses (title, category, amount, expense_date, notes)
      VALUES (?, ?, ?, ?, ?)
    `, [title, category || 'Autre', val, date, notes]);

    // Mirror to caisse
    const now = new Date();
    DB.run(`
      INSERT INTO caisse (type, category, amount, title, reference, payment_method, expense_id, user_name, movement_date, movement_time)
      VALUES ('sortie', ?, ?, ?, ?, 'espece', ?, 'Secrétariat', ?, ?)
    `, [category || 'Autre', val, title, `DEP-${result.lastInsertRowid}`, result.lastInsertRowid, date, now.toTimeString().split(' ')[0]]);

    res.json({ success: true, expenseId: result.lastInsertRowid });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// -------------------------------------------------------------
// 8. CONFIGURATION (LEVELS, SUBJECTS, ROOMS, SETTINGS & BACKUP)
// -------------------------------------------------------------
app.get('/api/levels', (req, res) => {
  try {
    const { all, cycles } = req.query;

    if (all === 'true') {
      const levels = DB.queryAll("SELECT * FROM levels ORDER BY display_order ASC");
      return res.json({ success: true, levels, activeCycles: ['Primaire', 'CEM', 'Lycee'] });
    }

    let selectedCycles = null;
    if (cycles) {
      selectedCycles = cycles.split(',').map(c => c.trim()).filter(Boolean);
    } else {
      const savedCycles = DB.queryOne("SELECT value FROM settings WHERE key = 'school_cycles'");
      if (savedCycles && savedCycles.value) {
        try {
          const parsed = JSON.parse(savedCycles.value);
          if (Array.isArray(parsed) && parsed.length > 0) {
            selectedCycles = parsed;
          }
        } catch (e) {}
      }
    }

    // Default fallback based on school_type or CEM
    if (!selectedCycles || selectedCycles.length === 0) {
      const schoolType = DB.queryOne("SELECT value FROM settings WHERE key = 'school_type'")?.value;
      if (schoolType === 'public_primaire') selectedCycles = ['Primaire'];
      else if (schoolType === 'public_lycee') selectedCycles = ['Lycee'];
      else if (schoolType === 'public_cem') selectedCycles = ['CEM'];
      else selectedCycles = ['Primaire', 'CEM', 'Lycee'];
    }

    const placeholders = selectedCycles.map(() => '?').join(',');
    const levels = DB.queryAll(`SELECT * FROM levels WHERE category IN (${placeholders}) ORDER BY display_order ASC`, selectedCycles);
    res.json({ success: true, levels, activeCycles: selectedCycles });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.post('/api/levels', (req, res) => {
  try {
    const { name, category, display_order } = req.body;
    const result = DB.run(
      "INSERT INTO levels (name, category, display_order) VALUES (?, ?, ?)",
      [name, category || 'CEM', display_order || 0]
    );
    res.json({ success: true, levelId: result.lastInsertRowid });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.put('/api/levels/:id', (req, res) => {
  try {
    const { name, category, display_order } = req.body;
    DB.run("UPDATE levels SET name = ?, category = ?, display_order = ? WHERE id = ?",
      [name, category || 'CEM', display_order || 0, req.params.id]);
    res.json({ success: true, message: 'Niveau mis à jour' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.delete('/api/levels/:id', (req, res) => {
  try {
    DB.run("DELETE FROM levels WHERE id = ?", [req.params.id]);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.get('/api/subjects', (req, res) => {
  const subjects = DB.queryAll("SELECT * FROM subjects ORDER BY name ASC");
  res.json({ success: true, subjects });
});

app.post('/api/subjects', (req, res) => {
  try {
    const { name, code, color } = req.body;
    const result = DB.run(
      "INSERT INTO subjects (name, code, color) VALUES (?, ?, ?)",
      [name, code || name.slice(0, 4).toUpperCase(), color || '#3b82f6']
    );
    res.json({ success: true, subjectId: result.lastInsertRowid });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.put('/api/subjects/:id', (req, res) => {
  try {
    const { name, code, color } = req.body;
    DB.run("UPDATE subjects SET name = ?, code = ?, color = ? WHERE id = ?",
      [name, code, color, req.params.id]);
    res.json({ success: true, message: 'Matière mise à jour' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.delete('/api/subjects/:id', (req, res) => {
  try {
    DB.run("DELETE FROM subjects WHERE id = ?", [req.params.id]);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.get('/api/rooms', (req, res) => {
  try {
    const rooms = DB.queryAll(`
      SELECT r.*,
        (SELECT COUNT(*) FROM groups g WHERE g.room_id = r.id AND g.active = 1) as active_groups_count,
        (SELECT GROUP_CONCAT(DISTINCT sub.name) 
         FROM groups g 
         JOIN subjects sub ON g.subject_id = sub.id 
         WHERE g.room_id = r.id AND g.active = 1) as subjects_list,
        (SELECT COUNT(DISTINCT g.day_of_week) FROM groups g WHERE g.room_id = r.id AND g.active = 1) as occupied_days_count
      FROM rooms r
      ORDER BY r.name ASC
    `);
    res.json({ success: true, rooms });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.get('/api/rooms/:id/schedule', (req, res) => {
  try {
    const roomId = req.params.id;
    const room = DB.queryOne("SELECT * FROM rooms WHERE id = ?", [roomId]);
    if (!room) {
      return res.status(404).json({ success: false, message: "Salle introuvable" });
    }

    const groups = DB.queryAll(`
      SELECT g.id, g.name, g.day_of_week, g.start_time, g.end_time, g.max_students,
             COALESCE(l.name, 'Sans niveau') as level_name,
             COALESCE(sub.name, 'Sans matière') as subject_name,
             COALESCE(sub.color, '#3b82f6') as subject_color,
             COALESCE(t.first_name || ' ' || t.last_name, 'Non assigné') as teacher_name,
             (SELECT COUNT(*) FROM enrollments WHERE group_id = g.id AND status = 'active') as enrolled_count
      FROM groups g
      LEFT JOIN levels l ON g.level_id = l.id
      LEFT JOIN subjects sub ON g.subject_id = sub.id
      LEFT JOIN teachers t ON g.teacher_id = t.id
      WHERE g.room_id = ? AND g.active = 1
      ORDER BY 
        CASE g.day_of_week
          WHEN 'Samedi' THEN 1
          WHEN 'Dimanche' THEN 2
          WHEN 'Lundi' THEN 3
          WHEN 'Mardi' THEN 4
          WHEN 'Mercredi' THEN 5
          WHEN 'Jeudi' THEN 6
          WHEN 'Vendredi' THEN 7
          ELSE 8
        END,
        g.start_time ASC
    `, [roomId]);

    res.json({ success: true, room, schedule: groups });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.post('/api/rooms', (req, res) => {
  try {
    const { name, capacity, has_projector, notes } = req.body;
    const result = DB.run(
      "INSERT INTO rooms (name, capacity, has_projector, notes) VALUES (?, ?, ?, ?)",
      [name, capacity || 25, has_projector ? 1 : 0, notes || '']
    );
    res.json({ success: true, roomId: result.lastInsertRowid });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.put('/api/rooms/:id', (req, res) => {
  try {
    const { name, capacity, has_projector, notes } = req.body;
    DB.run("UPDATE rooms SET name = ?, capacity = ?, has_projector = ?, notes = ? WHERE id = ?",
      [name, capacity, has_projector ? 1 : 0, notes || '', req.params.id]);
    res.json({ success: true, message: 'Salle mise à jour' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.delete('/api/rooms/:id', (req, res) => {
  try {
    DB.run("DELETE FROM rooms WHERE id = ?", [req.params.id]);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.delete('/api/teachers/:id', (req, res) => {
  try {
    DB.run("UPDATE teachers SET active = 0 WHERE id = ?", [req.params.id]);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.delete('/api/groups/:id', (req, res) => {
  try {
    DB.run("UPDATE groups SET active = 0 WHERE id = ?", [req.params.id]);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.get('/api/settings', (req, res) => {
  const rows = DB.queryAll("SELECT * FROM settings");
  const settings = {};
  rows.forEach(r => { settings[r.key] = r.value; });
  res.json({ success: true, settings });
});

app.post('/api/settings', (req, res) => {
  try {
    const entries = Object.entries(req.body);
    for (const [key, value] of entries) {
      DB.run("INSERT OR REPLACE INTO settings (key, value) VALUES (?, ?)", [key, String(value)]);
    }
    res.json({ success: true, message: 'Paramètres enregistrés' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// -------------------------------------------------------------
// AUTHENTICATION API
// -------------------------------------------------------------
app.post('/api/auth/login', (req, res) => {
  try {
    const { role = 'admin', password } = req.body;
    if (!password || typeof password !== 'string' || !password.trim()) {
      return res.status(400).json({ success: false, error: 'Mot de passe obligatoire' });
    }
    const adminPass = DB.queryOne("SELECT value FROM settings WHERE key = 'admin_password'")?.value || 'admin';
    if (password !== adminPass) {
      return res.status(401).json({ success: false, error: 'Mot de passe incorrect' });
    }
    const schoolName = DB.queryOne("SELECT value FROM settings WHERE key = 'school_name'")?.value || 'EDUMIND ACADEMY';
    res.json({
      success: true,
      user: {
        role: 'admin',
        name: 'Administrateur',
        schoolName
      },
      token: 'session_' + Date.now() + '_' + Math.random().toString(36).substring(2)
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.post('/api/auth/verify', (req, res) => {
  res.json({ success: true });
});

app.post('/api/settings/change-password', (req, res) => {
  try {
    const { old_password, new_password } = req.body;
    const currentPass = DB.queryOne("SELECT value FROM settings WHERE key = 'admin_password'")?.value || 'admin';
    if (old_password && old_password !== currentPass) {
      return res.status(400).json({ success: false, error: 'Mot de passe actuel incorrect' });
    }
    if (!new_password || new_password.length < 4) {
      return res.status(400).json({ success: false, error: 'Le mot de passe doit comporter au moins 4 caractères' });
    }
    DB.run("INSERT OR REPLACE INTO settings (key, value) VALUES ('admin_password', ?)", [new_password]);
    res.json({ success: true, message: 'Mot de passe modifié avec succès' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Database Backup Endpoints
app.get('/api/backup/download', (req, res) => {
  const dateStr = new Date().toISOString().split('T')[0];
  const tempBackup = path.join(os.tmpdir(), `temp_backup_${Date.now()}_${Math.random().toString(36).substring(2, 7)}.sqlite`);
  try {
    if (typeof DB.createInstantBackup === 'function') {
      DB.createInstantBackup(tempBackup);
      res.download(tempBackup, `EDUMIND_Backup_${dateStr}.sqlite`, (err) => {
        if (fs.existsSync(tempBackup)) {
          try { fs.unlinkSync(tempBackup); } catch (e) {}
        }
        if (err && !res.headersSent) {
          console.error('Erreur streaming backup:', err);
          res.status(500).send('Erreur: ' + err.message);
        }
      });
    } else {
      const dbFile = DB.getDatabasePath();
      res.download(dbFile, `EDUMIND_Backup_${dateStr}.sqlite`);
    }
  } catch (err) {
    console.error('Erreur téléchargement backup:', err);
    if (fs.existsSync(tempBackup)) {
      try { fs.unlinkSync(tempBackup); } catch (e) {}
    }
    const dbFile = DB.getDatabasePath();
    if (fs.existsSync(dbFile)) {
      res.download(dbFile, `EDUMIND_Backup_${dateStr}.sqlite`);
    } else {
      res.status(500).send('Erreur: ' + err.message);
    }
  }
});

// List existing daily backups in the archives
app.get('/api/backup/list', (req, res) => {
  try {
    const backupDir = DB.getBackupDirectory();
    if (!fs.existsSync(backupDir)) {
      return res.json({ success: true, backups: [] });
    }
    const files = fs.readdirSync(backupDir)
      .filter(f => f.startsWith('edumind_backup_') && f.endsWith('.sqlite'))
      .map(f => {
        const filePath = path.join(backupDir, f);
        const stats = fs.statSync(filePath);
        return {
          filename: f,
          sizeKb: Math.round(stats.size / 1024),
          createdAt: stats.mtime,
          dateStr: f.replace('edumind_backup_', '').replace('.sqlite', '')
        };
      })
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    res.json({ success: true, backups: files });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Download a specific archive backup file
app.get('/api/backup/download-archive/:filename', (req, res) => {
  const fileName = path.basename(req.params.filename);
  const filePath = path.join(DB.getBackupDirectory(), fileName);
  if (fs.existsSync(filePath) && fileName.startsWith('edumind_backup_') && fileName.endsWith('.sqlite')) {
    res.download(filePath, fileName);
  } else {
    res.status(404).send('Fichier d\'archive non trouvé');
  }
});

// Trigger an immediate manual backup
app.post('/api/backup/now', (req, res) => {
  try {
    if (typeof DB.performAutoBackup === 'function') {
      DB.performAutoBackup(7);
      res.json({ success: true, message: 'Sauvegarde effectuée avec succès' });
    } else {
      res.json({ success: false, message: 'Module de sauvegarde non prêt' });
    }
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Restore SQLite Database from uploaded file
app.post('/api/backup/restore', express.raw({ type: ['application/octet-stream', 'application/x-sqlite3', 'application/vnd.sqlite3', '*/*'], limit: '250mb' }), (req, res) => {
  let tempPath = null;
  try {
    const buffer = req.body;
    if (!buffer || !Buffer.isBuffer(buffer) || buffer.length < 100) {
      return res.status(400).json({ success: false, error: 'Fichier vide ou invalide.' });
    }

    const header = buffer.subarray(0, 16).toString('utf8');
    if (!header.startsWith('SQLite format 3')) {
      return res.status(400).json({ success: false, error: 'Le fichier fourni n\'est pas une base de données SQLite valide.' });
    }

    tempPath = path.join(os.tmpdir(), `temp_restore_${Date.now()}_${Math.random().toString(36).substring(2, 7)}.sqlite`);
    fs.writeFileSync(tempPath, buffer);

    if (typeof DB.restoreDatabase === 'function') {
      const result = DB.restoreDatabase(tempPath);
      if (result.success) {
        res.json({ success: true, message: 'Base de données restaurée avec succès' });
      } else {
        res.status(500).json({ success: false, error: result.error || 'Erreur lors de la restauration' });
      }
    } else {
      res.status(500).json({ success: false, error: 'Module de restauration non disponible' });
    }
  } catch (err) {
    console.error('Erreur restauration SQLite:', err);
    if (tempPath && fs.existsSync(tempPath)) {
      try { fs.unlinkSync(tempPath); } catch (e) {}
    }
    res.status(500).json({ success: false, error: err.message });
  }
});

// Restore SQLite Database from an existing archive file in backups/
app.post('/api/backup/restore-archive/:filename', (req, res) => {
  let tempCopy = null;
  try {
    const fileName = path.basename(req.params.filename);
    const filePath = path.join(DB.getBackupDirectory(), fileName);
    if (!fs.existsSync(filePath) || !fileName.endsWith('.sqlite')) {
      return res.status(404).json({ success: false, error: 'Fichier d\'archive non trouvé' });
    }

    tempCopy = path.join(os.tmpdir(), `temp_restore_arch_${Date.now()}_${Math.random().toString(36).substring(2, 7)}.sqlite`);
    fs.copyFileSync(filePath, tempCopy);

    const result = DB.restoreDatabase(tempCopy);
    if (result.success) {
      res.json({ success: true, message: 'Base de données restaurée depuis l\'archive avec succès' });
    } else {
      res.status(500).json({ success: false, error: result.error });
    }
  } catch (err) {
    if (tempCopy && fs.existsSync(tempCopy)) {
      try { fs.unlinkSync(tempCopy); } catch (e) {}
    }
    res.status(500).json({ success: false, error: err.message });
  }
});

// Universal PDF File Downloader (guarantees correct filename and MIME type across all browsers & OS)
app.post('/api/download-pdf', (req, res) => {
  try {
    const { filename, base64 } = req.body;
    if (!base64) {
      return res.status(400).send('Données de fichier manquantes');
    }
    const commaIdx = base64.indexOf(',');
    const cleanBase64 = commaIdx !== -1 ? base64.slice(commaIdx + 1) : base64;
    const buffer = Buffer.from(cleanBase64.trim(), 'base64');
    let safeFilename = (filename || 'Carte_Scolaire.pdf').trim();
    if (!safeFilename.toLowerCase().endsWith('.pdf')) {
      safeFilename += '.pdf';
    }
    const asciiFilename = safeFilename.replace(/[^a-zA-Z0-9_\-\.]/g, '_');

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="${asciiFilename}"`);
    res.setHeader('Content-Length', buffer.length);
    res.send(buffer);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// ============================================================
// CANTEEN / DEMI-PENSION PUBLIC SCHOOL APIS (المطعم المدرسي)
// ============================================================
app.get('/api/cantine/today', (req, res) => {
  try {
    const today = new Date().toISOString().split('T')[0];

    // Stats
    const totalDemi = DB.queryOne(`
      SELECT COUNT(*) as c FROM students 
      WHERE (regime = 'demi_pensionnaire' OR regime IS NULL) AND active = 1 AND canteen_active = 1
    `).c;

    const servedToday = DB.queryOne(`
      SELECT COUNT(*) as c FROM canteen_attendance 
      WHERE meal_date = ? AND status = 'served'
    `, [today]).c;

    // Live scan list for today
    const scans = DB.queryAll(`
      SELECT ca.id, ca.meal_date, ca.scan_time, ca.status,
             s.id as student_id, s.matricule, s.first_name, s.last_name, s.photo_url, s.regime,
             g.name as group_name, l.name as level_name
      FROM canteen_attendance ca
      JOIN students s ON ca.student_id = s.id
      LEFT JOIN enrollments e ON e.student_id = s.id AND e.status = 'active'
      LEFT JOIN groups g ON e.group_id = g.id
      LEFT JOIN levels l ON s.level_id = l.id
      WHERE ca.meal_date = ?
      ORDER BY ca.id DESC
      LIMIT 100
    `, [today]);

    res.json({
      success: true,
      stats: {
        totalDemi,
        servedToday,
        remaining: Math.max(0, totalDemi - servedToday),
        serviceRate: totalDemi > 0 ? Math.round((servedToday / totalDemi) * 100) : 0
      },
      scans
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.post('/api/cantine/scan', (req, res) => {
  try {
    const { query } = req.body;
    if (!query || !query.trim()) {
      return res.status(400).json({ success: false, error: 'رمز التلميذ أو رقم التسجيل مطلوب' });
    }
    const cleanQuery = query.trim();
    const today = new Date().toISOString().split('T')[0];
    const nowTime = new Date().toTimeString().split(' ')[0];

    // Find student by matricule or qr_code or id
    const student = DB.queryOne(`
      SELECT s.*, l.name as level_name, g.name as group_name
      FROM students s
      LEFT JOIN levels l ON s.level_id = l.id
      LEFT JOIN enrollments e ON e.student_id = s.id AND e.status = 'active'
      LEFT JOIN groups g ON e.group_id = g.id
      WHERE s.matricule = ? OR s.qr_code = ? OR s.id = ?
      LIMIT 1
    `, [cleanQuery, cleanQuery, parseInt(cleanQuery, 10) || 0]);

    if (!student) {
      return res.status(404).json({
        success: false,
        notFound: true,
        error: 'لم يتم العثور على أي تلميذ بهذا الرمز / الباركود'
      });
    }

    // Check regime
    const isDemi = student.regime === 'demi_pensionnaire' && student.canteen_active === 1;
    if (!isDemi) {
      return res.status(400).json({
        success: false,
        notSubscribed: true,
        student,
        error: 'تنبيه: التلميذ مسجل كنظام (خارجي Externe) أو غير مفعل في المطعم المدرسي'
      });
    }

    // Check anti-passback
    const existing = DB.queryOne(`
      SELECT * FROM canteen_attendance 
      WHERE student_id = ? AND meal_date = ?
    `, [student.id, today]);

    if (existing) {
      return res.status(409).json({
        success: false,
        alreadyServed: true,
        student,
        scan_time: existing.scan_time,
        error: `تنبيه أمني (Anti-Passback): التلميذ استلم وجبته مسبقاً اليوم في الساعة ${existing.scan_time}`
      });
    }

    // Record attendance
    DB.run(`
      INSERT INTO canteen_attendance (student_id, meal_date, scan_time, status)
      VALUES (?, ?, ?, 'served')
    `, [student.id, today, nowTime]);

    // Recalculate stats
    const totalDemi = DB.queryOne(`
      SELECT COUNT(*) as c FROM students 
      WHERE (regime = 'demi_pensionnaire' OR regime IS NULL) AND active = 1 AND canteen_active = 1
    `).c;
    const servedToday = DB.queryOne(`
      SELECT COUNT(*) as c FROM canteen_attendance 
      WHERE meal_date = ? AND status = 'served'
    `, [today]).c;

    res.json({
      success: true,
      student,
      scan_time: nowTime,
      message: 'تم تأكيد حضور التلميذ واستلام الوجبة بنجاح',
      stats: {
        totalDemi,
        servedToday,
        remaining: Math.max(0, totalDemi - servedToday)
      }
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.get('/api/cantine/report', (req, res) => {
  try {
    const reportDate = req.query.date || new Date().toISOString().split('T')[0];

    const report = DB.queryAll(`
      SELECT s.id, s.matricule, s.first_name, s.last_name, s.gender, s.regime,
             l.name as level_name, g.name as group_name,
             ca.scan_time,
             CASE WHEN ca.id IS NOT NULL THEN 'حاضر (وجبة)' ELSE 'غائب' END as status_ar
      FROM students s
      LEFT JOIN levels l ON s.level_id = l.id
      LEFT JOIN enrollments e ON e.student_id = s.id AND e.status = 'active'
      LEFT JOIN groups g ON e.group_id = g.id
      LEFT JOIN canteen_attendance ca ON ca.student_id = s.id AND ca.meal_date = ?
      WHERE (s.regime = 'demi_pensionnaire' OR s.regime IS NULL) AND s.active = 1
      ORDER BY l.id ASC, g.id ASC, s.last_name ASC
    `, [reportDate]);

    res.json({
      success: true,
      date: reportDate,
      total: report.length,
      served: report.filter(r => r.scan_time).length,
      absent: report.filter(r => !r.scan_time).length,
      students: report
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Serve frontend for all client routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Server Lifecycle Management
let serverInstance = null;

function startServer(port = PORT) {
  return new Promise((resolve, reject) => {
    if (serverInstance && serverInstance.listening) {
      return resolve({ server: serverInstance, port });
    }
    serverInstance = app.listen(port, () => {
      console.log(`🚀 EDUMIND Server listening on http://localhost:${port}`);
      resolve({ server: serverInstance, port });
    });
    serverInstance.on('error', (err) => {
      reject(err);
    });
  });
}

function stopServer() {
  return new Promise((resolve) => {
    if (serverInstance) {
      serverInstance.close(() => {
        console.log('🛑 EDUMIND Server stopped');
        serverInstance = null;
        try { DB.close(); } catch (e) {}
        resolve();
      });
    } else {
      try { DB.close(); } catch (e) {}
      resolve();
    }
  });
}

// Graceful shutdown handler
function gracefulShutdown(reason = 'exit') {
  console.log(`[EDUMIND Serveur] Arrêt gracieux du serveur (${reason})...`);
  stopServer().then(() => {
    process.exit(0);
  }).catch(() => {
    process.exit(0);
  });
}

process.on('SIGINT', () => gracefulShutdown('SIGINT'));
process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
process.on('message', (msg) => {
  if (msg === 'shutdown') gracefulShutdown('IPC');
});

// Internal shutdown endpoint for Electron Desktop
app.post('/api/internal/shutdown', (req, res) => {
  res.json({ success: true, message: 'Server shutting down' });
  setTimeout(() => gracefulShutdown('HTTP call'), 100);
});

if (require.main === module) {
  startServer(PORT).catch((err) => {
    console.error('❌ Failed to start EDUMIND Server:', err.message);
  });
}

module.exports = { app, startServer, stopServer, DB, PORT };

