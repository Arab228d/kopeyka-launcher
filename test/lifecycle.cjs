// Exercise the real main-process IPC and window lifecycle with an isolated,
// controllable game process; no user settings, worlds or Java processes touched.
const { app, BrowserWindow } = require('electron');
const fs = require('node:fs');
const fsp = require('node:fs/promises');
const path = require('node:path');
const os = require('node:os');
const assert = require('node:assert/strict');
const { EventEmitter } = require('node:events');
const home = fs.mkdtempSync(path.join(os.tmpdir(), 'kopeyka-lifecycle-'));
os.homedir = () => home;
os.totalmem = () => 16 * 1073741824;
os.freemem = () => 8 * 1073741824;
for (const name of ['appData', 'userData', 'sessionData']) { const directory = path.join(home, name); fs.mkdirSync(directory); app.setPath(name, directory); }
app.commandLine.appendSwitch('use-angle', 'swiftshader');
app.commandLine.appendSwitch('enable-unsafe-swiftshader');
app.commandLine.appendSwitch('disable-renderer-backgrounding');
const engine = require('../src/engine');
const manifest = { latest: { release: '26.2' }, versions: [{ id: '26.2', type: 'release' }] };
let manifestFetch, manifestRequests = 0;
engine.fetchJson = async () => { manifestRequests++; return manifestFetch ? manifestFetch() : manifest; };
engine.ensureJava = async () => 'test-java';
require('../src/installer').prepareMinecraft = async () => ({ metadata: { type: 'release', javaVersion: { majorVersion: 25 }, assetIndex: { id: 'test' } } });
let preparation;
const prepare = require('../src/installer').prepareMinecraft;
require('../src/installer').prepareMinecraft = async (...args) => preparation ? preparation() : prepare(...args);
require('../src/loaders').prepareLoader = async () => ({ version: { number: '26.2', type: 'release' }, overrides: {} });
require('../src/loader-catalog').fetchCatalog = async () => ({ fabric: {}, forge: {}, neoforge: {}, optifine: {} });
require('../src/updates').checkUpdate = async () => null;
let shaderInstallation;
require('../src/shaders').installShader = async () => shaderInstallation();
let finalCheckpoint, closingStarted = false;
const { Playtime } = require('../src/playtime');
const checkpoint = Playtime.prototype.checkpoint;
Playtime.prototype.checkpoint = async function(stop) {
  if (stop && finalCheckpoint) { closingStarted = true; await finalCheckpoint; }
  return checkpoint.call(this, stop);
};
let child, client, earlySignal = false;
require('../src/game-client').GameClient = class extends EventEmitter {
  async launch() { client = this; child = new EventEmitter(); child.pid = 12345; child.exitCode = null; child.signalCode = earlySignal ? 'SIGTERM' : null; return child; }
};
const writeFile = fsp.writeFile;
fsp.writeFile = async function(file, ...args) {
  if (path.basename(file) === 'versions-cache.json') throw Object.assign(new Error('Controlled cache write failure'), { code: 'EACCES' });
  return writeFile.call(this, file, ...args);
};
require('../src/main');
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
async function until(predicate) { for (let n = 0; n < 100; n++) { if (await predicate()) return; await delay(100); } throw new Error('Timed out'); }
app.whenReady().then(async () => {
  try {
    let window;
    await until(async () => { window = BrowserWindow.getAllWindows()[0]; return window && /index.html$/.test(window.webContents.getURL()) && await window.webContents.executeJavaScript("!!document.getElementById('play') && !document.getElementById('play').disabled").catch(() => false); });
    fsp.writeFile = writeFile;
    assert.equal(fs.existsSync(path.join(home, '.kopeyka', 'launcher', 'versions-cache.json')), false, 'Fresh versions remain usable if the cache cannot be written');
    const mkdir = fsp.mkdir;
    fsp.mkdir = async function(directory, ...args) { if (path.basename(directory) === 'slow-settings') await delay(150); return mkdir.call(this, directory, ...args); };
    await window.webContents.executeJavaScript(`Promise.all([window.launcher.save({...config,memory:6,gameDirectory:${JSON.stringify(path.join(home, 'slow-settings'))}}),window.launcher.save({...config,memory:8,gameDirectory:${JSON.stringify(path.join(home, 'fast-settings'))}})])`);
    fsp.mkdir = mkdir;
    assert.equal(JSON.parse(await fsp.readFile(path.join(home, '.kopeyka', 'launcher', 'settings.json'), 'utf8')).memory, 8, 'Concurrent saves preserve request order even when directory preparation is slow');
    let rejectPreparation, preparing = false;
    preparation = () => { preparing = true; return new Promise((resolve, reject) => { rejectPreparation = reject; }); };
    const failedLaunch = window.webContents.executeJavaScript("window.launcher.launch({...config,version:'26.2'})");
    await until(() => preparing);
    window.close(); assert.equal(window.isVisible(), false);
    rejectPreparation(new Error('Controlled preparation failure'));
    assert.equal((await failedLaunch).ok, false);
    await until(() => window.isVisible());
    preparation = null;
    let completeShader, installing = false;
    shaderInstallation = () => { installing = true; return new Promise(resolve => { completeShader = resolve; }); };
    const installed = window.webContents.executeJavaScript("window.launcher.installShader(config,'fixture')");
    await until(() => installing);
    window.close(); assert.equal(window.isVisible(), false);
    completeShader({ file: 'fixture.zip' }); await installed;
    await until(() => window.isVisible());
    await window.webContents.executeJavaScript("window.launcher.launch({...config,version:'26.2'})");
    client.emit('data', 'OpenAL initialized.');
    await until(() => !window.isVisible());
    await delay(1100);
    // The close button must not tear down the session watcher while playing.
    window.show(); window.close(); assert.equal(window.isDestroyed(), false); assert.equal(window.isVisible(), false);
    let finishCheckpoint;
    finalCheckpoint = new Promise(resolve => { finishCheckpoint = resolve; });
    child.exitCode = 0; child.emit('close', 0);
    await until(() => closingStarted);
    assert.match(await window.webContents.executeJavaScript("window.launcher.launch({...config,version:'26.2'}).then(()=>'',error=>error.message)"), /уже запускается или работает/, 'A closing session remains locked while its final checkpoint is pending');
    finishCheckpoint(); finalCheckpoint = null;
    await until(() => window.isVisible());
    assert.equal(await window.webContents.executeJavaScript("document.body.classList.contains('launch-transition')"), false);
    assert.equal(await window.webContents.executeJavaScript("document.getElementById('play').disabled"), false);
    assert.equal(JSON.parse(await fsp.readFile(path.join(home, '.kopeyka', 'launcher', 'settings.json'), 'utf8')).useLatestRelease, true, 'Launching the default latest release preserves the automatic-version preference');
    const saved = JSON.parse(await fsp.readFile(path.join(home, '.kopeyka', 'launcher', 'playtime.json'), 'utf8'));
    assert.ok(saved.totalSeconds >= 1);
    await window.webContents.executeJavaScript("window.launcher.launch({...config,version:'26.2'})");
    client.emit('data', 'OpenAL initialized.'); await until(() => !window.isVisible());
    child.exitCode = 1; child.emit('close', 1); await until(() => window.isVisible());
    assert.equal(await window.webContents.executeJavaScript("document.getElementById('play').disabled"), false);
    earlySignal = true;
    assert.equal((await window.webContents.executeJavaScript("window.launcher.launch({...config,version:'26.2'})")).ok, false, 'A process already terminated by a signal cannot keep the session locked');
    earlySignal = false;
    let completeManifest, refreshing = false;
    manifestFetch = () => { refreshing = true; return new Promise(resolve => { completeManifest = resolve; }); };
    const requests = manifestRequests;
    const refreshed = window.webContents.executeJavaScript('window.launcher.versions(true)');
    await until(() => refreshing);
    await window.webContents.executeJavaScript("window.launcher.launch({...config,version:'26.2'})");
    assert.equal(manifestRequests, requests + 1, 'Launching during a refresh reuses the valid manifest instead of starting another network request');
    completeManifest(manifest); await refreshed; manifestFetch = null;
    await delay(1100);
    app.once('will-quit', event => {
      event.preventDefault();
      fsp.readFile(path.join(home, '.kopeyka', 'launcher', 'playtime.json'), 'utf8').then(text => {
        assert.ok(JSON.parse(text).totalSeconds >= saved.totalSeconds + 1, 'Explicit quit checkpoints the active game before exiting');
        console.log(JSON.stringify({ ok: true, restoresAfterExit: true, restoresAfterCrash: true, restoresAfterPreparationFailure: true, restoresAfterModInstall: true, concurrentSavesOrdered: true, earlySignalHandled: true, cacheWriteFailureHandled: true, reusesManifestDuringRefresh: true, quitCheckpointsPlaytime: true, savedPlaytime: saved.totalSeconds }));
        app.exit(0);
      }).catch(error => { console.error(error); app.exit(1); });
    });
    app.quit();
  } catch (error) { console.error(error); app.exit(1); }
});
