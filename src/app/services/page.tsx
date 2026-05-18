import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, ClipboardList, Code2, Gauge, LifeBuoy } from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { PageShell } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Dịch vụ thiết kế web",
  description: "D13S website services, customization, source setup, and launch support.",
};

const packages = [
  {
    title: "Launch website",
    price: "Từ 8 triệu VND",
    scope: "Landing, business site, portfolio hoặc product site có SEO và responsive QA.",
    icon: Gauge,
  },
  {
    title: "Customize source",
    price: "Theo phạm vi",
    scope: "Cài đặt, chỉnh UI, tích hợp Supabase/payOS hoặc tối ưu source khách đã mua.",
    icon: Code2,
  },
  {
    title: "Production audit",
    price: "Từ 3 triệu VND",
    scope: "Rà UX, security, deployment, performance và checklist release trước khi launch.",
    icon: ClipboardList,
  },
];

export default function ServicesPage() {
  return (
    <PageShell>
      <main>
        <section className="page-hero compact-hero">
          <p className="eyebrow">Build with D13S</p>
          <h1>Dịch vụ thiết kế và triển khai web cho sản phẩm số</h1>
          <p>
            Dịch vụ không checkout tự động trong MVP. Mỗi yêu cầu cần scope, deadline, ngân sách,
            bằng chứng bàn giao và chính sách hỗ trợ riêng.
          </p>
          <Link className="primary-action" href="/contact">
            Gửi yêu cầu tư vấn
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </section>

        <section className="content-section">
          <SectionHeading
            eyebrow="Packages"
            title="Gói dịch vụ rõ phạm vi, không hứa mơ hồ."
            description="Giá dưới đây là placeholder để mô phỏng product surface; cần thay bằng báo giá thật trước khi public bán hàng."
          />
          <div className="service-grid">
            {packages.map((item) => (
              <article className="service-card" key={item.title}>
                <item.icon size={24} aria-hidden="true" />
                <h2>{item.title}</h2>
                <strong>{item.price}</strong>
                <p>{item.scope}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section process-section">
          <SectionHeading
            eyebrow="Process"
            title="Quy trình làm việc cho khách khó tính"
            description="Mỗi bước tạo bằng chứng, không chỉ nói đã làm."
          />
          <ol className="timeline">
            {[
              "Intake: chốt mục tiêu, audience, CTA, deadline, rủi ro.",
              "Spec: route, content, data, policy và acceptance criteria.",
              "Build: triển khai theo story, test trước khi mở rộng.",
              "Review: FE/UX, security, QA và production smoke.",
              "Handoff: docs, source, deploy notes và support window.",
            ].map((item) => (
              <li key={item}>
                <CheckCircle2 size={18} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ol>
        </section>

        <section className="notice-band">
          <LifeBuoy size={22} aria-hidden="true" />
          <div>
            <h2>Support không bán quá phạm vi</h2>
            <p>Hỗ trợ kỹ thuật 30 ngày chỉ áp dụng lỗi cài đặt/sản phẩm, không bao gồm customize phát sinh.</p>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
