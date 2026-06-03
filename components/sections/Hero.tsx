import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BarChart3, Search, ShieldCheck, TrendingUp, type LucideIcon } from "lucide-react";
import { CountUp } from "@/components/ui/CountUp";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

/**
 * Hero Section — SEOSONA Brand (Guideline v2)
 * 
 * Agent: [Visual & Motion Designer] activated
 * Skills loaded: react_best_practices, ui_ux_pro_max, nextjs_app_router_patterns
 * Design ref: SEOSONA Guideline.png
 * 
 * Brand rules applied:
 * - Primary color: Dark Navy #003566 (NOT Neon Green)
 * - Neon Green #46FF00 = accent/glow only
 * - Typography: Poppins (headings), Inter (body)
 * - Border radius: 16px cards, 25px hero wrappers, pill buttons
 * - Shadow: 5px 5px 10px spec from Guideline §08
 */

const metrics = [
  { label: "Dự án SEO", value: 300, suffix: "+", icon: TrendingUp },
  { label: "Học viên", value: 1000, suffix: "+", icon: BarChart3 },
  { label: "Năm kinh nghiệm", value: 10, suffix: "+", icon: ShieldCheck }
];

const dashboardItems: Array<{ label: string; value: string; icon: LucideIcon }> = [
  { label: "Sức khỏe kỹ thuật", value: "96%", icon: Search },
  { label: "Tăng trưởng tự nhiên", value: "+184%", icon: BarChart3 },
  { label: "Cụm nội dung", value: "12 cụm", icon: ArrowRight }
];

export function Hero() {
  return (
    <section
      className="relative overflow-hidden py-20 sm:py-24 lg:py-32"
      style={{ background: "linear-gradient(160deg, #003566 0%, #002244 60%, #001833 100%)" }}
    >
      {/* Subtle Glow orb — accent only (Guideline §08: Glow 140px blur) */}
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #46FF00 0%, transparent 70%)", filter: "blur(80px)" }}
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full opacity-15"
        style={{ background: "radial-gradient(circle, #0077CE 0%, transparent 70%)", filter: "blur(60px)" }}
      />

      <div className="container relative">
        {/* Tagline */}
        <RevealOnScroll direction="up" className="mb-10 text-center">
          <div className="badge-accent mx-auto inline-flex">
            Share To Be Shared More &nbsp;·&nbsp; SEO • Google Ads • Content
          </div>
        </RevealOnScroll>

        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">

          {/* ─── Left Column ─── */}
          <RevealOnScroll direction="left">
            <h1
              className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl xl:text-7xl"
              style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)", color: "#FFFFFF" }}
            >
              Share.{" "}
              <span className="text-accent" style={{ textShadow: "0 0 30px rgba(70,255,0,0.4)" }}>
                Search.
              </span>
              {" "}Connect.
            </h1>

            <p
              className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg"
              style={{ fontFamily: "var(--font-inter, Inter, sans-serif)" }}
            >
              SEOSONA là Tech-Agency hàng đầu Việt Nam, kết hợp chiến lược chuyên sâu và
              tư duy dữ liệu để tăng trưởng khách hàng tiềm năng từ Google bền vững và
              đột phá.
            </p>

            {/* CTAs — Primary = Dark Navy button, per Guideline §6 */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/lien-he/" className="btn-primary">
                Nhận tư vấn chiến lược <ArrowRight size={18} />
              </Link>
              <Link href="/case-study/" className="btn-secondary" style={{ color: "#FFFFFF", borderColor: "rgba(255,255,255,0.3)" }}>
                Xem Case Study
              </Link>
            </div>

            {/* Metric counters */}
            <div className="mt-12 grid grid-cols-3 gap-4 sm:gap-6">
              {metrics.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="card-dark rounded-2xl p-5 text-center"
                    style={{ animationDelay: `${i * 80}ms` }}
                  >
                    <Icon className="mx-auto mb-2 text-accent" size={22} />
                    <div
                      className="text-3xl font-bold text-white sm:text-4xl"
                      style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)" }}
                    >
                      <CountUp end={item.value} suffix={item.suffix} />
                    </div>
                    <div
                      className="mt-1 text-sm text-slate-400"
                      style={{ fontFamily: "var(--font-inter, Inter, sans-serif)" }}
                    >
                      {item.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </RevealOnScroll>

          {/* ─── Right Column: SEO Dashboard Card ─── */}
          <RevealOnScroll direction="right">
            <div
              className="card-dark overflow-hidden"
              style={{ borderRadius: "25px", boxShadow: "5px 5px 10px rgba(3, 256, 0, 0.05), 0 30px 80px rgba(0,0,0,0.35)" }}
            >
              {/* Hero image */}
              <div
                className="relative aspect-[4/3] overflow-hidden"
                style={{ borderRadius: "20px 20px 0 0", background: "linear-gradient(135deg, #003566 0%, #004080 100%)" }}
              >
                <Image
                  src="/images/legacy/hero/home-begin.png"
                  alt="SEOSONA Google Marketing Agency Dashboard"
                  fill
                  priority
                  className="float-slow object-contain p-6"
                  sizes="(min-width: 1024px) 45vw, 100vw"
                />
              </div>

              {/* Dashboard data strip */}
              <div className="p-5">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p
                      className="text-xs text-slate-400"
                      style={{ fontFamily: "var(--font-inter, Inter, sans-serif)" }}
                    >
                      Hệ thống tăng trưởng SEOSONA
                    </p>
                    <p
                      className="text-lg font-bold text-white"
                      style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)" }}
                    >
                      Bảng đo lường Hiệu Suất
                    </p>
                  </div>
                  <ShieldCheck className="shrink-0 text-accent" size={28} />
                </div>

                <div className="grid gap-3">
                  {dashboardItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.label}
                        className="card-dark rounded-xl p-3.5"
                      >
                        <div className="flex items-center justify-between gap-3 text-sm">
                          <div className="flex min-w-0 items-center gap-2.5">
                            <Icon className="shrink-0 text-accent" size={17} />
                            <span
                              className="truncate text-slate-300"
                              style={{ fontFamily: "var(--font-inter, Inter, sans-serif)" }}
                            >
                              {item.label}
                            </span>
                          </div>
                          <strong
                            className="shrink-0 text-white"
                            style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)" }}
                          >
                            {item.value}
                          </strong>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </RevealOnScroll>

        </div>
      </div>
    </section>
  );
}
