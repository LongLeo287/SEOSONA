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
    <section className="relative overflow-hidden bg-white py-14 sm:py-12 lg:py-16">
      <div className="absolute -left-20 top-20 hidden h-72 w-72 rounded-full bg-[#003566]/5 blur-3xl md:block" />
      <div className="absolute -right-20 bottom-0 hidden h-72 w-72 rounded-full bg-[#46FF00]/5 blur-3xl md:block" />

      <div className="container relative mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-[.95fr_1.05fr] lg:gap-12 lg:px-8">
        <div className="group relative mx-auto w-full max-w-[560px] lg:max-w-none">
          <div className="absolute -inset-4 rounded-[36px] bg-gradient-to-br from-[#003566]/8 to-transparent blur-2xl transition group-hover:scale-105" />
          <div className="card relative overflow-hidden rounded-[32px] p-5">
            <div className="absolute right-6 top-6 rounded-2xl bg-[#003566]/5 border border-[#003566]/10 px-4 py-3 text-sm font-black text-[#003566] shadow-sm backdrop-blur">
              Google Growth
            </div>
            <div className="relative aspect-[4/3] rounded-[28px] bg-[#F4F6F8]">
              <Image 
                src="/images/legacy/about/about-img.png" 
                alt="Về SEOSONA" 
                fill 
                className="object-contain p-6 transition duration-500 group-hover:scale-105 sm:p-8" 
                sizes="(min-width: 1024px) 48vw, 100vw" 
              />
            </div>
            <div className="relative mt-4 grid gap-3 sm:grid-cols-2">
              {stats.map((item) => (
                <div key={item.label} className="rounded-3xl border border-[#003566]/10 bg-white p-4 text-center shadow-sm transition hover:border-[#46FF00]/40 hover:shadow-md">
                  <div className="text-3xl font-black text-[#003566] font-poppins">{item.value}</div>
                  <div className="text-sm font-bold text-slate-500 font-inter">{item.label} kinh nghiệm</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center lg:text-left">
          <span className="badge-accent-light mb-4 inline-flex">Về SEOSONA</span>
          <h2 className="mt-5 text-3xl font-black tracking-tight text-[#091338] sm:text-4xl md:text-5xl font-poppins">
            Đội ngũ Google Marketing đồng hành cùng tăng trưởng bền vững
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg lg:mx-0 font-inter">
            SEOSONA giúp doanh nghiệp biến Google thành kênh tạo khách hàng tiềm năng có thể đo lường: từ SEO tổng thể, Google Ads, Content SEO đến đào tạo đội ngũ vận hành nội bộ.
          </p>

          <div className="mx-auto mt-6 grid max-w-2xl gap-3 text-left lg:mx-0">
            {points.map((point) => (
              <div key={point} className="group flex gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-[#091338] shadow-sm transition hover:-translate-y-0.5 hover:border-[#003566]/20 hover:shadow-md">
                <CheckCircle2 className="mt-1 shrink-0 text-[#003566] transition group-hover:scale-110 group-hover:text-[#46FF00]" size={20} />
                <span className="leading-7 font-inter text-slate-700">{point}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <Link href="/ve-seosona/" className="btn-primary">
              Tìm hiểu SEOSONA <ArrowRight size={18} />
            </Link>
            <Link href="/case-study/" className="btn-secondary">
              Xem case study <TrendingUp size={18} />
            </Link>
          </div>

          <div className="mx-auto mt-8 inline-flex items-center gap-2 rounded-full bg-[#F4F6F8] border border-slate-200 px-4 py-2 text-sm font-bold text-slate-500 lg:mx-0 font-inter">
            <UsersRound size={16} className="text-[#003566]" /> 
            Phù hợp cho doanh nghiệp muốn tăng trưởng dài hạn từ Google
          </div>
        </div>
      </div>
    </section>
  );
}
