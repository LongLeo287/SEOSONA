import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

type Feature = {
  title: string;
  description: string;
};

type FeatureGridProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  features: Feature[];
};

export function FeatureGrid({ eyebrow, title, description, features }: FeatureGridProps) {
  const colClass =
    features.length <= 3
      ? "md:grid-cols-3"
      : features.length === 4
      ? "md:grid-cols-2 lg:grid-cols-4"
      : "md:grid-cols-2 lg:grid-cols-3";

  return (
    <section className="py-14 sm:py-16 lg:py-20">
      <div className="container">
        <RevealOnScroll className="mb-10 max-w-3xl">
          {eyebrow ? (
            <span className="font-bold text-blue-700">{eyebrow}</span>
          ) : null}
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">{description}</p>
          ) : null}
        </RevealOnScroll>

        <div className={`grid gap-5 ${colClass}`}>
          {features.map((feature, index) => (
            <RevealOnScroll key={feature.title} delay={index * 70}>
              <div className="group relative h-full overflow-hidden rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">
                <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-blue-50 transition duration-500 group-hover:scale-150 group-hover:bg-cyan-50" />
                <div className="relative mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-base font-black text-white shadow-md shadow-blue-600/20">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="relative text-lg font-black text-slate-950">{feature.title}</h3>
                <p className="relative mt-3 text-sm leading-7 text-slate-600">{feature.description}</p>
                <div className="relative mt-4 h-0.5 w-10 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 transition-all duration-300 group-hover:w-20" />
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
