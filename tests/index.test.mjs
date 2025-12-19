import { test, expect } from "@playwright/test";

test("Index test", async ({ page }) => {
    await page.goto("/");
    await page.waitForSelector("body");
    await expect(page.locator("h1")).toContainText("Hello There");
});
