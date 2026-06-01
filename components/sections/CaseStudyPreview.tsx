import Link from "next/link";
import { ArrowRight, BarChart3, CheckCircle2, TrendingUp } from "lucide-react";

const cases = [
  {
    industry: "Nội thất",
    metric: "+180%",
    result: "Tăng trưởng organic",
    detail: "Tối ưu danh mục, content hub và internal link theo hành trình mua hàng.",
    focus: "Cấu trúc website + Content hub"
  },
  {
    industry: "Giáo dục",
    metric: "12+",
    result: "Cụm nội dung tuyển sinh",
    detail: "Xây cụm nội dung khóa học, tư vấn và landing page theo search intent.",
    focus: "Topical map + Search intent"
  },
  {
    industry: "B2B",
    metric: "Lead",
    result: "Tăng chất lượng khách hàng",
    detail: "Kết hợp technical SEO, landing page, tracking và nội dung chuyển đổi.",
    focus: "Technical SEO + Conversion"
  }
];

export function CaseStudyPreview() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-14 sm:py-16 lg:py-20">
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-100/60 blur-3xl" />
      <div className="container relative">
        <div className="mx-auto mb-10 max-w-4xl text-center">
          <span className="inline-flex rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-black text-blue-700 shadow-sm">Case study</span>
          <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl md:text-5xl">Kết quả SEO đến từ chiến lược có hệ thống</h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-slate-700 sm:text-lg">Mỗi ngành có mức độ cạnh tranh, hành trình tìm kiếm và cơ hội chuyển đổi khác nhau. SEOSONA xây roadmap theo dữ liệu thay vì triển khai theo cảm tính.</p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[.9fr_1.1fr]">
          <div className="relative overflow-hidden rounded-[32px] border border-blue-300/30 bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 p-7 text-white shadow-2xl shadow-blue-900/15 sm:p-8">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
            <div className="relative grid h-14 w-14 place-items-center rounded-2xl border border-white/20 bg-white/20 text-white shadow-lg shadow-blue-950/10 backdrop-blur">
              <BarChart3 size={28} />
            </div>
            <h3 className="relative mt-6 text-3xl font-black tracking-tight sm:text-4xl">Không chỉ tăng traffic, mà tăng đúng cơ hội kinh doanh</h3>
            <p className="relative mt-4 leading-8 text-white/95">Case study của SEOSONA tập trung vào các chỉ số có ý nghĩa: khả năng index, tăng trưởng truy cập chất lượng, số lượng cụm nội dung và chuyển đổi thành lead.</p>
            <div className="relative mt-6 grid gap-3">
              {["Audit trước khi lập roadmap", "Đo lường bằng GSC/GA4", "Tối ưu theo mục tiêu kinh doanh"].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/25 bg-white/18 p-3 font-bold text-white shadow-sm backdrop-blur transition hover:bg-white/24">
                  <CheckCircle2 className="shrink-0" size={19} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <Link href="/case-study/" className="relative mt-7 inline-flex items-center gap-2 rounded-full border border-slate-900 bg-slate-950 px-5 py-3 font-black text-white shadow-lg shadow-blue-950/25 transition hover:-translate-y-0.5 hover:bg-slate-900 focus:outline-none focus:ring-4 focus:ring-white/30">
              <span className="text-white">Xem tất cả case study</span>
              <ArrowRight size={18} className="text-white" />
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-1">
            {cases.map((item) => (
              <Link href="/case-study/" key={item.industry} className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl lg:grid lg:grid-cols-[150px_1fr_auto] lg:items-center lg:gap-5">
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-50 transition duration-500 group-hover:scale-150 group-hover:bg-cyan-50" />
                <div className="relative mb-5 flex items-center justify-between lg:mb-0 lg:block">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-blue-700 transition group-hover:bg-blue-600 group-hover:text-white">
                    <TrendingUp size={22} />
                  </div>
                  <div className="text-4xl font-black text-blue-600 lg:mt-5">{item.metric}</div>
                </div>
                <div className="relative">
                  <div className="text-xs font-black uppercase tracking-[0.18em] text-blue-700">{item.industry}</div>
                  <h3 className="mt-2 text-xl font-black text-slate-950 sm:text-2xl">{item.result}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-base">{item.detail}</p>
                  <div className="mt-3 inline-flex rounded-full bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-600">{item.focus}</div>
                </div>
                <span className="relative mt-5 inline-flex items-center gap-2 font-black text-blue-700 lg:mt-0">Xem chi tiết <ArrowRight size={16} /></span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
