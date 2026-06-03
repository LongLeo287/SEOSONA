import type { Metadata } from "next";
import Link from "next/link";
import { seoHubs } from "@/data/seo-hubs";

export const metadata: Metadata = {
  title: "Kiến thức SEO",
  description: "Thư viện kiến thức SEO: cơ bản, technical, onpage, content, offpage, keyword research, công cụ và thuật toán Google."
};

export default function Page() {
  return (
    <main className="container py-20">
      <h1 className="text-5xl font-black">Kiến thức SEO</h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
        Hub mới gom lại toàn bộ topical map SEO, tránh URL rời rạc và giúp mở rộng content lâu dài.
      </p>
      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(seoHubs).map(([slug, hub]) => (
          <Link href={`/seo/${slug}/`} key={slug} className="card p-6 group hover:-translate-y-1 hover:border-blue-200">
            <h2 className="text-2xl font-black text-slate-950 group-hover:text-blue-600 transition">{hub.title}</h2>
            <p className="mt-3 text-slate-600 leading-7">{hub.description}</p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-blue-600 group-hover:underline">
              Xem chi tiết →
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
