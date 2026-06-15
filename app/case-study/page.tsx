import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site";
import { TrendingUp, BarChart2, Users, Zap } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { CtaBand } from "@/components/sections/CtaBand";
import { PageHero } from "@/components/sections/PageHero";

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

      <PageHero
        eyebrow="Case Study thực chiến"
        title="Kết quả SEO đến từ chiến lược có hệ thống"
        accentWord="chiến lược có hệ thống"
        description="Mỗi ngành có mức độ cạnh tranh, hành trình tìm kiếm và cơ hội chuyển đổi khác nhau. SEOSONA xây roadmap theo dữ liệu thay vì triển khai theo cảm tính."
      />

      {/* Stats row */}
      <section className="bg-white pb-12 lg:pb-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mt-[-2rem] relative z-10 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center justify-center rounded-[24px] border border-slate-200/80 bg-[#F8FAFC]/80 p-6 shadow-sm backdrop-blur-md">
                <div className="text-3xl font-black text-[#3BA6F1]">{stat.value}</div>
                <div className="mt-2 text-xs font-bold uppercase tracking-widest text-slate-500 text-center">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Grid */}
      <section className="bg-[#F8FAFC] py-14 sm:py-16 lg:py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {cases.map((item, index) => {
              const Icon = item.icon;
              return (
                <RevealOnScroll key={item.industry} delay={index * 80}>
                  <div className="group relative flex h-full flex-col overflow-hidden rounded-[32px] border border-slate-200/80 bg-white p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-[#3BA6F1]/30 hover:shadow-[0_12px_40px_rgba(59,166,241,0.12)]">
                    {/* Subtle Top Glow on Hover */}
                    <div className="absolute left-1/2 top-0 h-[2px] w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#3BA6F1] to-transparent opacity-0 transition-all duration-500 group-hover:w-full group-hover:opacity-100" />

                    {/* Top row */}
                    <div className="relative mb-6 flex items-start justify-between">
                      <div
                        className="grid h-12 w-12 place-items-center rounded-2xl transition-all duration-300 group-hover:scale-110"
                        style={{
                          background: `#3BA6F115`,
                          border: `1px solid #3BA6F130`,
                          color: `#3BA6F1`,
                        }}
                      >
                        <Icon size={22} />
                      </div>
                      <div className="text-4xl font-black text-[#04091A]">
                        {item.metric}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative flex flex-1 flex-col">
                      <div className="mb-1 text-xs font-bold uppercase tracking-widest text-[#3BA6F1]">
                        {item.industry}
                      </div>
                      <h2 className="text-[19px] font-bold text-[#04091A] text-balance transition-colors duration-300 group-hover:text-[#3BA6F1]">
                        {item.result}
                      </h2>
                      <p className="mt-3 flex-1 text-[15px] leading-relaxed text-slate-500 text-pretty">
                        {item.detail}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex rounded-full border border-slate-200 bg-[#F8FAFC] px-3 py-1 text-xs font-bold text-slate-500"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
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
