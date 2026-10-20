"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Morph } from "morphicons/dom";
import { HeroContent } from "@/components/hero/HeroContent";
import { HeroNode } from "@/components/hero/HeroNode";
import { heroNodes } from "@/components/hero/hero-nodes";
import { HeroScene, type HeroSceneHandle } from "@/components/hero/HeroScene";
import { StrategyCore } from "@/components/hero/StrategyCore";
import { HERO_ARC_PATH } from "@/components/hero/hero-motion";
import { getHeroDeviceTier, readHeroCapabilityInput } from "@/components/hero/hero-device-tier";
import type { HeroTier } from "@/components/hero/hero-types";
import { useHeroMotion } from "@/components/hero/useHeroMotion";
import { useHeroTransitionMetrics } from "@/components/hero/useHeroTransitionMetrics";
import { useStableReducedMotion } from "@/components/ui/use-stable-reduced-motion";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const arcRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HeroSceneHandle>(null);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const morphRefs = useRef<(Morph | null)[]>([]);
  // Start conservatively so touch-primary/limited devices never download the
  // Pixi runtime during the first client effect before capability detection.
  // Fine-pointer desktop devices promote to `full` on the next frame.
  const [tier, setTier] = useState<HeroTier>("lite");
  const [sceneError, setSceneError] = useState(false);
  const reducedMotion = useStableReducedMotion();
  const metricsRef = useHeroTransitionMetrics(sectionRef);
  const effectiveTier = sceneError ? "lite" : tier;
  const { isInView } = useHeroMotion({
    sectionRef,
    introRef,
    logoRef,
    arcRef,
    nodeRefs,
    morphRefs,
    nodes: heroNodes,
    sceneRef,
    metricsRef,
    tier: effectiveTier,
    reducedMotion,
  });

  useEffect(() => {
    const promote = () => {
      const capability = readHeroCapabilityInput();
      setTier(getHeroDeviceTier(capability));
    };
    const idleWindow = window as Window & {
      requestIdleCallback?: (callback: () => void, options?: { timeout: number }) => number;
      cancelIdleCallback?: (handle: number) => void;
    };
    if (idleWindow.requestIdleCallback) {
      const handle = idleWindow.requestIdleCallback(promote, { timeout: 1200 });
      return () => idleWindow.cancelIdleCallback?.(handle);
    }
    const fallback = window.setTimeout(promote, 250);
    return () => window.clearTimeout(fallback);
  }, []);

  const handleSceneError = useCallback(() => {
    setSceneError(true);
  }, []);

  return (
    <section
      ref={sectionRef}
      data-hero-root
      data-motion-active={isInView ? "true" : "false"}
      data-hero-tier={effectiveTier}
      data-hero-static={reducedMotion || effectiveTier === "lite" ? "true" : "false"}
      data-hero-phase="intro"
      data-progress-owner="hero"
      // Keep enough scroll distance for the staged hero timeline. At 160vh a
      // normal wheel step can skip from orbit to handoff in one gesture.
      className="relative h-[220vh] data-[hero-static=true]:h-screen overflow-x-clip bg-transparent"
    >
      <div data-hero-sticky className="sticky top-0 z-10 flex h-screen items-center justify-center overflow-hidden bg-white pb-16 pt-20 [perspective:1200px] sm:pb-24 sm:pt-0">
        <div
          aria-hidden="true"
          data-hero-background
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#04091A0A_1px,transparent_1px),linear-gradient(to_bottom,#04091A0A_1px,transparent_1px)] bg-[size:24px_24px]"
        />
        <div
          aria-hidden="true"
          data-hero-background
          className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white to-transparent"
        />
        <div
          aria-hidden="true"
          data-hero-background
          className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent"
        />

        <HeroScene
          ref={sceneRef}
          tier={effectiveTier}
          reducedMotion={reducedMotion}
          className="z-0"
          onError={handleSceneError}
        />

        <div
          ref={arcRef}
          data-hero-arc
          aria-hidden="true"
          className="pointer-events-none absolute left-0 z-10 w-full overflow-visible"
          style={{ opacity: 0, height: 0, top: 0, willChange: "top, height, opacity" }}
        >
          <svg className="h-full w-full overflow-visible" viewBox="0 0 1000 240" preserveAspectRatio="none">
            <defs>
              <linearGradient id="heroArcGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#93C5FD" stopOpacity="0" />
                <stop offset="28%" stopColor="#60A5FA" stopOpacity="0.34" />
                <stop offset="50%" stopColor="#2563EB" stopOpacity="0.72" />
                <stop offset="72%" stopColor="#60A5FA" stopOpacity="0.34" />
                <stop offset="100%" stopColor="#93C5FD" stopOpacity="0" />
              </linearGradient>
              <filter id="heroArcBlur" x="-20%" y="-60%" width="140%" height="220%">
                <feGaussianBlur stdDeviation="8" />
              </filter>
            </defs>
            <path
              data-hero-arc-glow
              d={HERO_ARC_PATH}
              pathLength={1}
              fill="none"
              stroke="url(#heroArcGlow)"
              strokeWidth="18"
              filter="url(#heroArcBlur)"
              strokeDasharray="1"
              strokeDashoffset="1"
            />
            <path
              data-hero-arc-line
              d={HERO_ARC_PATH}
              pathLength={1}
              fill="none"
              stroke="url(#heroArcGlow)"
              strokeWidth="3"
              strokeDasharray="1"
              strokeDashoffset="1"
            />
          </svg>
        </div>

        <HeroContent
          introRef={(element) => {
            introRef.current = element;
          }}
          isInView={isInView}
          reducedMotion={reducedMotion || effectiveTier === "lite"}
        />

        <StrategyCore ref={logoRef} style={{ opacity: 0 }} />

        <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 h-0 w-0">
          {heroNodes.map((node, index) => (
            <HeroNode
              key={node.label}
              label={node.label}
              href={node.href}
              color={node.color}
              iconPath={node.iconPath}
              setRef={(element) => {
                nodeRefs.current[index] = element;
              }}
              setMorphRef={(morph) => {
                morphRefs.current[index] = morph;
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
