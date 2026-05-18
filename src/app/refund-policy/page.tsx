import type { Metadata } from "next";
import { PageShell } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Chính sách hoàn tiền và thay thế",
};

export default function RefundPolicyPage() {
  return (
    <PageShell>
      <main>
        <article className="article">
          <p className="eyebrow">Policy placeholder</p>
          <h1>Chính sách hoàn tiền và thay thế</h1>
          <p>
            MVP dùng policy placeholder: sau khi tải file số, không hoàn tiền tùy ý. D13S ưu tiên
            sửa lỗi hoặc thay thế nếu sản phẩm lỗi không thể khắc phục trong phạm vi hỗ trợ.
          </p>
          <h2>Điều kiện hỗ trợ</h2>
          <p>
            Hỗ trợ kỹ thuật mặc định 30 ngày cho lỗi cài đặt hoặc lỗi sản phẩm, không bao gồm yêu
            cầu customize ngoài phạm vi.
          </p>
          <h2>Trước production</h2>
          <p>
            Chính sách này phải được rà lại cùng terms, privacy, delivery và license trước khi bật
            payOS/VietQR thật.
          </p>
        </article>
      </main>
    </PageShell>
  );
}
