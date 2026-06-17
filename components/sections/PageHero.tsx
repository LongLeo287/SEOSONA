import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionBadge } from "@/components/ui/SectionBadge";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta?: string;
  primaryHref?: string;
  secondaryCta?: string;
  secondaryHref?: string;
  /** Highlight keyword in title with accent color */
  accentWord?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  primaryCta = "Đăng ký tư vấn",
  primaryHref = "/lien-he/",
  secondaryCta,
  secondaryHref,
  accentWord,
}: PageHeroProps) {
  const renderedTitle = accentWord
    ? title.split(accentWord).map((part, i, arr) =>
        i < arr.length - 1 ? (
          <span key={i}>
            {part}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">{accentWord}</span>
          </span>
        ) : (
          <span key={i}>{part}</span>
        )
      )
    : title;

  return (
    <section className="relative overflow-hidden bg-white py-12 lg:py-16">
      {/* Premium Tech Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800A_1px,transparent_1px),linear-gradient(to_bottom,#8080800A_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      {/* Soft Glow Orbs */}
      <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-[#1D4ED8]/5 blur-[100px] pointer-events-none mix-blend-multiply" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#7DD3FC]/10 blur-[120px] pointer-events-none mix-blend-multiply" />

      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll direction="up" className="flex flex-col items-center text-center">
          {/* Eyebrow badge */}
          <SectionBadge live={true}>
            {eyebrow}
          </SectionBadge>

          {/* Headline */}
          <h1 className="mx-auto mt-6 max-w-4xl text-balance text-4xl font-extrabold leading-[1.15] tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            {renderedTitle}
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg font-medium leading-relaxed text-slate-600">
            {description}
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {primaryHref && (
              <Link href={primaryHref} className="group flex h-14 items-center justify-center gap-2 rounded-full bg-blue-600 px-8 font-bold text-white shadow-[0_8px_30px_-10px_rgba(37,99,235,0.4)] transition-all hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-[0_12px_40px_-12px_rgba(37,99,235,0.6)] w-full sm:w-auto">
                {primaryCta}
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
            )}

            {secondaryHref && secondaryCta && (
              <Link href={secondaryHref} className="group flex h-14 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-8 font-semibold text-slate-700 shadow-sm transition-all hover:border-blue-200 hover:bg-slate-50 hover:text-blue-600 w-full sm:w-auto">
                {secondaryCta}
              </Link>
            )}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
