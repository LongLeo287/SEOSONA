import Link from "next/link";
import { ArrowRight, GraduationCap, LineChart, Megaphone, SearchCheck } from "lucide-react";

const services = [
  { title: "Dịch vụ SEO tổng thể", href: "/dich-vu-seo/", desc: "Chiến lược SEO từ technical, content, entity đến growth tracking.", icon: SearchCheck },
  { title: "Tư vấn SEO chuyên sâu", href: "/tu-van-seo-chuyen-sau/", desc: "Audit, roadmap, review chiến lược và cố vấn triển khai cho đội in-house.", icon: LineChart },
  { title: "Google Ads", href: "/google-ads/", desc: "Tối ưu traffic chuyển đổi từ Google Search, Performance Max và remarketing.", icon: Megaphone },
  { title: "Khóa học SEO", href: "/khoa-hoc-seo/", desc: "Đào tạo SEO thực chiến cho cá nhân, team content và doanh nghiệp.", icon: GraduationCap }
];

export function Services() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="mb-10 max-w-3xl">
          <span className="font-bold text-blue-600">Dịch vụ trọng tâm</span>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">Một hệ sinh thái Google Marketing thống nhất</h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">Website mới cần vừa bán dịch vụ, vừa chứng minh năng lực SEO bằng chính cấu trúc, tốc độ, nội dung và trải nghiệm.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link key={service.href} href={service.href} className="card group p-6 transition hover:-translate-y-1 hover:border-blue-200">
              <service.icon className="mb-6 text-blue-600" size={34} />
              <h3 className="text-xl font-black text-slate-950">{service.title}</h3>
              <p className="mt-3 min-h-24 text-slate-600">{service.desc}</p>
              <span className="mt-5 inline-flex items-center gap-2 font-bold text-blue-600">Xem chi tiết <ArrowRight size={16} /></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
