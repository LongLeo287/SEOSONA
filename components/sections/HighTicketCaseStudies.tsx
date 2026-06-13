"use client";
import { useState, useEffect } from "react";
import { TrendingUp, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { SectionBadge } from "@/components/ui/SectionBadge";
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
      <span className="absolute inset-0 flex items-center">{displayedText}<span className="animate-pulse ml-[1px] w-[2px] h-4 bg-slate-900 inline-block"></span></span>
    </>
  );
};

export function HighTicketCaseStudies() {
  const tags = ["Cho Bất Động Sản Cao Cấp", "Cho Bệnh Viện Mắt Quốc Tế", "Cho Công Ty Tài Chính"];
  const [currentTagIndex, setCurrentTagIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTagIndex((prev) => (prev + 1) % tags.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white py-12 lg:py-16">
      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col items-center text-center lg:mb-12">
          <SectionBadge icon={<TrendingUp className="h-3.5 w-3.5" />} live={true}>
            Premium Case Studies
          </SectionBadge>
          <h2 className="mx-auto mb-5 max-w-4xl text-center text-[40px] font-black leading-[1.15] tracking-tight text-[#04091A] md:text-[50px] lg:text-[56px] text-balance">
            Tăng Traffic là bề nổi Tăng <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3BA6F1] to-[#00D4FF]">Doanh Thu</span> mới là cốt lõi
          </h2>
          <p className="mx-auto max-w-2xl text-[17px] font-medium leading-[1.7] text-slate-500 text-pretty">
            Chúng tôi không khoe số liệu ảo. Các dự án của SEOSONA tập trung vào khả năng chuyển đổi (Conversion Rate) và tỷ suất hoàn vốn (ROI) đối với các ngành hàng giá trị cao.
          </p>

          <div className="mt-8 flex items-center justify-center h-[44px]">
            <motion.div layout className="relative flex items-center gap-2 rounded-full border border-[#3BA6F1]/30 bg-[#F0F6FF] px-5 py-2.5 text-sm font-medium text-[#04091A] shadow-sm overflow-hidden">
              <CheckCircle2 className="shrink-0 text-[#3BA6F1]" size={18} />
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
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div key={item} className="group relative flex flex-col rounded-[32px] bg-[#F8FAFC] p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl ring-1 ring-slate-200/50">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-[#3BA6F1] shadow-sm">
                  <TrendingUp size={28} />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#3BA6F1]">Dự án tiêu biểu</span>
                </div>
              </div>
              <h3 className="mb-4 text-2xl font-black text-[#04091A] text-balance">
                X3 Doanh thu mảng BĐS Cao Cấp
              </h3>
              <p className="mb-8 flex-1 text-base leading-relaxed text-slate-500 text-pretty">
                Thay vì SEO từ khóa thông tin, chúng tôi tập trung vào bộ từ khóa Transactional Keyword có tỷ lệ chuyển đổi cao nhất.
              </p>
              <div className="mt-auto border-t border-slate-200/80 pt-6">
                <Link href="#" className="flex items-center justify-between group-hover:text-[#3BA6F1]">
                  <span className="font-bold text-[#04091A] group-hover:text-[#3BA6F1] text-[15px] transition-colors">Xem báo cáo dự án</span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white group-hover:border-[#3BA6F1] transition-all">
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/case-study" className="inline-flex h-14 items-center justify-center rounded-full bg-[#3BA6F1] px-8 text-[15px] font-bold text-white transition-all hover:scale-105 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/25">
            Xem tất cả Case Study
          </Link>
        </div>
      </div>
    </section>
  );
}
