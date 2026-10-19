"use client";

import { createContext, useCallback, useContext, useRef } from "react";
import type { ReactNode } from "react";
import type { HeroMotionState } from "./hero-types";

export type HeroMotionSignal = Pick<HeroMotionState, "progress" | "phase" | "handoffProgress">;
type Listener = (signal: HeroMotionSignal) => void;

type HeroMotionChannel = {
  publish: (signal: HeroMotionSignal) => void;
  subscribe: (listener: Listener) => () => void;
};

const HeroMotionChannelContext = createContext<HeroMotionChannel | null>(null);

export function HeroMotionProvider({ children }: { children: ReactNode }) {
  const signalRef = useRef<HeroMotionSignal>({ progress: 0, phase: "intro", handoffProgress: 0 });
  const listenersRef = useRef(new Set<Listener>());

  const publish = useCallback((signal: HeroMotionSignal) => {
    signalRef.current = signal;
    listenersRef.current.forEach((listener) => listener(signal));
  }, []);

  const subscribe = useCallback((listener: Listener) => {
    listenersRef.current.add(listener);
    listener(signalRef.current);
    return () => listenersRef.current.delete(listener);
  }, []);

  return (
    <HeroMotionChannelContext.Provider value={{ publish, subscribe }}>
      {children}
    </HeroMotionChannelContext.Provider>
  );
}

export function useHeroMotionChannel() {
  return useContext(HeroMotionChannelContext);
}
