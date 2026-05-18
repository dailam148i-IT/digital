import type { Metadata } from "next";
import { Filter, ShieldCheck } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/section-heading";
import { PageShell } from "@/components/site-header";
import { categoryLabels, getProducts } from "@/modules/catalog/queries";

export const metadata: Metadata = {
  title: "Catalog sản phẩm số",
  description:
    "Browse D13S curated source code, plugins, templates, and bundles for digital product delivery.",
};

export default function ProductsPage() {
  const products = getProducts();
  const categories = Object.entries(categoryLabels);

  return (
    <PageShell>
      <main>
        <section className="page-hero compact-hero">
          <p className="eyebrow">Curated catalog</p>
          <h1>Catalog sản phẩm số D13S</h1>
          <p>
            Mỗi sản phẩm mock hiện có cùng dữ liệu production cần thiết: demo, stack, giá, license,
            support, update và deliverables. Không có sản phẩm nào được trình bày như hàng thật khi
            chưa thay dữ liệu production.
          </p>
          <div className="filter-bar" aria-label="Product categories">
            <span>
              <Filter size={16} aria-hidden="true" />
              Nhóm
            </span>
            {categories.map(([key, label]) => (
              <a href={`#${key}`} key={key}>
                {label}
              </a>
            ))}
          </div>
        </section>

        {categories.map(([key, label]) => {
          const categoryProducts = products.filter((product) => product.category === key);

          return (
            <section className="content-section" id={key} key={key}>
              <SectionHeading
                eyebrow={label}
                title={`${label} được kiểm soát trước khi bán`}
                description="Card luôn hiển thị giá, license, update, support và nhãn mock để tránh hiểu nhầm với dữ liệu thật."
              />
              <div className="product-grid">
                {categoryProducts.map((product) => (
                  <ProductCard key={product.slug} product={product} />
                ))}
              </div>
            </section>
          );
        })}

        <section className="notice-band">
          <ShieldCheck size={22} aria-hidden="true" />
          <div>
            <h2>Catalog đang ở mock mode có kiểm soát</h2>
            <p>
              Checkout thật chỉ được bật sau khi có payOS credentials, policy được duyệt, webhook
              được test và private download flow có bằng chứng.
            </p>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
