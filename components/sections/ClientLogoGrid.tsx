import Image from "next/image";
import { clientLogos } from "@/data/homepage-assets";
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

export function ClientLogoGrid() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-12 lg:py-16">
      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll direction="up" className="mx-auto max-w-4xl text-center">
          <SectionBadge live={true} className="mx-auto">Khách hàng tiêu biểu</SectionBadge>
          <h2 className="mx-auto mt-2 text-[32px] font-black tracking-tight leading-tight text-[#04091A] sm:text-4xl md:text-[44px] text-balance">
            Đồng hành cùng nhiều doanh nghiệp <span className="text-[#3BA6F1]">tại Việt Nam</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-[17px] font-medium leading-relaxed text-slate-500 text-pretty">
            Các thương hiệu đã tin tưởng SEOSONA trong hành trình tăng trưởng từ Google, tối ưu hóa tỷ lệ chuyển đổi và bức phá doanh thu.
          </p>
        </RevealOnScroll>

        {/* Marquee container */}
        <div className="relative mt-12 overflow-hidden py-4">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#F8FAFC] to-transparent sm:w-32" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#F8FAFC] to-transparent sm:w-32" />

          {/* Divider lines */}
          <div className="absolute inset-x-0 top-0 h-px bg-slate-200/60" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-slate-200/60" />

          <div className="logo-marquee-slow logo-marquee gap-2 pr-2">
            {marqueeLogos.map((logo, index) => (
              <LogoCard key={`${logo.name}-${index}`} logo={logo} />
            ))}
          </div>
        </div>

        <RevealOnScroll direction="up" delay={200} className="mx-auto mt-12 grid max-w-4xl grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
          {stats.map((item) => {
            return (
              <div
                key={item.label}
                className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-5 md:py-6 text-center shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#3BA6F1]/40 hover:shadow-[0_8px_30px_rgba(59,166,241,0.12)] ring-1 ring-slate-100/50"
              >
                {/* Tech Glow Sweep on Hover */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-0 bg-gradient-to-r from-transparent via-[#3BA6F1] to-transparent transition-all duration-500 group-hover:w-full opacity-0 group-hover:opacity-100" />
                
                <div className="text-[36px] md:text-[40px] font-black text-[#04091A] leading-none tracking-tight transition-colors duration-500 group-hover:text-[#3BA6F1]">
                  {item.value}
                </div>
                <div className="mt-2.5 text-[12px] font-bold text-slate-500 uppercase tracking-widest transition-colors duration-500 group-hover:text-slate-600">
                  {item.label}
                </div>
              </div>
            );
          })}
        </RevealOnScroll>
      </div>
    </section>
  );
}
