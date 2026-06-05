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
  /** Highlight keyword in title with neon gradient */
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
  // Replace accentWord in title with neon-gradient span
  const renderedTitle = accentWord
    ? title.split(accentWord).map((part, i, arr) =>
        i < arr.length - 1 ? (
          <span key={i}>
            {part}
            <span className="animate-text-shimmer">{accentWord}</span>
          </span>
        ) : (
          <span key={i}>{part}</span>
        )
      )
    : title;

  return (
    <section className="relative overflow-hidden bg-[#091338] py-20 sm:py-24 lg:py-32">
      {/* Background grid - hidden on mobile to reduce clutter as per Guideline 07 */}
      <div className="bg-grid-tech absolute inset-0 opacity-40 hidden md:block" />

      {/* Ambient glows - hidden on mobile to reduce clutter */}
      <div className="absolute left-0 top-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#003566] opacity-40 blur-[120px] hidden md:block" />
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] translate-x-1/3 translate-y-1/3 rounded-full bg-[#46FF00] opacity-10 blur-[100px] hidden md:block" />

      {/* Scanline overlay - hidden on mobile */}
      <div className="animate-scanline pointer-events-none absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#46FF00]/20 to-transparent hidden md:block" />

      <div className="container relative">
        <div className="max-w-4xl">
          {/* Eyebrow badge */}
          <div className="badge-accent mb-6 inline-flex">
            <span className="h-1.5 w-1.5 rounded-full bg-[#46FF00]" />
            {eyebrow}
          </div>

          {/* Headline */}
          <h1 className="text-4xl font-black leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {renderedTitle}
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            {description}
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            {primaryHref && (
              <Link href={primaryHref} className="btn-primary group">
                {primaryCta}
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            )}

            {secondaryHref && secondaryCta && (
              <Link href={secondaryHref} className="btn-secondary group">
                {secondaryCta}
              </Link>
            )}
          </div>
        </div>
      </div>
      
      {/* Bottom fade out to next section */}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-transparent to-transparent" />
    </section>
  );
}
