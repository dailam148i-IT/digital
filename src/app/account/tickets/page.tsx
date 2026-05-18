import type { Metadata } from "next";
import { LifeBuoy, MessageSquarePlus } from "lucide-react";
import { PageShell } from "@/components/site-header";
import { getProductBySlug } from "@/modules/catalog/queries";
import { mockTickets } from "@/modules/support/mock";

export const metadata: Metadata = {
  title: "Ticket support",
};

export default function TicketsPage() {
  return (
    <PageShell>
      <main>
        <section className="page-hero compact-hero">
          <p className="eyebrow">Support mock</p>
          <h1>Ticket support trong account</h1>
          <p>
            Hỗ trợ kỹ thuật 30 ngày phải gắn với order và sản phẩm để tránh thất lạc qua chat rời.
            Form thật sẽ validate title/body, ownership và rate limit.
          </p>
        </section>

        <section className="content-section ticket-layout">
          <article className="checkout-card">
            <MessageSquarePlus size={24} aria-hidden="true" />
            <h2>Tạo ticket mới</h2>
            <form className="support-form">
              <label>
                Sản phẩm
                <select defaultValue="commerce-starter-nextjs">
                  <option value="commerce-starter-nextjs">D13S Commerce Starter</option>
                  <option value="support-ticket-module">Support Ticket Module</option>
                </select>
              </label>
              <label>
                Tiêu đề
                <input placeholder="Mô tả ngắn vấn đề cần hỗ trợ" />
              </label>
              <label>
                Nội dung
                <textarea placeholder="Ghi rõ môi trường, bước tái hiện và log lỗi nếu có" />
              </label>
              <button className="primary-action" type="button">
                Tạo mock ticket
              </button>
            </form>
          </article>

          <div className="ticket-list">
            {mockTickets.map((ticket) => {
              const product = getProductBySlug(ticket.productSlug);

              return (
                <article className="ticket-card" key={ticket.id}>
                  <span className="badge">
                    <LifeBuoy size={14} aria-hidden="true" />
                    {ticket.status}
                  </span>
                  <h2>{ticket.title}</h2>
                  <p>{product?.title}</p>
                  <small>{ticket.id}</small>
                </article>
              );
            })}
          </div>
        </section>
      </main>
    </PageShell>
  );
}
