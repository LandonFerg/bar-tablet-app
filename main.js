const { app, BrowserWindow } = require('electron');
const path = require('path');

// load index.html into new browser window
function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        autoHideMenuBar: true, // hide menu bar used for debug
        titleBarStyle: 'hidden',
        titleBarOverlay: {
            color: '#120e1c',
            symbolColor: '#ffffff'
        },
        fullscreen: true,
        // preload important doc values
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true
          }
    });

    win.loadFile('index.html');
}

// wait for app to be ready
app.whenReady().then(() => {
    createWindow();
})

// quit if all windows are closed (Windows & Linux)
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit();
})