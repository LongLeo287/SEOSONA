import Link from "next/link";
import { ArrowRight } from "lucide-react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta?: string;
  primaryHref?: string;
  secondaryCta?: string;
  secondaryHref?: string;
};

export function PageHero({ eyebrow, title, description, primaryCta = "Đăng ký tư vấn", primaryHref = "/lien-he/", secondaryCta, secondaryHref }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(21,94,239,.12),transparent_28%),radial-gradient(circle_at_85%_30%,rgba(6,182,212,.12),transparent_30%)]" />
      <div className="container relative">
        <div className="max-w-4xl">
          <div className="mb-5 inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">{eyebrow}</div>
          <h1 className="text-5xl font-black tracking-tight text-slate-950 md:text-6xl">{title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">{description}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href={primaryHref} className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-4 font-bold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700">
              {primaryCta} <ArrowRight size={18} />
            </Link>
            {secondaryCta && secondaryHref ? (
              <Link href={secondaryHref} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-4 font-bold text-slate-900 hover:border-blue-200 hover:text-blue-700">
                {secondaryCta}
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
