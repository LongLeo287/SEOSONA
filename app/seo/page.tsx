import type { Metadata } from "next";
import Link from "next/link";
import { seoHubs } from "@/data/seo-hubs";
import { PageHero } from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "Thư viện kiến thức SEO có hệ thống | SEOSONA",
  description:
    "Thư viện kiến thức SEO từ cơ bản đến nâng cao: technical SEO, onpage, content, offpage, keyword research, công cụ SEO và cập nhật thuật toán Google.",
  alternates: { canonical: "/seo/" }
};

export default function Page() {
  return (
    <main>
      <PageHero
        eyebrow="Kiến thức SEO"
        title="Thư Viện Kiến Thức SEO Hệ Thống"
        accentWord="SEO Hệ Thống"
        description="Hub tài liệu từ cơ bản đến nâng cao: technical SEO, onpage, content, offpage, keyword research và Google Algorithms."
      />
      <div className="bg-[#F8FAFC] py-12 lg:py-16 text-[#04091A]">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {Object.entries(seoHubs).map(([slug, hub]) => (
              <Link 
                href={`/seo/${slug}/`} 
                key={slug} 
                className="group relative flex h-full flex-col overflow-hidden rounded-[32px] border border-slate-200/80 bg-white p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-[#3BA6F1]/30 hover:shadow-[0_12px_40px_rgba(59,166,241,0.12)]"
              >
                {/* Subtle Top Glow on Hover */}
                <div className="absolute left-1/2 top-0 h-[2px] w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#3BA6F1] to-transparent opacity-0 transition-all duration-500 group-hover:w-full group-hover:opacity-100" />
                
                <h2 className="text-xl font-bold tracking-tight text-[#04091A] transition-colors duration-300 group-hover:text-[#3BA6F1]">
                  {hub.title}
                </h2>
                <p className="mt-3 flex-1 text-base leading-relaxed text-slate-500">
                  {hub.description}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-[15px] font-bold text-[#3BA6F1]">
                  Xem chi tiết 
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
