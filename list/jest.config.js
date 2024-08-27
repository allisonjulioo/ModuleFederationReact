module.exports = {
  roots: ['<rootDir>/src'],
  clearMocks: true,
  resetMocks: true,
  collectCoverage: false,
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}', '!**/**/*.d.ts'],
  coveragePathIgnorePatterns: [
    'node_modules',
    'test-config',
    'interfaces',
    'jestGlobalMocks.ts',
    '.module.ts',
    '.mock.ts',
    '<rootDir>/*/src/bootstrap.tsx',
    '<rootDir>/*/src/index.ts',
    '<rootDir>/*/src/contexts/*',
    '<rootDir>/*/src/test/*',
    '/utils/',
    '/types/',
    '/mocks/',
  ],
  testPathIgnorePatterns: ['/node_modules/', '<rootDir>/src/index.tsx', '<rootDir>/src/index.tsx'],
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.jsx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '^container/CartContext$': '<rootDir>/../container/src/contexts/CartContext.tsx',
    '^container/formatCurrencyBRL$': '<rootDir>/../container/src/utils/formatCurrencyBRL.ts',
    '^container/shared$': '<rootDir>/src/__mocks__/components/shared/index.tsx',
  },

  moduleDirectories: ['node_modules', 'src'],

  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
  setupFilesAfterEnv: ['../jest.setup.js'],
  testResultsProcessor: 'jest-sonar-reporter',
};
