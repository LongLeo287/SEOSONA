import Link from "next/link";
import { ArrowRight, BarChart3, CheckCircle2, TrendingUp } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";


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
    <section
      className="relative overflow-hidden py-12 lg:py-16"
      style={{ background: "linear-gradient(160deg, #003566 0%, #002244 60%, #001833 100%)" }}
    >
      {/* Glow orbs */}
      <div
        className="pointer-events-none absolute left-0 top-0 hidden h-[400px] w-[400px] rounded-full opacity-10 md:block"
        style={{ background: "radial-gradient(circle, #46FF00 0%, transparent 70%)", filter: "blur(100px)" }}
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 hidden h-[400px] w-[400px] rounded-full opacity-10 md:block"
        style={{ background: "radial-gradient(circle, #0055AA 0%, transparent 70%)", filter: "blur(100px)" }}
      />

      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll className="mx-auto mb-10 max-w-4xl text-center">
          <span className="badge-accent">Case study</span>
          <h2 className="mt-5 text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl font-poppins">
            Kết quả SEO đến từ chiến lược có hệ thống
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg font-inter">
            Mỗi ngành có mức độ cạnh tranh, hành trình tìm kiếm và cơ hội chuyển đổi khác nhau. SEOSONA xây roadmap theo dữ liệu thay vì triển khai theo cảm tính.
          </p>
        </RevealOnScroll>

        <div className="grid gap-5 lg:grid-cols-[.9fr_1.1fr]">
          {/* Left Feature Panel */}
          <RevealOnScroll direction="left">
            <div
              className="relative overflow-hidden rounded-[32px] border border-white/10 p-7 shadow-2xl sm:p-8"
              style={{ background: "linear-gradient(135deg, rgba(0,53,102,0.9) 0%, rgba(0,34,68,0.95) 100%)", backdropFilter: "blur(20px)" }}
            >
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-20"
                style={{ background: "radial-gradient(circle, #46FF00 0%, transparent 70%)", filter: "blur(40px)" }}
              />
              <div className="relative grid h-14 w-14 place-items-center rounded-2xl border border-[#46FF00]/20 bg-[#46FF00]/10 text-[#46FF00] shadow-lg">
                <BarChart3 size={28} />
              </div>
              <h3 className="relative mt-6 text-3xl font-black tracking-tight text-white sm:text-4xl font-poppins">
                Không chỉ tăng traffic, mà tăng đúng cơ hội kinh doanh
              </h3>
              <p className="relative mt-4 leading-8 text-slate-300 font-inter">
                Case study của SEOSONA tập trung vào các chỉ số có ý nghĩa: khả năng index, tăng trưởng truy cập chất lượng, số lượng cụm nội dung và chuyển đổi thành lead.
              </p>
              <div className="relative mt-6 grid gap-3">
                {["Audit trước khi lập roadmap", "Đo lường bằng GSC/GA4", "Tối ưu theo mục tiêu kinh doanh"].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-[#46FF00]/15 bg-[#46FF00]/5 p-3 font-bold text-white shadow-sm backdrop-blur transition hover:border-[#46FF00]/30 hover:bg-[#46FF00]/10"
                  >
                    <CheckCircle2 className="shrink-0 text-[#46FF00]" size={19} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/case-study/"
                className="relative mt-7 inline-flex items-center gap-2 rounded-full border border-[#46FF00]/30 bg-[#46FF00]/10 px-5 py-3 font-black text-[#46FF00] shadow-lg transition hover:-translate-y-0.5 hover:border-[#46FF00]/60 hover:bg-[#46FF00]/20 focus:outline-none focus:ring-4 focus:ring-[#46FF00]/20"
              >
                <span>Xem tất cả case study</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </RevealOnScroll>

          {/* Right Cards Grid */}
          <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-1">
            {cases.map((item, index) => (
              <RevealOnScroll key={item.industry} delay={index * 100} direction="right">
                <Link
                  href="/case-study/"
                  className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl shadow-lg transition duration-300 hover:-translate-y-1 hover:border-[#46FF00]/40 hover:bg-white/10 hover:shadow-2xl hover:shadow-[#46FF00]/5 lg:grid lg:grid-cols-[150px_1fr_auto] lg:items-center lg:gap-5 block"
                >
                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#46FF00]/5 transition duration-500 group-hover:scale-150 group-hover:bg-[#46FF00]/8 blur-xl" />

                  <div className="relative mb-5 flex items-center justify-between lg:mb-0 lg:block">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl border border-[#46FF00]/20 bg-[#003566] text-[#46FF00] transition group-hover:border-[#46FF00]/50 group-hover:bg-[#46FF00] group-hover:text-[#003566]">
                      <TrendingUp size={22} />
                    </div>
                    <div className="text-4xl font-black text-[#46FF00] lg:mt-5">{item.metric}</div>
                  </div>

                  <div className="relative">
                    <div className="text-xs font-black uppercase tracking-[0.18em] text-[#46FF00]/80">{item.industry}</div>
                    <h3 className="mt-2 text-xl font-black text-white sm:text-2xl font-poppins">{item.result}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-400 sm:text-base font-inter">{item.detail}</p>
                    <div className="mt-3 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-bold text-slate-400">
                      {item.focus}
                    </div>
                  </div>

                  <span className="relative mt-5 inline-flex items-center gap-2 font-black text-[#46FF00] transition-transform group-hover:translate-x-1 lg:mt-0">
                    Xem chi tiết <ArrowRight size={16} />
                  </span>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
