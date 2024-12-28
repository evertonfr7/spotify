export default {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  coveragePathIgnorePatterns: [
    "node_modules",
    "test-config",
    "interfaces",
    "jestGlobalMocks.ts",
    "\\.module\\.ts",
    "<rootDir>/src/main.tsx",
    "\\.mock\\.ts"
  ],
  moduleNameMapper: {
    "\\.(gif|ttf|eot|png)$": "<rootDir>/test/__mocks__/fileMock.js",
    ".+\\.svg?.+$": "jest-transform-stub",
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    "^@/(.*)$": "<rootDir>/src/$1",
  },
}
