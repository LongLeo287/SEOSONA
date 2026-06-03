import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-m font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teampal-brand disabled:pointer-events-none disabled:opacity-50 gap-2 active:scale-[0.98] will-change-transform",
  {
    variants: {
      variant: {
        brand:
          "bg-teampal-brand text-white shadow-sm hover:bg-teampal-brand/90 hover:shadow-[0_4px_4px_-2px_rgba(21,94,239,0.3)]",
        neutral:
          "border border-teampal-neutral/20 bg-white text-slate-800 shadow-sm hover:bg-slate-50 hover:border-teampal-neutral/30",
        success:
          "border border-teampal-success/20 bg-teampal-success/10 text-teampal-success hover:bg-teampal-success/20",
        error:
          "border border-teampal-error/20 bg-teampal-error/10 text-teampal-error hover:bg-teampal-error/20",
      },
      size: {
        L: "h-12 px-6 text-base",
        M: "h-10 px-5 text-sm",
        S: "h-8 px-4 text-sm",
        XS: "h-6 px-3 text-xs gap-1",
      },
    },
    defaultVariants: {
      variant: "brand",
      size: "M",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, leftIcon, rightIcon, children, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
