import { NextResponse } from "next/server";
import { integrationMode } from "@/lib/env";

export function GET() {
  return NextResponse.json({
    data: {
      integrationMode,
      service: "d13s-digital",
      status: "ok",
    },
    ok: true,
  });
}
