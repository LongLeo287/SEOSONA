import Image from "next/image";
import { clientLogos } from "@/data/homepage-assets";

const stats = [
  { value: "300+", label: "dự án triển khai" },
  { value: "12+", label: "nhóm ngành" },
  { value: "10+", label: "năm kinh nghiệm" }
];

const marqueeLogos = [...clientLogos, ...clientLogos];

function LogoCard({ logo, index }: { logo: { name: string; src: string }; index: number }) {
  return (
    <div className="group flex h-20 w-48 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl sm:h-24 sm:w-56">
      <Image
        src={logo.src}
        alt={logo.name}
        width={160}
        height={64}
        className="max-h-12 w-auto object-contain opacity-75 grayscale transition duration-300 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0 sm:max-h-14"
        priority={index < 4}
      />
    </div>
  );
}

export function ClientLogoGrid() {
  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20">
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-50 to-white" />
      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-black text-blue-700 shadow-sm">Khách hàng tiêu biểu</span>
          <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl md:text-5xl">Đồng hành cùng nhiều doanh nghiệp tại Việt Nam</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-700 sm:text-lg">Các thương hiệu đã tin tưởng SEOSONA trong hành trình tăng trưởng từ Google.</p>
        </div>

        <div className="relative mt-9 overflow-hidden rounded-[32px] border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-blue-50 p-4 shadow-xl shadow-slate-900/5 sm:p-6 lg:p-8">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-slate-50 via-white/90 to-transparent sm:w-32" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-blue-50 via-white/90 to-transparent sm:w-32" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100/60 blur-3xl" />

          <div className="relative overflow-hidden py-2">
            <div className="logo-marquee gap-4 pr-4">
              {marqueeLogos.map((logo, index) => (
                <LogoCard key={`${logo.name}-${index}`} logo={logo} index={index} />
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-7 grid max-w-3xl gap-3 sm:grid-cols-3">
          {stats.map((item) => (
            <div key={item.label} className="rounded-3xl border border-slate-200 bg-white p-5 text-center shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
              <div className="text-3xl font-black text-slate-950">{item.value}</div>
              <div className="mt-1 text-sm font-bold text-slate-600">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
