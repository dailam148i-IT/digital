import { integrationMode } from "@/lib/env";
import { createMockCheckout } from "@/modules/commerce/mock";

export type CheckoutAdapterResult =
  | ReturnType<typeof createMockCheckout>
  | {
      error: {
        code: "PAYOS_NOT_ENABLED";
        message: string;
      };
      ok: false;
    };

export function createCheckoutSession(productSlug: string): CheckoutAdapterResult {
  if (integrationMode === "mock") {
    return createMockCheckout(productSlug);
  }

  return {
    error: {
      code: "PAYOS_NOT_ENABLED",
      message:
        "payOS production adapter requires signed request, idempotency, webhook verification, and merchant credentials before use.",
    },
    ok: false,
  };
}
