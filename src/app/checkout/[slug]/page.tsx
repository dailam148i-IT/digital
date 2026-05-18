import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AlertTriangle, ArrowRight, CreditCard, FileCheck2, LockKeyhole } from "lucide-react";
import Link from "next/link";
import { PageShell } from "@/components/site-header";
import { formatVnd } from "@/lib/format";
import { getProductBySlug, getProducts } from "@/modules/catalog/queries";
import { createMockCheckout } from "@/modules/commerce/mock";

type CheckoutPageProps = {
  params: Promise<{ slug: string }>;
};

export const metadata: Metadata = {
  title: "Mock checkout",
  description: "Mock checkout flow for D13S digital products before payOS production credentials.",
};

export function generateStaticParams() {
  return getProducts().map((product) => ({
    slug: product.slug,
  }));
}

export default async function CheckoutPage({ params }: CheckoutPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const checkout = createMockCheckout(product.slug);

  if (!checkout.ok) {
    notFound();
  }

  return (
    <PageShell>
      <main>
        <section className="page-hero compact-hero">
          <p className="eyebrow">Checkout mock</p>
          <h1>Thanh toán mô phỏng cho {product.title}</h1>
          <p>
            Luồng này không nhận tiền thật. payOS/VietQR chỉ được bật khi có credentials, webhook
            verification, policy và private delivery proof.
          </p>
        </section>

        <section className="checkout-layout">
          <article className="checkout-card">
            <h2>Tóm tắt đơn hàng</h2>
            <dl className="product-meta stacked">
              <div>
                <dt>Sản phẩm</dt>
                <dd>{product.title}</dd>
              </div>
              <div>
                <dt>Giá khóa tại checkout</dt>
                <dd>{formatVnd(checkout.data.amount)}</dd>
              </div>
              <div>
                <dt>Provider</dt>
                <dd>Mock provider, shape tương thích payOS</dd>
              </div>
              <div>
                <dt>Order code</dt>
                <dd>{checkout.data.orderCode}</dd>
              </div>
            </dl>
            <Link className="primary-action" href={checkout.data.checkoutUrl}>
              Hoàn tất mock payment
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </article>

          <aside className="checkout-card risk-card">
            <AlertTriangle size={24} aria-hidden="true" />
            <h2>Không phải checkout thật</h2>
            <p>
              Người dùng khó tính cần thấy ranh giới này rõ ràng: mock không phải bằng chứng thanh
              toán production, không cấp license thật và không giao file production.
            </p>
            <ul className="check-list">
              <li>
                <CreditCard size={18} aria-hidden="true" />
                Không thu tiền trong mock mode
              </li>
              <li>
                <LockKeyhole size={18} aria-hidden="true" />
                Production phải có webhook signature và idempotency
              </li>
              <li>
                <FileCheck2 size={18} aria-hidden="true" />
                License chỉ cấp bởi server transition hợp lệ
              </li>
            </ul>
          </aside>
        </section>
      </main>
    </PageShell>
  );
}
