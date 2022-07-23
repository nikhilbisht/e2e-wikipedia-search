const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight : 1920,
  viewportHeight : 1080,
  video : false,
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: false,
    json: true
  },
  e2e: {
    baseUrl : "https://www.wikipedia.org",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
