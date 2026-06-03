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
    <section className="bg-slate-50 py-14 sm:py-16 lg:py-20">
      <div className="container">
        <RevealOnScroll className="mb-10 max-w-3xl">
          <span className="font-bold text-blue-700">{eyebrow}</span>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">{description}</p>
          ) : null}
        </RevealOnScroll>

        <div className={`grid gap-5 ${colClass}`}>
          {steps.map((step, index) => (
            <RevealOnScroll key={step.title} delay={index * 80}>
              <div className="relative h-full overflow-hidden rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">
                {/* Step number badge */}
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-lg font-black text-white shadow-md shadow-blue-600/25">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="text-lg font-black text-slate-950">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{step.description}</p>
                {/* Decorative accent */}
                <div className="absolute bottom-0 left-0 h-1 w-0 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 transition-all duration-500 group-hover:w-full" />
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
