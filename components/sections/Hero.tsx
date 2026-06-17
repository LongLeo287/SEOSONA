"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BarChart3,
  Bot,
  GraduationCap,
  Megaphone,
  Network,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useReducedMotion, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { CountUp } from "@/components/ui/CountUp";
import { SectionBadge } from "@/components/ui/SectionBadge";

const metrics = [
  { label: "Dự án SEO", value: 300, suffix: "+", icon: TrendingUp },
  { label: "Học viên", value: 1000, suffix: "+", icon: BarChart3 },
  { label: "Năm kinh nghiệm", value: 10, suffix: "+", icon: ShieldCheck },
];

const cycleWords = [
  "Data & Strategy",
  "SEO Tổng Thể",
  "AI & Automation",
  "In-house Training",
  "Digital Marketing"
];

function TypewriterEffect({ words }: { words: string[] }) {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentWord = words[wordIndex];

    if (isDeleting) {
      if (displayText.length === 0) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
        timeout = setTimeout(() => {}, 400); // pause before typing next
      } else {
        timeout = setTimeout(() => {
          setDisplayText(currentWord.substring(0, displayText.length - 1));
        }, 30); // delete speed
      }
    } else {
      if (displayText.length === currentWord.length) {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000); // pause when word is fully typed
      } else {
        timeout = setTimeout(() => {
          setDisplayText(currentWord.substring(0, displayText.length + 1));
        }, 70); // typing speed
      }
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex, words]);

  return (
    <>
      {displayText}
      <span className="ml-[2px] inline-block h-[0.9em] w-[3px] animate-[cursor-blink_1s_step-end_infinite] bg-[#1D4ED8] align-middle -translate-y-[2px]"></span>
    </>
  );
}

type HeroNode = {
  label: string;
  href: string;
  icon: LucideIcon;
  color: string;
  orbit: { radius: number; angle: number };
  startRatio: { px: number; py: number; depth: number; rotate: number };
};

const heroNodes: HeroNode[] = [
  {
    label: "Dịch vụ SEO",
    href: "/dich-vu-seo-tong-the/",
    icon: TrendingUp,
    color: "text-blue-600",
    orbit: { radius: 320, angle: 54 * (Math.PI / 180) },
    startRatio: { px: -0.42, py: -0.32, depth: 1.3, rotate: -12 },
  },
  {
    label: "Quảng cáo Ads",
    href: "/dich-vu-ads/",
    icon: Megaphone,
    color: "text-amber-500",
    orbit: { radius: 320, angle: 198 * (Math.PI / 180) },
    startRatio: { px: -0.38, py: 0.38, depth: 0.8, rotate: 12 },
  },
  {
    label: "Giải pháp AI",
    href: "/giai-phap/ai-customer-journey/",
    icon: Bot,
    color: "text-violet-500",
    orbit: { radius: 320, angle: -90 * (Math.PI / 180) },
    startRatio: { px: 0.42, py: -0.38, depth: 1.0, rotate: -6 },
  },
  {
    label: "Data & Auto",
    href: "/giai-phap/tracking-automation/",
    icon: Network,
    color: "text-emerald-500",
    orbit: { radius: 320, angle: -18 * (Math.PI / 180) },
    startRatio: { px: 0.45, py: 0.05, depth: 0.65, rotate: -14 },
  },
  {
    label: "Academy",
    href: "/chi-quyet-academy/",
    icon: GraduationCap,
    color: "text-rose-500",
    orbit: { radius: 320, angle: 126 * (Math.PI / 180) },
    startRatio: { px: 0.38, py: 0.4, depth: 1.2, rotate: 8 },
  },
];

function HeroNodePill({
  node,
  index,
  setRef
}: {
  node: HeroNode;
  index: number;
  setRef: (el: HTMLDivElement | null) => void;
}) {
  const Icon = node.icon;
  const reduceMotion = useReducedMotion();

  return (
    <div
      ref={setRef}
      className="absolute left-1/2 top-1/2 z-20"
      style={{ opacity: 0, pointerEvents: "none" }} // Initial state before JS takes over
    >
      <motion.div
         animate={reduceMotion ? {} : { y: [0, -12, 0] }}
         transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.4 }}
      >
        <Link
          href={node.href}
          aria-label={node.label}
          className="group pointer-events-auto flex items-center gap-3 rounded-full border border-slate-200/80 bg-white/92 px-4 py-3 shadow-[0_12px_34px_rgba(15,23,42,0.08)] backdrop-blur-md transition hover:!border-blue-200 hover:!shadow-[0_18px_46px_rgba(37,99,235,0.14)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-100"
        >
          <span className={`grid h-10 w-10 place-items-center rounded-full border border-slate-100 bg-white shadow-sm ${node.color}`}>
            <Icon size={20} strokeWidth={2.2} />
          </span>
          <span className="whitespace-nowrap pr-1 text-[14px] font-black text-slate-700 transition-colors group-hover:text-blue-600">
            {node.label}
          </span>
        </Link>
      </motion.div>
    </div>
  );
}

function clamp(value: number) {
  return Math.max(0, Math.min(1, value));
}

function lerp(from: number, to: number, progress: number) {
  return from + (to - from) * progress;
}

function easeInOut(value: number) {
  return value * value * (3 - 2 * value);
}

export function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pillsRef = useRef<(HTMLDivElement | null)[]>([]);
  const introRef = useRef<HTMLDivElement>(null);
  const ringsRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const ring1Ref = useRef<HTMLDivElement>(null);
  const ring2Ref = useRef<HTMLDivElement>(null);
  
  const [progress, setProgress] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    // Generate random layout once on client mount
    const randomPositions = function generateRandomPositions(count: number, w: number, h: number) {
  const isMobile = w < 640;
  // Absolute safe zone from center to clear the text block
  const safeX = isMobile ? 180 : 450; // 900px clear width on desktop
  const safeY = isMobile ? 150 : 250; // 500px clear height on desktop
  
  // Pill size to keep it on screen
  const padX = isMobile ? 90 : 130;
  const padY = isMobile ? 40 : 60;
  
  // Max distance from center to stay on screen
  const maxPx = (w / 2) - padX;
  const maxPy = (h / 2) - padY;
  
  // Define 6 distinct outer edge zones to guarantee no overlapping each other
  const zones = [
    { x: -1, y: -1 }, // Top Left
    { x: 1, y: -1 },  // Top Right
    { x: -1, y: 1 },  // Bottom Left
    { x: 1, y: 1 },   // Bottom Right
    { x: -1, y: 0 },  // Mid Left
    { x: 1, y: 0 },   // Mid Right
  ];
  
  zones.sort(() => Math.random() - 0.5);

  const positions: { px: number; py: number; depth: number; rotate: number; angle: number }[] = [];
  
  for (let i = 0; i < count; i++) {
    const zone = zones[i];
    
    let px = 0;
    let py = 0;
    
    if (zone.y === 0) {
       // Mid Side zone: x must be outside safeX, y near center
       const minX = Math.min(safeX, Math.max(safeX, maxPx)); 
       px = zone.x * (safeX + Math.random() * Math.max(0, maxPx - safeX));
       py = (Math.random() - 0.5) * (safeY * 0.5); 
    } else {
       // Corner zones
       px = zone.x * (safeX + Math.random() * Math.max(0, maxPx - safeX));
       py = zone.y * (safeY + Math.random() * Math.max(0, maxPy - safeY));
    }

    positions.push({
      px: px / w, // Convert back to ratio relative to center
      py: py / h,
      depth: 0.6 + Math.random() * 0.7,
      rotate: (Math.random() - 0.5) * 30,
      angle: 0, 
    });
  }

  // Assign evenly spaced, shuffled angles for the orbit
  const angles = Array.from({ length: count }, (_, i) => (i * Math.PI * 2) / count);
  angles.sort(() => Math.random() - 0.5);
  for (let i = 0; i < count; i++) {
    positions[i].angle = angles[i];
  }

  return positions;
}(heroNodes.length, window.innerWidth, window.innerHeight);

    let frame: number;
    let startTime = Date.now();

    const update = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const total = Math.max(1, rect.height - window.innerHeight);
      const rawProgress = clamp(-rect.top / total);

      setProgress((current) => (Math.abs(current - rawProgress) > 0.002 ? rawProgress : current));

      // Timeline: sequential phases that do NOT overlap
      const w = window.innerWidth;
      const h = window.innerHeight;
      
      // Phase 1: Intro text fades out (0.00 → 0.25)
      const introExit = easeInOut(clamp(rawProgress / 0.25));
      const introOpacity = 1 - introExit;
      const introY = lerp(0, -60, introExit);
      const introScale = lerp(1, 0.97, introExit);
      
      // Phase 2: Scattered pills gather into orbit (0.05 → 0.45)
      const gather = easeInOut(clamp((rawProgress - 0.05) / 0.40));
      
      // Phase 2b: Orbit rings fade in (0.15 → 0.45)
      const orbitEnter = easeInOut(clamp((rawProgress - 0.15) / 0.30));
      
      // Phase 3: Orbit morphs into parabola (0.55 → 0.90)
      const parabolaProgress = easeInOut(clamp((rawProgress - 0.55) / 0.35));
      
      const orbitOpacity = orbitEnter;
      const orbitScale = lerp(0.75, 1, orbitEnter);
      
      // Dynamic Y-Tracking:
      // CoreSolutions overlaps by 100vh. It slides up as rawProgress goes 0 -> 1.
      // So its top is at `(1 - rawProgress) * h` relative to the viewport.
      // The Parabola SVG curve peak in CoreSolutions is at 420px from its top.
      const targetParabolaY = (1 - rawProgress) * h + 420;
      const dropY = targetParabolaY - (h / 2);
      
      // Move down to align with Parabola SVG
      const currentDropY = lerp(0, dropY, parabolaProgress);
      
      const logoOpacity = easeInOut(clamp((rawProgress - 0.1) / 0.2));
      const logoScaleFinal = lerp(1, 0.35, parabolaProgress);
      const logoYOffset = lerp(0, -40, parabolaProgress); // Moves logo exactly to the peak of the parabola
      
      const ringOpacity = easeInOut(clamp((rawProgress - 0.1) / 0.2)) * (1 - parabolaProgress);
      
      const t = (Date.now() - startTime) / 1000;
      
      const isMobile = w < 640;
      const isTablet = w >= 640 && w < 1024;
      const orbitScaleMultiplier = isMobile ? 0.58 : (isTablet ? 0.74 : 1);

      // 1. Update Intro Wrapper
      if (introRef.current) {
        introRef.current.style.opacity = introOpacity.toString();
        introRef.current.style.transform = `translate3d(0, ${introY}px, 0) scale(${introScale})`;
        introRef.current.style.pointerEvents = introOpacity > 0.2 ? "auto" : "none";
      }

      // 2. Update Orbit Wrappers directly ensuring synced scaling
      if (ringsRef.current) {
        ringsRef.current.style.opacity = orbitOpacity.toString();
        ringsRef.current.style.transform = `translate(-50%, -50%) translate3d(0, ${currentDropY}px, 0) scale(${orbitScale * orbitScaleMultiplier})`;
      }
      if (logoRef.current) {
        logoRef.current.style.opacity = logoOpacity.toString();
        logoRef.current.style.transform = `translate(-50%, -50%) translate3d(0, ${currentDropY + logoYOffset}px, 0) scale(${orbitScale * orbitScaleMultiplier * logoScaleFinal})`;
      }
      if (ring1Ref.current) ring1Ref.current.style.opacity = ringOpacity.toString();
      if (ring2Ref.current) ring2Ref.current.style.opacity = ringOpacity.toString();

      // 3. Update DOM nodes directly for 60fps continuous orbiting & floating
      heroNodes.forEach((node, i) => {
         const el = pillsRef.current[i];
         if (!el) return;
         
         const rand = randomPositions[i];
         
         let startX = rand.px * w;
         let startY = rand.py * h;

         const currentDepth = lerp(rand.depth, 1, gather);
         const scale = currentDepth;
         
         const isFar = rand.depth < 0.9;
         const blurAmount = isFar ? lerp((1 - rand.depth) * 4, 0, gather) : 0;
         const filter = blurAmount > 0.1 ? `blur(${blurAmount}px)` : "none";

         // Gentle Floating Animation
         const floatSpeed = 1.5;
         const floatRadius = 15 * currentDepth;
         const floatX = lerp(Math.sin(t * floatSpeed + i * 2) * floatRadius, 0, gather);
         const floatY = lerp(Math.cos(t * floatSpeed * 0.8 + i * 2) * floatRadius, 0, gather);
         
         // Rotate exactly 1 time (180 degrees) DURING the gather phase, then stop completely.
         // When gather = 0, they are offset by -Math.PI. When gather = 1, they are at their final rand.angle.
         const currentAngle = rand.angle - Math.PI * (1 - gather);
         
         // Base circle coordinates
         const circleX = Math.cos(currentAngle) * node.orbit.radius * orbitScaleMultiplier;
         const circleY = Math.sin(currentAngle) * node.orbit.radius * orbitScaleMultiplier;
         
         // Target Parabola coordinates
         const spread = Math.min(w * 0.38, 350);
         const parabolaXList = [-spread, -spread * 0.5, 0, spread * 0.5, spread];
         // Downward opening arch
         const parabolaYList = [100, 30, -50, 30, 100];
         
         const targetX = lerp(circleX, parabolaXList[i], parabolaProgress);
         const targetY = lerp(circleY, parabolaYList[i], parabolaProgress);
         
         const x = lerp(startX, targetX, gather) + floatX * (1 - parabolaProgress);
         const y = lerp(startY, targetY, gather) + floatY * (1 - parabolaProgress);
         const rotate = lerp(rand.rotate, 0, gather);
         
         el.style.opacity = "1";
         el.style.pointerEvents = "auto";
         el.style.filter = filter;
         el.style.transform = `translate(-50%, -50%) translate3d(${x}px, ${y + currentDropY}px, 0) rotate(${rotate}deg) scale(${scale})`;

         // Morph Pill into Icon
         if (parabolaProgress > 0) {
             const aTag = el.querySelector('a') as HTMLElement;
             const textSpan = el.querySelector('span.whitespace-nowrap') as HTMLElement;
             if (aTag && textSpan) {
                 aTag.style.gap = `${lerp(12, 0, parabolaProgress)}px`;
                 aTag.style.padding = `${lerp(16, 0, parabolaProgress)}px`;
                 aTag.style.backgroundColor = `rgba(255,255,255, ${lerp(0.92, 0, parabolaProgress)})`;
                 aTag.style.borderColor = `rgba(226, 232, 240, ${lerp(0.8, 0, parabolaProgress)})`;
                 aTag.style.boxShadow = parabolaProgress > 0.5 ? "none" : "";
                 
                 textSpan.style.opacity = (1 - parabolaProgress).toString();
                 textSpan.style.maxWidth = `${lerp(200, 0, parabolaProgress)}px`;
                 textSpan.style.overflow = "hidden";
                 textSpan.style.paddingRight = `${lerp(4, 0, parabolaProgress)}px`;
             }
         } else {
             // Reset styles if scrolling back up
             const aTag = el.querySelector('a') as HTMLElement;
             const textSpan = el.querySelector('span.whitespace-nowrap') as HTMLElement;
             if (aTag && textSpan) {
                 aTag.style.gap = "";
                 aTag.style.padding = "";
                 aTag.style.backgroundColor = "";
                 aTag.style.borderColor = "";
                 aTag.style.boxShadow = "";
                 textSpan.style.opacity = "1";
                 textSpan.style.maxWidth = "200px";
                 textSpan.style.overflow = "visible";
                 textSpan.style.paddingRight = "";
             }
         }
      });

      const stillInHero = rect.bottom > 0 && rect.top < window.innerHeight;
      if (stillInHero) {
        frame = requestAnimationFrame(update);
      }
    };

    frame = requestAnimationFrame(update);

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section ref={sectionRef} data-hero-progress={progress.toFixed(3)} className="h-[200vh] bg-transparent pointer-events-none">
      
      {/* --- BACKGROUND STICKY LAYER (z-10) --- */}
      <div className="sticky top-0 z-10 flex h-screen items-center justify-center bg-white pb-16 sm:pb-24 pointer-events-none">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#04091A0A_1px,transparent_1px),linear-gradient(to_bottom,#04091A0A_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />

        <div
          ref={introRef}
          style={{ opacity: 1 }} // Initial state
          className="container relative z-10 mx-auto flex max-w-7xl flex-col items-center px-4 text-center sm:px-6 lg:px-8 pointer-events-auto"
        >
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
            }}
            className="flex w-full flex-col items-center justify-center"
          >
            <motion.div variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }}>
              <SectionBadge live>Hệ sinh thái Digital hàng đầu</SectionBadge>
            </motion.div>

            <motion.h1 
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }}
              className="mx-auto mt-4 w-full text-4xl font-black leading-tight tracking-tight text-[#04091A] sm:text-5xl md:text-[54px] lg:text-[64px]"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600 animate-[gradient-flow_4s_ease_infinite] bg-[length:200%_auto]">
                 Share. Search. Connect.
              </span>
              <br className="hidden lg:block" />
              <span className="inline-block lg:whitespace-nowrap">
                Tăng trưởng từ <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#1D4ED8] to-[#3B82F6] after:absolute after:bottom-1 after:left-0 after:h-1.5 after:w-full after:bg-blue-100/50 after:-z-10 min-w-[260px] lg:min-w-[320px] text-left">
                  <TypewriterEffect words={cycleWords} />
                </span>
              </span>
            </motion.h1>

            <motion.p 
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }}
              className="mx-auto mt-6 max-w-4xl text-[18px] font-medium leading-relaxed text-slate-500 text-pretty md:text-[20px]"
            >
              SEOSONA là Tech-Agency hàng đầu Việt Nam, kết hợp chiến lược chuyên sâu và
              <br className="hidden md:block" /> tư duy dữ liệu để tăng trưởng khách hàng tiềm năng từ Google bền vững và đột phá.
            </motion.p>

            <motion.div 
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }}
              className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
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
            </motion.div>

            <motion.div 
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }}
              className="mx-auto mt-8 sm:mt-12 grid w-full max-w-3xl grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-6"
            >
              {metrics.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className={`group relative flex flex-col items-center justify-center overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/80 bg-[#F8FAFC]/80 p-4 sm:p-5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-[#1D4ED8]/30 hover:bg-white hover:shadow-[0_12px_40px_rgba(59,166,241,0.12)] md:py-6 ${
                      index === 2 ? "col-span-2 sm:col-span-1" : ""
                    }`}
                  >
                    <div className="relative z-10 mb-3 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl bg-white text-[#1D4ED8] shadow-sm transition-transform duration-500 group-hover:scale-110">
                      <Icon size={18} className="sm:w-5 sm:h-5" />
                    </div>
                    <div className="text-[26px] sm:text-[32px] md:text-[36px] font-black leading-none tracking-tight text-[#04091A] transition-colors duration-500 group-hover:text-[#1D4ED8]">
                      <CountUp end={item.value} suffix={item.suffix} />
                    </div>
                    <div className="mt-1.5 text-[11px] sm:text-[13px] font-bold uppercase tracking-widest text-slate-500 text-center">
                      {item.label}
                    </div>
                  </div>
                );
              })}
            </motion.div>
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }}
              className="mt-12 flex flex-col items-center gap-2"
            >
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-slate-400 text-center">
                 Cuộn để khám phá
              </span>
              <div className="flex h-9 w-5 sm:h-10 sm:w-6 items-start justify-center rounded-full border-2 border-slate-300 p-1">
                <div className="h-1.5 w-1.5 rounded-full bg-slate-400 animate-[bounce_1.5s_infinite]" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* --- FOREGROUND STICKY LAYER (z-30) --- */}
      <div className="sticky top-0 z-30 flex h-screen items-center justify-center bg-transparent pb-16 sm:pb-24 pointer-events-none mt-[-100vh]">
        
        {/* Floating Nodes Wrapper (no scale modifier here so safe zone works) */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 h-0 w-0">
          {heroNodes.map((node, i) => (
            <HeroNodePill 
               key={node.label} 
               node={node} 
               index={i}
               setRef={(el) => { pillsRef.current[i] = el; }}
            />
          ))}
        </div>

        <div
          ref={ringsRef}
          style={{ opacity: 0 }} // Initial state
          className="pointer-events-none absolute left-1/2 top-1/2 z-10 h-[760px] w-[760px]"
        >
          <div
            ref={ring1Ref}
            className="absolute inset-[60px] rounded-full border border-dashed border-blue-200 animate-[spin_60s_linear_infinite]"
          />
          <div
            ref={ring2Ref}
            className="absolute inset-[210px] rounded-full border border-dashed border-blue-200/80 animate-[spin_40s_linear_infinite_reverse]"
          />
        </div>

        <div
          ref={logoRef}
          style={{ opacity: 0 }} // Initial state
          className="pointer-events-none absolute left-1/2 top-1/2 z-20"
        >
           <motion.div
             animate={{ y: [0, -12, 0] }}
             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
             className="grid h-36 w-36 place-items-center rounded-full border border-slate-100 bg-white shadow-[0_0_60px_rgba(37,99,235,0.13)] sm:h-44 sm:w-44 lg:h-52 lg:w-52"
           >
              <Image
                src="/images/brand/Seosona_Logo.png"
                alt="SEOSONA"
                width={180}
                height={72}
                className="h-auto w-[82%] object-contain"
                priority
              />
           </motion.div>
        </div>
      </div>
    </section>
  );
}
