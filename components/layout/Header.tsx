"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { X, Menu, ArrowRight } from "lucide-react";
import { BrandLogo } from "@/components/layout/BrandLogo";
import { navItems } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-slate-200/80 bg-white/90 backdrop-blur-xl shadow-sm py-2"
            : "border-b border-transparent bg-transparent py-4"
        }`}
      >
        <div className="container relative mx-auto flex h-14 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          
          {/* Logo */}
          <div className="flex-shrink-0 transition-transform hover:scale-105">
            <BrandLogo variant="dark" />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-1 lg:flex bg-white/50 border border-slate-200/60 rounded-full px-2 py-1.5 shadow-sm backdrop-blur-md" aria-label="Main menu">
            {navItems.filter(i => i.href !== "/lien-he/").map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group relative rounded-full px-5 py-2 text-[14px] font-bold transition-all duration-300 ${
                    isActive
                      ? "bg-[#3BA6F1] text-white shadow-md shadow-blue-500/20"
                      : "text-slate-600 hover:bg-[#F0F6FF] hover:text-[#3BA6F1]"
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="flex items-center gap-4">
            <Link
              href="/lien-he/"
              className="hidden sm:flex h-11 items-center justify-center gap-2 rounded-full bg-[#3BA6F1] px-6 text-[14px] font-bold text-white transition-all hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/25 group"
            >
              Liên hệ chuyên gia
            </Link>

            {/* Mobile hamburger */}
            <button
              type="button"
              aria-label={open ? "Đóng menu" : "Mở menu"}
              aria-expanded={open}
              onClick={() => setOpen(!open)}
              className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white text-[#04091A] transition hover:bg-[#F0F6FF] hover:text-[#3BA6F1] hover:border-[#3BA6F1]/30 lg:hidden shadow-sm"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-slate-900/20 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Menu Drawer */}
      <div
        id="mobile-menu"
        className={`fixed right-0 top-0 z-50 flex h-full w-[min(85vw,320px)] flex-col bg-white border-l border-slate-200 shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex h-20 items-center justify-between border-b border-slate-100 px-6">
          <BrandLogo variant="dark" />
          <button
            type="button"
            aria-label="Đóng menu"
            onClick={() => setOpen(false)}
            className="grid h-10 w-10 place-items-center rounded-xl bg-slate-50 text-slate-500 transition hover:bg-rose-50 hover:text-rose-500"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 py-6" aria-label="Mobile menu">
          <div className="flex flex-col gap-2">
            {navItems.filter(i => i.href !== "/lien-he/").map((item, index) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  style={{ transitionDelay: open ? `${index * 40}ms` : "0ms" }}
                  className={`group flex items-center justify-between rounded-2xl px-5 py-4 text-[15px] font-bold transition-all duration-300 ${
                    isActive
                      ? "bg-[#3BA6F1] text-white shadow-md shadow-blue-500/20"
                      : "bg-transparent text-slate-600 hover:bg-[#F0F6FF] hover:text-[#3BA6F1]"
                  }`}
                >
                  <span>{item.label}</span>
                  <ArrowRight
                    size={18}
                    className={`transition-transform duration-300 group-hover:translate-x-1 ${isActive ? "text-white opacity-100" : "text-[#3BA6F1] opacity-0 group-hover:opacity-100"}`}
                  />
                </Link>
              );
            })}
          </div>
        </nav>

        <div className="border-t border-slate-100 p-6 bg-slate-50/50">
          <Link
            href="/lien-he/"
            onClick={() => setOpen(false)}
            className="flex h-14 w-full items-center justify-center gap-2 rounded-full bg-[#3BA6F1] px-6 text-[15px] font-bold text-white transition-all hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/25"
          >
            Liên hệ chuyên gia <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </>
  );
}
