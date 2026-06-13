"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, TrendingUp, BarChart3, ShieldCheck } from "lucide-react";
import { CountUp } from "@/components/ui/CountUp";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionBadge } from "@/components/ui/SectionBadge";

const metrics = [
  { label: "Dự án SEO", value: 300, suffix: "+", icon: TrendingUp },
  { label: "Học viên", value: 1000, suffix: "+", icon: BarChart3 },
  { label: "Năm kinh nghiệm", value: 10, suffix: "+", icon: ShieldCheck }
];

function Typewriter({ words }: { words: string[] }) {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const timer = setTimeout(() => {
      const i = loopNum % words.length;
      const fullText = words[i];

      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
        setTypingSpeed(30);
      } else {
        setText(fullText.substring(0, text.length + 1));
        setTypingSpeed(80);
      }

      if (!isDeleting && text === fullText) {
        setTypingSpeed(2500);
        setIsDeleting(true);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, words]);

  return (
    <span
      className="inline-block border-r-[2px] border-[#3BA6F1] pr-1 text-[#3BA6F1]"
      style={{ animation: "cursor-blink 1s step-end infinite" }}
    >
      {text}
      <style>{`
        @keyframes cursor-blink {
          50% { border-color: transparent; }
        }
      `}</style>
    </span>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-24">
      {/* Background decoration: Soft gradient blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#F0F6FF] via-white to-transparent opacity-80 blur-3xl -z-10 pointer-events-none" />

      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll direction="up" className="flex flex-col items-center text-center">

          <SectionBadge live={true}>
            Hệ sinh thái Digital hàng đầu
          </SectionBadge>

          <h1 className="mx-auto mt-6 w-full text-4xl font-black leading-tight tracking-tight text-[#04091A] sm:text-5xl md:text-[54px] lg:text-[64px]">
            Share<span className="text-[#3BA6F1]">.</span> Search<span className="text-[#3BA6F1]">.</span> Connect<span className="text-[#3BA6F1]">.</span> <br className="hidden lg:block" />
            <span className="inline-block lg:whitespace-nowrap">
              Tăng trưởng từ <Typewriter words={["SEO Tổng thể", "Google Ads", "Content Marketing", "Thiết kế Website", "Data Analytics"]} />
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-[17px] font-medium leading-relaxed text-slate-500 text-pretty">
            SEOSONA là Tech-Agency hàng đầu Việt Nam, kết hợp chiến lược chuyên sâu và
            tư duy dữ liệu để tăng trưởng khách hàng tiềm năng từ Google bền vững và đột phá
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/lien-he" className="flex h-14 items-center justify-center gap-2 rounded-full bg-[#3BA6F1] px-8 text-[15px] font-bold text-white transition-all hover:scale-105 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/25 w-full sm:w-auto">
              Nhận tư vấn chiến lược <ArrowRight size={18} />
            </Link>
            <Link href="/case-study" className="flex h-14 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-8 text-[15px] font-bold text-[#04091A] transition-all hover:border-[#3BA6F1] hover:text-[#3BA6F1] w-full sm:w-auto group">
              Xem Case Study <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Metric Counters */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 max-w-3xl mx-auto w-full">
            {metrics.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="group relative flex flex-col items-center justify-center rounded-3xl border border-slate-200/80 bg-[#F8FAFC]/80 backdrop-blur-sm p-5 md:py-6 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(59,166,241,0.12)] hover:border-[#3BA6F1]/30 hover:bg-white overflow-hidden"
                >
                  {/* Subtle Top Glow on Hover */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-0 bg-gradient-to-r from-transparent via-[#3BA6F1] to-transparent transition-all duration-500 group-hover:w-3/4 opacity-0 group-hover:opacity-100" />
                  
                  <div className="relative mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#3BA6F1] shadow-sm transition-transform duration-500 group-hover:scale-110 z-10">
                    <Icon size={20} className="relative z-10" />
                  </div>
                  <div className="text-[32px] md:text-[36px] font-black leading-none tracking-tight text-[#04091A] group-hover:text-[#3BA6F1] transition-colors duration-500">
                    <CountUp end={item.value} suffix={item.suffix} />
                  </div>
                  <div className="mt-2 text-[13px] font-bold uppercase tracking-widest text-slate-500 transition-colors duration-500 group-hover:text-slate-600">
                    {item.label}
                  </div>
                </div>
              );
            })}
          </div>

        </RevealOnScroll>
      </div>
    </section>
  );
}
