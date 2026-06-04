import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

interface PricingPlan {
  name: string;
  price: string;
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
    <section className="bg-slate-50 py-16 sm:py-24">
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

        <div className="mx-auto mt-16 grid max-w-6xl gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col rounded-[2.5rem] p-8 sm:p-10 ${
                plan.isPopular
                  ? "bg-[#091338] text-white shadow-2xl ring-2 ring-blue-500 scale-105 z-10"
                  : "bg-white text-slate-950 shadow-lg ring-1 ring-slate-200/50"
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-5 left-0 right-0 mx-auto w-fit rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 px-4 py-1 text-sm font-bold text-[#091338] shadow-md">
                  Được chọn nhiều nhất
                </div>
              )}
              
              <div className="mb-8">
                <h3 className={`text-xl font-bold ${plan.isPopular ? "text-blue-200" : "text-blue-600"}`}>
                  {plan.name}
                </h3>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-4xl font-black tracking-tight sm:text-5xl">{plan.price}</span>
                  {plan.price !== "Liên hệ" && <span className={`text-sm ${plan.isPopular ? "text-slate-300" : "text-slate-500"}`}>/ tháng</span>}
                </div>
                <p className={`mt-4 text-sm leading-6 ${plan.isPopular ? "text-slate-300" : "text-slate-600"}`}>
                  {plan.description}
                </p>
              </div>

              <ul className="mb-8 flex flex-1 flex-col gap-4">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex gap-3">
                    <CheckCircle2
                      className={`h-5 w-5 shrink-0 ${plan.isPopular ? "text-cyan-400" : "text-blue-600"}`}
                    />
                    <span className={`text-sm leading-6 ${plan.isPopular ? "text-slate-200" : "text-slate-700"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href={plan.ctaLink || "/lien-he/"}
                className={`mt-auto block rounded-full px-6 py-4 text-center text-sm font-bold transition-all ${
                  plan.isPopular
                    ? "bg-gradient-to-r from-blue-400 to-cyan-400 text-[#091338] hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/20"
                    : "bg-slate-100 text-slate-950 hover:bg-slate-200"
                }`}
              >
                {plan.ctaText || "Nhận tư vấn ngay"}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
