const { app, BrowserWindow } = require('electron')

let win

function createWindow () {
  win = new BrowserWindow({
    width: 640,
    height: 480,
    webPreferences: {
      nodeIntegration: true,
    },
    autoHideMenuBar: true,
  })
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
