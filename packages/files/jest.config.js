// eslint-disable-next-line @typescript-eslint/no-var-requires
const base = require('../../jest.config');

module.exports = {
  ...base,
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
  coveragePathIgnorePatterns: [
    '/Bootstrap/',
    'HealthCheckController',
    "/Infra/FS"
  ],
  setupFilesAfterEnv: [
    './test-setup.ts'
  ]
};
