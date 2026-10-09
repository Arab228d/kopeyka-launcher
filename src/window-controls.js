const { ipcMain } = require('electron');

function registerWindowControls(window) {
  const state = () => ({ maximized: window.isMaximized() });
  const publish = () => {
    if (!window.isDestroyed()) window.webContents.send('launcher:window-state', state());
  };
  ipcMain.handle('launcher:window', (event, action) => {
    if (window.isDestroyed() || event.sender !== window.webContents || event.senderFrame !== window.webContents.mainFrame) return;
    switch (action) {
      case 'state': return state();
      case 'minimize': window.minimize(); break;
      case 'maximize': window.isMaximized() ? window.unmaximize() : window.maximize(); break;
      case 'close': window.close(); break;
    }
  });
  window.on('maximize', publish);
  window.on('unmaximize', publish);
  window.on('closed', () => ipcMain.removeHandler('launcher:window'));
}

module.exports = { registerWindowControls };
