import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, FileText } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionBadge } from "@/components/ui/SectionBadge";

type DetailItem = {
  title: string;
  description: string;
};

type ResourceItem = DetailItem & {
  href: string;
  label?: string;
};

type ServiceAuditBlockProps = {
  eyebrow: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imageBadge?: string;
  items: DetailItem[];
  reverse?: boolean;
  tone?: "light" | "dark";
};

type ServiceResourceLinksProps = {
  eyebrow?: string;
  title: string;
  description: string;
  resources: ResourceItem[];
};

export function ServiceAuditBlock({
  eyebrow,
  title,
  description,
  imageSrc,
  imageAlt,
  imageBadge = "Audit snapshot",
  items,
  reverse = false,
  tone = "light",
}: ServiceAuditBlockProps) {
  const isDark = tone === "dark";

  return (
    <section className={`relative overflow-hidden py-16 lg:py-24 ${isDark ? "bg-[#F8FAFC] text-[#04091A]" : "bg-white text-[#04091A]"}`}>
      {isDark ? (
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#04091A08_1px,transparent_1px),linear-gradient(to_bottom,#04091A08_1px,transparent_1px)] bg-[size:32px_32px]" />
      ) : (
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#04091A08_1px,transparent_1px),linear-gradient(to_bottom,#04091A08_1px,transparent_1px)] bg-[size:28px_28px]" />
      )}

      <div className={`container relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
        <RevealOnScroll direction={reverse ? "left" : "right"}>
          <SectionBadge live={false} className={isDark ? "border-slate-200 bg-white" : ""}>
            {eyebrow}
          </SectionBadge>

          <h2 className={`mt-4 max-w-3xl text-balance text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-[46px] text-[#04091A]`}>
            {title}
          </h2>

          <p className={`mt-5 max-w-2xl text-pretty text-[17px] font-medium leading-relaxed text-slate-500`}>
            {description}
          </p>

          <div className="mt-8 grid gap-4">
            {items.map((item, index) => (
              <div
                key={item.title}
                className={`group rounded-3xl border p-5 transition-all duration-300 hover:-translate-y-1 ${
                  isDark
                    ? "border-slate-200/80 bg-white hover:border-[#1D4ED8]/30 hover:shadow-[0_12px_40px_rgba(59,166,241,0.12)]"
                    : "border-slate-200/80 bg-white/80 hover:border-[#1D4ED8]/30 hover:shadow-[0_12px_40px_rgba(59,166,241,0.12)]"
                }`}
              >
                <div className="flex gap-4">
                  <div className={`mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl font-black bg-[#F0F6FF] text-[#1D4ED8]`}>
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className={`font-black text-[#04091A]`}>{item.title}</h3>
                    <p className={`mt-1 text-[15px] leading-relaxed text-slate-500`}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        <RevealOnScroll direction={reverse ? "right" : "left"} delay={120}>
          <div className={`relative overflow-hidden rounded-[32px] border p-4 shadow-sm ${isDark ? "border-slate-200/80 bg-white" : "border-slate-200/80 bg-[#F8FAFC]"}`}>
            <div className="absolute left-8 top-8 z-10 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/80 px-4 py-2 text-[12px] font-bold uppercase tracking-widest text-[#1D4ED8] shadow-sm backdrop-blur-md">
              <CheckCircle2 className="h-4 w-4" />
              {imageBadge}
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] bg-white">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

export function ServiceResourceLinks({
  eyebrow = "Tài nguyên SEO",
  title,
  description,
  resources,
}: ServiceResourceLinksProps) {
  return (
    <section className="relative overflow-hidden border-y border-slate-100 bg-[#F6F9FC] py-16 lg:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll direction="up" className="mx-auto max-w-3xl text-center">
          <SectionBadge live={false} icon={<FileText className="h-3.5 w-3.5" />}>
            {eyebrow}
          </SectionBadge>
          <h2 className="mx-auto mt-4 text-balance text-3xl font-black leading-tight tracking-tight text-[#04091A] sm:text-4xl md:text-[46px]">
            {title}
          </h2>
          <p className="mx-auto mt-5 text-pretty text-[17px] font-medium leading-relaxed text-slate-500">
            {description}
          </p>
        </RevealOnScroll>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {resources.map((resource, index) => (
            <RevealOnScroll key={resource.title} direction="up" delay={index * 90}>
              <Link
                href={resource.href}
                className="group flex h-full flex-col rounded-[32px] border border-slate-200/80 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#1D4ED8]/30 hover:shadow-[0_12px_40px_rgba(59,166,241,0.12)]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F0F6FF] text-lg font-black text-[#1D4ED8] transition-transform group-hover:scale-110">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="text-xl font-black text-[#04091A] transition-colors group-hover:text-[#1D4ED8]">
                  {resource.title}
                </h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-slate-500">
                  {resource.description}
                </p>
                <div className="mt-6 flex items-center gap-2 border-t border-slate-100 pt-5 text-[14px] font-bold text-[#04091A] transition-colors group-hover:text-[#1D4ED8]">
                  {resource.label || "Xem tài nguyên"}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
