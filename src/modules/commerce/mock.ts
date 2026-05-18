import { z } from "zod";
import { getProductBySlug } from "@/modules/catalog/queries";

export const checkoutRequestSchema = z.object({
  productSlug: z.string().min(3),
  locale: z.enum(["vi", "en"]).default("vi"),
});

export const webhookSchema = z.object({
  orderCode: z.string().min(3),
  amount: z.number().int().positive(),
  status: z.enum(["PAID", "CANCELLED", "EXPIRED"]),
  transactionId: z.string().min(3),
});

export type OrderState =
  | "pending_payment"
  | "paid"
  | "fulfilled"
  | "expired"
  | "cancelled"
  | "payment_failed";

export function createMockCheckout(productSlug: string) {
  const product = getProductBySlug(productSlug);

  if (!product || product.status === "draft") {
    return {
      error: {
        code: "PRODUCT_UNAVAILABLE",
        message: "Product is not available for checkout.",
      },
      ok: false as const,
    };
  }

  const orderCode = `MOCK-${product.slug.toUpperCase()}-${Date.now()}`;

  return {
    data: {
      amount: product.priceVnd,
      checkoutUrl: `/checkout/success?order=${orderCode}`,
      currency: "VND",
      mode: "mock",
      orderCode,
      productSlug: product.slug,
      state: "pending_payment" satisfies OrderState,
    },
    ok: true as const,
  };
}

export const mockOrders = [
  {
    id: "ORD-MOCK-1001",
    createdAt: "2026-05-18",
    productSlug: "commerce-starter-nextjs",
    state: "fulfilled" as OrderState,
    totalVnd: 2490000,
  },
  {
    id: "ORD-MOCK-1002",
    createdAt: "2026-05-17",
    productSlug: "support-ticket-module",
    state: "fulfilled" as OrderState,
    totalVnd: 1390000,
  },
];

export const mockEntitlements = [
  {
    id: "LIC-MOCK-COMMERCE",
    orderId: "ORD-MOCK-1001",
    productSlug: "commerce-starter-nextjs",
    status: "active",
    updateEndsAt: "2027-05-18",
    version: "0.9.0-mock",
  },
  {
    id: "LIC-MOCK-SUPPORT",
    orderId: "ORD-MOCK-1002",
    productSlug: "support-ticket-module",
    status: "active",
    updateEndsAt: "2027-05-17",
    version: "0.7.5-mock",
  },
];
