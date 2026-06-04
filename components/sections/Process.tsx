import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

type ProcessStep = {
  title: string;
  description: string;
};

type ProcessProps = {
  title?: string;
  eyebrow?: string;
  description?: string;
  steps: ProcessStep[];
};

export function Process({
  title = "Quy trình triển khai",
  eyebrow = "Quy trình",
  description,
  steps
}: ProcessProps) {
  const colClass =
    steps.length <= 4
      ? "sm:grid-cols-2 lg:grid-cols-4"
      : steps.length <= 6
      ? "sm:grid-cols-2 lg:grid-cols-3"
      : "sm:grid-cols-2 lg:grid-cols-4";

  return (
    <section
      className="relative overflow-hidden py-14 sm:py-16 lg:py-20"
      style={{ background: "linear-gradient(160deg, #002244 0%, #001833 50%, #002244 100%)" }}
    >
      {/* Glow orbs */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #46FF00 0%, transparent 70%)", filter: "blur(100px)" }}
      />

      <div className="container relative">
        <RevealOnScroll className="mb-10 max-w-3xl">
          <span className="badge-accent">{eyebrow}</span>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-base leading-8 text-slate-400 sm:text-lg">{description}</p>
          ) : null}
        </RevealOnScroll>

        <div className={`grid gap-5 ${colClass}`}>
          {steps.map((step, index) => (
            <RevealOnScroll key={step.title} delay={index * 80}>
              <div className="group relative h-full overflow-hidden rounded-[24px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-lg transition duration-300 hover:-translate-y-1 hover:border-[#46FF00]/40 hover:bg-white/8 hover:shadow-xl hover:shadow-[#46FF00]/5">
                {/* Glow on hover */}
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#46FF00]/5 transition duration-500 group-hover:scale-150 group-hover:bg-[#46FF00]/10 blur-xl" />

                {/* Step number badge */}
                <div className="relative mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#46FF00]/30 bg-[#003566] text-lg font-black text-[#46FF00] shadow-md shadow-black/20 transition group-hover:border-[#46FF00]/60 group-hover:shadow-[#46FF00]/10">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="relative text-lg font-black text-white">{step.title}</h3>
                <p className="relative mt-3 text-sm leading-7 text-slate-400">{step.description}</p>

                {/* Accent bottom line */}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 rounded-full bg-[#46FF00] transition-all duration-500 group-hover:w-full opacity-60" />
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
