const { app, BrowserWindow, ipcMain, dialog, shell, screen, powerMonitor } = require('electron');
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
const shaders = require('./shaders');
const { fetchCatalog } = require('./loader-catalog');
const updates = require('./updates');
const { backgroundCatalog } = require('./background-catalog');
const { ReleaseNews } = require('./release-news');
const { prepareLoader, importOptifine } = require('./loaders');
const { launchMemory, launchFailure } = require('./launch-health');
const { registerWindowControls } = require('./window-controls');
const { createProgressSender } = require('./progress-events');
const { storageDirectory, legacyDirectories, loadSettings, jsonWriter, migrateLegacyGame } = require('./persistence');
const { Playtime } = require('./playtime');
const { prepareGameData } = require('./game-data');
const nativeFs = require('node:fs');
const legacyData = legacyDirectories(os.homedir(), app.getPath('appData'), app.getPath('userData'));
const stableData = storageDirectory(os.homedir());
nativeFs.mkdirSync(stableData, { recursive: true });
app.setPath('userData', stableData);
let defaultGameDirectory = path.join(os.homedir(), '.kopeyka', 'minecraft');
try { defaultGameDirectory = nativeFs.realpathSync.native(path.join(app.getPath('appData'), 'KOPEYKA', 'minecraft')); } catch (error) { if (error.code !== 'ENOENT') throw error; }
let window, settings, manifest, manifestTask, busy = false, game, quitting = false, hiddenForOperation = false, playtimeLoaded = false;
let settingsQueue = Promise.resolve();
const defaults = () => ({ nickname: 'Player', memory: os.totalmem() < 8 * 1073741824 ? 2 : 4, version: '1.21.1', snapshots: false, historical: false, loader: 'vanilla', gameDirectory: defaultGameDirectory });
const configPath = () => path.join(app.getPath('userData'), 'settings.json');
const writeSettings = jsonWriter(configPath());
const playtime = new Playtime(path.join(stableData, 'playtime.json'));
const send = createProgressSender(event => { if (window && !window.isDestroyed()) window.webContents.send('launcher:event', event); });
async function save(input) {
  const next = validateSettings(input, defaults());
  // Serialize the whole operation: directory creation can finish out of order
  // even though the JSON writer itself already serializes its writes.
  const task = settingsQueue.catch(() => {}).then(async () => {
    await fs.mkdir(next.gameDirectory, { recursive: true });
    next.gameDirectory = nativeFs.realpathSync.native(next.gameDirectory);
    await writeSettings(next);
    settings = next;
    return settings;
  });
  settingsQueue = task;
  return task;
}
async function getManifest(refresh = false) {
  if (!refresh && manifest) return manifest;
  if (!manifestTask) manifestTask = (async () => {
    const cache = path.join(app.getPath('userData'), 'versions-cache.json');
    try {
      const fresh = await fetchJson(MANIFEST, (url, options) => fetch(url, { ...options, signal: AbortSignal.timeout(10000) }));
      if (!Array.isArray(fresh?.versions) || !fresh.versions.length) throw new Error('Некорректный список версий Minecraft.');
      manifest = { ...fresh, source: 'network' };
    } catch (error) {
      if (!manifest) {
        try {
          const cached = JSON.parse(await fs.readFile(cache, 'utf8'));
          if (!Array.isArray(cached?.versions) || !cached.versions.length) throw new Error('Некорректный список версий Minecraft.');
          manifest = { ...cached, source: 'cache' };
        } catch { throw new Error('Не удалось получить версии Minecraft. Проверьте подключение к интернету.'); }
      }
      send({ kind: 'log', message: 'Используется сохранённый список версий: сервер недоступен.' });
      manifest.source = 'cache';
      return manifest;
    }
    try { await fs.writeFile(cache, JSON.stringify(manifest)); }
    catch (error) { send({ kind: 'log', message: 'Не удалось сохранить список версий: ' + error.message }); }
    return manifest;
  })().finally(() => { manifestTask = null; });
  return manifestTask;
}
function showWindow() {
  if (quitting || !window || window.isDestroyed()) return;
  hiddenForOperation = false;
  if (window.isMinimized()) window.restore();
  window.show(); window.focus();
}
function finishOperation() {
  busy = false;
  if (hiddenForOperation && !game) showWindow();
}
const primaryInstance = app.requestSingleInstanceLock();
let shutdown;
app.on('before-quit', event => {
  quitting = true;
  if (!primaryInstance || shutdown === 'done') return;
  event.preventDefault();
  if (!shutdown) shutdown = Promise.allSettled([settingsQueue, playtimeLoaded ? playtime.checkpoint(true) : Promise.resolve()]).then(() => { shutdown = 'done'; app.quit(); });
});
if (!primaryInstance) app.quit();
app.on('second-instance', () => { if (window && !window.isDestroyed()) { if (window.isMinimized()) window.restore(); window.show(); window.focus(); } });
app.whenReady().then(async () => {
  if (!primaryInstance) return;
  const display = screen.getPrimaryDisplay().workAreaSize;
  window = new BrowserWindow({ width: 300, height: 533, minWidth: 300, minHeight: 533, frame: false, show: false, icon: path.join(__dirname, 'ui', 'assets', 'startup-logo.png'), backgroundColor: '#10191f', title: 'KOPEYKA Laucher', autoHideMenuBar: true, webPreferences: { preload: path.join(__dirname, 'preload.js'), contextIsolation: true, nodeIntegration: false, sandbox: true, additionalArguments: ['--kopeyka-started-at=' + Date.now()] } });
  registerWindowControls(window);
  window.on('close', event => { if (!quitting && (game || busy)) { event.preventDefault(); hiddenForOperation = true; window.hide(); } });
  window.webContents.setWindowOpenHandler(() => ({ action: 'deny' }));
  window.webContents.on('will-navigate', event => event.preventDefault());
  window.once('ready-to-show', () => { if (!window.isDestroyed()) window.show(); });
  await window.loadFile(path.join(__dirname, 'ui', 'splash.html'));
  let mainOpened = false;
  const openMainWindow = async () => {
    if (mainOpened || window.isDestroyed()) return;
    mainOpened = true;
    window.setMinimumSize(1020, 720);
    window.setSize(Math.min(1480, display.width), Math.min(1120, display.height));
    window.center();
    await window.loadFile(path.join(__dirname, 'ui', 'index.html'));
  };
  const splashFallback = setTimeout(() => openMainWindow().catch(() => {}), 10000);
  await fs.mkdir(app.getPath('userData'), { recursive: true });
  const existingInstall = nativeFs.existsSync(path.join(stableData, "settings.json")) || legacyData.some(directory => nativeFs.existsSync(path.join(directory, "settings.json")));
  settings = await loadSettings(stableData, legacyData, defaults());
  settings.gameDirectory = await migrateLegacyGame(settings.gameDirectory, os.homedir());
  await save(settings);
  await playtime.load();
  playtimeLoaded = true;
  const releaseNews = new ReleaseNews(stableData, app.getVersion(), await fs.readFile(path.join(__dirname, "release-notes.txt"), "utf8"), existingInstall);
  await releaseNews.load();
  ipcMain.handle("launcher:release-news", () => releaseNews.current());
  ipcMain.handle("launcher:release-news-seen", () => releaseNews.acknowledge());
  let minecraftNewsCache = { at: 0, items: [] };
  ipcMain.handle('launcher:minecraft-news', async () => {
    if (Date.now() - minecraftNewsCache.at < 600000 && minecraftNewsCache.items.length) return minecraftNewsCache.items;
    try {
      const html = await (await fetch('https://www.minecraft.net/en-us/article', { signal: AbortSignal.timeout(8000) })).text();
      const items = [], seen = new Set(), pattern = /<a[^>]+href="(\/en-us\/article\/[^\"]+)"[^>]*>([\s\S]*?)<\/a>/gi;
      for (const match of html.matchAll(pattern)) {
        const title = match[2].replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/&#39;/g, "'").replace(/\s+/g, ' ').trim();
        if (!title || title.length < 8 || seen.has(match[1])) continue;
        seen.add(match[1]); items.push({ title: title.slice(0, 140), url: 'https://www.minecraft.net' + match[1] });
        if (items.length >= 6) break;
      }
      if (items.length) minecraftNewsCache = { at: Date.now(), items };
      return minecraftNewsCache.items;
    } catch { return minecraftNewsCache.items; }
  });
  const publishTime = () => send({ kind: 'playtime', seconds: playtime.total() });
  const checkpoint = stop => playtime.checkpoint(stop).then(publishTime).catch(error => send({ kind: 'log', message: 'Не удалось сохранить время игры: ' + error.message }));
  setInterval(() => { if (game) checkpoint(false); }, 30000).unref();
  powerMonitor.on('suspend', () => { if (game) checkpoint(true); });
  powerMonitor.on('resume', () => { if (game) playtime.start(); });
  ipcMain.handle('launcher:settings', () => ({ ...settings, playtimeSeconds: playtime.total(), totalMemory: Math.floor(os.totalmem() / 1073741824), appVersion: app.getVersion() }));
  ipcMain.handle('launcher:textures', () => loadMinecraftTextures([settings.gameDirectory, defaults().gameDirectory, path.join(app.getPath('appData'), '.minecraft')], app.getPath('userData'), settings.version));
  ipcMain.handle('launcher:save', (_, input) => { if (busy) throw new Error('Дождитесь завершения запуска.'); return save(input); });
  const versionCatalog = backgroundCatalog(path.join(stableData, 'versions-cache.json'), () => getManifest(true), value => Array.isArray(value.versions) && value.versions.length > 0, value => send({kind:'versions-refreshed', data:value}));
  const loadersCached = backgroundCatalog(path.join(stableData, 'loader-catalog.json'), () => fetchCatalog(stableData), value => ['forge','fabric','neoforge','optifine'].some(key => value[key] && typeof value[key] === 'object'), value => send({kind:'loaders-refreshed', data:value}));
  ipcMain.handle('launcher:versions', async (_, refresh) => {
    const { value: data, source } = await versionCatalog.withSource(refresh === true);
    return { latest: data.latest, versions: data.versions.map(({ id, type }) => ({ id, type })), source: source === 'cache' ? source : data.source || source };
  });
  let pendingUpdate;
  ipcMain.handle('launcher:loader-catalog', async (_, refresh) => {
    const { value, source } = await loadersCached.withSource(refresh === true);
    return { ...value, source };
  });
  ipcMain.handle('launcher:update-check', async () => {
    pendingUpdate = await updates.checkUpdate(app.getVersion());
    return pendingUpdate ? {version: pendingUpdate.version} : null;
  });
  ipcMain.handle('launcher:update-install', async () => {
    if (!app.isPackaged) throw new Error('Обновление доступно в установленном лаунчере.');
    if (busy || game) throw new Error('Закрой Minecraft и дождись завершения операции.');
    if (!pendingUpdate) throw new Error('Сначала проверь обновления.');
    busy = true;
    try {
      const installer = await updates.downloadUpdate(pendingUpdate, path.join(app.getPath('userData'), 'updates'), send);
      await releaseNews.prepare(pendingUpdate);
      await updates.installUpdate(installer, process.execPath, process.pid);
      app.quit();
      return {ok: true};
    } finally { finishOperation(); }
  });
  const checkedProfile = input => validateSettings(input, defaults());
  ipcMain.handle('launcher:avatar', (_, nickname) => require('./profile-avatar').avatar(nickname, path.join(stableData, 'avatars')));
  const modAction = async action => {
    if (busy || game) throw new Error('Закрой Minecraft и дождись завершения текущей операции.');
    busy = true;
    try { return await action(); } finally { finishOperation(); }
  };
  ipcMain.handle('launcher:shaders-search', (_, input, query, offset) => shaders.searchShaders(checkedProfile(input), query, offset));
  ipcMain.handle('launcher:catalog-search', (_, input, kind, query, offset) => require('./catalog').searchCatalog(checkedProfile(input), kind, query, offset));
  ipcMain.handle('launcher:catalog-install', (_, input, kind, project) => modAction(() => require('./catalog').installCatalog(checkedProfile(input), kind, project, event => send({ kind: 'mods-progress', ...event }))));
  ipcMain.handle('launcher:shaders-install', (_, input, project) => modAction(() => shaders.installShader(checkedProfile(input), project, event => send({ kind: 'mods-progress', ...event }))));
  ipcMain.handle('launcher:mods-list', (_, input) => mods.listMods(checkedProfile(input)));
  ipcMain.handle('launcher:content-list', (_, input) => require('./installed-content').listInstalled(checkedProfile(input)));
  ipcMain.handle('launcher:mods-import', (_, input) => modAction(async () => {
    const result = await dialog.showOpenDialog(window, { title: 'Выбери моды', properties: ['openFile', 'multiSelections'], filters: [{ name: 'Minecraft mods', extensions: ['jar'] }] });
    return result.canceled ? [] : mods.importMods(checkedProfile(input), result.filePaths);
  }));
  ipcMain.handle('launcher:mods-toggle', (_, input, file) => modAction(() => mods.toggleMod(checkedProfile(input), file)));
  ipcMain.handle('launcher:mods-copy', (_, source, target) => modAction(() => mods.copyMods(checkedProfile(source), checkedProfile(target))));
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
    let logHandle, log, closeLog;
    try {
      const config = await save(input);
      logHandle = await fs.open(path.join(app.getPath('userData'), 'launcher.log'), 'w');
      let logQueue = Promise.resolve(), logClosed = false;
      log = message => {
        const text = String(message); send({ kind: 'log', message: text });
        if (!logClosed) logQueue = logQueue.then(() => logHandle.write(text + '\n')).catch(() => {});
      };
      closeLog = async () => { logClosed = true; await logQueue; await logHandle.close().catch(() => {}); };
      const report = event => { if (event.kind === 'log') log(event.message); else { send(event); if (event.message && event.percent === null) log(event.message); } };
      log(`KOPEYKA ${app.getVersion()} · Windows ${os.release()} ${process.arch} · RAM: ${(os.totalmem()/1073741824).toFixed(1)} ГБ, свободно ${(os.freemem()/1073741824).toFixed(1)} ГБ · Minecraft ${config.version} / ${config.loader}`);
      launchMemory(config.memory, os.totalmem(), os.freemem());
      const data = await getManifest();
      const version = data.versions.find(v => v.id === config.version);
      if (!version) throw new Error('Эта версия отсутствует в списке Minecraft.');
      const { metadata } = await prepareMinecraft(config.gameDirectory, version, report);
      const javaPath = await ensureJava(metadata.javaVersion?.majorVersion || 8, path.join(app.getPath('userData'), 'runtimes'), report, app.isPackaged ? path.join(process.resourcesPath, 'runtimes') : path.join(__dirname, '../build/runtimes'));
      const loader = await prepareLoader(config, metadata, javaPath, report);
      report({ kind: 'progress', percent: null, message: 'Подготавливаем общие миры и настройки…' });
      await prepareGameData(config.gameDirectory, loader.overrides.gameDirectory || config.gameDirectory, metadata, app.getPreferredSystemLanguages());
      await fs.mkdir(config.gameDirectory, { recursive: true });
      const memory = launchMemory(config.memory, os.totalmem(), os.freemem());
      log(`Память Java: ${memory} ГБ (выбрано ${config.memory} ГБ). Java: ${javaPath}`);
      const client = new GameClient();
      let ready = false, startupFailed = false, hiddenForGame = false, readyTimer;
      function closeWhenReady() {
        if (ready) clearTimeout(readyTimer);
        if (ready && !startupFailed && game && !hiddenForGame) {
          hiddenForGame = true;
          log('Окно игры инициализировано. Лаунчер скрыт до завершения игры.');
          send({ kind: 'state', state: 'running', message: 'Minecraft запущен.' });
          if (window && !window.isDestroyed()) window.hide();
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
      playtime.start();
      // Some clients do not print the usual renderer/audio readiness line.
      // Do not leave the launcher covering a running game forever.
      readyTimer = setTimeout(() => {
        if (game === child && !startupFailed && !hiddenForGame) {
          ready = true;
          log('Строка готовности Minecraft не найдена, скрываем лаунчер по таймауту.');
          closeWhenReady();
        }
      }, 30000);
      child.once('error', error => { startupFailed = true; send({ kind: 'error', message: error.message }); });
      let finished = false;
      const finishedGame = async (code, signal) => {
        if (finished) return;
        finished = true;
        startupFailed = true;
        // Keep the session locked until its final writes complete; another
        // launch must not receive this session's final idle/error event.
        await Promise.all([checkpoint(true), closeLog()]);
        if (game === child) game = null;
        send(code === 0 ? { kind: 'state', state: 'idle', message: 'Игра завершена. Можно отправляться снова!' } : { kind: 'error', message: launchFailure(recentOutput, code, signal) });
        showWindow();
      };
      child.once('close', finishedGame);
      if (child.exitCode !== null || child.signalCode) { await finishedGame(child.exitCode, child.signalCode); return { ok: false }; }
      send({ kind: 'state', state: 'launching', message: 'Загрузка игры' });
      closeWhenReady();
      return { ok: true };
    } catch (error) {
      if (logHandle) {
        if (log && closeLog) { log(`Ошибка: ${error.stack || error.message}`); await closeLog(); }
        else await logHandle.close().catch(() => {});
      }
      send({ kind: 'error', message: error.message });
      return { ok: false, error: error.message };
    } finally { finishOperation(); }
  });
  clearTimeout(splashFallback);
  await openMainWindow();
  if (process.env.KOPEYKA_SCREENSHOT) {
    setTimeout(async () => {
      await window.webContents.executeJavaScript('document.activeElement?.blur()');
      const screenshot = await window.webContents.capturePage();
      await fs.writeFile(process.env.KOPEYKA_SCREENSHOT, screenshot.toPNG());
      app.quit();
    }, 3500);
  }
}).catch(error => { dialog.showErrorBox('KOPEYKA: не удалось открыть данные', error.message); app.quit(); });
app.on('window-all-closed', () => app.quit());







