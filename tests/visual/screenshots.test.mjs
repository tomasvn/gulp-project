import { test, expect } from "@playwright/test";

// Configuration matching the old BackstopJS setup
const routes = ["/", "/page1", "/page2", "/page3", "/page4"];

const baseUrl = "http://localhost:3000"; // Update with your actual base URL

// Generate visual tests for each route
routes.forEach((route) => {
    test(`Visual test for ${route === "/" ? "homepage" : route}`, async ({ page }) => {
        await page.goto(`${baseUrl}${route}`);

        // Wait 3 seconds (matching BackstopJS delay)
        await page.waitForTimeout(3000);

        // Take full page screenshot
        await expect(page).toHaveScreenshot(`${route.replace("/", "homepage")}.png`, {
            fullPage: true,
            threshold: 0.3, // Allow 30% difference threshold
        });
    });
});

// Additional test for specific elements if needed
test("Visual test for main content area", async ({ page }) => {
    await page.goto(baseUrl);
    await page.waitForTimeout(3000);

    // Screenshot of specific element (if main content area exists)
    const mainContent = page.locator("main, .main-content, #main");
    if ((await mainContent.count()) > 0) {
        await expect(mainContent).toHaveScreenshot("main-content.png");
    }
});
