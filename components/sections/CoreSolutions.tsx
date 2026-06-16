"use client";

import { useState } from "react";
import { ArrowRight, Target, TrendingUp, Megaphone, GraduationCap, Bot, Sparkles } from "lucide-react";
import Link from "next/link";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { MotionButton } from "@/components/ui/motion-button";
import { AnimatePresence, motion } from "framer-motion";

const solutions = [
  {
    title: "Dịch Vụ SEO Toàn Diện",
    description: "Xây dựng nền móng Organic vững chắc, phủ sóng hàng ngàn từ khóa và chiếm lĩnh đỉnh cao tìm kiếm Google một cách bền vững. Chiến lược an toàn, cam kết KPI rõ ràng.",
    href: "/dich-vu/seo-tong-the/",
    icon: TrendingUp,
    metrics: ["+300% Organic Traffic", "Top 1-3 Keywords"]
  },
  {
    title: "Quảng Cáo Ads Đa Kênh",
    description: "Tối ưu hóa phễu chuyển đổi qua Google, Facebook, Youtube. Tiếp cận đúng khách hàng mục tiêu với chi phí tối ưu nhất, dễ dàng scale up ngân sách an toàn.",
    href: "/dich-vu-ads/google/",
    icon: Megaphone,
    metrics: ["-40% CPA", "ROI tối đa"]
  },
  {
    title: "Giải Pháp AI",
    description: "Ứng dụng trí tuệ nhân tạo để phân tích hành vi người dùng, vẽ bản đồ hành trình siêu cá nhân hóa và tự động hóa khâu sản xuất hàng ngàn nội dung chuẩn SEO.",
    href: "/giai-phap/ai-customer-journey/",
    icon: Bot,
    metrics: ["Tự động hóa 80%", "Nội dung chuẩn E-E-A-T"]
  },
  {
    title: "Data & Automation",
    description: "Thiết lập hệ thống Tracking nâng cao theo chuẩn quốc tế. Trực quan hóa dữ liệu qua Power BI Dashboard và tự động hóa quy trình CSKH bằng Zalo 2BS.",
    href: "/giai-phap/tracking-automation/",
    icon: Target,
    metrics: ["Tracking chính xác 99%", "Dashboard Real-time"]
  },
  {
    title: "Chí Quyết Academy",
    description: "Hệ thống đào tạo thực chiến kết hợp cố vấn Mentor 1:1, chuyển giao công nghệ quy trình SEO giúp đội ngũ In-house tự chủ vận hành cỗ máy Marketing.",
    href: "/chi-quyet-academy/",
    icon: GraduationCap,
    metrics: ["Mentor 1:1", "Chuyển giao công nghệ"]
  }
];

export function CoreSolutions() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header - Clean B2B */}
        <div className="mb-16 flex flex-col items-center text-center">
          <RevealOnScroll direction="up">
            <SectionBadge live={false} className="bg-blue-50 border-blue-100 text-blue-600 mb-6">
              <Sparkles size={14} className="mr-1 inline-block" /> Giải pháp cốt lõi
            </SectionBadge>
            <h2 className="text-[32px] font-black leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-[46px] text-balance max-w-3xl mx-auto">
              Hệ sinh thái <span className="text-blue-600">tăng trưởng toàn diện</span>
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-slate-500 max-w-2xl mx-auto">
              Chúng tôi không cung cấp dịch vụ rập khuôn. Mỗi giải pháp được thiết kế &quot;đo ni đóng giày&quot; dựa trên dữ liệu thực tế của doanh nghiệp bạn.
            </p>
          </RevealOnScroll>
        </div>

        {/* Interactive Tabs Layout - Clean & Refined */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* LEFT: Tabs Navigation */}
          <RevealOnScroll direction="left" className="lg:col-span-5 flex flex-col gap-3">
            {solutions.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeIndex === index;
              
              return (
                <button
                  key={item.title}
                  onClick={() => setActiveIndex(index)}
                  className={`relative flex items-center gap-4 w-full p-5 rounded-2xl text-left transition-all duration-300 border ${
                    isActive 
                      ? 'bg-white border-blue-100 shadow-[0_8px_30px_rgba(59,166,241,0.08)] ring-1 ring-blue-50' 
                      : 'border-transparent hover:bg-slate-50 text-slate-500'
                  }`}
                >
                  <div className={`shrink-0 flex h-12 w-12 items-center justify-center rounded-xl transition-colors duration-300 ${
                    isActive ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20' : 'bg-slate-100 text-slate-400'
                  }`}>
                    <Icon size={20} strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-[17px] font-bold transition-colors duration-300 ${
                      isActive ? 'text-blue-600' : 'text-slate-700'
                    }`}>
                      {item.title}
                    </h3>
                  </div>
                  
                  {/* Subtle active indicator arrow */}
                  <div className={`transition-all duration-300 ${isActive ? 'opacity-100 translate-x-0 text-blue-600' : 'opacity-0 -translate-x-4'}`}>
                    <ArrowRight size={18} />
                  </div>
                </button>
              );
            })}
          </RevealOnScroll>

          {/* RIGHT: Active Content Window */}
          <RevealOnScroll direction="right" className="lg:col-span-7 h-full">
            <div className="relative h-full min-h-[400px] w-full bg-[#F8FAFC] border border-slate-100 rounded-[32px] overflow-hidden flex flex-col">
              
              {/* Decorative Subtle Background */}
              <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none transition-all duration-500 transform scale-150 translate-x-1/4 -translate-y-1/4">
                {(() => {
                  const ActiveIcon = solutions[activeIndex].icon;
                  return <ActiveIcon size={400} strokeWidth={1} />;
                })()}
              </div>
              
              <div className="relative z-10 p-8 sm:p-12 flex flex-col h-full justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="flex flex-col h-full max-w-xl"
                  >
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200/60 bg-blue-50/50 px-3 py-1.5 backdrop-blur-sm">
                      <span className="text-[13px] font-bold tracking-wide text-blue-600 uppercase">
                        Giải pháp 0{activeIndex + 1}
                      </span>
                    </div>
                    
                    <h3 className="text-3xl sm:text-4xl font-black text-slate-900 mb-6 tracking-tight">
                      {solutions[activeIndex].title}
                    </h3>
                    
                    <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                      {solutions[activeIndex].description}
                    </p>

                    {/* Metrics/Highlights */}
                    <div className="grid grid-cols-2 gap-4 mb-10">
                      {solutions[activeIndex].metrics.map((metric, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                          <span className="text-[15px] font-medium text-slate-700">{metric}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-auto">
                      <MotionButton 
                        label="Khám phá chi tiết"
                        as={Link}
                        href={solutions[activeIndex].href}
                      />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </RevealOnScroll>

        </div>
      </div>
    </section>
  );
}
