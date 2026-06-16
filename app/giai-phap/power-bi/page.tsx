import type { Metadata } from "next";
import { CtaBand } from "@/components/sections/CtaBand";
import { LineChart, BarChart3, PieChart, TrendingUp, Layers, MousePointerClick, RefreshCw, Smartphone } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dashboard Power BI | SEOSONA",
  description: "Trực quan hóa dữ liệu Marketing với Power BI. Nắm bắt toàn bộ sức khỏe dự án SEO, Ads và luồng doanh thu theo thời gian thực.",
};

export default function PowerBiPage() {
  const features = [
    { title: "Báo Cáo Thời Gian Thực", desc: "Dữ liệu được cập nhật tự động 24/7 từ Website, CRM và các nền tảng Ads. Không còn cảnh chờ đợi báo cáo cuối tháng.", icon: RefreshCw },
    { title: "Hợp Nhất Đa Kênh", desc: "Tích hợp số liệu từ SEO, Google Ads, Facebook Ads và Zalo vào một Dashboard duy nhất để nhìn thấy bức tranh tổng thể.", icon: Layers },
    { title: "Tương Tác Biểu Đồ Sống", desc: "Sở hữu khả năng lọc dữ liệu, drill-down (đi sâu) vào từng tệp khách hàng chỉ bằng một cú click chuột.", icon: MousePointerClick },
    { title: "Truy Cập Mọi Nơi", desc: "Báo cáo tương thích hoàn hảo trên Mobile, Tablet giúp các chủ doanh nghiệp có thể theo dõi tiến độ kinh doanh mọi lúc mọi nơi.", icon: Smartphone }
  ];

  return (
    <main className="bg-[#020617]">
      {/* SaaS Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-white/5">
         {/* Background Effects */}
        <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-rose-500/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-bold text-sm mb-8 animate-in slide-in-from-bottom-4 fade-in duration-700">
            <LineChart size={16} /> Data Visualization
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tight mb-6 animate-in slide-in-from-bottom-6 fade-in duration-700 delay-100 text-balance">
            Báo cáo trực quan với <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-rose-400">Microsoft Power BI</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 animate-in slide-in-from-bottom-8 fade-in duration-700 delay-200 text-pretty">
            Chấm dứt kỷ nguyên làm báo cáo Excel thủ công. Chúng tôi xây dựng hệ thống báo cáo Data tự động hoá, biến những con số khô khan thành Insights hành động ngay lập tức.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in slide-in-from-bottom-10 fade-in duration-700 delay-300">
            <Link href="/lien-he/" className="h-14 px-8 rounded-full bg-amber-500 text-white font-bold text-[15px] flex items-center justify-center hover:bg-amber-600 transition-all shadow-lg shadow-amber-500/25 hover:-translate-y-1">
              Xem Demo Dashboard
            </Link>
          </div>

          {/* Power BI Mockup */}
          <div className="mt-20 relative mx-auto max-w-5xl animate-in fade-in slide-in-from-bottom-24 duration-1000 delay-500">
            <div className="rounded-2xl border border-slate-700 bg-[#0F172A] p-2 md:p-3 shadow-2xl relative z-10 text-left">
               <div className="rounded-xl border border-slate-800 bg-[#020617] overflow-hidden flex flex-col h-[500px]">
                  {/* Fake Header */}
                  <div className="h-12 border-b border-slate-800 bg-[#1E293B] flex items-center px-4 justify-between shrink-0">
                     <div className="flex gap-4">
                        <div className="text-amber-400 font-bold flex items-center gap-2"><BarChart3 size={18} /> SEOSONA BI</div>
                        <div className="hidden md:flex gap-4 ml-6 text-sm text-slate-400">
                           <span className="text-white border-b-2 border-amber-500 pb-[13px] pt-[15px]">Executive Overview</span>
                           <span className="pb-[13px] pt-[15px] hover:text-white cursor-pointer">Traffic Source</span>
                           <span className="pb-[13px] pt-[15px] hover:text-white cursor-pointer">Sales Funnel</span>
                        </div>
                     </div>
                     <div className="flex items-center gap-3 text-slate-400">
                        <RefreshCw size={16} />
                     </div>
                  </div>
                  {/* Fake Content */}
                  <div className="flex-1 p-4 md:p-6 flex flex-col gap-4 overflow-y-auto">
                     <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-[#0F172A] border border-slate-800 rounded-lg p-4">
                           <div className="text-slate-500 text-xs uppercase mb-1 font-semibold">Tổng doanh thu</div>
                           <div className="text-2xl font-bold text-white mb-2">2.45B ₫</div>
                           <div className="text-emerald-400 text-xs font-medium flex items-center gap-1"><TrendingUp size={12}/> +15% so với tháng trước</div>
                        </div>
                        <div className="bg-[#0F172A] border border-slate-800 rounded-lg p-4">
                           <div className="text-slate-500 text-xs uppercase mb-1 font-semibold">Lead thu về</div>
                           <div className="text-2xl font-bold text-white mb-2">1,248</div>
                           <div className="text-emerald-400 text-xs font-medium flex items-center gap-1"><TrendingUp size={12}/> +8.2% so với tháng trước</div>
                        </div>
                        <div className="bg-[#0F172A] border border-slate-800 rounded-lg p-4">
                           <div className="text-slate-500 text-xs uppercase mb-1 font-semibold">Tỷ lệ chốt Sales</div>
                           <div className="text-2xl font-bold text-white mb-2">24.5%</div>
                           <div className="text-rose-400 text-xs font-medium flex items-center gap-1"><TrendingUp size={12} className="rotate-180"/> -2.1% so với tháng trước</div>
                        </div>
                        <div className="bg-[#0F172A] border border-slate-800 rounded-lg p-4">
                           <div className="text-slate-500 text-xs uppercase mb-1 font-semibold">ROAS SEO</div>
                           <div className="text-2xl font-bold text-white mb-2">6.8x</div>
                           <div className="text-emerald-400 text-xs font-medium flex items-center gap-1"><TrendingUp size={12}/> +0.5x so với tháng trước</div>
                        </div>
                     </div>
                     <div className="flex flex-col md:flex-row gap-4 flex-1 min-h-[250px]">
                        <div className="flex-[2] bg-[#0F172A] border border-slate-800 rounded-lg p-4 flex flex-col">
                           <div className="text-white font-bold mb-4">Biểu đồ Doanh thu & Lead</div>
                           <div className="flex-1 flex items-end gap-2 px-2">
                              {[30, 45, 60, 50, 75, 90, 85, 100, 65, 80, 95, 110].map((h, i) => (
                                 <div key={i} className="flex-1 group relative flex justify-center">
                                    <div className="absolute bottom-0 w-full bg-amber-500/80 rounded-t-sm group-hover:bg-amber-400 transition-colors" style={{ height: `${h * 0.7}%` }}></div>
                                    <div className="absolute bottom-0 w-1/2 bg-rose-500/80 rounded-t-sm z-10 group-hover:bg-rose-400 transition-colors" style={{ height: `${h * 0.4}%` }}></div>
                                 </div>
                              ))}
                           </div>
                           <div className="flex justify-between mt-3 text-xs text-slate-500">
                              <span>T1</span><span>T2</span><span>T3</span><span>T4</span><span>T5</span><span>T6</span>
                              <span className="hidden md:inline">T7</span><span className="hidden md:inline">T8</span><span className="hidden md:inline">T9</span>
                              <span className="hidden md:inline">T10</span><span className="hidden md:inline">T11</span><span>T12</span>
                           </div>
                        </div>
                        <div className="flex-1 bg-[#0F172A] border border-slate-800 rounded-lg p-4 flex flex-col">
                           <div className="text-white font-bold mb-4">Nguồn Traffic</div>
                           <div className="flex-1 relative flex items-center justify-center">
                              {/* Simple CSS Pie Chart representation */}
                              <div className="w-32 h-32 rounded-full border-[12px] border-amber-500 border-r-rose-500 border-b-emerald-500 relative shadow-inner rotate-45"></div>
                              <div className="absolute text-xl font-bold text-white">4.8K</div>
                           </div>
                           <div className="mt-4 flex flex-col gap-2 text-xs text-slate-400">
                              <div className="flex justify-between items-center"><div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-amber-500"></div> SEO Organic</div> <span className="text-white">65%</span></div>
                              <div className="flex justify-between items-center"><div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-rose-500"></div> Google Ads</div> <span className="text-white">20%</span></div>
                              <div className="flex justify-between items-center"><div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-emerald-500"></div> Social Media</div> <span className="text-white">15%</span></div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            {/* Glow under mockup */}
            <div className="absolute -inset-x-20 -bottom-20 h-[50%] bg-gradient-to-t from-[#020617] to-transparent z-20 pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 relative z-30">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
              Sức mạnh của Business Intelligence
            </h2>
            <p className="text-lg text-slate-400 text-pretty">
              Báo cáo của chúng tôi được thiết kế dựa trên góc nhìn quản trị của chủ doanh nghiệp. Dữ liệu sạch, biểu đồ thông minh, và bảo mật tuyệt đối.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((item, index) => {
               const Icon = item.icon;
               return (
              <div key={index} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-amber-500/50 transition-all duration-300 flex flex-col sm:flex-row gap-6 items-start">
                <div className="h-14 w-14 shrink-0 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                  <Icon size={28} />
                </div>
                <div>
                   <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                   <p className="text-[15px] text-slate-400 leading-relaxed">
                     {item.desc}
                   </p>
                </div>
              </div>
            )})}
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
