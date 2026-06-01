import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kiến thức SEO",
  description: "Thư viện kiến thức SEO: cơ bản, technical, onpage, content, offpage, keyword research, công cụ và thuật toán Google."
};

const hubs = ["co-ban", "tong-hop", "keyword-research", "onpage", "content", "technical", "offpage", "cong-cu", "thuat-ngu", "thuat-toan-google"];

export default function Page() {
  return (
    <main className="container py-20">
      <h1 className="text-5xl font-black">Kiến thức SEO</h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
        Hub mới gom lại toàn bộ topical map SEO, tránh URL rời rạc và giúp mở rộng content lâu dài.
      </p>
      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {hubs.map((hub) => (
          <div key={hub} className="card p-6">
            <h2 className="text-2xl font-black">{hub}</h2>
            <p className="mt-3 text-slate-600">Cụm nội dung sẽ được chuẩn hóa metadata, breadcrumb và related posts.</p>
          </div>
        ))}
      </div>
    </main>
  );
}
