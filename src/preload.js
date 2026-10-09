const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('launcher', {
  minimizeWindow: () => ipcRenderer.invoke('launcher:window', 'minimize'),
  maximizeWindow: () => ipcRenderer.invoke('launcher:window', 'maximize'),
  closeWindow: () => ipcRenderer.invoke('launcher:window', 'close'),
  windowState: () => ipcRenderer.invoke('launcher:window', 'state'),
  onWindowState: handler => { ipcRenderer.on('launcher:window-state', (_, state) => handler(state)); },
  settings: () => ipcRenderer.invoke('launcher:settings'),
  save: settings => ipcRenderer.invoke('launcher:save', settings),
  versions: () => ipcRenderer.invoke('launcher:versions'),
  textures: () => ipcRenderer.invoke('launcher:textures'),
  chooseFolder: () => ipcRenderer.invoke('launcher:choose-folder'),
  openFolder: () => ipcRenderer.invoke('launcher:open-folder'),
  exportLog: () => ipcRenderer.invoke('launcher:export-log'),
  launch: settings => ipcRenderer.invoke('launcher:launch', settings),
  listMods: settings => ipcRenderer.invoke('launcher:mods-list', settings),
  importMods: settings => ipcRenderer.invoke('launcher:mods-import', settings),
  toggleMod: (settings, file) => ipcRenderer.invoke('launcher:mods-toggle', settings, file),
  importOptifine: settings => ipcRenderer.invoke('launcher:optifine-import', settings),
  optifineSite: () => ipcRenderer.invoke('launcher:optifine-site'),
  onEvent: handler => { ipcRenderer.on('launcher:event', (_, event) => handler(event)); }
});
