"use client";

import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { Database, LineChart, Server, Activity, ArrowRight, ShieldCheck, Zap, Workflow } from "lucide-react";
import Link from "next/link";
import { SiGoogleanalytics, SiFacebook, SiTiktok } from "react-icons/si";

const features = [
  {
    title: "Server-side Tracking",
    description: "Khắc phục triệt để tình trạng mất Data do iOS 14+ và Ad-blockers. Gửi dữ liệu trực tiếp từ Server của bạn đến nền tảng quảng cáo.",
    icon: Server
  },
  {
    title: "Conversion API (CAPI)",
    description: "Bypass hoàn toàn giới hạn Cookie của trình duyệt. Đảm bảo Facebook, Google nhận 100% tín hiệu chuyển đổi để học tệp khách hàng nhanh hơn.",
    icon: Zap
  },
  {
    title: "Data Warehouse & Real-time",
    description: "Tập trung mọi nguồn dữ liệu (CRM, Ads, Website) về một Hub duy nhất (BigQuery/Looker Studio) để phân tích bức tranh toàn cảnh.",
    icon: Database
  }
];

export function TrackingDataSection() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-24 lg:py-32">
      {/* Background Decor */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-[1000px] h-[500px] bg-[radial-gradient(ellipse_at_top,#e2e8f0_0%,transparent_70%)] opacity-50" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:32px_32px] opacity-40" />

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left Content */}
          <RevealOnScroll direction="right" className="flex flex-col gap-8">
            <div>
              <SectionBadge live={true} icon={<Activity className="h-3.5 w-3.5" />}>
                Data-Driven Ecosystem
              </SectionBadge>
              <h2 className="mt-6 text-[32px] font-black leading-[1.15] tracking-tight text-[#04091A] sm:text-4xl md:text-5xl lg:text-[44px] text-balance">
                Không bỏ lót bất kỳ một <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  điểm chạm chuyển đổi nào
                </span>
              </h2>
              <p className="mt-6 max-w-xl text-[17px] font-medium leading-relaxed text-slate-500 text-pretty">
                Sử dụng các hệ thống theo dõi truyền thống (Client-side) sẽ khiến bạn mất đến 30% dữ liệu quan trọng. Chúng tôi thiết lập luồng Tracking Server-side chuyên sâu, giúp máy học của Facebook và Google Ads nhận dữ liệu chính xác tuyệt đối.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div key={idx} className="flex gap-4">
                    <div className="mt-1 shrink-0 flex items-start">
                      <Icon className="h-6 w-6 text-[#1D4ED8]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                      <p className="text-[15px] leading-relaxed text-slate-500">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-4">
              <Link 
                href="/giai-phap/tracking-automation/"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-[#1D4ED8] px-8 text-[15px] font-bold text-white transition-all hover:bg-blue-800 hover:-translate-y-1 shadow-lg shadow-blue-800/25"
              >
                Khám phá Giải pháp Tracking <ArrowRight size={18} />
              </Link>
            </div>
          </RevealOnScroll>

          {/* Right SVG Mockup */}
          <RevealOnScroll direction="left" delay={200} className="relative h-full min-h-[500px] w-full flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[550px] aspect-square lg:aspect-auto lg:h-[600px] rounded-3xl border border-slate-200 bg-white shadow-[0_40px_80px_rgba(0,0,0,0.05)] overflow-hidden">
               {/* Dashboard Header Mockup */}
               <div className="h-14 border-b border-slate-100 bg-slate-50 flex items-center px-6 justify-between shrink-0">
                  <div className="flex gap-2">
                     <div className="w-3 h-3 rounded-full bg-rose-400"/>
                     <div className="w-3 h-3 rounded-full bg-amber-400"/>
                     <div className="w-3 h-3 rounded-full bg-blue-400"/>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
                    <ShieldCheck size={14} className="text-[#1D4ED8]" />
                    <span>Server-Side Data Stream</span>
                  </div>
               </div>

               {/* Network Canvas */}
               <div className="absolute inset-0 top-14 bg-[#fafcff]">
                  {/* Grid Background */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:24px_24px] opacity-30" />

                  {/* SVG Connections - viewBox for consistent coordinates matching CSS % */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 600 500" preserveAspectRatio="none" style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.04))" }}>
                     <defs>
                        <linearGradient id="streamGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                           <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3"/>
                           <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0.8"/>
                        </linearGradient>
                        <linearGradient id="streamGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                           <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3"/>
                           <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0.8"/>
                        </linearGradient>
                        <linearGradient id="streamGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
                           <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.3"/>
                           <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0.8"/>
                        </linearGradient>
                     </defs>

                     {/* Google Analytics → sGTM Hub */}
                     <path d="M 105 110 C 180 110, 180 250, 250 250" fill="none" stroke="url(#streamGrad1)" strokeWidth="3" opacity="0.25" vectorEffect="non-scaling-stroke" />
                     <path d="M 105 110 C 180 110, 180 250, 250 250" fill="none" stroke="url(#streamGrad1)" strokeWidth="3" strokeDasharray="8 6" vectorEffect="non-scaling-stroke"
                        style={{ animation: "dash 1.5s linear infinite" }} />

                     {/* Facebook → sGTM Hub (Slight curve to prevent 0-height bounding box bug with gradients) */}
                     <path d="M 105 250 Q 175 250.5, 250 250" fill="none" stroke="url(#streamGrad2)" strokeWidth="3" opacity="0.25" vectorEffect="non-scaling-stroke" />
                     <path d="M 105 250 Q 175 250.5, 250 250" fill="none" stroke="url(#streamGrad2)" strokeWidth="3" strokeDasharray="8 6" vectorEffect="non-scaling-stroke"
                        style={{ animation: "dash 1.8s linear infinite" }} />

                     {/* TikTok → sGTM Hub */}
                     <path d="M 105 390 C 180 390, 180 250, 250 250" fill="none" stroke="url(#streamGrad3)" strokeWidth="3" opacity="0.25" vectorEffect="non-scaling-stroke" />
                     <path d="M 105 390 C 180 390, 180 250, 250 250" fill="none" stroke="url(#streamGrad3)" strokeWidth="3" strokeDasharray="8 6" vectorEffect="non-scaling-stroke"
                        style={{ animation: "dash 2s linear infinite" }} />
                     
                     {/* sGTM Hub → BigQuery (Slight curve to prevent 0-height bounding box bug) */}
                     <path d="M 350 250 Q 410 250.5, 470 250" fill="none" stroke="#1D4ED8" strokeWidth="3" opacity="0.25" vectorEffect="non-scaling-stroke" />
                     <path d="M 350 250 Q 410 250.5, 470 250" fill="none" stroke="#1D4ED8" strokeWidth="3" strokeDasharray="8 6" vectorEffect="non-scaling-stroke"
                        style={{ animation: "dash 1.2s linear infinite" }} />

                     {/* Animated data particles flowing along paths */}
                     <circle r="4" fill="#3b82f6" opacity="0.8">
                        <animateMotion dur="2.5s" repeatCount="indefinite" path="M 105 110 C 180 110, 180 250, 250 250" />
                     </circle>
                     <circle r="4" fill="#8b5cf6" opacity="0.8">
                        <animateMotion dur="2.8s" repeatCount="indefinite" path="M 105 250 Q 175 250.5, 250 250" />
                     </circle>
                     <circle r="4" fill="#f43f5e" opacity="0.8">
                        <animateMotion dur="3s" repeatCount="indefinite" path="M 105 390 C 180 390, 180 250, 250 250" />
                     </circle>
                     <circle r="4" fill="#1D4ED8" opacity="0.8">
                        <animateMotion dur="1.5s" repeatCount="indefinite" path="M 350 250 Q 410 250.5, 470 250" />
                     </circle>
                  </svg>

                  {/* Nodes - positioned with absolute + percentage */}
                  {/* Data Sources (Left Column) */}
                  <div className="absolute" style={{ left: "12%", top: "22%", transform: "translate(-50%, -50%)" }}>
                     <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white border border-slate-200 shadow-md flex items-center justify-center relative">
                        <SiGoogleanalytics className="text-xl md:text-2xl text-orange-500" />
                        <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border border-slate-200 flex items-center justify-center">
                           <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                        </div>
                     </div>
                  </div>
                  <div className="absolute" style={{ left: "12%", top: "50%", transform: "translate(-50%, -50%)" }}>
                     <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white border border-slate-200 shadow-md flex items-center justify-center relative">
                        <SiFacebook className="text-xl md:text-2xl text-blue-600" />
                        <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border border-slate-200 flex items-center justify-center">
                           <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" style={{ animationDelay: "0.3s" }} />
                        </div>
                     </div>
                  </div>
                  <div className="absolute" style={{ left: "12%", top: "78%", transform: "translate(-50%, -50%)" }}>
                     <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white border border-slate-200 shadow-md flex items-center justify-center relative">
                        <SiTiktok className="text-xl md:text-2xl text-black" />
                        <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border border-slate-200 flex items-center justify-center">
                           <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" style={{ animationDelay: "0.6s" }} />
                        </div>
                     </div>
                  </div>

                  {/* Cloud Server GTM (Center) */}
                  <div className="absolute" style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}>
                     <div className="relative group">
                        <div className="absolute inset-0 bg-[#1D4ED8] blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 rounded-full" />
                        <div className="w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-blue-50 border border-blue-200 shadow-xl flex flex-col items-center justify-center relative z-10">
                           <Workflow className="text-[#1D4ED8] w-7 h-7 md:w-8 md:h-8 mb-1" />
                           <span className="text-[9px] md:text-[10px] font-bold text-blue-800">sGTM Hub</span>
                        </div>
                     </div>
                  </div>

                  {/* Data Warehouse (Right) */}
                  <div className="absolute" style={{ left: "85%", top: "50%", transform: "translate(-50%, -50%)" }}>
                     <div className="w-18 h-18 md:w-20 md:h-20 rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl flex flex-col items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:8px_8px] opacity-20" />
                        <Database className="text-white w-6 h-6 md:w-7 md:h-7 mb-1 relative z-10" />
                        <span className="text-[8px] md:text-[9px] font-bold text-slate-300 relative z-10 uppercase tracking-wider">BigQuery</span>
                     </div>
                  </div>

                  {/* Status Overlay */}
                  <div className="absolute bottom-4 md:bottom-6 inset-x-4 md:inset-x-6 flex justify-between items-end pointer-events-none">
                     <div className="bg-white/80 backdrop-blur border border-slate-200 px-3 py-2 rounded-lg shadow-sm flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#1D4ED8] animate-ping" />
                        <span className="text-xs font-bold text-slate-600">Processing Events</span>
                     </div>
                     <div className="bg-[#1D4ED8] text-white px-3 py-2 rounded-lg shadow-sm flex flex-col items-end">
                        <span className="text-[10px] font-medium opacity-80">Match Rate</span>
                        <span className="text-sm font-black flex items-center gap-1"><LineChart size={14}/> 99.8%</span>
                     </div>
                  </div>
               </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
