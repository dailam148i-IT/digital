import { ArrowRight, BadgeCheck, Box, Code2, Layers3 } from "lucide-react";
import Link from "next/link";
import { formatVnd } from "@/lib/format";
import { categoryLabels } from "@/modules/catalog/queries";
import type { Product } from "@/modules/catalog/schema";

const previewClassByCategory = {
  bundle: "from-slate-950 via-blue-950 to-teal-900",
  plugin: "from-teal-900 via-slate-950 to-slate-800",
  source: "from-blue-950 via-slate-950 to-slate-900",
  template: "from-slate-900 via-indigo-950 to-blue-900",
} satisfies Record<Product["category"], string>;

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex min-h-[460px] flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm shadow-slate-950/5 transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-950/10">
      <div className={`relative min-h-44 bg-gradient-to-br ${previewClassByCategory[product.category]} p-4 text-white`} aria-hidden="true">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:22px_22px]" />
        <div className="relative flex gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-white/35" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        </div>
        <div className="relative mt-9 rounded-lg border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
          <div className="flex items-center gap-2 text-sm font-black">
            <Layers3 size={18} />
            <span>{categoryLabels[product.category]}</span>
          </div>
          <div className="mt-4 h-2 w-4/5 rounded-full bg-white/45" />
          <div className="mt-2 h-2 w-2/3 rounded-full bg-white/25" />
          <div className="mt-5 flex gap-2">
            {product.stack.slice(0, 2).map((item) => (
              <span className="rounded-md bg-white/15 px-2 py-1 text-[11px] font-bold" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-center justify-between gap-3">
          <span className="inline-flex min-h-7 items-center gap-1.5 rounded-lg border border-teal-200 bg-teal-50 px-2.5 text-xs font-black text-teal-800">
            <Box size={14} aria-hidden="true" />
            {categoryLabels[product.category]}
          </span>
          <span className="rounded-lg border border-amber-200 bg-amber-50 px-2.5 py-1 text-xs font-black text-amber-700">Mock</span>
        </div>

        <h3 className="mt-4 text-xl font-black tracking-tight text-slate-950">{product.title}</h3>
        <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-600">{product.subtitle}</p>

        <div className="mt-4 flex flex-wrap gap-1.5" aria-label="Tech stack">
          {product.stack.slice(0, 4).map((item) => (
            <span className="rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-[11px] font-bold text-slate-600" key={item}>
              {item}
            </span>
          ))}
        </div>

        <dl className="mt-auto grid grid-cols-3 gap-2 border-t border-slate-200 pt-4">
          <div>
            <dt className="text-[10px] font-black uppercase text-slate-400">Giá</dt>
            <dd className="mt-1 text-sm font-black text-slate-950">{formatVnd(product.priceVnd)}</dd>
          </div>
          <div>
            <dt className="text-[10px] font-black uppercase text-slate-400">Update</dt>
            <dd className="mt-1 text-sm font-black text-slate-950">{product.updateMonths} tháng</dd>
          </div>
          <div>
            <dt className="text-[10px] font-black uppercase text-slate-400">Support</dt>
            <dd className="mt-1 text-sm font-black text-slate-950">{product.supportDays} ngày</dd>
          </div>
        </dl>

        <div className="mt-4 grid grid-cols-[1fr_auto] gap-2">
          <Link className="inline-flex min-h-10 items-center justify-center gap-2 rounded-lg bg-slate-950 px-3 text-sm font-black text-white transition hover:bg-blue-700" href={`/products/${product.slug}`}>
            Xem chi tiết
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <a className="inline-flex min-h-10 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-3 text-sm font-black text-slate-700 transition hover:border-blue-300 hover:text-slate-950" href={product.demoUrl}>
            <Code2 size={16} aria-hidden="true" />
            Demo
          </a>
        </div>

        <p className="mt-3 flex items-center gap-2 text-xs font-bold text-emerald-700">
          <BadgeCheck size={15} aria-hidden="true" />
          License 1 dự án thương mại
        </p>
      </div>
    </article>
  );
}
