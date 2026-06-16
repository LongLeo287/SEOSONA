import type { Metadata } from "next";
import { CtaBand } from "@/components/sections/CtaBand";
import { Faq } from "@/components/sections/Faq";
import { Process } from "@/components/sections/Process";
import { PricingTable } from "@/components/sections/PricingTable";
import { Link2, ShieldCheck, TrendingUp, Network, Zap, CheckCircle2, Globe, Activity, Share2 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dịch vụ Backlink Báo & Xây dựng Entity | SEOSONA",
  description: "Dịch vụ Backlink chất lượng cao từ SEOSONA: Backlink Báo chí, Guest Post, Entity Social. Đảm bảo an toàn, tăng sức mạnh Domain và thúc đẩy từ khóa lên Top bền vững.",
  alternates: { canonical: "/dich-vu-backlink/" }
};

export default function BacklinkPage() {
  const features = [
    { title: "Backlink Báo Trắng", desc: "Liên kết từ các đầu báo lớn, uy tín tại Việt Nam (VnExpress, Dân Trí, Tuổi Trẻ...) giúp website nhận được nguồn Trust cực lớn từ Google.", icon: Globe },
    { title: "Social Entity & Profile", desc: "Xây dựng hệ sinh thái mạng xã hội đồng nhất, khai báo Schema chuẩn xác để xác thực thực thể doanh nghiệp trên Internet.", icon: Network },
    { title: "Guest Post Cùng Ngách", desc: "Hệ thống Guest Post chọn lọc khắt khe, có traffic thật, cùng lĩnh vực hoạt động để đảm bảo tính Relevant (Liên quan) tối đa.", icon: Link2 },
    { title: "Kiểm soát Rủi Ro (Toxic)", desc: "Quy trình kiểm duyệt gắt gao, tuyệt đối không sử dụng tool bắn link rác, bảo vệ website khỏi các đợt càn quét Penguin của Google.", icon: ShieldCheck }
  ];

  const options = [
    { title: "Đa dạng Domain", desc: "Xây dựng hồ sơ liên kết (Link Profile) phong phú, tự nhiên với tỷ lệ Dofollow/Nofollow hợp lý." },
    { title: "Traffic Thật", desc: "Hệ thống site vệ tinh và báo chí đều là những trang có hàng ngàn lượt truy cập thực tế mỗi tháng." },
    { title: "Index Nhanh Chóng", desc: "Sử dụng các phương pháp an toàn để ép Index nhanh, giúp backlink phát huy tác dụng trong 7-14 ngày." },
    { title: "Contextual Link", desc: "Liên kết được đặt tự nhiên trong ngữ cảnh bài viết (Contextual), sức mạnh truyền tải tối đa." },
    { title: "Bảo hành Trọn Đời", desc: "Chính sách bảo hành bài viết và Link trên hệ thống báo chí, đền bù 1-1 nếu bị mất." },
    { title: "Báo cáo Minh Bạch", desc: "Bảng report chi tiết URL đặt link, chỉ số DR/UR/Traffic của site đặt để khách hàng dễ dàng kiểm chứng." }
  ];

  const steps = [
    { title: "Audit Link Profile", description: "Phân tích hồ sơ Backlink hiện tại của website, so sánh với đối thủ cạnh tranh để tìm ra khoảng trống." },
    { title: "Lên Kế hoạch Đi Link", description: "Xây dựng chiến lược phân bổ Textlink (Anchor text) tỷ lệ chuẩn, chọn lọc danh sách Báo/Guest Post phù hợp." },
    { title: "Chuẩn bị Nội dung", description: "Đội ngũ Content sản xuất các bài viết PR, Guest Post chất lượng cao, lồng ghép liên kết tự nhiên." },
    { title: "Triển khai & Kiểm duyệt", description: "Tiến hành đăng tải nội dung và đặt Link lên các site vệ tinh, báo điện tử, mạng xã hội." },
    { title: "Báo cáo & Đo lường", description: "Nghiệm thu URL, thúc đẩy Index và theo dõi sức mạnh (DA/PA, DR/UR) đổ về website chính." }
  ];

  const pricingPlans = [
    {
      name: "Gói Entity Foundation",
      price: "3.500.000đ",
      description: "Tạo lập nền tảng định danh thương hiệu (Entity) vững chắc cho Website mới.",
      features: [
        "Xây dựng 300+ Profile Social",
        "Khai báo Google Maps & Business",
        "Tối ưu Schema Organization",
        "Đồng bộ NAP (Name - Address - Phone)",
        "Ép Index tỷ lệ > 90%"
      ]
    },
    {
      name: "Gói Guest Post Authority",
      price: "15.000.000đ",
      description: "Thúc đẩy sức mạnh toàn diện cho Website thông qua mạng lưới site cùng ngách.",
      features: [
        "20 Guest Post chất lượng cao",
        "Site có Traffic thật > 1000/tháng",
        "Chỉ số DR > 20, UR > 20",
        "Bao gồm bài viết PR chuẩn SEO",
        "Bảo hành link trọn đời"
      ],
      isPopular: true
    },
    {
      name: "Gói Booking Báo Lớn",
      price: "Liên hệ",
      description: "Phủ sóng thương hiệu trên các đầu báo uy tín nhất Việt Nam.",
      features: [
        "Đăng bài trên VnExpress, Dân Trí...",
        "Link Dofollow giá trị cao",
        "Tăng Trust Rank đột phá",
        "Hỗ trợ viết bài PR Báo chí",
        "Chiết khấu hấp dẫn cho Agency"
      ],
      ctaText: "Nhận danh sách Báo"
    }
  ];

  const faq = [
    { question: "Backlink có còn quan trọng trong SEO hiện nay không?", answer: "Có. Mặc dù Google ngày càng thông minh hơn trong việc đánh giá Content, nhưng Backlink vẫn là một trong 3 yếu tố xếp hạng cốt lõi (Ranking Factors). Nó giống như những 'phiếu bầu' tín nhiệm giúp website của bạn uy tín hơn." },
    { question: "Đi bao nhiêu Backlink thì lên Top?", answer: "Không có con số chính xác. Việc lên top phụ thuộc vào chất lượng thay vì số lượng. Một backlink từ báo lớn có thể mạnh bằng hàng trăm backlink từ các diễn đàn rác. SEOSONA sẽ phân tích đối thủ để tính toán số lượng cần thiết cho bạn." },
    { question: "Website mới có nên đi Backlink ngay không?", answer: "Với website mới, bạn nên ưu tiên xây dựng nội dung (Content) và nền tảng Entity trước. Sau khoảng 1-2 tháng khi website đã có Trust cơ bản, mới bắt đầu đi Guest Post hoặc Backlink báo để tránh bị Google phạt (Sandbox)." }
  ];

  return (
    <main className="bg-slate-50">
      {/* SaaS Light Mode Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white border-b border-slate-200">
         {/* Background Effects */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-100/50 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-100/30 blur-[100px] rounded-full pointer-events-none" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#a855f70a_1px,transparent_1px),linear-gradient(to_bottom,#a855f70a_1px,transparent_1px)] bg-[size:32px_32px] opacity-40" />
        
        <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 text-purple-600 font-bold text-sm mb-8 animate-in slide-in-from-bottom-4 fade-in duration-700 shadow-sm">
            <Link2 size={16} /> An Toàn - Uy Tín - Tăng Sức Mạnh
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 tracking-tight mb-6 animate-in slide-in-from-bottom-6 fade-in duration-700 delay-100 text-balance leading-[1.1]">
            Dịch vụ Xây Dựng Backlink <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-600">Thúc Đẩy Domain Trust</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 animate-in slide-in-from-bottom-8 fade-in duration-700 delay-200 text-pretty">
            Bơm nguồn năng lượng khổng lồ cho Website của bạn với hệ thống Backlink Báo chí, Guest Post và Entity độc quyền, an toàn 100% trước thuật toán Google.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in slide-in-from-bottom-10 fade-in duration-700 delay-300">
            <Link href="/lien-he/" className="h-14 px-8 rounded-full bg-purple-600 text-white font-bold text-[15px] flex items-center justify-center hover:bg-purple-700 transition-all shadow-xl hover:shadow-purple-500/25 hover:-translate-y-1">
              Nhận Báo Giá Backlink
            </Link>
            <Link href="/tai-nguyen/" className="h-14 px-8 rounded-full bg-white text-slate-900 border border-slate-200 font-bold text-[15px] flex items-center justify-center hover:bg-slate-50 transition-all hover:-translate-y-1 shadow-sm">
              Xem Danh Sách Báo
            </Link>
          </div>

          {/* Interactive Network Graph Dashboard Mockup */}
          <div className="mt-20 relative mx-auto max-w-5xl animate-in fade-in slide-in-from-bottom-24 duration-1000 delay-500">
            <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-[0_30px_60px_rgba(168,85,247,0.08)] relative z-10 text-left">
               <div className="rounded-xl border border-slate-100 bg-slate-900 overflow-hidden relative min-h-[400px]">
                  
                  {/* Dashboard Header */}
                  <div className="absolute top-0 left-0 right-0 h-16 border-b border-slate-800 bg-slate-900/80 backdrop-blur-md flex items-center px-6 justify-between z-20">
                     <div className="flex items-center gap-4">
                        <div className="flex gap-2">
                           <div className="w-3 h-3 rounded-full bg-slate-700"/>
                           <div className="w-3 h-3 rounded-full bg-slate-700"/>
                           <div className="w-3 h-3 rounded-full bg-slate-700"/>
                        </div>
                        <div className="h-6 w-px bg-slate-800"></div>
                        <div className="text-white font-bold flex items-center gap-2">
                           <Activity size={20} className="text-purple-400" /> 
                           Domain Authority Tracker
                        </div>
                     </div>
                     <div className="flex gap-4 items-center">
                        <div className="text-slate-400 text-sm font-medium">Domain Rating:</div>
                        <div className="px-3 py-1 bg-purple-500/20 text-purple-400 font-black rounded border border-purple-500/30">72.4</div>
                     </div>
                  </div>

                  {/* Network Graph Animation Area */}
                  <div className="absolute inset-0 pt-16 flex items-center justify-center overflow-hidden">
                     {/* Center Node (Client Site) */}
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                        <div className="w-20 h-20 rounded-full bg-purple-600 shadow-[0_0_40px_rgba(168,85,247,0.6)] flex items-center justify-center border-4 border-slate-900 animate-[pulse_3s_ease-in-out_infinite]">
                           <Globe size={32} className="text-white" />
                        </div>
                        <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 text-white font-bold whitespace-nowrap bg-slate-800 px-3 py-1 rounded-full text-xs border border-slate-700">Client Website</div>
                     </div>

                     {/* SVG Connection Lines */}
                     <svg className="absolute inset-0 w-full h-full opacity-60">
                        <defs>
                           <linearGradient id="linkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#a855f7" />
                              <stop offset="100%" stopColor="#3b82f6" />
                           </linearGradient>
                        </defs>
                        {/* Lines connecting to center (roughly 50% 50%) */}
                        <line x1="20%" y1="30%" x2="50%" y2="50%" stroke="url(#linkGradient)" strokeWidth="2" className="animate-[dash_2s_ease-out_infinite]" strokeDasharray="10 5" />
                        <line x1="80%" y1="20%" x2="50%" y2="50%" stroke="url(#linkGradient)" strokeWidth="3" className="animate-[dash_3s_ease-out_infinite]" strokeDasharray="15 5" />
                        <line x1="15%" y1="70%" x2="50%" y2="50%" stroke="url(#linkGradient)" strokeWidth="2" className="animate-[dash_2.5s_ease-out_infinite]" strokeDasharray="10 5" />
                        <line x1="75%" y1="80%" x2="50%" y2="50%" stroke="url(#linkGradient)" strokeWidth="4" className="animate-[dash_1.5s_ease-out_infinite]" strokeDasharray="20 10" />
                        <line x1="45%" y1="15%" x2="50%" y2="50%" stroke="url(#linkGradient)" strokeWidth="2" className="animate-[dash_4s_ease-out_infinite]" strokeDasharray="10 5" />
                        <line x1="60%" y1="85%" x2="50%" y2="50%" stroke="url(#linkGradient)" strokeWidth="3" className="animate-[dash_2s_ease-out_infinite]" strokeDasharray="10 5" />
                     </svg>

                     {/* Satellite Nodes (Backlink Sources) */}
                     <div className="absolute top-[30%] left-[20%] -translate-x-1/2 -translate-y-1/2 group cursor-pointer">
                        <div className="w-12 h-12 rounded-full bg-blue-500 border-2 border-slate-800 flex items-center justify-center group-hover:scale-125 transition-transform">
                           <span className="text-white font-bold text-xs">VnE</span>
                        </div>
                        <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 text-slate-300 text-[10px] px-2 py-1 rounded whitespace-nowrap">DR: 89 • Traffic: 5M+</div>
                     </div>

                     <div className="absolute top-[20%] left-[80%] -translate-x-1/2 -translate-y-1/2 group cursor-pointer">
                        <div className="w-16 h-16 rounded-full bg-emerald-500 border-2 border-slate-800 flex items-center justify-center group-hover:scale-125 transition-transform">
                           <span className="text-white font-bold text-sm">Tuổi Trẻ</span>
                        </div>
                        <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 text-slate-300 text-[10px] px-2 py-1 rounded whitespace-nowrap">DR: 85 • Traffic: 4.2M+</div>
                     </div>

                     <div className="absolute top-[70%] left-[15%] -translate-x-1/2 -translate-y-1/2 group cursor-pointer">
                        <div className="w-10 h-10 rounded-full bg-amber-500 border-2 border-slate-800 flex items-center justify-center group-hover:scale-125 transition-transform">
                           <Network size={16} className="text-white" />
                        </div>
                        <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 text-slate-300 text-[10px] px-2 py-1 rounded whitespace-nowrap">Guest Post • DR: 45</div>
                     </div>

                     <div className="absolute top-[80%] left-[75%] -translate-x-1/2 -translate-y-1/2 group cursor-pointer">
                        <div className="w-14 h-14 rounded-full bg-indigo-500 border-2 border-slate-800 flex items-center justify-center group-hover:scale-125 transition-transform">
                           <span className="text-white font-bold text-xs">Dân Trí</span>
                        </div>
                        <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 text-slate-300 text-[10px] px-2 py-1 rounded whitespace-nowrap">DR: 88 • Traffic: 4.8M+</div>
                     </div>

                     <div className="absolute top-[15%] left-[45%] -translate-x-1/2 -translate-y-1/2 group cursor-pointer">
                        <div className="w-8 h-8 rounded-full bg-rose-500 border-2 border-slate-800 flex items-center justify-center group-hover:scale-125 transition-transform">
                           <Share2 size={12} className="text-white" />
                        </div>
                     </div>

                     <div className="absolute top-[85%] left-[60%] -translate-x-1/2 -translate-y-1/2 group cursor-pointer">
                        <div className="w-10 h-10 rounded-full bg-cyan-500 border-2 border-slate-800 flex items-center justify-center group-hover:scale-125 transition-transform">
                           <Link2 size={16} className="text-white" />
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

      {/* Philosophy / Features */}
      <section className="py-24 relative z-30 bg-slate-50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
              Hệ thống Backlink Tinh Hoa
            </h2>
            <p className="text-lg text-slate-600 text-pretty">
              SEOSONA cam kết chỉ sử dụng những backlink có chỉ số cao, lưu lượng truy cập thật. Tuyệt đối nói không với Spam Link, Link rác gây hại cho Website.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {features.map((item, index) => {
               const IconComponent = item.icon as any;
               return (
              <div key={index} className="p-8 rounded-3xl bg-white border border-slate-200 hover:shadow-xl hover:border-purple-300 transition-all duration-300 flex flex-col gap-5 group">
                <div className="h-14 w-14 rounded-2xl bg-purple-50 border border-purple-100 text-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <IconComponent size={28} />
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
              Tiêu chuẩn Đặt Backlink
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {options.map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-slate-100 shadow-sm">
                 <CheckCircle2 size={24} className="text-purple-500 shrink-0 mt-1" />
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
        title="Triển khai Link Building"
        description="Quy trình đi link bài bản, mô phỏng sự lan truyền tự nhiên của thông tin trên mạng Internet."
        steps={steps}
      />

      <PricingTable 
        eyebrow="Bảng giá"
        title="Báo Giá Dịch Vụ Backlink"
        description="Đầu tư vào Backlink chất lượng cao là tấm khiên bảo vệ Website bạn trước mọi thuật toán."
        plans={pricingPlans}
      />

      <Faq items={faq} />
      <CtaBand />
    </main>
  );
}
