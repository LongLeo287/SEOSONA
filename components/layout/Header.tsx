import Link from "next/link";
import { BrandLogo } from "@/components/layout/BrandLogo";
import { navItems } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/92 backdrop-blur-xl">
      <div className="container flex h-20 items-center justify-between gap-6">
        <BrandLogo />
        <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-700 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="whitespace-nowrap transition hover:text-blue-600">{item.label}</Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/lien-he/" className="hidden rounded-full bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700 sm:inline-flex">
            Đăng ký tư vấn
          </Link>
          <details className="group relative lg:hidden">
            <summary className="grid h-11 w-11 cursor-pointer list-none place-items-center rounded-2xl border border-slate-200 bg-white text-slate-950 shadow-sm transition hover:border-blue-200 hover:text-blue-600">
              <span className="sr-only">Mở menu</span>
              <span className="relative block h-4 w-5">
                <span className="absolute left-0 top-0 h-0.5 w-5 rounded bg-current transition group-open:top-2 group-open:rotate-45" />
                <span className="absolute left-0 top-2 h-0.5 w-5 rounded bg-current transition group-open:opacity-0" />
                <span className="absolute left-0 top-4 h-0.5 w-5 rounded bg-current transition group-open:top-2 group-open:-rotate-45" />
              </span>
            </summary>
            <div className="absolute right-0 mt-3 w-[min(88vw,360px)] overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-2xl shadow-slate-900/15">
              <div className="grid gap-1">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href} className="rounded-2xl px-4 py-3 font-bold text-slate-700 transition hover:bg-blue-50 hover:text-blue-700">{item.label}</Link>
                ))}
              </div>
              <Link href="/lien-he/" className="mt-3 flex justify-center rounded-2xl bg-blue-600 px-4 py-3 font-black text-white">Đăng ký tư vấn</Link>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
