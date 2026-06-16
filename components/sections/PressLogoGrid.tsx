import Image from "next/image";
import { pressLogos } from "@/data/homepage-assets";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function PressLogoGrid() {
  return (
    <section className="relative bg-[#F8FAFC] py-12 lg:py-16">
      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll direction="up" className="overflow-hidden rounded-[32px] border border-slate-200/80 bg-[#F8FAFC] p-8 lg:p-12 shadow-sm ring-1 ring-slate-100/50">
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
                  className="group flex h-24 items-center justify-center rounded-[24px] border border-slate-200/80 bg-[#F8FAFC] p-4 shadow-sm transition-all hover:-translate-y-1 hover:border-[#1D4ED8]/30 hover:shadow-xl ring-1 ring-slate-100/50"
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
