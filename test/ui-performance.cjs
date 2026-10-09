// Repeatable local renderer workload; no game download or launch.
const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('node:path');
const fs = require('node:fs/promises');
const { registerWindowControls } = require('../src/window-controls');
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const label = process.argv[2] || 'after';
const ui = process.argv[3] || path.join(__dirname, '..', 'src/ui/index.html');
const data = path.join(app.getPath('temp'), `kopeyka-perf-${process.pid}`);
require('node:fs').mkdirSync(data, { recursive: true });
app.setPath('userData', data); app.setPath('sessionData', data);
app.commandLine.appendSwitch('use-angle', 'swiftshader');
app.commandLine.appendSwitch('enable-unsafe-swiftshader');
app.commandLine.appendSwitch('disable-backgrounding-occluded-windows');
app.commandLine.appendSwitch('disable-renderer-backgrounding');
app.whenReady().then(async () => {
  try {
    ipcMain.handle('launcher:settings', () => ({ nickname: 'Player', memory: 4, version: '1.21.1', loader: 'vanilla', gameDirectory: data, totalMemory: 16 }));
    ipcMain.handle('launcher:versions', () => ({ versions: [{ id: '1.21.1', type: 'release' }] }));
    const win = new BrowserWindow({ width: 1240, height: 820, frame: false, webPreferences: { preload: path.join(__dirname, '../src/preload.js'), sandbox: true, backgroundThrottling: false } });
    registerWindowControls(win);
    await win.loadFile(path.resolve(ui)); win.show(); win.focus(); await delay(1500);
    const cdp = win.webContents.debugger; cdp.attach('1.3'); await cdp.sendCommand('Performance.enable');
    const metrics = async () => Object.fromEntries((await cdp.sendCommand('Performance.getMetrics')).metrics.map(m => [m.name, m.value]));
    const delta = (a, b) => Object.fromEntries(['TaskDuration', 'RecalcStyleDuration', 'LayoutDuration', 'RecalcStyleCount', 'LayoutCount'].map(k => [k, b[k] - a[k]]));
    const before = await metrics();
    await win.webContents.executeJavaScript(`new Promise(resolve => {
      const home=document.getElementById('home'), rect=home.getBoundingClientRect(); let tick=0;
      const timer=setInterval(() => {
        const x=rect.left+rect.width*(.5+.42*Math.sin(tick/13));
        const y=rect.top+rect.height*(.5+.4*Math.cos(tick/19));
        home.dispatchEvent(new PointerEvent('pointermove',{clientX:x,clientY:y,pointerType:'mouse'}));
        if(++tick===180){clearInterval(timer);resolve();}
      },16);
    })`);
    const active = delta(before, await metrics());
    await win.webContents.executeJavaScript("document.getElementById('home').dispatchEvent(new PointerEvent('pointerleave'))");
    await delay(1200);
    const idleStart = await metrics(); await delay(1200); const idle = delta(idleStart, await metrics());
    const logsStart = await metrics();
    for (let i = 0; i < 2000; i++) win.webContents.send('launcher:event', { kind: 'log', message: `Performance sample ${i}: preparing Minecraft files` });
    await delay(600); const hiddenLogs = delta(logsStart, await metrics());
    const result = { label, active, idle, hiddenLogs, heapBytes: (await metrics()).JSHeapUsedSize, softwareRendering: true };
    await fs.mkdir(path.join(__dirname, '../artifacts'), { recursive: true });
    await fs.writeFile(path.join(__dirname, `../artifacts/performance-${label}.json`), JSON.stringify(result, null, 2));
    console.log(JSON.stringify(result)); app.exit(0);
  } catch (error) { console.error(error); app.exit(1); }
});
