// Regression checks for asynchronous renderer state; no Minecraft downloads.
const { app, BrowserWindow, ipcMain } = require('electron');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const data = path.join(app.getPath('temp'), `kopeyka-ui-state-${process.pid}`);
fs.mkdirSync(data, { recursive: true });
app.setPath('userData', data); app.setPath('sessionData', data);
app.commandLine.appendSwitch('use-angle', 'swiftshader');
app.commandLine.appendSwitch('enable-unsafe-swiftshader');
app.on('window-all-closed', () => {});
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
async function until(check, message) {
  for (let attempt = 0; attempt < 150; attempt++) { if (await check()) return; await delay(20); }
  throw new Error(message);
}
app.whenReady().then(async () => {
  let win;
  try {
    const catalog = { fabric: { '1.21.1': true, '1.20.1': true }, forge: {}, neoforge: {}, optifine: {}, errors: [] };
    let settingsFail = false, latest = false, resolveRefresh, pendingMods = [], deferMods = false, pendingShaders = [], deferShaders = false;
    const manifest = { latest: { release: '1.21.1' }, versions: [{ id: '1.21.1', type: 'release' }, { id: '1.20.1', type: 'release' }] };
    ipcMain.handle('launcher:avatar', () => null);
    ipcMain.handle('launcher:settings', () => {
      if (settingsFail) throw new Error('Settings temporarily unavailable');
      return { nickname: 'Player', profiles: ['Player'], memory: 4, version: '1.21.1', loader: 'vanilla', useLatestRelease: latest, gameDirectory: data, totalMemory: 16 };
    });
    ipcMain.handle('launcher:versions', (_, refresh) => refresh ? new Promise(resolve => { resolveRefresh = resolve; }) : manifest);
    ipcMain.handle('launcher:loader-catalog', () => catalog);
    ipcMain.handle('launcher:save', (_, input) => input);
    ipcMain.handle('launcher:update-check', () => null);
    ipcMain.handle('launcher:release-news', () => ({ unread: false }));
    ipcMain.handle('launcher:news', () => ({ launcher: null, minecraft: [], updatedAt: 0, stale: true }));
    ipcMain.handle('launcher:content-list', (_, profile) => deferMods ? new Promise(resolve => pendingMods.push({ profile, resolve })) : []);
    ipcMain.handle('launcher:shaders-search', (_, profile) => deferShaders ? new Promise(resolve => pendingShaders.push({ profile, resolve })) : ({ total: 0, hits: [] }));
    const errors = [];
    async function open() {
      if (win) { win.destroy(); await delay(20); }
      win = new BrowserWindow({ show: false, width: 1240, height: 820, webPreferences: { preload: path.join(__dirname, '../src/preload.js'), sandbox: true } });
      require('../src/window-controls').registerWindowControls(win);
      win.webContents.on('console-message', event => { if (event.level === 'error') errors.push(event.message); });
      await win.loadFile(path.join(__dirname, '../src/ui/index.html'));
    }
    const js = script => win.webContents.executeJavaScript(script);
    const changeVersion = value => js(`document.getElementById('version').value=${JSON.stringify(value)}; document.getElementById('version').dispatchEvent(new Event('change'))`);
    const newManifest = { latest: { release: '1.22' }, versions: [{ id: '1.22', type: 'release' }, ...manifest.versions] };

    await open();
    await until(() => js("!document.getElementById('play').disabled"), 'Initial versions did not load');
    assert.equal(await js("document.getElementById('mods-import').disabled"), true, 'Vanilla must never enable JAR import');
    deferMods = true;
    await changeVersion('1.21.1|fabric');
    await js("document.querySelector('[data-page=mods]').click()");
    await until(() => pendingMods.length === 1, 'First mod request missing');
    await changeVersion('1.20.1|fabric');
    await until(() => pendingMods.length === 2, 'Changing version must refresh the open mod list');
    pendingMods[1].resolve([{ kind: 'mod', file: 'new.jar', title: 'Current build', enabled: true }]);
    await until(() => js("document.getElementById('mods-installed-list').textContent.includes('Current build')"), 'Current mod list missing');
    pendingMods[0].resolve([{ kind: 'mod', file: 'old.jar', title: 'Old build', enabled: true }]);
    await delay(100);
    assert.equal(await js("document.getElementById('mods-installed-list').textContent.includes('Old build')"), false, 'Stale list must not replace the selected build');
    win.webContents.send('launcher:event', { kind: 'state', state: 'running' });
    await until(() => js("document.querySelector('.mod-card button').disabled"), 'Running Minecraft must lock mod toggles');
    assert.equal(await js("document.getElementById('mods-import').disabled"), true);
    win.webContents.send('launcher:event', { kind: 'state', state: 'idle' });
    await until(() => js("!document.querySelector('.mod-card button').disabled"), 'Mod toggles did not unlock');

    // A refresh started while idle may complete after launch has begun.
    deferMods = false;
    await js("document.getElementById('refresh-versions').click()");
    await until(() => !!resolveRefresh, 'Refresh request missing');
    win.webContents.send('launcher:event', { kind: 'state', state: 'preparing' });
    await until(() => js("document.getElementById('play').disabled"), 'Preparation did not lock controls');
    resolveRefresh(newManifest);
    await delay(100);
    assert.equal(await js("document.getElementById('refresh-versions').disabled"), true, 'Refresh completion must not unlock busy controls');
    assert.equal(await js("!!document.querySelector('#version option[value=\"1.22\"]')"), false, 'Catalog refresh must wait until idle');
    win.webContents.send('launcher:event', { kind: 'state', state: 'idle' });
    await until(() => js("!!document.querySelector('#version option[value=\"1.22\"]')"), 'Deferred catalog was lost');
    assert.equal(await js("document.getElementById('version').value"), '1.20.1|fabric', 'An explicit selection must survive refresh');

    latest = true;
    await open();
    await until(() => js("!document.getElementById('play').disabled"), 'Latest-release window did not load');
    deferShaders = true;
    await js("document.querySelector('[data-page=mods]').click()");
    await js("document.getElementById('shaders-open').click()");
    await until(() => pendingShaders.length === 1, 'Initial shader query missing');
    win.webContents.send('launcher:event', { kind: 'versions-refreshed', data: newManifest });
    await until(() => js("document.getElementById('version').value === '1.22'"), 'Latest-release selection did not follow the refreshed catalog');
    await until(() => pendingShaders.length === 2, 'Open shader catalog must reload when the selected release changes');
    assert.equal(pendingShaders[1].profile.version, '1.22');
    pendingShaders[1].resolve({ total: 1, hits: [{ id: 'current', title: 'Current shader', description: '', author: 'Tester', downloads: 1 }] });
    await until(() => js("document.getElementById('shaders-results').textContent.includes('Current shader')"), 'Current shaders missing');
    pendingShaders[0].resolve({ total: 1, hits: [{ id: 'stale', title: 'Stale shader', description: '', author: 'Tester', downloads: 1 }] });
    await delay(100);
    assert.equal(await js("document.getElementById('shaders-results').textContent.includes('Stale shader')"), false, 'Stale shader query must not overwrite the new release');

    settingsFail = true;
    await open();
    await until(() => js("document.getElementById('status').textContent.includes('Settings temporarily unavailable')"), 'Settings failure not shown');
    assert.equal(await js("document.getElementById('play').disabled && document.getElementById('save').disabled"), true, 'Unavailable settings must not expose invalid operations');
    settingsFail = false;
    await js("document.getElementById('refresh-versions').click()");
    await until(() => js("!document.getElementById('play').disabled"), 'Refreshing must recover after startup settings fail');
    assert.deepEqual(errors, [], 'Renderer console must remain free of errors');
    console.log('Renderer state regressions passed: stale mods, busy controls, catalog selection, startup recovery.');
    win.destroy(); app.exit(0);
  } catch (error) { console.error(error); if (win) win.destroy(); app.exit(1); }
});
