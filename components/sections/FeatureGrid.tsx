import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionBadge } from "@/components/ui/SectionBadge";

type Feature = {
  title: string;
  description: string;
  icon?: string;
};

type FeatureGridProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  features: Feature[];
};

export function FeatureGrid({
  eyebrow,
  title,
  description,
  features,
}: FeatureGridProps) {
  const colClass =
    features.length <= 3
      ? "md:grid-cols-3"
      : features.length === 4
      ? "md:grid-cols-2 lg:grid-cols-4"
      : "md:grid-cols-2 lg:grid-cols-3";

  // Background alternates. Since most heroes are white, this uses #F8FAFC.
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-12 lg:py-16 text-[#04091A]">
      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll direction="up" className="flex flex-col items-center text-center">
          {eyebrow && (
            <SectionBadge live={false}>
              {eyebrow}
            </SectionBadge>
          )}

          <h2 className="mx-auto mt-4 max-w-4xl text-balance text-3xl font-black leading-tight tracking-tight text-[#04091A] sm:text-4xl md:text-[46px]">
            {title}
          </h2>

          {description && (
            <p className="mx-auto mt-5 max-w-3xl text-pretty text-[17px] font-medium leading-relaxed text-slate-500">
              {description}
            </p>
          )}
        </RevealOnScroll>

        <div className={`mt-12 grid gap-6 lg:gap-8 ${colClass}`}>
          {features.map((feature, index) => (
            <RevealOnScroll key={feature.title} delay={index * 70} direction="up">
              <div className="group relative flex h-full flex-col overflow-hidden rounded-[32px] border border-slate-200/80 bg-white p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-[#1D4ED8]/30 hover:shadow-[0_12px_40px_rgba(59,166,241,0.12)]">
                {/* Subtle Top Glow on Hover */}
                <div className="absolute left-1/2 top-0 h-[2px] w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#1D4ED8] to-transparent opacity-0 transition-all duration-500 group-hover:w-full group-hover:opacity-100" />
                
                {/* Number badge / Icon area */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F0F6FF] text-xl font-black text-[#1D4ED8] shadow-sm transition-transform duration-500 group-hover:scale-110">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="text-xl font-bold tracking-tight text-[#04091A] transition-colors duration-300 group-hover:text-[#1D4ED8]">
                  {feature.title}
                </h3>
                
                <p className="mt-3 flex-1 text-base leading-relaxed text-slate-500">
                  {feature.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
