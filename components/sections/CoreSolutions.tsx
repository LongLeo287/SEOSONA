"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Bot,
  GraduationCap,
  Megaphone,
  Network,
  TrendingUp,
  Plus,
  Sparkles,
  BarChart3,
  MousePointerClick,
  CheckSquare,
  Search,
  MessageSquare
} from "lucide-react";

export function CoreSolutions() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start start"]
  });

  // Timeline mapped exactly to Hero Parallax progress
  const arcOpacity = useTransform(scrollYProgress, [0.55, 0.85], [0, 1]);
  
  const titleOpacity = useTransform(scrollYProgress, [0.65, 0.90], [0, 1]);
  const titleY = useTransform(scrollYProgress, [0.65, 0.90], [30, 0]);
  
  // Timeline mapped for the Bento grid to slide up and fade in
  const gridOpacity = useTransform(scrollYProgress, [0.75, 0.95], [0, 1]);
  const gridY = useTransform(scrollYProgress, [0.75, 0.95], [50, 0]);

  return (
    <section ref={sectionRef} className="relative z-20 overflow-hidden bg-[#F8FAFC] mt-[-100vh] pt-[160px] pb-20 font-sans border-t border-slate-200/60 shadow-[0_-20px_40px_-20px_rgba(0,0,0,0.03)]">
      
      {/* Background subtle grid pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#04091A08_1px,transparent_1px),linear-gradient(to_bottom,#04091A08_1px,transparent_1px)] bg-[size:28px_28px]" />

      <div className="container relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 z-10">
        
        {/* --- TOP SECTION: TITLE & PARABOLA --- */}
        <div className="flex flex-col items-center text-center mb-8">
          <motion.h2 style={{ opacity: titleOpacity, y: titleY }} className="text-balance text-[28px] font-black leading-tight tracking-tight text-[#04091A] sm:text-4xl lg:text-[42px] max-w-3xl">
            Tăng trưởng doanh thu bằng <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1D4ED8] to-[#3B82F6]">
              Hệ Sinh Thái SEOSONA
            </span> trong các nền tảng số
          </motion.h2>

          <motion.div style={{ opacity: arcOpacity }} className="relative mt-[120px] w-full max-w-[800px] h-[160px] flex justify-center">
             
             {/* Background Glow Layers */}
             <div className="absolute left-1/2 top-[40px] -translate-x-1/2 -translate-y-1/2 w-[400px] h-[160px] bg-blue-500/10 blur-[60px] rounded-[100%] pointer-events-none" />
             <div className="absolute left-1/2 top-[40px] -translate-x-1/2 -translate-y-1/2 w-[200px] h-[80px] bg-blue-400/30 blur-[30px] rounded-[100%] pointer-events-none" />

             {/* The Arc/Parabola Line */}
             <svg
               className="absolute inset-0 w-full h-full pointer-events-none"
               viewBox="0 0 800 160"
               preserveAspectRatio="none"
             >
                {/* Thick blurry background stroke */}
                <path
                  d="M 50 140 Q 400 -60 750 140"
                  fill="none"
                  stroke="url(#arcGradientGlow)"
                  strokeWidth="12"
                  filter="url(#blurArc)"
                />
                {/* Crisp foreground stroke */}
                <path
                  d="M 50 140 Q 400 -60 750 140"
                  fill="none"
                  stroke="url(#arcGradientCore)"
                  strokeWidth="3"
                />
                <defs>
                  <linearGradient id="arcGradientGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(59, 130, 246, 0)" />
                    <stop offset="30%" stopColor="rgba(59, 130, 246, 0.4)" />
                    <stop offset="50%" stopColor="rgba(29, 78, 216, 0.8)" />
                    <stop offset="70%" stopColor="rgba(59, 130, 246, 0.4)" />
                    <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
                  </linearGradient>
                  <linearGradient id="arcGradientCore" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(59, 130, 246, 0)" />
                    <stop offset="35%" stopColor="rgba(96, 165, 250, 0.6)" />
                    <stop offset="50%" stopColor="rgba(37, 99, 235, 1)" />
                    <stop offset="65%" stopColor="rgba(96, 165, 250, 0.6)" />
                    <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
                  </linearGradient>
                  <filter id="blurArc" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="6" />
                  </filter>
                </defs>
             </svg>

             {/* 4-Point Star Sparkle (Chubby) */}
             <div className="absolute left-1/2 top-[40px] -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_0_20px_rgba(37,99,235,0.6)]">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M40 0 C40 24 56 40 80 40 C56 40 40 56 40 80 C40 56 24 40 0 40 C24 40 40 24 40 0 Z"
                    fill="url(#starGradient)"
                  />
                  <defs>
                    <linearGradient id="starGradient" x1="20" y1="0" x2="60" y2="80" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#60A5FA" />
                      <stop offset="1" stopColor="#1D4ED8" />
                    </linearGradient>
                  </defs>
                </svg>
             </div>

          </motion.div>
        </div>

        {/* --- BOTTOM SECTION: BENTO GRID --- */}
        <motion.div style={{ opacity: gridOpacity, y: gridY }} className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
          
          {/* Card 1: SEO */}
          <div className="h-full">
            <Link href="/dich-vu-seo-tong-the/" className="group relative flex flex-col h-full bg-white border border-slate-200 shadow-sm rounded-[32px] p-8 overflow-hidden hover:-translate-y-1.5 hover:shadow-lg hover:border-blue-300 transition-all duration-500 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-100">
               {/* Mockup area */}
               <div className="relative w-full h-[180px] bg-slate-50 rounded-2xl mb-8 p-5 border border-slate-200 shadow-inner overflow-hidden flex flex-col justify-end">
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-transparent pointer-events-none" />
                  {/* Fake UI */}
                  <div className="flex items-end gap-3 h-full opacity-90">
                     <div className="w-1/6 bg-slate-200 h-[40%] rounded-t-sm" />
                     <div className="w-1/6 bg-slate-200 h-[60%] rounded-t-sm" />
                     <div className="w-1/6 bg-slate-300 h-[30%] rounded-t-sm" />
                     <div className="w-1/6 bg-slate-200 h-[80%] rounded-t-sm" />
                     <div className="w-1/6 bg-slate-300 h-[50%] rounded-t-sm" />
                     <div className="w-1/6 bg-blue-500 h-[100%] rounded-t-sm shadow-[0_0_15px_rgba(59,130,246,0.3)] relative">
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#04091A] text-white text-[10px] font-bold px-1.5 py-0.5 rounded shadow-sm">+180%</div>
                     </div>
                  </div>
                  {/* Floating Icon */}
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white flex items-center justify-center border border-slate-200 shadow-sm backdrop-blur-md">
                     <TrendingUp className="w-5 h-5 text-blue-600" />
                  </div>
               </div>

               {/* Content */}
               <div className="flex-1 flex flex-col items-start pr-12 relative z-10">
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 mb-4 shadow-sm">
                     <span className="text-[12px] font-bold text-blue-700">Dịch vụ SEO Tổng thể</span>
                  </div>
                  <h3 className="text-[20px] md:text-[22px] font-black leading-[1.3] text-[#04091A] text-balance transition-colors group-hover:text-blue-600">
                     Được hỗ trợ theo nhu cầu doanh nghiệp để chiếm lĩnh thứ hạng và tăng trưởng traffic tự nhiên
                  </h3>
               </div>

               {/* Plus Button */}
               <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-[#1D4ED8] group-hover:text-white group-hover:shadow-[0_8px_20px_rgba(29,78,216,0.25)]">
                  <Plus className="w-5 h-5" />
               </div>
            </Link>
          </div>

          {/* Card 2: Ads */}
          <div className="h-full">
            <Link href="/dich-vu-ads/" className="group relative flex flex-col h-full bg-white border border-slate-200 shadow-sm rounded-[32px] p-8 overflow-hidden hover:-translate-y-1.5 hover:shadow-lg hover:border-amber-300 transition-all duration-500 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-amber-100">
               {/* Mockup area */}
               <div className="relative w-full h-[180px] bg-slate-50 rounded-2xl mb-8 p-5 border border-slate-200 shadow-inner overflow-hidden flex flex-col">
                  <div className="absolute inset-0 bg-gradient-to-b from-amber-50 to-transparent pointer-events-none" />
                  {/* Fake UI */}
                  <div className="w-full bg-white rounded-lg p-3 mb-3 border border-slate-200 shadow-sm">
                     <div className="w-1/3 h-2 bg-slate-200 rounded-full mb-2" />
                     <div className="flex justify-between items-center">
                        <div className="w-1/2 h-4 bg-amber-400 rounded-md shadow-[0_0_10px_rgba(251,191,36,0.3)]" />
                        <span className="text-[10px] text-emerald-600 font-bold">+12.4% ROI</span>
                     </div>
                  </div>
                  <div className="w-full bg-white rounded-lg p-3 border border-slate-200 shadow-sm">
                     <div className="w-1/4 h-2 bg-slate-200 rounded-full mb-2" />
                     <div className="w-2/3 h-4 bg-slate-100 rounded-md" />
                  </div>
                  {/* Floating Icon */}
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white flex items-center justify-center border border-slate-200 shadow-sm">
                     <MousePointerClick className="w-5 h-5 text-amber-500" />
                  </div>
               </div>

               {/* Content */}
               <div className="flex-1 flex flex-col items-start pr-12 relative z-10">
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 mb-4 shadow-sm">
                     <span className="text-[12px] font-bold text-amber-700">Quảng Cáo Đa Kênh</span>
                  </div>
                  <h3 className="text-[20px] md:text-[22px] font-black leading-[1.3] text-[#04091A] text-balance transition-colors group-hover:text-amber-500">
                     Bắt đầu nhanh chóng với các chiến dịch chạy Ads được tối ưu hóa chuyển đổi liên tục
                  </h3>
               </div>

               {/* Plus Button */}
               <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-[#1D4ED8] group-hover:text-white group-hover:shadow-[0_8px_20px_rgba(29,78,216,0.25)]">
                  <Plus className="w-5 h-5" />
               </div>
            </Link>
          </div>

          {/* Card 3: AI */}
          <div className="h-full">
            <Link href="/giai-phap/ai-customer-journey/" className="group relative flex flex-col h-full bg-white border border-slate-200 shadow-sm rounded-[32px] p-8 overflow-hidden hover:-translate-y-1.5 hover:shadow-lg hover:border-violet-300 transition-all duration-500 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-violet-100">
               {/* Mockup area */}
               <div className="relative w-full h-[180px] bg-slate-50 rounded-2xl mb-8 p-4 border border-slate-200 shadow-inner overflow-hidden flex flex-col">
                  <div className="absolute inset-0 bg-gradient-to-b from-violet-50 to-transparent pointer-events-none" />
                  {/* Fake Chat UI */}
                  <div className="w-[80%] bg-white rounded-2xl rounded-tl-sm p-3 mb-3 border border-slate-200 shadow-sm text-[9px] text-slate-400">
                     <div className="w-full h-1.5 bg-slate-200 rounded-full mb-1.5" />
                     <div className="w-3/4 h-1.5 bg-slate-200 rounded-full" />
                  </div>
                  <div className="w-[70%] self-end bg-violet-50 rounded-2xl rounded-tr-sm p-3 border border-violet-100 text-[9px]">
                     <div className="w-full h-1.5 bg-violet-200 rounded-full mb-1.5" />
                     <div className="w-1/2 h-1.5 bg-violet-200 rounded-full" />
                  </div>
                  {/* Floating Icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white flex items-center justify-center border border-slate-200 shadow-sm">
                     <Bot className="w-5 h-5 text-violet-500" />
                  </div>
               </div>

               {/* Content */}
               <div className="flex-1 flex flex-col items-start pr-12 relative z-10">
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-violet-200 bg-violet-50 px-3 py-1 mb-4 shadow-sm">
                     <Sparkles className="w-3 h-3 text-violet-500" fill="currentColor"/>
                     <span className="text-[12px] font-bold text-violet-700">Giải Pháp AI</span>
                  </div>
                  <h3 className="text-[20px] md:text-[22px] font-black leading-[1.3] text-[#04091A] text-balance transition-colors group-hover:text-violet-500">
                     Ưu tiên cá nhân hóa trải nghiệm và xây dựng kịch bản chăm sóc khách hàng tự động
                  </h3>
               </div>

               {/* Plus Button */}
               <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-[#1D4ED8] group-hover:text-white group-hover:shadow-[0_8px_20px_rgba(29,78,216,0.25)]">
                  <Plus className="w-5 h-5" />
               </div>
            </Link>
          </div>

          {/* Card 4: Data & Tracking */}
          <div className="h-full">
            <Link href="/giai-phap/tracking-automation/" className="group relative flex flex-col h-full bg-white border border-slate-200 shadow-sm rounded-[32px] p-8 overflow-hidden hover:-translate-y-1.5 hover:shadow-lg hover:border-emerald-300 transition-all duration-500 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-100">
               {/* Mockup area */}
               <div className="relative w-full h-[180px] bg-slate-50 rounded-2xl mb-8 p-5 border border-slate-200 shadow-inner overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 to-transparent pointer-events-none" />
                  {/* Fake Grid UI */}
                  <div className="w-[80%] h-[70%] border border-slate-200 rounded-lg grid grid-cols-3 grid-rows-2 gap-2 p-2 bg-white shadow-sm">
                     <div className="bg-slate-100 rounded border border-slate-100" />
                     <div className="bg-slate-100 rounded border border-slate-100" />
                     <div className="bg-slate-100 rounded border border-slate-100" />
                     <div className="bg-slate-100 rounded border border-slate-100" />
                     <div className="bg-emerald-50 rounded border border-emerald-200 flex items-center justify-center shadow-sm">
                        <Search className="w-4 h-4 text-emerald-500" />
                     </div>
                     <div className="bg-slate-100 rounded border border-slate-100" />
                  </div>
                  {/* Floating Icon */}
                  <div className="absolute bottom-4 left-4 w-10 h-10 rounded-2xl bg-white flex items-center justify-center border border-slate-200 shadow-sm">
                     <Network className="w-5 h-5 text-emerald-500" />
                  </div>
               </div>

               {/* Content */}
               <div className="flex-1 flex flex-col items-start pr-12 relative z-10">
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 mb-4 shadow-sm">
                     <span className="text-[12px] font-bold text-emerald-700">Data & Automation</span>
                  </div>
                  <h3 className="text-[20px] md:text-[22px] font-black leading-[1.3] text-[#04091A] text-balance transition-colors group-hover:text-emerald-500">
                     Tìm câu trả lời chuyên sâu từ kho dữ liệu Tracking Server-side chuẩn xác
                  </h3>
               </div>

               {/* Plus Button */}
               <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-[#1D4ED8] group-hover:text-white group-hover:shadow-[0_8px_20px_rgba(29,78,216,0.25)]">
                  <Plus className="w-5 h-5" />
               </div>
            </Link>
          </div>

          {/* Card 5: Academy (Full width) */}
          <div className="md:col-span-2 h-full">
            <Link href="/chi-quyet-academy/" className="group relative flex flex-col md:flex-row h-full bg-white border border-slate-200 shadow-sm rounded-[32px] p-8 overflow-hidden hover:-translate-y-1.5 hover:shadow-lg hover:border-rose-300 transition-all duration-500 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-rose-100">
               
               {/* Left Content */}
               <div className="flex-1 flex flex-col items-start md:pr-16 relative z-10 order-2 md:order-1 mt-8 md:mt-0 justify-center">
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-rose-200 bg-rose-50 px-3 py-1 mb-4 shadow-sm">
                     <span className="text-[12px] font-bold text-rose-700">Chi Quyết Academy</span>
                  </div>
                  <h3 className="text-[20px] md:text-[28px] font-black leading-[1.3] text-[#04091A] text-balance transition-colors group-hover:text-rose-500">
                     Giao phó danh sách đào tạo nhân sự In-house cho các chuyên gia thực chiến
                  </h3>
               </div>

               {/* Right Mockup area */}
               <div className="relative w-full md:w-[45%] h-[200px] md:h-[240px] bg-slate-50 rounded-2xl p-4 border border-slate-200 shadow-inner overflow-hidden flex flex-col order-1 md:order-2 shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-l from-rose-50 to-transparent pointer-events-none" />
                  
                  {/* Fake UI Task List */}
                  <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm h-full w-full flex flex-col gap-3">
                     <div className="flex items-center justify-between mb-2">
                        <div className="w-1/3 h-3 bg-slate-200 rounded-full" />
                        <GraduationCap className="w-4 h-4 text-rose-500" />
                     </div>
                     <div className="flex items-center gap-2">
                        <CheckSquare className="w-4 h-4 text-rose-400" />
                        <div className="w-2/3 h-2 bg-slate-100 rounded-full" />
                     </div>
                     <div className="flex items-center gap-2">
                        <CheckSquare className="w-4 h-4 text-rose-400" />
                        <div className="w-3/4 h-2 bg-slate-100 rounded-full" />
                     </div>
                     <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-slate-200 rounded-sm" />
                        <div className="w-1/2 h-2 bg-slate-100 rounded-full" />
                     </div>
                  </div>
               </div>

               {/* Plus Button */}
               <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-[#1D4ED8] group-hover:text-white group-hover:shadow-[0_8px_20px_rgba(29,78,216,0.25)]">
                  <Plus className="w-5 h-5" />
               </div>
            </Link>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
