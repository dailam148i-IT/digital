import { expect, test } from "@playwright/test";

test("home page presents D13S as a curated digital product business", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Source, plugin, template",
  );
  await expect(page.getByRole("link", { name: /Xem catalog/ })).toBeVisible();
  await expect(page.getByRole("navigation", { name: "Main navigation" })).toBeVisible();
  await expect(page.getByText("No emoji icons")).toBeVisible();
});

test("catalog exposes production-shaped mock products", async ({ page }) => {
  await page.goto("/products");

  await expect(page.getByRole("heading", { name: /Source, plugin, template/ })).toBeVisible();
  await expect(page.getByRole("heading", { name: /Catalog gọn hơn/ })).toBeVisible();
  await expect(page.getByText("Mock", { exact: true }).first()).toBeVisible();
  await expect(page.getByRole("link", { name: "Source", exact: true })).toBeVisible();
  await expect(page.getByRole("link", { name: "Template", exact: true })).toBeVisible();
  await expect(page.getByRole("link", { name: "Plugin", exact: true })).toBeVisible();
  await expect(page.getByRole("link", { name: /Xem chi tiết/ }).first()).toBeVisible();
});

test("product detail includes demo, license, support, update, and mock checkout", async ({ page }) => {
  await page.goto("/products/commerce-starter-nextjs");

  await expect(page.getByRole("heading", { level: 1 })).toContainText("D13S Commerce Starter");
  const reviewPanel = page.locator(".detail-panel").first();
  await expect(reviewPanel.locator("dt").filter({ hasText: "License" })).toBeVisible();
  await expect(reviewPanel.locator("dt").filter({ hasText: "Support" })).toBeVisible();
  await expect(reviewPanel.locator("dt").filter({ hasText: "Update" })).toBeVisible();
  await expect(page.getByRole("link", { name: /Mua bằng mock checkout/ })).toBeVisible();
  await expect(page.getByRole("link", { name: /Xem demo/ })).toBeVisible();
});

test("mock checkout clearly avoids real payment claims", async ({ page }) => {
  await page.goto("/checkout/commerce-starter-nextjs");

  await expect(page.getByRole("heading", { name: /Thanh toán mô phỏng/ })).toBeVisible();
  await expect(page.getByText("Không thu tiền trong mock mode")).toBeVisible();
  await page.getByRole("link", { name: /Hoàn tất mock payment/ }).click();
  await expect(page.getByRole("heading", { name: "Đơn hàng mô phỏng đã hoàn tất" })).toBeVisible();
});

test("account library and support surfaces are available in mock mode", async ({ page }) => {
  await page.goto("/account/library");

  await expect(page.getByRole("heading", { name: "Thư viện sản phẩm đã mua" })).toBeVisible();
  await expect(page.getByRole("link", { name: /Xin signed URL mock/ }).first()).toBeVisible();

  await page.goto("/account/tickets");
  await expect(page.getByRole("heading", { name: "Ticket support trong account" })).toBeVisible();
  await expect(page.getByLabel("Tiêu đề")).toBeVisible();
});

test("blog and services routes are not generic starter pages", async ({ page }) => {
  await page.goto("/services");
  await expect(page.getByRole("heading", { name: /Dịch vụ thiết kế/ })).toBeVisible();
  await expect(page.getByText("Production audit")).toBeVisible();

  await page.goto("/blog");
  await expect(page.getByRole("heading", { name: /Mẹo, checklist/ })).toBeVisible();
  await expect(page.getByRole("link", { name: /Đọc bài/ }).first()).toBeVisible();
});

test("mock APIs validate requests and return explicit mock metadata", async ({ request }) => {
  const invalidCheckout = await request.post("/api/checkout", {
    data: { productSlug: "" },
  });
  expect(invalidCheckout.status()).toBe(400);

  const checkout = await request.post("/api/checkout", {
    data: { productSlug: "commerce-starter-nextjs", locale: "vi" },
  });
  expect(checkout.ok()).toBeTruthy();
  const checkoutBody = await checkout.json();
  expect(checkoutBody).toEqual(
    expect.objectContaining({
      meta: expect.objectContaining({
        integrationMode: "mock",
      }),
      ok: true,
    }),
  );

  const download = await request.get("/api/downloads/LIC-MOCK-COMMERCE");
  expect(download.ok()).toBeTruthy();
  const downloadBody = await download.json();
  expect(downloadBody).toEqual(
    expect.objectContaining({
      data: expect.objectContaining({
        mode: "mock",
        state: "token_issued",
      }),
      ok: true,
    }),
  );
});
