import type { Metadata } from "next";
import { Mail, MessageSquare, Send } from "lucide-react";
import { PageShell } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Liên hệ",
};

export default function ContactPage() {
  return (
    <PageShell>
      <main>
        <section className="page-hero compact-hero">
          <p className="eyebrow">Contact</p>
          <h1>Liên hệ D13S</h1>
          <p>
            Kênh chính thức đang là placeholder. Trước production, cần thay email/Zalo/form bằng kênh
            thật và cập nhật SLA phản hồi.
          </p>
        </section>

        <section className="checkout-layout">
          <article className="checkout-card">
            <Mail size={24} aria-hidden="true" />
            <h2>Kênh placeholder</h2>
            <p>Email tạm thời cho development: hello@example.com</p>
            <a className="primary-action" href="mailto:hello@example.com">
              <Send size={18} aria-hidden="true" />
              Gửi email placeholder
            </a>
          </article>
          <article className="checkout-card">
            <MessageSquare size={24} aria-hidden="true" />
            <h2>Yêu cầu tư vấn</h2>
            <form className="support-form">
              <label>
                Nhu cầu
                <select defaultValue="website">
                  <option value="website">Thiết kế website</option>
                  <option value="customize">Customize source/template</option>
                  <option value="product">Tư vấn sản phẩm số</option>
                </select>
              </label>
              <label>
                Email hoặc Zalo
                <input placeholder="Nhập kênh liên hệ của bạn" />
              </label>
              <label>
                Mô tả ngắn
                <textarea placeholder="Mục tiêu, deadline, ngân sách dự kiến" />
              </label>
              <button className="secondary-action full" type="button">
                Submit mock request
              </button>
            </form>
          </article>
        </section>
      </main>
    </PageShell>
  );
}
