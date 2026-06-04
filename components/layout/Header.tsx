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

  // Close mobile menu on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  // Track scroll for header background
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-white/5 shadow-lg shadow-black/10 backdrop-blur-2xl"
            : "border-b border-transparent bg-transparent backdrop-blur-md"
        }`}
      >
        <div className="container relative mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">

          {/* Logo */}
          <BrandLogo variant="light" />

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Menu chính">
            {navItems.filter(i => i.href !== "/lien-he/").map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group relative whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition duration-200 focus:outline-none focus:ring-2 focus:ring-[#46FF00]/30 ${
                    isActive
                      ? "text-[#46FF00] font-bold"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {/* Active / hover underline */}
                  <span
                    className={`absolute inset-x-3 bottom-0.5 h-0.5 rounded-full bg-[#46FF00] shadow-[0_0_8px_rgba(70,255,0,0.6)] transition-all duration-300 ${
                      isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="flex items-center gap-3">
            <Link
              href="/lien-he/"
              className={`hidden items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-bold text-white transition duration-200 hover:-translate-y-0.5 hover:border-[#46FF00]/70 hover:bg-[#46FF00]/20 hover:text-[#46FF00] hover:shadow-[0_0_20px_rgba(70,255,0,0.2)] focus:outline-none focus:ring-2 focus:ring-[#46FF00]/30 sm:inline-flex backdrop-blur-sm`}
            >
              Đăng ký tư vấn <ArrowRight size={15} />
            </Link>

            {/* Mobile hamburger */}
            <button
              type="button"
              aria-label={open ? "Đóng menu" : "Mở menu"}
              aria-expanded={open}
              onClick={() => setOpen(!open)}
              className="grid h-10 w-10 place-items-center rounded-2xl border border-white/15 bg-white/10 text-white transition hover:border-[#46FF00]/40 hover:bg-[#46FF00]/10 hover:text-[#46FF00] focus:outline-none focus:ring-2 focus:ring-[#46FF00]/30 lg:hidden"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed right-0 top-0 z-50 flex h-full w-[min(85vw,360px)] flex-col bg-[#091338] border-l border-white/10 shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu di động"
      >
        {/* Drawer header */}
        <div className="flex h-[72px] items-center justify-between border-b border-white/10 px-5">
          <BrandLogo variant="light" />
          <button
            type="button"
            aria-label="Đóng menu"
            onClick={() => setOpen(false)}
            className="grid h-10 w-10 place-items-center rounded-2xl border border-white/15 bg-white/10 text-white transition hover:border-[#46FF00]/40 hover:text-[#46FF00]"
          >
            <X size={20} />
          </button>
        </div>

        {/* Drawer nav links */}
        <nav className="flex-1 overflow-y-auto px-4 py-5" aria-label="Menu di động">
          <div className="flex flex-col gap-1">
            {navItems.filter(i => i.href !== "/lien-he/").map((item, index) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  style={{ transitionDelay: open ? `${index * 40}ms` : "0ms" }}
                  className={`group flex items-center justify-between rounded-2xl px-4 py-3.5 text-base font-medium transition duration-200 ${
                    isActive
                      ? "bg-[#46FF00]/10 text-[#46FF00] border border-[#46FF00]/20 font-bold"
                      : "text-slate-300 hover:bg-white/5 hover:text-white border border-transparent"
                  }`}
                >
                  <span>{item.label}</span>
                  <ArrowRight
                    size={16}
                    className={`transition-transform duration-200 group-hover:translate-x-1 ${isActive ? "text-[#46FF00]" : "text-slate-500"}`}
                  />
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Drawer CTA */}
        <div className="border-t border-white/10 p-5">
          <Link
            href="/lien-he/"
            onClick={() => setOpen(false)}
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#003566] px-5 py-4 text-base font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:border-[#46FF00] hover:shadow-[0_0_20px_rgba(70,255,0,0.2)] border border-[#46FF00]/20"
          >
            Đăng ký tư vấn miễn phí <ArrowRight size={18} />
          </Link>
          <p className="mt-3 text-center text-xs text-slate-500 font-inter">
            Hoặc gọi trực tiếp:{" "}
            <a href="tel:0909346660" className="font-bold text-slate-300 hover:text-[#46FF00] transition">
              0909 34 66 60
            </a>
          </p>
        </div>

        {/* Subtle neon glow at bottom */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#46FF00]/5 to-transparent" />
      </div>
    </>
  );
}
