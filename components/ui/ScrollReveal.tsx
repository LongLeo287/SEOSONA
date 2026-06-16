"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Animation direction: 'up' | 'left' | 'right' | 'scale' */
  direction?: "up" | "left" | "right" | "scale";
  /** Once visible, stay visible */
  once?: boolean;
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -20px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  const baseStyle: React.CSSProperties = {
    transitionProperty: "opacity, transform",
    transitionDuration: "600ms",
    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
    transitionDelay: `${delay}ms`,
  };

  const hiddenTransforms: Record<string, string> = {
    up: "translateY(20px)",
    left: "translateX(-20px)",
    right: "translateX(20px)",
    scale: "scale(0.97)",
  };

  const visibleStyle: React.CSSProperties = {
    ...baseStyle,
    opacity: 1,
    transform: "translateY(0) translateX(0) scale(1)",
  };

  const hiddenStyle: React.CSSProperties = {
    ...baseStyle,
    opacity: 0,
    transform: hiddenTransforms[direction] || "translateY(32px)",
  };

  return (
    <div
      ref={ref}
      className={className}
      style={isVisible ? visibleStyle : hiddenStyle}
    >
      {children}
    </div>
  );
}
