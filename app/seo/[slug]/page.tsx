import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

const hubData = {
  "co-ban": {
    title: "SEO cơ bản",
    description: "Nền tảng SEO cho người mới: cách Google hoạt động, keyword, onpage, technical và đo lường.",
    topics: ["SEO là gì", "Google crawl và index", "Keyword intent", "Onpage cơ bản", "Đo lường SEO"]
  },
  "tong-hop": {
    title: "SEO tổng hợp",
    description: "Hướng dẫn tổng hợp về chiến lược SEO, quy trình triển khai và quản trị tăng trưởng organic.",
    topics: ["SEO roadmap", "Topic cluster", "Content plan", "SEO audit", "KPI SEO"]
  },
  "keyword-research": {
    title: "Keyword Research",
    description: "Nghiên cứu từ khóa, search intent, semantic SEO, long-tail keyword và topical map.",
    topics: ["Search intent", "Semantic keyword", "Long-tail keyword", "Keyword mapping", "Content gap"]
  },
  "onpage": {
    title: "SEO Onpage",
    description: "Tối ưu title, heading, internal link, entity, UX, media và cấu trúc nội dung trên trang.",
    topics: ["Title tag", "Heading", "Internal link", "Entity", "UX content"]
  },
  "content": {
    title: "Content SEO",
    description: "Xây dựng nội dung SEO theo chiến lược, đáp ứng intent và có khả năng xếp hạng bền vững.",
    topics: ["Content brief", "Topical authority", "FAQ", "Content update", "Editorial workflow"]
  },
  "technical": {
    title: "SEO Technical",
    description: "Technical SEO: crawl, index, sitemap, robots, canonical, redirect, Core Web Vitals và schema.",
    topics: ["Sitemap", "Robots.txt", "Canonical", "Redirect", "Core Web Vitals"]
  },
  "offpage": {
    title: "SEO Offpage",
    description: "Authority, digital PR, backlink quality, brand mention, entity và tín hiệu ngoài website.",
    topics: ["Backlink quality", "Digital PR", "Brand mention", "Entity", "Anchor text"]
  },
  "cong-cu": {
    title: "Công cụ SEO",
    description: "Bộ công cụ SEO phục vụ nghiên cứu từ khóa, audit technical, tracking và reporting.",
    topics: ["Google Search Console", "GA4", "Screaming Frog", "Ahrefs", "Looker Studio"]
  },
  "thuat-ngu": {
    title: "Thuật ngữ SEO",
    description: "Từ điển thuật ngữ SEO giúp chuẩn hóa kiến thức cho marketer, content và business owner.",
    topics: ["Crawl", "Index", "Ranking", "SERP", "Canonical"]
  },
  "thuat-toan-google": {
    title: "Thuật toán Google",
    description: "Cập nhật và giải thích các thuật toán Google theo hướng dễ hiểu, ứng dụng được vào SEO.",
    topics: ["Core Update", "Helpful Content", "Spam Update", "Page Experience", "E-E-A-T"]
  }
} as const;

type HubSlug = keyof typeof hubData;

export function generateStaticParams() {
  return Object.keys(hubData).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const hub = hubData[params.slug as HubSlug];
  if (!hub) return {};
  return { title: hub.title, description: hub.description };
}

export default function Page({ params }: { params: { slug: string } }) {
  const hub = hubData[params.slug as HubSlug];
  if (!hub) notFound();

  return (
    <main className="container py-20">
      <Link href="/seo/" className="font-bold text-blue-600">← Kiến thức SEO</Link>
      <h1 className="mt-6 text-5xl font-black tracking-tight text-slate-950">{hub.title}</h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">{hub.description}</p>
      <section className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {hub.topics.map((topic) => (
          <article key={topic} className="card p-6">
            <h2 className="text-2xl font-black text-slate-950">{topic}</h2>
            <p className="mt-3 leading-7 text-slate-600">Bài viết sẽ được migrate từ WordPress cũ hoặc viết lại sạch theo content brief mới.</p>
          </article>
        ))}
      </section>
    </main>
  );
}
