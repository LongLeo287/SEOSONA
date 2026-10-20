"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site";
import { requestScroll } from "@/lib/scroll";

const phoneDigits = siteConfig.phone.replace(/\D/g, "");

function ActionTooltip({ label }: { label: string }) {
  return (
    <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-slate-950 px-3 py-2 text-xs font-bold text-white opacity-0 shadow-xl shadow-slate-900/15 transition duration-200 group-hover:translate-x-0 group-hover:opacity-100 sm:block">
      {label}
    </span>
  );
}

export function FloatingActions() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const update = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;

      setShowBackToTop(scrollY > 360);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });

    return () => {
      window.removeEventListener("scroll", update);
    };
  }, []);

  return (
    <div
      data-floating-actions
      className={`fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] right-3 z-50 flex flex-col items-center rounded-full border border-white/70 bg-white/75 p-1 shadow-2xl shadow-slate-900/10 backdrop-blur-md transition-[gap] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] sm:bottom-6 sm:right-6 sm:p-2 ${showBackToTop ? "gap-1.5 sm:gap-3" : "gap-0"}`}
    >
      <div
        data-floating-back-to-top-slot
        className={`grid min-h-0 overflow-hidden transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${showBackToTop ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="min-h-0">
          <button
            type="button"
            data-floating-back-to-top
            aria-label="Lên đầu trang"
            aria-hidden={!showBackToTop}
            disabled={!showBackToTop}
            tabIndex={showBackToTop ? 0 : -1}
            onClick={() => requestScroll({ target: 0 })}
            className={`group relative grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-lg shadow-slate-900/10 transition-[opacity,transform,box-shadow,color,border-color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:scale-105 hover:border-blue-200 hover:text-blue-700 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-100 active:scale-95 sm:h-12 sm:w-12 ${showBackToTop ? "translate-y-0 scale-100 opacity-100" : "pointer-events-none -translate-y-3 scale-90 opacity-0"}`}
          >
            <ActionTooltip label="Lên đầu trang" />
            <ArrowUp size={20} className="transition group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>

      <a
        href={`https://zalo.me/${phoneDigits}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat Zalo với SEOSONA"
        className="group relative grid h-11 w-11 place-items-center rounded-full bg-[#0068ff] text-xs font-black text-white shadow-lg shadow-blue-700/25 ring-1 ring-white/20 transition duration-200 hover:-translate-y-0.5 hover:scale-105 hover:shadow-xl hover:shadow-blue-700/30 focus:outline-none focus:ring-4 focus:ring-blue-100 active:scale-95 sm:h-12 sm:w-12 sm:text-sm"
      >
        <span className="absolute inset-0 rounded-full bg-white/0 transition group-hover:bg-white/10" />
        <ActionTooltip label="Chat Zalo" />
        <span className="relative transition group-hover:scale-105">Zalo</span>
      </a>

      <a
        href={siteConfig.socials.facebook}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook SEOSONA"
        className="group relative grid h-11 w-11 place-items-center rounded-full bg-[#1877f2] text-white shadow-lg shadow-blue-700/25 ring-1 ring-white/20 transition duration-200 hover:-translate-y-0.5 hover:scale-105 hover:shadow-xl hover:shadow-blue-700/30 focus:outline-none focus:ring-4 focus:ring-blue-100 active:scale-95 sm:h-12 sm:w-12"
      >
        <span className="absolute inset-0 rounded-full bg-white/0 transition group-hover:bg-white/10" />
        <ActionTooltip label="Facebook" />
        <span className="relative text-xl font-black leading-none transition group-hover:scale-110">f</span>
      </a>
    </div>
  );
}
