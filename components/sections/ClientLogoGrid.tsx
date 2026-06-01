import Image from "next/image";
import { clientLogos } from "@/data/homepage-assets";

const stats = [
  { value: "300+", label: "dự án SEO & Google Marketing" },
  { value: "12+", label: "nhóm ngành đã triển khai" },
  { value: "10+", label: "năm kinh nghiệm thực chiến" }
];

const firstRow = clientLogos.slice(0, Math.ceil(clientLogos.length / 2));
const secondRow = clientLogos.slice(Math.ceil(clientLogos.length / 2));
const marqueeRowOne = [...firstRow, ...firstRow, ...firstRow];
const marqueeRowTwo = [...secondRow, ...secondRow, ...secondRow];

function LogoCard({ logo, index }: { logo: { name: string; src: string }; index: number }) {
  return (
    <div className="group flex h-16 w-40 shrink-0 items-center justify-center rounded-2xl border border-slate-200/80 bg-white px-5 py-3 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl sm:h-20 sm:w-52">
      <Image
        src={logo.src}
        alt={logo.name}
        width={150}
        height={60}
        className="max-h-10 w-auto object-contain opacity-65 grayscale transition duration-300 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0 sm:max-h-12"
        priority={index < 4}
      />
    </div>
  );
}

export function ClientLogoGrid() {
  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20">
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-slate-50 to-white" />
      <div className="container relative">
        <div className="grid items-center gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-12">
          <div className="text-center lg:text-left">
            <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-black text-blue-700 shadow-sm">Khách hàng tiêu biểu</span>
            <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl md:text-5xl">Được tin tưởng bởi nhiều doanh nghiệp tại Việt Nam</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-700 sm:text-lg lg:mx-0">SEOSONA đồng hành cùng doanh nghiệp trong SEO tổng thể, Google Ads, Content SEO và đào tạo đội ngũ nội bộ để tăng trưởng bền vững từ Google.</p>
            <div className="mx-auto mt-7 grid max-w-xl gap-3 sm:grid-cols-3 lg:mx-0">
              {stats.map((item) => (
                <div key={item.label} className="rounded-3xl border border-slate-200 bg-slate-50 p-4 text-center transition hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-lg">
                  <div className="text-2xl font-black text-slate-950 sm:text-3xl">{item.value}</div>
                  <div className="mt-1 text-xs font-bold leading-5 text-slate-600">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-blue-50 p-4 shadow-xl shadow-slate-900/5 sm:p-6">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-slate-50 via-white/90 to-transparent sm:w-24" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-blue-50 via-white/90 to-transparent sm:w-24" />
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100/60 blur-3xl" />

            <div className="relative grid gap-4 py-2">
              <div className="overflow-hidden">
                <div className="logo-marquee gap-4 pr-4">
                  {marqueeRowOne.map((logo, index) => (
                    <LogoCard key={`row-one-${logo.name}-${index}`} logo={logo} index={index} />
                  ))}
                </div>
              </div>

              <div className="overflow-hidden">
                <div className="logo-marquee logo-marquee-reverse logo-marquee-slow gap-4 pr-4">
                  {marqueeRowTwo.map((logo, index) => (
                    <LogoCard key={`row-two-${logo.name}-${index}`} logo={logo} index={index + marqueeRowOne.length} />
                  ))}
                </div>
              </div>
            </div>

            <div className="relative mt-5 rounded-3xl border border-blue-100 bg-white/80 p-4 text-center text-sm font-bold leading-6 text-slate-700 shadow-sm backdrop-blur">
              Logo tự động chạy liên tục, hover để tạm dừng và xem rõ từng thương hiệu.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
