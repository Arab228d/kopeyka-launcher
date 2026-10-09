const { app, BrowserWindow, ipcMain, dialog, shell, screen } = require('electron');
const path = require('node:path');
const fs = require('node:fs/promises');
const os = require('node:os');
const { GameClient, gameReady } = require('./game-client');
const { offlineProfile } = require('./auth');
const { validateSettings } = require('./config');
const { fetchJson, ensureJava, MANIFEST } = require('./engine');
const { loadMinecraftTextures } = require('./minecraft-textures');
const { prepareMinecraft } = require('./installer');
const mods = require('./mods');
const { prepareLoader, importOptifine } = require('./loaders');
const { launchMemory, launchFailure } = require('./launch-health');
const { registerWindowControls } = require('./window-controls');
const { createProgressSender } = require('./progress-events');
let window, settings, manifest, busy = false, game;
const defaults = () => ({ nickname: 'Player', memory: os.totalmem() < 8 * 1073741824 ? 2 : 4, version: '1.21.1', snapshots: false, historical: false, loader: 'vanilla', gameDirectory: path.join(app.getPath('appData'), 'KOPEYKA', 'minecraft') });
const configPath = () => path.join(app.getPath('userData'), 'settings.json');
const send = createProgressSender(event => { if (window && !window.isDestroyed()) window.webContents.send('launcher:event', event); });
async function save(input) {
  const next = validateSettings(input, defaults());
  await fs.mkdir(app.getPath('userData'), { recursive: true });
  await fs.writeFile(configPath() + '.tmp', JSON.stringify(next, null, 2));
  await fs.rename(configPath() + '.tmp', configPath());
  settings = next;
  return settings;
}
async function getManifest() {
  if (manifest) return manifest;
  const cache = path.join(app.getPath('userData'), 'versions-cache.json');
  try {
    manifest = await fetchJson(MANIFEST);
    await fs.writeFile(cache, JSON.stringify(manifest));
  } catch (error) {
    try { manifest = JSON.parse(await fs.readFile(cache, 'utf8')); }
    catch { throw new Error('Не удалось получить версии Minecraft. Проверьте подключение к интернету.'); }
    send({ kind: 'log', message: 'Используется сохранённый список версий: сервер недоступен.' });
  }
  return manifest;
}
app.whenReady().then(async () => {
  await fs.mkdir(app.getPath('userData'), { recursive: true });
  try { settings = validateSettings(JSON.parse(await fs.readFile(configPath(), 'utf8')), defaults()); }
  catch { settings = defaults(); }
  ipcMain.handle('launcher:settings', () => ({ ...settings, totalMemory: Math.floor(os.totalmem() / 1073741824), appVersion: app.getVersion() }));
  ipcMain.handle('launcher:textures', () => loadMinecraftTextures([settings.gameDirectory, defaults().gameDirectory, path.join(app.getPath('appData'), '.minecraft')], app.getPath('userData'), settings.version));
  ipcMain.handle('launcher:save', (_, input) => { if (busy) throw new Error('Дождитесь завершения запуска.'); return save(input); });
  ipcMain.handle('launcher:versions', async () => {
    const data = await getManifest();
    return { latest: data.latest, versions: data.versions.map(({ id, type }) => ({ id, type })) };
  });
  const checkedProfile = input => validateSettings(input, defaults());
  const modAction = async action => {
    if (busy || game) throw new Error('Закрой Minecraft и дождись завершения текущей операции.');
    busy = true;
    try { return await action(); } finally { busy = false; }
  };
  ipcMain.handle('launcher:mods-list', (_, input) => mods.listMods(checkedProfile(input)));
  ipcMain.handle('launcher:mods-import', (_, input) => modAction(async () => {
    const result = await dialog.showOpenDialog(window, { title: 'Выбери моды', properties: ['openFile', 'multiSelections'], filters: [{ name: 'Minecraft mods', extensions: ['jar'] }] });
    return result.canceled ? [] : mods.importMods(checkedProfile(input), result.filePaths);
  }));
  ipcMain.handle('launcher:mods-toggle', (_, input, file) => modAction(() => mods.toggleMod(checkedProfile(input), file)));
  ipcMain.handle('launcher:optifine-import', (_, input) => modAction(async () => {
    const result = await dialog.showOpenDialog(window, { title: 'Установщик OptiFine', properties: ['openFile'], filters: [{ name: 'OptiFine', extensions: ['jar'] }] });
    return result.canceled ? null : importOptifine(checkedProfile(input), result.filePaths[0]);
  }));
  ipcMain.handle('launcher:optifine-site', () => shell.openExternal('https://optifine.net/downloads'));
  ipcMain.handle('launcher:choose-folder', async () => {
    if (busy) throw new Error('Дождитесь завершения запуска.');
    const result = await dialog.showOpenDialog(window, { properties: ['openDirectory', 'createDirectory'], defaultPath: settings.gameDirectory });
    return result.canceled ? null : result.filePaths[0];
  });
  ipcMain.handle('launcher:open-folder', async () => {
    await fs.mkdir(settings.gameDirectory, { recursive: true });
    const error = await shell.openPath(settings.gameDirectory);
    if (error) throw new Error(error);
  });
  ipcMain.handle('launcher:export-log', async () => {
    const result = await dialog.showSaveDialog(window, { title: 'Сохранить журнал запуска', defaultPath: 'KOPEYKA-launcher.log', filters: [{ name: 'Журнал', extensions: ['log'] }] });
    if (result.canceled || !result.filePath) return null;
    const file = path.join(app.getPath('userData'), 'launcher.log');
    await fs.copyFile(file, result.filePath);
    return result.filePath;
  });
  ipcMain.handle('launcher:launch', async (_, input) => {
    if (busy || game) throw new Error('Игра уже запускается или работает.');
    busy = true;
    send({ kind: 'state', state: 'preparing', message: 'Проверяем файлы…' });
    let logHandle;
    try {
      const config = await save(input);
      logHandle = await fs.open(path.join(app.getPath('userData'), 'launcher.log'), 'w');
      const log = message => { const text = String(message); send({ kind: 'log', message: text }); logHandle.write(text + '\n').catch(() => {}); };
      const report = event => { send(event); if (event.kind === 'log' || event.message && event.percent === null) log(event.message); };
      log(`KOPEYKA ${app.getVersion()} · Windows ${os.release()} ${process.arch} · RAM: ${(os.totalmem()/1073741824).toFixed(1)} ГБ, свободно ${(os.freemem()/1073741824).toFixed(1)} ГБ · Minecraft ${config.version} / ${config.loader}`);
      launchMemory(config.memory, os.totalmem(), os.freemem());
      const data = await getManifest();
      const version = data.versions.find(v => v.id === config.version);
      if (!version) throw new Error('Эта версия отсутствует в списке Minecraft.');
      const { metadata } = await prepareMinecraft(config.gameDirectory, version, report);
      const javaPath = await ensureJava(metadata.javaVersion?.majorVersion || 8, path.join(app.getPath('userData'), 'runtimes'), report, app.isPackaged ? path.join(process.resourcesPath, 'runtimes') : path.join(__dirname, '../build/runtimes'));
      const loader = await prepareLoader(config, metadata, javaPath, report);
      await fs.mkdir(config.gameDirectory, { recursive: true });
      const memory = launchMemory(config.memory, os.totalmem(), os.freemem());
      log(`Память Java: ${memory} ГБ (выбрано ${config.memory} ГБ). Java: ${javaPath}`);
      const client = new GameClient();
      let ready = false, startupFailed = false;
      function closeWhenReady() {
        if (ready && !startupFailed && game) {
          log('Окно игры инициализировано. Закрываем лаунчер.');
          if (window && !window.isDestroyed()) window.hide();
          app.quit();
        }
      }
      let launchError;
      client.on('debug', log);
      let recentOutput = '';
      client.on('data', message => { recentOutput = (recentOutput + String(message)).slice(-32000); log(message); if (gameReady(recentOutput)) { ready = true; closeWhenReady(); } });
      client.on('error', error => { launchError = new Error(String(error)); log(error); });
      send({ kind: 'progress', percent: null, message: `Запуск Minecraft ${version.id}…` });
      const child = await client.launch({
        authorization: offlineProfile(config.nickname), root: config.gameDirectory,
        version: loader.version, customArgs: loader.customArgs,
        memory: { min: '1G', max: `${memory}G` }, javaPath,
        window: { width: 1280, height: 720 }, overrides: { detached: false, maxSockets: 4, ...loader.overrides }
      });
      if (!child?.pid) throw launchError || new Error('Minecraft не запустился. Подробности в журнале.');
      game = child;
      child.once('error', error => { startupFailed = true; send({ kind: 'error', message: error.message }); });
      child.once('close', code => {
        startupFailed = true;
        game = null; logHandle.close().catch(() => {});
        send(code === 0 ? { kind: 'state', state: 'idle', message: 'Игра завершена. Можно отправляться снова!' } : { kind: 'error', message: launchFailure(recentOutput, code) });
      });
      send({ kind: 'state', state: 'launching', message: 'Загрузка игры' });
      closeWhenReady();
      return { ok: true };
    } catch (error) {
      if (logHandle) { await logHandle.write(`Ошибка: ${error.stack || error.message}\n`).catch(() => {}); await logHandle.close().catch(() => {}); }
      send({ kind: 'error', message: error.message });
      return { ok: false, error: error.message };
    } finally { busy = false; }
  });
  const display = screen.getPrimaryDisplay().workAreaSize;
  window = new BrowserWindow({ width: Math.min(1480, display.width), height: Math.min(1120, display.height), minWidth: 1020, minHeight: 720, frame: false, backgroundColor: '#202124', title: 'KOPEYKA Laucher', autoHideMenuBar: true, webPreferences: { preload: path.join(__dirname, 'preload.js'), contextIsolation: true, nodeIntegration: false, sandbox: true } });
  registerWindowControls(window);
  window.webContents.setWindowOpenHandler(() => ({ action: 'deny' }));
  window.webContents.on('will-navigate', event => event.preventDefault());
  await window.loadFile(path.join(__dirname, 'ui', 'index.html'));
  if (process.env.KOPEYKA_SCREENSHOT) {
    setTimeout(async () => {
      await window.webContents.executeJavaScript('document.activeElement?.blur()');
      const screenshot = await window.webContents.capturePage();
      await fs.writeFile(process.env.KOPEYKA_SCREENSHOT, screenshot.toPNG());
      app.quit();
    }, 3500);
  }
});
app.on('window-all-closed', () => app.quit());
