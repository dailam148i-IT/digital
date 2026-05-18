import { BookOpen, BriefcaseBusiness, Code2, Library, ShieldCheck } from "lucide-react";
import Link from "next/link";

const navItems = [
  { href: "/products", icon: Code2, label: "Sản phẩm" },
  { href: "/services", icon: BriefcaseBusiness, label: "Dịch vụ" },
  { href: "/blog", icon: BookOpen, label: "Mẹo" },
  { href: "/account/library", icon: Library, label: "Thư viện" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-slate-50/85 backdrop-blur-xl">
      <div className="mx-auto grid w-full max-w-[1180px] grid-cols-1 items-center gap-3 px-3 py-3 md:px-4 lg:grid-cols-[auto_1fr_auto]">
      <Link className="flex items-center gap-3" href="/" aria-label="D13S home">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-950 text-sm font-black text-white shadow-lg shadow-slate-950/15" aria-hidden="true">
          D
        </span>
        <span className="grid leading-none">
          <strong className="text-sm font-black text-slate-950">D13S</strong>
          <small className="text-[11px] font-bold text-slate-500">Digital Commerce</small>
        </span>
      </Link>
      <nav className="grid grid-cols-2 gap-2 lg:flex lg:justify-center" aria-label="Main navigation">
        {navItems.map((item) => (
          <Link
            className="inline-flex min-h-10 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-3 text-sm font-bold text-slate-600 transition hover:border-blue-300 hover:text-slate-950"
            href={item.href}
            key={item.href}
          >
            <item.icon size={17} aria-hidden="true" />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
      <Link className="hidden min-h-10 items-center justify-center gap-2 rounded-lg border border-teal-200 bg-teal-50 px-3 text-sm font-black text-teal-800 transition hover:border-teal-400 lg:inline-flex" href="/products">
        <ShieldCheck size={17} aria-hidden="true" />
        <span>Catalog curated</span>
      </Link>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mx-auto flex w-full max-w-[1180px] flex-col gap-5 border-t border-slate-200 px-3 py-10 text-slate-500 md:flex-row md:items-start md:justify-between md:px-4">
      <div>
        <strong className="font-black text-slate-950">D13S</strong>
        <p className="mt-2 max-w-xl leading-7">Source web/app, plugin, template và dịch vụ thiết kế web có kiểm soát.</p>
      </div>
      <nav className="flex flex-wrap gap-4 text-sm font-bold text-slate-700" aria-label="Footer navigation">
        <Link href="/terms">Điều khoản</Link>
        <Link href="/refund-policy">Hoàn tiền</Link>
        <Link href="/privacy">Riêng tư</Link>
        <Link href="/en">English</Link>
      </nav>
    </footer>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.10),transparent_34rem),linear-gradient(180deg,#f8fafc,#eef2f7)] text-slate-950">
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  );
}
