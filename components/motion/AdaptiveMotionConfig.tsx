"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";
import { useAdaptiveMotion } from "./use-adaptive-motion";

/**
 * Applies the runtime's motion policy to every Framer Motion descendant.
 * Lite/paused modes keep layout and content intact while removing expensive
 * transform/opacity choreography from weak, background, or constrained states.
 */
export function AdaptiveMotionConfig({ children }: { children: ReactNode }) {
  const { snapshot } = useAdaptiveMotion();
  const reducedMotion = snapshot.mode === "lite" || snapshot.mode === "paused" ? "always" : "user";

  return <MotionConfig reducedMotion={reducedMotion}>{children}</MotionConfig>;
}
