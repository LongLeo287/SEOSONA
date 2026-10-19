"use client";
import { motion } from "motion/react";
import React, { useMemo, useRef } from "react";
import { cn } from "@/lib/utils";
import { useIsInView } from "@/components/ui/use-is-in-view";
import { useStableReducedMotion } from "@/components/ui/use-stable-reduced-motion";

export type TextShimmerProps = {
  children: string;
  as?: "span" | "p" | "div";
  className?: string;
  duration?: number;
  spread?: number;
};

const motionComponents = {
  div: motion.div,
  p: motion.p,
  span: motion.span,
};

function TextShimmerComponent({
  children,
  as: Component = "p",
  className,
  duration = 2,
  spread = 2,
}: TextShimmerProps) {
  const MotionComponent = motionComponents[Component] ?? motion.span;
  const shimmerRef = useRef<HTMLDivElement>(null);
  const isInView = useIsInView(shimmerRef, { rootMargin: "120px 0px", threshold: 0.01 });
  const reduceMotion = useStableReducedMotion();
  const shouldAnimate = isInView && !reduceMotion;

  const dynamicSpread = useMemo(() => {
    return children.length * spread;
  }, [children, spread]);

  return (
    <MotionComponent
      ref={shimmerRef as React.Ref<HTMLDivElement>}
      animate={shouldAnimate ? { backgroundPosition: "0% center" } : { backgroundPosition: "100% center" }}
      className={cn(
        "relative inline-block bg-[length:250%_100%,auto] bg-clip-text",
        "text-transparent [--base-color:#a1a1aa] [--base-gradient-color:#000]",
        "[--bg:linear-gradient(90deg,#0000_calc(50%-var(--spread)),var(--base-gradient-color),#0000_calc(50%+var(--spread)))] [background-repeat:no-repeat,padding-box]",
        "dark:[--base-color:#71717a] dark:[--base-gradient-color:#ffffff] dark:[--bg:linear-gradient(90deg,#0000_calc(50%-var(--spread)),var(--base-gradient-color),#0000_calc(50%+var(--spread)))]",
        className
      )}
      initial={{ backgroundPosition: "100% center" }}
      style={
        {
          "--spread": `${dynamicSpread}px`,
          backgroundImage:
            "var(--bg), linear-gradient(var(--base-color), var(--base-color))",
        } as React.CSSProperties
      }
      transition={shouldAnimate ? {
        repeat: Number.POSITIVE_INFINITY,
        duration,
        ease: "linear",
      } : { duration: 0 }}
    >
      {children}
    </MotionComponent>
  );
}

export const TextShimmer = React.memo(TextShimmerComponent);
