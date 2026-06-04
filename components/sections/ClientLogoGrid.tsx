import Image from "next/image";
import { clientLogos } from "@/data/homepage-assets";

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
    <section className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20 font-inter">
      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <span className="badge-accent-light">
            Khách hàng tiêu biểu
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#091338] sm:text-4xl md:text-5xl font-poppins">
            Đồng hành cùng nhiều doanh nghiệp tại Việt Nam
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Các thương hiệu đã tin tưởng SEOSONA trong hành trình tăng trưởng từ Google.
          </p>
        </div>

        {/* Marquee container — no card backgrounds, just logos */}
        <div className="relative mt-12 overflow-hidden py-4">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent sm:w-32" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent sm:w-32" />

          {/* Divider lines */}
          <div className="absolute inset-x-0 top-0 h-px bg-slate-100" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-slate-100" />

          <div className="logo-marquee-slow logo-marquee gap-2 pr-2">
            {marqueeLogos.map((logo, index) => (
              <LogoCard key={`${logo.name}-${index}`} logo={logo} />
            ))}
          </div>
        </div>

        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-3">
          {stats.map((item, index) => {
            const isLastAndOdd = index === stats.length - 1 && stats.length % 2 !== 0;
            return (
              <div
                key={item.label}
                className={`rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#003566]/20 hover:shadow-md ${isLastAndOdd ? "col-span-2 sm:col-span-1" : ""}`}
              >
                <div className="text-4xl font-black text-[#003566] font-poppins">
                  {item.value}
                </div>
                <div className="mt-2 text-sm font-medium text-slate-500 uppercase tracking-wider">
                  {item.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
