import type { Metadata } from "next";
import { RotateCcw, XCircle } from "lucide-react";
import Link from "next/link";
import { PageShell } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Checkout cancelled",
};

export default function CheckoutCancelPage() {
  return (
    <PageShell>
      <main>
        <section className="page-hero compact-hero">
          <XCircle size={34} aria-hidden="true" />
          <p className="eyebrow">Checkout cancelled</p>
          <h1>Đơn hàng mô phỏng đã bị hủy</h1>
          <p>
            Production cần lưu trạng thái cancelled/expired và cho phép khách thử lại mà không tạo
            license hoặc quyền tải file.
          </p>
          <Link className="primary-action" href="/products">
            <RotateCcw size={18} aria-hidden="true" />
            Quay lại catalog
          </Link>
        </section>
      </main>
    </PageShell>
  );
}
