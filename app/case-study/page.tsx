import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site";
import { ArrowRight, TrendingUp } from "lucide-react";

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
    tags: ["Cấu trúc website", "Content hub", "Internal link"]
  },
  {
    industry: "Giáo dục",
    metric: "12+",
    result: "Cụm nội dung tuyển sinh",
    detail: "Xây cụm nội dung khóa học, tư vấn và landing page theo search intent.",
    tags: ["Topical map", "Search intent", "Landing page"]
  },
  {
    industry: "B2B",
    metric: "×3",
    result: "Tăng chất lượng lead",
    detail: "Kết hợp technical SEO, landing page, tracking và nội dung chuyển đổi cho B2B.",
    tags: ["Technical SEO", "Conversion", "Tracking"]
  },
  {
    industry: "Dược phẩm",
    metric: "+95%",
    result: "Tăng traffic chất lượng",
    detail: "Xây authority, content y tế chuẩn E-E-A-T và tối ưu topical cluster cho ngành dược.",
    tags: ["E-E-A-T", "Authority", "Content cluster"]
  },
  {
    industry: "Logistics",
    metric: "Top 3",
    result: "Từ khóa cạnh tranh cao",
    detail: "Tối ưu kỹ thuật, xây backlink có kiểm soát và content hub về vận chuyển hàng hóa.",
    tags: ["Technical", "Backlink", "Content hub"]
  },
  {
    industry: "Luật",
    metric: "+220%",
    result: "Lượng truy cập organic",
    detail: "Xây topical authority về pháp lý, FAQ schema và local SEO cho văn phòng luật.",
    tags: ["Topical authority", "FAQ schema", "Local SEO"]
  }
];

export default function Page() {
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
      <section className="relative overflow-hidden bg-white py-16 sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(21,94,239,.10),transparent_30%),radial-gradient(circle_at_80%_80%,rgba(6,182,212,.08),transparent_26%)]" />
        <div className="container relative text-center">
          <span className="badge">Case Study thực chiến</span>
          <h1 className="mx-auto mt-5 max-w-4xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl md:text-6xl">
            Kết quả SEO đến từ chiến lược{" "}
            <span className="gradient-text">có hệ thống</span>
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            Mỗi ngành có mức độ cạnh tranh, hành trình tìm kiếm và cơ hội chuyển đổi khác nhau.
            SEOSONA xây roadmap theo dữ liệu thay vì triển khai theo cảm tính.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-14 sm:py-16 lg:py-20">
        <div className="container">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {cases.map((item) => (
              <div
                key={item.industry}
                className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
              >
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-50 transition duration-500 group-hover:scale-150 group-hover:bg-cyan-50" />
                <div className="relative mb-5 flex items-center justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-blue-700 transition group-hover:bg-blue-600 group-hover:text-white">
                    <TrendingUp size={22} />
                  </div>
                  <div className="text-4xl font-black text-blue-600">{item.metric}</div>
                </div>
                <div className="relative">
                  <div className="text-xs font-black uppercase tracking-[0.18em] text-blue-700">{item.industry}</div>
                  <h2 className="mt-2 text-xl font-black text-slate-950">{item.result}</h2>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{item.detail}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="inline-flex rounded-full bg-slate-50 px-3 py-1 text-xs font-bold text-slate-600">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="container overflow-hidden rounded-[28px] bg-slate-950 p-8 text-center text-white shadow-2xl sm:rounded-[36px] sm:p-12">
          <h2 className="text-3xl font-black sm:text-4xl">Bạn muốn kết quả tương tự?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300 leading-8">
            Đăng ký để SEOSONA audit nhanh hiện trạng SEO, xác định cơ hội tăng trưởng và đề xuất roadmap phù hợp.
          </p>
          <Link href="/lien-he/" className="btn-primary mt-8 inline-flex">
            Nhận tư vấn miễn phí <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
