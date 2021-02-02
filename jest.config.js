module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/', '/pages/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/components/*.ts(x)?',
    '!src/components/stories.tsx'
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/']
}

// module.exports = {
//   testEnvironment: 'jsdom',
//   testPathIgnorePatterns: ['/node_modules/', '/.next/', '/src/pages/'],
//   collectCoverage: true,
//   collectCoverageFrom: ['src/**/*.ts(x)?', '!src/**/stories.tsx'],
//   setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
//   modulePaths: ['<rootDir>/src/']
// }
