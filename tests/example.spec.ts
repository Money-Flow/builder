import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto(
    process.env.PLAYWRIGHT_TEST_BASE_URL || "http://localhost:3000"
  );

  await expect(page.locator("text=Learn React")).toHaveAttribute(
    "href",
    "https://reactjs.org"
  );
});
