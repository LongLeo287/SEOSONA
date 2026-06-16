import type { Metadata } from "next";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site";
import { Search, Megaphone, MonitorPlay, Target, TrendingUp, BarChart3, ArrowRight, Activity, Filter, Database } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dịch vụ Quảng cáo Đa kênh (Performance Marketing) | SEOSONA",
  description: "Giải pháp Performance Marketing đa điểm chạm: Google Ads, Facebook Ads và YouTube Ads. Tối ưu chi phí, tăng trưởng khách hàng tiềm năng và tối đa ROI.",
  alternates: { canonical: "/dich-vu-ads/" }
};

export default function AdsHubPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Dịch vụ Quảng cáo Đa Kênh",
    description: "Giải pháp Performance Marketing đa điểm chạm: Google Ads, Facebook Ads và YouTube Ads. Tối ưu chi phí, tăng trưởng khách hàng tiềm năng và tối đa ROI.",
    provider: { "@type": "Organization", name: siteConfig.name, url: siteConfig.domain },
    areaServed: "Việt Nam",
    serviceType: "Performance Marketing"
  };

  const adServices = [
    {
      title: "Google Ads",
      desc: "Bắt trọn nhu cầu tìm kiếm chủ động. Tối ưu chuyển đổi thật với Search Ads, Performance Max và Tracking chuẩn xác.",
      href: "/dich-vu-ads/google/",
      icon: Search,
      color: "blue"
    },
    {
      title: "Facebook Ads",
      desc: "Tạo nhu cầu và nuôi dưỡng khách hàng tiềm năng qua hệ thống phễu nội dung, A/B testing liên tục và tối ưu CPL.",
      href: "/dich-vu-ads/facebook/",
      icon: Megaphone,
      color: "indigo"
    },
    {
      title: "YouTube Ads",
      desc: "Phủ sóng thương hiệu và tăng nhận diện bằng Video Funnel. Tối ưu View Rate, CPV và Remarketing hiệu quả.",
      href: "/dich-vu-ads/youtube/",
      icon: MonitorPlay,
      color: "rose"
    }
  ];

  return (
    <main className="bg-[#0A0F1C]">
      <JsonLd data={serviceSchema} />
      
      {/* Dark Mode Premium Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-white/5">
         {/* Deep Background Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-900/20 blur-[150px] rounded-full pointer-events-none" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:64px_64px]" />
        
        <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 font-bold text-sm mb-8 animate-in slide-in-from-bottom-4 fade-in duration-700 shadow-sm backdrop-blur-md">
            <Activity size={16} /> Omnichannel Performance
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tight mb-6 animate-in slide-in-from-bottom-6 fade-in duration-700 delay-100 text-balance leading-[1.1]">
            Giải pháp Quảng cáo <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-rose-400">Đa Kênh Chuyển Đổi</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-16 animate-in slide-in-from-bottom-8 fade-in duration-700 delay-200 text-pretty">
            Hệ thống phễu quảng cáo liên kết mạnh mẽ giữa Google, Facebook và YouTube. Không đốt tiền mù quáng, chúng tôi bám đuổi và chốt Sale triệt để dựa trên dữ liệu.
          </p>

          {/* Omnichannel Interactive Mockup */}
          <div className="relative max-w-5xl mx-auto h-[400px] md:h-[500px] mt-10 animate-in fade-in slide-in-from-bottom-24 duration-1000 delay-300">
             
             {/* Center Node (CRM / Website) */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-slate-900 border-2 border-indigo-500/50 shadow-[0_0_50px_rgba(99,102,241,0.3)] flex flex-col items-center justify-center p-4 relative overflow-hidden group">
                   <div className="absolute inset-0 bg-indigo-500/10 group-hover:bg-indigo-500/20 transition-colors" />
                   <Database size={32} className="text-indigo-400 mb-2" />
                   <span className="text-white font-black text-sm text-center">Data Hub<br/>(CRM/Web)</span>
                   
                   {/* Radar ping effect */}
                   <div className="absolute inset-0 rounded-full border border-indigo-400/50 scale-150 opacity-0 animate-[ping_3s_ease-out_infinite]" />
                </div>
             </div>

             {/* Connection Lines (SVGs) */}
             <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none" preserveAspectRatio="none">
                {/* Facebook to Hub */}
                <path d="M 15% 25% Q 50% 10% 50% 50%" fill="none" stroke="url(#indigo-grad)" strokeWidth="3" strokeDasharray="6 6" className="animate-[dash_20s_linear_infinite]" />
                {/* Google to Hub */}
                <path d="M 85% 25% Q 50% 10% 50% 50%" fill="none" stroke="url(#blue-grad)" strokeWidth="3" strokeDasharray="6 6" className="animate-[dash_15s_linear_infinite_reverse]" />
                {/* YouTube to Hub */}
                <path d="M 50% 85% Q 50% 85% 50% 50%" fill="none" stroke="url(#rose-grad)" strokeWidth="3" strokeDasharray="6 6" className="animate-[dash_25s_linear_infinite]" />
                
                <defs>
                   <linearGradient id="indigo-grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#818cf8" stopOpacity="0.8" /><stop offset="100%" stopColor="#4f46e5" stopOpacity="0" /></linearGradient>
                   <linearGradient id="blue-grad" x1="100%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#60a5fa" stopOpacity="0.8" /><stop offset="100%" stopColor="#2563eb" stopOpacity="0" /></linearGradient>
                   <linearGradient id="rose-grad" x1="50%" y1="100%" x2="50%" y2="0%"><stop offset="0%" stopColor="#fb7185" stopOpacity="0.8" /><stop offset="100%" stopColor="#e11d48" stopOpacity="0" /></linearGradient>
                </defs>
             </svg>

             {/* Floating Source Nodes */}
             {/* Facebook Node */}
             <div className="absolute top-[10%] left-[5%] md:left-[15%] w-48 bg-slate-900/80 backdrop-blur-xl border border-indigo-500/30 rounded-2xl p-4 shadow-[0_0_30px_rgba(79,70,229,0.15)] z-20 hover:-translate-y-2 transition-transform duration-300">
                <div className="flex items-center gap-3 mb-3">
                   <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center"><Megaphone size={18} className="text-indigo-400" /></div>
                   <div className="text-left">
                      <div className="text-white font-bold text-sm">Demand Gen</div>
                      <div className="text-indigo-300 text-xs">Meta Ads</div>
                   </div>
                </div>
                <div className="flex justify-between items-center text-xs text-slate-400 font-medium"><span>Leads</span><span className="text-emerald-400">+1,240</span></div>
             </div>

             {/* Google Node */}
             <div className="absolute top-[10%] right-[5%] md:right-[15%] w-48 bg-slate-900/80 backdrop-blur-xl border border-blue-500/30 rounded-2xl p-4 shadow-[0_0_30px_rgba(59,130,246,0.15)] z-20 hover:-translate-y-2 transition-transform duration-300">
                <div className="flex items-center gap-3 mb-3">
                   <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center"><Search size={18} className="text-blue-400" /></div>
                   <div className="text-left">
                      <div className="text-white font-bold text-sm">Search Intent</div>
                      <div className="text-blue-300 text-xs">Google Ads</div>
                   </div>
                </div>
                <div className="flex justify-between items-center text-xs text-slate-400 font-medium"><span>Conv. Rate</span><span className="text-emerald-400">8.5%</span></div>
             </div>

             {/* YouTube Node */}
             <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 w-56 bg-slate-900/80 backdrop-blur-xl border border-rose-500/30 rounded-2xl p-4 shadow-[0_0_30px_rgba(225,29,72,0.15)] z-20 hover:-translate-y-2 transition-transform duration-300">
                <div className="flex items-center gap-3 mb-3">
                   <div className="w-10 h-10 rounded-full bg-rose-500/20 flex items-center justify-center"><MonitorPlay size={18} className="text-rose-400" /></div>
                   <div className="text-left">
                      <div className="text-white font-bold text-sm">Brand & Remarketing</div>
                      <div className="text-rose-300 text-xs">YouTube Ads</div>
                   </div>
                </div>
                <div className="flex justify-between items-center text-xs text-slate-400 font-medium"><span>View Rate</span><span className="text-emerald-400">45.2%</span></div>
             </div>

          </div>
        </div>
      </section>

      {/* Hub Navigation Grid (Now in Dark Mode sync) */}
      <section className="py-24 relative z-30 bg-[#0A0F1C]">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {adServices.map((service, index) => {
               const Icon = service.icon;
               const colorClass = 
                 service.color === "blue" ? "text-blue-400 bg-blue-500/10 border-blue-500/20 group-hover:border-blue-500/50 group-hover:bg-blue-500/20" :
                 service.color === "indigo" ? "text-indigo-400 bg-indigo-500/10 border-indigo-500/20 group-hover:border-indigo-500/50 group-hover:bg-indigo-500/20" :
                 "text-rose-400 bg-rose-500/10 border-rose-500/20 group-hover:border-rose-500/50 group-hover:bg-rose-500/20";
               
               const glowClass = 
                 service.color === "blue" ? "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]" :
                 service.color === "indigo" ? "group-hover:shadow-[0_0_30px_rgba(79,70,229,0.15)]" :
                 "group-hover:shadow-[0_0_30px_rgba(225,29,72,0.15)]";

               return (
              <Link key={index} href={service.href} className={`group flex flex-col p-8 rounded-3xl bg-slate-900 border border-white/10 transition-all duration-300 relative overflow-hidden ${glowClass}`}>
                <div className={`h-16 w-16 rounded-2xl flex items-center justify-center border transition-all duration-300 group-hover:scale-110 mb-6 relative z-10 ${colorClass}`}>
                  <Icon size={32} />
                </div>
                <h3 className="text-2xl font-black text-white mb-3 relative z-10">{service.title}</h3>
                <p className="text-[15px] text-slate-400 leading-relaxed mb-8 flex-grow relative z-10 group-hover:text-slate-300 transition-colors">
                  {service.desc}
                </p>
                <div className="flex items-center gap-2 text-sm font-bold text-white group-hover:gap-3 transition-all relative z-10 mt-auto">
                   Tìm hiểu chi tiết <ArrowRight size={16} />
                </div>
              </Link>
            )})}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-[#0A0F1C] border-t border-white/10">
         <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-16">
              Khác biệt cốt lõi trong vận hành
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-5xl mx-auto">
               <div className="bg-slate-900/50 p-6 rounded-2xl border border-white/5">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-slate-300 mb-4">
                     <Filter size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Tư duy Phễu (Funnel)</h3>
                  <p className="text-slate-400">Facebook tạo nhu cầu, Google đón luồng tìm kiếm, YouTube nuôi dưỡng thương hiệu. Mọi kênh liên kết chặt chẽ.</p>
               </div>
               <div className="bg-slate-900/50 p-6 rounded-2xl border border-white/5">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-slate-300 mb-4">
                     <Target size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Đo lường Lead chất lượng</h3>
                  <p className="text-slate-400">Loại bỏ tư duy chạy Ads lấy click/inbox giá rẻ. Tối ưu dựa trên Tracking Data sâu đến bước ra đơn (CRM).</p>
               </div>
               <div className="bg-slate-900/50 p-6 rounded-2xl border border-white/5">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-slate-300 mb-4">
                     <TrendingUp size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Kiểm soát Ngân sách</h3>
                  <p className="text-slate-400">Tăng trưởng dựa trên công thức A/B testing, kiểm soát rò rỉ dòng tiền bằng thao tác Audit thường xuyên.</p>
               </div>
            </div>
         </div>
      </section>

      <CtaBand />
    </main>
  );
}
