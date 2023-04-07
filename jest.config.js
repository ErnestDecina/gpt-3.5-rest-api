/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ["**/__test__/*.test.js"],
  verbose: true,
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    "bable.confignjs": "babel-jest",
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
};