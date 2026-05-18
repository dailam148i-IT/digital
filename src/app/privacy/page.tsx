import type { Metadata } from "next";
import { PageShell } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Chính sách riêng tư",
};

export default function PrivacyPage() {
  return (
    <PageShell>
      <main>
        <article className="article">
          <p className="eyebrow">Policy placeholder</p>
          <h1>Chính sách riêng tư</h1>
          <p>
            Đây là bản placeholder cho MVP. Production sẽ dùng Supabase Auth, order, license,
            download log và support ticket, nên cần chính sách dữ liệu rõ trước khi launch.
          </p>
          <h2>Dữ liệu dự kiến</h2>
          <p>
            Email, order history, entitlement, support ticket, download audit và payment reference
            tối thiểu để vận hành sản phẩm số.
          </p>
          <h2>Kiểm soát</h2>
          <p>
            Không lưu secret trong client, không public bucket file, không ghi license secret hoặc
            dữ liệu nhạy cảm dư thừa vào log.
          </p>
        </article>
      </main>
    </PageShell>
  );
}
