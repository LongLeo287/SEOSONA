"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { X, Menu, ArrowRight, ChevronDown, Bot, GraduationCap, ExternalLink } from "lucide-react";
import { BrandLogo } from "@/components/layout/BrandLogo";
import { navItems } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // eslint-disable-next-line react-hooks/set-state-in-effect
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

          {/* Logo & Ecosystem Dropdown */}
          <div className="relative group/logo cursor-pointer flex-shrink-0 z-50">
            {/* The Logo Trigger */}
            <div className="flex items-center transition-transform hover:scale-105 py-2">
              <BrandLogo variant="dark" />
            </div>

            {/* Dropdown Panel */}
            <div className="absolute top-full left-0 pt-3 opacity-0 invisible scale-95 origin-top-left group-hover/logo:opacity-100 group-hover/logo:visible group-hover/logo:scale-100 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]">
              <div className="w-[240px] sm:w-[260px] rounded-[20px] bg-white p-2 shadow-[0_10px_40px_rgb(0,0,0,0.08)] flex flex-col gap-2 relative ring-1 ring-slate-100 border border-slate-100/50">
                
                {/* Card 1: Sonatools */}
                <Link href="https://sonatools.io" target="_blank" className="group/card flex items-center justify-center rounded-[14px] bg-slate-50/80 py-4 sm:py-5 transition-all duration-300 hover:bg-slate-100 hover:shadow-inner relative overflow-hidden">
                  {/* Subtle hover effect background */}
                  <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
                  
                  {/* Standardized Logo Size (Matching SEOSONA) */}
                  <img 
                    src="/images/brand/sonatools.png" 
                    alt="Sonatools" 
                    className="w-[132px] sm:w-[148px] md:w-[160px] h-auto max-h-12 object-contain transition-transform duration-500 group-hover/card:scale-105 relative z-10" 
                  />
                </Link>

                {/* Card 2: Chí Quyết Academy */}
                <Link href="/chi-quyet-academy" className="group/card flex items-center justify-center rounded-[14px] bg-slate-50/80 py-4 sm:py-5 transition-all duration-300 hover:bg-slate-100 hover:shadow-inner relative overflow-hidden">
                  {/* Subtle hover effect background */}
                  <div className="absolute inset-0 bg-indigo-500/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
                  
                  {/* Standardized Logo Size (Matching SEOSONA) */}
                  <img 
                    src="/images/brand/Chi Quyet Academy Mascot Logo.png" 
                    alt="CQ Academy" 
                    className="w-[132px] sm:w-[148px] md:w-[160px] h-auto max-h-12 object-contain transition-transform duration-500 group-hover/card:scale-105 relative z-10" 
                  />
                </Link>

              </div>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-0 xl:gap-1 lg:flex bg-white/50 border border-slate-200/60 rounded-full px-1.5 py-1.5 shadow-sm backdrop-blur-md" aria-label="Main menu">
            {navItems.filter(i => i.href !== "/lien-he/").map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href)) ||
                Boolean(item.children?.some((child) => pathname === child.href || (child.href !== "/" && pathname.startsWith(child.href))));

              if (item.children) {
                return (
                  <div key={item.href} className="group relative">
                    <Link
                      href={item.href}
                      className={`flex items-center gap-1 rounded-full px-3 xl:px-4 py-2 text-[13px] xl:text-[14px] font-bold transition-all duration-300 ${
                        isActive
                          ? "bg-[#1D4ED8] text-white shadow-md shadow-blue-500/20"
                          : "text-slate-600 hover:bg-[#F0F6FF] hover:text-[#1D4ED8]"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown size={14} className={`transition-transform duration-300 group-hover:rotate-180 ${isActive ? "text-white" : "text-slate-400 group-hover:text-[#1D4ED8]"}`} />
                    </Link>
                    {/* Dropdown Box */}
                    <div className="absolute top-full left-0 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-50">
                      <div className="w-[260px] rounded-2xl bg-white border border-slate-100 p-2 shadow-[0_12px_40px_rgba(0,0,0,0.08)] flex flex-col gap-1 relative overflow-hidden">
                        {item.children.map(child => {
                          const isChildActive = pathname === child.href;
                          return (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={`px-4 py-2.5 text-[14px] font-semibold rounded-xl transition-colors ${
                                isChildActive ? "bg-[#F0F6FF] text-[#1D4ED8]" : "text-slate-600 hover:bg-[#F0F6FF] hover:text-[#1D4ED8]"
                              }`}
                            >
                              {child.label}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group relative rounded-full px-3 xl:px-4 py-2 text-[13px] xl:text-[14px] font-bold transition-all duration-300 ${
                    isActive
                      ? "bg-[#1D4ED8] text-white shadow-md shadow-blue-500/20"
                      : "text-slate-600 hover:bg-[#F0F6FF] hover:text-[#1D4ED8]"
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
              className="hidden sm:flex h-11 items-center justify-center gap-2 rounded-full bg-[#1D4ED8] px-6 text-[14px] font-bold text-white transition-all hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/25 group"
            >
              Liên hệ chuyên gia
            </Link>

            {/* Mobile hamburger */}
            <button
              type="button"
              aria-label={open ? "Đóng menu" : "Mở menu"}
              aria-expanded={open}
              onClick={() => setOpen(!open)}
              className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white text-[#04091A] transition hover:bg-[#F0F6FF] hover:text-[#1D4ED8] hover:border-[#1D4ED8]/30 lg:hidden shadow-sm"
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
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href)) ||
                Boolean(item.children?.some((child) => pathname === child.href || (child.href !== "/" && pathname.startsWith(child.href))));

              if (item.children) {
                return (
                  <div key={item.href} className="flex flex-col gap-1" style={{ transitionDelay: open ? `${index * 40}ms` : "0ms" }}>
                    <div className={`group flex items-center justify-between rounded-2xl px-5 py-3 text-[15px] font-bold ${isActive ? "bg-[#1D4ED8]/10 text-[#1D4ED8]" : "bg-slate-50/50 text-slate-800"}`}>
                      <span>{item.label}</span>
                    </div>
                    <div className="flex flex-col gap-1 pl-4 pr-2 border-l-2 border-slate-100 ml-4 mb-2 mt-1">
                      {item.children.map(child => {
                        const isChildActive = pathname === child.href;
                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setOpen(false)}
                            className={`px-4 py-2.5 text-[14px] font-semibold rounded-xl transition-colors ${
                              isChildActive ? "bg-[#F0F6FF] text-[#1D4ED8]" : "text-slate-600 hover:bg-[#F0F6FF] hover:text-[#1D4ED8]"
                            }`}
                          >
                            {child.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  style={{ transitionDelay: open ? `${index * 40}ms` : "0ms" }}
                  className={`group flex items-center justify-between rounded-2xl px-5 py-4 text-[15px] font-bold transition-all duration-300 ${
                    isActive
                      ? "bg-[#1D4ED8] text-white shadow-md shadow-blue-500/20"
                      : "bg-transparent text-slate-600 hover:bg-[#F0F6FF] hover:text-[#1D4ED8]"
                  }`}
                >
                  <span>{item.label}</span>
                  <ArrowRight
                    size={18}
                    className={`transition-transform duration-300 group-hover:translate-x-1 ${isActive ? "text-white opacity-100" : "text-[#1D4ED8] opacity-0 group-hover:opacity-100"}`}
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
            className="flex h-14 w-full items-center justify-center gap-2 rounded-full bg-[#1D4ED8] px-6 text-[15px] font-bold text-white transition-all hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/25"
          >
            Liên hệ chuyên gia <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </>
  );
}
