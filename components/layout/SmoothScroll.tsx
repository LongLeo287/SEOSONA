"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { SEOSONA_SCROLL_TO_EVENT, type ScrollRequest } from "@/lib/scroll";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (prefersReducedMotion.matches) return;

    const hasCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    const isTouchPrimary =
      hasCoarsePointer || (navigator.maxTouchPoints > 0 && !hasFinePointer);

    // Let iOS Safari and other touch-primary browsers own native scrolling.
    // This avoids adding a second touch listener and an idle RAF loop to the
    // browser's already optimized compositor scroll path.
    if (isTouchPrimary) return;

    const connection = (navigator as Navigator & {
      connection?: {
        effectiveType?: string;
        saveData?: boolean;
      };
    }).connection;
    const hasConstrainedDevice =
      (navigator.hardwareConcurrency ?? 8) <= 4 ||
      ((navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 8) <= 4;
    const hasConstrainedNetwork =
      connection?.saveData === true ||
      connection?.effectiveType === "slow-2g" ||
      connection?.effectiveType === "2g";

    // Keep a small easing tail without making wheel input feel delayed. A
    // higher lerp settles in fewer frames, which also prevents the Hero and
    // Lenis from continuing to process stale wheel input after the gesture.
    const scrollLerp = hasConstrainedDevice || hasConstrainedNetwork ? 0.16 : 0.12;

    const lenis = new Lenis({
      smoothWheel: true,
      // Lerp gives wheel/trackpad input a responsive, frame-independent tail.
      // A long duration restarts a fixed animation on every wheel event and
      // feels sticky, so the scroll tail is tuned through lerp instead.
      lerp: scrollLerp,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      orientation: "vertical",
      gestureOrientation: "vertical",
      wheelMultiplier: 1,
      touchMultiplier: 1,
    });

    let frame: number | null = null;

    const startRaf = () => {
      if (frame !== null) return;
      frame = requestAnimationFrame(raf);
    };

    const onScrollRequest = (event: Event) => {
      const scrollEvent = event as CustomEvent<ScrollRequest>;
      const { target, offset = 0, immediate = false, duration } = scrollEvent.detail;

      lenis.scrollTo(target, {
        offset,
        immediate,
        ...(duration === undefined ? {} : { duration }),
      });
      startRaf();
      scrollEvent.preventDefault();
    };

    // Lenis installs its own non-passive wheel handler. This lightweight
    // passive listener only wakes the RAF scheduler after wheel input.
    const onWheel = () => startRaf();

    window.addEventListener(SEOSONA_SCROLL_TO_EVENT, onScrollRequest);
    window.addEventListener("wheel", onWheel, { passive: true });

    const raf = (time: number) => {
      frame = null;
      lenis.raf(time);
      if (lenis.isScrolling) startRaf();
    };

    // Prime Lenis once, then remain idle until input or a programmatic scroll.
    startRaf();

    return () => {
      if (frame !== null) cancelAnimationFrame(frame);
      window.removeEventListener(SEOSONA_SCROLL_TO_EVENT, onScrollRequest);
      window.removeEventListener("wheel", onWheel);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
