import type { Metadata } from "next";
import { CtaBand } from "@/components/sections/CtaBand";
import { Faq } from "@/components/sections/Faq";
import { Process } from "@/components/sections/Process";
import { PricingTable } from "@/components/sections/PricingTable";
import { CheckCircle2, ShieldAlert, Target, Users, BookOpen, LineChart, Stethoscope, SearchCode, Database, Activity } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tư vấn SEO chuyên sâu cho doanh nghiệp | SEOSONA",
  description: "Dịch vụ tư vấn SEO chuyên sâu: audit hiện trạng, lập SEO roadmap, cố vấn triển khai và review định kỳ cho đội marketing in-house.",
  alternates: { canonical: "/tu-van-seo-chuyen-sau/" }
};

export default function TuVanSeoPage() {
  const auditItems = [
    { title: "Technical Diagnosis", desc: "Tìm lỗi crawl, index, canonical, redirect, performance, schema và các điểm nghẽn kỹ thuật.", icon: SearchCode },
    { title: "Content Benchmark", desc: "Đối chiếu topical map, search intent, content gap, và chất lượng bài viết với đối thủ trực tiếp.", icon: BookOpen },
    { title: "Data Analytics", desc: "Rà quyền truy cập GSC, GA4, cấu hình tracking và đánh giá luồng dữ liệu chuyển đổi.", icon: Database },
    { title: "Team Coaching", desc: "Đào tạo đội in-house biết cách đọc dữ liệu, triển khai checklist và quản trị chất lượng content.", icon: Users }
  ];

  const options = [
    { title: "Gỡ phạt thuật toán", desc: "Phân tích nguyên nhân rớt Traffic do Spam link hoặc Helpful Content Update, đưa ra giải pháp khắc phục." },
    { title: "Xây dựng Roadmap", desc: "Lập kế hoạch SEO chi tiết từ khóa, ngân sách, nhân sự cho 6-12 tháng." },
    { title: "Tối ưu hóa nguồn lực", desc: "Hướng dẫn Team In-house cách làm đúng ngay từ đầu, tránh lãng phí thời gian và ngân sách." },
    { title: "Cấu trúc Website lớn", desc: "Tư vấn cấu trúc Silo/Faceted Navigation cho các site TMĐT, Báo điện tử có hàng trăm nghìn URL." },
    { title: "Định giá dự án SEO", desc: "Thẩm định KPI và báo giá của các Agency khác để tư vấn cho doanh nghiệp quyết định đầu tư." },
    { title: "Review định kỳ", desc: "Họp review tiến độ hàng tuần/tháng để đánh giá hiệu quả và điều chỉnh chiến thuật kịp thời." }
  ];

  const steps = [
    { title: "Kick-off & Lấy yêu cầu", description: "Tiếp nhận thông tin website, mục tiêu doanh nghiệp và phân quyền truy cập GSC, GA4." },
    { title: "Deep Audit (7-14 ngày)", description: "Chuyên gia SEOSONA dùng các tools chuyên dụng quét toàn bộ website để tìm ra nguyên nhân và điểm nghẽn." },
    { title: "Đề xuất Giải pháp", description: "Họp trình bày File Audit (hàng trăm tiêu chí), giải thích cặn kẽ từng lỗi và đưa ra Action Plan cụ thể." },
    { title: "Cố vấn Triển khai", description: "Chuyên gia đồng hành cùng team In-house, support xử lý các issue khó qua nhóm chat Zalo/Telegram." },
    { title: "Review định kỳ", description: "Đánh giá lại sức khỏe website sau mỗi giai đoạn chỉnh sửa để đảm bảo tiến độ KPI." }
  ];

  const pricingPlans = [
    {
      name: "Khám bệnh SEO",
      price: "10.000.000đ",
      period: "",
      description: "Gói Audit 1 lần giúp phát hiện lỗi kỹ thuật và content đang kìm hãm website.",
      features: [
        "Audit Technical toàn diện",
        "Audit Content & Onpage",
        "Đánh giá hồ sơ Backlink",
        "1 buổi họp trình bày (2 hours)",
        "Danh sách Action Checklist"
      ]
    },
    {
      name: "Cố vấn In-house",
      price: "25.000.000đ",
      period: "/ tháng",
      description: "Phù hợp cho doanh nghiệp đã có team SEO nhưng thiếu leader cứng định hướng.",
      features: [
        "Lên chiến lược & Roadmap 6 tháng",
        "Xây dựng Topic Cluster cốt lõi",
        "Đào tạo Team In-house 2 buổi",
        "Hỗ trợ giải đáp Q&A hàng ngày",
        "Họp review tiến độ hàng tuần"
      ],
      isPopular: true
    },
    {
      name: "Giám đốc SEO Thuê ngoài",
      price: "Liên hệ",
      description: "Thay bạn quản trị toàn bộ hoạt động SEO nội bộ và cả các Agency đang thuê ngoài.",
      features: [
        "Thiết lập OKRs/KPI cho phòng SEO",
        "Phỏng vấn & Xây dựng đội ngũ",
        "Thẩm định chất lượng Agency khác",
        "Tối ưu tỷ lệ chuyển đổi (CRO)",
        "Báo cáo trực tiếp cho Ban Giám đốc"
      ],
      ctaText: "Nhận tư vấn riêng"
    }
  ];

  const faq = [
    { question: "Tư vấn SEO khác gì dịch vụ SEO tổng thể?", answer: "Tư vấn SEO phù hợp khi doanh nghiệp đã có team triển khai nội bộ và cần chuyên gia audit, định hướng, review chất lượng và cố vấn chiến lược. Dịch vụ SEO tổng thể là SEOSONA làm toàn bộ." },
    { question: "Có cần cấp quyền GSC/GA4 không?", answer: "Bắt buộc cần quyền xem dữ liệu Google Search Console, Google Analytics 4 để chuyên gia có thể đánh giá chính xác lịch sử traffic, hình phạt của Google (nếu có) và lên chiến lược." },
    { question: "Nếu tư vấn xong mà team in-house không làm được thì sao?", answer: "Trong gói cố vấn, chúng tôi có kèm các buổi training và support giải đáp vướng mắc. Nếu team vẫn thiếu nhân sự, bạn có thể chuyển qua gói SEO Option (SEOSONA hỗ trợ làm những phần khó như Technical hoặc Backlink)." }
  ];

  return (
    <main className="bg-slate-50">
      {/* SaaS Light Mode Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white border-b border-slate-100">
         {/* Background Effects */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-50/60 blur-[100px] rounded-full pointer-events-none" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:40px_40px] opacity-60" />
        
        <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 font-bold text-sm mb-8 animate-in slide-in-from-bottom-4 fade-in duration-700 shadow-sm">
            <Stethoscope size={16} /> Chẩn đoán & Cố vấn
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 tracking-tight mb-6 animate-in slide-in-from-bottom-6 fade-in duration-700 delay-100 text-balance leading-[1.1]">
            Tư vấn SEO Chuyên Sâu <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">Cho đội ngũ In-house</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 animate-in slide-in-from-bottom-8 fade-in duration-700 delay-200 text-pretty">
            Bắt bệnh chính xác, lên phác đồ điều trị chuẩn xác. Chúng tôi đồng hành cùng đội ngũ nội bộ của bạn để tháo gỡ điểm nghẽn, gỡ phạt thuật toán và bứt phá giới hạn traffic.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in slide-in-from-bottom-10 fade-in duration-700 delay-300">
            <Link href="/lien-he/" className="h-14 px-8 rounded-full bg-indigo-600 text-white font-bold text-[15px] flex items-center justify-center hover:bg-indigo-700 transition-all shadow-xl hover:shadow-indigo-500/25 hover:-translate-y-1">
              Đặt lịch chẩn đoán SEO
            </Link>
          </div>

          {/* Light Mockup: Audit Checklist */}
          <div className="mt-20 relative mx-auto max-w-4xl animate-in fade-in slide-in-from-bottom-24 duration-1000 delay-500">
            <div className="rounded-3xl border border-slate-200 bg-white/60 backdrop-blur-xl p-6 md:p-10 shadow-[0_30px_60px_rgba(0,0,0,0.06)] relative z-10 text-left">
               <div className="flex flex-col md:flex-row gap-8">
                  {/* Left: Overall Score */}
                  <div className="w-full md:w-1/3 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-slate-200 pb-8 md:pb-0 md:pr-8">
                     <div className="relative w-32 h-32 mb-4">
                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                           <path className="text-slate-100" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                           <path className="text-indigo-600 animate-[stroke-dash_1.5s_ease-out_forwards]" strokeDasharray="65, 100" strokeWidth="3" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                           <span className="text-3xl font-black text-slate-900">65</span>
                           <span className="text-[10px] uppercase font-bold text-slate-400">Health Score</span>
                        </div>
                     </div>
                     <div className="text-center">
                        <div className="text-sm font-bold text-slate-900">Trạng thái rủi ro</div>
                        <div className="text-xs text-rose-500 font-medium mt-1">Phát hiện 3 lỗi Critical</div>
                     </div>
                  </div>

                  {/* Right: Dynamic Checklist */}
                  <div className="flex-1 flex flex-col gap-4">
                     <h3 className="font-bold text-slate-900 flex items-center gap-2 mb-2">
                        <Target size={18} className="text-indigo-600"/> Audit Checklist
                     </h3>
                     
                     <div className="group flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-indigo-200 transition-colors">
                        <CheckCircle2 size={20} className="text-emerald-500 mt-0.5 shrink-0" />
                        <div>
                           <div className="text-sm font-bold text-slate-900">Robots.txt & Sitemap</div>
                           <div className="text-xs text-slate-500 mt-1">File robots hợp lệ. Đã khai báo đủ 2 sitemaps.</div>
                        </div>
                     </div>

                     <div className="group flex items-start gap-3 p-3 rounded-xl bg-rose-50 border border-rose-100 hover:border-rose-200 transition-colors relative overflow-hidden">
                        <div className="absolute top-0 right-0 h-full w-1 bg-rose-500"></div>
                        <ShieldAlert size={20} className="text-rose-500 mt-0.5 shrink-0" />
                        <div>
                           <div className="text-sm font-bold text-slate-900">Canonicalization Error</div>
                           <div className="text-xs text-rose-600 mt-1">145 trang danh mục đang trỏ sai thẻ Canonical về trang chủ, gây mất traffic diện rộng.</div>
                        </div>
                     </div>

                     <div className="group flex items-start gap-3 p-3 rounded-xl bg-amber-50 border border-amber-100 hover:border-amber-200 transition-colors relative overflow-hidden">
                        <div className="absolute top-0 right-0 h-full w-1 bg-amber-500"></div>
                        <Activity size={20} className="text-amber-500 mt-0.5 shrink-0" />
                        <div>
                           <div className="text-sm font-bold text-slate-900">Core Web Vitals - LCP</div>
                           <div className="text-xs text-amber-700 mt-1">Tốc độ tải nội dung chính (LCP) &gt; 3.5s trên thiết bị Mobile.</div>
                        </div>
                     </div>

                  </div>
               </div>
            </div>
            {/* Soft Glow under mockup */}
            <div className="absolute -inset-x-10 -bottom-10 h-1/2 bg-gradient-to-t from-slate-50 to-transparent z-20 pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 relative z-30 bg-slate-50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
              Bạn nhận được gì sau tư vấn?
            </h2>
            <p className="text-lg text-slate-600 text-pretty">
              Đầu ra không chỉ dừng ở lời khuyên. Chúng tôi cung cấp bộ tài liệu, roadmap và KPI rõ ràng để team In-house của bạn có thể ngay lập tức thực thi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {auditItems.map((item, index) => {
               const Icon = item.icon;
               return (
              <div key={index} className="p-8 rounded-3xl bg-white border border-slate-200 hover:shadow-xl hover:border-indigo-300 transition-all duration-300 flex flex-col gap-4 group">
                <div className="h-14 w-14 rounded-2xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="text-[15px] text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            )})}
          </div>

          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
              Các vấn đề SEOSONA giải quyết
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {options.map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-slate-100 shadow-sm">
                 <CheckCircle2 size={24} className="text-indigo-500 shrink-0 mt-1" />
                 <div>
                     <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                     <p className="text-[14px] text-slate-600 leading-relaxed">{item.desc}</p>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Process 
        eyebrow="Cách làm việc"
        title="Quy trình Cố vấn SEO"
        description="Làm việc trực tiếp trên số liệu thật của doanh nghiệp, minh bạch và đo lường được."
        steps={steps}
      />

      <PricingTable 
        eyebrow="Chi phí"
        title="Các gói Tư vấn & Audit"
        description="Linh hoạt theo nhu cầu: Khám bệnh 1 lần hoặc Đồng hành cố vấn dài hạn."
        plans={pricingPlans}
      />

      <Faq items={faq} />
      <CtaBand />
    </main>
  );
}
