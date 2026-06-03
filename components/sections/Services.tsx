import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, GraduationCap, LineChart, Megaphone, SearchCheck, type LucideIcon } from "lucide-react";

const services: Array<{ title: string; href: string; desc: string; icon: LucideIcon; image: string; label: string; featured?: boolean; points?: string[] }> = [
  {
    title: "SEO tổng thể",
    href: "/dich-vu-seo/",
    label: "Dịch vụ chủ lực",
    desc: "Xây nền tảng SEO bền vững: kỹ thuật, từ khóa, nội dung, entity và đo lường chuyển đổi trong cùng một roadmap.",
    icon: SearchCheck,
    image: "/images/legacy/services/seo-service.png",
    featured: true,
    points: ["Audit kỹ thuật", "Topical map", "Content SEO", "Báo cáo tăng trưởng"]
  },
  { title: "Tư vấn SEO", href: "/tu-van-seo-chuyen-sau/", label: "Cố vấn chiến lược", desc: "Audit, roadmap và review định kỳ cho đội marketing/in-house đang tự triển khai SEO.", icon: LineChart, image: "/images/legacy/about/about-img.png" },
  { title: "Google Ads", href: "/google-ads/", label: "Tăng lead nhanh", desc: "Tối ưu Search, Performance Max và remarketing để tạo khách hàng tiềm năng trong ngắn hạn.", icon: Megaphone, image: "/images/legacy/services/google-ads.png" },
  { title: "Đào tạo SEO", href: "/khoa-hoc-seo/", label: "Nâng năng lực đội ngũ", desc: "Đào tạo SEO thực chiến cho cá nhân, team content và doanh nghiệp theo case thực tế.", icon: GraduationCap, image: "/images/legacy/services/seo-course.png" }
];

export function Services() {
  const [featured, ...rest] = services;

  return (
    <section className="relative overflow-hidden bg-slate-50 py-14 sm:py-16 lg:py-20">
      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-blue-100/70 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-cyan-100/60 blur-3xl" />
      <div className="container relative">
        <div className="mx-auto mb-9 max-w-4xl text-center">
          <span className="inline-flex rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-black text-blue-700 shadow-sm">Dịch vụ trọng tâm</span>
          <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl md:text-5xl">Tăng trưởng từ Google bằng hệ thống dịch vụ đồng bộ</h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-slate-700 sm:text-lg">Tùy giai đoạn phát triển, SEOSONA giúp doanh nghiệp chọn đúng giải pháp: SEO dài hạn, tư vấn chiến lược, quảng cáo tạo lead nhanh hoặc đào tạo đội ngũ nội bộ.</p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          <Link href={featured.href} className="group relative overflow-hidden rounded-[30px] border border-blue-100 bg-white p-5 shadow-xl shadow-slate-900/5 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-900/10 sm:p-6 lg:col-span-3">
            <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-blue-100/70 transition duration-500 group-hover:scale-125" />
            <div className="grid items-center gap-6 md:grid-cols-[1fr_.9fr] lg:grid-cols-[1.05fr_.75fr]">
              <div className="relative">
                <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-black text-blue-700">{featured.label}</span>
                <h3 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">{featured.title}</h3>
                <p className="mt-4 max-w-2xl text-base leading-8 text-slate-700">{featured.desc}</p>
                <div className="mt-5 grid max-w-2xl gap-2 sm:grid-cols-4">
                  {featured.points?.map((point) => (
                    <div key={point} className="flex items-center gap-2 rounded-2xl bg-slate-50 p-3 text-sm font-bold text-slate-700 transition group-hover:bg-blue-50">
                      <CheckCircle2 className="shrink-0 text-blue-700" size={18} />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
                <span className="btn-primary mt-6 inline-flex">Tìm hiểu dịch vụ SEO <ArrowRight size={18} /></span>
              </div>
              <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-blue-50 to-cyan-50 p-4">
                <Image src={featured.image} alt={featured.title} width={420} height={320} className="mx-auto h-auto w-full max-w-xs object-contain transition duration-500 group-hover:scale-105 md:max-w-sm" />
              </div>
            </div>
          </Link>

          {rest.map((service) => {
            const Icon = service.icon;
            return (
              <Link key={service.href} href={service.href} className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">
                <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-blue-50 transition duration-500 group-hover:scale-150 group-hover:bg-cyan-50" />
                <div className="relative mb-5 flex items-center justify-between gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-blue-50 text-blue-700 transition group-hover:bg-blue-600 group-hover:text-white"><Icon size={21} /></span>
                  <div className="relative h-20 w-24 shrink-0 overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50">
                    <Image src={service.image} alt={service.title} fill className="object-contain p-3 transition duration-300 group-hover:scale-105" sizes="120px" />
                  </div>
                </div>
                <span className="relative text-xs font-black uppercase tracking-[0.14em] text-blue-700">{service.label}</span>
                <h3 className="relative mt-3 text-xl font-black text-slate-950">{service.title}</h3>
                <p className="relative mt-2 text-sm leading-7 text-slate-600">{service.desc}</p>
                <span className="relative mt-4 inline-flex items-center gap-2 font-black text-blue-700">Xem chi tiết <ArrowRight size={16} /></span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
