"use client";

import Link from "next/link";
import { ArrowRight, BarChart3, ShieldCheck, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";
import { CountUp } from "@/components/ui/CountUp";
import { SectionBadge } from "@/components/ui/SectionBadge";

const cycleWords = [
  "Data & Strategy",
  "SEO Tổng Thể",
  "AI & Automation",
  "In-house Training",
  "Digital Marketing",
];

const metrics = [
  { label: "Dự án SEO", value: 300, suffix: "+", icon: TrendingUp },
  { label: "Học viên", value: 1000, suffix: "+", icon: BarChart3 },
  { label: "Năm kinh nghiệm", value: 10, suffix: "+", icon: ShieldCheck },
];

function TypewriterEffect({ isActive, reducedMotion }: { isActive: boolean; reducedMotion: boolean }) {
  const [displayText, setDisplayText] = useState(cycleWords[0]);
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (reducedMotion || !isActive) return;
    const currentWord = cycleWords[wordIndex];
    const timeout = window.setTimeout(() => {
      if (!isDeleting && displayText === currentWord) {
        setIsDeleting(true);
        return;
      }
      if (isDeleting && displayText.length === 0) {
        setIsDeleting(false);
        setWordIndex((index) => (index + 1) % cycleWords.length);
        return;
      }
      setDisplayText(
        isDeleting
          ? currentWord.substring(0, displayText.length - 1)
          : currentWord.substring(0, displayText.length + 1),
      );
    }, isDeleting ? 58 : displayText === currentWord ? 2400 : 92);

    return () => window.clearTimeout(timeout);
  }, [displayText, isActive, isDeleting, reducedMotion, wordIndex]);

  return (
    <>
      {reducedMotion || !isActive ? cycleWords[0] : displayText}
      {!reducedMotion && isActive && (
        <span className="ml-[2px] inline-block h-[0.9em] w-[3px] animate-[cursor-blink_1s_step-end_infinite] bg-[#1D4ED8] align-middle -translate-y-[2px]" />
      )}
    </>
  );
}

type HeroContentProps = {
  introRef: (element: HTMLDivElement | null) => void;
  isInView: boolean;
  reducedMotion: boolean;
};

export function HeroContent({ introRef, isInView, reducedMotion }: HeroContentProps) {
  return (
    <div
      ref={introRef}
      data-hero-content
      className="container relative z-10 mx-auto flex max-w-7xl flex-col items-center px-4 text-center sm:px-6 lg:px-8"
    >
      <div className="flex w-full flex-col items-center justify-center">
        <SectionBadge live>Hệ sinh thái Digital hàng đầu</SectionBadge>

        <h1 className="mx-auto mt-4 w-full text-4xl font-black leading-tight tracking-tight text-[#04091A] sm:text-5xl md:text-[54px] lg:text-[64px]">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600 bg-[length:200%_auto]">
            Share. Search. Connect.
          </span>
          <br className="hidden lg:block" />
          <span className="block sm:inline-block sm:whitespace-nowrap">
            <span className="block sm:inline">Tăng trưởng từ</span>{" "}
            <span className="relative inline-block max-w-full whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-[#1D4ED8] to-[#3B82F6] after:absolute after:bottom-1 after:left-0 after:h-1.5 after:w-full after:bg-blue-100/50 sm:min-w-[260px] lg:min-w-[320px] text-left">
              <TypewriterEffect isActive={isInView} reducedMotion={reducedMotion} />
            </span>
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-4xl text-[18px] font-medium leading-relaxed text-slate-500 text-pretty md:text-[20px]">
          SEOSONA là Tech-Agency hàng đầu Việt Nam, kết hợp chiến lược chuyên sâu và
          <br className="hidden md:block" /> tư duy dữ liệu để tăng trưởng khách hàng tiềm năng từ Google bền vững và đột phá.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/lien-he/"
            className="flex h-14 w-full items-center justify-center gap-2 rounded-full bg-[#1D4ED8] px-8 text-[15px] font-bold text-white shadow-xl shadow-blue-500/15 transition-all hover:-translate-y-0.5 hover:bg-blue-600 hover:shadow-blue-500/25 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-100 sm:w-auto"
          >
            Nhận tư vấn chiến lược <ArrowRight size={18} />
          </Link>
          <Link
            href="/case-study/"
            className="group flex h-14 w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-8 text-[15px] font-bold text-[#04091A] shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#1D4ED8] hover:text-[#1D4ED8] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-100 sm:w-auto"
          >
            Xem Case Study <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mx-auto mt-8 grid w-full max-w-3xl grid-cols-2 gap-3 sm:mt-12 sm:grid-cols-3 sm:gap-6">
          {metrics.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className={`group relative flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-slate-200/80 bg-[#F8FAFC]/80 p-4 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-[#1D4ED8]/30 hover:bg-white hover:shadow-[0_12px_40px_rgba(59,166,241,0.12)] sm:rounded-3xl sm:p-5 md:py-6 ${index === 2 ? "col-span-2 sm:col-span-1" : ""}`}
              >
                <div className="relative z-10 mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#1D4ED8] shadow-sm transition-transform duration-500 group-hover:scale-110 sm:h-12 sm:w-12 sm:rounded-2xl">
                  <Icon size={18} className="sm:h-5 sm:w-5" />
                </div>
                <div className="text-[26px] font-black leading-none tracking-tight text-[#04091A] transition-colors duration-500 group-hover:text-[#1D4ED8] sm:text-[32px] md:text-[36px]">
                  <CountUp end={item.value} suffix={item.suffix} />
                </div>
                <div className="mt-1.5 text-center text-[11px] font-bold uppercase tracking-widest text-slate-500 sm:text-[13px]">
                  {item.label}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex flex-col items-center gap-2">
          <span className="text-center text-[10px] font-bold uppercase tracking-widest text-slate-400 sm:text-[11px]">
            Cuộn để khám phá
          </span>
          <div className="flex h-9 w-5 items-start justify-center rounded-full border-2 border-slate-300 p-1 sm:h-10 sm:w-6">
            <div className="h-1.5 w-1.5 rounded-full bg-slate-400" />
          </div>
        </div>
      </div>
    </div>
  );
}
