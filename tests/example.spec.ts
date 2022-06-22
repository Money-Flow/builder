import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  const [page1] = await Promise.all([
    page.waitForEvent("popup"),
    page.locator("text=Learn React").click(),
  ]);

  await expect(page1.url()).toBe("https://reactjs.org/");
});
