import type { Metadata } from "next";
import { ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { PageShell } from "@/components/site-header";
import { getFeaturedProducts } from "@/modules/catalog/queries";

export const metadata: Metadata = {
  title: "English",
  description: "English entry for D13S digital products and website services.",
};

export default function EnglishPage() {
  return (
    <PageShell>
      <main>
        <section className="page-hero compact-hero">
          <p className="eyebrow">English preview</p>
          <h1>D13S curated digital products and website services</h1>
          <p>
            English content is a controlled MVP surface. Product data is still mock-labeled and can
            be replaced with real English copy without changing the architecture.
          </p>
          <Link className="primary-action" href="/products">
            Browse Vietnamese catalog
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </section>

        <section className="content-section">
          <div className="notice-band">
            <ShieldCheck size={22} aria-hidden="true" />
            <div>
              <h2>Production controls stay the same</h2>
              <p>Checkout, license, support, and download gates do not change by locale.</p>
            </div>
          </div>
          <div className="product-grid">
            {getFeaturedProducts().map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </section>
      </main>
    </PageShell>
  );
}
