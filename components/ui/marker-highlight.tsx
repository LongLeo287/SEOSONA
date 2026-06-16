"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface MarkerHighlightProps {
  children: React.ReactNode;
  markerColor?: string;
  textColor?: string;
  highlightedTextColor?: string;
  className?: string;
  delay?: number;
}

export function MarkerHighlight({
  children,
  markerColor = "#facc15",
  textColor = "inherit",
  highlightedTextColor = "inherit",
  className,
  delay = 0,
}: MarkerHighlightProps) {
  return (
    <span
      className={cn("relative inline-block whitespace-nowrap", className)}
      style={{ color: textColor }}
    >
      <motion.span
        aria-hidden="true"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.5, ease: "easeOut", delay }}
        style={{
          position: "absolute",
          inset: "0 -0.1em",
          background: markerColor,
          transformOrigin: "left center",
          zIndex: 0,
          borderRadius: "0.15em",
        }}
      />
      <motion.span
        initial={{ color: textColor }}
        whileInView={{ color: highlightedTextColor }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.3, delay: delay + 0.2 }}
        style={{ position: "relative", zIndex: 1 }}
      >
        {children}
      </motion.span>
    </span>
  );
}
