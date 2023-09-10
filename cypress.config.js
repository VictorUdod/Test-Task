const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1800,
  viewportHeight: 1000,
  fixturesFolder: false,
  defaultCommandTimeout: 80000,
  chromeWebSecurity: false,
  retries: {
    runMode: 2,
    openMode: 0,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
