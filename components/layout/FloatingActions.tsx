import { ArrowUp } from "lucide-react";
import { siteConfig } from "@/lib/site";

const phoneDigits = siteConfig.phone.replace(/\D/g, "");

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-4 z-50 flex flex-col items-center gap-3 sm:bottom-6 sm:right-6">
      <a
        href="#top"
        aria-label="Lên đầu trang"
        className="group grid h-12 w-12 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-xl shadow-slate-900/10 transition hover:-translate-y-1 hover:border-blue-200 hover:text-blue-700 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-100"
      >
        <ArrowUp size={20} className="transition group-hover:-translate-y-0.5" />
      </a>

      <a
        href={`https://zalo.me/${phoneDigits}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat Zalo với SEOSONA"
        className="group grid h-12 w-12 place-items-center rounded-full bg-[#0068ff] text-sm font-black text-white shadow-xl shadow-blue-700/25 transition hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-100"
      >
        <span className="transition group-hover:scale-105">Zalo</span>
      </a>

      <a
        href={siteConfig.socials.facebook}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook SEOSONA"
        className="group grid h-12 w-12 place-items-center rounded-full bg-[#1877f2] text-xl font-black text-white shadow-xl shadow-blue-700/25 transition hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-100"
      >
        <span className="transition group-hover:scale-110">f</span>
      </a>
    </div>
  );
}
