import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, TrendingUp, UsersRound } from "lucide-react";

const points = [
  "Tư vấn và triển khai theo mục tiêu kinh doanh, không làm SEO rời rạc",
  "Kết hợp technical, content, entity, analytics và tối ưu chuyển đổi",
  "Đào tạo đội ngũ nội bộ để doanh nghiệp duy trì tăng trưởng dài hạn"
];

const stats = [
  { value: "300+", label: "dự án" },
  { value: "10+", label: "năm" }
];

export function AboutPreview() {
  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20">
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-blue-50 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-cyan-50 blur-3xl" />

      <div className="container relative grid items-center gap-8 lg:grid-cols-[.95fr_1.05fr] lg:gap-12">
        <div className="group relative mx-auto w-full max-w-[560px] lg:max-w-none">
          <div className="absolute -inset-4 rounded-[36px] bg-gradient-to-br from-blue-100/60 to-cyan-100/50 blur-2xl transition group-hover:scale-105" />
          <div className="card relative overflow-hidden rounded-[32px] bg-gradient-to-br from-white via-blue-50/70 to-cyan-50 p-5 shadow-xl shadow-blue-900/5">
            <div className="absolute right-6 top-6 rounded-2xl bg-white/80 px-4 py-3 text-sm font-black text-blue-700 shadow-sm backdrop-blur">
              Google Growth
            </div>
            <div className="relative aspect-[4/3] rounded-[28px] bg-white/65">
              <Image src="/images/legacy/about/about-img.png" alt="Về SEOSONA" fill className="object-contain p-6 transition duration-500 group-hover:scale-105 sm:p-8" sizes="(min-width: 1024px) 48vw, 100vw" />
            </div>
            <div className="relative mt-4 grid gap-3 sm:grid-cols-2">
              {stats.map((item) => (
                <div key={item.label} className="rounded-3xl border border-white bg-white/80 p-4 text-center shadow-sm backdrop-blur">
                  <div className="text-3xl font-black text-slate-950">{item.value}</div>
                  <div className="text-sm font-bold text-slate-600">{item.label} kinh nghiệm</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center lg:text-left">
          <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-black text-blue-700 shadow-sm">Về SEOSONA</span>
          <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl md:text-5xl">Đội ngũ Google Marketing đồng hành cùng tăng trưởng bền vững</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-700 sm:text-lg lg:mx-0">SEOSONA giúp doanh nghiệp biến Google thành kênh tạo khách hàng tiềm năng có thể đo lường: từ SEO tổng thể, Google Ads, Content SEO đến đào tạo đội ngũ vận hành nội bộ.</p>

          <div className="mx-auto mt-6 grid max-w-2xl gap-3 text-left lg:mx-0">
            {points.map((point) => (
              <div key={point} className="group flex gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 hover:shadow-md">
                <CheckCircle2 className="mt-1 shrink-0 text-blue-700 transition group-hover:scale-110" size={20} />
                <span className="leading-7">{point}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <Link href="/ve-seosona/" className="btn-primary">Tìm hiểu SEOSONA <ArrowRight size={18} /></Link>
            <Link href="/case-study/" className="btn-secondary">Xem case study <TrendingUp size={18} /></Link>
          </div>

          <div className="mx-auto mt-6 inline-flex items-center gap-2 rounded-full bg-slate-50 px-4 py-2 text-sm font-bold text-slate-600 lg:mx-0">
            <UsersRound size={16} className="text-blue-700" /> Phù hợp cho doanh nghiệp muốn tăng trưởng dài hạn từ Google
          </div>
        </div>
      </div>
    </section>
  );
}
