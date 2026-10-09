const { Client } = require('minecraft-launcher-core');
const { spawn } = require('node:child_process');
// Minecraft must survive the launcher closing on Windows.
class GameClient extends Client {
  startMinecraft(args) {
    const child = spawn(this.options.javaPath || 'java', args, {
      cwd: this.options.overrides.cwd || this.options.root,
      detached: true, windowsHide: true
    });
    child.stdout.on('data', bytes => this.emit('data', bytes.toString('utf8')));
    child.stderr.on('data', bytes => this.emit('data', bytes.toString('utf8')));
    child.on('error', error => this.emit('error', error));
    child.on('close', code => this.emit('close', code));
    child.unref();
    return child;
  }
}
function gameReady(output) {
  return /Created:.*textures\/atlas\/blocks|Sound engine started|OpenAL initialized/i.test(output);
}
module.exports = { GameClient, gameReady };
