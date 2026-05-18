import type { Metadata } from "next";
import { CheckCircle2, Library, LifeBuoy } from "lucide-react";
import Link from "next/link";
import { PageShell } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Mock checkout success",
};

export default function CheckoutSuccessPage() {
  return (
    <PageShell>
      <main>
        <section className="page-hero compact-hero success-hero">
          <CheckCircle2 size={34} aria-hidden="true" />
          <p className="eyebrow">Mock success</p>
          <h1>Đơn hàng mô phỏng đã hoàn tất</h1>
          <p>
            Đây là trạng thái mẫu để kiểm thử UX sau mua. Production phải dựa trên webhook hợp lệ
            trước khi cấp entitlement và signed download.
          </p>
          <div className="hero-actions">
            <Link className="primary-action" href="/account/library">
              <Library size={18} aria-hidden="true" />
              Mở thư viện
            </Link>
            <Link className="secondary-action" href="/account/tickets">
              <LifeBuoy size={18} aria-hidden="true" />
              Tạo ticket support
            </Link>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
