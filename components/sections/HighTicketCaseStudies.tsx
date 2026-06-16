"use client";
import { useState, useEffect } from "react";
import { TrendingUp, CheckCircle2, ArrowRight, Activity, Building } from "lucide-react";
import Link from "next/link";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { motion } from "framer-motion";

const TypewriterText = ({ text }: { text: string }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDisplayedText("");
    const interval = setInterval(() => {
      if (i <= text.length) {
        setDisplayedText(text.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <>
      <span className="invisible h-0 block whitespace-nowrap" aria-hidden="true">{text}</span>
      <span className="absolute inset-y-0 left-0 flex items-center whitespace-nowrap">{displayedText}<span className="animate-pulse ml-[1px] w-[2px] h-4 bg-[#1D4ED8] inline-block"></span></span>
    </>
  );
};

const caseStudies = [
  {
    title: "X3 Doanh thu BĐS Cao Cấp",
    description: "Tập trung khai thác tệp Transactional Keywords thay vì Traffic Keywords, mang lại tỷ lệ chốt sale vượt kỳ vọng.",
    icon: Building
  },
  {
    title: "Tăng 200% Lead Bệnh Viện",
    description: "Xây dựng hệ thống Content Y Tế chuẩn YMYL (Your Money Your Life) và E-E-A-T, bức phá trust score tuyệt đối.",
    icon: Activity
  },
  {
    title: "+150% Traffic Tài Chính",
    description: "Xử lý Technical SEO triệt để cho hệ thống e-commerce với hơn 1 triệu URLs, tối ưu crawl budget hoàn hảo.",
    icon: TrendingUp
  }
];

export function HighTicketCaseStudies() {
  const tags = ["Cho Bất Động Sản", "Cho Y Tế & Sức Khỏe", "Cho Tài Chính Ngân Hàng"];
  const [currentTagIndex, setCurrentTagIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTagIndex((prev) => (prev + 1) % tags.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [tags.length]);

  return (
    <section className="relative overflow-hidden bg-slate-50 py-12 lg:py-20">
      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <RevealOnScroll direction="up" className="mb-12 flex flex-col items-center text-center">
          <SectionBadge variant="premium" live={false} icon={<TrendingUp className="h-3.5 w-3.5" />}>
            Premium Case Studies
          </SectionBadge>

          <h2 className="mx-auto mt-4 mb-4 max-w-4xl text-[32px] font-black leading-tight tracking-tight text-[#04091A] sm:text-4xl md:text-[44px] text-balance">
            Tăng Traffic là bề nổi, <br className="hidden sm:block" />
            Tăng <span className="text-[#1D4ED8]">Doanh Thu</span> mới là cốt lõi
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[17px] font-medium leading-relaxed text-slate-500 text-pretty">
            Chúng tôi không chạy theo metric ảo. <br className="hidden md:block" />
            Mọi chiến lược tại SEOSONA đều được thiết kế để tối ưu hóa Conversion Rate và ROI cho khách hàng
          </p>

          <div className="mt-8 flex items-center justify-center h-[44px]">
            <motion.div layout className="relative flex items-center gap-2 rounded-full border border-blue-100 bg-[#F0F6FF] px-5 py-2.5 text-[15px] font-bold text-[#1D4ED8] shadow-sm overflow-hidden">
              <CheckCircle2 className="shrink-0" size={18} />
              <div className="relative h-5 flex items-center transition-all duration-300">
                <TypewriterText text={tags[currentTagIndex]} />
              </div>
            </motion.div>
          </div>
        </RevealOnScroll>

        <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
          {caseStudies.map((item, i) => {
            const Icon = item.icon;
            return (
              <RevealOnScroll key={item.title} direction="up" delay={i * 100}>
                <div className="group relative flex h-full flex-col rounded-[24px] bg-white p-6 md:p-7 border border-slate-200 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-200 overflow-hidden">
                  
                  {/* Subtle Top Glow on Hover */}
                  <div className="absolute top-0 inset-x-0 h-[2px] w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 border border-blue-100 transition-transform duration-500 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 z-10">
                    <Icon size={24} aria-hidden="true" />
                  </div>
                  
                  <h3 className="mb-3 text-[20px] font-bold text-slate-900 leading-tight transition-colors group-hover:text-blue-700">
                    {item.title}
                  </h3>
                  
                  <p className="mb-6 flex-1 text-[15px] leading-relaxed text-slate-500">
                    {item.description}
                  </p>
                  
                  <div className="mt-auto pt-2">
                    <Link href="/case-study/" className="inline-flex items-center gap-2 group/link focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-100">
                      <span className="text-[14px] font-bold tracking-wide text-slate-900 transition-colors group-hover/link:text-blue-600">
                        Khám phá chi tiết
                      </span>
                      <ArrowRight size={16} className="text-slate-400 transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:text-blue-600" />
                    </Link>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>

        <RevealOnScroll direction="up" className="mt-12 flex justify-center">
          <Link href="/case-study/" className="flex h-14 items-center justify-center gap-2 rounded-full bg-[#1D4ED8] px-8 text-[15px] font-bold text-white transition-all hover:scale-105 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/25 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-100">
            Xem toàn bộ Case Study <ArrowRight size={18} />
          </Link>
        </RevealOnScroll>

      </div>
    </section>
  );
}
