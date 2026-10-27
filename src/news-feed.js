// News for the launcher's "Новости" tab.
//  - KOPEYKA: the latest GitHub release notes.
//  - Minecraft: the official Minecraft.net article JSON (launchercontent.mojang.com as a fallback).
// Everything is cached on disk, so an offline launch shows the last successful result.
const fs = require('node:fs/promises');
const path = require('node:path');
const { jsonWriter } = require('./persistence');

const REPO = 'Arab228d/kopeyka-launcher';
const MINECRAFT_NET = 'https://www.minecraft.net';
const MINECRAFT_JSON = MINECRAFT_NET + '/content/minecraftnet/language-masters/en-us/jcr:content/root/container/image_grid_a_copy_64.articles.page-1.json';
const LAUNCHER_CONTENT = 'https://launchercontent.mojang.com';
const LAUNCHER_JSON = LAUNCHER_CONTENT + '/v2/news.json';
const GITHUB_RELEASES = `https://api.github.com/repos/${REPO}/releases?per_page=10`;
// This small file can be edited on GitHub without publishing a new launcher build.
const LAUNCHER_NEWS = `https://raw.githubusercontent.com/${REPO}/main/content/launcher-news.json`;
const TRANSLATE_URL = 'https://api.mymemory.translated.net/get';
const FRESH_MS = 10 * 60 * 1000;
const MINECRAFT_LIMIT = 9;
const TRANSLATION_LIMIT = 400;
// Hosts the renderer is allowed to open in the system browser.
const EXTERNAL_HOSTS = new Set(['www.minecraft.net', 'minecraft.net', 'launchercontent.mojang.com', 'github.com', 'raw.githubusercontent.com']);

const clean = (value, max) => typeof value === 'string' ? value.replace(/\s+/g, ' ').trim().slice(0, max) : '';
function absolute(base, value) {
  if (typeof value !== 'string' || !value) return null;
  try { const url = new URL(value, base); return url.protocol === 'https:' ? url.href : null; } catch { return null; }
}
function trustedExternal(value) {
  try { const url = new URL(value); return url.protocol === 'https:' && EXTERNAL_HOSTS.has(url.hostname); } catch { return false; }
}

// GitHub release bodies are Markdown; the card shows plain text.
function plainText(markdown, max = 700) {
  const text = String(markdown || '')
    .replace(/\r/g, '')
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/<[^>]+>/g, '')
    .replace(/^\s{0,3}#{1,6}\s*/gm, '')
    .replace(/^\s*[-*+]\s+/gm, '• ')
    .replace(/(\*\*|__|\*|_|`)/g, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
  return text.length > max ? text.slice(0, max).replace(/\s+\S*$/, '') + '…' : text;
}

function parseGithubRelease(releases) {
  const release = Array.isArray(releases) ? releases.find(item => item && !item.draft && typeof item.tag_name === 'string') : null;
  if (!release) return null;
  const url = absolute('https://github.com', release.html_url);
  return {
    title: clean(release.name, 120) || clean(release.tag_name, 60),
    version: clean(release.tag_name, 60).replace(/^v/, ''),
    body: plainText(release.body),
    date: clean(release.published_at || release.created_at, 40),
    url: url && trustedExternal(url) ? url : `https://github.com/${REPO}/releases`
  };
}

function parseLauncherNews(data) {
  const entries = Array.isArray(data) ? data : Array.isArray(data?.items) ? data.items : [];
  return entries.map(item => ({
    title: clean(item?.title, 160),
    body: plainText(item?.body || item?.summary || '', 1200),
    date: clean(item?.date || item?.publishedAt, 40),
    url: absolute('https://github.com', item?.url || item?.html_url),
    image: absolute('https://raw.githubusercontent.com', item?.image)
  })).filter(item => item.title && item.url);
}

function parseMinecraftNet(data) {
  const grid = Array.isArray(data?.article_grid) ? data.article_grid : [];
  return grid.map(entry => {
    const tile = entry?.default_tile || {};
    return {
      title: clean(tile.title, 160),
      summary: clean(tile.sub_header, 300),
      category: clean(entry?.primary_category, 40),
      date: clean(entry?.publish_date, 40),
      image: absolute(MINECRAFT_NET, tile.image?.imageURL),
      url: absolute(MINECRAFT_NET, entry?.article_url)
    };
  }).filter(item => item.title && item.url);
}

function parseLauncherContent(data) {
  const entries = Array.isArray(data?.entries) ? data.entries : [];
  return entries.map(entry => ({
    title: clean(entry?.title, 160),
    summary: clean(entry?.text, 300),
    category: clean(entry?.category, 40),
    date: clean(entry?.date, 40),
    image: absolute(LAUNCHER_CONTENT, entry?.newsPageImage?.url || entry?.playPageImage?.url),
    url: absolute(MINECRAFT_NET, entry?.readMoreLink)
  })).filter(item => item.title && item.url);
}

const emptyCache = () => ({ at: 0, launcher: null, minecraft: [], translations: {} });

function createNewsFeed({ directory, request = fetch, now = Date.now }) {
  const file = path.join(directory, 'news-cache.json');
  const write = jsonWriter(file);
  let cache, task;

  async function load() {
    if (cache) return cache;
    cache = emptyCache();
    for (const suffix of ['', '.bak']) {
      try {
        const saved = JSON.parse(await fs.readFile(file + suffix, 'utf8'));
        if (!saved || typeof saved !== 'object' || Array.isArray(saved)) continue;
        cache = {
          at: Number.isFinite(saved.at) ? saved.at : 0,
          launcher: saved.launcher && typeof saved.launcher === 'object' ? saved.launcher : null,
          minecraft: Array.isArray(saved.minecraft) ? saved.minecraft : [],
          translations: saved.translations && typeof saved.translations === 'object' && !Array.isArray(saved.translations) ? saved.translations : {}
        };
        break;
      } catch (error) { if (!(error instanceof SyntaxError) && error.code !== 'ENOENT') throw error; }
    }
    return cache;
  }

  async function json(url, headers = {}) {
    const response = await request(url, { headers: { 'User-Agent': 'KOPEYKA-Launcher', Accept: 'application/json', ...headers }, signal: AbortSignal.timeout(9000) });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return response.json();
  }

  // Free translation API; the original text is kept when it is unreachable.
  async function translate(text) {
    if (!text || /[А-Яа-яЁё]/.test(text)) return text;
    const known = cache.translations[text];
    if (known) return known;
    try {
      const data = await json(`${TRANSLATE_URL}?q=${encodeURIComponent(text.slice(0, 480))}&langpair=en|ru`);
      const translated = clean(data?.responseData?.translatedText, 600);
      // The service reports quota errors as ordinary text.
      if (!translated || data.responseStatus !== 200 && data.responseStatus !== '200' || /MYMEMORY|QUERY LENGTH|INVALID/i.test(translated)) return text;
      const keys = Object.keys(cache.translations);
      if (keys.length >= TRANSLATION_LIMIT) delete cache.translations[keys[0]];
      cache.translations[text] = translated;
      return translated;
    } catch { return text; }
  }

  const translateBody = async text => (await Promise.all(text.split('\n').map(line => translate(line)))).join('\n');

  async function fetchLauncher() {
    try {
      const managed = parseLauncherNews(await json(LAUNCHER_NEWS));
      if (managed.length) return managed[0];
    } catch {}
    return parseGithubRelease(await json(GITHUB_RELEASES, { Accept: 'application/vnd.github+json' }));
  }
  async function fetchMinecraft() {
    let items = [];
    try { items = parseMinecraftNet(await json(MINECRAFT_JSON)); } catch {}
    if (!items.length) items = parseLauncherContent(await json(LAUNCHER_JSON));
    items = items.slice(0, MINECRAFT_LIMIT);
    // Titles for every card; the longer summary only where it is displayed.
    const titles = await Promise.all(items.map(item => translate(item.title)));
    return items.map((item, index) => ({ ...item, title: titles[index], summary: '' }));
  }

  async function refresh() {
    await load();
    const [launcher, minecraft] = await Promise.allSettled([fetchLauncher(), fetchMinecraft()]);
    let failed = false;
    if (launcher.status === 'fulfilled' && launcher.value) {
      cache.launcher = { ...launcher.value, body: await translateBody(launcher.value.body) };
    } else failed = true;
    if (minecraft.status === 'fulfilled' && minecraft.value.length) cache.minecraft = minecraft.value; else failed = true;
    if (!failed) cache.at = now();
    await write(cache).catch(() => {});
    return failed;
  }

  async function get(force = false) {
    await load();
    const fresh = cache.at && now() - cache.at < FRESH_MS && cache.minecraft.length && cache.launcher;
    let failed = false;
    if (force || !fresh) {
      if (!task) task = refresh().finally(() => { task = undefined; });
      failed = await task;
    }
    return { launcher: cache.launcher, minecraft: cache.minecraft, updatedAt: cache.at, stale: failed };
  }

  return { get };
}

module.exports = { createNewsFeed, parseGithubRelease, parseLauncherNews, parseMinecraftNet, parseLauncherContent, plainText, trustedExternal, MINECRAFT_LIMIT };
