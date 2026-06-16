"use client";

import { useState, useEffect, useRef } from "react";
import type { CSSProperties } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, TrendingUp, BarChart3, ShieldCheck, Target, MousePointerClick, Sparkles, Workflow, GraduationCap } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { CountUp } from "@/components/ui/CountUp";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { motion, useScroll, useTransform, MotionValue, useMotionValueEvent, useAnimationFrame, useMotionValue } from "framer-motion";

const metrics = [
  { label: "Dự án SEO", value: 300, suffix: "+", icon: TrendingUp },
  { label: "Học viên", value: 1000, suffix: "+", icon: BarChart3 },
  { label: "Năm kinh nghiệm", value: 10, suffix: "+", icon: ShieldCheck }
];

const orbitalPillars = [
  { icon: Target, label: "Dịch vụ SEO", color: "text-[#3BA6F1]", startRadius: 500, angle: 0, depth: 1, tilt: 0 },
  { icon: MousePointerClick, label: "Quảng cáo Ads", color: "text-[#F59E0B]", startRadius: 420, angle: 72, depth: 1, tilt: 0 },
  { icon: Sparkles, label: "Giải pháp AI", color: "text-[#8B5CF6]", startRadius: 480, angle: 144, depth: 1, tilt: 0 },
  { icon: Workflow, label: "Data & Auto", color: "text-[#10B981]", startRadius: 550, angle: 216, depth: 1, tilt: 0 },
  { icon: GraduationCap, label: "Academy", color: "text-[#F43F5E]", startRadius: 380, angle: 288, depth: 1, tilt: 0 }
];

type OrbitalPillar = {
  icon: LucideIcon;
  label: string;
  color: string;
  startRadius: number;
  angle: number;
  depth: number;
  tilt: number;
};

type PreparedOrbitalPillar = OrbitalPillar & {
  orbitRadius: number;
  startAngle: number;
  targetAngle: number;
};

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
      className="inline-block border-r-[2px] border-[#3BA6F1] pr-1 text-[#3BA6F1] animate-[cursor-blink_1s_step-end_infinite]"
    >
      {text}
    </span>
  );
}

// Component cho từng Node trên quỹ đạo để quản lý useTransform độc lập
const OrbitalNode = ({
  pillar,
  scrollYProgress,
  spinOffset
}: {
  pillar: PreparedOrbitalPillar;
  scrollYProgress: MotionValue<number>;
  spinOffset: MotionValue<number>;
}) => {
  // Transform bán kính từ xa (startRadius) về gần (orbitRadius)
  const dynamicRadius = useTransform(scrollYProgress, [0.15, 0.4], [pillar.startRadius, pillar.orbitRadius || 280]);

  // Transform góc xoay: Tính toán vị trí góc mục tiêu liên tục thay đổi (do quỹ đạo xoay)
  // Nhưng khi cuộn ngược lên, luôn luôn trả góc về chính xác vị trí startAngle ban đầu
  // Để tránh bị xoay ngược (unwind) hàng chục vòng, ta tính toán số vòng xoay đã đi qua
  const nodeAngle = useTransform(
    [scrollYProgress, spinOffset],
    ([scroll, spin]) => {
      const scrollValue = typeof scroll === "number" ? scroll : 0;
      const spinValue = typeof spin === "number" ? spin : 0;
      let progress = (scrollValue - 0.15) / 0.25;
      if (progress < 0) progress = 0;
      if (progress > 1) progress = 1;

      // Góc mục tiêu thực tế (đã cộng thêm vòng xoay liên tục)
      const currentTarget = pillar.targetAngle + spinValue;

      // Tìm góc xuất phát gần nhất với góc mục tiêu hiện tại (bù trừ n vòng 360 độ)
      const diff = currentTarget - pillar.startAngle;
      const loops = Math.round(diff / 360);
      const adjustedStartAngle = pillar.startAngle + loops * 360;

      // Interpolate mượt mà từ góc xuất phát (adjusted) đến góc mục tiêu (đang xoay)
      return adjustedStartAngle + progress * (currentTarget - adjustedStartAngle);
    }
  );

  // Góc đảo ngược để luôn giữ thẻ thẳng đứng
  const antiNodeAngle = useTransform(nodeAngle, (a) => -a);

  // Transform tilt (độ nghiêng ngẫu nhiên) về 0 khi gom lại để đứng thẳng tắp
  const tiltValue = useTransform(scrollYProgress, [0.15, 0.4], [pillar.tilt, 0]);

  // Transform depth (xa gần) về 1 khi gom lại
  const depthValue = useTransform(scrollYProgress, [0.15, 0.4], [pillar.depth, 1]);

  // Các hiệu ứng thị giác dựa trên depth (đã tinh chỉnh để bớt mờ)
  const nodeScale = useTransform(depthValue, [0.6, 1], [0.75, 1]);
  const nodeOpacity = useTransform(depthValue, [0.6, 1], [0.6, 1]);
  const nodeBlur = useTransform(depthValue, (d) => `blur(${(1 - d) * 3}px)`);

  return (
    <motion.div className="absolute top-0 left-0" style={{ rotate: nodeAngle }}>
      <motion.div style={{ x: dynamicRadius }} className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 z-10">
        {/* Đảo ngược góc nghiêng quỹ đạo để giữ Node luôn đứng thẳng */}
        <motion.div style={{ rotate: antiNodeAngle }}>
          {/* Thêm độ nghiêng chéo ngẫu nhiên (Tilt) */}
          <motion.div style={{ rotate: tiltValue }}>
            {/* Hiệu ứng bay lơ lửng tự do và mờ/rõ theo độ sâu */}
            <motion.div
              style={{ scale: nodeScale, opacity: nodeOpacity, filter: nodeBlur }}
              animate={{ y: [-15, 15, -15] }}
              transition={{ duration: 4 + (Math.abs(pillar.startAngle) % 3), repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-auto flex items-center gap-3 rounded-full bg-white/90 backdrop-blur-md px-5 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-200/80 transition-all duration-300 hover:scale-110 hover:border-[#3BA6F1]/50 cursor-pointer group"
            >
              <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white shadow-sm border border-slate-100 transition-colors group-hover:bg-[#3BA6F1] group-hover:text-white group-hover:border-transparent ${pillar.color}`}>
                <pillar.icon size={22} />
              </div>
              <span className="font-black text-slate-700 text-[15px] whitespace-nowrap pr-2 group-hover:text-[#3BA6F1] transition-colors">{pillar.label}</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [isGathered, setIsGathered] = useState(false);
  const spinOffset = useMotionValue(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest >= 0.3 && !isGathered) setIsGathered(true);
    else if (latest < 0.3 && isGathered) setIsGathered(false);
  });

  useAnimationFrame((_, delta) => {
    if (isGathered) {
      spinOffset.set(spinOffset.get() + delta * 0.01);
    }
  });

  const [pillars, setPillars] = useState<PreparedOrbitalPillar[]>([]);
  const [mounted, setMounted] = useState(false);

  // Sinh tọa độ ngẫu nhiên khi component mount
  useEffect(() => {
    // 1. Chia 360 độ thành 5 điểm mục tiêu (Ngũ giác đều hoàn hảo bao quanh logo)
    const baseTargetAngles = [-90, -18, 54, 126, 198];
    const shuffledTargetAngles = [...baseTargetAngles].sort(() => Math.random() - 0.5);

    // 2. Quy tắc Depth: Chính xác 2 xa (0.6), 3 gần (1.0)
    const depths = [0.6, 0.6, 1.0, 1.0, 1.0].sort(() => Math.random() - 0.5);

    // Màn hình càng lớn thì bán kính quỹ đạo khi gom lại càng rộng
    let orbitRadius = 280;
    if (window.innerWidth >= 1536) orbitRadius = 380;
    else if (window.innerWidth >= 1280) orbitRadius = 320;

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPillars(orbitalPillars.map((p, idx) => {
      const targetAngle = shuffledTargetAngles[idx];
      const startAngle = targetAngle + (Math.random() * 80 - 40);

      // 3. Tính toán Ranh giới Hình chữ nhật (Rectangular Bounding Box) DỰA VÀO KÍCH THƯỚC MÀN HÌNH THỰC TẾ
      // Xác định tỷ lệ scale hiện tại của container
      let scale = 1;
      if (window.innerWidth < 640) scale = 0.6;
      else if (window.innerWidth < 1024) scale = 0.75;
      else if (window.innerWidth < 1280) scale = 1;
      else if (window.innerWidth < 1536) scale = 1.25;
      else scale = 1.5;

      const virtualWidth = window.innerWidth / scale;
      const virtualHeight = window.innerHeight / scale;

      const paddingX = 80;
      const paddingY = 60;

      const maxX = (virtualWidth / 2) - paddingX;
      const maxY = (virtualHeight / 2) - paddingY;

      const rad = startAngle * (Math.PI / 180);
      const cosA = Math.cos(rad);
      const sinA = Math.sin(rad);

      // Bán kính vươn xa tối đa đến khi đụng phải khung chữ nhật (Top/Right/Bottom/Left)
      // Dùng trị tuyệt đối và chống chia cho 0
      const maxRadiusX = Math.abs(maxX / (cosA || 0.001));
      const maxRadiusY = Math.abs(maxY / (sinA || 0.001));
      const maxRadius = Math.min(maxRadiusX, maxRadiusY);

      // Mở rộng Safe Zone bằng % màn hình (40%) để đẩy các thẻ ra xa hẳn ngoài nội dung
      const idealSafeA = virtualWidth * 0.4;
      const idealSafeB = virtualHeight * 0.4;

      // Đảm bảo luôn có tối thiểu 650x450, và nếu maxX nhỏ hơn min thì lấy min để ưu tiên đẩy ra ngoài nội dung
      const safeA = Math.min(Math.max(650, idealSafeA), Math.max(650, maxX - 20));
      const safeB = Math.min(Math.max(450, idealSafeB), Math.max(450, maxY - 20));
      const minRadius = (safeA * safeB) / Math.sqrt(Math.pow(safeB * cosA, 2) + Math.pow(safeA * sinA, 2));

      // Đảm bảo maxRadius không bao giờ nhỏ hơn minRadius (để tránh lỗi startRadius vô cực hoặc ngẫu nhiên ngược)
      const finalMaxRadius = Math.max(minRadius, maxRadius);

      // Bán kính ngẫu nhiên đảm bảo 100% nằm ngoài vùng Safe Zone
      const startRadius = minRadius + Math.random() * Math.max(20, finalMaxRadius - minRadius);

      // Thêm chút ngẫu nhiên nhỏ cho Depth để trông tự nhiên hơn
      const exactDepth = depths[idx];
      const depthVariance = exactDepth === 1.0 ? (0.9 + Math.random() * 0.1) : (0.55 + Math.random() * 0.1);

      return {
        ...p,
        startRadius: startRadius,
        orbitRadius: orbitRadius,
        startAngle: startAngle,
        targetAngle: targetAngle,
        depth: depthVariance,
        tilt: Math.random() * 40 - 20,
      };
    }));
    setMounted(true);
  }, []);

  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
  const heroDisplay = useTransform(scrollYProgress, [0, 0.2, 0.21, 1], ["flex", "flex", "none", "none"]);
  const heroPointerEvents = useTransform(scrollYProgress, [0, 0.2], ["auto", "none"]);

  const logoOpacity = useTransform(scrollYProgress, [0, 0.1, 0.3, 1], [0, 0, 1, 1]);
  const logoScale = useTransform(scrollYProgress, [0, 0.1, 0.3, 1], [2.5, 2.5, 1, 1]);

  return (
    <section ref={containerRef} className="relative z-0 h-[300vh] -mb-[100vh] bg-white">

      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">

        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#04091A0A_1px,transparent_1px),linear-gradient(to_bottom,#04091A0A_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#F8FAFC] to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />

        <motion.div
          style={{
            opacity: heroOpacity,
            scale: heroScale,
            y: heroY,
            display: heroDisplay,
            pointerEvents: heroPointerEvents as unknown as CSSProperties["pointerEvents"]
          }}
          className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex-col items-center text-center -mt-12 lg:-mt-16"
        >
          <RevealOnScroll direction="up" className="flex flex-col items-center w-full">
            <SectionBadge live={true}>
              Hệ sinh thái Digital hàng đầu
            </SectionBadge>

            <h1 className="mx-auto mt-4 w-full text-4xl font-black leading-tight tracking-tight text-[#04091A] sm:text-5xl md:text-[54px] lg:text-[64px]">
              Share<span className="text-[#3BA6F1]">.</span> Search<span className="text-[#3BA6F1]">.</span> Connect<span className="text-[#3BA6F1]">.</span> <br className="hidden lg:block" />
              <span className="inline-block lg:whitespace-nowrap">
                Tăng trưởng từ <Typewriter words={["Dịch vụ SEO", "Quảng cáo Ads", "Giải pháp AI", "Data & Automation", "Đào tạo Academy"]} />
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-4xl text-[18px] md:text-[20px] font-medium leading-relaxed text-slate-500 text-pretty">
              SEOSONA là Tech-Agency hàng đầu Việt Nam, kết hợp chiến lược chuyên sâu và <br className="hidden md:block" /> tư duy dữ liệu để tăng trưởng khách hàng tiềm năng từ Google bền vững và đột phá
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/lien-he" className="flex h-14 items-center justify-center gap-2 rounded-full bg-[#3BA6F1] px-8 text-[15px] font-bold text-white transition-all hover:scale-105 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/25 w-full sm:w-auto">
                Nhận tư vấn chiến lược <ArrowRight size={18} />
              </Link>
              <Link href="/case-study" className="flex h-14 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-8 text-[15px] font-bold text-[#04091A] transition-all hover:border-[#3BA6F1] hover:text-[#3BA6F1] w-full sm:w-auto group">
                Xem Case Study <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 max-w-3xl mx-auto w-full">
              {metrics.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="group relative flex flex-col items-center justify-center rounded-3xl border border-slate-200/80 bg-[#F8FAFC]/80 backdrop-blur-sm p-5 md:py-6 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(59,166,241,0.12)] hover:border-[#3BA6F1]/30 hover:bg-white overflow-hidden"
                  >
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
        </motion.div>

        {/* --- LỚP ORBITAL SYSTEM --- */}
        {/* Z-index 20 để luôn nằm TRÊN lớp nội dung Text, không bị che khuất */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: mounted ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="absolute top-1/2 left-1/2 w-0 h-0 z-20 scale-[0.6] sm:scale-75 lg:scale-100 pointer-events-none"
        >

           <motion.div
             style={{ opacity: logoOpacity, scale: logoScale }}
             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center w-[300px] xl:w-[400px] 2xl:w-[500px]"
           >
             <div className="relative flex items-center justify-center h-32 w-32 xl:h-40 xl:w-40 2xl:h-52 2xl:w-52 rounded-full bg-white shadow-[0_0_50px_rgba(59,166,241,0.15)] border border-slate-100 before:absolute before:inset-[-20px] xl:before:inset-[-24px] 2xl:before:inset-[-32px] before:rounded-full before:border before:border-dashed before:border-[#3BA6F1]/30 before:animate-[spin_20s_linear_infinite]">
               <Image
                 src="/images/brand/Seosona_Logo.png"
                 alt="SEOSONA Logo"
                 width={180}
                 height={60}
                 className="w-[85%] h-auto object-contain"
                 priority
               />
             </div>
           </motion.div>

           {/* Vòng tròn quỹ đạo gạch nối mờ (Kích thước bằng chính xác orbitRadius) */}
           {pillars[0]?.orbitRadius && (
             <motion.div
               animate={{ opacity: isGathered ? 1 : 0, scale: isGathered ? 1 : 0.8 }}
               transition={{ duration: 1.5, ease: "easeInOut" }}
               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#3BA6F1]/20 pointer-events-none"
               style={{
                 width: pillars[0].orbitRadius * 2,
                 height: pillars[0].orbitRadius * 2
               }}
             />
           )}

           <motion.div className="absolute top-0 left-0">
               {pillars.map((pillar, idx) => (
                 <OrbitalNode key={idx} pillar={pillar} scrollYProgress={scrollYProgress} spinOffset={spinOffset} />
              ))}
           </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
