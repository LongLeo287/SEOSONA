import Image from "next/image";
import { pressLogos } from "@/data/homepage-assets";

export function PressLogoGrid() {
  return (
    <section className="relative bg-white py-16">
      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-[#F4F6F8] p-8 shadow-sm md:p-10">
          <div className="grid items-center gap-8 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <span className="badge-accent-light mb-4 inline-flex">Báo chí &amp; truyền thông</span>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-[#091338] font-poppins">SEOSONA trên các kênh truyền thông</h2>
              <p className="mt-4 leading-7 text-slate-600 font-inter">Khu vực này sẽ liên kết đến các bài báo thật sau khi kiểm duyệt URL nguồn.</p>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
              {pressLogos.map((logo) => (
                <div key={logo.name} className="flex h-20 items-center justify-center rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-[#003566]/20 hover:shadow-md">
                  <Image src={logo.src} alt={logo.name} width={140} height={56} className="max-h-12 w-auto object-contain opacity-60 transition hover:opacity-100" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
