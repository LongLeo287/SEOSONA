import type { Metadata } from "next";
import { CtaBand } from "@/components/sections/CtaBand";
import { Faq } from "@/components/sections/Faq";
import { Process } from "@/components/sections/Process";
import { PricingTable } from "@/components/sections/PricingTable";
import { Search, ShieldAlert, FileCode2, Terminal, ChevronRight, BarChart3, Fingerprint, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Audit SEO chuyên sâu cho doanh nghiệp | SEOSONA",
  description: "Audit SEO chuyên sâu: technical SEO, content gap, indexation, analytics, chuyển đổi và roadmap ưu tiên sau audit.",
  alternates: { canonical: "/audit-seo/" }
};

export default function AuditSeoPage() {
  const auditItems = [
    { title: "Technical Health", desc: "Kiểm tra crawl, index, sitemap, robots, canonical, redirect, schema, Core Web Vitals và lỗi template.", icon: FileCode2 },
    { title: "Content Gap", desc: "Đối chiếu search intent, topical authority, internal link, thin content và khoảng trống nội dung so với đối thủ.", icon: Search },
    { title: "Authority Signal", desc: "Rà soát entity, brand mention, backlink profile, anchor text và tín hiệu tin cậy cần củng cố.", icon: Fingerprint },
    { title: "Conversion & Tracking", desc: "Kiểm tra GA4, GSC, form, CTA, event tracking và khả năng biến traffic organic thành lead.", icon: BarChart3 }
  ];

  const options = [
    { title: "Phân tích UX/UI (CRO)", desc: "Đánh giá các điểm chạm trên trang (Nút bấm, Form, Điều hướng) để tăng tỷ lệ chuyển đổi Lead." },
    { title: "Kiểm tra Hình phạt", desc: "Phát hiện website có đang bị dính án phạt Manual Action hay thuật toán (Spam Update) hay không." },
    { title: "Lỗ hổng Indexing", desc: "Tìm các trang rác, trang có tham số (Parameters) bị index gây loãng sức mạnh tên miền." },
    { title: "Kiểm tra Tốc độ Web", desc: "Bóc tách chi tiết các file JS/CSS, hình ảnh chưa tối ưu làm chậm tốc độ tải trang (PageSpeed Insights)." },
    { title: "Audit Link Toxic", desc: "Phân tích hồ sơ Backlink để loại bỏ các Link bẩn, Link spam tấn công từ đối thủ (Disavow)." },
    { title: "Khuyến nghị tái cấu trúc", desc: "Gợi ý sắp xếp lại Menu, Category, URL hợp lý để trải đều PageRank cho các trang SEO chính." }
  ];

  const steps = [
    { title: "Tiếp nhận Website", description: "Lấy thông tin website, các từ khóa quan trọng và quyền xem dữ liệu Google Search Console, Google Analytics." },
    { title: "Deep Crawl", description: "Sử dụng Screaming Frog, Ahrefs, SEMrush quét toàn bộ hàng chục ngàn URL để thu thập dữ liệu kỹ thuật." },
    { title: "Phân tích & Lập báo cáo", description: "Đội ngũ chuyên gia SEOSONA đối chiếu dữ liệu với Checklist 200+ tiêu chuẩn xếp hạng của Google." },
    { title: "Trình bày File Audit", description: "Họp trực tuyến để giải thích trực quan các lỗi hiện tại, mức độ nghiêm trọng và tác động đến Ranking." },
    { title: "Bàn giao Action Plan", description: "Cung cấp danh sách các công việc cần làm ngay (Task List) cho Coder và Content để fix lỗi." }
  ];

  const pricingPlans = [
    {
      name: "Audit Kỹ thuật",
      price: "10.000.000đ",
      period: "",
      description: "Tập trung giải quyết các lỗi Technical làm web không index hoặc load chậm.",
      features: [
        "Quét tối đa 50,000 URLs",
        "Báo cáo Technical Error",
        "Báo cáo Core Web Vitals",
        "File hướng dẫn Fix cho Coder",
        "Hỗ trợ giải đáp 2 tuần"
      ]
    },
    {
      name: "Audit Toàn diện",
      price: "25.000.000đ",
      period: "",
      description: "Bóc tách 100% bệnh lý của Website từ Technical, Content đến Backlink.",
      features: [
        "Bao gồm Audit Kỹ thuật",
        "Audit Content & Search Intent",
        "Phân tích Link Toxic/Spam",
        "So sánh với 3 Đối thủ lớn",
        "1 Buổi họp trình bày (2 hours)"
      ],
      isPopular: true
    },
    {
      name: "Audit Enterprise",
      price: "Liên hệ",
      description: "Dành riêng cho Báo chí điện tử, Sàn TMĐT với hàng triệu URLs phức tạp.",
      features: [
        "Quét không giới hạn URLs",
        "Audit Cấu trúc Server/Faceted",
        "Thiết lập Crawl Budget",
        "Tư vấn Migration (Chuyển web)",
        "Đồng hành triển khai fix lỗi"
      ],
      ctaText: "Nhận báo giá riêng"
    }
  ];

  const faq = [
    { question: "Audit SEO có phải là dịch vụ SEO tổng thể không?", answer: "Không. Audit SEO là bước chẩn đoán độc lập để biết website đang nghẽn ở đâu. Sau audit, doanh nghiệp có thể tự xử lý, thuê tư vấn hoặc triển khai SEO tổng thể." },
    { question: "Audit xong nhận được gì?", answer: "Bạn nhận báo cáo chi tiết, backlog ưu tiên xử lý, khuyến nghị kỹ thuật, content gap, tracking checklist và roadmap hành động để Coder hoặc Team Content thực hiện." },
    { question: "Cần chuẩn bị gì trước audit?", answer: "Bắt buộc nên có quyền đọc GSC/GA4. Nếu có mã nguồn hoặc Hosting/Staging càng tốt. Doanh nghiệp cũng cần nói rõ mục tiêu kinh doanh và đối thủ chính." }
  ];

  return (
    <main className="bg-slate-50">
      {/* SaaS Light Mode Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white border-b border-slate-200">
         {/* Background Effects */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-rose-50/50 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-amber-50/50 blur-[100px] rounded-full pointer-events-none" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:32px_32px] opacity-40" />
        
        <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-50 border border-rose-100 text-rose-600 font-bold text-sm mb-8 animate-in slide-in-from-bottom-4 fade-in duration-700 shadow-sm">
            <ShieldAlert size={16} /> Chẩn đoán toàn diện
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 tracking-tight mb-6 animate-in slide-in-from-bottom-6 fade-in duration-700 delay-100 text-balance leading-[1.1]">
            Audit SEO Website <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-amber-500">Tách lỗi thật khỏi cảm giác</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 animate-in slide-in-from-bottom-8 fade-in duration-700 delay-200 text-pretty">
            Một bản audit tốt không chỉ liệt kê danh sách lỗi. Chúng tôi giúp doanh nghiệp hiểu nguyên nhân gốc rễ, mức độ ảnh hưởng và thứ tự ưu tiên để sửa đúng việc trước.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in slide-in-from-bottom-10 fade-in duration-700 delay-300">
            <Link href="/lien-he/" className="h-14 px-8 rounded-full bg-rose-600 text-white font-bold text-[15px] flex items-center justify-center hover:bg-rose-700 transition-all shadow-xl hover:shadow-rose-500/25 hover:-translate-y-1">
              Yêu cầu Audit Website
            </Link>
          </div>

          {/* Light Mockup: Terminal Crawler */}
          <div className="mt-20 relative mx-auto max-w-4xl animate-in fade-in slide-in-from-bottom-24 duration-1000 delay-500">
            <div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-[0_30px_60px_rgba(0,0,0,0.08)] relative z-10 text-left">
               <div className="rounded-xl border border-slate-100 bg-slate-900 overflow-hidden flex flex-col font-mono text-[13px]">
                  {/* Mac OS Header */}
                  <div className="h-10 border-b border-slate-800 bg-[#1E293B] flex items-center px-4 justify-between shrink-0">
                     <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-rose-500"/>
                        <div className="w-3 h-3 rounded-full bg-amber-500"/>
                        <div className="w-3 h-3 rounded-full bg-emerald-500"/>
                     </div>
                     <div className="text-slate-400 text-xs flex items-center gap-2">
                        <Terminal size={14} /> seosona-spider-v2.1
                     </div>
                  </div>
                  {/* Console Content */}
                  <div className="p-6 text-slate-300 flex flex-col gap-2 min-h-[300px]">
                     <div className="flex items-center gap-2 text-emerald-400">
                        <ChevronRight size={14} /> <span>Starting deep crawl for <span className="text-white">seosona.com</span>...</span>
                     </div>
                     <div className="flex items-center gap-2 text-slate-400 pl-4 mt-2">
                        <span>[14:02:11] Fetching robots.txt... <span className="text-emerald-400">200 OK</span></span>
                     </div>
                     <div className="flex items-center gap-2 text-slate-400 pl-4">
                        <span>[14:02:12] Parsing sitemap.xml... Found 4,281 URLs.</span>
                     </div>
                     <div className="flex flex-col gap-1 pl-4 mt-4">
                        <div className="flex items-center gap-2">
                           <span className="text-blue-400">GET</span> <span className="text-slate-300">/dich-vu-seo/</span>
                           <span className="text-emerald-400 font-bold ml-auto">200 OK</span>
                        </div>
                        <div className="flex items-center gap-2">
                           <span className="text-blue-400">GET</span> <span className="text-slate-300">/category/old-news/</span>
                           <span className="text-rose-400 font-bold ml-auto">404 Not Found</span>
                        </div>
                        <div className="flex items-center gap-2">
                           <span className="text-blue-400">GET</span> <span className="text-slate-300">/tu-van-seo-chuyen-sau/</span>
                           <span className="text-emerald-400 font-bold ml-auto">200 OK</span>
                        </div>
                        <div className="flex items-center gap-2">
                           <span className="text-amber-400">WARN</span> <span className="text-slate-300">/dich-vu-thiet-ke-website/</span>
                           <span className="text-amber-400 font-bold ml-auto">LCP &gt; 3.5s</span>
                        </div>
                     </div>
                     <div className="mt-6 flex items-start gap-3 bg-rose-500/10 border border-rose-500/20 p-3 rounded text-rose-300">
                        <ShieldAlert size={16} className="mt-0.5 shrink-0" />
                        <div>
                           <div className="font-bold text-rose-400">CRITICAL ISSUE DETECTED: Canonical Chain</div>
                           <div className="opacity-80">145 URLs are pointing to a canonical URL that 301 redirects. This dilutes link equity and slows down indexation.</div>
                        </div>
                     </div>
                     <div className="flex items-center gap-2 text-emerald-400 mt-4 animate-pulse">
                        <span className="w-2 h-4 bg-emerald-400 inline-block"></span> <span>Analyzing Content Gap...</span>
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
              Phạm vi Audit toàn diện
            </h2>
            <p className="text-lg text-slate-600 text-pretty">
              Báo cáo audit của SEOSONA được nhìn từ nhiều lớp: từ khả năng Google thu thập dữ liệu (Technical), chất lượng nội dung (Content) cho đến hành trình chuyển đổi (UX/UI).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {auditItems.map((item, index) => {
               const Icon = item.icon;
               return (
              <div key={index} className="p-8 rounded-3xl bg-white border border-slate-200 hover:shadow-lg hover:border-rose-200 transition-all duration-300 flex flex-col gap-4 group">
                <div className="h-14 w-14 rounded-2xl bg-rose-50 border border-rose-100 text-rose-600 flex items-center justify-center group-hover:scale-110 transition-transform">
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
              Các chỉ số "ẩn" sẽ được bóc tách
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {options.map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-slate-100 shadow-sm">
                 <CheckCircle2 size={24} className="text-rose-500 shrink-0 mt-1" />
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
        title="Quy trình Audit SEO"
        description="Quét sâu bằng công cụ, phân tích bằng chất xám chuyên gia."
        steps={steps}
      />

      <PricingTable 
        eyebrow="Chi phí"
        title="Bảng giá Audit SEO"
        description="Chọn gói khám bệnh phù hợp với quy mô website của bạn."
        plans={pricingPlans}
      />

      <Faq items={faq} />
      <CtaBand />
    </main>
  );
}
