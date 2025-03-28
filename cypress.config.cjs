const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000', // Update if using a different port
    supportFile: 'cypress/support/e2e.ts',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    viewportWidth: 1280,
    viewportHeight: 720,
  },
});
// This configuration sets up Cypress for end-to-end testing with a base URL, support file, and viewport settings.
// It specifies the pattern for test files to be included in the test run.
// The viewport dimensions are set to 1280x720 for consistent testing across different screen sizes.
// Ensure your local server is running on the specified base URL before executing tests.
// Adjust the base URL if your application is hosted on a different port or path.
// The support file is where you can add custom commands or global configurations for your tests.