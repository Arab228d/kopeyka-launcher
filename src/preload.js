// Sandboxed preload scripts cannot require local modules, so channel names are
// repeated here. test/ipc-contract.test.js keeps them in sync with the shared
// contract, and the JSDoc type below is checked by `npm run typecheck`.
const { contextBridge, ipcRenderer } = require('electron');

/** @type {import('./ipc-contract').LauncherApi} */
const api = {
  startupStartedAt: Number(process.argv.find(value => value.startsWith('--kopeyka-started-at='))?.split('=')[1]) || 0,
  minimizeWindow: () => ipcRenderer.invoke('launcher:window', 'minimize'),
  maximizeWindow: () => ipcRenderer.invoke('launcher:window', 'maximize'),
  closeWindow: () => ipcRenderer.invoke('launcher:window', 'close'),
  windowState: () => ipcRenderer.invoke('launcher:window', 'state'),
  onWindowState: handler => { ipcRenderer.on('launcher:window-state', (_, state) => handler(state)); },
  releaseNews: () => ipcRenderer.invoke('launcher:release-news'),
  news: refresh => ipcRenderer.invoke('launcher:news', refresh),
  openExternal: url => ipcRenderer.invoke('launcher:open-external', url),
  acknowledgeNews: () => ipcRenderer.invoke('launcher:release-news-seen'),
  settings: () => ipcRenderer.invoke('launcher:settings'),
  avatar: nickname => ipcRenderer.invoke('launcher:avatar', nickname),
  save: settings => ipcRenderer.invoke('launcher:save', settings),
  versions: refresh => ipcRenderer.invoke('launcher:versions', refresh),
  loaderCatalog: refresh => ipcRenderer.invoke('launcher:loader-catalog', refresh),
  checkUpdate: () => ipcRenderer.invoke('launcher:update-check'),
  installUpdate: () => ipcRenderer.invoke('launcher:update-install'),
  textures: () => ipcRenderer.invoke('launcher:textures'),
  chooseFolder: () => ipcRenderer.invoke('launcher:choose-folder'),
  openFolder: () => ipcRenderer.invoke('launcher:open-folder'),
  exportLog: () => ipcRenderer.invoke('launcher:export-log'),
  launch: settings => ipcRenderer.invoke('launcher:launch', settings),
  searchShaders: (settings, query, offset) => ipcRenderer.invoke('launcher:shaders-search', settings, query, offset),
  searchCatalog: (settings, kind, query, offset) => ipcRenderer.invoke('launcher:catalog-search', settings, kind, query, offset),
  installCatalog: (settings, kind, project) => ipcRenderer.invoke('launcher:catalog-install', settings, kind, project),
  installShader: (settings, project) => ipcRenderer.invoke('launcher:shaders-install', settings, project),
  listMods: settings => ipcRenderer.invoke('launcher:mods-list', settings),
  listInstalled: settings => ipcRenderer.invoke('launcher:content-list', settings),
  importMods: settings => ipcRenderer.invoke('launcher:mods-import', settings),
  importShaders: settings => ipcRenderer.invoke('launcher:shaders-import', settings),
  toggleMod: (settings, file) => ipcRenderer.invoke('launcher:mods-toggle', settings, file),
  copyMods: (source, target) => ipcRenderer.invoke('launcher:mods-copy', source, target),
  importOptifine: settings => ipcRenderer.invoke('launcher:optifine-import', settings),
  optifineSite: () => ipcRenderer.invoke('launcher:optifine-site'),
  onEvent: handler => { ipcRenderer.on('launcher:event', (_, event) => handler(event)); }
};

contextBridge.exposeInMainWorld('launcher', api);
