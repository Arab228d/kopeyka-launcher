const $ = id => document.getElementById(id);
let config, versions = [], busy = false, versionsReady = false, modsBusy = false;
const api = window.launcher;
let logText = '', logQueue = [], logQueueSize = 0, logTimer;
function page(name) {
  document.querySelectorAll('.page').forEach(el => el.hidden = el.id !== name);
  document.querySelectorAll('.nav-button').forEach(el => el.classList.toggle('active', el.dataset.page === name));
  if (name === 'mods' && config) { updateModProfile(); refreshInstalled(); }
  if (name === 'logs') flushLogs();
}
document.querySelectorAll('[data-page]').forEach(el => el.addEventListener('click', () => page(el.dataset.page)));
function status(message, error = false) { $('status').textContent = message; $('status').parentElement.hidden = !message; $('status').parentElement.classList.toggle('error', error); }
function current() { return { ...config, nickname: config.nickname, version: $('version').value.split('|')[0], memory: Number($('memory').value), snapshots: $('snapshots').checked, historical: $('historical').checked, loader: $('loader').value }; }
function setBusy(value, running = false) {
  window.dispatchEvent(new CustomEvent('game-running', { detail: value || modsBusy }));
  busy = value; $('play').disabled = value || modsBusy || !versionsReady;
  $('play-text').textContent = running ? 'В игре' : value ? 'Ждём…' : 'Играть';
  $('play').setAttribute('aria-busy', String(value));
  ['version', 'nickname', 'memory', 'snapshots', 'historical', 'choose-folder', 'save', 'loader', 'mods-import', 'optifine-import', 'profiles-open'].forEach(id => $(id).disabled = value || modsBusy);
}
function launchTransition(active) {
    if (document.body.classList.contains('launch-transition') === active) return;
  document.body.classList.toggle('launch-transition', active);
  $('launch-overlay').hidden = !active;
  if (active) page('home');
    else { $('launch-progress').hidden = true; $('launch-indeterminate').hidden = false; $('launch-detail').textContent = ''; }
  window.dispatchEvent(new CustomEvent('launch-transition', { detail: active }));
}
function renderVersions() {
  const selected = $('version').value;
  const available = versions.filter(v => v.type === 'release' || (config.snapshots && v.type === 'snapshot') || (config.historical && ['old_alpha', 'old_beta'].includes(v.type)));
  const labels = { snapshot: ' · Тестовая', old_alpha: ' · Alpha / Classic', old_beta: ' · Beta' };
  const options = available.flatMap(v => {
    const items = [new Option(`${v.id}${labels[v.type] || ''}`, v.id)];
    if (v.type === 'release') for (const [loader, title] of [['fabric', 'Fabric'], ['forge', 'Forge'], ['optifine', 'OptiFine']]) items.push(new Option(`${v.id} ${title}`, `${v.id}|${loader}`));
    return items;
  });
  $('version').replaceChildren(...options);
  const saved = config.version + (config.loader && config.loader !== 'vanilla' ? '|' + config.loader : '');
  $('version').value = options.some(o => o.value === selected) ? selected : options.some(o => o.value === saved) ? saved : options[0]?.value || '';
  $('loader').value = $('version').value.split('|')[1] || 'vanilla';
}
function log(message) {
  const line = `[${new Date().toLocaleTimeString('ru-RU')}] ${message}\n`;
  logQueue.push(line); logQueueSize += line.length;
  if (logQueueSize > 160000) flushLogs();
  if (!logTimer) logTimer = setTimeout(flushLogs, 100);
}
function flushLogs() {
  clearTimeout(logTimer); logTimer = undefined;
  if (logQueue.length) { logText = (logText + logQueue.join('')).slice(-80000); logQueue = []; logQueueSize = 0; }
  if ($('logs').hidden) return;
  const el = $('log');
  if (el.textContent === logText) return;
  el.textContent = logText;
  el.scrollTop = el.scrollHeight;
}
api.onEvent(event => {
  if (event.kind === 'mods-progress') {
    modStatus(event.message); $('mods-progress').hidden = false;
    if (event.percent === null) $('mods-progress').removeAttribute('value'); else $('mods-progress').value = event.percent;
  }
  if (event.kind === 'log') log(event.message);
  if (event.kind === 'progress') {
      $('launch-detail').textContent = event.message || '';
      $('launch-progress').hidden = event.percent === null;
      $('launch-indeterminate').hidden = event.percent !== null;
      if (event.percent !== null) $('launch-progress').value = Math.max(0, Math.min(100, event.percent));
    status(event.message); $('progress').hidden = false;
    if (event.percent === null) { $('progress').removeAttribute('value'); $('percent').textContent = ''; }
    else { const percent = Math.max(0, Math.min(100, event.percent)); $('progress').value = percent; $('percent').textContent = `${Math.round(percent)}%`; }
  }
  if (event.kind === 'state') {
      if (event.state === 'preparing' || event.state === 'launching') launchTransition(true);
      if (event.state === 'preparing') $('launch-detail').textContent = event.message || 'Проверка файлов…';
      if (event.state === 'launching') { $('launch-detail').textContent = 'Запускаем Minecraft…'; $('launch-progress').hidden = true; $('launch-indeterminate').hidden = false; }
    if (event.state === 'idle') launchTransition(false);
    setBusy(event.state !== 'idle', event.state === 'running'); status(event.state === 'preparing' ? event.message : '');
    if (event.state !== 'preparing') { $('progress').hidden = true; $('percent').textContent = ''; }
  }
  if (event.kind === 'error') { launchTransition(false); window.dispatchEvent(new CustomEvent('game-running', { detail: false })); setBusy(false); status(event.message, true); log(event.message); $('progress').hidden = true; $('percent').textContent = ''; }
});
$('play').addEventListener('click', async () => {
  if (busy) return;
  setBusy(true);
    launchTransition(true);
    $('launch-detail').textContent = 'Проверка файлов…';
    try { const result = await api.launch(current()); if (!result.ok) { launchTransition(false); setBusy(false); status(result.error || 'Не удалось запустить игру.', true); } }
    catch (error) { launchTransition(false); setBusy(false); status(error.message, true); }
});

$('snapshots').addEventListener('change', () => { config.snapshots = $('snapshots').checked; renderVersions(); });
$('historical').addEventListener('change', () => { config.historical = $('historical').checked; renderVersions(); });
$('version').addEventListener('change', () => { $('loader').value = $('version').value.split('|')[1] || 'vanilla'; updateModProfile(); });
$('save').addEventListener('click', async () => {
  try { config = await api.save(current()); $('profile-name').textContent = config.nickname; $('settings-status').textContent = 'Настройки сохранены.'; }
  catch (error) { $('settings-status').textContent = error.message; }
});
$('choose-folder').addEventListener('click', async () => {
  try { const folder = await api.chooseFolder(); if (folder) { config.gameDirectory = folder; $('game-path').textContent = folder; $('settings-status').textContent = 'Нажми «Сохранить», чтобы применить новую папку.'; } }
  catch (error) { $('settings-status').textContent = error.message; }
});
$('card-folder').addEventListener('click', async () => { try { await api.openFolder(); } catch (error) { status(error.message, true); } });
$('clear-log').addEventListener('click', () => { clearTimeout(logTimer); logTimer = undefined; logText = ''; logQueue = []; logQueueSize = 0; $('log').textContent = ''; });
$('export-log').addEventListener('click', async () => { try { const file = await api.exportLog(); if (file) log(`Журнал сохранён: ${file}`); } catch (error) { log(error.message); } });
async function init() {
  try {
    config = await api.settings();
    config.profiles ||= [config.nickname]; $('profile-name').textContent = config.nickname;
    $('memory').value = config.memory; $('snapshots').checked = config.snapshots; $('historical').checked = config.historical; $('loader').value = config.loader || 'vanilla'; $('game-path').textContent = config.gameDirectory;
    $('memory-hint').textContent = `На компьютере ${config.totalMemory} ГБ. Оставь минимум 1 ГБ для Windows.`;
    window.dispatchEvent(new Event('ui-settings-ready'));
    const result = await api.versions(); versions = result.versions; $('version').value = ''; renderVersions(); versionsReady = true; updateModProfile(); setBusy(false);
    status('');
  } catch (error) { status(error.message, true); log(error.message); window.dispatchEvent(new Event('ui-settings-ready')); }
}
init();
function modStatus(message, error = false) { $('mods-status').textContent = message; $('mods-status').classList.toggle('error', error); }
function updateModProfile() {
  const loader = $('loader').value;
  $('mods-version').textContent = $('version').selectedOptions[0]?.textContent || config.version;
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
  $('version').value = $('version').value.split('|')[0] + ($('loader').value === 'vanilla' ? '' : '|' + $('loader').value);
  updateModProfile(); $('optifine-status').textContent = '';
  try { config = await api.save(current()); await refreshInstalled(); } catch (error) { modStatus(error.message, true); }
});
$('mods-import').addEventListener('click', () => modOperation(async () => { const files = await api.importMods(current()); await refreshInstalled(); return files.length ? 'Добавлено модов: ' + files.length + '.' : ''; }));
$('optifine-import').addEventListener('click', () => modOperation(async () => { const file = await api.importOptifine(current()); if (file) $('optifine-status').textContent = file; return file ? 'OptiFine выбран. Нажми «Играть», чтобы установить и запустить.' : ''; }));
$('optifine-site').addEventListener('click', () => api.optifineSite().catch(error => modStatus(error.message, true)));

let editingProfile = null, profilesSaving = false;
function resetProfileForm() {
  editingProfile = null; $('nickname').value = ''; $('profiles-submit').textContent = 'Добавить'; $('profiles-cancel').hidden = true;
  $('profiles-submit').disabled = config.profiles.length >= 15;
}
function renderProfiles() {
  $('profiles-count').textContent = config.profiles.length;
  $('profiles-list').replaceChildren(...config.profiles.map(name => {
    const row = document.createElement('div'); row.className = 'profile-row';
    const choose = document.createElement('button'); choose.className = 'profile-choice'; choose.textContent = name + (name === config.nickname ? ' ✓' : ''); choose.disabled = name === config.nickname;
    choose.addEventListener('click', () => saveProfiles(config.profiles, name));
    const edit = document.createElement('button'); edit.className = 'secondary-button'; edit.textContent = 'Изменить'; edit.setAttribute('aria-label', `Изменить ${name}`);
    edit.addEventListener('click', () => { editingProfile = name; $('nickname').value = name; $('profiles-submit').textContent = 'Сохранить'; $('profiles-submit').disabled = false; $('profiles-cancel').hidden = false; $('nickname').focus(); });
    const remove = document.createElement('button'); remove.className = 'secondary-button'; remove.textContent = 'Удалить'; remove.disabled = config.profiles.length === 1; remove.setAttribute('aria-label', `Удалить ${name}`);
    remove.addEventListener('click', () => { const remaining = config.profiles.filter(n => n !== name); saveProfiles(remaining, config.nickname === name ? remaining[0] : config.nickname); });
    row.append(choose, edit, remove); return row;
  }));
}
async function saveProfiles(profiles, nickname) {
  if (busy || modsBusy || profilesSaving) return;
  profilesSaving = true;
  $('profiles-dialog').querySelectorAll('button, input').forEach(el => el.disabled = true);
  try {
    config = await api.save({ ...current(), profiles, nickname });
    $('profile-name').textContent = config.nickname;
    $('profiles-status').textContent = 'Сохранено.';
  } catch (error) { $('profiles-status').textContent = error.message; }
  finally {
    profilesSaving = false;
    $('profiles-dialog').querySelectorAll('button, input').forEach(el => el.disabled = false);
    renderProfiles(); resetProfileForm();
  }
}
$('profiles-open').addEventListener('click', () => {
  if (!config || busy || modsBusy) return;
  renderProfiles(); resetProfileForm(); $('profiles-status').textContent = ''; $('profiles-dialog').showModal();
});
$('profiles-close').addEventListener('click', () => $('profiles-dialog').close());
$('profiles-dialog').addEventListener('cancel', e => { if (profilesSaving) e.preventDefault(); });
$('profiles-cancel').addEventListener('click', resetProfileForm);
$('profiles-form').addEventListener('submit', e => {
  e.preventDefault();
  const name = $('nickname').value.trim();
  if (!/^[A-Za-z0-9_]{3,16}$/.test(name)) { $('profiles-status').textContent = 'Ник: 3–16 латинских букв, цифр или _.'; return; }
  if (config.profiles.some(n => n !== editingProfile && n.toLowerCase() === name.toLowerCase())) { $('profiles-status').textContent = 'Такой ник уже есть.'; return; }
  if (!editingProfile && config.profiles.length >= 15) { $('profiles-status').textContent = 'Можно добавить до 15 профилей.'; return; }
  const profiles = editingProfile ? config.profiles.map(n => n === editingProfile ? name : n) : [...config.profiles, name];
  saveProfiles(profiles, !editingProfile || config.nickname === editingProfile ? name : config.nickname);
});
