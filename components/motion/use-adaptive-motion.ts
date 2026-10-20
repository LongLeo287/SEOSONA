"use client";

import { useCallback, useEffect, useRef, useSyncExternalStore } from "react";
import { DEFAULT_ADAPTIVE_MOTION_SNAPSHOT, type AdaptiveMotionListener, type AdaptiveMotionSubscription, type AdaptiveMotionSubscriptionOptions } from "@/lib/adaptive-motion";
import { useAdaptiveMotionRuntime } from "./AdaptiveMotionProvider";

export function useAdaptiveMotion() {
  const runtime = useAdaptiveMotionRuntime();
  const subscribeSnapshot = useCallback(
    (listener: () => void) => runtime?.subscribeSnapshot(listener) ?? (() => undefined),
    [runtime],
  );
  const getSnapshot = useCallback(
    () => runtime?.getSnapshot() ?? DEFAULT_ADAPTIVE_MOTION_SNAPSHOT,
    [runtime],
  );
  const snapshot = useSyncExternalStore(
    subscribeSnapshot,
    getSnapshot,
    () => DEFAULT_ADAPTIVE_MOTION_SNAPSHOT,
  );
  const subscribe = useCallback(
    (listener: AdaptiveMotionListener, options?: AdaptiveMotionSubscriptionOptions) =>
      runtime?.subscribe(listener, options) ?? {
        setActive: () => undefined,
        setVisible: () => undefined,
        unsubscribe: () => undefined,
      },
    [runtime],
  );

  return { snapshot, subscribe, runtime };
}

export function useAdaptiveInterval(
  callback: () => void,
  intervalMs: number,
  options: AdaptiveMotionSubscriptionOptions & { enabled?: boolean } = {},
) {
  const { snapshot, subscribe } = useAdaptiveMotion();
  const callbackRef = useRef(callback);
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const enabled = options.enabled !== false;
  const active = options.active;
  const element = options.element;

  useEffect(() => {
    if (!enabled) return;
    let elapsed = 0;
    const subscription: AdaptiveMotionSubscription = subscribe(
      ({ delta, snapshot: tickSnapshot }) => {
        if (tickSnapshot.mode === "paused") return;
        elapsed += Math.max(0, delta);
        const multiplier = tickSnapshot.mode === "lite" ? 1.6 : tickSnapshot.mode === "balanced" ? 1.15 : 1;
        if (elapsed < intervalMs * multiplier) return;
        elapsed = 0;
        callbackRef.current();
      },
      { active, element },
    );
    return () => subscription.unsubscribe();
  }, [active, element, enabled, intervalMs, subscribe]);

  return snapshot;
}

