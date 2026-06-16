import type { Metadata } from "next";
import { CtaBand } from "@/components/sections/CtaBand";
import { Faq } from "@/components/sections/Faq";
import { Process } from "@/components/sections/Process";
import { PricingTable } from "@/components/sections/PricingTable";
import { Layout, MousePointerClick, Search, Zap, Code2, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thiết kế Website chuẩn SEO, Tối ưu chuyển đổi | SEOSONA",
  description: "Dịch vụ thiết kế website chuẩn SEO: UI/UX hiện đại, tốc độ cực nhanh, cấu trúc nội dung rõ ràng, tracking đầy đủ và sẵn sàng tăng trưởng organic.",
  alternates: { canonical: "/dich-vu-thiet-ke-website/" }
};

export default function ThietKeWebsitePage() {
  const features = [
    { title: "UI/UX Tối giản & Hiện đại", desc: "Thiết kế sạch, rõ thông tin, dễ đọc trên mobile và phù hợp với hành vi tiêu dùng của khách hàng B2B/B2C.", icon: Layout },
    { title: "Kiến trúc chuẩn SEO", desc: "Sitemap, URL, heading, schema, breadcrumb và internal link được chuẩn hóa ngay trong quá trình lập trình.", icon: Search },
    { title: "Tốc độ & Core Web Vitals", desc: "Tối ưu ảnh, component, font, rendering và hiệu suất máy chủ để website đạt điểm tuyệt đối trên Google PageSpeed.", icon: Zap },
    { title: "Tracking & Conversion", desc: "Tích hợp sẵn hệ thống form, CTA, GA4/GSC, event tracking và Heatmap để đo lường chuyển đổi chính xác.", icon: MousePointerClick }
  ];

  const options = [
    { title: "Chuẩn Mobile First", desc: "Giao diện được thiết kế ưu tiên trải nghiệm trên điện thoại, tỷ lệ chuyển đổi trên Mobile luôn đạt mức cao nhất." },
    { title: "Bảo mật & Tốc độ", desc: "Code tinh gọn, không dùng Themes nặng nề. Tích hợp SSL, chống DDOS và Spam Form." },
    { title: "CMS Quản trị dễ dàng", desc: "Giao diện quản trị Admin trực quan, tùy biến kéo thả dễ dàng không cần biết Code." },
    { title: "Chuẩn cấu trúc Schema", desc: "Tích hợp tự động Schema Product, Article, FAQ... để website hiển thị nổi bật trên Google (Rich Snippets)." },
    { title: "Tích hợp CRM/ERP", desc: "Sẵn sàng API kết nối dữ liệu khách hàng (Leads) về hệ thống quản trị nội bộ hoặc Zalo/Email." },
    { title: "Hỗ trợ Migration", desc: "Giữ nguyên thứ hạng SEO khi đổi từ web cũ sang web mới thông qua quy trình Mapping & Redirect URL chuẩn." }
  ];

  const steps = [
    { title: "Nghiên cứu & Prototype", description: "Vẽ Wireframe cấu trúc web dựa trên hành vi tìm kiếm (Search Intent) và định vị thương hiệu của doanh nghiệp." },
    { title: "Thiết kế UI/UX (Figma)", description: "Lên giao diện Demo trực quan. Chốt Concept thiết kế, màu sắc, font chữ và Animation trên mọi thiết bị." },
    { title: "Lập trình (Front-end & Back-end)", description: "Code giao diện HTML/CSS/JS, ghép CMS quản trị. Tối ưu Code chuẩn SEO (Heading, Canonical, Hreflang)." },
    { title: "Testing & Tracking", description: "Test QA/QC đa trình duyệt. Gắn mã Tracking (GTM, GA4, Pixel) và cấu hình form nhận Lead." },
    { title: "Go-live & Hướng dẫn", description: "Đẩy web lên tên miền chính thức, submit Google Console và hướng dẫn team In-house cách đăng bài chuẩn SEO." }
  ];

  const pricingPlans = [
    {
      name: "Landing Page SEO",
      price: "12.000.000đ",
      period: "",
      description: "Trang đích đơn lẻ bán hàng hoặc thu thập Lead, tối ưu chuyển đổi tối đa.",
      features: [
        "Thiết kế 1 Landing Page tùy biến",
        "Tối ưu Tốc độ (PageSpeed > 90)",
        "Gắn Tracking Form/Zalo/Call",
        "Responsive Mobile/Tablet",
        "Bàn giao Source Code"
      ]
    },
    {
      name: "Website Giới Thiệu (B2B)",
      price: "25.000.000đ",
      period: "",
      description: "Phù hợp cho công ty dịch vụ, sản xuất cần một Profile năng lực số chuẩn chỉnh.",
      features: [
        "Giao diện chuẩn UI/UX Corporate",
        "Cấu trúc Blog/Service chuẩn SEO",
        "Tích hợp Đa ngôn ngữ (Option)",
        "Trang quản trị CMS dễ dùng",
        "Bảo hành Code 1 năm"
      ],
      isPopular: true
    },
    {
      name: "Website TMĐT (E-commerce)",
      price: "Liên hệ",
      description: "Giải pháp cho nhà bán lẻ, tích hợp cổng thanh toán và quản trị sản phẩm lớn.",
      features: [
        "Cấu trúc Faceted Navigation",
        "Tối ưu Schema Product/Review",
        "Giỏ hàng & Cổng thanh toán",
        "Hệ thống Lọc nâng cao",
        "Đồng bộ API Đơn vị vận chuyển"
      ],
      ctaText: "Nhận báo giá riêng"
    }
  ];

  const faq = [
    { question: "Website chuẩn SEO khác gì website thông thường?", answer: "Website chuẩn SEO được thiết kế từ kiến trúc thông tin, URL, heading, schema, tốc độ, mobile UX và tracking. Vì vậy website sẵn sàng cho tăng trưởng organic ngay khi ra mắt thay vì phải đập đi xây lại sau này." },
    { question: "SEOSONA có hỗ trợ migration (chuyển đổi) website cũ không?", answer: "Có. Khi thay website cũ bằng web mới, khâu nguy hiểm nhất là mất Traffic. Chúng tôi thực hiện quy trình mapping URL, redirect 301, metadata, sitemap chuẩn xác để đảm bảo không bị rớt Top." },
    { question: "Thời gian thiết kế hoàn thiện là bao lâu?", answer: "Trung bình từ 15-30 ngày tùy theo độ phức tạp của giao diện và tính năng. SEOSONA luôn có lộ trình Milestone rõ ràng cho khách hàng theo dõi." }
  ];

  return (
    <main className="bg-slate-50">
      {/* SaaS Light Mode Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white border-b border-slate-200">
         {/* Background Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-cyan-100/50 blur-[120px] rounded-full pointer-events-none" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:48px_48px] opacity-40" />
        
        <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-600 font-bold text-sm mb-8 animate-in slide-in-from-bottom-4 fade-in duration-700 shadow-sm">
            <Code2 size={16} /> Web Development & UX
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 tracking-tight mb-6 animate-in slide-in-from-bottom-6 fade-in duration-700 delay-100 text-balance leading-[1.1]">
            Thiết Kế Website <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">Chuẩn SEO & Tối Ưu Chuyển Đổi</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 animate-in slide-in-from-bottom-8 fade-in duration-700 delay-200 text-pretty">
            Chúng tôi không chỉ "vẽ" một trang web đẹp. Chúng tôi lập trình một cỗ máy Marketing hoàn chỉnh, chuẩn SEO ngay từ nền móng và sẵn sàng tạo ra doanh thu.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in slide-in-from-bottom-10 fade-in duration-700 delay-300">
            <Link href="/lien-he/" className="h-14 px-8 rounded-full bg-cyan-600 text-white font-bold text-[15px] flex items-center justify-center hover:bg-cyan-700 transition-all shadow-xl hover:shadow-cyan-500/25 hover:-translate-y-1">
              Bắt đầu dự án Web
            </Link>
          </div>

          {/* Web Mockup 3D */}
          <div className="mt-20 relative mx-auto max-w-5xl animate-in fade-in slide-in-from-bottom-24 duration-1000 delay-500">
             <div className="relative w-full aspect-[16/9] flex items-center justify-center perspective-1000">
                {/* Desktop Mockup */}
                <div className="absolute w-[80%] h-[90%] left-0 top-0 bg-white rounded-t-xl border-x border-t border-slate-200 shadow-2xl overflow-hidden transform-gpu hover:scale-[1.02] transition-transform duration-500">
                   <div className="h-8 bg-slate-100 border-b border-slate-200 flex items-center px-4 gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                      <div className="ml-4 h-5 w-1/2 bg-white border border-slate-200 rounded flex items-center px-2">
                         <div className="text-[10px] text-slate-400 font-mono">seosona.com</div>
                      </div>
                   </div>
                   <div className="p-6 bg-slate-50 h-full w-full flex flex-col">
                      <div className="w-3/4 h-10 bg-cyan-100 rounded-lg mb-6"></div>
                      <div className="w-1/2 h-4 bg-slate-200 rounded mb-2"></div>
                      <div className="w-2/3 h-4 bg-slate-200 rounded mb-8"></div>
                      <div className="grid grid-cols-3 gap-4">
                         <div className="h-24 bg-white border border-slate-200 rounded-lg shadow-sm"></div>
                         <div className="h-24 bg-white border border-slate-200 rounded-lg shadow-sm"></div>
                         <div className="h-24 bg-white border border-slate-200 rounded-lg shadow-sm"></div>
                      </div>
                   </div>
                </div>

                {/* Mobile Mockup overlapping */}
                <div className="absolute w-[25%] h-[95%] right-[5%] bottom-0 bg-slate-50 rounded-[30px] border-[8px] border-slate-800 shadow-[0_30px_60px_rgba(0,0,0,0.15)] overflow-hidden transform-gpu hover:-translate-y-4 transition-transform duration-500 z-20">
                   <div className="absolute top-0 inset-x-0 h-6 flex justify-center bg-transparent z-10">
                      <div className="w-1/2 h-4 bg-slate-800 rounded-b-xl"></div>
                   </div>
                   <div className="h-full w-full bg-white p-4 pt-8 overflow-hidden">
                      <div className="w-full h-8 bg-cyan-100 rounded mb-4"></div>
                      <div className="w-3/4 h-3 bg-slate-200 rounded mb-2"></div>
                      <div className="w-full h-3 bg-slate-200 rounded mb-6"></div>
                      <div className="flex flex-col gap-3">
                         <div className="h-16 bg-slate-50 border border-slate-100 rounded shadow-sm"></div>
                         <div className="h-16 bg-slate-50 border border-slate-100 rounded shadow-sm"></div>
                      </div>
                   </div>
                </div>
             </div>
             {/* Soft Glow under mockup */}
             <div className="absolute -inset-x-20 -bottom-20 h-[50%] bg-gradient-to-t from-white to-transparent z-20 pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 relative z-30 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
              Mọi Website đều Sẵn sàng cho SEO
            </h2>
            <p className="text-lg text-slate-600 text-pretty">
              Một website đẹp thôi chưa đủ. Khách hàng B2B cần tìm thấy bạn trên Google. SEOSONA nhúng chuẩn SEO Technical vào tận cốt lõi Code.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {features.map((item, index) => {
               const Icon = item.icon;
               return (
              <div key={index} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300 flex flex-col gap-4 group">
                <div className="h-14 w-14 rounded-2xl bg-white border border-blue-100 text-blue-600 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
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
              Điểm chạm Tối Ưu UX/UI
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
        eyebrow="Quy trình Thiết kế"
        title="Lộ trình Hoàn thiện Website"
        description="Từ ý tưởng trên mặt giấy đến khi Website thực sự mang về Leads."
        steps={steps}
      />

      <PricingTable 
        eyebrow="Bảng giá Web"
        title="Dịch Vụ Lập Trình & Thiết Kế"
        description="Giao diện độc bản, tối ưu tốc độ và bàn giao Code minh bạch."
        plans={pricingPlans}
      />

      <Faq items={faq} />
      <CtaBand />
    </main>
  );
}
