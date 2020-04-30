/**
 * @file Jest configuration.
 * @link https://jestjs.io/docs/zh-Hans/configuration
 */

module.exports = {
  testRegex: '/tests/__tests__/.*test\\.js$',
  setupFiles: ['./tests/jest.setup.js'],
  moduleFileExtensions: ['js', 'jsx'],
  transform: {
    '^.+\\.js[x]?$': 'babel-jest',
  },
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx}', '!**/node_modules/**'],
};
