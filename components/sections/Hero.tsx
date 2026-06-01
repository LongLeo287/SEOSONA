import Link from "next/link";
import { ArrowRight, BarChart3, Search, ShieldCheck, type LucideIcon } from "lucide-react";

const metrics = [
  { label: "Dự án SEO", value: "300+" },
  { label: "Học viên", value: "1.000+" },
  { label: "Năm kinh nghiệm", value: "10+" }
];

const dashboardItems: Array<{ label: string; value: string; icon: LucideIcon }> = [
  { label: "Technical Health", value: "96%", icon: Search },
  { label: "Organic Growth", value: "+184%", icon: BarChart3 },
  { label: "Content Coverage", value: "12 clusters", icon: ArrowRight }
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(21,94,239,.14),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(6,182,212,.14),transparent_26%),radial-gradient(circle_at_70%_70%,rgba(124,58,237,.12),transparent_28%)]" />
      <div className="container relative grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <div className="mb-5 inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">SEO • Google Ads • Content SEO • Đào tạo SEO</div>
          <h1 className="max-w-4xl text-5xl font-black tracking-tight text-slate-950 md:text-6xl lg:text-7xl">
            Google Marketing Agency giúp doanh nghiệp <span className="gradient-text">tăng trưởng bền vững</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Rebuild website SEOSONA theo hướng sạch mã nguồn, tốc độ cao, chuẩn SEO technical, tối ưu chuyển đổi và bảo toàn tài sản traffic hiện có.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/lien-he/" className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-4 font-bold text-white shadow-xl shadow-blue-600/20 hover:bg-blue-700">
              Đăng ký tư vấn <ArrowRight size={18} />
            </Link>
            <Link href="/case-study/" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-4 font-bold text-slate-900 hover:border-blue-200 hover:text-blue-700">
              Xem case study
            </Link>
          </div>
          <div className="mt-10 grid max-w-xl grid-cols-3 gap-4">
            {metrics.map((item) => (
              <div key={item.label} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <div className="text-3xl font-black text-slate-950">{item.value}</div>
                <div className="mt-1 text-sm text-slate-500">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="card p-6">
          <div className="rounded-3xl bg-slate-950 p-6 text-white">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <div className="text-sm text-slate-400">SEOSONA Growth System</div>
                <div className="text-2xl font-black">SEO Dashboard</div>
              </div>
              <ShieldCheck className="text-cyan-300" />
            </div>
            <div className="grid gap-4">
              {dashboardItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3"><Icon className="text-cyan-300" size={20} /><span className="text-slate-300">{item.label}</span></div>
                      <strong className="text-xl">{item.value}</strong>
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
