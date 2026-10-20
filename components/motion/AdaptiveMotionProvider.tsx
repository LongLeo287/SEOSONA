"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import {
  getAdaptiveMotionRuntime,
  type AdaptiveMotionRuntime,
} from "@/lib/adaptive-motion";

const AdaptiveMotionRuntimeContext = createContext<AdaptiveMotionRuntime | null>(null);

export function AdaptiveMotionProvider({ children }: { children: ReactNode }) {
  const [runtime, setRuntime] = useState<AdaptiveMotionRuntime | null>(null);

  useEffect(() => {
    const instance = getAdaptiveMotionRuntime();
    if (!instance) return;
    queueMicrotask(() => setRuntime(instance));
  }, []);

  return (
    <AdaptiveMotionRuntimeContext.Provider value={runtime}>
      {children}
    </AdaptiveMotionRuntimeContext.Provider>
  );
}

export function useAdaptiveMotionRuntime() {
  return useContext(AdaptiveMotionRuntimeContext);
}
