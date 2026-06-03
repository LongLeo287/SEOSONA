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

export function PageHero({
  eyebrow,
  title,
  description,
  primaryCta = "Đăng ký tư vấn",
  primaryHref = "/lien-he/",
  secondaryCta,
  secondaryHref
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(21,94,239,.12),transparent_28%),radial-gradient(circle_at_85%_30%,rgba(6,182,212,.10),transparent_30%)]" />
      <div className="absolute -right-24 top-0 h-64 w-64 rounded-full bg-cyan-100/30 blur-3xl" />
      <div className="container relative">
        <div className="max-w-4xl">
          <div className="mb-5 inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">
            {eyebrow}
          </div>
          <h1 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            {description}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href={primaryHref} className="btn-primary">
              {primaryCta} <ArrowRight size={18} />
            </Link>
            {secondaryCta && secondaryHref ? (
              <Link
                href={secondaryHref}
                className="btn-secondary"
              >
                {secondaryCta}
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
