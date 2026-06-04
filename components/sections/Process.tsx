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
    <section className="bg-[#F4F6F8] py-16 lg:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow && (
            <span className="badge-accent bg-white shadow-sm mb-4">
              {eyebrow}
            </span>
          )}
          {title && (
            <h2 className="text-3xl font-black tracking-tight text-[#091338] sm:text-4xl md:text-5xl">
              {title}
            </h2>
          )}
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-[#6B7280]">
            {description}
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2 lg:mt-20">
          {steps.map((step, index) => (
            <RevealOnScroll key={step.title} delay={index * 100} direction="up">
              <div className="card group relative flex flex-col justify-between overflow-hidden p-8 transition-all hover:border-[#003566]/30">
                <div className="absolute right-0 top-0 text-[120px] font-black leading-none text-[#F4F6F8] opacity-50 transition-all duration-500 group-hover:-translate-y-4 group-hover:scale-110 group-hover:text-[#003566]/5 select-none pointer-events-none">
                  {String(index + 1).padStart(2, "0")}
                </div>
                
                <div className="relative">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#003566] text-xl font-black text-white shadow-lg shadow-[#003566]/20 transition-transform duration-500 group-hover:scale-110 group-hover:bg-[#46FF00] group-hover:text-[#003566]">
                    {index + 1}
                  </div>
                  <h3 className="mb-3 text-xl font-black text-[#091338]">
                    {step.title}
                  </h3>
                  <p className="leading-7 text-[#6B7280]">
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
