import Image from "next/image";
import { pressLogos } from "@/data/homepage-assets";

export function PressLogoGrid() {
  return (
    <section className="py-16">
      <div className="container rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
        <div className="grid items-center gap-8 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <span className="font-bold text-blue-600">Báo chí & truyền thông</span>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">SEOSONA trên các kênh truyền thông</h2>
            <p className="mt-4 leading-7 text-slate-600">Khu vực này sẽ liên kết đến các bài báo thật sau khi kiểm duyệt URL nguồn.</p>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
            {pressLogos.map((logo) => (
              <div key={logo.name} className="flex h-20 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <Image src={logo.src} alt={logo.name} width={140} height={56} className="max-h-12 w-auto object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
