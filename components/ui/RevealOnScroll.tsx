"use client";

import { motion } from "framer-motion";
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
  const directionVariants = {
    up: { y: 32, opacity: 0 },
    left: { x: -32, opacity: 0 },
    right: { x: 32, opacity: 0 },
    none: { opacity: 0 },
  };

  const initialVariant = directionVariants[direction] || directionVariants.up;

  return (
    <motion.div
      initial={initialVariant}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ 
        duration: 0.7, 
        ease: "easeOut", 
        delay: delay / 1000 
      }}
      className={clsx("will-change-transform", className)}
    >
      {children}
    </motion.div>
  );
}
