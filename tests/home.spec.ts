import { expect, test } from "@playwright/test";

test("home page has a clear launch path", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Build a website",
  );
  await expect(page.getByRole("link", { name: "Start project" })).toBeVisible();
  await expect(page.getByRole("navigation", { name: "Main navigation" })).toBeVisible();
});

test("key sections are reachable", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("link", { name: "View process" }).click();
  await expect(page.getByRole("heading", { name: "Short loops, clear evidence." })).toBeVisible();

  await page.getByRole("link", { name: "Services" }).click();
  await expect(page.getByRole("heading", { name: "Built for the first useful version." })).toBeVisible();
});
