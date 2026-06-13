"use client";
import { useState, useEffect } from "react";
import { TrendingUp, CheckCircle2, ArrowRight, Activity, Building } from "lucide-react";
import Link from "next/link";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { motion, AnimatePresence } from "framer-motion";

const TypewriterText = ({ text }: { text: string }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
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
      <span className="invisible h-0 block w-full truncate" aria-hidden="true">{text}</span>
      <span className="absolute inset-0 flex items-center">{displayedText}<span className="animate-pulse ml-[1px] w-[2px] h-4 bg-[#3BA6F1] inline-block"></span></span>
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
  }, []);

  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-24">
      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <RevealOnScroll direction="up" className="mb-12 flex flex-col items-center text-center">
          <SectionBadge live={true} icon={<TrendingUp className="h-3.5 w-3.5" />}>
            Premium Case Studies
          </SectionBadge>
          
          <h2 className="mx-auto mb-5 max-w-4xl text-[32px] font-black leading-tight tracking-tight text-[#04091A] sm:text-4xl md:text-[44px] text-balance">
            Tăng Traffic là bề nổi, <br className="hidden sm:block"/>
            Tăng <span className="text-[#3BA6F1]">Doanh Thu</span> mới là cốt lõi
          </h2>
          
          <p className="mx-auto max-w-2xl text-[17px] font-medium leading-relaxed text-slate-500 text-pretty">
            Chúng tôi không chạy theo metric ảo. Mọi chiến lược tại SEOSONA đều được thiết kế để tối ưu hóa Conversion Rate và ROI cho khách hàng.
          </p>

          <div className="mt-8 flex items-center justify-center h-[44px]">
            <motion.div layout className="relative flex items-center gap-2 rounded-full border border-blue-100 bg-[#F0F6FF] px-5 py-2.5 text-[15px] font-bold text-[#3BA6F1] shadow-sm overflow-hidden">
              <CheckCircle2 className="shrink-0" size={18} />
              <div className="relative h-5 flex items-center min-w-[200px]">
                <AnimatePresence mode="popLayout">
                  <motion.div
                    key={currentTagIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <TypewriterText text={tags[currentTagIndex]} />
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </RevealOnScroll>

        <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
          {caseStudies.map((item, i) => {
            const Icon = item.icon;
            return (
              <RevealOnScroll key={item.title} direction="up" delay={i * 100}>
                <div className="group flex h-full flex-col rounded-[32px] bg-[#F8FAFC] p-8 shadow-sm ring-1 ring-slate-200/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-[#3BA6F1]/30">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-[#3BA6F1] shadow-sm transition-transform duration-300 group-hover:scale-110">
                    <Icon size={28} aria-hidden="true" />
                  </div>
                  <h3 className="mb-4 text-2xl font-black text-[#04091A] text-balance">
                    {item.title}
                  </h3>
                  <p className="mb-8 flex-1 text-[15px] leading-relaxed text-slate-500 text-pretty">
                    {item.description}
                  </p>
                  <div className="mt-auto border-t border-slate-200/80 pt-6">
                    <Link href="/case-study" className="flex items-center justify-between group/link">
                      <span className="text-[15px] font-bold text-[#04091A] transition-colors group-hover/link:text-[#3BA6F1]">
                        Xem báo cáo dự án {item.title}
                      </span>
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white transition-all group-hover/link:border-[#3BA6F1] group-hover/link:bg-[#3BA6F1] group-hover/link:text-white text-[#04091A]" aria-hidden="true">
                        <ArrowRight size={18} className="transition-transform group-hover/link:translate-x-0.5" />
                      </div>
                    </Link>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>

        <RevealOnScroll direction="up" className="mt-12 flex justify-center">
          <Link href="/case-study" className="flex h-14 items-center justify-center gap-2 rounded-full bg-[#3BA6F1] px-8 text-[15px] font-bold text-white transition-all hover:scale-105 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/25">
            Xem toàn bộ Case Study <ArrowRight size={18} />
          </Link>
        </RevealOnScroll>

      </div>
    </section>
  );
}
