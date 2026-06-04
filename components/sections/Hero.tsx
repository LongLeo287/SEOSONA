"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BarChart3, Search, ShieldCheck, TrendingUp, Cpu, Network, LineChart, Globe, Bot, type LucideIcon } from "lucide-react";
import { CountUp } from "@/components/ui/CountUp";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

/**
 * Hero Section — SEOSONA Brand (Guideline v2)
 * 
 * Agent: [Visual & Motion Designer] activated
 * Skills loaded: react_best_practices, ui_ux_pro_max, nextjs_app_router_patterns
 * Design ref: SEOSONA Guideline.png
 * 
 * Brand rules applied:
 * - Primary color: Dark Navy #003566 (NOT Neon Green)
 * - Neon Green #46FF00 = accent/glow only
 * - Typography: Poppins (headings), Inter (body)
 * - Border radius: 16px cards, 25px hero wrappers, pill buttons
 * - Shadow: 5px 5px 10px spec from Guideline §08
 */

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
      className="inline-block border-r-[2px] border-[#46FF00] pr-1 font-mono text-[#46FF00]" 
      style={{ animation: "cursor-blink 1s step-end infinite" }}
    >
      {text}
    </span>
  );
}

const metrics = [
  { label: "Dự án SEO", value: 300, suffix: "+", icon: TrendingUp },
  { label: "Học viên", value: 1000, suffix: "+", icon: BarChart3 },
  { label: "Năm kinh nghiệm", value: 10, suffix: "+", icon: ShieldCheck }
];

const dashboardItems: Array<{ label: string; value: string; icon: LucideIcon }> = [
  { label: "Sức khỏe kỹ thuật", value: "96%", icon: Search },
  { label: "Tăng trưởng tự nhiên", value: "+184%", icon: BarChart3 },
  { label: "Cụm nội dung", value: "12 cụm", icon: ArrowRight }
];

export function Hero() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section
      className="relative overflow-hidden py-20 sm:py-24 lg:py-32"
      style={{ background: "linear-gradient(160deg, #003566 0%, #002244 60%, #001833 100%)" }}
    >
      <style>{`
        @keyframes float-anim-1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-40px) rotate(12deg); }
        }
        @keyframes float-anim-2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(30px) rotate(-10deg); }
        }
        @keyframes scanline-anim {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        @keyframes bg-grid-anim {
          0% { transform: translateY(0); }
          100% { transform: translateY(40px); }
        }
        @keyframes cursor-blink {
          50% { border-color: transparent; }
        }
      `}</style>

      {/* Animated Tech Grid Background */}
      <div className="absolute inset-0 opacity-30" style={{ 
        backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
        animation: "bg-grid-anim 3s linear infinite"
      }} />

      {/* Floating Tech Motion Elements (AI, SEO, Data UI Cards) - Hidden on mobile for clean UX */}
      {/* 1. Network / Link Building */}
      <div className="pointer-events-none absolute left-[3%] top-[15%] opacity-60 hidden md:block" style={{ animation: "float-anim-1 6s ease-in-out infinite" }}>
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow-[0_0_20px_rgba(70,255,0,0.15)] backdrop-blur-md">
          <Network size={32} className="text-[#46FF00]" />
        </div>
      </div>

      {/* 2. AI Bot / Automation */}
      <div className="pointer-events-none absolute left-[12%] bottom-[20%] opacity-50 xl:left-[8%] hidden md:block" style={{ animation: "float-anim-2 8s ease-in-out infinite 1s" }}>
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#0077CE]/30 bg-[#0077CE]/10 shadow-[0_0_20px_rgba(0,119,206,0.2)] backdrop-blur-md">
          <Bot size={28} className="text-[#0077CE]" />
        </div>
      </div>

      {/* 3. SEO Growth Chart */}
      <div className="pointer-events-none absolute right-[2%] top-[20%] opacity-60 xl:right-[5%] hidden md:block" style={{ animation: "float-anim-1 7s ease-in-out infinite 2s" }}>
        <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-white/10 bg-white/5 shadow-[0_0_25px_rgba(70,255,0,0.15)] backdrop-blur-md">
          <LineChart size={40} className="text-[#46FF00]" />
        </div>
      </div>

      {/* 4. Tech CPU / Machine Learning */}
      <div className="pointer-events-none absolute right-[10%] bottom-[15%] opacity-50 hidden md:block" style={{ animation: "float-anim-2 9s ease-in-out infinite 3s" }}>
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#0077CE]/30 bg-[#0077CE]/10 shadow-[0_0_20px_rgba(0,119,206,0.2)] backdrop-blur-md">
          <Cpu size={32} className="text-[#0077CE]" />
        </div>
      </div>
      
      {/* 5. Floating Code Badge: AI Engine */}
      <div className="pointer-events-none absolute right-[45%] bottom-[8%] opacity-40 hidden md:block" style={{ animation: "float-anim-1 6.5s ease-in-out infinite 1.5s" }}>
        <div className="rounded-full border border-[#46FF00]/20 bg-black/40 px-4 py-2 text-xs font-mono text-[#46FF00] shadow-[0_0_15px_rgba(70,255,0,0.1)] backdrop-blur-md">
          &lt;AI_Ranking_Engine /&gt;
        </div>
      </div>
      
      {/* 6. Floating Code Badge: Data SEO */}
      <div className="pointer-events-none absolute left-[35%] top-[10%] opacity-30 hidden md:block" style={{ animation: "float-anim-2 7.5s ease-in-out infinite 0.5s" }}>
        <div className="rounded-full border border-[#0077CE]/20 bg-black/40 px-4 py-2 text-xs font-mono text-[#0077CE] shadow-[0_0_15px_rgba(0,119,206,0.1)] backdrop-blur-md">
          [data.optimize(SEO)]
        </div>
      </div>

      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Tagline */}
        <RevealOnScroll direction="up" className="mb-10 flex w-full justify-center">
          <div className="badge-accent inline-flex items-center justify-center shadow-[0_0_15px_rgba(70,255,0,0.2)]">
            <span className="relative flex h-2 w-2 mr-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#46FF00] opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#46FF00]"></span>
            </span>
            <span className="shrink-0 whitespace-nowrap text-xs sm:text-sm">Share To Be Shared More &nbsp;·&nbsp;&nbsp;</span>
            <span className="shrink-0 whitespace-nowrap text-xs sm:text-sm">
              <Typewriter words={[
                "SEO Tổng thể", 
                "Google Ads", 
                "Content Marketing", 
                "Thiết kế Website",
                "Data & Analytics",
                "Performance"
              ]} />
            </span>
          </div>
        </RevealOnScroll>

        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">

          {/* ─── Left Column ─── */}
          <RevealOnScroll direction="left">
            <h1
              className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl xl:text-7xl"
              style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)", color: "#FFFFFF" }}
            >
              Share.{" "}
              <span className="animate-text-shimmer inline-block" style={{ textShadow: "0 0 30px rgba(70,255,0,0.5)" }}>
                Search.
              </span>
              {" "}Connect.
            </h1>

            <p
              className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg"
              style={{ fontFamily: "var(--font-inter, Inter, sans-serif)" }}
            >
              SEOSONA là Tech-Agency hàng đầu Việt Nam, kết hợp chiến lược chuyên sâu và
              tư duy dữ liệu để tăng trưởng khách hàng tiềm năng từ Google bền vững và
              đột phá.
            </p>

            {/* CTAs — Primary = Dark Navy button, per Guideline §6 */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/lien-he/" className="btn-primary">
                Nhận tư vấn chiến lược <ArrowRight size={18} />
              </Link>
              <Link href="/case-study/" className="btn-secondary" style={{ color: "#FFFFFF", borderColor: "rgba(255,255,255,0.3)" }}>
                Xem Case Study
              </Link>
            </div>

            {/* Metric counters */}
            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
              {metrics.map((item, i) => {
                const Icon = item.icon;
                const isLastAndOdd = i === metrics.length - 1 && metrics.length % 2 !== 0;
                return (
                  <div
                    key={item.label}
                    className={`rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5 text-center shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#46FF00]/30 hover:bg-white/10 ${isLastAndOdd ? "col-span-2 sm:col-span-1" : ""}`}
                    style={{ animationDelay: `${i * 80}ms` }}
                  >
                    <Icon className="mx-auto mb-2 text-accent" size={22} />
                    <div
                      className="text-2xl font-bold text-white sm:text-3xl md:text-4xl"
                      style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)" }}
                    >
                      <CountUp end={item.value} suffix={item.suffix} />
                    </div>
                    <div
                      className="mt-1 text-xs sm:text-sm text-slate-400"
                      style={{ fontFamily: "var(--font-inter, Inter, sans-serif)" }}
                    >
                      {item.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </RevealOnScroll>

          {/* ─── Right Column: SEO Dashboard Card ─── */}
          <RevealOnScroll direction="right">
            {/* 3D Flip Card Container */}
            <div 
              className="group [perspective:1500px] w-full cursor-pointer"
              onClick={() => setIsFlipped(!isFlipped)}
            >
              <div className={`relative grid w-full [transform-style:preserve-3d] transition-all duration-700 ease-out group-hover:scale-[1.02] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}>
                
                {/* FRONT SIDE (Dashboard) */}
                <div className="col-start-1 row-start-1 w-full [backface-visibility:hidden]">
                  <div
                    className="overflow-hidden border border-white/10 bg-[#002244]/80 backdrop-blur-xl transition-shadow duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1)] group-hover:shadow-[0_30px_60px_rgba(70,255,0,0.15),inset_0_1px_0_rgba(255,255,255,0.2)]"
                    style={{ borderRadius: "25px" }}
                  >
              {/* Hero image */}
              <div
                className="relative aspect-[4/3] overflow-hidden"
                style={{ borderRadius: "20px 20px 0 0", background: "linear-gradient(135deg, #003566 0%, #004080 100%)" }}
              >
                <Image
                  src="/images/legacy/hero/home-begin.png"
                  alt="SEOSONA Google Marketing Agency Dashboard"
                  fill
                  priority
                  className="float-slow object-contain p-6"
                  sizes="(min-width: 1024px) 45vw, 100vw"
                />
                {/* Tech Scanner Overlay */}
                <div className="absolute inset-0 overflow-hidden rounded-t-[20px] pointer-events-none">
                  <div className="absolute top-0 left-0 w-full h-[30%] bg-gradient-to-b from-transparent via-[#46FF00]/10 to-transparent opacity-80" style={{ animation: "scanline-anim 4s linear infinite" }} />
                </div>
              </div>

              {/* Dashboard data strip */}
              <div className="p-5">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p
                      className="text-xs text-slate-400"
                      style={{ fontFamily: "var(--font-inter, Inter, sans-serif)" }}
                    >
                      Hệ thống tăng trưởng SEOSONA
                    </p>
                    <p
                      className="text-lg font-bold text-white"
                      style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)" }}
                    >
                      Bảng đo lường Hiệu Suất
                    </p>
                  </div>
                  <ShieldCheck className="shrink-0 text-accent" size={28} />
                </div>

                <div className="grid gap-3">
                  {dashboardItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.label}
                        className="group flex items-center justify-between gap-3 rounded-xl border border-white/5 bg-white/5 p-4 transition duration-300 hover:border-[#46FF00]/30 hover:bg-white/10"
                      >
                        <div className="flex min-w-0 items-center gap-3">
                            <Icon className="shrink-0 text-accent" size={17} />
                            <span
                              className="truncate text-slate-300"
                              style={{ fontFamily: "var(--font-inter, Inter, sans-serif)" }}
                            >
                              {item.label}
                            </span>
                          </div>
                          <strong
                            className="shrink-0 text-white transition-colors group-hover:text-[#46FF00]"
                            style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)" }}
                          >
                            {item.value}
                          </strong>
                        </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* BACK SIDE (Sonatools) */}
          <div 
            className="col-start-1 row-start-1 h-full w-full [backface-visibility:hidden] [transform:rotateY(180deg)]"
          >
            <div 
              className="group/link relative flex h-full w-full flex-col items-center justify-center overflow-hidden border border-white/10 bg-gradient-to-br from-[#001D3D] to-[#091338] p-8 transition-shadow duration-500 hover:border-[#46FF00]/50 shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1)] group-hover:shadow-[0_30px_60px_rgba(70,255,0,0.15),inset_0_1px_0_rgba(255,255,255,0.2)]"
              style={{ borderRadius: "25px" }}
            >
              <div className="relative flex items-center justify-center">
                {/* Background Glow */}
                <div className="absolute h-40 w-40 rounded-full bg-[#46FF00]/10 blur-3xl transition-all duration-500 group-hover/link:bg-[#46FF00]/30 group-hover/link:blur-2xl"></div>
                
                {/* Logo */}
                <Image
                  src="/images/brand/sonatools.png"
                  alt="Sonatools.io Ecosystem"
                  width={260}
                  height={90}
                  className="relative z-10 object-contain drop-shadow-2xl transition-transform duration-500 group-hover/link:scale-110"
                />
              </div>
              
              <a 
                href="https://sonatools.io/" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="relative z-20 mt-10 rounded-full border border-[#46FF00]/60 bg-white/5 px-8 py-3 text-sm font-bold !text-[#46FF00] shadow-[0_0_20px_rgba(70,255,0,0.15)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:!bg-[#46FF00] hover:!text-[#091338] hover:shadow-[0_0_30px_rgba(70,255,0,0.5)]"
              >
                Khám phá Hệ sinh thái &rarr;
              </a>
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
