const { app, BrowserWindow } = require('electron');
const windowStateKeeper = require('electron-window-state');

let win

function createWindow () {
  let mainWindowState = windowStateKeeper({
    defaultWidth: 800,
    defaultHeight: 600
  });

  win = new BrowserWindow({
    x: mainWindowState.x,
    y: mainWindowState.y,
    width: mainWindowState.width,
    height: mainWindowState.height,
    webPreferences: {
      nodeIntegration: true,
    },
    autoHideMenuBar: true,
  })
  mainWindowState.manage(win)
  
  win.loadURL("https://www.notion.so/login")

  win.on('closed', () => {
    win = null
  })
}
// disable gpu for linux
if (process.platform === 'linux') {
  app.disableHardwareAcceleration();
}
app.on('ready', createWindow)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})
