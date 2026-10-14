const { app, BrowserWindow, Menu, shell, dialog } = require('electron');
const path = require('path');
const http = require('http');
const { spawn } = require('child_process');
const fs = require('fs');

const gotSingleInstanceLock = app.requestSingleInstanceLock();
if (!gotSingleInstanceLock) {
  app.quit();
  process.exit(0);
}

let mainWindow = null;
let serverProcess = null;
let activePort = 3001;

const iconIco = path.join(__dirname, 'public', 'icon.ico');
const iconPng = path.join(__dirname, 'public', 'favicon.png');
const appIcon = process.platform === 'win32' && fs.existsSync(iconIco) ? iconIco : iconPng;

function isServerReady(port) {
  return new Promise((resolve) => {
    const req = http.get(`http://127.0.0.1:${port}/api/dashboard/stats`, (res) => {
      resolve(res.statusCode === 200);
    });
    req.on('error', () => resolve(false));
    req.setTimeout(800, () => {
      req.destroy();
      resolve(false);
    });
  });
}

async function ensureServerRunning() {
  const alreadyUp = await isServerReady(activePort);
  if (alreadyUp) return activePort;

  let appRootDir = __dirname;
  if (__dirname.includes('app.asar')) {
    const unpackedDir = path.join(process.resourcesPath, 'app');
    if (fs.existsSync(unpackedDir)) {
      appRootDir = unpackedDir;
    }
  }

  const serverScript = path.join(appRootDir, 'server.js');
  const nodeCandidates = [
    path.join(appRootDir, 'bin', 'node.exe'),
    path.join(__dirname, 'bin', 'node.exe'),
    path.join(process.resourcesPath, 'app', 'bin', 'node.exe'),
    path.join(path.dirname(process.execPath), 'bin', 'node.exe'),
    'C:\\Program Files\\node.exe',
    'C:\\Program Files\\nodejs\\node.exe',
    'node'
  ];
  const nodeExe = nodeCandidates.find(p => p === 'node' || fs.existsSync(p)) || 'node';

  serverProcess = spawn(nodeExe, [serverScript], {
    cwd: appRootDir,
    env: { ...process.env, PORT: String(activePort) },
    stdio: ['ignore', 'pipe', 'pipe'],
    windowsHide: true
  });

  for (let i = 0; i < 40; i++) {
    const ready = await isServerReady(activePort);
    if (ready) return activePort;
    await new Promise((r) => setTimeout(r, 250));
  }
  return activePort;
}

let isNormalQuit = false;

function cleanupServer() {
  isNormalQuit = true;
  if (serverProcess) {
    const pid = serverProcess.pid;
    try {
      const req = http.request({
        hostname: '127.0.0.1',
        port: activePort,
        path: '/api/internal/shutdown',
        method: 'POST',
        timeout: 600
      });
      req.on('error', () => {});
      req.end();
    } catch (e) {}

    setTimeout(() => {
      try {
        if (pid) spawn('taskkill', ['/pid', String(pid), '/f', '/t']);
      } catch (e) {}
    }, 400);

    serverProcess = null;
  }
}

async function ensureServerRunning() {
  const alreadyUp = await isServerReady(activePort);
  if (alreadyUp) return activePort;

  let appRootDir = __dirname;
  if (__dirname.includes('app.asar')) {
    const unpackedDir = path.join(process.resourcesPath, 'app');
    if (fs.existsSync(unpackedDir)) {
      appRootDir = unpackedDir;
    }
  }

  const serverScript = path.join(appRootDir, 'server.js');
  const nodeCandidates = [
    path.join(appRootDir, 'bin', 'node.exe'),
    path.join(__dirname, 'bin', 'node.exe'),
    path.join(process.resourcesPath, 'app', 'bin', 'node.exe'),
    path.join(path.dirname(process.execPath), 'bin', 'node.exe'),
    'C:\\Program Files\\node.exe',
    'C:\\Program Files\\nodejs\\node.exe',
    'node'
  ];
  const nodeExe = nodeCandidates.find(p => p === 'node' || fs.existsSync(p)) || 'node';

  serverProcess = spawn(nodeExe, [serverScript], {
    cwd: appRootDir,
    env: { ...process.env, PORT: String(activePort) },
    stdio: ['ignore', 'pipe', 'pipe'],
    windowsHide: true
  });

  serverProcess.on('exit', (code) => {
    serverProcess = null;
    // If server exited unexpectedly or after an update restart:
    if (!isNormalQuit) {
      console.log(`[Main] Serveur Node arrêté (code: ${code}). Redémarrage automatique d'EDUMIND...`);
      app.relaunch();
      app.exit(0);
    }
  });

  for (let i = 0; i < 40; i++) {
    const ready = await isServerReady(activePort);
    if (ready) return activePort;
    await new Promise((r) => setTimeout(r, 250));
  }
  return activePort;
}

async function createMainWindow() {
  mainWindow = new BrowserWindow({
    width: 1440,
    height: 900,
    minWidth: 1100,
    minHeight: 700,
    center: true,
    title: 'EDUMIND Scolaire — تسيير المتوسطات والثانويات العمومية',
    backgroundColor: '#0a1124',
    icon: appIcon,
    show: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: true
    }
  });

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
    mainWindow.focus();
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  // Auto-retry connection if backend server is still starting or restarting
  mainWindow.webContents.on('did-fail-load', (event, errorCode, errorDescription) => {
    console.log(`[Main] En attente du serveur (${errorCode}: ${errorDescription})... Nouvelle tentative dans 1s`);
    setTimeout(() => {
      if (mainWindow && !mainWindow.isDestroyed()) {
        mainWindow.loadURL(`http://127.0.0.1:${activePort}`);
      }
    }, 1000);
  });

  try {
    await ensureServerRunning();
    mainWindow.loadURL(`http://127.0.0.1:${activePort}`);
  } catch (err) {
    console.error('Erreur démarrage EDUMIND Scolaire:', err);
  }
}

app.whenReady().then(async () => {
  await createMainWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createMainWindow();
  });
});

app.on('window-all-closed', () => {
  cleanupServer();
  if (process.platform !== 'darwin') app.quit();
});

app.on('before-quit', cleanupServer);
app.on('will-quit', cleanupServer);
