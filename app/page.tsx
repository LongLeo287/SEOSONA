import { AboutPreview } from "@/components/sections/AboutPreview";
import { CaseStudyPreview } from "@/components/sections/CaseStudyPreview";
import { ClientLogoGrid } from "@/components/sections/ClientLogoGrid";
import { FeaturedPosts } from "@/components/sections/FeaturedPosts";
import { Hero } from "@/components/sections/Hero";
import { HomeFinalCta } from "@/components/sections/HomeFinalCta";
import { PressLogoGrid } from "@/components/sections/PressLogoGrid";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhyChoose } from "@/components/sections/WhyChoose";
import Link from "next/link";

const hubs = [
  "SEO cơ bản", "SEO tổng hợp", "Nghiên cứu từ khóa", "SEO Onpage", "Content SEO", "SEO Technical", "SEO Offpage", "Công cụ SEO", "Thuật ngữ SEO", "Thuật toán Google"
];

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ClientLogoGrid />
      <Services />
      <WhyChoose />
      <AboutPreview />
      <CaseStudyPreview />
      <section className="bg-white py-20">
        <div className="container grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <span className="font-bold text-blue-600">Thư viện SEO</span>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950">Kiến thức SEO có hệ thống</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">SEOSONA xây dựng các cụm nội dung SEO từ nền tảng đến chuyên sâu, giúp doanh nghiệp hiểu và triển khai SEO bài bản hơn.</p>
            <Link href="/seo/" className="btn-secondary mt-7">Xem thư viện SEO</Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {hubs.map((hub) => <div key={hub} className="rounded-3xl border border-slate-200 bg-slate-50 p-5 font-bold text-slate-800 transition hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-lg">{hub}</div>)}
          </div>
        </div>
      </section>
      <Testimonials />
      <PressLogoGrid />
      <FeaturedPosts />
      <HomeFinalCta />
    </main>
  );
}
