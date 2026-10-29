# KOPEYKA 0.2.0-beta

Beta release focused on safer manifest handling, a typed IPC bridge and a more consistent pixel UI.

## Highlights

- Runtime validation of Mojang, Forge, NeoForge and Fabric manifests with readable error messages.
- Shared IPC contract (JSDoc + `checkJs`): the preload bridge is checked against every main-process handler without a TypeScript build step.
- The OptiFine helper is compiled from source during `prepare:runtimes`; the `.class` file is no longer stored in git.
- Copy installed mod sets between version/loader profiles.
- Keep the launcher responsive when Minecraft omits its usual ready line.
- Dedicated compact startup window with a bounded fallback.
- Recoverable renderer errors are shown in the launcher status area.
- Refined icon sizing and selector focus states.

## Validation

- 99 automated tests passing, including the IPC type check.
- UI smoke suite passing on Windows.
