export default {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "\\.(gif|ttf|eot|png)$": "<rootDir>/test/__mocks__/fileMock.js",
    ".+\\.svg?.+$": "jest-transform-stub",
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
  },
}
