import { NextResponse } from "next/server";
import { checkoutRequestSchema, createMockCheckout } from "@/modules/commerce/mock";
import { integrationMode } from "@/lib/env";
import { createCheckoutSession } from "@/lib/payos/adapter";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = checkoutRequestSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      {
        error: {
          code: "INVALID_REQUEST",
          message: "Request body failed validation.",
        },
        ok: false,
      },
      { status: 400 },
    );
  }

  const checkout =
    integrationMode === "mock"
      ? createMockCheckout(parsed.data.productSlug)
      : createCheckoutSession(parsed.data.productSlug);

  if (!checkout.ok) {
    return NextResponse.json(checkout, { status: 404 });
  }

  return NextResponse.json({
    ...checkout,
    meta: {
      integrationMode,
      warning: "Mock checkout does not collect money or issue production licenses.",
    },
  });
}

export function GET() {
  return NextResponse.json(
    {
      error: {
        code: "METHOD_NOT_ALLOWED",
        message: "Use POST to create a checkout session.",
      },
      ok: false,
    },
    { status: 405 },
  );
}
