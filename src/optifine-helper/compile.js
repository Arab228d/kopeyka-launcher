const fs = require('node:fs');
const path = require('node:path');
const { execFileSync } = require('node:child_process');

const source = path.join(__dirname, 'KopeykaOptifineInstall.java');
const output = path.join(__dirname, 'KopeykaOptifineInstall.class');

function compilerName() {
  return process.platform === 'win32' ? 'javac.exe' : 'javac';
}

// The launcher bundles a full JDK for Java 16, so installer builds compile the
// OptiFine helper from source instead of keeping a binary in the repository.
function findRuntimeCompiler(root = path.resolve(__dirname, '../../build/runtimes')) {
  const queue = [{ directory: root, depth: 0 }];
  while (queue.length) {
    const { directory, depth } = queue.shift();
    let entries;
    try { entries = fs.readdirSync(directory, { withFileTypes: true }); } catch { continue; }
    for (const entry of entries) {
      const file = path.join(directory, entry.name);
      if (entry.isFile() && entry.name === compilerName()) return file;
      if (entry.isDirectory() && depth < 4) queue.push({ directory: file, depth: depth + 1 });
    }
  }
  return null;
}

function findSystemCompiler() {
  const candidates = [];
  if (process.env.JAVA_HOME) candidates.push(path.join(process.env.JAVA_HOME, 'bin', compilerName()));
  for (const directory of String(process.env.PATH || '').split(path.delimiter)) {
    if (directory) candidates.push(path.join(directory, compilerName()));
  }
  return candidates.find(file => { try { fs.accessSync(file); return true; } catch { return false; } }) || null;
}

function findCompiler(root) {
  return findRuntimeCompiler(root) || findSystemCompiler();
}

function compilerMajor(javac) {
  try {
    const version = execFileSync(javac, ['-version'], { encoding: 'utf8' });
    return Number(/(?:javac|javac\.exe)\s+(\d+)/.exec(version)?.[1] || 0);
  } catch { return 0; }
}

function compile(options = {}) {
  const javac = options.javac || findCompiler();
  if (!javac) throw new Error('Не найден javac. Соберите рантаймы (npm run prepare:runtimes) или установите JDK.');
  if (!fs.existsSync(source)) throw new Error(`Не найден исходник ${path.basename(source)}.`);
  const target = options.output || output;
  fs.mkdirSync(path.dirname(target), { recursive: true });
  const args = compilerMajor(javac) >= 9
    ? ['--release', '8', '-encoding', 'UTF-8', '-d', path.dirname(target), source]
    : ['-source', '8', '-target', '8', '-encoding', 'UTF-8', '-d', path.dirname(target), source];
  execFileSync(javac, args, { stdio: 'pipe' });
  // javac names the file after the public class; a custom target only changes
  // the directory, so move it when callers ask for another file name.
  const produced = path.join(path.dirname(target), 'KopeykaOptifineInstall.class');
  if (produced !== target) fs.renameSync(produced, target);
  return target;
}

module.exports = { compile, findCompiler, findRuntimeCompiler, findSystemCompiler, source, output };
