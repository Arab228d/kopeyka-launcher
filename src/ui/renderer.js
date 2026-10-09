const $ = id => document.getElementById(id);
let config, versions = [], busy = false, versionsReady = false, modsBusy = false;
const api = window.launcher;
function page(name) {
  document.querySelectorAll('.page').forEach(el => el.hidden = el.id !== name);
  document.querySelectorAll('.nav-button').forEach(el => el.classList.toggle('active', el.dataset.page === name));
  if (name === 'mods' && config) { updateModProfile(); refreshInstalled(); }
}
document.querySelectorAll('[data-page]').forEach(el => el.addEventListener('click', () => page(el.dataset.page)));
document.querySelector('.brand').addEventListener('click', event => { event.preventDefault(); page('home'); });
function status(message, error = false) { $('status').textContent = message; $('status').parentElement.hidden = !message; $('status').parentElement.classList.toggle('error', error); }
function current() { return { ...config, nickname: $('nickname').value.trim(), version: $('version').value, memory: Number($('memory').value), snapshots: $('snapshots').checked, historical: $('historical').checked, loader: $('loader').value }; }
function setBusy(value, running = false) {
  window.dispatchEvent(new CustomEvent('game-running', { detail: value || modsBusy }));
  busy = value; $('play').disabled = value || modsBusy || !versionsReady;
  $('play-text').textContent = running ? 'В игре' : value ? 'Ждём…' : 'Играть';
  $('play').setAttribute('aria-busy', String(value));
  ['version', 'nickname', 'memory', 'snapshots', 'historical', 'choose-folder', 'save', 'loader', 'mods-import', 'optifine-import'].forEach(id => $(id).disabled = value || modsBusy);
}
function launchTransition(active) {
  document.body.classList.toggle('launch-transition', active);
  $('launch-overlay').hidden = !active;
  if (active) page('home');
  window.dispatchEvent(new CustomEvent('launch-transition', { detail: active }));
}
function renderVersions() {
  const selected = $('version').value || config.version;
  const available = versions.filter(v => v.type === 'release' || (config.snapshots && v.type === 'snapshot') || (config.historical && ['old_alpha', 'old_beta'].includes(v.type)));
  const labels = { snapshot: ' · Тестовая', old_alpha: ' · Alpha / Classic', old_beta: ' · Beta' };
  $('version').replaceChildren(...available.map(v => new Option(`${v.id}${labels[v.type] || ''}`, v.id)));
  $('version').value = available.some(v => v.id === selected) ? selected : available.some(v => v.id === config.version) ? config.version : available[0]?.id || '';
}
function log(message) {
  const el = $('log');
  if (el.dataset.started !== 'yes') { el.textContent = ''; el.dataset.started = 'yes'; }
  el.textContent = (el.textContent + `[${new Date().toLocaleTimeString('ru-RU')}] ${message}\n`).slice(-80000);
  el.scrollTop = el.scrollHeight;
}
api.onEvent(event => {
  if (event.kind === 'mods-progress') {
    modStatus(event.message); $('mods-progress').hidden = false;
    if (event.percent === null) $('mods-progress').removeAttribute('value'); else $('mods-progress').value = event.percent;
  }
  if (event.kind === 'log') log(event.message);
  if (event.kind === 'progress') {
    status(event.message); $('progress').hidden = false;
    if (event.percent === null) { $('progress').removeAttribute('value'); $('percent').textContent = ''; }
    else { const percent = Math.max(0, Math.min(100, event.percent)); $('progress').value = percent; $('percent').textContent = `${Math.round(percent)}%`; }
  }
  if (event.kind === 'state') {
    if (event.state === 'launching') launchTransition(true);
    if (event.state === 'idle') launchTransition(false);
    setBusy(event.state !== 'idle', event.state === 'running'); status(event.state === 'preparing' ? event.message : '');
    if (event.state !== 'preparing') { $('progress').hidden = true; $('percent').textContent = ''; }
  }
  if (event.kind === 'error') { launchTransition(false); window.dispatchEvent(new CustomEvent('game-running', { detail: false })); setBusy(false); status(event.message, true); log(event.message); $('progress').hidden = true; $('percent').textContent = ''; }
});
$('play').addEventListener('click', async () => {
  if (busy) return;
  setBusy(true);
  try { const result = await api.launch(current()); if (!result.ok) setBusy(false); }
  catch (error) { setBusy(false); status(error.message, true); }
});
$('nickname').addEventListener('input', () => $('profile-name').textContent = $('nickname').value || 'Player');
$('snapshots').addEventListener('change', () => { config.snapshots = $('snapshots').checked; renderVersions(); });
$('historical').addEventListener('change', () => { config.historical = $('historical').checked; renderVersions(); });
$('version').addEventListener('change', () => { updateModProfile(); });
$('save').addEventListener('click', async () => {
  try { config = await api.save(current()); $('profile-name').textContent = config.nickname; $('settings-status').textContent = 'Настройки сохранены.'; }
  catch (error) { $('settings-status').textContent = error.message; }
});
$('choose-folder').addEventListener('click', async () => {
  try { const folder = await api.chooseFolder(); if (folder) { config.gameDirectory = folder; $('game-path').textContent = folder; $('settings-status').textContent = 'Нажми «Сохранить», чтобы применить новую папку.'; } }
  catch (error) { $('settings-status').textContent = error.message; }
});
$('card-folder').addEventListener('click', async () => { try { await api.openFolder(); } catch (error) { status(error.message, true); } });
$('clear-log').addEventListener('click', () => $('log').textContent = '');
$('export-log').addEventListener('click', async () => { try { const file = await api.exportLog(); if (file) log(`Журнал сохранён: ${file}`); } catch (error) { log(error.message); } });
async function init() {
  try {
    config = await api.settings();
    $('nickname').value = config.nickname; $('profile-name').textContent = config.nickname;
    $('memory').value = config.memory; $('snapshots').checked = config.snapshots; $('historical').checked = config.historical; $('loader').value = config.loader || 'vanilla'; $('game-path').textContent = config.gameDirectory;
    $('memory-hint').textContent = `На компьютере ${config.totalMemory} ГБ. Оставь минимум 1 ГБ для Windows.`;
    const result = await api.versions(); versions = result.versions; renderVersions(); versionsReady = true; updateModProfile(); setBusy(false);
    status('');
  } catch (error) { status(error.message, true); log(error.message); }
}
init();
function modStatus(message, error = false) { $('mods-status').textContent = message; $('mods-status').classList.toggle('error', error); }
function updateModProfile() {
  const loader = $('loader').value;
  $('mods-version').textContent = $('version').value || config.version;
  $('profile-loader').textContent = `${$('loader').selectedOptions[0].textContent} ▾`;
  $('optifine-panel').hidden = loader !== 'optifine';
  $('loader-note').textContent = loader === 'vanilla' ? 'Для модов выбери Forge или Fabric.' : loader === 'optifine' ? 'Выбери JAR OptiFine ниже.' : 'Загрузчик устанавливается автоматически при запуске.';
  $('mods-import').disabled = busy || modsBusy || !['forge', 'fabric'].includes(loader);
  $('mods-selection').textContent = 'Установленные моды';
}
function modMedia(hit, position = 0) {
  const media = document.createElement('div'); media.className = 'mod-media';
  const gallery = hit.gallery || [], source = gallery[0] || hit.icon;
  const monogram = document.createElement('span'); monogram.className = 'mod-monogram'; monogram.textContent = hit.title.slice(0, 2).toUpperCase(); media.append(monogram);
  if (!source) return media;
  if (!gallery.length) media.classList.add('icon-only');
  const cover = document.createElement('img'); cover.className = 'mod-cover'; cover.src = source; cover.alt = gallery.length ? `Скриншот ${hit.title}` : `Иконка ${hit.title}`; cover.loading = position < 4 ? 'eager' : 'lazy'; cover.decoding = 'async'; cover.referrerPolicy = 'no-referrer';
  let fallback = false;
  cover.addEventListener('error', () => {
    if (!fallback && hit.icon && cover.src !== hit.icon) { fallback = true; media.classList.add('icon-only'); cover.src = hit.icon; }
    else cover.hidden = true;
  });
  media.append(cover);
  if (gallery.length > 1) {
    let index = 0;
    const next = document.createElement('button'); next.type = 'button'; next.className = 'gallery-next'; next.textContent = `1 / ${gallery.length} ›`; next.setAttribute('aria-label', `Следующий скриншот ${hit.title}`);
    next.addEventListener('click', event => { event.preventDefault(); event.stopPropagation(); index = (index + 1) % gallery.length; media.classList.remove('icon-only'); cover.hidden = false; cover.src = gallery[index]; next.textContent = `${index + 1} / ${gallery.length} ›`; });
    media.append(next);
  }
  return media;
}
async function refreshInstalled() {
  try {
    const list = await api.listMods(current());
    $('mods-installed-list').replaceChildren(...list.map((mod, index) => {
      const card = document.createElement('div'); card.className = `mod-card${mod.enabled ? '' : ' disabled'}`;
      const title = document.createElement('strong'); title.textContent = mod.title;
      const toggle = document.createElement('button'); toggle.className = 'secondary-button'; toggle.textContent = mod.enabled ? 'Выключить' : 'Включить'; toggle.disabled = busy || modsBusy;
      toggle.addEventListener('click', () => modOperation(async () => { await api.toggleMod(current(), mod.file); await refreshInstalled(); return mod.enabled ? 'Мод выключен.' : 'Мод включён.'; }));
      const body = document.createElement('div'); body.className = 'mod-body'; body.append(title, toggle); card.append(modMedia(mod, index), body); return card;
    }));
    if (!list.length) modStatus('В этой сборке пока нет модов.');
  } catch (error) { modStatus(error.message, true); }
}
async function modOperation(action) {
  if (busy || modsBusy) return;
  modsBusy = true; setBusy(busy); document.querySelectorAll('.mod-card input, .mod-card button').forEach(el => el.disabled = true);
  try { config = await api.save(current()); const message = await action(); if (message) modStatus(message); }
  catch (error) { modStatus(error.message, true); }
  finally { modsBusy = false; $('mods-progress').hidden = true; setBusy(busy); updateModProfile(); document.querySelectorAll('.mod-card input, .mod-card button').forEach(el => el.disabled = busy); }
}
$('loader').addEventListener('change', async () => {
  updateModProfile(); $('optifine-status').textContent = '';
  try { config = await api.save(current()); await refreshInstalled(); } catch (error) { modStatus(error.message, true); }
});
$('mods-import').addEventListener('click', () => modOperation(async () => { const files = await api.importMods(current()); await refreshInstalled(); return files.length ? 'Добавлено модов: ' + files.length + '.' : ''; }));
$('optifine-import').addEventListener('click', () => modOperation(async () => { const file = await api.importOptifine(current()); if (file) $('optifine-status').textContent = file; return file ? 'OptiFine выбран. Нажми «Играть», чтобы установить и запустить.' : ''; }));
$('optifine-site').addEventListener('click', () => api.optifineSite().catch(error => modStatus(error.message, true)));
