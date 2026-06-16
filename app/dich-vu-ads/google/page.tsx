import type { Metadata } from "next";
import { CtaBand } from "@/components/sections/CtaBand";
import { Faq } from "@/components/sections/Faq";
import { Process } from "@/components/sections/Process";
import { PricingTable } from "@/components/sections/PricingTable";
import { Search, BarChart3, TrendingUp, Target, ShieldCheck, Zap, MousePointerClick, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dịch vụ Quảng cáo Google Ads | SEOSONA",
  description: "Dịch vụ Google Ads SEOSONA: Tối ưu Search Ads, Performance Max, cài đặt Tracking chuyển đổi chuẩn xác và cam kết ROAS cho doanh nghiệp B2B & B2C.",
  alternates: { canonical: "/dich-vu-ads/google/" }
};

export default function GoogleAdsPage() {
  const auditItems = [
    { title: "Account Structure", desc: "Rà cấu trúc campaign, nhóm quảng cáo, keyword match type, negative list, asset group và lịch sử thay đổi.", icon: Target },
    { title: "Search Intent", desc: "Phân loại truy vấn theo nhu cầu nóng, nhu cầu nghiên cứu, brand, competitor và nhóm từ khóa lãng phí ngân sách.", icon: Search },
    { title: "Landing Page Fit", desc: "Đối chiếu thông điệp quảng cáo với landing page, CTA, form, tốc độ tải và trust signal.", icon: MousePointerClick },
    { title: "Conversion Data", desc: "Kiểm tra GA4, GTM, call, form, CRM event, enhanced conversion và độ sạch của dữ liệu tối ưu bid.", icon: BarChart3 }
  ];

  const options = [
    { title: "Search Ads", desc: "Bắt chặt nhu cầu nóng với cấu trúc từ khóa chuẩn SKAG/STAG, viết ad copy sắc bén và tối ưu Điểm chất lượng (Quality Score)." },
    { title: "Performance Max", desc: "Tiếp cận đa kênh Google với bộ asset chất lượng cao, chia tín hiệu (audience signal) sâu và loại trừ rác thông minh." },
    { title: "Shopping Ads", desc: "Tối ưu Feed sản phẩm, title/desc theo hành vi tìm kiếm để hiển thị trực quan và kéo ROAS tốt nhất cho sàn TMĐT/Website." },
    { title: "Display & YouTube", desc: "Chạy GDN/Video bám đuổi (remarketing) đúng người dùng đã vào web, từng thêm giỏ hàng hoặc có tín hiệu mua cao." },
    { title: "Tracking & Analytics", desc: "Setup full hệ thống GTM, GA4, Offline Conversion Tracking (OCT) để Google học từ data chuẩn." },
    { title: "Tối ưu Lead/ROAS", desc: "Chuyển từ chạy tối ưu Click sang tối ưu CPL (Cost per Lead) hoặc ROAS bằng data thật từ Sales/CRM trả về." }
  ];

  const steps = [
    { title: "Audit & Strategy", description: "Đánh giá tài khoản cũ, phân tích search intent, lập cấu trúc chiến dịch và lên danh sách từ khóa/phủ định." },
    { title: "Tracking Setup", description: "Cài đặt GTM, GA4, đo lường toàn bộ action (call, form, chat) để hệ thống Google học đúng tệp." },
    { title: "Launch & Testing", description: "Chạy A/B testing ad copy, landing page, phân bổ ngân sách và thu thập dữ liệu chuyển đổi ban đầu." },
    { title: "Scale & Optimize", description: "Loại trừ từ khóa rác, bid giá tự động theo CPA/ROAS, vít ngân sách vào chiến dịch đang ra đơn tốt." }
  ];

  const pricingPlans = [
    {
      name: "Khởi động",
      price: "10.000.000đ",
      description: "Phù hợp doanh nghiệp SME muốn test thị trường với ngân sách Ads < 50tr/tháng.",
      features: [
        "Phí quản lý: 20% ngân sách",
        "Tối đa 2 chiến dịch Search/PMax",
        "Setup Tracking (Form/Call/Chat)",
        "Báo cáo hiệu quả định kỳ 2 tuần/lần"
      ]
    },
    {
      name: "Tăng tốc",
      price: "20.000.000đ",
      description: "Tối ưu sâu phễu chuyển đổi cho ngân sách Ads từ 50tr - 150tr/tháng.",
      features: [
        "Phí quản lý: 15% ngân sách",
        "Không giới hạn số lượng chiến dịch",
        "Tối ưu Landing Page cơ bản",
        "Tích hợp Offline Conversion Tracking",
        "Báo cáo Dashboard Real-time"
      ],
      isPopular: true
    },
    {
      name: "Scale Up",
      price: "Liên hệ",
      description: "Gói cam kết CPL/ROAS cho ngân sách lớn > 150tr/tháng, cần tối ưu toàn diện.",
      features: [
        "Phí quản lý linh hoạt + Thưởng KPI",
        "Cam kết chỉ số CPL hoặc ROAS",
        "Tối ưu toàn diện phễu Marketing",
        "Hỗ trợ A/B Testing liên tục",
        "Hỗ trợ kỹ thuật hệ thống Data 24/7"
      ],
      ctaText: "Nhận báo giá riêng"
    }
  ];

  const faq = [
    { question: "Vì sao Google Ads tiêu tiền nhưng không ra lead?", answer: "Lý do phổ biến nhất là chạy sai Search Intent (từ khóa quá rộng), không dùng Negative Keywords, hoặc điểm yếu nằm ở Landing Page không đủ sức thuyết phục." },
    { question: "Chạy Performance Max (PMax) sao cho hiệu quả?", answer: "PMax cần tín hiệu Audience Signals cực kỳ chuẩn và bộ Asset (Hình ảnh/Video/Text) đa dạng. Đặc biệt, phải có data chuyển đổi quá khứ đủ dày thì PMax mới học tốt." },
    { question: "Ngân sách bao nhiêu thì nên bắt đầu chạy?", answer: "Khuyến nghị tối thiểu từ 15-20 triệu/tháng để hệ thống Machine Learning của Google có đủ dữ liệu (data points) để học và tối ưu." }
  ];

  return (
    <main className="bg-slate-50">
      {/* SaaS Light Mode Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white border-b border-slate-200">
         {/* Background Effects */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-blue-50/50 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-emerald-50/50 blur-[100px] rounded-full pointer-events-none" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:32px_32px] opacity-40" />
        
        <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-bold text-sm mb-8 animate-in slide-in-from-bottom-4 fade-in duration-700 shadow-sm">
            <Zap size={16} className="text-amber-500" /> Cam kết ROAS & Lead Chất lượng
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 tracking-tight mb-6 animate-in slide-in-from-bottom-6 fade-in duration-700 delay-100 text-balance leading-[1.1]">
            Google Ads <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Bắt Nhu Cầu Nóng, Tạo Doanh Thu Đều</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 animate-in slide-in-from-bottom-8 fade-in duration-700 delay-200 text-pretty">
            Chúng tôi không tối ưu lượt Click. SEOSONA xây dựng cấu trúc tài khoản chuẩn, cài đặt Tracking sâu và tối ưu giá thầu dựa trên tín hiệu CRM (Doanh thu thật).
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in slide-in-from-bottom-10 fade-in duration-700 delay-300">
            <Link href="/lien-he/" className="h-14 px-8 rounded-full bg-blue-600 text-white font-bold text-[15px] flex items-center justify-center hover:bg-blue-700 transition-all shadow-xl hover:shadow-blue-500/25 hover:-translate-y-1">
              Nhận Audit Tài khoản Miễn phí
            </Link>
          </div>

          {/* Light Mockup: Google Ads Dashboard */}
          <div className="mt-20 relative mx-auto max-w-5xl animate-in fade-in slide-in-from-bottom-24 duration-1000 delay-500">
            <div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-[0_30px_60px_rgba(0,0,0,0.08)] relative z-10 text-left">
               <div className="rounded-xl border border-slate-100 bg-slate-50 overflow-hidden flex flex-col font-sans">
                  {/* Mockup Header */}
                  <div className="h-12 bg-white border-b border-slate-100 flex items-center px-4 gap-4">
                     <div className="flex items-center gap-2 text-slate-400">
                        <Search size={18} />
                        <span className="text-xs font-medium">All campaigns</span>
                     </div>
                     <div className="ml-auto flex items-center gap-2">
                        <div className="px-3 py-1 rounded bg-slate-100 text-slate-600 text-xs font-semibold">Last 30 days</div>
                     </div>
                  </div>
                  
                  {/* Mockup Content Grid */}
                  <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-4">
                     <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                        <div className="text-slate-500 text-xs font-semibold mb-1">Cost</div>
                        <div className="text-2xl font-bold text-slate-900">124.5M ₫</div>
                        <div className="text-emerald-500 text-xs font-medium mt-2 flex items-center gap-1"><TrendingUp size={12}/> +5.2%</div>
                     </div>
                     <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                        <div className="text-slate-500 text-xs font-semibold mb-1">Conversions (Leads)</div>
                        <div className="text-2xl font-bold text-slate-900">842</div>
                        <div className="text-emerald-500 text-xs font-medium mt-2 flex items-center gap-1"><TrendingUp size={12}/> +12.4%</div>
                     </div>
                     <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                        <div className="text-slate-500 text-xs font-semibold mb-1">Cost / Conv.</div>
                        <div className="text-2xl font-bold text-slate-900">147K ₫</div>
                        <div className="text-emerald-500 text-xs font-medium mt-2 flex items-center gap-1"><TrendingUp size={12} className="rotate-180"/> -8.1%</div>
                     </div>
                     {/* Highlighted ROAS */}
                     <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-4 rounded-xl border border-blue-400 shadow-md relative overflow-hidden group hover:scale-105 transition-transform cursor-pointer">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150 duration-500" />
                        <div className="text-blue-100 text-xs font-semibold mb-1 relative z-10">ROAS (Return on Ad Spend)</div>
                        <div className="text-3xl font-black text-white relative z-10">450%</div>
                        <div className="text-white text-xs font-medium mt-2 flex items-center gap-1 relative z-10"><Target size={12}/> Vượt KPI 15%</div>
                     </div>
                  </div>

                  {/* Fake Search Ad Example */}
                  <div className="px-6 pb-6">
                     <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                        <div className="flex items-center gap-2 mb-2">
                           <span className="font-bold text-sm text-slate-900">Google</span>
                           <span className="text-xs text-slate-500">Kết quả tìm kiếm</span>
                        </div>
                        <div className="flex flex-col gap-1">
                           <div className="flex items-center gap-2">
                              <span className="font-bold text-xs text-slate-900 bg-slate-100 px-1.5 py-0.5 rounded">Được tài trợ</span>
                              <span className="text-xs text-slate-600">seosona.com</span>
                           </div>
                           <h4 className="text-lg font-medium text-blue-600 hover:underline cursor-pointer">Dịch Vụ Google Ads Chuyển Đổi - Báo Giá Chuẩn B2B</h4>
                           <p className="text-sm text-slate-600 line-clamp-2">SEOSONA chuyên triển khai Google Ads với định hướng Data-Driven. Setup Tracking đa điểm chạm, tối ưu CPA/ROAS bằng hệ thống báo cáo Real-time. Nhận Audit ngay!</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            {/* Soft Glow under mockup */}
            <div className="absolute -inset-x-20 -bottom-20 h-[50%] bg-gradient-to-t from-slate-50 to-transparent z-20 pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 relative z-30 bg-slate-50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
              Audit Tài Khoản Quảng Cáo
            </h2>
            <p className="text-lg text-slate-600 text-pretty">
              Google Ads dễ lãng phí nếu chạy sai Search Intent hoặc tracking lỗi. SEOSONA luôn bắt đầu bằng việc Audit tài khoản để vá lỗ hổng rò rỉ ngân sách.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {auditItems.map((item, index) => {
               const Icon = item.icon;
               return (
              <div key={index} className="p-8 rounded-3xl bg-white border border-slate-200 hover:shadow-lg hover:border-blue-200 transition-all duration-300 flex flex-col gap-4 group">
                <div className="h-14 w-14 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
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
              Option Triển khai Chuyên Sâu
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {options.map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-slate-100 shadow-sm">
                 <CheckCircle2 size={24} className="text-blue-500 shrink-0 mt-1" />
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
        eyebrow="Roadmap"
        title="Quy trình Triển khai Google Ads"
        description="Từ khâu Audit tài khoản cũ đến việc thiết lập Tracking và mở rộng ngân sách, mọi thứ đều minh bạch và báo cáo định kỳ."
        steps={steps}
      />

      <PricingTable 
        eyebrow="Báo giá Dịch vụ"
        title="Gói Dịch Vụ Google Ads"
        description="Chi phí linh hoạt tùy thuộc vào quy mô và mục tiêu tăng trưởng của doanh nghiệp."
        plans={pricingPlans}
      />

      <Faq items={faq} />
      <CtaBand />
    </main>
  );
}
