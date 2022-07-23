const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight : 1920,
  viewportHeight : 1080,
  e2e: {
    baseUrl : "https://www.wikipedia.org",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
