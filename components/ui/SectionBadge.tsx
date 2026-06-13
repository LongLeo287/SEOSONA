import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionBadgeProps {
  children: ReactNode;
  icon?: ReactNode;
  live?: boolean;
  className?: string;
}

export function SectionBadge({ children, icon, live = true, className }: SectionBadgeProps) {
  return (
    <div 
      className={cn(
        "mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-[#F0F6FF] px-4 py-1.5 shadow-sm transition-colors hover:bg-blue-50", 
        className
      )}
    >
      {icon && (
        <span className={cn("flex items-center justify-center text-[#3BA6F1]", live && "animate-pulse")}>
          {icon}
        </span>
      )}
      <span className="text-[14px] font-bold text-[#3BA6F1]">{children}</span>
    </div>
  );
}
