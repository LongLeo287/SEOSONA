"use client";

import { ArrowRight } from "lucide-react";
import type { Resource } from "@/data/resources";

type ResourceCardProps = {
  resource: Resource;
  className?: string;
  onClick?: (resource: Resource) => void;
};

export function ResourceCard({
  resource,
  className,
  onClick,
}: ResourceCardProps) {
  const Icon = resource.icon;

  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-[32px] bg-white p-8 shadow-sm ring-1 ring-slate-200/50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(59,166,241,0.12)] hover:ring-[#3BA6F1]/30 md:p-10 ${className || ""}`}
    >
      {/* Glowing Sweep Top Border */}
      <div className="absolute left-1/2 top-0 h-[2px] w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#3BA6F1] to-transparent opacity-0 transition-all duration-500 group-hover:w-full group-hover:opacity-100" />
      <div className="mb-5 flex flex-col gap-3">
        <Icon className="h-[60px] w-[60px] text-[#3BA6F1] transition-transform duration-300 group-hover:scale-110" strokeWidth={2} />
        <span className="text-xs font-bold uppercase tracking-widest text-[#3BA6F1]">
          {resource.category}
        </span>
      </div>

      <h3 className="mb-4 text-[28px] font-black leading-[1.2] tracking-tight text-[#04091A]">
        {resource.title}
      </h3>
      
      <p className="mb-8 text-pretty text-[15px] font-medium leading-[1.65] text-slate-500">
        {resource.description}
      </p>

      <div className="mb-10 mt-auto">
        <span className="inline-flex items-center justify-center rounded-full border border-slate-200/80 bg-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-500 shadow-sm">
          {resource.type}
        </span>
      </div>

      <div className="flex items-center justify-between border-t border-slate-200/80 pt-6">
        <span className="text-[14px] font-bold text-slate-500 transition-colors group-hover:text-[#3BA6F1]">
          Tải xuống ngay
        </span>
        <button
          type="button"
          onClick={() => onClick?.(resource)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/80 bg-white text-slate-400 shadow-sm transition-all duration-300 group-hover:border-[#3BA6F1] group-hover:bg-[#3BA6F1] group-hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3BA6F1] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F8FAFC]"
          aria-label={`Tải xuống ngay: ${resource.title}`}
        >
          <ArrowRight className="h-[18px] w-[18px]" strokeWidth={2.5} />
        </button>
      </div>
    </article>
  );
}
