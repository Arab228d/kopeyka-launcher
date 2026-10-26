const { test } = require('node:test'); const assert = require('node:assert/strict');
const fs = require('node:fs/promises'); const os = require('node:os'); const path = require('node:path');
const { createNewsFeed, parseGithubRelease, parseMinecraftNet, parseLauncherContent, plainText, trustedExternal, MINECRAFT_LIMIT } = require('../src/news-feed');

const minecraftJson = { article_grid: Array.from({ length: 12 }, (_, i) => ({ default_tile: { title: 'Article ' + i, sub_header: 'Sub', image: { imageURL: '/content/dam/' + i + '.jpg' } }, primary_category: 'News', article_url: '/en-us/article/a-' + i })).concat([{ default_tile: { title: '' }, article_url: '/x' }, { default_tile: { title: 'No link' } }]) };
const githubJson = [{ draft: true, tag_name: 'v9', name: 'Draft' }, { tag_name: 'v0.2.0-beta', name: 'KOPEYKA 0.2.0 beta', body: '## Новое\n- **Новости** [ссылка](https://x.y)\n![img](https://x.y/i.png)\n```\ncode\n```', published_at: '2026-10-20T10:00:00Z', html_url: 'https://github.com/Arab228d/kopeyka-launcher/releases/tag/v0.2.0-beta' }];
const response = (body, ok = true, status = 200) => ({ ok, status, json: async () => body });
function network({ github = githubJson, minecraft = minecraftJson, translate = true } = {}) {
  const calls = [];
  const request = async url => {
    calls.push(url);
    if (url.includes('api.github.com')) { if (!github) throw new Error('offline'); return response(github); }
    if (url.includes('minecraft.net')) { if (!minecraft) throw new Error('offline'); return response(minecraft); }
    if (url.includes('mymemory')) { if (!translate) throw new Error('offline'); return response({ responseStatus: 200, responseData: { translatedText: 'RU:' + decodeURIComponent(url.split('q=')[1].split('&')[0]) } }); }
    throw new Error('unexpected ' + url);
  };
  return { request, calls };
}

test('parsers keep only complete, https, absolute entries', () => {
  const items = parseMinecraftNet(minecraftJson);
  assert.equal(items.length, 12);
  assert.equal(items[0].image, 'https://www.minecraft.net/content/dam/0.jpg');
  assert.equal(items[0].url, 'https://www.minecraft.net/en-us/article/a-0');
  assert.deepEqual(parseMinecraftNet(null), []);
  assert.equal(parseMinecraftNet({ article_grid: [{ default_tile: { title: 'T', image: { imageURL: 'http://insecure/x.png' } }, article_url: '/a' }] })[0].image, null);
  const launcher = parseLauncherContent({ entries: [{ title: 'T', category: 'Java', newsPageImage: { url: '/img/a.jpg' }, readMoreLink: 'https://www.minecraft.net/a' }, { title: '' }] });
  assert.equal(launcher.length, 1); assert.equal(launcher[0].image, 'https://launchercontent.mojang.com/img/a.jpg');
});

test('GitHub release becomes plain text and skips drafts', () => {
  const release = parseGithubRelease(githubJson);
  assert.equal(release.title, 'KOPEYKA 0.2.0 beta'); assert.equal(release.version, '0.2.0-beta');
  assert.equal(release.body, 'Новое\n• Новости ссылка');
  assert.equal(parseGithubRelease([]), null); assert.equal(parseGithubRelease('x'), null);
  assert.equal(parseGithubRelease([{ tag_name: 'v1', html_url: 'https://evil.example/x' }]).url, 'https://github.com/Arab228d/kopeyka-launcher/releases');
  assert.ok(plainText('a '.repeat(2000), 100).length <= 101);
});

test('external links are limited to Minecraft and GitHub over https', () => {
  assert.equal(trustedExternal('https://www.minecraft.net/en-us/article/x'), true);
  assert.equal(trustedExternal('https://github.com/Arab228d/kopeyka-launcher/releases'), true);
  for (const url of ['http://www.minecraft.net/', 'https://evil.example/', 'file:///C:/Windows', 'javascript:alert(1)', 'nope', undefined]) assert.equal(trustedExternal(url), false, String(url));
});

test('news are fetched, translated, limited and cached; offline start serves the last cache', async t => {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'kopeyka-news-feed-')); t.after(() => fs.rm(dir, { recursive: true, force: true }));
  const online = network();
  const feed = createNewsFeed({ directory: dir, request: online.request });
  const first = await feed.get();
  assert.equal(first.stale, false); assert.equal(first.minecraft.length, MINECRAFT_LIMIT);
  assert.equal(first.minecraft[0].title, 'RU:Article 0'); assert.equal(first.minecraft[0].summary, '');
  assert.equal(first.launcher.title, 'KOPEYKA 0.2.0 beta');
  const callsAfterFirst = online.calls.length;
  await feed.get(); assert.equal(online.calls.length, callsAfterFirst, 'fresh cache is not refetched');
  // New process, no network at all.
  const offline = network({ github: null, minecraft: null, translate: false });
  const restarted = createNewsFeed({ directory: dir, request: offline.request, now: () => Date.now() + 3600000 });
  const cached = await restarted.get();
  assert.equal(cached.stale, true); assert.equal(cached.minecraft.length, MINECRAFT_LIMIT); assert.equal(cached.launcher.title, 'KOPEYKA 0.2.0 beta');
  assert.equal(cached.minecraft[0].title, 'RU:Article 0');
});

test('without network or cache the feed is empty; Minecraft.net failure falls back to launchercontent', async t => {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'kopeyka-news-feed-')); t.after(() => fs.rm(dir, { recursive: true, force: true }));
  const none = await createNewsFeed({ directory: dir, request: network({ github: null, minecraft: null }).request }).get();
  assert.deepEqual([none.launcher, none.minecraft, none.stale], [null, [], true]);
  const calls = [];
  const request = async url => { calls.push(url); if (url.includes('launchercontent')) return response({ entries: [{ title: 'Привет', readMoreLink: 'https://www.minecraft.net/a', newsPageImage: { url: '/a.jpg' } }] }); if (url.includes('/content/minecraftnet/')) return response({}, false, 503); return response([]); };
  const fallback = await createNewsFeed({ directory: await fs.mkdtemp(path.join(os.tmpdir(), 'kopeyka-news-feed-')), request }).get();
  assert.equal(fallback.minecraft[0].title, 'Привет'); assert.equal(fallback.minecraft[0].image, 'https://launchercontent.mojang.com/a.jpg');
});

test('translation failures keep the original text', async t => {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'kopeyka-news-feed-')); t.after(() => fs.rm(dir, { recursive: true, force: true }));
  const result = await createNewsFeed({ directory: dir, request: network({ translate: false }).request }).get();
  assert.equal(result.minecraft[0].title, 'Article 0'); assert.equal(result.stale, false);
});

test('page security and styling: images allowed from Minecraft hosts, no fold-making CSS in news.css', async () => {
  const html = await fs.readFile(path.join(__dirname, '../src/ui/index.html'), 'utf8');
  const csp = /img-src([^;]*);/.exec(html)[1];
  for (const host of ['https://www.minecraft.net', 'https://launchercontent.mojang.com']) assert.ok(csp.includes(host), host);
  const css = await fs.readFile(path.join(__dirname, '../src/ui/news.css'), 'utf8').then(text => text.replace(/\/\*[\s\S]*?\*\//g, ''));
  assert.doesNotMatch(css, /::before|::after|gradient|!important|brightness|repeating-/);
  assert.doesNotMatch(css, /(^|\})\s*(body\.news-view\s+)?(main|#news|\.news-scroll)[^{]*\{[^}]*background(-color)?:\s*(?!transparent)[^;\s]/);
  assert.doesNotMatch(css, /backdrop-filter/);
});
