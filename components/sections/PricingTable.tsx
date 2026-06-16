import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

interface PricingPlan {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText?: string;
  ctaLink?: string;
}

interface PricingTableProps {
  eyebrow?: string;
  title: string;
  description?: string;
  plans: PricingPlan[];
}

export function PricingTable({ eyebrow, title, description, plans }: PricingTableProps) {
  return (
    <section className="bg-slate-50 py-12 lg:py-16">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          {eyebrow && <span className="badge mb-4">{eyebrow}</span>}
          <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-lg text-slate-600">{description}</p>
          )}
        </div>

        <div className="mx-auto mt-10 grid max-w-6xl gap-6 lg:gap-8 lg:grid-cols-3 items-center">
          {plans.map((plan, index) => {
            const PlanCard = (
              <div className="flex flex-col h-full rounded-[inherit] p-6 sm:p-8">
                {plan.isPopular && (
                  <div className="absolute -top-5 left-0 right-0 mx-auto w-fit rounded-full bg-blue-600 px-5 py-1.5 text-sm font-bold text-white shadow-md z-20">
                    Được chọn nhiều nhất
                  </div>
                )}
                
                <div className="mb-6 relative z-10">
                  <h3 className={`text-xl font-bold ${plan.isPopular ? "text-blue-700" : "text-blue-600"}`}>
                    {plan.name}
                  </h3>
                  <div className="mt-4 flex items-baseline gap-1.5 flex-wrap">
                    <span className="text-3xl font-black tracking-tight sm:text-4xl break-all sm:break-normal text-[#04091A]">{plan.price}</span>
                    {plan.price !== "Liên hệ" && plan.period !== "" && (
                      <span className="text-sm whitespace-nowrap text-slate-500">
                        {plan.period || "/ tháng"}
                      </span>
                    )}
                  </div>
                  <p className="mt-4 text-[15px] leading-relaxed text-slate-500">
                    {plan.description}
                  </p>
                </div>

                <ul className="mb-8 flex flex-1 flex-col gap-4 relative z-10">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex gap-3">
                      <CheckCircle2
                        className={`h-5 w-5 shrink-0 ${plan.isPopular ? "text-blue-600" : "text-blue-500"}`}
                      />
                      <span className="text-[15px] leading-relaxed text-slate-600 font-medium">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.ctaLink || "/lien-he/"}
                  className={`relative z-10 mt-auto block rounded-full px-6 py-4 text-center text-[15px] font-bold transition-all duration-300 ${
                    plan.isPopular
                      ? "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg hover:-translate-y-1"
                      : "bg-slate-50 text-slate-900 ring-1 ring-slate-200 hover:bg-slate-100 hover:-translate-y-0.5"
                  }`}
                >
                  {plan.ctaText || "Nhận tư vấn ngay"}
                </Link>
              </div>
            );

            return plan.isPopular ? (
              <HoverBorderGradient
                key={index}
                as="div"
                containerClassName="rounded-[2.5rem] p-0 w-full lg:scale-105 z-10 shadow-2xl h-full"
                className="h-full bg-white text-slate-950 w-full"
              >
                {PlanCard}
              </HoverBorderGradient>
            ) : (
              <div
                key={index}
                className="relative flex flex-col rounded-[2.5rem] bg-white text-slate-950 shadow-lg ring-1 ring-slate-200/50 h-full"
              >
                {PlanCard}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
