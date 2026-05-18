import { NextResponse } from "next/server";
import { integrationMode } from "@/lib/env";
import { createAuditEvent, redactAuditEvent } from "@/modules/commerce/audit";
import { webhookSchema } from "@/modules/commerce/mock";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = webhookSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      {
        error: {
          code: "INVALID_WEBHOOK",
          message: "Webhook payload failed validation.",
        },
        ok: false,
      },
      { status: 400 },
    );
  }

  if (integrationMode !== "production") {
    const audit = redactAuditEvent(
      createAuditEvent({
        action: "payment.webhook.mock_received",
        actor: "provider",
        idempotencyKey: parsed.data.transactionId,
        nextState: parsed.data.status === "PAID" ? "paid" : "manual_review",
        providerEventId: parsed.data.transactionId,
        requestId: parsed.data.orderCode,
        result: "mocked",
        targetId: parsed.data.orderCode,
        targetType: "payment",
      }),
    );

    return NextResponse.json({
      data: {
        action: "record_mock_webhook",
        audit,
        nextState: parsed.data.status === "PAID" ? "paid" : "manual_review",
      },
      meta: {
        integrationMode,
        warning: "Production payOS signature verification is disabled until credentials exist.",
      },
      ok: true,
    });
  }

  return NextResponse.json(
    {
      error: {
        code: "PAYOS_NOT_CONFIGURED",
        message: "Production webhook verification must be implemented with real payOS keys.",
      },
      ok: false,
    },
    { status: 501 },
  );
}

export function GET() {
  return NextResponse.json(
    {
      error: {
        code: "METHOD_NOT_ALLOWED",
        message: "Webhook endpoint only accepts POST.",
      },
      ok: false,
    },
    { status: 405 },
  );
}
