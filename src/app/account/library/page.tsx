import type { Metadata } from "next";
import { Download, FileArchive, LockKeyhole, RefreshCw } from "lucide-react";
import Link from "next/link";
import { PageShell } from "@/components/site-header";
import { formatDate } from "@/lib/format";
import { getProductBySlug } from "@/modules/catalog/queries";
import { mockEntitlements } from "@/modules/commerce/mock";

export const metadata: Metadata = {
  title: "Thư viện sản phẩm",
};

export default function LibraryPage() {
  return (
    <PageShell>
      <main>
        <section className="page-hero compact-hero">
          <p className="eyebrow">Account library mock</p>
          <h1>Thư viện sản phẩm đã mua</h1>
          <p>
            Account hiện ở mock mode. Production sẽ dùng Supabase Auth email magic link + Google và
            RLS để chỉ hiện entitlement của người dùng hiện tại.
          </p>
        </section>

        <section className="content-section library-list">
          {mockEntitlements.map((entitlement) => {
            const product = getProductBySlug(entitlement.productSlug);

            if (!product) {
              return null;
            }

            return (
              <article className="library-card" key={entitlement.id}>
                <div>
                  <span className="badge">
                    <FileArchive size={14} aria-hidden="true" />
                    {entitlement.id}
                  </span>
                  <h2>{product.title}</h2>
                  <p>{product.subtitle}</p>
                </div>
                <dl className="product-meta">
                  <div>
                    <dt>Version</dt>
                    <dd>{entitlement.version}</dd>
                  </div>
                  <div>
                    <dt>Update đến</dt>
                    <dd>{formatDate(entitlement.updateEndsAt)}</dd>
                  </div>
                  <div>
                    <dt>Trạng thái</dt>
                    <dd>{entitlement.status}</dd>
                  </div>
                </dl>
                <div className="card-actions">
                  <Link className="primary-action compact" href={`/api/downloads/${entitlement.id}`}>
                    <Download size={16} aria-hidden="true" />
                    Xin signed URL mock
                  </Link>
                  <Link className="icon-link" href={`/products/${product.slug}`}>
                    <RefreshCw size={16} aria-hidden="true" />
                    Changelog
                  </Link>
                </div>
                <p className="assurance">
                  <LockKeyhole size={15} aria-hidden="true" />
                  Production download phải kiểm session, ownership, license state và rate limit.
                </p>
              </article>
            );
          })}
        </section>
      </main>
    </PageShell>
  );
}
