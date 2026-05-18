import { ArrowRight, CheckCircle2, Code2, Layers3, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { CommercePanel } from "@/components/commerce-panel";
import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/section-heading";
import { PageShell } from "@/components/site-header";
import { getCatalogStats, getFeaturedProducts } from "@/modules/catalog/queries";

export default function Home() {
  const featuredProducts = getFeaturedProducts();
  const stats = getCatalogStats();

  return (
    <PageShell>
      <main>
        <section className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow">D13S digital commerce</p>
            <h1>Source, plugin, template và dịch vụ web được kiểm soát như sản phẩm thật.</h1>
            <p className="hero-text">
              D13S bán sản phẩm số tự sở hữu, có demo, license, support, update policy và quy trình
              kiểm duyệt trước khi đưa vào catalog.
            </p>
            <div className="hero-actions">
              <Link className="primary-action" href="/products">
                Xem catalog
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link className="secondary-action" href="/services">
                Thuê D13S làm web
              </Link>
            </div>
            <dl className="hero-stats" aria-label="Catalog statistics">
              <div>
                <dt>{stats.productCount}</dt>
                <dd>mock products</dd>
              </div>
              <div>
                <dt>{stats.categoryCount}</dt>
                <dd>nhóm sản phẩm</dd>
              </div>
              <div>
                <dt>{stats.updateMonths}</dt>
                <dd>tháng update</dd>
              </div>
            </dl>
          </div>
          <div className="hero-visual" aria-label="D13S product control dashboard">
            <div className="preview-bar">
              <span />
              <span />
              <span />
            </div>
            <div className="preview-dashboard">
              <div className="dashboard-row dashboard-row-strong">
                <ShieldCheck size={24} aria-hidden="true" />
                <div>
                  <strong>Curated catalog</strong>
                  <span>Demo, docs, license, support</span>
                </div>
              </div>
              <div className="dashboard-row">
                <Code2 size={22} aria-hidden="true" />
                <span>Source web/app</span>
                <strong>Ready</strong>
              </div>
              <div className="dashboard-row">
                <Layers3 size={22} aria-hidden="true" />
                <span>Plugin và template</span>
                <strong>Mock</strong>
              </div>
              <div className="dashboard-checks">
                {["No emoji icons", "Signed downloads", "Ticket support"].map((item) => (
                  <span key={item}>
                    <CheckCircle2 size={16} aria-hidden="true" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="content-section">
          <SectionHeading
            eyebrow="Featured"
            title="Sản phẩm số đầu tiên được dựng theo shape production."
            description="Dữ liệu hiện là mock có kiểm soát, nhưng schema, pricing, license và support fields đã giống luồng thật."
          />
          <div className="product-grid">
            {featuredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </section>

        <section className="content-section split-section">
          <div>
            <SectionHeading
              eyebrow="Build, buy, learn"
              title="Một hệ thống bán hàng, không phải landing page rỗng."
              description="Catalog tạo doanh thu, dịch vụ web xử lý khách cần customize, blog kéo SEO bằng nội dung có intent mua."
            />
            <div className="feature-list">
              {[
                "Checkout tự động qua payOS/VietQR khi có credentials thật.",
                "Account library quản lý order, entitlement, version và download.",
                "Ticket support trong account để kiểm soát SLA và lịch sử hỗ trợ.",
              ].map((item) => (
                <p key={item}>
                  <CheckCircle2 size={18} aria-hidden="true" />
                  {item}
                </p>
              ))}
            </div>
          </div>
          <CommercePanel />
        </section>
      </main>
    </PageShell>
  );
}
