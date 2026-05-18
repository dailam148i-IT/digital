import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  CalendarClock,
  CheckCircle2,
  Code2,
  Download,
  FileText,
  LifeBuoy,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { PageShell } from "@/components/site-header";
import { formatDate, formatVnd } from "@/lib/format";
import { getProductBySlug, getProducts, getRelatedProducts } from "@/modules/catalog/queries";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getProducts().map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Không tìm thấy sản phẩm",
    };
  }

  return {
    title: product.title,
    description: product.subtitle,
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product);

  return (
    <PageShell>
      <main>
        <section className="product-detail-hero">
          <div>
            <p className="eyebrow">Product detail</p>
            <h1>{product.title}</h1>
            <p className="hero-text">{product.subtitle}</p>
            <div className="stack-list large">
              {product.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
          <aside className="buy-panel" aria-label="Purchase summary">
            <span className="mock-badge">Mock product</span>
            <strong className="price">{formatVnd(product.priceVnd)}</strong>
            <p>{product.mockNotice}</p>
            <Link className="primary-action" href={`/checkout/${product.slug}`}>
              Mua bằng mock checkout
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <a className="secondary-action full" href={product.demoUrl}>
              <Code2 size={17} aria-hidden="true" />
              Xem demo
            </a>
          </aside>
        </section>

        <section className="content-section detail-grid">
          <article className="detail-panel">
            <h2>Thông tin kiểm duyệt</h2>
            <dl className="product-meta stacked">
              <div>
                <dt>License</dt>
                <dd>{product.license}</dd>
              </div>
              <div>
                <dt>Support</dt>
                <dd>{product.supportDays} ngày kỹ thuật, không bao gồm customize ngoài phạm vi.</dd>
              </div>
              <div>
                <dt>Update</dt>
                <dd>{product.updateMonths} tháng kể từ ngày mua.</dd>
              </div>
              <div>
                <dt>Phiên bản</dt>
                <dd>
                  {product.version}, cập nhật {formatDate(product.updatedAt)}
                </dd>
              </div>
            </dl>
          </article>

          <article className="detail-panel">
            <h2>Điểm nổi bật</h2>
            <ul className="check-list">
              {product.highlights.map((item) => (
                <li key={item}>
                  <CheckCircle2 size={18} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="detail-panel">
            <h2>Yêu cầu kỹ thuật</h2>
            <ul className="check-list">
              {product.requirements.map((item) => (
                <li key={item}>
                  <CalendarClock size={18} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="detail-panel">
            <h2>Bàn giao</h2>
            <ul className="check-list">
              {product.deliverables.map((item) => (
                <li key={item}>
                  <Download size={18} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section className="notice-band">
          <ShieldCheck size={22} aria-hidden="true" />
          <div>
            <h2>Chính sách gần CTA</h2>
            <p>
              Sau khi dữ liệu thật được duyệt, sản phẩm phải có terms, refund/replacement, delivery
              và support policy trước khi bật checkout production.
            </p>
          </div>
          <Link className="icon-link" href="/refund-policy">
            <FileText size={16} aria-hidden="true" />
            Xem policy
          </Link>
          <Link className="icon-link" href="/account/tickets">
            <LifeBuoy size={16} aria-hidden="true" />
            Ticket support
          </Link>
        </section>

        {relatedProducts.length ? (
          <section className="content-section">
            <p className="eyebrow">Related</p>
            <h2>Sản phẩm cùng nhóm</h2>
            <div className="product-grid">
              {relatedProducts.map((related) => (
                <ProductCard key={related.slug} product={related} />
              ))}
            </div>
          </section>
        ) : null}
      </main>
    </PageShell>
  );
}
