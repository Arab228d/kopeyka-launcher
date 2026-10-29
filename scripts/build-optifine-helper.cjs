const { compile } = require('../src/optifine-helper/compile');

try {
  console.log(`OptiFine helper: ${compile()}`);
} catch (error) {
  console.error(`OptiFine helper: ${error.message}`);
  process.exitCode = 1;
}
