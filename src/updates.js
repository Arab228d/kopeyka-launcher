const fs = require('node:fs/promises');
const path = require('node:path');
const crypto = require('node:crypto');
const { spawn } = require('node:child_process');
const REPO = 'Arab228d/kopeyka-launcher';
const HEADERS = { 'User-Agent': 'KOPEYKA-Launcher', Accept: 'application/vnd.github+json' };
function parseVersion(value) {
  const match = /^v?(\d+)\.(\d+)(?:\.(\d+))?(?:-([0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*))?(?:\+[0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*)?$/.exec(value || '');
  if (!match) return null;
  const numbers = match.slice(1,4).map(n => Number(n || 0));
  return numbers.every(Number.isSafeInteger) ? { numbers, pre: match[4] || '' } : null;
}
function newer(a, b) {
  const x = parseVersion(a), y = parseVersion(b);
  if (!x || !y) return false;
  for (let i = 0; i < 3; i++) if (x.numbers[i] !== y.numbers[i]) return x.numbers[i] > y.numbers[i];
  if (!x.pre || !y.pre) return !x.pre && !!y.pre;
  const left = x.pre.split('.'), right = y.pre.split('.');
  for (let i = 0; i < Math.max(left.length, right.length); i++) {
    if (left[i] === right[i]) continue;
    if (left[i] === undefined || right[i] === undefined) return right[i] === undefined;
    const numericLeft = /^\d+$/.test(left[i]), numericRight = /^\d+$/.test(right[i]);
    if (numericLeft && numericRight) {
      const a = BigInt(left[i]), b = BigInt(right[i]);
      if (a !== b) return a > b;
      continue;
    }
    if (numericLeft !== numericRight) return numericRight;
    return left[i] > right[i];
  }
  return false;
}
function releaseAsset(release) {
  return Array.isArray(release?.assets) ? release.assets.find(a => a?.state === 'uploaded' && /^KOPEYKA-Laun?cher-Setup-[\w.-]+\.exe$/.test(a.name) && /^sha256:[a-f0-9]{64}$/i.test(a.digest || '') && Number.isSafeInteger(a.size) && a.size > 0 && a.size < 2 * 1024 ** 3 && trustedDownload(a.browser_download_url)) : undefined;
}
function trustedDownload(value) {
  try { const url = new URL(value); return url.protocol === 'https:' && url.hostname === 'github.com' && url.pathname.startsWith('/' + REPO + '/releases/download/'); } catch { return false; }
}
async function checkUpdate(current, request = fetch) {
  const response = await request(`https://api.github.com/repos/${REPO}/releases?per_page=30`, { headers: HEADERS, signal: AbortSignal.timeout(12000) });
  if (!response.ok) throw new Error(`GitHub: HTTP ${response.status}. Проверка обновления пока недоступна.`);
  const releases = await response.json();
  if (!Array.isArray(releases)) throw new Error('GitHub вернул некорректный список обновлений.');
  const candidates = releases.filter(r => r && !r.draft && (!r.prerelease || parseVersion(current)?.pre) && newer(r.tag_name, current) && releaseAsset(r));
  candidates.sort((a,b) => newer(a.tag_name,b.tag_name) ? -1 : newer(b.tag_name,a.tag_name) ? 1 : 0);
  const release = candidates[0];
  return release ? { version: release.tag_name.replace(/^v/, ''), asset: releaseAsset(release), notes: String(release.body || "").slice(0,16000) } : null;
}
async function downloadUpdate(update, directory, report = () => {}, request = fetch) {
  const asset = releaseAsset({ assets: [update?.asset] });
  if (!asset) throw new Error('Обновление не содержит проверенного установщика.');
  await fs.mkdir(directory, { recursive: true });
  const file = path.join(directory, asset.name), partial = file + '.' + crypto.randomUUID() + '.part';
  let handle;
  try {
    const response = await request(asset.browser_download_url, { signal: AbortSignal.timeout(900000) });
    if (!response.ok) throw new Error(`Загрузка обновления: HTTP ${response.status}`);
    handle = await fs.open(partial, 'w');
    const hash = crypto.createHash('sha256'); let done = 0, lastPercent = -1;
    for await (const chunk of response.body) {
      done += chunk.length;
      if (done > asset.size) throw new Error('Неверный размер обновления.');
      await handle.writeFile(chunk); hash.update(chunk);
      const percent = Math.round(done / asset.size * 100);
      if (percent !== lastPercent) { lastPercent = percent; report({ kind: 'update-progress', percent }); }
    }
    await handle.close(); handle = null;
    if (done !== asset.size || hash.digest('hex') !== asset.digest.slice(7).toLowerCase()) throw new Error('Обновление не прошло проверку контрольной суммы. Попробуй снова.');
    await fs.rename(partial, file);
    return file;
  } catch (error) { if (handle) await handle.close().catch(() => {}); await fs.unlink(partial).catch(() => {}); throw error; }
}
const psQuote = value => "'" + value.replaceAll("'", "''") + "'";
function updateScript(installer, executable, pid) {
  if (!Number.isInteger(pid) || pid <= 0) throw new Error('Неверный процесс лаунчера.');
  return `$ErrorActionPreference = 'Stop'\nWait-Process -Id ${pid} -ErrorAction SilentlyContinue\nStart-Sleep -Seconds 2\ntry {\n  $setup = Start-Process -FilePath ${psQuote(installer)} -ArgumentList '/S' -PassThru -WindowStyle Hidden\n  $setup.WaitForExit()\n  if ($setup.ExitCode -ne 0) { throw \"Установщик завершился с кодом $($setup.ExitCode)\" }\n} catch { $_ | Out-File -LiteralPath ${psQuote(installer + '.error.log')} }\nStart-Process -FilePath ${psQuote(executable)} -WindowStyle Normal\n`;
}
async function installUpdate(installer, executable, pid) {
  const script = path.join(path.dirname(installer), 'install-update.ps1');
  await fs.writeFile(script, '\uFEFF' + updateScript(installer, executable, pid), 'utf8');
  // Launch through the Windows shell so the worker survives the launcher exiting.
  const bootstrap = "Start-Process -FilePath 'powershell.exe' -ArgumentList @('-NoProfile','-NonInteractive','-ExecutionPolicy','Bypass','-File'," + psQuote('"' + script + '"') + ") -WindowStyle Hidden";
  const child = spawn('powershell.exe', ['-NoProfile', '-NonInteractive', '-EncodedCommand', Buffer.from(bootstrap, 'utf16le').toString('base64')], { windowsHide: true, stdio: 'ignore' });
  await new Promise((resolve,reject) => {
    child.once('error', reject);
    child.once('close', code => code === 0 ? resolve() : reject(new Error('Не удалось запустить установку обновления.')));
  });
}
module.exports = { newer, checkUpdate, downloadUpdate, installUpdate, updateScript, trustedDownload };
