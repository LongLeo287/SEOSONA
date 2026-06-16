"use client";

import React from "react";
import { motion } from "framer-motion";

interface GradientTracingProps {
  baseColor?: string;
  gradientColors?: [string, string, string];
  animationDuration?: number;
  strokeWidth?: number;
  className?: string;
}

export const GradientTracing: React.FC<GradientTracingProps> = ({
  baseColor = "white",
  gradientColors = ["#3BA6F1", "#00D4FF", "#3BA6F1"],
  animationDuration = 3,
  strokeWidth = 1.5,
  className = "",
}) => {
  const rawId = React.useId();
  const gradientId = `pulse-${rawId.replace(/:/g, "")}`;

  return (
    <div className={`relative w-full flex items-center ${className}`}>
      <svg
        className="w-full h-full min-h-[4px]"
        preserveAspectRatio="none"
        viewBox="0 0 1000 4"
        fill="none"
      >
        <path
          d="M0,2 L1000,2"
          stroke={baseColor}
          strokeOpacity="0.1"
          strokeWidth={strokeWidth}
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M0,2 L1000,2"
          stroke={`url(#${gradientId})`}
          strokeLinecap="round"
          strokeWidth={strokeWidth}
          vectorEffect="non-scaling-stroke"
        />
        <defs>
          <motion.linearGradient
            id={gradientId}
            gradientUnits="userSpaceOnUse"
            x1="0" x2="1000" y1="0" y2="0"
            animate={{ x1: [0, 2000], x2: [-1000, 1000] }}
            transition={{ duration: animationDuration, repeat: Infinity, ease: "linear" }}
          >
            <stop offset="0" stopColor={gradientColors[0]} stopOpacity="0" />
            <stop offset="0.5" stopColor={gradientColors[1]} />
            <stop offset="1" stopColor={gradientColors[2]} stopOpacity="0" />
          </motion.linearGradient>
        </defs>
      </svg>
    </div>
  );
};
