# Node.js Test Runner

This folder contains the original Node.js-based test runners for AlaSQL SQLlogictest.

## Files

- `run.js` - Main test runner (multi-threaded using paralleljs)
- `run_single_cpu.js` - Single-threaded test runner
- `run_multi_per_file.js` - Alternative multi-threaded runner
- `sqllogictestparserV2.js` - Test file parser

## Usage

From the project root:

```bash
# Run all tests (outputs to results/output.md)
npm run test-node

# Run demo test (outputs to console)
npm run test-demo-node
```

Or directly:

```bash
cd node-run
node --expose-gc run.js
```

## Configuration

Edit the `CONFIG START` section in `run.js` to customize:

- `config.runOnlyDemo` - Set to `true` to run only demo.test
- `config.printAllErrors` - Print all errors vs. unique errors only
- Test file filters - Modify the regex patterns to select which test files to run
- `mimic` array - Which database engines to mimic
