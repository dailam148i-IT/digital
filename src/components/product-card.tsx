import { ArrowRight, BadgeCheck, Box, Code2 } from "lucide-react";
import Link from "next/link";
import { formatVnd } from "@/lib/format";
import { categoryLabels } from "@/modules/catalog/queries";
import type { Product } from "@/modules/catalog/schema";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card">
      <div className="card-topline">
        <span className="badge">
          <Box size={14} aria-hidden="true" />
          {categoryLabels[product.category]}
        </span>
        <span className="mock-badge">Mock</span>
      </div>
      <h3>{product.title}</h3>
      <p>{product.subtitle}</p>
      <div className="stack-list" aria-label="Tech stack">
        {product.stack.slice(0, 4).map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
      <dl className="product-meta">
        <div>
          <dt>Giá</dt>
          <dd>{formatVnd(product.priceVnd)}</dd>
        </div>
        <div>
          <dt>Update</dt>
          <dd>{product.updateMonths} tháng</dd>
        </div>
        <div>
          <dt>Support</dt>
          <dd>{product.supportDays} ngày</dd>
        </div>
      </dl>
      <div className="card-actions">
        <Link className="primary-action compact" href={`/products/${product.slug}`}>
          Xem chi tiết
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
        <a className="icon-link" href={product.demoUrl}>
          <Code2 size={16} aria-hidden="true" />
          Demo
        </a>
      </div>
      <p className="assurance">
        <BadgeCheck size={15} aria-hidden="true" />
        License 1 dự án thương mại
      </p>
    </article>
  );
}
