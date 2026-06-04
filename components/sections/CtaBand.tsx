import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CtaBand() {
  return (
    <section
      className="relative overflow-hidden py-10 sm:py-12"
      style={{ background: "linear-gradient(160deg, #002244 0%, #001833 100%)" }}
    >
      <div className="container">
        <div
          className="relative overflow-hidden rounded-[32px] border border-[#46FF00]/20 p-8 text-white shadow-2xl sm:rounded-[36px] sm:p-12 md:p-14"
          style={{ background: "linear-gradient(135deg, rgba(0,53,102,0.9) 0%, rgba(0,34,68,0.95) 100%)", backdropFilter: "blur(20px)" }}
        >
          {/* Neon glow */}
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, #46FF00 0%, transparent 70%)", filter: "blur(60px)" }}
          />
          <div className="relative mx-auto max-w-3xl text-center">
            <span className="badge-accent mb-4 inline-flex">Tư vấn chiến lược miễn phí</span>
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
              Cần một kế hoạch SEO/Growth rõ ràng hơn?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              SEOSONA sẽ audit hiện trạng, xác định cơ hội tăng trưởng và đề xuất roadmap triển khai phù hợp với nguồn lực doanh nghiệp.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/lien-he/"
                className="btn-primary w-full sm:w-auto"
              >
                Nhận tư vấn miễn phí <ArrowRight size={18} />
              </Link>
              <Link
                href="/bao-gia-seo/"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#46FF00]/30 bg-[#46FF00]/5 px-7 py-4 font-bold text-[#46FF00] backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:border-[#46FF00]/60 hover:bg-[#46FF00]/10 focus:outline-none focus:ring-4 focus:ring-[#46FF00]/20 sm:w-auto"
              >
                Xem báo giá SEO
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
