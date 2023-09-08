import { defineConfig } from "cypress";

export default defineConfig({
  video: true,
  fixturesFolder: false,
  e2e: {
    setupNodeEvents(on, config) {},
    supportFile: false,
    baseUrl: "http://localhost:3000",
    projectId: "rrpyro"
  }
});
