"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { BrandLogo } from "@/components/layout/BrandLogo";
import { navItems } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 shadow-sm shadow-slate-900/[0.03] backdrop-blur-xl">
      <div className="container flex h-[76px] items-center justify-between gap-4">
        <BrandLogo />

        <nav className="hidden items-center rounded-full border border-slate-200/80 bg-slate-50/80 p-1 text-sm font-bold text-slate-700 shadow-inner shadow-white/70 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative whitespace-nowrap rounded-full px-4 py-2.5 transition duration-200 hover:bg-white hover:text-blue-700 hover:shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-100"
            >
              <span className="relative z-10">{item.label}</span>
              <span className="absolute inset-x-4 bottom-1 h-0.5 scale-x-0 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 transition-transform duration-200 group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/lien-he/" className="hidden rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 text-sm font-black text-white shadow-lg shadow-blue-600/20 transition duration-200 hover:-translate-y-0.5 hover:from-blue-500 hover:to-cyan-400 hover:shadow-xl hover:shadow-blue-600/25 focus:outline-none focus:ring-4 focus:ring-blue-100 sm:inline-flex">
            Đăng ký tư vấn
          </Link>
          <details className="group relative lg:hidden" open={open} onToggle={(e) => setOpen(e.currentTarget.open)}>
            <summary className="grid h-11 w-11 cursor-pointer list-none place-items-center rounded-2xl border border-slate-200 bg-white text-slate-950 shadow-sm transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-100">
              <span className="sr-only">Mở menu</span>
              <span className="relative block h-4 w-5">
                <span className="absolute left-0 top-0 h-0.5 w-5 rounded bg-current transition group-open:top-2 group-open:rotate-45" />
                <span className="absolute left-0 top-2 h-0.5 w-5 rounded bg-current transition group-open:opacity-0" />
                <span className="absolute left-0 top-4 h-0.5 w-5 rounded bg-current transition group-open:top-2 group-open:-rotate-45" />
              </span>
            </summary>
            <div className="absolute right-0 mt-3 w-[min(88vw,380px)] overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-2xl shadow-slate-900/15">
              <div className="grid gap-1">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href} className="group relative rounded-2xl px-4 py-3 font-bold text-slate-700 transition hover:bg-blue-50 hover:text-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-100">
                    {item.label}
                    <span className="absolute bottom-2 left-4 h-0.5 w-8 scale-x-0 rounded-full bg-blue-600 transition group-hover:scale-x-100" />
                  </Link>
                ))}
              </div>
              <Link href="/lien-he/" className="mt-3 flex justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-3 font-black text-white shadow-lg shadow-blue-600/20 transition hover:from-blue-500 hover:to-cyan-400">Đăng ký tư vấn</Link>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
