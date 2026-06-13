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
      <div className="container py-20">
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(seoHubs).map(([slug, hub]) => (
            <Link href={`/seo/${slug}/`} key={slug} className="card-dark p-6 group block">
              <h2 className="text-2xl font-black text-white group-hover:text-[#46FF00] transition text-balance">{hub.title}</h2>
              <p className="mt-3 text-slate-400 leading-7 text-pretty">{hub.description}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-[#46FF00] group-hover:underline">
                Xem chi tiết →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
