#!/usr/bin/env node
/**
 * EDUMIND Scolaire — Générateur de Clés de Licence
 * Veloce Craft Security System
 */

const readline = require('readline');
const { execSync } = require('child_process');
const LicenseManager = require('./license_manager');

console.log('\n===============================================================');
console.log('   🏫 EDUMIND Scolaire - Generateur de Licences Scolaires      ');
console.log('         (Public Schools License Key Generator)                ');
console.log('               Developpe par Veloce Craft                      ');
console.log('===============================================================\n');

async function main() {
  const args = process.argv.slice(2);

  let hwid = args[0];
  let clientName = args[1];
  let type = args[2] || 'lifetime';
  let days = parseInt(args[3], 10) || 0;

  if (!hwid) {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    const question = (q) => new Promise(res => rl.question(q, res));

    hwid = await question('1. Identifiant Machine (HWID commence par SCOL-) : ');
    hwid = hwid.trim();

    if (!hwid) {
      console.error('\n[x] Erreur : Le HWID de la machine est obligatoire.');
      rl.close();
      process.exit(1);
    }

    clientName = await question('2. Nom de l\'etablissement ou Client [Ex: CEM Ibn Khaldoun] : ');
    clientName = clientName.trim() || 'Etablissement Scolaire Public';

    console.log('\n3. Type de Licence :');
    console.log('   [1] Licence Permanente a vie (Lifetime / A vie) [Par defaut]');
    console.log('   [2] Licence Annuelle (365 jours / Annuel)');
    console.log('   [3] Licence Temporaire personnalisee (Nombre de jours)');
    const choice = await question('   Votre choix [1, 2 ou 3] : ');

    if (choice.trim() === '2') {
      type = 'annual';
      days = 365;
    } else if (choice.trim() === '3') {
      type = 'days';
      const daysInput = await question('   Nombre de jours autorises : ');
      days = parseInt(daysInput.trim(), 10) || 30;
    } else {
      type = 'lifetime';
      days = 0;
    }

    rl.close();
  }

  try {
    const cleanHwid = hwid.trim().toUpperCase();
    const licenseKey = LicenseManager.generateLicenseKey({
      hwid: cleanHwid,
      clientName: clientName || 'Etablissement Scolaire',
      type: type,
      days: days
    });

    console.log('\n---------------------------------------------------------------');
    console.log(' Cle de Licence Generee avec Succes !');
    console.log('---------------------------------------------------------------');
    console.log(` Etablissement : ${clientName}`);
    console.log(` Machine HWID  : ${cleanHwid}`);
    console.log(` Type Licence  : ${type === 'lifetime' ? 'A vie (Lifetime)' : type === 'annual' ? 'Annuelle (1 an / 365 jours)' : `${days} jours`}`);
    console.log('---------------------------------------------------------------');
    console.log('\nCle d\'activation (License Key) :');
    console.log('\x1b[32m%s\x1b[0m', licenseKey);
    console.log('\n---------------------------------------------------------------');

    // Auto copy to Windows Clipboard
    if (process.platform === 'win32') {
      try {
        execSync('clip', { input: licenseKey });
        console.log(' [OK] La cle a ete automatiquement copiee dans le presse-papiers (Ctrl + V) !');
      } catch (e) {}
    }

    console.log(' Envoyez cette cle au client pour l\'activer dans le logiciel.');
    console.log('===============================================================\n');

  } catch (err) {
    console.error('\n[x] Echec de generation de licence :', err.message);
    process.exit(1);
  }
}

main();
