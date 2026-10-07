const fs = require('fs');
const path = require('path');
const os = require('os');
const { execSync, spawn } = require('child_process');

const DEFAULT_UPDATE_URL = 'https://raw.githubusercontent.com/BELMAHDI6/EDUMIND-SCOLAIRE/main/updates/version.json';

class Updater {
  constructor(projectDir = __dirname) {
    this.projectDir = projectDir;
  }

  getCurrentVersion() {
    try {
      const pkgPath = path.join(this.projectDir, 'package.json');
      if (fs.existsSync(pkgPath)) {
        const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
        return pkg.version || '1.0.0';
      }
    } catch (e) {}
    return '1.0.0';
  }

  /**
   * Compares two semver strings: a > b => 1, a < b => -1, a == b => 0
   */
  compareVersions(a, b) {
    const pa = String(a).split('.').map(n => parseInt(n, 10) || 0);
    const pb = String(b).split('.').map(n => parseInt(n, 10) || 0);
    for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
      const na = pa[i] || 0;
      const nb = pb[i] || 0;
      if (na > nb) return 1;
      if (na < nb) return -1;
    }
    return 0;
  }

  /**
   * Checks cloud server for available updates
   */
  async checkForUpdates(customUrl = null) {
    const url = customUrl || DEFAULT_UPDATE_URL;
    const currentVersion = this.getCurrentVersion();

    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 6000);

      const res = await fetch(url + '?_t=' + Date.now(), {
        headers: { 'User-Agent': 'EDUMIND-App-Updater/1.0' },
        signal: controller.signal
      });
      clearTimeout(timeout);

      if (!res.ok) {
        throw new Error(`Serveur de mise à jour injoignable (HTTP ${res.status})`);
      }

      const info = await res.json();
      const remoteVersion = info.version;
      const hasUpdate = this.compareVersions(remoteVersion, currentVersion) > 0;

      return {
        success: true,
        updateAvailable: hasUpdate,
        currentVersion,
        remoteVersion,
        releaseDate: info.releaseDate || new Date().toISOString().split('T')[0],
        notes: info.notes || 'Améliorations et corrections de stabilité',
        notes_ar: info.notes_ar || info.notes || 'تحسينات وإصلاحات عامة',
        zipUrl: info.zipUrl || null
      };
    } catch (err) {
      return {
        success: false,
        updateAvailable: false,
        currentVersion,
        error: err.name === 'AbortError' ? 'Délai d\'attente dépassé (vérifiez votre connexion internet)' : err.message
      };
    }
  }

  /**
   * Downloads a file from a URL to a local destination path
   */
  async downloadFile(url, destPath) {
    let res = await fetch(url);
    if (!res.ok && url.includes('releases/download/')) {
      const fallbackUrl = url.replace(/https:\/\/github\.com\/([^/]+\/[^/]+)\/releases\/download\/v[^/]+\/([^/]+)/, 'https://raw.githubusercontent.com/$1/main/updates/$2');
      if (fallbackUrl !== url) {
        console.log(`[Auto-Updater] Tentative de secours via : ${fallbackUrl}`);
        res = await fetch(fallbackUrl);
      }
    }
    if (!res.ok) {
      throw new Error(`Échec du téléchargement (HTTP ${res.status})`);
    }

    const arrayBuffer = await res.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    fs.writeFileSync(destPath, buffer);
  }

  /**
   * Extracts a zip archive to a destination directory
   */
  extractZip(zipPath, destDir) {
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }

    // Try native bsdtar first (fastest and cleanest)
    try {
      execSync(`tar -xf "${zipPath}" -C "${destDir}"`, {
        stdio: 'pipe',
        timeout: 30000
      });
      return true;
    } catch (e) {}

    // Fallback to PowerShell Expand-Archive
    try {
      const psCmd = `powershell -NoProfile -ExecutionPolicy Bypass -Command "Expand-Archive -LiteralPath '${zipPath.replace(/'/g, "''")}' -DestinationPath '${destDir.replace(/'/g, "''")}' -Force"`;
      execSync(psCmd, {
        stdio: 'pipe',
        timeout: 45000
      });
      return true;
    } catch (err) {
      throw new Error('Échec de la décompression du fichier de mise à jour : ' + err.message);
    }
  }

  /**
   * Recursively copies files while strictly preserving protected files (database, backups, licenses)
   */
  copySafely(srcDir, destDir) {
    const PROTECTED = [
      'edumind.sqlite',
      'edumind.sqlite-wal',
      'edumind.sqlite-shm',
      'backups',
      '.edumind_lic_key.sys',
      '.edumind_hwid.sys',
      '.edumind_lic_t.sys',
      '.git',
      'node_modules',
      'uploads'
    ];

    const entries = fs.readdirSync(srcDir, { withFileTypes: true });

    for (const entry of entries) {
      const srcItem = path.join(srcDir, entry.name);
      const destItem = path.join(destDir, entry.name);

      if (PROTECTED.includes(entry.name.toLowerCase())) {
        continue;
      }

      if (entry.isDirectory()) {
        if (!fs.existsSync(destItem)) {
          fs.mkdirSync(destItem, { recursive: true });
        }
        this.copySafely(srcItem, destItem);
      } else {
        fs.copyFileSync(srcItem, destItem);
      }
    }
  }

  /**
   * Downloads and applies a cloud update patch safely
   */
  async applyUpdate(zipUrl) {
    if (!zipUrl) {
      throw new Error('URL du fichier de mise à jour manquante.');
    }

    const timestamp = Date.now();
    const tempDir = path.join(os.tmpdir(), `edumind_upd_${timestamp}`);
    const zipPath = path.join(tempDir, 'update_patch.zip');
    const extractDir = path.join(tempDir, 'extracted');

    try {
      fs.mkdirSync(tempDir, { recursive: true });

      // 1. Automatic pre-update safety backup of SQLite database
      let dbPath = null;
      let backupsDir = null;
      try {
        const DB = require('./database.js');
        if (typeof DB.getDatabasePath === 'function') dbPath = DB.getDatabasePath();
        if (typeof DB.getBackupDirectory === 'function') backupsDir = DB.getBackupDirectory();
        // Clear statement cache to avoid stale references after update
        if (typeof DB.clearCache === 'function') DB.clearCache();
      } catch (e) {}

      // Fallback paths (legacy / dev mode)
      if (!dbPath) dbPath = path.join(this.projectDir, 'edumind.sqlite');
      if (!backupsDir) backupsDir = path.join(this.projectDir, 'backups');

      if (fs.existsSync(dbPath)) {
        if (!fs.existsSync(backupsDir)) fs.mkdirSync(backupsDir, { recursive: true });
        const backupTarget = path.join(backupsDir, `edumind_backup_pre_update_${timestamp}.sqlite`);
        fs.copyFileSync(dbPath, backupTarget);
        console.log(`[Auto-Updater] Sauvegarde de sécurité créée : ${backupTarget}`);
      }


      // 2. Download the patch
      console.log(`[Auto-Updater] Téléchargement du patch depuis : ${zipUrl}`);
      await this.downloadFile(zipUrl, zipPath);

      // 3. Extract the patch
      console.log(`[Auto-Updater] Extraction de la mise à jour...`);
      this.extractZip(zipPath, extractDir);

      // 4. Safely apply files to project directory
      // If the zip was packed with a subfolder (e.g. EDUMIND-main or similar), navigate inside it
      let effectiveSrcDir = extractDir;
      const extractedChildren = fs.readdirSync(extractDir);
      if (extractedChildren.length === 1 && fs.statSync(path.join(extractDir, extractedChildren[0])).isDirectory()) {
        effectiveSrcDir = path.join(extractDir, extractedChildren[0]);
      }

      console.log(`[Auto-Updater] Application des fichiers mis à jour...`);
      this.copySafely(effectiveSrcDir, this.projectDir);

      const newVersion = this.getCurrentVersion();
      console.log(`[Auto-Updater] Mise à jour appliquée avec succès vers v${newVersion}!`);

      return {
        success: true,
        newVersion,
        message: `Mise à jour v${newVersion} installée avec succès !`
      };
    } finally {
      // Clean up temporary update directory
      try {
        if (fs.existsSync(tempDir)) {
          fs.rmSync(tempDir, { recursive: true, force: true });
        }
      } catch (e) {}
    }
  }
}

module.exports = Updater;
