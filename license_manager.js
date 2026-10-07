const os = require('os');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { execSync } = require('child_process');

// Master Secret Key for Veloce Craft (Keep secure)
const MASTER_KEY = 'VELOCE_CRAFT_EDUMIND_CORE_SECURITY_KEY_2026_@#!';

// Trial duration: 7 days in milliseconds
const TRIAL_DURATION_MS = 7 * 24 * 60 * 60 * 1000;

// Secondary system marker file to prevent trial resets by deleting the database
function getSystemMarkerPath() {
  try {
    const base = process.env.LOCALAPPDATA || process.env.APPDATA || os.homedir();
    return path.join(base, '.edumind_lic_t.sys');
  } catch (e) {
    return path.join(os.tmpdir(), '.edumind_lic_t.sys');
  }
}

// Persistent machine hardware ID storage so updates and clean DB installs retain the exact same HWID
function getSystemHwidPath() {
  try {
    const base = process.env.LOCALAPPDATA || process.env.APPDATA || os.homedir();
    return path.join(base, '.edumind_hwid.sys');
  } catch (e) {
    return path.join(os.tmpdir(), '.edumind_hwid.sys');
  }
}

// Persistent machine license key storage so reinstallations/updates automatically retain the paid license
function getSystemLicensePath() {
  try {
    const base = process.env.LOCALAPPDATA || process.env.APPDATA || os.homedir();
    return path.join(base, '.edumind_lic_key.sys');
  } catch (e) {
    return path.join(os.tmpdir(), '.edumind_lic_key.sys');
  }
}

class LicenseManager {
  constructor(db) {
    this.db = db;
    this.cachedHWID = null;
    this.cachedStatus = null;
    this.lastStatusCheck = 0;
  }

  /**
   * Generates a stable, unique Hardware ID (HWID) tied to this physical machine.
   * Locked permanently across updates and database reinstalls.
   */
  getHardwareID() {
    if (this.cachedHWID) return this.cachedHWID;

    // 1. Check persistent machine system file
    try {
      const hwidFile = getSystemHwidPath();
      if (fs.existsSync(hwidFile)) {
        const savedHwid = fs.readFileSync(hwidFile, 'utf8').trim();
        if (savedHwid && savedHwid.startsWith('EDUM-') && savedHwid !== 'EDUM-EC81-CB26-74C1-D57E') {
          this.cachedHWID = savedHwid;
          if (this.db) {
            try {
              this.db.run("INSERT OR REPLACE INTO settings (key, value) VALUES ('machine_hwid', ?)", [savedHwid]);
            } catch (e) {}
          }
          return this.cachedHWID;
        }
      }
    } catch (e) {}

    // 2. Compute physical machine HWID for this physical hardware
    const hwid = this._computeMachineHWID();
    this.cachedHWID = hwid;

    // Persist to system file & database
    try {
      fs.writeFileSync(getSystemHwidPath(), hwid, 'utf8');
    } catch (e) {}

    if (this.db) {
      try {
        this.db.run("INSERT OR REPLACE INTO settings (key, value) VALUES ('machine_hwid', ?)", [hwid]);
      } catch (e) {}
    }

    return this.cachedHWID;
  }

  _computeMachineHWID() {
    let rawTokens = [];

    // 1. Fast Native Windows Registry queries (Takes ~5ms, no PowerShell lag)
    if (process.platform === 'win32') {
      try {
        const out = execSync('reg query "HKLM\\SOFTWARE\\Microsoft\\Cryptography" /v MachineGuid', {
          timeout: 2500,
          encoding: 'utf8',
          stdio: ['ignore', 'pipe', 'ignore']
        });
        const m = out.match(/MachineGuid\s+REG_\w+\s+([^\r\n]+)/i);
        if (m && m[1]) rawTokens.push(`GUID:${m[1].trim()}`);
      } catch (e) {}

      try {
        const out = execSync('reg query "HKLM\\HARDWARE\\DESCRIPTION\\System\\BIOS" /v BaseBoardVersion', {
          timeout: 2500,
          encoding: 'utf8',
          stdio: ['ignore', 'pipe', 'ignore']
        });
        const m = out.match(/BaseBoardVersion\s+REG_\w+\s+([^\r\n]+)/i);
        if (m && m[1]) rawTokens.push(`BOARD:${m[1].trim()}`);
      } catch (e) {}

      try {
        const out = execSync('reg query "HKLM\\HARDWARE\\DESCRIPTION\\System\\BIOS" /v SystemProductName', {
          timeout: 2500,
          encoding: 'utf8',
          stdio: ['ignore', 'pipe', 'ignore']
        });
        const m = out.match(/SystemProductName\s+REG_\w+\s+([^\r\n]+)/i);
        if (m && m[1]) rawTokens.push(`PROD:${m[1].trim()}`);
      } catch (e) {}
    }

    // 2. Hardware CPU, Hostname, Network MAC
    try {
      const cpus = os.cpus();
      rawTokens.push(`CPU:${cpus[0]?.model || 'GENERIC'}`);
      rawTokens.push(`CORES:${cpus.length}`);
      rawTokens.push(`HOST:${os.hostname()}`);
      const nets = os.networkInterfaces();
      for (const name of Object.keys(nets)) {
        for (const net of nets[name]) {
          if (!net.internal && net.mac && net.mac !== '00:00:00:00:00:00') {
            rawTokens.push(`MAC:${net.mac}`);
            break;
          }
        }
      }
    } catch (e) {
      rawTokens.push(`HOST:${os.hostname()}`);
    }

    const rawString = rawTokens.join('|');
    const hash = crypto.createHash('sha256').update(rawString).digest('hex').toUpperCase();

    // Format as EDUM-XXXX-XXXX-XXXX-XXXX
    return `EDUM-${hash.substring(0, 4)}-${hash.substring(4, 8)}-${hash.substring(8, 12)}-${hash.substring(12, 16)}`;
  }

  /**
   * Generates a signed license key for a given HWID.
   * Used by the developer CLI generator tool.
   */
  static generateLicenseKey({ hwid, clientName = 'Client', type = 'lifetime', days = 0 }) {
    if (!hwid || typeof hwid !== 'string') {
      throw new Error('HWID is required to generate a license key');
    }

    const issuedAt = Date.now();
    let expiresAt = 0;
    if (type === 'annual' || type === 'days') {
      expiresAt = issuedAt + (days || 365) * 24 * 60 * 60 * 1000;
    }

    const payloadObj = {
      h: hwid.trim().toUpperCase(),
      c: clientName.trim(),
      t: type,
      e: expiresAt,
      i: issuedAt
    };

    const payloadJson = JSON.stringify(payloadObj);
    const b64Payload = Buffer.from(payloadJson, 'utf8').toString('base64url');

    // HMAC Signature
    const signature = crypto
      .createHmac('sha256', MASTER_KEY)
      .update(b64Payload)
      .digest('hex')
      .substring(0, 16)
      .toUpperCase();

    return `EDUMIND-V1.${b64Payload}.${signature}`;
  }

  /**
   * Verifies and decodes a license key.
   */
  verifyLicenseKey(key) {
    if (!key || typeof key !== 'string') {
      return { valid: false, reason: 'Format de clé invalide' };
    }

    let cleanKey = key.trim();
    if (cleanKey.startsWith('V1.')) {
      cleanKey = 'EDUMIND-' + cleanKey;
    }

    if (!cleanKey.startsWith('EDUMIND-V1.')) {
      return { valid: false, reason: 'Format de clé invalide' };
    }

    const parts = cleanKey.split('.');
    if (parts.length !== 3) {
      return { valid: false, reason: 'Structure de clé invalide' };
    }

    const [, b64Payload, signature] = parts;

    // Verify HMAC
    const expectedSig = crypto
      .createHmac('sha256', MASTER_KEY)
      .update(b64Payload)
      .digest('hex')
      .substring(0, 16)
      .toUpperCase();

    if (signature.toUpperCase() !== expectedSig) {
      return { valid: false, reason: 'Signature cryptographique invalide (clé falsifiée)' };
    }

    let payload;
    try {
      const jsonStr = Buffer.from(b64Payload, 'base64url').toString('utf8');
      payload = JSON.parse(jsonStr);
    } catch (e) {
      return { valid: false, reason: 'Données de licence illisibles' };
    }

    const currentHWID = this.getHardwareID();
    const isLegacyOldHwid = (payload.h === 'EDUM-EC81-CB26-74C1-D57E');

    if (payload.h !== currentHWID && !isLegacyOldHwid) {
      return {
        valid: false,
        reason: 'Cette clé est associée à un autre ordinateur. Veuillez contacter le support Veloce Craft.'
      };
    }

    // Check expiration
    if (payload.e && payload.e > 0) {
      if (Date.now() > payload.e) {
        const expDate = new Date(payload.e).toLocaleDateString('fr-FR');
        return {
          valid: false,
          expired: true,
          reason: `Cette licence annuelle a expiré le ${expDate}. Veuillez renouveler votre abonnement.`
        };
      }
    }

    return {
      valid: true,
      payload,
      migrated: (payload.h !== currentHWID && isLegacyOldHwid),
      cleanKey
    };
  }

  /**
   * Initializes or updates trial tracking.
   */
  _handleTrialTracking() {
    const now = Date.now();
    const currentHwid = this.getHardwareID();
    const markerFile = getSystemMarkerPath();

    let dbFirstRun = null;
    let dbLastTick = null;
    let dbTrialHwid = null;

    try {
      dbFirstRun = this.db.queryOne("SELECT value FROM settings WHERE key = 'trial_first_run'")?.value;
      dbLastTick = this.db.queryOne("SELECT value FROM settings WHERE key = 'trial_last_tick'")?.value;
      dbTrialHwid = this.db.queryOne("SELECT value FROM settings WHERE key = 'trial_hwid'")?.value;
    } catch (e) {}

    // If the database has trial data from another machine (e.g. developer's PC or another school),
    // ignore that old machine's trial so this physical machine starts fresh!
    if (dbTrialHwid && dbTrialHwid !== currentHwid) {
      dbFirstRun = null;
      dbLastTick = null;
    }

    let fileFirstRun = null;
    try {
      if (fs.existsSync(markerFile)) {
        const content = fs.readFileSync(markerFile, 'utf8').trim();
        if (content.startsWith('{')) {
          try {
            const parsed = JSON.parse(content);
            if (parsed && parsed.hwid === currentHwid && typeof parsed.firstRun === 'number') {
              fileFirstRun = parsed.firstRun;
            }
          } catch (e) {}
        } else {
          // Legacy format (pure numeric timestamp)
          const parsed = parseInt(content, 10);
          if (!isNaN(parsed) && parsed > 0 && (!dbTrialHwid || dbTrialHwid === currentHwid)) {
            fileFirstRun = parsed;
          }
        }
      }
    } catch (e) {}

    // Determine oldest first-run time on THIS specific physical machine
    let effectiveFirstRun = null;
    if (dbFirstRun && fileFirstRun) {
      effectiveFirstRun = Math.min(parseInt(dbFirstRun, 10), fileFirstRun);
    } else if (dbFirstRun) {
      effectiveFirstRun = parseInt(dbFirstRun, 10);
    } else if (fileFirstRun) {
      effectiveFirstRun = fileFirstRun;
    }

    // First time ever running on this physical PC: grant full 7 days (168 hours)
    if (!effectiveFirstRun) {
      effectiveFirstRun = now;
      try {
        this.db.run("INSERT OR REPLACE INTO settings (key, value) VALUES ('trial_hwid', ?)", [currentHwid]);
        this.db.run("INSERT OR REPLACE INTO settings (key, value) VALUES ('trial_first_run', ?)", [String(effectiveFirstRun)]);
        this.db.run("INSERT OR REPLACE INTO settings (key, value) VALUES ('trial_last_tick', ?)", [String(now)]);
      } catch (e) {}
      try {
        fs.writeFileSync(markerFile, JSON.stringify({ hwid: currentHwid, firstRun: effectiveFirstRun }), 'utf8');
      } catch (e) {}
    } else {
      // Sync back to DB if missing or from different machine
      if (!dbFirstRun || dbTrialHwid !== currentHwid) {
        try {
          this.db.run("INSERT OR REPLACE INTO settings (key, value) VALUES ('trial_hwid', ?)", [currentHwid]);
          this.db.run("INSERT OR REPLACE INTO settings (key, value) VALUES ('trial_first_run', ?)", [String(effectiveFirstRun)]);
        } catch (e) {}
      }
      if (!fileFirstRun) {
        try {
          fs.writeFileSync(markerFile, JSON.stringify({ hwid: currentHwid, firstRun: effectiveFirstRun }), 'utf8');
        } catch (e) {}
      }
    }

    // Clock tamper detection: if now is significantly earlier than dbLastTick
    if (dbLastTick) {
      const lastTickVal = parseInt(dbLastTick, 10);
      if (now < lastTickVal - (2 * 60 * 60 * 1000)) { // more than 2h in the past
        return {
          tampered: true,
          reason: 'Modification suspecte de la date et heure du système détectée.'
        };
      }
    }

    // Update last tick only if at least 5 minutes have elapsed to avoid continuous DB writes
    const lastTickVal = dbLastTick ? parseInt(dbLastTick, 10) : 0;
    if (now - lastTickVal > 5 * 60 * 1000) {
      try {
        this.db.run("INSERT OR REPLACE INTO settings (key, value) VALUES ('trial_last_tick', ?)", [String(now)]);
      } catch (e) {}
    }

    const elapsed = now - effectiveFirstRun;
    const remainingMs = TRIAL_DURATION_MS - elapsed;

    if (remainingMs <= 0) {
      return { expired: true, remainingMs: 0, remainingDays: 0, remainingHours: 0 };
    }

    const remainingHours = Math.max(0, Math.ceil(remainingMs / (1000 * 60 * 60)));
    const remainingDays = Math.max(0, Math.ceil(remainingMs / (1000 * 60 * 60 * 24)));

    return {
      active: true,
      remainingMs,
      remainingHours,
      remainingDays,
      firstRun: effectiveFirstRun
    };
  }

  /**
   * Returns comprehensive license status for this installation.
   */
  getStatus(forceRefresh = false) {
    const now = Date.now();
    const cacheTTL = (this.cachedStatus && this.cachedStatus.type === 'lifetime' && this.cachedStatus.isLicensed)
      ? 600000 // 10 minutes for active lifetime license (0ms overhead on API calls)
      : 60000;  // 1 minute for trial / unactivated
    if (!forceRefresh && this.cachedStatus && (now - this.lastStatusCheck < cacheTTL)) {
      return this.cachedStatus;
    }

    const hwid = this.getHardwareID();

    // 1. Check stored license key
    let storedKey = null;
    try {
      storedKey = this.db.queryOne("SELECT value FROM settings WHERE key = 'license_key'")?.value;
    } catch (e) {}

    // If no key in DB (e.g. freshly installed version or fresh database), check persistent machine license backup
    if (!storedKey) {
      try {
        const licFile = getSystemLicensePath();
        if (fs.existsSync(licFile)) {
          const fileKey = fs.readFileSync(licFile, 'utf8').trim();
          if (fileKey && fileKey.startsWith('EDUMIND-V1.')) {
            const check = this.verifyLicenseKey(fileKey);
            if (check.valid) {
              storedKey = fileKey;
              // Automatically re-inject into the database so the client continues seamlessly!
              if (this.db) {
                try {
                  this.db.run("INSERT OR REPLACE INTO settings (key, value) VALUES ('license_key', ?)", [fileKey]);
                  this.db.run("INSERT OR REPLACE INTO settings (key, value) VALUES ('license_activated_at', ?)", [String(Date.now())]);
                } catch (e) {}
              }
            }
          }
        }
      } catch (e) {}
    }

    if (storedKey) {
      const verification = this.verifyLicenseKey(storedKey);
      if (verification.valid) {
        // If this key was migrated from legacy HWID, update DB and system file with machine-bound key
        if (verification.migrated) {
          try {
            const daysRemaining = verification.payload.e > 0 ? Math.max(1, Math.ceil((verification.payload.e - Date.now()) / (1000 * 60 * 60 * 24))) : 0;
            const updatedKey = LicenseManager.generateLicenseKey({
              hwid,
              clientName: verification.payload.c || 'Client EDUMIND',
              type: verification.payload.t || 'lifetime',
              days: daysRemaining
            });
            if (this.db) {
              this.db.run("INSERT OR REPLACE INTO settings (key, value) VALUES ('license_key', ?)", [updatedKey]);
            }
            fs.writeFileSync(getSystemLicensePath(), updatedKey, 'utf8');
          } catch (e) {}
        }

        const payload = verification.payload;
        const now = Date.now();
        const daysRemaining = payload.e > 0 ? Math.max(0, Math.ceil((payload.e - now) / (1000 * 60 * 60 * 24))) : 9999;
        const expiryDateStr = payload.e > 0 ? new Date(payload.e).toISOString().split('T')[0] : null;

        const res = {
          hwid,
          status: 'licensed',
          isLicensed: true,
          isTrial: false,
          licenseType: payload.t === 'annual' ? 'annual' : 'lifetime',
          clientName: payload.c || '',
          expiryDate: expiryDateStr,
          daysRemaining,
          message: payload.t === 'annual' ? `Licence Annuelle active (reste ${daysRemaining} jours)` : 'Licence Permanente active'
        };
        this.cachedStatus = res;
        this.lastStatusCheck = now;
        return res;
      } else if (verification.expired) {
        const res = {
          hwid,
          status: 'expired',
          isLicensed: false,
          isTrial: false,
          licenseType: 'annual',
          reason: verification.reason,
          message: verification.reason
        };
        this.cachedStatus = res;
        this.lastStatusCheck = now;
        return res;
      }
      // If invalid for this machine (copied DB), fall through to trial/lock
    }

    // 2. Check 3-Day Trial Status
    const trial = this._handleTrialTracking();

    if (trial.tampered) {
      const res = {
        hwid,
        status: 'tampered',
        isLicensed: false,
        isTrial: false,
        reason: trial.reason,
        message: 'Accès verrouillé. ' + trial.reason
      };
      this.cachedStatus = res;
      this.lastStatusCheck = now;
      return res;
    }

    if (trial.active) {
      const res = {
        hwid,
        status: 'trial',
        isLicensed: true, // Allow usage during trial
        isTrial: true,
        trialDaysRemaining: trial.remainingDays,
        message: `Période d'essai gratuite : reste ${trial.remainingDays} jour(s)`
      };
      this.cachedStatus = res;
      this.lastStatusCheck = now;
      return res;
    }

    // 3. Trial expired & no valid license
    const res = {
      hwid,
      status: 'expired',
      isLicensed: false,
      isTrial: false,
      message: "La période d'essai de 7 jours est terminée. Veuillez contacter Veloce Craft (0552225150) pour obtenir votre clé d'activation."
    };
    this.cachedStatus = res;
    this.lastStatusCheck = now;
    return res;
  }

  /**
   * Activates the software with a provided license key.
   */
  activate(key) {
    if (!key || typeof key !== 'string') {
      return { success: false, error: 'Veuillez saisir un code de licence valide' };
    }

    const verification = this.verifyLicenseKey(key.trim());
    if (!verification.valid) {
      return { success: false, error: verification.reason || 'Code de licence invalide' };
    }

    try {
      this.cachedStatus = null;
      this.lastStatusCheck = 0;

      let keyToSave = verification.cleanKey;
      const currentHWID = this.getHardwareID();

      // If migrating from legacy universal HWID, re-sign for this machine's current physical HWID
      if (verification.migrated) {
        const remainingDays = verification.payload.e > 0 ? Math.max(1, Math.ceil((verification.payload.e - Date.now()) / (1000 * 60 * 60 * 24))) : 0;
        keyToSave = LicenseManager.generateLicenseKey({
          hwid: currentHWID,
          clientName: verification.payload.c || 'Client EDUMIND',
          type: verification.payload.t || 'lifetime',
          days: remainingDays
        });
      }

      this.db.run("INSERT OR REPLACE INTO settings (key, value) VALUES ('license_key', ?)", [keyToSave]);
      this.db.run("INSERT OR REPLACE INTO settings (key, value) VALUES ('license_activated_at', ?)", [String(Date.now())]);

      // Save persistent backup on this physical machine so reinstallations never lose the paid license
      try {
        fs.writeFileSync(getSystemLicensePath(), keyToSave, 'utf8');
      } catch (e) {}

      return {
        success: true,
        message: 'Licence activée avec succès ! Merci d\'avoir choisi EDUMIND par Veloce Craft.',
        status: this.getStatus(true)
      };
    } catch (err) {
      return { success: false, error: 'Erreur d\'enregistrement de la licence : ' + err.message };
    }
  }
}

module.exports = LicenseManager;
