'use strict';
// Shared IPC contract. The preload bridge, main-process handlers and tests use
// these channel names, so a renamed or forgotten handler fails a test instead
// of failing silently at runtime.
//
// JSDoc typedefs describe the payloads crossing the bridge. They are checked by
// `npm run typecheck` (allowJs + checkJs) without a TypeScript build step.

/**
 * @typedef {'vanilla'|'fabric'|'forge'|'neoforge'|'optifine'|'forge_optifine'} Loader
 */

/**
 * @typedef {object} Settings
 * @property {string} nickname
 * @property {string[]} profiles
 * @property {number} memory
 * @property {string} version
 * @property {string} gameDirectory
 * @property {boolean} snapshots
 * @property {boolean} historical
 * @property {Loader} loader
 * @property {boolean} useLatestRelease
 */

/**
 * @typedef {Settings & {playtimeSeconds: number, totalMemory: number, appVersion: string}} SettingsSnapshot
 */

/**
 * @typedef {object} LaunchResult
 * @property {boolean} ok
 * @property {string} [error]
 */

/**
 * @typedef {object} WindowState
 * @property {boolean} maximized
 */

/**
 * @typedef {object} ReleaseNews
 * @property {string} version
 * @property {string} body
 * @property {boolean} unread
 */

/**
 * @typedef {object} NewsFeed
 * @property {unknown} [launcher]
 * @property {unknown[]} minecraft
 * @property {string|number} [updatedAt]
 * @property {boolean} [stale]
 */

/**
 * @typedef {'mod'|'resourcepack'|'shader'} ContentKind
 */

/**
 * @typedef {object} ContentItem
 * @property {string} file
 * @property {string} [title]
 * @property {string} [icon]
 * @property {string[]} [gallery]
 * @property {boolean} [enabled]
 * @property {ContentKind} [kind]
 */

/**
 * @typedef {object} SearchHit
 * @property {string} id
 * @property {string} title
 * @property {string} description
 * @property {string} author
 * @property {number} downloads
 * @property {string|null} [icon]
 * @property {string[]} [gallery]
 */

/**
 * @typedef {object} SearchResults
 * @property {number} total
 * @property {SearchHit[]} hits
 * @property {string} [message]
 */

/**
 * @typedef {object} VersionList
 * @property {{release: string, snapshot: string}} latest
 * @property {{id: string, type: string}[]} versions
 * @property {string} source
 */

/**
 * @typedef {object} LoaderCatalog
 * @property {Record<string, string>|null} [forge]
 * @property {Record<string, true>|null} [fabric]
 * @property {Record<string, string>|null} [neoforge]
 * @property {Record<string, string>|null} [optifine]
 * @property {string|null} [source]
 * @property {string[]} [errors]
 * @property {Record<string, {forge: string, optifine: string}>|null} [forge_optifine]
 * @property {string} [checkedAt]
 */

/**
 * @typedef {object} Textures
 * @property {string} source
 * @property {string} [version]
 * @property {Record<string, string>} textures
 */

/**
 * @typedef {object} ProgressEvent
 * @property {'progress'|'log'|'state'|'error'|'startup'|'playtime'|'news-updated'|'versions-refreshed'|'loaders-refreshed'|'mods-progress'} kind
 * @property {string} [message]
 * @property {number|null} [percent]
 * @property {string} [state]
 * @property {string} [key]
 * @property {string} [text]
 * @property {number} [seconds]
 * @property {unknown} [data]
 */

/**
 * @typedef {object} LauncherApi
 * @property {number} startupStartedAt
 * @property {() => Promise<void>} minimizeWindow
 * @property {() => Promise<void>} maximizeWindow
 * @property {() => Promise<void>} closeWindow
 * @property {() => Promise<WindowState>} windowState
 * @property {(handler: (state: WindowState) => void) => void} onWindowState
 * @property {() => Promise<ReleaseNews>} releaseNews
 * @property {(refresh?: boolean) => Promise<NewsFeed>} news
 * @property {(url: string) => Promise<void>} openExternal
 * @property {() => Promise<void>} acknowledgeNews
 * @property {() => Promise<SettingsSnapshot>} settings
 * @property {(nickname: string) => Promise<string|null>} avatar
 * @property {(settings: Settings) => Promise<Settings>} save
 * @property {(refresh?: boolean) => Promise<VersionList>} versions
 * @property {(refresh?: boolean) => Promise<LoaderCatalog>} loaderCatalog
 * @property {() => Promise<{version: string}|null>} checkUpdate
 * @property {() => Promise<{ok: boolean}>} installUpdate
 * @property {() => Promise<Textures>} textures
 * @property {() => Promise<string|null>} chooseFolder
 * @property {() => Promise<void>} openFolder
 * @property {() => Promise<string|null>} exportLog
 * @property {(settings: Settings) => Promise<LaunchResult>} launch
 * @property {(settings: Settings, query: string, offset: number) => Promise<SearchResults>} searchShaders
 * @property {(settings: Settings, kind: ContentKind, query: string, offset: number) => Promise<SearchResults>} searchCatalog
 * @property {(settings: Settings, kind: ContentKind, project: string) => Promise<{file: string}>} installCatalog
 * @property {(settings: Settings, project: string) => Promise<{file: string}>} installShader
 * @property {(settings: Settings) => Promise<ContentItem[]>} listMods
 * @property {(settings: Settings) => Promise<ContentItem[]>} listInstalled
 * @property {(settings: Settings) => Promise<ContentItem[]>} importMods
 * @property {(settings: Settings) => Promise<ContentItem[]>} importShaders
 * @property {(settings: Settings, file: string) => Promise<ContentItem>} toggleMod
 * @property {(source: Settings, target: Settings) => Promise<number>} copyMods
 * @property {(settings: Settings) => Promise<string|null>} importOptifine
 * @property {() => Promise<void>} optifineSite
 * @property {(handler: (event: ProgressEvent) => void) => void} onEvent
 */

/** @type {Readonly<Record<string, string>>} */
const invoke = Object.freeze({
  window: 'launcher:window',
  releaseNews: 'launcher:release-news',
  releaseNewsSeen: 'launcher:release-news-seen',
  news: 'launcher:news',
  openExternal: 'launcher:open-external',
  settings: 'launcher:settings',
  avatar: 'launcher:avatar',
  save: 'launcher:save',
  versions: 'launcher:versions',
  loaderCatalog: 'launcher:loader-catalog',
  updateCheck: 'launcher:update-check',
  updateInstall: 'launcher:update-install',
  textures: 'launcher:textures',
  chooseFolder: 'launcher:choose-folder',
  openFolder: 'launcher:open-folder',
  exportLog: 'launcher:export-log',
  launch: 'launcher:launch',
  shadersSearch: 'launcher:shaders-search',
  catalogSearch: 'launcher:catalog-search',
  catalogInstall: 'launcher:catalog-install',
  shadersInstall: 'launcher:shaders-install',
  modsList: 'launcher:mods-list',
  contentList: 'launcher:content-list',
  modsImport: 'launcher:mods-import',
  shadersImport: 'launcher:shaders-import',
  modsToggle: 'launcher:mods-toggle',
  modsCopy: 'launcher:mods-copy',
  optifineImport: 'launcher:optifine-import',
  optifineSite: 'launcher:optifine-site'
});

/** @type {Readonly<Record<'event'|'windowState', string>>} */
const events = Object.freeze({
  event: 'launcher:event',
  windowState: 'launcher:window-state'
});

module.exports = { invoke, events };
