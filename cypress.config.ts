import { defineConfig } from 'cypress'

export default defineConfig({
  video: true,
  fixturesFolder: false,
  e2e: {
    setupNodeEvents(on, config) {
      on(
        'after:spec',
        (spec: Cypress.Spec, results: CypressCommandLine.RunResult) => {
          if (results && results.video) {
            // Do we have failures for any retry attempts?
            const failures = results.tests.some((test) =>
              test.attempts.some((attempt) => attempt.state === 'failed')
            )
            if (!failures) {
              // delete the video if the spec passed and no tests retried
              fs.unlinkSync(results.video)
            }
          }
        }
      )
    },
    supportFile: false,
    baseUrl: 'http://localhost:3000',
    projectId: "rrpyro",
    
  },
})
