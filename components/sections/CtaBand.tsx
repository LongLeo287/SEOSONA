import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CtaBand() {
  return (
    <section className="py-14 sm:py-16">
      <div className="container overflow-hidden rounded-[32px] bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 p-8 text-white shadow-2xl shadow-blue-900/20 sm:rounded-[36px] sm:p-12 md:p-14">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
            Cần một kế hoạch SEO/Growth rõ ràng hơn?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-blue-50 sm:text-lg">
            SEOSONA sẽ audit hiện trạng, xác định cơ hội tăng trưởng và đề xuất roadmap triển khai phù hợp với nguồn lực doanh nghiệp.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/lien-he/"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-black text-blue-700 shadow-xl shadow-blue-900/20 transition duration-200 hover:-translate-y-0.5 hover:bg-blue-50 hover:shadow-2xl hover:shadow-blue-900/25 focus:outline-none focus:ring-4 focus:ring-white/40 sm:w-auto"
            >
              Nhận tư vấn miễn phí <ArrowRight size={18} />
            </Link>
            <Link
              href="/bao-gia-seo/"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:bg-white/20 focus:outline-none focus:ring-4 focus:ring-white/30 sm:w-auto"
            >
              Xem báo giá SEO
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
