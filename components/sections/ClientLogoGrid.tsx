import Image from "next/image";
import { clientLogos } from "@/data/homepage-assets";

const stats = [
  { value: "300+", label: "dự án triển khai" },
  { value: "12+", label: "nhóm ngành" },
  { value: "10+", label: "năm kinh nghiệm" }
];

const marqueeLogos = [...clientLogos, ...clientLogos];

export function ClientLogoGrid() {
  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20">
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-50 to-white" />
      <div className="container relative">
        <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 p-5 text-white shadow-2xl shadow-slate-900/15 sm:p-8 lg:p-10">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-200">Khách hàng tiêu biểu</span>
            <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">Đồng hành cùng doanh nghiệp tăng trưởng từ Google</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">SEOSONA đã đồng hành cùng nhiều thương hiệu trong hành trình xây dựng hệ thống SEO, Google Ads và nội dung tăng trưởng bền vững.</p>
          </div>

          <div className="relative mt-8 overflow-hidden py-2">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-slate-950 to-transparent sm:w-28" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-slate-950 to-transparent sm:w-28" />
            <div className="logo-marquee gap-4 pr-4">
              {marqueeLogos.map((logo, index) => (
                <div key={`${logo.name}-${index}`} className="group flex h-20 w-48 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:border-cyan-300/40 hover:shadow-xl sm:h-24 sm:w-56">
                  <Image src={logo.src} alt={logo.name} width={150} height={60} className="max-h-12 w-auto object-contain opacity-75 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0 sm:max-h-14" />
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto mt-8 grid max-w-3xl grid-cols-3 gap-3 rounded-3xl border border-white/10 bg-white/10 p-3 backdrop-blur">
            {stats.map((item) => (
              <div key={item.label} className="text-center">
                <div className="text-2xl font-black text-white sm:text-3xl">{item.value}</div>
                <div className="mt-1 text-xs font-semibold text-slate-300 sm:text-sm">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
