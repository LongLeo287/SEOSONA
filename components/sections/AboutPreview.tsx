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
    <section className="bg-white py-16 lg:py-20">
      <div className="container grid items-center gap-10 lg:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] bg-blue-50 shadow-xl shadow-blue-900/5">
          <Image src="/images/legacy/about/about-img.png" alt="Về SEOSONA" fill className="object-contain p-8" sizes="(min-width: 1024px) 50vw, 100vw" />
        </div>
        <div>
          <span className="font-bold text-blue-600">Về SEOSONA</span>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">Đồng hành cùng doanh nghiệp tăng trưởng từ Google</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">SEOSONA tập trung vào Google Marketing: SEO tổng thể, Google Ads, Content SEO và đào tạo. Mục tiêu là giúp doanh nghiệp xây hệ thống tăng trưởng organic và paid search có thể đo lường.</p>
          <div className="mt-6 grid gap-3">
            {points.map((point) => (
              <div key={point} className="flex gap-3 text-slate-700">
                <CheckCircle2 className="mt-1 shrink-0 text-blue-600" size={20} />
                <span>{point}</span>
              </div>
            ))}
          </div>
          <Link href="/ve-seosona/" className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-4 font-bold text-white">Tìm hiểu SEOSONA <ArrowRight size={18} /></Link>
        </div>
      </div>
    </section>
  );
}
