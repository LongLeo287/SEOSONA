import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const points = [
  "Tư vấn và triển khai SEO theo mục tiêu kinh doanh",
  "Kết hợp technical, content, entity, analytics và CRO",
  "Đào tạo đội ngũ nội bộ vận hành SEO bền vững"
];

export function AboutPreview() {
  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="container grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
        <div className="card group relative mx-auto aspect-[4/3] w-full max-w-[560px] overflow-hidden rounded-[28px] bg-gradient-to-br from-blue-50 to-cyan-50 shadow-xl shadow-blue-900/5 sm:rounded-[32px] lg:max-w-none">
          <Image src="/images/legacy/about/about-img.png" alt="Về SEOSONA" fill className="object-contain p-6 transition duration-300 group-hover:scale-105 sm:p-8" sizes="(min-width: 1024px) 50vw, 100vw" />
        </div>
        <div className="text-center lg:text-left">
          <span className="font-bold text-blue-700">Về SEOSONA</span>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl md:text-5xl">Đồng hành cùng doanh nghiệp tăng trưởng từ Google</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-700 sm:text-lg lg:mx-0">SEOSONA tập trung vào Google Marketing: SEO tổng thể, Google Ads, Content SEO và đào tạo. Mục tiêu là giúp doanh nghiệp xây hệ thống tăng trưởng organic và paid search có thể đo lường.</p>
          <div className="mx-auto mt-6 grid max-w-xl gap-3 text-left lg:mx-0">
            {points.map((point) => (
              <div key={point} className="flex gap-3 rounded-2xl bg-slate-50 p-3 text-slate-800 transition hover:-translate-y-0.5 hover:bg-blue-50">
                <CheckCircle2 className="mt-1 shrink-0 text-blue-700" size={20} />
                <span>{point}</span>
              </div>
            ))}
          </div>
          <Link href="/ve-seosona/" className="btn-secondary mt-8">Tìm hiểu SEOSONA <ArrowRight size={18} /></Link>
        </div>
      </div>
    </section>
  );
}
