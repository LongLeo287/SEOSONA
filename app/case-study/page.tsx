import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site";
import { TrendingUp, BarChart2, Users, Zap } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "Case Study SEO thực chiến theo ngành | SEOSONA",
  description:
    "Xem case study SEO thực chiến của SEOSONA theo từng ngành: nội thất, giáo dục, dược phẩm, logistics, B2B. Kết quả đo lường bằng GSC và GA4.",
  alternates: { canonical: "/case-study/" }
};

const cases = [
  {
    industry: "Nội thất",
    metric: "+180%",
    result: "Tăng trưởng organic",
    detail: "Tối ưu danh mục, content hub và internal link theo hành trình mua hàng nội thất.",
    tags: ["Cấu trúc website", "Content hub", "Internal link"],
    icon: TrendingUp,
    color: "#46FF00"
  },
  {
    industry: "Giáo dục",
    metric: "12+",
    result: "Cụm nội dung tuyển sinh",
    detail: "Xây cụm nội dung khóa học, tư vấn và landing page theo search intent.",
    tags: ["Topical map", "Search intent", "Landing page"],
    icon: BarChart2,
    color: "#00D4FF"
  },
  {
    industry: "B2B",
    metric: "×3",
    result: "Tăng chất lượng lead",
    detail: "Kết hợp technical SEO, landing page, tracking và nội dung chuyển đổi cho B2B.",
    tags: ["Technical SEO", "Conversion", "Tracking"],
    icon: Zap,
    color: "#FFB800"
  },
  {
    industry: "Dược phẩm",
    metric: "+95%",
    result: "Tăng traffic chất lượng",
    detail: "Xây authority, content y tế chuẩn E-E-A-T và tối ưu topical cluster cho ngành dược.",
    tags: ["E-E-A-T", "Authority", "Content cluster"],
    icon: TrendingUp,
    color: "#FF6B6B"
  },
  {
    industry: "Logistics",
    metric: "Top 3",
    result: "Từ khóa cạnh tranh cao",
    detail: "Tối ưu kỹ thuật, xây backlink có kiểm soát và content hub về vận chuyển hàng hóa.",
    tags: ["Technical", "Backlink", "Content hub"],
    icon: BarChart2,
    color: "#46FF00"
  },
  {
    industry: "Luật",
    metric: "+220%",
    result: "Lượng truy cập organic",
    detail: "Xây topical authority về pháp lý, FAQ schema và local SEO cho văn phòng luật.",
    tags: ["Topical authority", "FAQ schema", "Local SEO"],
    icon: Users,
    color: "#C8005A"
  }
];

const stats = [
  { value: "180+", label: "Dự án đã triển khai" },
  { value: "95%", label: "Khách hàng đạt KPI" },
  { value: "12+", label: "Ngành khác nhau" },
  { value: "3–6", label: "Tháng thấy kết quả" },
];

export default async function Page() {
  // Simulate fetching data from a database or API
  await new Promise((resolve) => setTimeout(resolve, 2500));

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Case Study SEO thực chiến SEOSONA",
    description: "Danh sách case study SEO theo ngành của SEOSONA.",
    url: `${siteConfig.domain}/case-study/`,
    numberOfItems: cases.length,
    itemListElement: cases.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: `Case Study SEO ngành ${item.industry}: ${item.result}`,
      description: item.detail
    }))
  };

  return (
    <main>
      <JsonLd data={itemListSchema} />

      {/* Hero — Dark */}
      <section className="relative overflow-hidden bg-[#091338] py-20 sm:py-24 lg:py-32">
        <div className="bg-grid-tech absolute inset-0 opacity-30 hidden md:block" />
        <div className="absolute left-0 top-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#003566] opacity-40 blur-[120px] hidden md:block" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] translate-x-1/3 translate-y-1/3 rounded-full bg-[#46FF00] opacity-8 blur-[100px] hidden md:block" />


        <div className="container relative text-center">
          <div className="badge-accent mx-auto mb-6 inline-flex">
            <span className="h-1.5 w-1.5 rounded-full bg-[#46FF00]" />
            Case Study thực chiến
          </div>
          <h1 className="mx-auto max-w-4xl text-4xl font-black leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl text-balance">
            Kết quả SEO đến từ{" "}
            <span className="animate-text-shimmer">chiến lược có hệ thống</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg text-pretty">
            Mỗi ngành có mức độ cạnh tranh, hành trình tìm kiếm và cơ hội chuyển đổi khác nhau.
            SEOSONA xây roadmap theo dữ liệu thay vì triển khai theo cảm tính.
          </p>

          {/* Stats row */}
          <div className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="card-dark p-5">
                <div className="text-3xl font-black text-[#46FF00]">{stat.value}</div>
                <div className="mt-1 text-xs font-semibold text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#F4F6F8] to-transparent" />
      </section>

      {/* Case Study Grid */}
      <section className="bg-[#F4F6F8] py-14 sm:py-16 lg:py-20">
        <div className="container">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {cases.map((item, index) => {
              const Icon = item.icon;
              return (
                <RevealOnScroll key={item.industry} delay={index * 80}>
                  <div className="card group relative h-full overflow-hidden p-7">
                    {/* Orb */}
                    <div
                      className="absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-10 blur-xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-20"
                      style={{ background: item.color }}
                    />

                    {/* Top row */}
                    <div className="relative mb-6 flex items-start justify-between">
                      <div
                        className="grid h-12 w-12 place-items-center rounded-2xl transition-all duration-300 group-hover:scale-110"
                        style={{
                          background: `${item.color}18`,
                          border: `1px solid ${item.color}30`,
                          color: item.color,
                        }}
                      >
                        <Icon size={22} />
                      </div>
                      <div
                        className="text-4xl font-black"
                        style={{ color: item.color }}
                      >
                        {item.metric}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative">
                      <div className="mb-1 text-xs font-black uppercase tracking-[0.18em] text-slate-400">
                        {item.industry}
                      </div>
                      <h2 className="text-xl font-black text-[#091338] text-balance">{item.result}</h2>
                      <p className="mt-2 text-sm leading-7 text-slate-600 text-pretty">{item.detail}</p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-bold text-slate-500"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom accent line */}
                    <div
                      className="relative mt-5 h-0.5 w-8 rounded-full transition-all duration-500 group-hover:w-full"
                      style={{ background: `linear-gradient(to right, ${item.color}, transparent)` }}
                    />
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
