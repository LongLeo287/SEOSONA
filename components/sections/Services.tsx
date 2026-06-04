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
    <section className="relative overflow-hidden bg-[#003566] py-14 sm:py-16 lg:py-20 font-inter">
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#46FF00]/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />
      <div className="container relative z-10">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <span className="inline-flex rounded-full border border-[#46FF00]/30 bg-[#46FF00]/10 px-4 py-2 text-sm font-bold text-[#46FF00] shadow-sm backdrop-blur-md">
            Dịch vụ trọng tâm
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl font-poppins">
            Tăng trưởng từ Google bằng hệ thống dịch vụ đồng bộ
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            Tùy giai đoạn phát triển, SEOSONA giúp doanh nghiệp chọn đúng giải pháp: SEO dài hạn, tư vấn chiến lược, quảng cáo tạo lead nhanh hoặc đào tạo đội ngũ nội bộ.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          <Link href={featured.href} className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-[#46FF00]/50 hover:shadow-2xl hover:shadow-[#46FF00]/10 lg:col-span-3">
            <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[#46FF00]/10 transition duration-500 group-hover:scale-125 blur-2xl" />
            <div className="grid items-center gap-6 md:grid-cols-[1fr_.9fr] lg:grid-cols-[1.05fr_.75fr]">
              <div className="relative">
                <span className="inline-flex rounded-full bg-[#46FF00]/10 px-4 py-2 text-sm font-bold text-[#46FF00]">
                  {featured.label}
                </span>
                <h3 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl font-poppins">
                  {featured.title}
                </h3>
                <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
                  {featured.desc}
                </p>
                <div className="mt-6 grid max-w-2xl gap-3 sm:grid-cols-2">
                  {featured.points?.map((point) => (
                    <div key={point} className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/5 p-3 text-sm font-medium text-slate-200 transition group-hover:border-[#46FF00]/30 group-hover:bg-[#46FF00]/5">
                      <CheckCircle2 className="shrink-0 text-[#46FF00]" size={18} />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <span className="btn-primary inline-flex items-center gap-2">
                    Tìm hiểu dịch vụ SEO <ArrowRight size={18} />
                  </span>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 shadow-inner">
                <Image src={featured.image} alt={featured.title} width={420} height={320} className="mx-auto h-auto w-full max-w-xs object-contain drop-shadow-2xl transition duration-500 group-hover:scale-105 md:max-w-sm" />
              </div>
            </div>
          </Link>

          {rest.map((service) => {
            const Icon = service.icon;
            return (
              <Link key={service.href} href={service.href} className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-lg transition duration-300 hover:-translate-y-1 hover:border-[#46FF00]/50 hover:shadow-2xl hover:shadow-[#46FF00]/10">
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#46FF00]/5 transition duration-500 group-hover:scale-150 group-hover:bg-[#46FF00]/10 blur-xl" />
                <div className="relative mb-6 flex items-center justify-between gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white/10 text-white transition group-hover:bg-[#46FF00] group-hover:text-[#003566]">
                    <Icon size={22} />
                  </span>
                  <div className="relative h-20 w-24 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2">
                    <Image src={service.image} alt={service.title} fill className="object-contain p-2 transition duration-300 group-hover:scale-105" sizes="120px" />
                  </div>
                </div>
                <span className="relative text-xs font-bold uppercase tracking-widest text-[#46FF00]">
                  {service.label}
                </span>
                <h3 className="relative mt-3 text-xl font-bold text-white font-poppins">
                  {service.title}
                </h3>
                <p className="relative mt-3 text-sm leading-7 text-slate-300">
                  {service.desc}
                </p>
                <span className="relative mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#46FF00] transition-transform group-hover:translate-x-1">
                  Xem chi tiết <ArrowRight size={16} />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
