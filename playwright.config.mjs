import { defineConfig, devices } from "@playwright/test";

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
    testDir: "./tests",
    /* Run tests in files in parallel */
    fullyParallel: true,
    /* Fail the build on CI if you accidentally left test.only in the source code. */
    forbidOnly: !!process.env.CI,
    /* Retry on CI only */
    retries: process.env.CI ? 2 : 0,
    /* Opt out of parallel tests on CI. */
    workers: process.env.CI ? 1 : undefined,
    /* Reporter to use. See https://playwright.dev/docs/test-reporters */
    reporter: "html",
    /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
    use: {
        /* Base URL to use in actions like `await page.goto('/')`. */
        baseURL: "http://localhost:3000",

        /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
        trace: "on-first-retry",
    },

    /* Configure projects for major browsers and visual testing */
    projects: [
        // E2E Tests
        {
            name: "chromium-e2e",
            testDir: "./tests",
            testIgnore: "**/visual/**",
            use: { ...devices["Desktop Chrome"] },
        },

        // Visual Testing Projects
        {
            name: "visual-desktop",
            testDir: "./tests/visual",
            use: {
                ...devices["Desktop Chrome"],
                viewport: { width: 1280, height: 1024 },
            },
        },

        {
            name: "visual-tablet",
            testDir: "./tests/visual",
            use: {
                ...devices["Desktop Chrome"],
                viewport: { width: 1024, height: 768 },
            },
        },

        {
            name: "visual-phone",
            testDir: "./tests/visual",
            use: {
                ...devices["Desktop Chrome"],
                viewport: { width: 320, height: 480 },
            },
        },
    ],

    /* Run your local dev server before starting the tests */
    webServer: {
        command: "npx browser-sync start --server src --port 3000 --no-open",
        url: "http://localhost:3000",
        reuseExistingServer: !process.env.CI,
    },
});
