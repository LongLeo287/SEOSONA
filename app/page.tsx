import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import Link from "next/link";

const hubs = [
  "SEO cơ bản", "SEO tổng hợp", "Keyword Research", "SEO Onpage", "Content SEO", "SEO Technical", "SEO Offpage", "Công cụ SEO", "Thuật ngữ SEO", "Thuật toán Google"
];

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <section className="bg-white py-20">
        <div className="container grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <span className="font-bold text-blue-600">Knowledge hub</span>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950">Xây lại topical map SEO sạch và dễ mở rộng</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">Các hub cũ sẽ được chuẩn hóa URL, redirect 301, thêm breadcrumb, TOC, schema và hệ thống related posts để giữ internal link equity.</p>
            <Link href="/seo/" className="mt-7 inline-flex rounded-full bg-slate-950 px-6 py-4 font-bold text-white">Xem thư viện SEO</Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {hubs.map((hub) => <div key={hub} className="rounded-3xl border border-slate-200 bg-slate-50 p-5 font-bold text-slate-800">{hub}</div>)}
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container rounded-[32px] bg-gradient-to-br from-blue-600 via-cyan-500 to-violet-600 p-10 text-white md:p-16">
          <h2 className="max-w-3xl text-4xl font-black tracking-tight md:text-5xl">Rebuild không copy lỗi cũ: sạch spam, sạch shortcode, sạch 404.</h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-blue-50">Ưu tiên của bản mới là bảo mật, hiệu suất, SEO technical, conversion và migration an toàn từ WordPress sang Next.js/Vercel.</p>
          <Link href="/lien-he/" className="mt-8 inline-flex rounded-full bg-white px-6 py-4 font-black text-blue-700">Bắt đầu tư vấn</Link>
        </div>
      </section>
    </main>
  );
}
