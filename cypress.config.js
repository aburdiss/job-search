const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    supportFile: false,
    specPattern: "*.spec.{js,jsx,ts,tsx}",
  },
  video: false,
  screenshotOnRunFailure: false,
  defaultCommandTimeout: 1500,
});
