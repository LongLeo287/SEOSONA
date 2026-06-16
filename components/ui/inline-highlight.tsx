"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface InlineHighlightProps {
  children: React.ReactNode;
  highlightColor?: string;
  textColor?: string;
  className?: string;
  delay?: number;
}

export function InlineHighlight({
  children,
  highlightColor = "#ff5e3a",
  textColor = "inherit",
  className,
  delay = 0,
}: InlineHighlightProps) {
  return (
    <span
      className={cn("relative inline-block", className)}
      style={{ color: textColor }}
    >
      <motion.span
        initial={{ color: textColor }}
        whileInView={{ color: highlightColor }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.5, ease: "easeInOut", delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}
