import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

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
  /** dark: neon cards on navy bg | light: white cards on off-white bg (default) */
  variant?: "dark" | "light";
};

export function FeatureGrid({
  eyebrow,
  title,
  description,
  features,
  variant = "light",
}: FeatureGridProps) {
  const colClass =
    features.length <= 3
      ? "md:grid-cols-3"
      : features.length === 4
      ? "md:grid-cols-2 lg:grid-cols-4"
      : "md:grid-cols-2 lg:grid-cols-3";

  const isDark = variant === "dark";

  return (
    <section
      className={`relative py-12 lg:py-16 ${
        isDark ? "bg-[#091338] overflow-hidden" : "bg-[#F4F6F8]"
      }`}
    >
      {isDark && (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(70,255,0,0.06),transparent_60%)] hidden md:block" />
          <div className="bg-grid-tech absolute inset-0 opacity-20 hidden md:block" />
        </>
      )}

      <div className="container relative">
        <RevealOnScroll className="mb-12 max-w-3xl">
          {eyebrow && (
            <span
              className={`mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-bold ${
                isDark
                  ? "border-[#46FF00]/30 bg-[#46FF00]/10 text-[#46FF00]"
                  : "border-[#003566]/20 bg-[#003566]/06 text-[#003566]"
              }`}
            >
              {isDark && <span className="h-1.5 w-1.5 rounded-full bg-[#46FF00]" />}
              {eyebrow}
            </span>
          )}
          <h2
            className={`mt-3 text-3xl font-black tracking-tight sm:text-4xl ${
              isDark ? "text-white" : "text-[#091338]"
            }`}
          >
            {title}
          </h2>
          {description && (
            <p
              className={`mt-4 text-base leading-8 sm:text-lg ${
                isDark ? "text-slate-400" : "text-slate-600"
              }`}
            >
              {description}
            </p>
          )}
        </RevealOnScroll>

        <div className={`grid gap-5 ${colClass}`}>
          {features.map((feature, index) =>
            isDark ? (
              <RevealOnScroll key={feature.title} delay={index * 70}>
                <div className="card-dark group relative h-full overflow-hidden p-6">
                  {/* Ghost number */}
                  <div className="pointer-events-none absolute right-3 top-2 select-none text-[72px] font-black leading-none text-white/5 transition-all duration-500 group-hover:text-[#46FF00]/10">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Number badge */}
                  <div className="relative mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#46FF00]/20 bg-[#46FF00]/10 text-base font-black text-[#46FF00] shadow-[0_0_15px_rgba(70,255,0,0.15)] transition-all duration-300 group-hover:bg-[#46FF00] group-hover:text-[#091338]">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <h3 className="relative text-lg font-black text-white group-hover:text-[#46FF00] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="relative mt-3 text-sm leading-7 text-slate-400 group-hover:text-white transition-colors duration-300">
                    {feature.description}
                  </p>

                  {/* Bottom accent line */}
                  <div className="relative mt-5 h-px w-8 rounded-full bg-[#46FF00]/40 transition-all duration-500 group-hover:w-full group-hover:bg-gradient-to-r group-hover:from-[#46FF00]/60 group-hover:to-transparent" />
                </div>
              </RevealOnScroll>
            ) : (
              <RevealOnScroll key={feature.title} delay={index * 70}>
                <div className="card group relative h-full overflow-hidden p-6">
                  {/* Hover orb */}
                  <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-blue-50 transition duration-500 group-hover:scale-150 group-hover:bg-[#46FF00]/10" />

                  {/* Number badge */}
                  <div className="relative mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#003566] text-base font-black text-white shadow-md shadow-[#003566]/20">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <h3 className="relative text-lg font-black text-[#091338]">
                    {feature.title}
                  </h3>
                  <p className="relative mt-3 text-sm leading-7 text-slate-600">
                    {feature.description}
                  </p>

                  {/* Bottom accent line */}
                  <div className="relative mt-4 h-0.5 w-10 rounded-full bg-gradient-to-r from-[#003566] to-[#46FF00] transition-all duration-300 group-hover:w-20" />
                </div>
              </RevealOnScroll>
            )
          )}
        </div>
      </div>
    </section>
  );
}
