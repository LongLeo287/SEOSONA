import type { Metadata } from "next";
import { CtaBand } from "@/components/sections/CtaBand";
import { Faq } from "@/components/sections/Faq";
import { Process } from "@/components/sections/Process";
import { PricingTable } from "@/components/sections/PricingTable";
import { LineChart, BarChart3, TrendingUp, Search, Activity, Target, Zap, ShieldCheck, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dịch vụ SEO tổng thể chuyên nghiệp | SEOSONA",
  description: "Dịch vụ SEO tổng thể SEOSONA: technical SEO, content SEO, entity, authority, offpage và đo lường tăng trưởng organic bền vững cho doanh nghiệp.",
  alternates: { canonical: "/dich-vu-seo/" }
};

export default function SeoTongThePage() {
  const features = [
    { title: "Technical SEO", desc: "Audit toàn diện cấu trúc code, tối ưu hóa tốc độ tải trang (Core Web Vitals), thiết lập Indexing và Schema Markup chuẩn chỉnh để Google Bot thu thập dữ liệu dễ dàng.", icon: Zap },
    { title: "Topical Authority", desc: "Phân tích Search Intent, xây dựng cấu trúc Topic Cluster chuyên sâu bao phủ toàn bộ ngách ngành, biến website thành 'chuyên gia' trong mắt Google.", icon: Activity },
    { title: "Entity & Offpage", desc: "Định danh thương hiệu vững chắc trên môi trường Digital. Xây dựng hồ sơ Backlink chất lượng cao, chọn lọc khắt khe từ báo chí và các trang cùng lĩnh vực.", icon: ShieldCheck },
    { title: "Conversion Tracking", desc: "Không chỉ là Traffic. Chúng tôi cài đặt hệ thống đo lường (GA4, GTM) để theo dõi hành vi người dùng, đánh giá chất lượng Lead và tỷ lệ chuyển đổi.", icon: BarChart3 }
  ];

  const options = [
    { title: "Cấu trúc Silo/Cluster chuẩn", desc: "Gom nhóm nội dung thông minh để tăng sức mạnh liên kết nội bộ (Internal Link)." },
    { title: "Onpage & Content Chuẩn SEO", desc: "Mỗi bài viết đều được tối ưu Heading, Mật độ từ khóa, Hình ảnh và Semantic Keywords." },
    { title: "Xử lý Lỗi Kỹ Thuật (Toxic)", desc: "Dọn dẹp triệt để lỗi 404, Redirect Loop, Zombie Page và Content ăn thịt nhau." },
    { title: "Báo cáo Data-Driven", desc: "Theo dõi qua Dashboard Real-time: Traffic, Ranking, Tỷ lệ Click (CTR) và số lượng Lead." },
    { title: "Chiến lược An Toàn", desc: "Tuân thủ 100% nguyên tắc của Google (White-hat), bảo vệ website khỏi các bản cập nhật thuật toán." },
    { title: "Cam kết KPI Rõ Ràng", desc: "Thống nhất mục tiêu Traffic / Doanh thu từ đầu, lộ trình báo cáo tiến độ minh bạch hàng tuần." }
  ];

  const steps = [
    { title: "Audit Hiện Trạng", description: "Rà soát sức khỏe website (Technical, Content, Backlink) để tìm ra điểm nghẽn và cơ hội tăng trưởng." },
    { title: "Lập Keyword & Content Map", description: "Nghiên cứu từ khóa theo hành trình khách hàng (AIDA), xây dựng Topic Cluster phân bổ cho 6-12 tháng." },
    { title: "Tối ưu Technical & Onpage", description: "Xử lý triệt để lỗi kỹ thuật, chuẩn hóa cấu trúc trang, tối ưu UI/UX cơ bản để tăng trải nghiệm người dùng." },
    { title: "Offpage & Thúc đẩy", description: "Phủ sóng Entity, đi Backlink báo chí, Guest Post chọn lọc để đẩy mạnh sức mạnh (Authority) cho domain." },
    { title: "Đo lường & CRO", description: "Phân tích dữ liệu GSC/GA4 hàng tháng, tối ưu tỷ lệ chuyển đổi (CRO) trên các trang có Traffic cao." }
  ];

  const pricingPlans = [
    {
      name: "SEO Khởi Động",
      price: "15.000.000đ",
      description: "Phù hợp cho SMEs, website mới bắt đầu làm quen với SEO hoặc đánh thị trường ngách hẹp.",
      features: [
        "Audit Technical Cơ Bản",
        "Tối ưu 50 Keywords cốt lõi",
        "Sản xuất 10-15 Bài viết/tháng",
        "Xây dựng Entity Social",
        "Báo cáo Ranking hàng tháng"
      ]
    },
    {
      name: "SEO Tăng Tốc",
      price: "35.000.000đ",
      description: "Gói tối ưu nhất để chiếm lĩnh thị trường, cạnh tranh sòng phẳng với các đối thủ top đầu.",
      features: [
        "Audit Technical Chuyên Sâu",
        "Xây dựng Topical Map toàn diện",
        "Tối ưu 150-300 Keywords",
        "Đi Backlink Báo/Guest Post",
        "Setup Dashboard Tracking GDS"
      ],
      isPopular: true
    },
    {
      name: "SEO Doanh Nghiệp (Enterprise)",
      price: "Liên hệ",
      description: "Chiến lược SEO quy mô lớn, cam kết Traffic/Lead khổng lồ cho các tập đoàn, sàn TMĐT.",
      features: [
        "Cấu trúc Silo/Faceted Navigation",
        "Tối ưu > 1000 Keywords",
        "Chiến dịch Digital PR & Booking",
        "Tối ưu CRO (Conversion Rate)",
        "Quản trị dự án qua hệ thống ERP"
      ],
      ctaText: "Nhận chiến lược riêng"
    }
  ];

  const faq = [
    { question: "Dịch vụ SEO tổng thể phù hợp với ai?", answer: "Phù hợp với doanh nghiệp muốn tăng trưởng organic dài hạn, xây dựng kênh Acquisition ổn định mà không phụ thuộc 100% vào quảng cáo trả phí (Ads)." },
    { question: "Bao lâu thì chiến dịch SEO thấy kết quả?", answer: "Thông thường cần 3-6 tháng để thấy Traffic tăng trưởng rõ rệt, tùy thuộc vào độ trust của domain hiện tại và độ cạnh tranh của ngành hàng." },
    { question: "SEOSONA có cam kết top từ khóa không?", answer: "SEOSONA cam kết sự tăng trưởng toàn diện về Traffic và Leads (khách hàng tiềm năng). Chúng tôi hạn chế cam kết vài từ khóa cụ thể vì rủi ro rớt top cao khi Google update, thay vào đó là thống lĩnh toàn bộ ngách." }
  ];

  return (
    <main className="bg-slate-50">
      {/* SaaS Light Mode Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white border-b border-slate-200">
         {/* Background Effects */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/50 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-slate-100/50 blur-[100px] rounded-full pointer-events-none" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:32px_32px] opacity-40" />
        
        <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-bold text-sm mb-8 animate-in slide-in-from-bottom-4 fade-in duration-700 shadow-sm">
            <TrendingUp size={16} /> Bền vững - An toàn - Tăng trưởng
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 tracking-tight mb-6 animate-in slide-in-from-bottom-6 fade-in duration-700 delay-100 text-balance leading-[1.1]">
            Dịch vụ SEO Tổng Thể <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Thống Lĩnh Ngách Ngành</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 animate-in slide-in-from-bottom-8 fade-in duration-700 delay-200 text-pretty">
            Thay vì chỉ tập trung vào một vài từ khóa lên Top ảo, chúng tôi xây dựng hệ thống Traffic khổng lồ, bao phủ toàn bộ nhu cầu tìm kiếm và biến Website thành cỗ máy tạo Lead tự động.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in slide-in-from-bottom-10 fade-in duration-700 delay-300">
            <Link href="/lien-he/" className="h-14 px-8 rounded-full bg-blue-600 text-white font-bold text-[15px] flex items-center justify-center hover:bg-blue-700 transition-all shadow-xl hover:shadow-blue-500/25 hover:-translate-y-1">
              Nhận Báo Giá SEO
            </Link>
            <Link href="/case-study/" className="h-14 px-8 rounded-full bg-white text-slate-900 border border-slate-200 font-bold text-[15px] flex items-center justify-center hover:bg-slate-50 transition-all hover:-translate-y-1 shadow-sm">
              Xem Case Study
            </Link>
          </div>

          {/* Interactive Organic Traffic Dashboard Mockup */}
          <div className="mt-20 relative mx-auto max-w-5xl animate-in fade-in slide-in-from-bottom-24 duration-1000 delay-500">
            <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-[0_30px_60px_rgba(0,0,0,0.08)] relative z-10 text-left">
               <div className="rounded-xl border border-slate-100 bg-slate-50 overflow-hidden flex flex-col font-sans">
                  
                  {/* Dashboard Header */}
                  <div className="h-16 bg-white border-b border-slate-100 flex items-center px-6 justify-between shrink-0">
                     <div className="flex items-center gap-4">
                        <div className="flex gap-2">
                           <div className="w-3 h-3 rounded-full bg-rose-400"/>
                           <div className="w-3 h-3 rounded-full bg-amber-400"/>
                           <div className="w-3 h-3 rounded-full bg-emerald-400"/>
                        </div>
                        <div className="h-6 w-px bg-slate-200"></div>
                        <div className="text-slate-900 font-bold flex items-center gap-2">
                           <Search size={20} className="text-blue-600" /> 
                           Google Search Console <span className="font-normal text-slate-400 ml-2 hidden sm:inline">| Performance</span>
                        </div>
                     </div>
                     <div className="flex gap-3">
                        <div className="px-3 py-1.5 rounded bg-slate-100 text-slate-600 text-xs font-semibold border border-slate-200">Last 12 Months</div>
                     </div>
                  </div>

                  {/* Metrics Row */}
                  <div className="grid grid-cols-2 md:grid-cols-4 border-b border-slate-100 bg-white">
                     <div className="p-4 md:p-6 border-r border-b md:border-b-0 border-slate-100 cursor-pointer hover:bg-blue-50/50 transition-colors">
                        <div className="flex items-center gap-2 mb-2">
                           <div className="w-3 h-3 bg-blue-500 rounded-sm" />
                           <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Total Clicks</span>
                        </div>
                        <div className="text-2xl md:text-3xl font-black text-slate-900">1.24M</div>
                     </div>
                     <div className="p-4 md:p-6 border-r border-b md:border-b-0 border-slate-100 cursor-pointer hover:bg-indigo-50/50 transition-colors">
                        <div className="flex items-center gap-2 mb-2">
                           <div className="w-3 h-3 bg-indigo-500 rounded-sm" />
                           <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Total Impressions</span>
                        </div>
                        <div className="text-2xl md:text-3xl font-black text-slate-900">28.5M</div>
                     </div>
                     <div className="p-4 md:p-6 border-r border-slate-100 cursor-pointer hover:bg-emerald-50/50 transition-colors">
                        <div className="flex items-center gap-2 mb-2">
                           <div className="w-3 h-3 bg-emerald-500 rounded-sm" />
                           <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Average CTR</span>
                        </div>
                        <div className="text-2xl md:text-3xl font-black text-slate-900">4.3%</div>
                     </div>
                     <div className="p-4 md:p-6 cursor-pointer hover:bg-amber-50/50 transition-colors">
                        <div className="flex items-center gap-2 mb-2">
                           <div className="w-3 h-3 bg-amber-500 rounded-sm" />
                           <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Average Position</span>
                        </div>
                        <div className="text-2xl md:text-3xl font-black text-slate-900">11.2</div>
                     </div>
                  </div>

                  {/* Chart Area */}
                  <div className="p-6 md:p-8 relative min-h-[350px] flex flex-col justify-end bg-white">
                     {/* Growth Annotation */}
                     <div className="absolute top-8 left-8 right-8 z-20 flex justify-between items-start pointer-events-none hidden sm:flex">
                        <div className="bg-white/80 backdrop-blur-sm border border-slate-200 px-4 py-2 rounded-lg shadow-sm">
                           <div className="text-xs text-slate-500 font-medium">Bắt đầu chiến dịch SEO</div>
                           <div className="text-sm font-bold text-slate-900">Tháng 1</div>
                        </div>
                        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-[1px] rounded-lg shadow-md">
                           <div className="bg-white px-4 py-2 rounded-md">
                              <div className="text-xs text-slate-500 font-medium">Thống lĩnh thị trường</div>
                              <div className="text-sm font-black text-blue-600 flex items-center gap-1">
                                 <TrendingUp size={14} /> Tăng trưởng 450%
                              </div>
                           </div>
                        </div>
                     </div>

                     {/* SVG Line Chart Animation */}
                     <svg className="w-full h-56 drop-shadow-md z-10" viewBox="0 0 800 200" preserveAspectRatio="none">
                        <defs>
                           <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor="#3BA6F1" stopOpacity="0.3" />
                              <stop offset="100%" stopColor="#3BA6F1" stopOpacity="0.01" />
                           </linearGradient>
                           <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#94a3b8" />
                              <stop offset="50%" stopColor="#3b82f6" />
                              <stop offset="100%" stopColor="#0ea5e9" />
                           </linearGradient>
                        </defs>
                        
                        {/* Grid Lines */}
                        <line x1="0" y1="50" x2="800" y2="50" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="4 4" />
                        <line x1="0" y1="100" x2="800" y2="100" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="4 4" />
                        <line x1="0" y1="150" x2="800" y2="150" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="4 4" />

                        {/* Area Path */}
                        <path 
                           d="M 0 180 C 100 170, 200 160, 300 130 C 400 100, 500 110, 600 60 C 700 10, 750 20, 800 10 L 800 200 L 0 200 Z" 
                           fill="url(#areaGradient)" 
                        />
                        {/* Line Path */}
                        <path 
                           d="M 0 180 C 100 170, 200 160, 300 130 C 400 100, 500 110, 600 60 C 700 10, 750 20, 800 10" 
                           fill="none" 
                           stroke="url(#lineGradient)" 
                           strokeWidth="4" 
                           strokeLinecap="round"
                           className="animate-[dash_3s_ease-out_forwards]"
                           strokeDasharray="1000"
                           strokeDashoffset="0"
                        />
                        
                        {/* Data Points */}
                        <circle cx="300" cy="130" r="5" fill="#fff" stroke="#3b82f6" strokeWidth="3" className="hover:r-8 transition-all cursor-pointer" />
                        <circle cx="600" cy="60" r="5" fill="#fff" stroke="#0ea5e9" strokeWidth="3" className="hover:r-8 transition-all cursor-pointer" />
                        <circle cx="800" cy="10" r="6" fill="#fff" stroke="#0284c7" strokeWidth="3" className="animate-[ping_2s_infinite]" />
                        <circle cx="800" cy="10" r="4" fill="#0284c7" />
                     </svg>
                  </div>
               </div>
            </div>
            {/* Soft Glow under mockup */}
            <div className="absolute -inset-x-20 -bottom-20 h-[50%] bg-gradient-to-t from-slate-50 to-transparent z-20 pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Philosophy / Features */}
      <section className="py-24 relative z-30 bg-slate-50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
              Nền tảng SEO Vượt Thuật Toán
            </h2>
            <p className="text-lg text-slate-600 text-pretty">
              SEO không phải là thủ thuật lừa dối Google. SEOSONA tối ưu website dựa trên giá trị cốt lõi: Nền tảng kỹ thuật vững chắc, Nội dung thỏa mãn người dùng và Uy tín thương hiệu thật.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {features.map((item, index) => {
               const Icon = item.icon;
               return (
              <div key={index} className="p-8 rounded-3xl bg-white border border-slate-200 hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col gap-5 group">
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
              Hạng mục Tối ưu Chuyên Sâu
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
        eyebrow="Quy trình"
        title="Lộ trình Triển khai SEO"
        description="Từ phân tích ban đầu đến khi đạt đỉnh vinh quang, mỗi bước đi đều được kiểm soát bằng KPI và báo cáo minh bạch."
        steps={steps}
      />

      <PricingTable 
        eyebrow="Bảng giá"
        title="Gói Dịch Vụ SEO Tổng Thể"
        description="Khoản đầu tư thông minh mang lại lợi tức (ROI) dài hạn cho doanh nghiệp."
        plans={pricingPlans}
      />

      <Faq items={faq} />
      <CtaBand />
    </main>
  );
}
