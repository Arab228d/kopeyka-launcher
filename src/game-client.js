const { Client } = require('minecraft-launcher-core');
const { spawn } = require('node:child_process');
const { realpathSync } = require('node:fs');
const path = require('node:path');
// Windows packaged apps can redirect AppData. Fabric compares physical paths
// with JVM class sources, so every classpath entry must use the physical path.
function canonicalClasspath(args, resolve = realpathSync.native) {
  const result = [...args];
  for (let i = 0; i < result.length - 1; i++) {
    if (['-cp', '-classpath', '--class-path'].includes(result[i])) {
      result[i + 1] = result[i + 1].split(path.delimiter).map(entry => resolve(entry)).join(path.delimiter);
      i++;
    }
  }
  return result;
}
// Minecraft must survive the launcher closing on Windows.
class GameClient extends Client {
  startMinecraft(args) {
    const child = spawn(this.options.javaPath || 'java', canonicalClasspath(args), {
      cwd: this.options.overrides.cwd || this.options.root,
      detached: true, windowsHide: true
    });
    // Stream decoders retain incomplete UTF-8 sequences between data chunks.
    child.stdout.setEncoding('utf8').on('data', text => this.emit('data', text));
    child.stderr.setEncoding('utf8').on('data', text => this.emit('data', text));
    child.on('error', error => this.emit('error', error));
    child.on('close', code => this.emit('close', code));
    child.unref();
    return child;
  }
}
function gameReady(output) {
  return /Created:.*textures\/atlas\/blocks|Sound engine started|OpenAL initialized/i.test(output);
}
module.exports = { GameClient, gameReady, canonicalClasspath };
