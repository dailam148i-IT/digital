import type { Metadata } from "next";
import { ArrowRight, Boxes, Filter, Search, ShieldCheck, Sparkles } from "lucide-react";
import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { PageShell } from "@/components/site-header";
import { categoryLabels, getCatalogStats, getFeaturedProducts, getProducts } from "@/modules/catalog/queries";

export const metadata: Metadata = {
  title: "Catalog sản phẩm số",
  description:
    "Browse D13S curated source code, plugins, templates, and bundles for digital product delivery.",
};

export default function ProductsPage() {
  const products = getProducts();
  const categories = Object.entries(categoryLabels);
  const featured = getFeaturedProducts()[0];
  const stats = getCatalogStats();

  return (
    <PageShell>
      <main className="pb-16">
        <section className="mx-auto grid w-full max-w-[1180px] gap-8 px-3 py-10 md:px-4 lg:grid-cols-[minmax(0,1fr)_430px] lg:py-14">
          <div className="flex min-w-0 flex-col justify-center">
            <p className="mb-3 text-xs font-black uppercase tracking-normal text-teal-700">Curated digital store</p>
            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-normal text-slate-950 md:text-7xl">
              Source, plugin, template cho người mua khó tính.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
              Catalog mock này được dựng theo chuẩn production: có visual preview, stack, license,
              support, update, demo và trạng thái mock rõ ràng trước khi thay bằng dữ liệu thật.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-slate-950 px-5 text-sm font-black text-white transition hover:bg-blue-700" href="#catalog-grid">
                Xem toàn bộ catalog
                <ArrowRight size={18} aria-hidden="true" />
              </a>
              <Link className="inline-flex min-h-12 items-center justify-center rounded-lg border border-slate-300 bg-white px-5 text-sm font-black text-slate-900 transition hover:border-blue-300" href="/services">
                Thuê customize
              </Link>
            </div>
          </div>

          <aside className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-xl shadow-slate-950/10" aria-label="Catalog quality panel">
            <div className="border-b border-slate-200 p-5">
              <span className="inline-flex min-h-7 items-center gap-1.5 rounded-lg border border-blue-200 bg-blue-50 px-2.5 text-xs font-black text-blue-700">
                <Sparkles size={14} aria-hidden="true" />
                Featured mock
              </span>
              <strong className="mt-4 block text-2xl font-black tracking-tight text-slate-950">{featured.title}</strong>
              <p className="mt-2 text-sm leading-6 text-slate-600">{featured.subtitle}</p>
            </div>
            <div className="bg-slate-950 p-5 text-white">
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <span className="block h-2 w-4/5 rounded-full bg-white/45" />
                <span className="mt-3 block h-2 w-2/3 rounded-full bg-white/25" />
                <span className="mt-3 block h-2 w-1/2 rounded-full bg-white/15" />
                <div className="mt-6 grid grid-cols-3 gap-2">
                  <span className="h-16 rounded-md bg-blue-400/30" />
                  <span className="h-16 rounded-md bg-teal-400/30" />
                  <span className="h-16 rounded-md bg-amber-300/25" />
                </div>
              </div>
            </div>
            <dl className="grid grid-cols-3 divide-x divide-slate-200">
              <div className="p-4">
                <dt className="text-2xl font-black text-slate-950">{stats.productCount}</dt>
                <dd className="mt-1 text-xs font-bold text-slate-500">sản phẩm</dd>
              </div>
              <div className="p-4">
                <dt className="text-2xl font-black text-slate-950">{stats.categoryCount}</dt>
                <dd className="mt-1 text-xs font-bold text-slate-500">nhóm</dd>
              </div>
              <div className="p-4">
                <dt className="text-2xl font-black text-slate-950">{stats.updateMonths}</dt>
                <dd className="mt-1 text-xs font-bold text-slate-500">tháng update</dd>
              </div>
            </dl>
          </aside>
        </section>

        <section className="sticky top-[86px] z-20 mx-auto flex w-full max-w-[1180px] flex-col gap-3 border-y border-slate-200 bg-slate-50/90 px-3 py-3 backdrop-blur-xl md:px-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 text-sm font-bold text-slate-500">
            <Search size={17} aria-hidden="true" />
            <span>Tìm source, plugin, template</span>
          </div>
          <div className="flex flex-wrap gap-2" aria-label="Product categories">
            <span className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 text-sm font-black text-slate-700">
              <Filter size={16} aria-hidden="true" />
              Bộ lọc
            </span>
            {categories.map(([key, label]) => (
              <a className="inline-flex min-h-10 items-center rounded-lg border border-slate-200 bg-white px-3 text-sm font-black text-slate-700 transition hover:border-blue-300 hover:text-slate-950" href={`#${key}`} key={key}>
                {label}
              </a>
            ))}
          </div>
        </section>

        <section className="mx-auto grid w-full max-w-[1180px] grid-cols-2 gap-3 px-3 py-6 md:grid-cols-4 md:px-4">
          {categories.map(([key, label]) => (
            <a className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm shadow-slate-950/5 transition hover:border-blue-300 hover:shadow-lg hover:shadow-blue-950/10" href={`#${key}`} key={key}>
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-950 text-white">
                <Boxes size={18} aria-hidden="true" />
              </span>
              <span className="min-w-0 flex-1 text-sm font-black text-slate-900">{label}</span>
              <strong className="text-sm font-black text-blue-700">{products.filter((product) => product.category === key).length}</strong>
            </a>
          ))}
        </section>

        <section className="mx-auto w-full max-w-[1180px] px-3 py-8 md:px-4" id="catalog-grid">
          <div className="mb-6 grid gap-4 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-end">
            <div>
              <p className="mb-2 text-xs font-black uppercase tracking-normal text-teal-700">All products</p>
              <h2 className="text-3xl font-black leading-tight tracking-normal text-slate-950 md:text-5xl">
                Catalog gọn hơn, nhìn được giá trị ngay.
              </h2>
            </div>
            <p className="text-sm leading-7 text-slate-600">
              Card ưu tiên preview và quyết định mua. Chi tiết policy vẫn có, nhưng không để giao
              diện thành tài liệu nội bộ.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </section>

        <section className="mx-auto mb-8 flex w-full max-w-[1180px] flex-col gap-3 rounded-lg border border-teal-200 bg-teal-50 px-4 py-4 text-teal-950 md:flex-row md:items-center">
          <ShieldCheck className="shrink-0" size={22} aria-hidden="true" />
          <div>
            <h2 className="text-lg font-black">Catalog đang ở mock mode có kiểm soát</h2>
            <p className="mt-1 text-sm leading-6 text-teal-800">
              Checkout thật chỉ được bật sau khi có payOS credentials, policy được duyệt, webhook
              được test và private download flow có bằng chứng.
            </p>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
