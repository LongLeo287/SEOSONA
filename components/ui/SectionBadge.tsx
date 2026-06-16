import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionBadgeProps {
  children: ReactNode;
  icon?: ReactNode;
  live?: boolean;
  variant?: "primary" | "premium" | "neutral";
  className?: string;
}

export function SectionBadge({ children, icon, live = true, variant = "primary", className }: SectionBadgeProps) {
  
  const variantStyles = {
    primary: "border-blue-100 bg-[#F0F6FF] text-[#1D4ED8] hover:bg-blue-50",
    premium: "border-amber-200/60 bg-amber-50/50 text-amber-700 hover:bg-amber-100/50",
    neutral: "border-slate-200 bg-white text-slate-600 hover:bg-slate-50",
  };

  const currentVariant = variantStyles[variant];

  return (
    <div 
      className={cn(
        "mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 shadow-sm transition-colors", 
        currentVariant,
        className
      )}
    >
      {live && !icon && (
        <span className="relative flex h-2 w-2 shrink-0">
          <span className={cn("absolute inline-flex h-full w-full animate-ping rounded-full opacity-75", variant === 'premium' ? 'bg-amber-500' : variant === 'neutral' ? 'bg-slate-400' : 'bg-[#1D4ED8]')}></span>
          <span className={cn("relative inline-flex h-2 w-2 rounded-full", variant === 'premium' ? 'bg-amber-600' : variant === 'neutral' ? 'bg-slate-500' : 'bg-[#1D4ED8]')}></span>
        </span>
      )}
      {icon && (
        <span className={cn("flex items-center justify-center", live && "animate-pulse")}>
          {icon}
        </span>
      )}
      <span className="text-[14px] font-bold">{children}</span>
    </div>
  );
}
