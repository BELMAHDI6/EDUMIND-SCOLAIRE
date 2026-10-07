const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

async function main() {
  console.log('\n========================================================');
  console.log('    EDUMIND Scolaire — Générateur du Setup EXE Autonome  ');
  console.log('   (CEM & Lycée - Système de Gestion Scolaire Public)   ');
  console.log('========================================================\n');

  const projectDir = __dirname;
  const rootDir = path.resolve(__dirname, '..');
  const electronDist = path.join(rootDir, 'node_modules', 'electron', 'dist');
  const bundledNode = path.join(rootDir, 'bin', 'node.exe');
  const outputExe = path.join(projectDir, 'EDUMIND_Scolaire_Setup.exe');
  const cscPath = 'C:\\Windows\\Microsoft.NET\\Framework64\\v4.0.30319\\csc.exe';
  const installerCs = path.join(projectDir, 'installer.cs');
  const iconIco = path.join(projectDir, 'public', 'icon.ico');
  const stagingDir = path.join(projectDir, 'temp_staging_scolaire');
  const tempZip = path.join(projectDir, 'temp_app_scolaire.zip');

  if (!fs.existsSync(electronDist)) {
    throw new Error('Electron runtime introuvable dans : ' + electronDist);
  }
  if (!fs.existsSync(installerCs)) {
    throw new Error('installer.cs introuvable : ' + installerCs);
  }
  if (!fs.existsSync(iconIco)) {
    throw new Error('icon.ico introuvable : ' + iconIco);
  }

  // 1. Prepare clean staging directory
  console.log('1. Préparation du répertoire de staging...');
  if (fs.existsSync(stagingDir)) {
    fs.rmSync(stagingDir, { recursive: true, force: true });
  }
  fs.mkdirSync(stagingDir, { recursive: true });

  // 2. Copy Electron runtime files
  console.log('2. Copie du moteur Electron autonome...');
  for (const item of fs.readdirSync(electronDist)) {
    const src = path.join(electronDist, item);
    const dst = path.join(stagingDir, item);
    if (item === 'electron.exe') {
      fs.copyFileSync(src, path.join(stagingDir, 'EDUMIND_Scolaire.exe'));
    } else if (item === 'resources') {
      fs.mkdirSync(dst, { recursive: true });
    } else {
      if (fs.statSync(src).isDirectory()) {
        fs.cpSync(src, dst, { recursive: true });
      } else {
        fs.copyFileSync(src, dst);
      }
    }
  }

  // 3. Assemble resources/app
  console.log('3. Intégration du code source et des composants Scolaire...');
  const appDir = path.join(stagingDir, 'resources', 'app');
  fs.mkdirSync(appDir, { recursive: true });

  const appItems = [
    'server.js',
    'database.js',
    'main.js',
    'package.json',
    'license_manager.js',
    'updater.js',
    'find_sections.js',
    'seed.js',
    'public',
    'node_modules'
  ];

  for (const item of appItems) {
    const src = path.join(projectDir, item);
    const dst = path.join(appDir, item);
    if (fs.existsSync(src)) {
      if (fs.statSync(src).isDirectory()) {
        fs.cpSync(src, dst, { recursive: true, force: true });
      } else {
        fs.copyFileSync(src, dst);
      }
      console.log(`   + ${item}`);
    }
  }

  // Copy bundled Node.exe for 100% offline background server reliability
  if (fs.existsSync(bundledNode)) {
    const appBin = path.join(appDir, 'bin');
    fs.mkdirSync(appBin, { recursive: true });
    fs.copyFileSync(bundledNode, path.join(appBin, 'node.exe'));
    console.log('   + bin/node.exe (Node portable)');
  }

  // Clean any unnecessary files inside staging resources/app
  const junkPatterns = ['.zip', 'temp_', 'debug.log', '.shm', '.wal'];
  for (const f of fs.readdirSync(appDir)) {
    if (junkPatterns.some(p => f.includes(p))) {
      try { fs.unlinkSync(path.join(appDir, f)); } catch(e){}
    }
  }

  // 4. Compress staging folder into ZIP
  console.log('\n4. Compression du package complet (ZIP)...');
  if (fs.existsSync(tempZip)) fs.unlinkSync(tempZip);

  const ps1File = path.join(projectDir, 'temp_compress_scolaire.ps1');
  fs.writeFileSync(ps1File, `Compress-Archive -Path '${stagingDir}\\*' -DestinationPath '${tempZip}' -CompressionLevel Optimal -Force`, 'utf8');
  execSync(`powershell -NoProfile -ExecutionPolicy Bypass -File "${ps1File}"`, { stdio: 'inherit' });
  try { fs.unlinkSync(ps1File); } catch(e){}

  const zipStat = fs.statSync(tempZip);
  console.log(`✅ Archive d'installation prête : ${(zipStat.size / (1024 * 1024)).toFixed(2)} MB`);

  // 5. Compile with csc.exe
  console.log('\n5. Compilation du fichier Setup autonome via csc.exe...');
  const backupExe = path.join(projectDir, 'EDUMIND_Scolaire_Setup_old.exe');
  if (fs.existsSync(outputExe)) {
    try {
      if (fs.existsSync(backupExe)) fs.unlinkSync(backupExe);
      fs.renameSync(outputExe, backupExe);
    } catch(e){}
  }

  const compileCmd = `"${cscPath}" /target:winexe /win32icon:"${iconIco}" /resource:"${tempZip}",app.zip /resource:"${iconIco}",app.ico /r:System.IO.Compression.dll /r:System.IO.Compression.FileSystem.dll /r:System.Windows.Forms.dll /r:System.Drawing.dll /out:"${outputExe}" "${installerCs}"`;
  execSync(compileCmd, { stdio: 'inherit' });

  // 6. Cleanup staging and temp zip
  console.log('\n6. Nettoyage des fichiers temporaires...');
  try { fs.rmSync(stagingDir, { recursive: true, force: true }); } catch(e){}
  try { fs.unlinkSync(tempZip); } catch(e){}
  try { if (fs.existsSync(backupExe)) fs.unlinkSync(backupExe); } catch(e){}

  const finalStat = fs.statSync(outputExe);
  console.log('\n========================================================');
  console.log(`🎉 SUCCÈS ! ${path.basename(outputExe)} créé : ${(finalStat.size / (1024 * 1024)).toFixed(2)} MB`);
  console.log('   الملف التنفيذي جاهز بنسبة 100% للتثبيت على أي جهاز كمبيوتر!');
  console.log('   المسار: ' + outputExe);
  console.log('========================================================\n');
}

main().catch(err => {
  console.error('❌ Erreur build_setup_scolaire :', err);
  process.exit(1);
});
