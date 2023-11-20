const esModules = [ "nanoid"].join("|");

module.exports = {
  setupFilesAfterEnv: ['<rootDir>/setUpTest.js'],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(scss|sass|css)$": "<rootDir>/__mocks__/styleMock.js",
    "^nanoid(/(.*)|$)": "nanoid$1",
  },
  testEnvironment: 'jsdom',
  transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
};
