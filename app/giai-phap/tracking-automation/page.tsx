import type { Metadata } from "next";
import { CtaBand } from "@/components/sections/CtaBand";
import { Activity, Server, BarChart3, Fingerprint, Target, ShieldCheck } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tracking Data Chuyên Sâu | SEOSONA",
  description: "Lắp 'mắt thần' cho website của bạn. Theo dõi chính xác mọi điểm chạm, sự kiện và luồng chuyển đổi bằng GTM và GA4 nâng cao.",
};

export default function TrackingAutomationPage() {
  const features = [
    { title: "Server-Side Tracking (CAPI)", desc: "Xử lý dữ liệu trực tiếp trên Server (GTM Server-Side, Facebook CAPI, TikTok S2S) giúp vượt qua rào cản Ad-blockers và iOS 14+.", icon: Server },
    { title: "E-commerce Tracking", desc: "Đo lường chính xác từng đồng doanh thu, lượt thêm vào giỏ hàng, và tỷ lệ bỏ trang để tối ưu hóa ROI cho các chiến dịch Ads/SEO.", icon: BarChart3 },
    { title: "Cross-Device Attribution", desc: "Theo dõi hành trình khách hàng xuyên suốt qua nhiều thiết bị (Mobile, Desktop) và gán chính xác nguồn chuyển đổi (Attribution Modeling).", icon: Fingerprint },
    { title: "Behavioral Analytics", desc: "Cài đặt các sự kiện cuộn trang (Scroll Depth), nhấp chuột (Click), và theo dõi video để thấu hiểu chính xác cách người dùng tương tác.", icon: Activity }
  ];

  return (
    <main className="bg-slate-50">
      {/* SaaS Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#04091A] border-b border-white/5">
         {/* Background Effects */}
        <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-[#1D4ED8]/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]" />
        
        <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1D4ED8]/10 border border-[#1D4ED8]/30 text-[#1D4ED8] font-bold text-sm mb-8 animate-in slide-in-from-bottom-4 fade-in duration-700">
            <Target size={16} /> Data Precision
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tight mb-6 animate-in slide-in-from-bottom-6 fade-in duration-700 delay-100 text-balance">
            Lắp &quot;mắt thần&quot; cho <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1D4ED8] to-emerald-400">Doanh nghiệp của bạn</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 animate-in slide-in-from-bottom-8 fade-in duration-700 delay-200 text-pretty">
            Không còn &quot;đốt tiền&quot; mù quáng vào quảng cáo. Hệ thống Tracking Server-Side của chúng tôi giúp bạn ghi nhận chính xác 100% dữ liệu chuyển đổi bất chấp mọi rào cản bảo mật.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in slide-in-from-bottom-10 fade-in duration-700 delay-300">
            <Link href="/lien-he/" className="h-14 px-8 rounded-full bg-[#1D4ED8] text-white font-bold text-[15px] flex items-center justify-center hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/25 hover:-translate-y-1">
              Kiểm tra tình trạng Tracking
            </Link>
          </div>

          {/* Terminal / Event Stream Mockup */}
          <div className="mt-20 relative mx-auto max-w-4xl animate-in fade-in slide-in-from-bottom-24 duration-1000 delay-500">
            <div className="rounded-2xl border border-slate-700 bg-[#0F172A] p-2 shadow-2xl relative z-10 text-left">
               <div className="rounded-xl border border-slate-800 bg-[#020617] overflow-hidden flex flex-col font-mono text-[12px] md:text-[13px]">
                  {/* Fake Header */}
                  <div className="h-10 border-b border-slate-800 bg-[#1E293B] flex items-center px-4 justify-between shrink-0">
                     <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-slate-600"/>
                        <div className="w-3 h-3 rounded-full bg-slate-600"/>
                        <div className="w-3 h-3 rounded-full bg-slate-600"/>
                     </div>
                     <div className="text-slate-400 text-xs flex items-center gap-2">
                        <Activity size={14} className="text-emerald-400" /> Real-time Event Stream
                     </div>
                  </div>
                  {/* Fake Content */}
                  <div className="p-4 md:p-6 text-slate-300 flex flex-col gap-3 min-h-[250px] overflow-hidden">
                     <div className="flex items-start gap-4">
                        <span className="text-slate-600 mt-0.5">14:02:11</span>
                        <div className="flex-1">
                           <span className="text-blue-400 font-bold">[GTM Web]</span> <span>page_view</span> 
                           <span className="text-slate-500 ml-2">url: /dich-vu/seo-tong-the</span>
                        </div>
                     </div>
                     <div className="flex items-start gap-4">
                        <span className="text-slate-600 mt-0.5">14:02:45</span>
                        <div className="flex-1">
                           <span className="text-blue-400 font-bold">[GTM Web]</span> <span>add_to_cart</span> 
                           <span className="text-slate-500 ml-2">item_id: SEO-PKG-01</span>
                        </div>
                     </div>
                     <div className="flex items-start gap-4">
                        <span className="text-slate-600 mt-0.5">14:03:10</span>
                        <div className="flex-1 bg-emerald-500/10 border border-emerald-500/20 rounded p-2 text-emerald-400">
                           <div className="font-bold mb-1">[GTM Server] purchase_event detected via Webhook</div>
                           <div className="text-slate-400 grid grid-cols-2 gap-x-4">
                              <span>Transaction_ID: <span className="text-slate-200">#8291</span></span>
                              <span>Value: <span className="text-slate-200">24,000,000 VND</span></span>
                           </div>
                        </div>
                     </div>
                     <div className="flex items-start gap-4">
                        <span className="text-slate-600 mt-0.5">14:03:11</span>
                        <div className="flex-1">
                           <span className="text-purple-400 font-bold">[Meta CAPI]</span> <span>Sending offline conversion...</span> 
                        </div>
                     </div>
                     <div className="flex items-start gap-4 text-emerald-400 font-bold">
                        <span className="text-slate-600 mt-0.5 font-normal">14:03:12</span>
                        <div className="flex-1 flex items-center gap-2">
                           <ShieldCheck size={16} /> <span>Status 200 OK: Event processed & deduplicated.</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            {/* Glow under mockup */}
            <div className="absolute -inset-x-20 -bottom-20 h-[50%] bg-gradient-to-t from-[#04091A] to-transparent z-20 pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 relative z-30 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 text-balance">
              Giải pháp Tracking Chuẩn Quốc Tế
            </h2>
            <p className="text-lg text-slate-600 text-pretty">
              Data rác sẽ sinh ra các quyết định sai lầm. SEOSONA thiết lập luồng dữ liệu sạch, minh bạch và tuân thủ các chính sách bảo mật khắt khe nhất.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((item, index) => {
               const Icon = item.icon;
               return (
              <div key={index} className="p-8 rounded-[24px] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:border-[#1D4ED8]/30 transition-all duration-300 flex flex-col gap-4">
                <div className="h-14 w-14 rounded-2xl bg-white shadow-sm border border-slate-100 text-[#1D4ED8] flex items-center justify-center">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="text-[15px] text-slate-600 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            )})}
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
