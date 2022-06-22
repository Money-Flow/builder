import { test } from "@playwright/test";

test("test", async ({ page }) => {
  // Go to http://localhost:3000/
  await page.goto("http://localhost:3000/");

  // Click text=Learn React
  await page.locator("text=Learn React").click();
});
