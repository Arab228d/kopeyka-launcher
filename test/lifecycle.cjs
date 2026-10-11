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
for (const name of ['appData', 'userData', 'sessionData']) { const directory = path.join(home, name); fs.mkdirSync(directory); app.setPath(name, directory); }
app.commandLine.appendSwitch('use-angle', 'swiftshader');
app.commandLine.appendSwitch('enable-unsafe-swiftshader');
app.commandLine.appendSwitch('disable-renderer-backgrounding');
const engine = require('../src/engine');
engine.fetchJson = async () => ({ latest: { release: '26.2' }, versions: [{ id: '26.2', type: 'release' }] });
engine.ensureJava = async () => 'test-java';
require('../src/installer').prepareMinecraft = async () => ({ metadata: { type: 'release', javaVersion: { majorVersion: 25 }, assetIndex: { id: 'test' } } });
require('../src/loaders').prepareLoader = async () => ({ version: { number: '26.2', type: 'release' }, overrides: {} });
require('../src/loader-catalog').fetchCatalog = async () => ({ fabric: {}, forge: {}, neoforge: {}, optifine: {} });
require('../src/updates').checkUpdate = async () => null;
let child, client;
require('../src/game-client').GameClient = class extends EventEmitter {
  async launch() { client = this; child = new EventEmitter(); child.pid = 12345; child.exitCode = null; return child; }
};
require('../src/main');
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
async function until(predicate) { for (let n = 0; n < 100; n++) { if (await predicate()) return; await delay(100); } throw new Error('Timed out'); }
app.whenReady().then(async () => {
  try {
    let window;
    await until(async () => { window = BrowserWindow.getAllWindows()[0]; return window && /index.html$/.test(window.webContents.getURL()) && await window.webContents.executeJavaScript("!!document.getElementById('play') && !document.getElementById('play').disabled").catch(() => false); });
    await window.webContents.executeJavaScript("window.launcher.launch({...config,version:'26.2'})");
    client.emit('data', 'OpenAL initialized.');
    await until(() => !window.isVisible());
    await delay(1100);
    // The close button must not tear down the session watcher while playing.
    window.show(); window.close(); assert.equal(window.isDestroyed(), false); assert.equal(window.isVisible(), false);
    child.exitCode = 0; child.emit('close', 0);
    await until(() => window.isVisible());
    assert.equal(await window.webContents.executeJavaScript("document.body.classList.contains('launch-transition')"), false);
    assert.equal(await window.webContents.executeJavaScript("document.getElementById('play').disabled"), false);
    const saved = JSON.parse(await fsp.readFile(path.join(home, '.kopeyka', 'launcher', 'playtime.json'), 'utf8'));
    assert.ok(saved.totalSeconds >= 1);
    await window.webContents.executeJavaScript("window.launcher.launch({...config,version:'26.2'})");
    client.emit('data', 'OpenAL initialized.'); await until(() => !window.isVisible());
    child.exitCode = 1; child.emit('close', 1); await until(() => window.isVisible());
    assert.equal(await window.webContents.executeJavaScript("document.getElementById('play').disabled"), false);
    console.log(JSON.stringify({ ok: true, restoresAfterExit: true, restoresAfterCrash: true, savedPlaytime: saved.totalSeconds }));
    app.exit(0);
  } catch (error) { console.error(error); app.exit(1); }
});
