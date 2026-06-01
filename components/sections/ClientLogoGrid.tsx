import Image from "next/image";
import { clientLogos } from "@/data/homepage-assets";

export function ClientLogoGrid() {
  return (
    <section className="bg-white py-14">
      <div className="container">
        <div className="mb-8 text-center">
          <span className="font-bold text-blue-600">Khách hàng tiêu biểu</span>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-4xl">Đồng hành cùng nhiều doanh nghiệp tại Việt Nam</h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">Các thương hiệu đã tin tưởng SEOSONA trong hành trình tăng trưởng từ Google.</p>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {clientLogos.map((logo) => (
            <div key={logo.name} className="group flex h-24 items-center justify-center rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">
              <Image src={logo.src} alt={logo.name} width={160} height={64} className="max-h-14 w-auto object-contain opacity-80 grayscale transition group-hover:opacity-100 group-hover:grayscale-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
