"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

interface RevealOnScrollProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right" | "none";
}

export function RevealOnScroll({
  children,
  delay = 0,
  className = "",
  direction = "up"
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const hiddenClasses = {
    up: "opacity-0 translate-y-8",
    left: "opacity-0 -translate-x-8",
    right: "opacity-0 translate-x-8",
    none: "opacity-0"
  };

  return (
    <div
      ref={ref}
      className={clsx(
        className,
        "transition-all duration-700 ease-out will-change-transform",
        visible ? "opacity-100 translate-y-0 translate-x-0" : hiddenClasses[direction]
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
