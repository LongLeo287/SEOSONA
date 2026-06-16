"use client";

import Image from "next/image";
import { clientLogos, pressLogos } from "@/data/homepage-assets";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const stats = [
  { value: "300+", label: "dự án triển khai" },
  { value: "12+", label: "nhóm ngành" },
  { value: "10+", label: "năm kinh nghiệm" }
];

const marqueeLogos = [...clientLogos, ...clientLogos];

function LogoCard({ logo }: { logo: { name: string; src: string; href?: string } }) {
  return (
    <a
      href={logo.href || "#"}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Đến website ${logo.name}`}
      className="group flex h-16 w-40 shrink-0 items-center justify-center px-4 py-3 sm:h-20 sm:w-48"
    >
      <Image
        src={logo.src}
        alt={logo.name}
        width={160}
        height={64}
        className="max-h-10 w-auto object-contain grayscale opacity-40 transition duration-500 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 sm:max-h-12"
      />
    </a>
  );
}

export function TrustSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-24">
      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* --- PART 1: CLIENT LOGOS & STATS --- */}
        <RevealOnScroll direction="up" className="mx-auto max-w-4xl text-center">
          <SectionBadge live={true} className="mx-auto">Khách hàng tiêu biểu</SectionBadge>
          <h2 className="mx-auto mt-2 text-[32px] font-black tracking-tight leading-tight text-[#04091A] sm:text-4xl md:text-[44px] text-balance">
            Đồng hành cùng nhiều doanh nghiệp <span className="text-[#1D4ED8]">tại Việt Nam</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-[17px] font-medium leading-relaxed text-slate-500 text-pretty">
            Các thương hiệu đã tin tưởng SEOSONA trong hành trình tăng trưởng từ Google, tối ưu hóa tỷ lệ chuyển đổi và bức phá doanh thu.
          </p>
        </RevealOnScroll>

        {/* Marquee container */}
        <div className="relative mt-12 overflow-hidden py-4">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent sm:w-32" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent sm:w-32" />

          {/* Divider lines */}
          <div className="absolute inset-x-0 top-0 h-px bg-slate-200/60" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-slate-200/60" />

          <div className="logo-marquee-slow logo-marquee gap-2 pr-2">
            {marqueeLogos.map((logo, index) => (
              <LogoCard key={`${logo.name}-${index}`} logo={logo} />
            ))}
          </div>
        </div>

        {/* Stats */}
        <RevealOnScroll direction="up" delay={200} className="mx-auto mt-12 mb-16 grid max-w-4xl grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
          {stats.map((item) => (
            <div
              key={item.label}
              className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-5 md:py-6 text-center shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-500 hover:-translate-y-1 hover:border-[#1D4ED8]/40 hover:shadow-[0_8px_30px_rgba(59,166,241,0.12)] ring-1 ring-slate-100/50"
            >
              {/* Tech Glow Sweep on Hover */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-0 bg-gradient-to-r from-transparent via-[#1D4ED8] to-transparent transition-all duration-500 group-hover:w-full opacity-0 group-hover:opacity-100" />
              
              <div className="text-[36px] md:text-[40px] font-black text-[#04091A] leading-none tracking-tight transition-colors duration-500 group-hover:text-[#1D4ED8]">
                {item.value}
              </div>
              <div className="mt-2.5 text-[12px] font-bold text-slate-500 uppercase tracking-widest transition-colors duration-500 group-hover:text-slate-600">
                {item.label}
              </div>
            </div>
          ))}
        </RevealOnScroll>


        {/* --- PART 2: PRESS LOGOS --- */}
        <RevealOnScroll direction="up" className="overflow-hidden rounded-[32px] border border-slate-200/80 bg-[#F8FAFC] p-8 lg:p-12 shadow-[0_4px_20px_rgba(0,0,0,0.03)] ring-1 ring-slate-100/50">
          <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            
            {/* Left side: Heading */}
            <div>
              <SectionBadge live={true}>Báo chí & Truyền thông</SectionBadge>
              <h2 className="mt-4 text-[32px] font-black tracking-tight leading-tight text-[#04091A] sm:text-4xl text-balance">
                SEOSONA trên <br className="hidden lg:block"/> 
                <span className="text-[#1D4ED8]">báo chí</span>
              </h2>
              <p className="mt-4 text-[17px] font-medium leading-relaxed text-slate-500 text-pretty">
                Được công nhận bởi các đơn vị báo chí và truyền thông uy tín hàng đầu tại Việt Nam.
              </p>
            </div>

            {/* Right side: Logos Grid */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
              {pressLogos.map((logo) => (
                <div 
                  key={logo.name} 
                  className="group flex h-24 items-center justify-center rounded-[24px] border border-slate-200/80 bg-white p-4 shadow-sm transition-all hover:-translate-y-1 hover:border-[#1D4ED8]/30 hover:shadow-xl ring-1 ring-slate-100/50"
                >
                  <Image 
                    src={logo.src} 
                    alt={logo.name} 
                    width={140} 
                    height={56} 
                    className="max-h-12 w-auto object-contain opacity-50 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105" 
                  />
                </div>
              ))}
            </div>

          </div>
        </RevealOnScroll>

      </div>
    </section>
  );
}
