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
    <header className="site-header">
      <Link className="brand" href="/" aria-label="D13S home">
        <span className="brand-mark" aria-hidden="true">
          D
        </span>
        <span>
          <strong>D13S</strong>
          <small>Digital Commerce</small>
        </span>
      </Link>
      <nav className="nav-links" aria-label="Main navigation">
        {navItems.map((item) => (
          <Link href={item.href} key={item.href}>
            <item.icon size={17} aria-hidden="true" />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
      <Link className="header-action" href="/products">
        <ShieldCheck size={17} aria-hidden="true" />
        <span>Catalog curated</span>
      </Link>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <strong>D13S</strong>
        <p>Source web/app, plugin, template và dịch vụ thiết kế web có kiểm soát.</p>
      </div>
      <nav aria-label="Footer navigation">
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
    <>
      <SiteHeader />
      {children}
      <SiteFooter />
    </>
  );
}
