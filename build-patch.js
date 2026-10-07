#!/usr/bin/env node
/**
 * EDUMIND Scolaire - Automated Cloud Patch Builder
 * Creates a lightweight, safe update package (ZIP) and updates updates/version.json automatically.
 */
const fs = require('fs');
const path = require('path');
const os = require('os');
const { execSync } = require('child_process');
const readline = require('readline');

const PROJECT_DIR = path.resolve(__dirname);
const UPDATES_DIR = path.join(PROJECT_DIR, 'updates');

// Read current package.json
const pkgPath = path.join(PROJECT_DIR, 'package.json');
let pkg = { version: '1.0.0' };
try {
  pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
} catch (e) {}

function incrementPatch(versionStr) {
  const parts = String(versionStr).split('.').map(n => parseInt(n, 10) || 0);
  while (parts.length < 3) parts.push(0);
  parts[2] += 1;
  return parts.join('.');
}

async function main() {
  console.log('\n========================================================');
  console.log('   EDUMIND Scolaire — Générateur de Mise à Jour Cloud   ');
  console.log('                (Cloud Auto-Patch Builder)              ');
  console.log('========================================================\n');

  const currentVer = pkg.version || '1.0.0';
  const suggestedVer = incrementPatch(currentVer);

  let newVer = process.argv[2];
  let notes = process.argv.slice(3).join(' ');

  if (!newVer) {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    const question = (q) => new Promise(res => rl.question(q, res));

    console.log(`Version actuelle : v${currentVer}`);
    const inputVer = await question(`1. Numéro de la nouvelle version [Défaut: ${suggestedVer}] : `);
    newVer = inputVer.trim() || suggestedVer;

    const inputNotes = await question(`2. Description des nouveautés (Changelog) : `);
    notes = inputNotes.trim() || 'Améliorations et corrections de stabilité';
    rl.close();
  }

  console.log(`\n📦 Préparation du patch v${newVer}...`);

  // 1. Update version in package.json
  pkg.version = newVer;
  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n', 'utf8');
  console.log(`✅ 1. package.json mis à jour vers v${newVer}`);

  // 2. Prepare staging folder
  const tempDir = path.join(os.tmpdir(), `edumind_scolaire_patch_${Date.now()}`);
  fs.mkdirSync(tempDir, { recursive: true });

  const filesToInclude = [
    'server.js',
    'database.js',
    'main.js',
    'package.json',
    'updater.js',
    'license_manager.js',
    'find_sections.js',
    'public'
  ];

  for (const item of filesToInclude) {
    const src = path.join(PROJECT_DIR, item);
    const dst = path.join(tempDir, item);
    if (fs.existsSync(src)) {
      if (fs.statSync(src).isDirectory()) {
        fs.cpSync(src, dst, { recursive: true });
      } else {
        fs.copyFileSync(src, dst);
      }
    }
  }

  // 3. Create ZIP archive in updates/
  if (!fs.existsSync(UPDATES_DIR)) fs.mkdirSync(UPDATES_DIR, { recursive: true });
  const zipFileName = `edumind_scolaire_patch_v${newVer}.zip`;
  const zipPath = path.join(UPDATES_DIR, zipFileName);

  try {
    if (fs.existsSync(zipPath)) fs.unlinkSync(zipPath);
  } catch (e) {}

  let createdZip = false;
  try {
    execSync(`tar -cf "${zipPath}" -C "${tempDir}" .`, { stdio: 'pipe' });
    createdZip = true;
  } catch (e) {}

  if (!createdZip) {
    const psCmd = `powershell -NoProfile -ExecutionPolicy Bypass -Command "Compress-Archive -Path '${tempDir}\\*' -DestinationPath '${zipPath}' -Force"`;
    execSync(psCmd, { stdio: 'inherit' });
  }

  const stat = fs.statSync(zipPath);
  const sizeMB = (stat.size / (1024 * 1024)).toFixed(2);
  console.log(`✅ 3. Archive ZIP créée : updates/${zipFileName} (${sizeMB} MB)`);

  try {
    fs.rmSync(tempDir, { recursive: true, force: true });
  } catch (e) {}

  // 4. Update updates/version.json
  const versionJsonPath = path.join(UPDATES_DIR, 'version.json');
  const releaseDate = new Date().toISOString().split('T')[0];
  const repoName = 'BELMAHDI6/EDUMIND-SCOLAIRE';
  const zipUrl = `https://raw.githubusercontent.com/${repoName}/main/updates/${zipFileName}`;

  const manifest = {
    version: newVer,
    releaseDate,
    zipUrl,
    notes: notes,
    notes_ar: notes
  };

  fs.writeFileSync(versionJsonPath, JSON.stringify(manifest, null, 2) + '\n', 'utf8');
  console.log(`✅ 4. updates/version.json mis à jour.`);

  console.log('\n========================================================');
  console.log('        🎉 TOUT EST PRÊT ! POUR PUBLIER LA MISE À JOUR : ');
  console.log('========================================================');
  console.log(`1. المستودع المستهدف: https://github.com/${repoName}`);
  console.log(`2. ادفع التحديث إلى GitHub :`);
  console.log(`   git add . && git commit -m "Release v${newVer}" && git push`);
  console.log('========================================================\n');
}

main().catch(err => {
  console.error('❌ Erreur build-patch :', err);
  process.exit(1);
});
