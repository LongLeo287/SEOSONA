import Image from "next/image";
import Link from "next/link";
import { ArrowRight, GraduationCap, LineChart, Megaphone, SearchCheck, type LucideIcon } from "lucide-react";

const services: Array<{ title: string; href: string; desc: string; icon: LucideIcon; image: string }> = [
  { title: "Dịch vụ SEO tổng thể", href: "/dich-vu-seo/", desc: "Chiến lược SEO từ technical, content, entity đến growth tracking.", icon: SearchCheck, image: "/images/legacy/services/seo-service.png" },
  { title: "Tư vấn SEO chuyên sâu", href: "/tu-van-seo-chuyen-sau/", desc: "Audit, roadmap, review chiến lược và cố vấn triển khai cho đội in-house.", icon: LineChart, image: "/images/legacy/about/about-img.png" },
  { title: "Google Ads", href: "/google-ads/", desc: "Tối ưu traffic chuyển đổi từ Google Search, Performance Max và remarketing.", icon: Megaphone, image: "/images/legacy/services/google-ads.png" },
  { title: "Khóa học SEO", href: "/khoa-hoc-seo/", desc: "Đào tạo SEO thực chiến cho cá nhân, team content và doanh nghiệp.", icon: GraduationCap, image: "/images/legacy/services/seo-course.png" }
];

export function Services() {
  return (
    <section className="py-14 sm:py-16 lg:py-20">
      <div className="container">
        <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-10 lg:mx-0 lg:text-left">
          <span className="font-bold text-blue-600">Dịch vụ trọng tâm</span>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl md:text-5xl">Một hệ sinh thái Google Marketing thống nhất</h2>
          <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">SEOSONA kết hợp SEO tổng thể, tư vấn chiến lược, Google Ads và đào tạo để giúp doanh nghiệp tăng trưởng khách hàng tiềm năng từ Google.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link key={service.href} href={service.href} className="card group overflow-hidden transition hover:-translate-y-1 hover:border-blue-200">
                <div className="relative aspect-[4/3] bg-blue-50 sm:aspect-square">
                  <Image src={service.image} alt={service.title} fill className="object-contain p-6 transition group-hover:scale-105 sm:p-8" sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" />
                </div>
                <div className="p-5 sm:p-6">
                  <Icon className="mb-4 text-blue-600 sm:mb-5" size={30} />
                  <h3 className="text-lg font-black text-slate-950 sm:text-xl">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 sm:min-h-24 sm:text-base">{service.desc}</p>
                  <span className="mt-5 inline-flex items-center gap-2 font-bold text-blue-600">Xem chi tiết <ArrowRight size={16} /></span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
