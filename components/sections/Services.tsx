import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, GraduationCap, LineChart, Megaphone, SearchCheck, type LucideIcon } from "lucide-react";

const primaryService = {
  title: "Dịch vụ SEO tổng thể",
  href: "/dich-vu-seo/",
  label: "Dịch vụ chủ lực",
  desc: "Xây hệ thống SEO bền vững từ nền tảng kỹ thuật, chiến lược từ khóa, content hub, entity đến đo lường chuyển đổi.",
  image: "/images/legacy/services/seo-service.png",
  points: ["Audit technical & index", "Topical map theo ngành", "Content SEO & internal link", "Báo cáo tăng trưởng định kỳ"]
};

const supportServices: Array<{ title: string; href: string; desc: string; icon: LucideIcon; image: string; label: string }> = [
  { title: "Tư vấn SEO chuyên sâu", href: "/tu-van-seo-chuyen-sau/", label: "Cố vấn chiến lược", desc: "Audit, roadmap và cố vấn triển khai cho đội marketing/in-house muốn tự vận hành SEO đúng hướng.", icon: LineChart, image: "/images/legacy/about/about-img.png" },
  { title: "Google Ads", href: "/google-ads/", label: "Tăng trưởng paid search", desc: "Tối ưu chiến dịch Google Search, Performance Max và remarketing để tạo lead nhanh hơn.", icon: Megaphone, image: "/images/legacy/services/google-ads.png" },
  { title: "Khóa học SEO", href: "/khoa-hoc-seo/", label: "Đào tạo thực chiến", desc: "Đào tạo SEO cho cá nhân, team content và doanh nghiệp theo case thực tế, không học lý thuyết suông.", icon: GraduationCap, image: "/images/legacy/services/seo-course.png" }
];

export function Services() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-14 sm:py-16 lg:py-20">
      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-blue-100/70 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-cyan-100/60 blur-3xl" />
      <div className="container relative">
        <div className="mx-auto mb-10 max-w-4xl text-center">
          <span className="inline-flex rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-black text-blue-700 shadow-sm">Dịch vụ trọng tâm</span>
          <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl md:text-5xl">Giải pháp tăng trưởng từ Google cho từng giai đoạn</h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-slate-700 sm:text-lg">SEOSONA kết hợp SEO tổng thể, tư vấn chiến lược, Google Ads và đào tạo để giúp doanh nghiệp có hệ thống thu hút khách hàng tiềm năng bền vững.</p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.18fr_.82fr]">
          <Link href={primaryService.href} className="group relative overflow-hidden rounded-[32px] border border-blue-100 bg-white p-5 shadow-xl shadow-slate-900/5 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-900/10 sm:p-7 lg:p-8">
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-100/70 transition duration-500 group-hover:scale-125" />
            <div className="grid items-center gap-6 md:grid-cols-[.95fr_1.05fr]">
              <div className="relative order-2 md:order-1">
                <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-black text-blue-700">{primaryService.label}</span>
                <h3 className="mt-5 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">{primaryService.title}</h3>
                <p className="mt-4 text-base leading-8 text-slate-700 sm:text-lg">{primaryService.desc}</p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {primaryService.points.map((point) => (
                    <div key={point} className="flex items-start gap-2 rounded-2xl bg-slate-50 p-3 text-sm font-bold text-slate-700">
                      <CheckCircle2 className="mt-0.5 shrink-0 text-blue-700" size={18} />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
                <span className="mt-7 inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 font-black text-white shadow-lg shadow-blue-600/20 transition group-hover:bg-blue-700">Tìm hiểu dịch vụ SEO <ArrowRight size={18} /></span>
              </div>
              <div className="relative order-1 overflow-hidden rounded-[28px] bg-gradient-to-br from-blue-50 to-cyan-50 p-6 md:order-2">
                <Image src={primaryService.image} alt={primaryService.title} width={520} height={420} className="mx-auto h-auto w-full max-w-md object-contain transition duration-500 group-hover:scale-105" />
              </div>
            </div>
          </Link>

          <div className="grid gap-5">
            {supportServices.map((service) => {
              const Icon = service.icon;
              return (
                <Link key={service.href} href={service.href} className="group grid items-center gap-4 rounded-[28px] border border-slate-200 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl sm:grid-cols-[108px_1fr]">
                  <div className="relative h-28 overflow-hidden rounded-3xl bg-blue-50 sm:h-full sm:min-h-32">
                    <Image src={service.image} alt={service.title} fill className="object-contain p-4 transition duration-300 group-hover:scale-105" sizes="160px" />
                  </div>
                  <div className="p-1">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-2xl bg-blue-50 text-blue-700 transition group-hover:bg-blue-600 group-hover:text-white"><Icon size={20} /></span>
                      <span className="text-xs font-black uppercase tracking-[0.16em] text-blue-700">{service.label}</span>
                    </div>
                    <h3 className="text-xl font-black text-slate-950">{service.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{service.desc}</p>
                    <span className="mt-4 inline-flex items-center gap-2 font-black text-blue-700">Xem chi tiết <ArrowRight size={16} /></span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
