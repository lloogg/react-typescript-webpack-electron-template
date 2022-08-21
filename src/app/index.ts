import { app, BrowserWindow, ipcMain } from 'electron';
function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    // useContentSize: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
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

  const win2 = new BrowserWindow({
    frame: false,
    
    parent: win,
    // useContentSize: true,
    backgroundColor: 'white',
    resizable: false,
    hasShadow: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  win2.loadFile('./public/index2.html');
  ipcMain.on('shit', (e, bbox) => {
    console.log(bbox)
    if (bbox.width === 0 || bbox.height === 0) {
      win2.hide();
    } else {
      win2.show();
    }
    const bounds = win.getContentBounds();
    win2.setContentBounds({
      x: bounds.x + bbox.x,
      y: bounds.y + bbox.y,
      width: bbox.width,
      height: bbox.height,
    });
    // win2.setBounds(bbox)

    // win2.setBounds(win.getBounds())
  });
}
app.whenReady().then(createWindow);
