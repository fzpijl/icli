// jest.config.js
const { defaults } = require('jest-config');
console.log(defaults)
module.exports = {
  // ...
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  testEnvironment: 'node',
  // ...
};
// jestcts": [
//     "--config",
//     "/data/data/com.irisview.irisxr/files/webapps/jestcts/jest.config.js",
//     "--cacheDirectory",
//     "/data/data/com.irisview.irisxr/files/webapps/jestcts/temp",
//     "--reporter='default'",
//     "--json",
//     "--runInBand",
//     "--outputFile=",
//     "/data/data/com.irisview.irisxr/files/webapps/jestcts/result.json"
// ]

// node node_modules/.bin/jest --runInBand --outputFile /data/data/com.irisview.irisxr/files/webapps/jestcts/result.json

// {
//   automock: false,
//   bail: 0,
//   cache: true,
//   cacheDirectory: '/tmp/jest_rs',
//   changedFilesWithAncestor: false,
//   clearMocks: false,
//   collectCoverage: false,
//   coveragePathIgnorePatterns: [ '/node_modules/' ],
//   coverageProvider: 'babel',
//   coverageReporters: [ 'json', 'text', 'lcov', 'clover' ],
//   errorOnDeprecated: false,
//   expand: false,
//   forceCoverageMatch: [],
//   globals: {},
//   haste: { computeSha1: false, throwOnModuleCollision: false },
//   injectGlobals: true,
//   maxConcurrency: 5,
//   maxWorkers: '50%',
//   moduleDirectories: [ 'node_modules' ],
//   moduleFileExtensions: [ 'js', 'json', 'jsx', 'ts', 'tsx', 'node' ],
//   moduleNameMapper: {},
//   modulePathIgnorePatterns: [],
//   noStackTrace: false,
//   notify: false,
//   notifyMode: 'failure-change',
//   prettierPath: 'prettier',
//   resetMocks: false,
//   resetModules: false,
//   restoreMocks: false,
//   roots: [ '<rootDir>' ],
//   runTestsByPath: false,
//   runner: 'jest-runner',
//   setupFiles: [],
//   setupFilesAfterEnv: [],
//   skipFilter: false,
//   slowTestThreshold: 5,
//   snapshotSerializers: [],
//   testEnvironment: 'jest-environment-jsdom',
//   testEnvironmentOptions: {},
//   testFailureExitCode: 1,
//   testLocationInResults: false,
//   testMatch: [ '**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)' ],
//   testPathIgnorePatterns: [ '/node_modules/' ],
//   testRegex: [],
//   testRunner: 'jasmine2',
//   testSequencer: '@jest/test-sequencer',
//   testURL: 'http://localhost',
//   timers: 'real',
//   transformIgnorePatterns: [ '/node_modules/', '\\.pnp\\.[^\\/]+$' ],
//   useStderr: false,
//   watch: false,
//   watchPathIgnorePatterns: [],
//   watchman: true
// }