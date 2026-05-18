import { NextResponse } from "next/server";
import { mockEntitlements } from "@/modules/commerce/mock";

type DownloadRouteProps = {
  params: Promise<{ entitlementId: string }>;
};

export async function GET(_request: Request, { params }: DownloadRouteProps) {
  const { entitlementId } = await params;
  const entitlement = mockEntitlements.find((item) => item.id === entitlementId);

  if (!entitlement) {
    return NextResponse.json(
      {
        error: {
          code: "ENTITLEMENT_NOT_FOUND",
          message: "No mock entitlement matched this request.",
        },
        ok: false,
      },
      { status: 404 },
    );
  }

  return NextResponse.json({
    data: {
      entitlementId: entitlement.id,
      expiresInSeconds: 300,
      mode: "mock",
      signedUrl: `/mock-downloads/${entitlement.productSlug}-${entitlement.version}.zip?token=mock-short-lived`,
      state: "token_issued",
    },
    meta: {
      warning:
        "This mock signed URL is not a real file. Production must verify session, ownership, license state, expiry, and rate limit.",
    },
    ok: true,
  });
}
