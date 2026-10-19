"use client";

import { useEffect, useRef } from "react";
import type { RefObject } from "react";
import type { HeroLayoutMetrics } from "./hero-types";
import { getHeroOrbitRadius } from "./hero-motion";

export function useHeroTransitionMetrics(heroRef: RefObject<HTMLElement | null>) {
  const metricsRef = useRef<HeroLayoutMetrics | null>(null);

  useEffect(() => {
    let frame: number | null = null;
    const hero = heroRef.current;

    const measure = () => {
      frame = null;
      const heroElement = heroRef.current;
      const anchor = document.querySelector<HTMLElement>(
        "[data-core-solutions-transition-anchor], [data-core-solutions-anchor]",
      );
      if (!heroElement || !anchor) return;

      const heroRect = heroElement.getBoundingClientRect();
      const anchorRect = anchor.getBoundingClientRect();
      const sceneWidth = Math.max(1, heroRect.width);
      const sceneHeight = Math.max(1, window.innerHeight);
      const centerX = sceneWidth / 2;
      const centerY = sceneHeight / 2;
      const orbitRadius = getHeroOrbitRadius(sceneWidth, sceneHeight);

      metricsRef.current = {
        sceneWidth,
        sceneHeight,
        centerX,
        centerY,
        orbitRadius,
        arcStartX: anchorRect.left - heroRect.left,
        arcStartY: anchorRect.top - heroRect.top,
        arcEndX: anchorRect.right - heroRect.left,
        arcEndY: anchorRect.bottom - heroRect.top,
        handoffBaseline: anchorRect.top - heroRect.top,
        handoffViewportY: anchorRect.top,
      };
    };

    const scheduleMeasure = () => {
      if (frame !== null) return;
      frame = window.requestAnimationFrame(measure);
    };

    const observer = typeof ResizeObserver === "undefined" ? null : new ResizeObserver(scheduleMeasure);
    if (hero) observer?.observe(hero);
    const anchor = document.querySelector<HTMLElement>(
      "[data-core-solutions-transition-anchor], [data-core-solutions-anchor]",
    );
    if (anchor) observer?.observe(anchor);

    window.addEventListener("resize", scheduleMeasure, { passive: true });
    window.addEventListener("orientationchange", scheduleMeasure, { passive: true });
    document.fonts?.ready.then(scheduleMeasure).catch(() => undefined);
    scheduleMeasure();

    return () => {
      observer?.disconnect();
      window.removeEventListener("resize", scheduleMeasure);
      window.removeEventListener("orientationchange", scheduleMeasure);
      if (frame !== null) window.cancelAnimationFrame(frame);
    };
  }, [heroRef]);

  return metricsRef;
}
