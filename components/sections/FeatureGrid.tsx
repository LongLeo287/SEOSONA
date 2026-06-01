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
  return (
    <section className="py-16 lg:py-20">
      <div className="container">
        <div className="mb-10 max-w-3xl">
          {eyebrow ? <span className="font-bold text-blue-600">{eyebrow}</span> : null}
          <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950">{title}</h2>
          {description ? <p className="mt-4 text-lg leading-8 text-slate-600">{description}</p> : null}
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={feature.title} className="card p-6">
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 font-black text-blue-700">{index + 1}</div>
              <h3 className="text-xl font-black text-slate-950">{feature.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
