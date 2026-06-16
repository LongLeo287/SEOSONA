"use client";

import { ArrowRight } from "lucide-react";
import type { Resource } from "@/data/resources";
import { cn } from "@/lib/utils";

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
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-[32px] bg-white p-8 md:p-10 transition-all duration-500",
        "shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-12px_rgba(29,78,216,0.15)]",
        "border border-slate-200/80 hover:border-[#1D4ED8]/40 hover:-translate-y-2",
        className
      )}
    >
      {/* Subtle Blue Glow Background inside the card */}
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/5 blur-[80px] transition-all duration-500 group-hover:bg-blue-500/15 group-hover:blur-[100px]" />
      
      {/* Glowing Sweep Top Border */}
      <div className="absolute left-1/2 top-0 h-[3px] w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#1D4ED8] to-transparent opacity-0 transition-all duration-500 ease-out group-hover:w-full group-hover:opacity-100" />
      
      <div className="mb-6 flex flex-col items-start gap-4 relative z-10">
        {/* Premium Icon Container */}
        <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-b from-blue-50 to-white shadow-sm ring-1 ring-blue-100/50 transition-transform duration-500 group-hover:scale-110 group-hover:shadow-md group-hover:ring-blue-200">
          <div className="absolute inset-0 rounded-2xl bg-[#1D4ED8] opacity-0 transition-opacity duration-500 group-hover:opacity-5" />
          <Icon className="relative z-10 h-8 w-8 text-[#1D4ED8] transition-colors duration-300" strokeWidth={2} />
        </div>
        
        {/* Category Tag */}
        <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-50 border border-slate-200/80 px-3 py-1 mt-2 transition-colors duration-300 group-hover:border-blue-200 group-hover:bg-blue-50/50">
          <span className="h-1.5 w-1.5 rounded-full bg-[#1D4ED8] animate-pulse" />
          <span className="text-[11px] font-bold uppercase tracking-widest text-slate-500 transition-colors duration-300 group-hover:text-[#1D4ED8]">
            {resource.category}
          </span>
        </div>
      </div>

      <h3 className="mb-4 text-[26px] md:text-[28px] font-black leading-[1.2] tracking-tight text-[#04091A] text-balance transition-colors duration-300 group-hover:text-[#1D4ED8] relative z-10">
        {resource.title}
      </h3>
      
      <p className="mb-8 text-pretty text-[15px] font-medium leading-[1.65] text-slate-500 relative z-10">
        {resource.description}
      </p>

      <div className="mb-10 mt-auto relative z-10">
        <span className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-500 shadow-sm transition-all group-hover:bg-white">
          {resource.type}
        </span>
      </div>

      <div className="flex items-center justify-between border-t border-slate-200/80 pt-6 relative z-10 group/btn cursor-pointer" onClick={() => onClick?.(resource)}>
        <span className="text-[14.5px] font-bold text-slate-500 transition-colors duration-300 group-hover:text-[#1D4ED8]">
          Tải xuống ngay
        </span>
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-400 shadow-sm transition-all duration-300 group-hover:border-[#1D4ED8] group-hover:bg-[#1D4ED8] group-hover:text-white group-hover:shadow-md group-hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8] focus-visible:ring-offset-2"
          aria-label={`Tải xuống ngay: ${resource.title}`}
        >
          <ArrowRight className="h-[18px] w-[18px] transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={2.5} />
        </button>
      </div>
    </article>
  );
}
