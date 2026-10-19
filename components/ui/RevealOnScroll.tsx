"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import { useStableReducedMotion } from "@/components/ui/use-stable-reduced-motion";

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
  const reduceMotion = useStableReducedMotion();
  const directionVariants = {
    up: { y: 32, opacity: 0 },
    left: { x: -32, opacity: 0 },
    right: { x: 32, opacity: 0 },
    none: { opacity: 0 },
  };

  const initialVariant = directionVariants[direction] || directionVariants.up;

  return (
    <motion.div
      initial={reduceMotion ? false : initialVariant}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ 
        duration: reduceMotion ? 0 : 0.55,
        ease: "easeOut", 
        delay: reduceMotion ? 0 : Math.min(delay / 1000, 0.25)
      }}
      className={clsx("will-change-transform", className)}
    >
      {children}
    </motion.div>
  );
}
