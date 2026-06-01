type ProcessStep = {
  title: string;
  description: string;
};

type ProcessProps = {
  title?: string;
  description?: string;
  steps: ProcessStep[];
};

export function Process({ title = "Quy trình triển khai", description, steps }: ProcessProps) {
  return (
    <section className="py-16 lg:py-20">
      <div className="container">
        <div className="mb-10 max-w-3xl">
          <span className="font-bold text-blue-600">Process</span>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950">{title}</h2>
          {description ? <p className="mt-4 text-lg leading-8 text-slate-600">{description}</p> : null}
        </div>
        <div className="grid gap-5 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.title} className="card p-6">
              <div className="mb-6 text-5xl font-black text-blue-100">0{index + 1}</div>
              <h3 className="text-xl font-black text-slate-950">{step.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
