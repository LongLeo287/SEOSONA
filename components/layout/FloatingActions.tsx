"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site";

const phoneDigits = siteConfig.phone.replace(/\D/g, "");

function ActionTooltip({ label }: { label: string }) {
  return (
    <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-full bg-slate-950 px-3 py-2 text-xs font-bold text-white opacity-0 shadow-xl shadow-slate-900/15 transition duration-200 group-hover:translate-x-0 group-hover:opacity-100">
      {label}
    </span>
  );
}

export function FloatingActions() {
  const [visible, setVisible] = useState(false);
  const [nearFooter, setNearFooter] = useState(false);

  useEffect(() => {
    const update = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const footer = document.querySelector("footer");
      const footerTop = footer?.getBoundingClientRect().top ?? Number.POSITIVE_INFINITY;

      setVisible(scrollY > 420);
      setNearFooter(footerTop < window.innerHeight - 80);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const wrapperState = visible && !nearFooter
    ? "translate-y-0 opacity-100"
    : "pointer-events-none translate-y-6 opacity-0";

  return (
    <div className={`fixed bottom-5 right-4 z-50 flex flex-col items-center gap-3 transition duration-300 ease-out sm:bottom-6 sm:right-6 ${wrapperState}`}>
      <button
        type="button"
        aria-label="Lên đầu trang"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="group relative grid h-12 w-12 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-xl shadow-slate-900/10 transition duration-200 hover:-translate-y-1 hover:scale-105 hover:border-blue-200 hover:text-blue-700 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-100 active:scale-95"
      >
        <ActionTooltip label="Lên đầu trang" />
        <ArrowUp size={20} className="transition group-hover:-translate-y-0.5" />
      </button>

      <a
        href={`https://zalo.me/${phoneDigits}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat Zalo với SEOSONA"
        className="group relative grid h-12 w-12 place-items-center rounded-full bg-[#0068ff] text-sm font-black text-white shadow-xl shadow-blue-700/25 ring-1 ring-white/20 transition duration-200 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl hover:shadow-blue-700/30 focus:outline-none focus:ring-4 focus:ring-blue-100 active:scale-95"
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
        className="group relative grid h-12 w-12 place-items-center rounded-full bg-[#1877f2] text-xl font-black text-white shadow-xl shadow-blue-700/25 ring-1 ring-white/20 transition duration-200 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl hover:shadow-blue-700/30 focus:outline-none focus:ring-4 focus:ring-blue-100 active:scale-95"
      >
        <span className="absolute inset-0 rounded-full bg-white/0 transition group-hover:bg-white/10" />
        <ActionTooltip label="Facebook" />
        <span className="relative transition group-hover:scale-110">f</span>
      </a>
    </div>
  );
}
