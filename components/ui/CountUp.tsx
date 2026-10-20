"use client";

import { useEffect, useRef, useState } from "react";
import { useAdaptiveMotion } from "@/components/motion/use-adaptive-motion";

interface CountUpProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export function CountUp({
  end,
  suffix = "",
  prefix = "",
  duration = 1800,
  className = ""
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const { snapshot, subscribe } = useAdaptiveMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    const constrained = snapshot.capabilities.reducedMotion || snapshot.mode === "lite" || snapshot.mode === "paused";
    if (constrained) {
      return;
    }

    const startTime = performance.now();
    const subscription = subscribe(({ timestamp }) => {
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * end));
      if (progress >= 1) subscription.setActive(false);
    }, { element: ref.current, active: true });

    return () => subscription.unsubscribe();
  }, [started, end, duration, snapshot.capabilities.reducedMotion, snapshot.mode, subscribe]);

  const constrained = snapshot.capabilities.reducedMotion || snapshot.mode === "lite" || snapshot.mode === "paused";

  return (
    <span ref={ref} className={className}>
      {prefix}{(constrained ? end : count).toLocaleString("vi-VN")}{suffix}
    </span>
  );
}
