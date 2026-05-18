import type { Metadata } from "next";
import { PageShell } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Điều khoản sử dụng",
};

export default function TermsPage() {
  return (
    <PageShell>
      <main>
        <article className="article">
          <p className="eyebrow">Policy placeholder</p>
          <h1>Điều khoản sử dụng D13S</h1>
          <p>
            Đây là nội dung placeholder cho MVP. Trước khi bật checkout thật, điều khoản phải được
            thay bằng bản chính thức được chủ dự án hoặc tư vấn pháp lý duyệt.
          </p>
          <h2>License mặc định</h2>
          <p>
            Mỗi sản phẩm số mặc định cấp quyền sử dụng cho 1 dự án thương mại, không chuyển nhượng
            và không được bán lại source nguyên trạng.
          </p>
          <h2>Giới hạn cam kết</h2>
          <p>
            D13S không hứa lifetime update, official license của bên thứ ba, kết quả kinh doanh hoặc
            hoàn tiền tùy ý nếu chính sách riêng chưa ghi rõ.
          </p>
        </article>
      </main>
    </PageShell>
  );
}
