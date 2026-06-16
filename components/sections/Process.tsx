import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionBadge } from "@/components/ui/SectionBadge";

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
    <section className="bg-white py-12 lg:py-16 text-[#04091A]">
      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll direction="up" className="flex flex-col items-center text-center">
          {eyebrow && (
            <SectionBadge live={false}>
              {eyebrow}
            </SectionBadge>
          )}
          
          {title && (
            <h2 className="mx-auto mt-4 max-w-4xl text-balance text-3xl font-black leading-tight tracking-tight text-[#04091A] sm:text-4xl md:text-[46px]">
              {title}
            </h2>
          )}
          
          <p className="mx-auto mt-5 max-w-3xl text-pretty text-[17px] font-medium leading-relaxed text-slate-500">
            {description}
          </p>
        </RevealOnScroll>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 grid-cols-1 md:grid-cols-2">
          {steps.map((step, index) => (
            <RevealOnScroll key={step.title} delay={index * 100} direction="up">
              <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[32px] border border-slate-200/80 bg-[#F8FAFC]/50 p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-[#1D4ED8]/30 hover:bg-white hover:shadow-[0_12px_40px_rgba(59,166,241,0.12)]">
                <div className="absolute right-4 top-4 text-[80px] font-black leading-none text-slate-200/50 transition-all duration-500 group-hover:scale-110 group-hover:text-[#1D4ED8]/10 select-none pointer-events-none">
                  {String(index + 1).padStart(2, "0")}
                </div>
                
                <div className="relative">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white border border-slate-200 text-xl font-black text-[#04091A] shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:border-[#1D4ED8] group-hover:bg-[#1D4ED8] group-hover:text-white">
                    {index + 1}
                  </div>
                  
                  <h3 className="mb-3 text-xl font-bold tracking-tight text-[#04091A] transition-colors duration-300 group-hover:text-[#1D4ED8]">
                    {step.title}
                  </h3>
                  
                  <p className="flex-1 text-base leading-relaxed text-slate-500">
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
