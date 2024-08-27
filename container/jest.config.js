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
    "^.+\\.jsx?$": "babel-jest"
  },
  moduleNameMapper: { 
    '^list/App$': '<rootDir>/src/__mocks__/components/list.tsx',
    '^cart/App$': '<rootDir>/src/__mocks__/components/cart.tsx',
    '^success/App$': '<rootDir>/src/__mocks__/components/success.tsx',
    '^container/CartContext$': '<rootDir>/src/contexts/CartContext.tsx',
    '^container/ContainerApp$': '<rootDir>/src/components/ContainerApp.tsx',
    '^container/formatCurrencyBRL$': '<rootDir>/src/utils/formatCurrencyBRL.ts',
    '^.+\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/src/__mocks__/fileMock.ts', 
  },

  moduleDirectories: ['node_modules', 'src'],

  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
  setupFilesAfterEnv: ['../jest.setup.js'],
  testResultsProcessor: 'jest-sonar-reporter',
};
