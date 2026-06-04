import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

interface ProcessStep {
  title: string;
  description: string;
}

interface ProcessProps {
  eyebrow?: string;
  title?: string;
  description: string;
  steps: ProcessStep[];
}

export function Process({ eyebrow, title, description, steps }: ProcessProps) {
  return (
    <section className="bg-[#001D3D] py-16 lg:py-24">
      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow && (
            <span className="badge-accent mb-4">
              {eyebrow}
            </span>
          )}
          {title && (
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl font-poppins">
              {title}
            </h2>
          )}
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300 font-inter">
            {description}
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 grid-cols-1 sm:grid-cols-2 lg:mt-20">
          {steps.map((step, index) => (
            <RevealOnScroll key={step.title} delay={index * 100} direction="up">
              <div className="group relative flex flex-col justify-between overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-lg transition duration-300 hover:-translate-y-1 hover:border-[#46FF00]/40 hover:bg-white/10 hover:shadow-2xl hover:shadow-[#46FF00]/10">
                <div className="absolute right-0 top-0 text-[120px] font-black leading-none text-white/5 transition-all duration-500 group-hover:-translate-y-4 group-hover:scale-110 group-hover:text-[#46FF00]/5 select-none pointer-events-none">
                  {String(index + 1).padStart(2, "0")}
                </div>
                
                <div className="relative">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 border border-white/5 text-xl font-black text-white shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:bg-[#46FF00] group-hover:text-[#001D3D]">
                    {index + 1}
                  </div>
                  <h3 className="mb-3 text-xl font-black text-white font-poppins">
                    {step.title}
                  </h3>
                  <p className="leading-7 text-slate-300 font-inter">
                    {step.description}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
