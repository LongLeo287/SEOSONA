import Link from "next/link";
import { BrandLogo } from "@/components/layout/BrandLogo";
import { navItems } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
      <div className="container flex h-20 items-center justify-between gap-6">
        <BrandLogo />
        <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-700 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="whitespace-nowrap transition hover:text-blue-600">{item.label}</Link>
          ))}
        </nav>
        <Link href="/lien-he/" className="hidden rounded-full bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 sm:inline-flex">
          Đăng ký tư vấn
        </Link>
      </div>
    </header>
  );
}
