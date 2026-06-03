import * as React from "react";
import { cn } from "@/lib/utils";
import { Info, AlertCircle, CheckCircle2 } from "lucide-react";

export interface TextFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  state?: "default" | "error" | "success";
  isRequired?: boolean;
}

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      className,
      label,
      helperText,
      leftIcon,
      rightIcon,
      state = "default",
      isRequired,
      ...props
    },
    ref
  ) => {
    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && (
          <label className="flex items-center gap-1 text-sm font-medium text-slate-700">
            {label}
            {isRequired && <span className="text-teampal-error">*</span>}
            <Info size={14} className="text-slate-400 ml-1 cursor-help" />
          </label>
        )}
        
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 flex items-center justify-center">
              {leftIcon}
            </div>
          )}
          
          <input
            className={cn(
              "flex h-10 w-full rounded-m border bg-white px-3 py-2 text-sm text-slate-900 transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50",
              {
                "border-teampal-neutral/20 focus-visible:ring-teampal-brand/30 focus-visible:border-teampal-brand": state === "default",
                "border-teampal-error/50 focus-visible:ring-teampal-error/30 focus-visible:border-teampal-error text-teampal-error": state === "error",
                "border-teampal-success/50 focus-visible:ring-teampal-success/30 focus-visible:border-teampal-success text-teampal-success": state === "success",
              },
              leftIcon && "pl-10",
              rightIcon && "pr-10",
              className
            )}
            ref={ref}
            {...props}
          />
          
          {rightIcon && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 flex items-center justify-center">
              {rightIcon}
            </div>
          )}
        </div>

        {helperText && (
          <p
            className={cn("text-[13px] flex items-center gap-1.5 mt-0.5", {
              "text-slate-500": state === "default",
              "text-teampal-error font-medium": state === "error",
              "text-teampal-success font-medium": state === "success",
            })}
          >
            {state === "error" && <AlertCircle size={14} />}
            {state === "success" && <CheckCircle2 size={14} />}
            {helperText}
          </p>
        )}
      </div>
    );
  }
);
TextField.displayName = "TextField";

export { TextField };
