import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";

const cases = [
  { industry: "Nội thất", metric: "+180%", result: "Tăng trưởng organic", detail: "Tối ưu cấu trúc danh mục, content hub và internal link theo hành trình mua hàng." },
  { industry: "Giáo dục", metric: "12+", result: "Cụm nội dung", detail: "Xây cụm nội dung tuyển sinh, khóa học và tư vấn theo search intent." },
  { industry: "B2B", metric: "Lead", result: "Tăng chất lượng", detail: "Kết hợp SEO technical, landing page, tracking và nội dung chuyển đổi." }
];

export function CaseStudyPreview() {
  return (
    <section className="py-16 lg:py-20">
      <div className="container">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <span className="font-bold text-blue-600">Case study</span>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950">Kết quả đến từ chiến lược SEO có hệ thống</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">SEOSONA triển khai SEO theo ngành, theo mức độ cạnh tranh và theo mục tiêu kinh doanh thực tế của từng doanh nghiệp.</p>
          </div>
          <Link href="/case-study/" className="btn-secondary">Xem case study <ArrowRight size={18} /></Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {cases.map((item) => (
            <Link href="/case-study/" key={item.industry} className="card group relative overflow-hidden p-6 transition hover:-translate-y-1 hover:border-blue-200">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-100/70 transition group-hover:scale-125" />
              <div className="relative mb-6 flex items-center justify-between">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-blue-50 text-blue-600">
                  <TrendingUp />
                </div>
                <div className="text-4xl font-black text-blue-600">{item.metric}</div>
              </div>
              <div className="relative text-sm font-bold uppercase tracking-[0.2em] text-blue-600">{item.industry}</div>
              <h3 className="relative mt-3 text-2xl font-black text-slate-950">{item.result}</h3>
              <p className="relative mt-3 leading-7 text-slate-600">{item.detail}</p>
              <span className="relative mt-6 inline-flex items-center gap-2 font-bold text-blue-600">Xem chi tiết <ArrowRight size={16} /></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
