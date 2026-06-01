import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BarChart3, Search, ShieldCheck, type LucideIcon } from "lucide-react";

const metrics = [
  { label: "Dự án SEO", value: "300+" },
  { label: "Học viên", value: "1.000+" },
  { label: "Năm kinh nghiệm", value: "10+" }
];

const dashboardItems: Array<{ label: string; value: string; icon: LucideIcon }> = [
  { label: "Sức khỏe kỹ thuật", value: "96%", icon: Search },
  { label: "Tăng trưởng tự nhiên", value: "+184%", icon: BarChart3 },
  { label: "Cụm nội dung", value: "12 cụm", icon: ArrowRight }
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(21,94,239,.16),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(6,182,212,.14),transparent_26%),radial-gradient(circle_at_70%_70%,rgba(124,58,237,.10),transparent_28%)]" />
      <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-200/20 blur-3xl" />
      <div className="container relative grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
        <div className="reveal">
          <div className="badge mb-5">SEO • Google Ads • Content SEO • Đào tạo SEO</div>
          <h1 className="max-w-4xl text-5xl font-black tracking-[-0.04em] text-slate-950 md:text-6xl lg:text-7xl">
            Google Marketing Agency giúp doanh nghiệp <span className="gradient-text">tăng trưởng bền vững</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            SEOSONA giúp doanh nghiệp tăng trưởng khách hàng tiềm năng từ Google thông qua SEO tổng thể, Google Ads, Content SEO và đào tạo đội ngũ nội bộ.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/lien-he/" className="btn-primary">
              Đăng ký tư vấn <ArrowRight size={18} />
            </Link>
            <Link href="/case-study/" className="btn-secondary">
              Xem case study
            </Link>
          </div>
          <div className="mt-10 grid max-w-xl grid-cols-3 gap-4">
            {metrics.map((item, index) => (
              <div key={item.label} className="rounded-3xl border border-slate-200 bg-white/80 p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl" style={{ animationDelay: `${index * 80}ms` }}>
                <div className="text-3xl font-black text-slate-950">{item.value}</div>
                <div className="mt-1 text-sm text-slate-500">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="card pulse-glow overflow-hidden p-4">
          <div className="relative aspect-[5/4] overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50 to-cyan-50">
            <Image src="/images/legacy/hero/home-begin.png" alt="SEOSONA Google Marketing Agency" fill priority className="float-slow object-contain p-4" sizes="(min-width: 1024px) 45vw, 100vw" />
          </div>
          <div className="mt-4 rounded-3xl bg-slate-950 p-5 text-white">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <div className="text-sm text-slate-400">Hệ thống tăng trưởng SEOSONA</div>
                <div className="text-2xl font-black">Bảng đo lường SEO</div>
              </div>
              <ShieldCheck className="text-cyan-300" />
            </div>
            <div className="grid gap-3">
              {dashboardItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3"><Icon className="text-cyan-300" size={18} /><span className="text-slate-300">{item.label}</span></div>
                      <strong>{item.value}</strong>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
