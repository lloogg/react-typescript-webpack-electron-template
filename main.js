const { app, BrowserWindow } = require('electron');
function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      nativeWindowOpen: true,
    },
  });
  win.loadFile('./public/index.html');
  win.once('ready-to-show', () => {
    win.webContents.openDevTools();
  });
  win.webContents.setWindowOpenHandler(() => {
    return { action: 'allow' };
  });

  win.webContents.on('did-create-window', (child) => {
    child.once('ready-to-show', () => {
      child.webContents.openDevTools();
    });
  });
}
app.whenReady().then(createWindow);
