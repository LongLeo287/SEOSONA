"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import {
  Bot,
  GraduationCap,
  Network,
  TrendingUp,
  Plus,
  Sparkles,
  MousePointerClick,
  CheckSquare,
  Search
} from "lucide-react";
import { useHeroMotionChannel } from "@/components/hero/HeroMotionContext";
import { HeroHandoffNode } from "@/components/hero/HeroHandoffNode";
import { heroNodes } from "@/components/hero/hero-nodes";
import { StrategyCore } from "@/components/hero/StrategyCore";
import {
  getHeroArcPoint,
  HERO_ARC_CURVE_PEAK,
  HERO_ARC_PATH,
  HERO_ARC_SLOTS,
  HERO_HANDOFF_RESET_THRESHOLD,
} from "@/components/hero/hero-motion";
import { useStableReducedMotion } from "@/components/ui/use-stable-reduced-motion";

function smoothstep(value: number) {
  const clamped = Math.min(1, Math.max(0, value));
  return clamped * clamped * (3 - 2 * clamped);
}

export function CoreSolutions() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const transitionRef = useRef<HTMLDivElement>(null);
  const handoffLayerRef = useRef<HTMLDivElement>(null);
  const handoffOffsetRef = useRef<number | null>(null);
  const motionChannel = useHeroMotionChannel();
  const reducedMotion = useStableReducedMotion();

  useEffect(() => {
    const heroRoot = document.querySelector<HTMLElement>("[data-hero-root]");
    handoffOffsetRef.current = null;
    const update = (progress: number, handoffProgress: number) => {
      // CoreSolutions consumes the Hero's already-damped handoff progress.
      // Reading raw scroll here would make the static owner race ahead while
      // Lenis and the Hero are still settling.
      // Lite/reduced-motion Hero has no staged relay, so it is already a
      // completed handoff even though its visual dataset stays at progress 0
      // to keep the static Hero visible.
      const heroIsStatic = heroRoot?.dataset.heroStatic === "true";
      const handoffRelayProgress = heroIsStatic
        ? 1
        : Math.min(1, Math.max(0, handoffProgress));
      // The Hero remains solid until the shared geometry settles. The static
      // owner enters during the final relay with the captured anchor instead
      // of crossfading the same line, logo and nodes at unrelated positions.
      // Turn the static owner on slightly before the dynamic Hero is hidden.
      // Both layers use the same captured centre anchor, so a delayed RAF can
      // no longer expose a blank frame during the ownership switch.
      const transitionVisible = heroIsStatic || handoffRelayProgress >= HERO_HANDOFF_RESET_THRESHOLD ? 1 : 0;

      if (handoffRelayProgress < HERO_HANDOFF_RESET_THRESHOLD) {
        handoffOffsetRef.current = null;
      } else if (handoffOffsetRef.current === null) {
        const sectionRect = sectionRef.current?.getBoundingClientRect();
        const transitionHeight = transitionRef.current?.getBoundingClientRect().height ?? 0;
        if (sectionRect && transitionHeight > 0) {
          const staticApexY = sectionRect.top - transitionHeight
            + transitionHeight * (HERO_ARC_CURVE_PEAK / 240);
          handoffOffsetRef.current = window.innerHeight / 2 - staticApexY;
        }
      }
      const handoffTransform = handoffOffsetRef.current === null
        ? "translate3d(0, 0, 0)"
        : `translate3d(0, ${handoffOffsetRef.current}px, 0)`;

      // The next section is intentionally driven by the same damped relay as
      // the Hero. This keeps the title/cards hooked to the centre handoff:
      // as the rail reaches the middle, the next section enters progressively
      // instead of appearing as an unrelated IntersectionObserver reveal.
      const revealProgress = reducedMotion ? 1 : smoothstep(handoffRelayProgress / 0.72);
      const gridRevealProgress = reducedMotion
        ? 1
        : smoothstep((handoffRelayProgress - 0.12) / 0.76);
      if (titleRef.current) {
        titleRef.current.style.opacity = String(revealProgress);
        titleRef.current.style.transform = `translate3d(0, ${24 * (1 - revealProgress)}px, 0)`;
      }
      if (gridRef.current) {
        gridRef.current.style.opacity = String(gridRevealProgress);
        gridRef.current.style.transform = `translate3d(0, ${42 * (1 - gridRevealProgress)}px, 0)`;
      }
      if (transitionRef.current) {
        transitionRef.current.style.opacity = `${transitionVisible}`;
        transitionRef.current.style.transform = handoffTransform;
      }

      // The layer follows the same captured geometry as the Hero during the
      // relay, then continues with the section as the page moves on.
      if (handoffLayerRef.current) {
        handoffLayerRef.current.style.opacity = transitionVisible ? "1" : "0";
        handoffLayerRef.current.style.transform = handoffTransform;
      }
      sectionRef.current?.setAttribute("data-motion-progress", progress.toFixed(4));
    };

    let frame: number | null = null;
    let latestSignal = { progress: 0, handoffProgress: 0 };
    const scheduleHandoff = () => {
      if (frame !== null) return;
      frame = window.requestAnimationFrame(() => {
        frame = null;
        update(latestSignal.progress, latestSignal.handoffProgress);
      });
    };
    window.addEventListener("scroll", scheduleHandoff, { passive: true });
    window.addEventListener("resize", scheduleHandoff, { passive: true });

    if (!motionChannel) {
      scheduleHandoff();
      return () => {
        window.removeEventListener("scroll", scheduleHandoff);
        window.removeEventListener("resize", scheduleHandoff);
        if (frame !== null) window.cancelAnimationFrame(frame);
      };
    }

    // The Hero publishes on its own animation frame. Queue the latest signal
    // instead of mutating this section synchronously for every publish; this
    // keeps both motion owners inside one browser frame and prevents duplicate
    // layout/style work during wheel input.
    const unsubscribe = motionChannel.subscribe((signal) => {
      latestSignal = signal;
      scheduleHandoff();
    });
    scheduleHandoff();
    return () => {
      unsubscribe();
      window.removeEventListener("scroll", scheduleHandoff);
      window.removeEventListener("resize", scheduleHandoff);
      if (frame !== null) window.cancelAnimationFrame(frame);
    };
  }, [motionChannel, reducedMotion]);

  return (
    <section ref={sectionRef} data-core-solutions data-progress-source="hero" className="relative z-0 overflow-visible -mt-[clamp(140px,30vh,396px)] pt-0 pb-20 font-sans border-t-0">
      {/* One shared transition ribbon. It is the continuation of the Hero
          orbit and the visual header of this section; no second arc is added. */}
      <div
        ref={transitionRef}
        data-core-solutions-handoff
        data-core-solutions-transition
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-[clamp(140px,16vw,210px)] z-30 h-[clamp(140px,16vw,210px)]"
        style={{ opacity: 0, transform: "translate3d(0, 12px, 0)" }}
      >
        <span data-core-solutions-transition-anchor className="absolute left-1/2 top-1/2 h-px w-px" />
        <svg className="h-full w-full" viewBox="0 0 1000 240" preserveAspectRatio="none">
          <defs>
            <linearGradient id="coreTransitionGlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#93C5FD" stopOpacity="0" />
              <stop offset="28%" stopColor="#60A5FA" stopOpacity="0.34" />
              <stop offset="50%" stopColor="#2563EB" stopOpacity="0.72" />
              <stop offset="72%" stopColor="#60A5FA" stopOpacity="0.34" />
              <stop offset="100%" stopColor="#93C5FD" stopOpacity="0" />
            </linearGradient>
            <filter id="coreTransitionBlur" x="-20%" y="-60%" width="140%" height="220%">
              <feGaussianBlur stdDeviation="8" />
            </filter>
          </defs>
          <path
            d={HERO_ARC_PATH}
            fill="none"
            stroke="url(#coreTransitionGlow)"
            strokeWidth="18"
            filter="url(#coreTransitionBlur)"
          />
          <path
            d={HERO_ARC_PATH}
            fill="none"
            stroke="url(#coreTransitionGlow)"
            strokeWidth="3"
          />
        </svg>
      </div>

      <div
        ref={handoffLayerRef}
        data-core-solutions-ecosystem
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-[clamp(140px,16vw,210px)] z-40 hidden h-[clamp(140px,16vw,210px)] sm:block"
        style={{ opacity: 0 }}
      >
        <StrategyCore
          className="!pointer-events-none !absolute !left-1/2 !top-[36.6667%] !-translate-x-1/2 !-translate-y-1/2 !scale-[0.8]"
        />
        {heroNodes.map((node) => {
          const t = HERO_ARC_SLOTS[node.semicircleSlot] ?? 0.5;
          const { curveY, xPercent } = getHeroArcPoint(t);
          return (
            <HeroHandoffNode
              key={`handoff-${node.label}`}
              label={node.label}
              href={node.href}
              color={node.color}
              iconPath={node.iconPath}
              style={{ left: `${xPercent}%`, top: `${(curveY / 240) * 100}%`, transform: "translate(-50%, -50%)" }}
            />
          );
        })}
      </div>
      
      {/* A soft continuation from the Hero canvas removes the hard horizontal
          seam while keeping the CoreSolutions grid legible below the rail. */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(248,250,252,0)_0%,rgba(248,250,252,0.78)_14%,#F8FAFC_28%,#F8FAFC_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#04091A08_1px,transparent_1px),linear-gradient(to_bottom,#04091A08_1px,transparent_1px)] bg-[size:28px_28px]" />

      <div className="container relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 z-10">
        
        {/* --- TOP SECTION: TITLE --- */}
        <div className="flex flex-col items-center text-center mb-8">
          <h2
             ref={titleRef}
             style={{ opacity: 0, transform: "translate3d(0, 24px, 0)", willChange: "opacity, transform" }}
             className="text-[28px] sm:text-4xl lg:text-[42px] leading-tight font-bold z-10 relative drop-shadow-sm flex flex-col items-center"
          >
            <span className="text-slate-800">Tăng trưởng doanh thu bằng</span>
            <span className="bg-gradient-to-r from-[#1D4ED8] to-[#3B82F6] text-transparent bg-clip-text mt-1 pb-1">Hệ Sinh Thái SEOSONA <span className="text-slate-800">trong các nền</span></span>
            <span className="text-slate-800">tảng số</span>
          </h2>

        </div>

        {/* --- BOTTOM SECTION: BENTO GRID --- */}
        <div
          ref={gridRef}
          style={{ opacity: 0, transform: "translate3d(0, 42px, 0)", willChange: "opacity, transform" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5"
        >
          
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

        </div>
      </div>
    </section>
  );
}
