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
    <div className="group flex h-20 w-48 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 py-4 shadow-sm backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-[#46FF00]/50 hover:bg-white/10 sm:h-24 sm:w-56">
      <Image
        src={logo.src}
        alt={logo.name}
        width={160}
        height={64}
        className="max-h-12 w-auto object-contain opacity-40 brightness-0 invert transition duration-300 group-hover:scale-105 group-hover:opacity-100 sm:max-h-14"
        priority={index < 4}
      />
    </div>
  );
}

export function ClientLogoGrid() {
  return (
    <section className="relative overflow-hidden bg-[#091338] py-14 sm:py-16 lg:py-20 font-inter">
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#003566] to-transparent" />
      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex rounded-full border border-[#46FF00]/30 bg-[#46FF00]/10 px-4 py-2 text-sm font-bold text-[#46FF00] shadow-sm backdrop-blur-sm">
            Khách hàng tiêu biểu
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl font-poppins">
            Đồng hành cùng nhiều doanh nghiệp tại Việt Nam
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Các thương hiệu đã tin tưởng SEOSONA trong hành trình tăng trưởng từ Google.
          </p>
        </div>

        <div className="relative mt-12 overflow-hidden rounded-[32px] border border-white/5 bg-gradient-to-br from-white/5 via-transparent to-[#46FF00]/5 p-4 shadow-2xl backdrop-blur-sm sm:p-6 lg:p-8">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#091338] to-transparent sm:w-40" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#091338] to-transparent sm:w-40" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#003566]/80 blur-[100px]" />

          <div className="relative overflow-hidden py-4">
            <div className="logo-marquee gap-5 pr-5">
              {marqueeLogos.map((logo, index) => (
                <LogoCard key={`${logo.name}-${index}`} logo={logo} index={index} />
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">
          {stats.map((item) => (
            <div key={item.label} className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center shadow-lg backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-[#46FF00]/30 hover:bg-white/10">
              <div className="text-4xl font-black text-[#46FF00] font-poppins drop-shadow-[0_0_15px_rgba(70,255,0,0.3)]">
                {item.value}
              </div>
              <div className="mt-2 text-sm font-medium text-slate-300 uppercase tracking-wider">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
