"use client";

import { useEffect, useRef, useState } from "react";
import type { MutableRefObject, RefObject } from "react";
import { animate } from "animejs";
import type { HeroSceneHandle } from "./HeroScene";
import type { Morph } from "morphicons/dom";
import {
  clamp,
  dampProgress,
  getHeroArcRevealProgress,
  getHeroHandoffOffset,
  getHeroMotionState,
  getHeroTransitionHeight,
  getHeroTransitionPoint,
  getHeroOrbitRadius,
  HERO_ARC_SLOTS,
  HERO_ARC_CURVE_PEAK,
  HERO_HANDOFF_COMPLETE_THRESHOLD,
  HERO_HANDOFF_RESET_THRESHOLD,
  smoothstep,
} from "./hero-motion";
import { useHeroMotionChannel } from "./HeroMotionContext";
import type {
  HeroLayoutMetrics,
  HeroMotionState,
  HeroSceneState,
  HeroTier,
} from "./hero-types";

export type HeroMotionNode = {
  startXRatio: number;
  startYRatio: number;
  depth: number;
  rotate: number;
  orbitAngle: number;
  semicircleSlot: number;
};

type UseHeroMotionOptions = {
  sectionRef: RefObject<HTMLElement | null>;
  introRef: RefObject<HTMLElement | null>;
  logoRef: RefObject<HTMLElement | null>;
  arcRef: RefObject<HTMLDivElement | null>;
  nodeRefs: MutableRefObject<(HTMLElement | null)[]>;
  nodes: HeroMotionNode[];
  sceneRef: RefObject<HeroSceneHandle | null>;
  morphRefs: MutableRefObject<(Morph | null)[]>;
  metricsRef: MutableRefObject<HeroLayoutMetrics | null>;
  tier: HeroTier;
  reducedMotion: boolean;
};

type HeroNodeParts = {
  element: HTMLElement;
  link: HTMLElement | null;
  card: HTMLElement | null;
  orbitNode: HTMLElement | null;
};

function lerp(from: number, to: number, progress: number) {
  return from + (to - from) * progress;
}

function setNodeState(
  parts: HeroNodeParts,
  node: HeroMotionNode,
  index: number,
  state: HeroMotionState,
  metrics: HeroLayoutMetrics,
  containerVisibility = 1,
) {
  const isMobile = metrics.sceneWidth < 640;
  const orbitScale = isMobile ? 0.92 : metrics.sceneWidth < 1024 ? 0.74 : 1;
  const orbitX = Math.cos(node.orbitAngle) * metrics.orbitRadius * orbitScale;
  const orbitY = Math.sin(node.orbitAngle) * metrics.orbitRadius * orbitScale;
  const arcPoint = getHeroTransitionPoint(
    metrics,
    HERO_ARC_SLOTS[node.semicircleSlot] ?? 0.5,
    state.handoffProgress,
  );
  const semicircleX = arcPoint.x;
  const semicircleY = arcPoint.y;
  const arcStage = state.progress >= 0.46;
  const preArcX = lerp(orbitX, semicircleX, state.morphProgress);
  const preArcY = lerp(orbitY, semicircleY, state.morphProgress);
  const arcRevealProgress = getHeroArcRevealProgress(state.progress);
  const slot = HERO_ARC_SLOTS[node.semicircleSlot] ?? 0.5;
  // A node follows the same left-to-right relay as the rail. It stays alive
  // while waiting, then travels continuously into its final slot during the
  // last part of the rail reveal instead of disappearing and popping in.
  const nodeRailProgress = arcStage
    ? smoothstep((arcRevealProgress - Math.max(0, slot - 0.2)) / 0.2)
    : 0;
  const targetX = arcStage ? lerp(preArcX, semicircleX, nodeRailProgress) : preArcX;
  const targetY = arcStage ? lerp(preArcY, semicircleY, nodeRailProgress) : preArcY;
  const startX = node.startXRatio * metrics.sceneWidth;
  const startY = node.startYRatio * metrics.sceneHeight;
  const x = lerp(startX, targetX, state.gatherProgress);
  const y = lerp(startY, targetY, state.gatherProgress);
  // Intro positions are intentionally expressive, but they must remain inside
  // the viewport so the cards never become clipped or create horizontal scroll.
  // The larger desktop allowance accounts for the label plus its card padding.
  const nodeHalfWidth = isMobile ? 52 : metrics.sceneWidth < 1024 ? 126 : 152;
  const nodeHalfHeight = isMobile ? 28 : 42;
  const horizontalGutter = isMobile ? 12 : 24;
  const topGutter = isMobile ? 76 : 104;
  const bottomGutter = isMobile ? 28 : 28;
  const safeX = arcStage
    ? clamp(x, -metrics.sceneWidth / 2 + 24, metrics.sceneWidth / 2 - 24)
    : clamp(
        x,
        -metrics.sceneWidth / 2 + horizontalGutter + nodeHalfWidth,
        metrics.sceneWidth / 2 - horizontalGutter - nodeHalfWidth,
      );
  const safeY = arcStage
    ? clamp(y, -metrics.sceneHeight / 2 + 28, metrics.sceneHeight / 2 - 28)
    : clamp(
        y,
        -metrics.sceneHeight / 2 + topGutter + nodeHalfHeight,
        metrics.sceneHeight / 2 - bottomGutter - nodeHalfHeight,
      );
  const scale = lerp(node.depth, 1, state.gatherProgress);
  const rotate = lerp(node.rotate, 0, state.gatherProgress);
  // Collapse the descriptive pill into the compact rail icon continuously;
  // do not switch the whole node from card to icon at the arc boundary.
  const labelProgress = isMobile
    ? smoothstep((state.progress - 0.2) / 0.2)
    : smoothstep((state.progress - 0.36) / 0.26);
  const nodeEntry = smoothstep(state.progress / 0.12);
  // Keep every node alive through the relay. Labels/cards collapse into the
  // compact icon as the node travels, preserving a visible connection from
  // its orbit position to the rail slot.
  // The static handoff layer takes ownership at one boundary. Keep the
  // dynamic node fully opaque until that switch to avoid the washed-out,
  // duplicate-looking crossfade seen during the final scroll frames.
  const nodeHandoffExit = 1;
  const { element, link, card, orbitNode } = parts;
  const depthZ = (node.depth - 0.9) * 28 * (1 - state.morphProgress * 0.55);
  const scrollTilt = arcStage || state.reducedMotion ? 0 : state.velocity * 1.1;

  element.style.opacity = isMobile && state.progress < 0.12
    ? "0"
    : String(nodeEntry * nodeHandoffExit * containerVisibility);
  element.style.pointerEvents = nodeEntry > 0.8 && nodeHandoffExit > 0.08 && containerVisibility > 0.08
    ? "auto"
    : "none";
  element.style.transform = `perspective(1000px) translate(-50%, -50%) translate3d(${safeX}px, ${safeY}px, ${depthZ}px) rotateX(${scrollTilt}deg) rotate(${rotate}deg) scale(${scale})`;

  if (link) link.style.transform = "none";
  if (card) {
    const cardOpacity = labelProgress > 0.84 ? 0 : 1 - labelProgress;
    card.style.opacity = String(cardOpacity);
    card.style.transform = `translate(-50%, -50%) scale(${lerp(1, 0.92, labelProgress)})`;
  }
  if (orbitNode) {
    const orbitOpacity = labelProgress < 0.16 ? 0 : labelProgress;
    orbitNode.style.opacity = String(orbitOpacity);
    orbitNode.style.transform = `translate(-50%, -50%) scale(${lerp(0.72, 1, labelProgress)})`;
  }
}

export function useHeroMotion({
  sectionRef,
  introRef,
  logoRef,
  arcRef,
  nodeRefs,
  nodes,
  sceneRef,
  morphRefs,
  metricsRef,
  tier,
  reducedMotion,
}: UseHeroMotionOptions) {
  const stateRef = useRef<HeroSceneState>({
    ...getHeroMotionState(0, { tier, reducedMotion }),
    metrics: null,
  });
  const [isInView, setIsInView] = useState(!reducedMotion);
  const motionChannel = useHeroMotionChannel();
  const handoffViewportRef = useRef<number | null>(null);
  const handoffFrozenRef = useRef(false);
  const handoffCompleteRef = useRef(false);
  const iconProgressRef = useRef<number[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const sceneHandle = sceneRef.current;
    const isStatic = reducedMotion || tier === "lite";
    handoffCompleteRef.current = false;
    handoffViewportRef.current = null;
    handoffFrozenRef.current = false;
    iconProgressRef.current = [];

    const measuredAnchor = document.querySelector<HTMLElement>(
      "[data-core-solutions-transition-anchor], [data-core-solutions-anchor]",
    );
    const stickyLayer = section.querySelector<HTMLElement>("[data-hero-sticky]");
    const heroBackgroundLayers = Array.from(
      section.querySelectorAll<HTMLElement>("[data-hero-background]"),
    );
    const arcPaths = arcRef.current?.querySelectorAll<SVGPathElement>("path") ?? [];
    const nodeParts = nodeRefs.current.map((element) => {
      if (!element) return null;
      return {
        element,
        link: element.querySelector<HTMLElement>("a"),
        card: element.querySelector<HTMLElement>("[data-hero-node-card]"),
        orbitNode: element.querySelector<HTMLElement>("[data-hero-node-orbit]"),
      } satisfies HeroNodeParts;
    });

    const introAnimation = reducedMotion || !introRef.current
      ? null
      : animate(introRef.current, {
          opacity: [0, 1],
          translateY: [24, 0],
          scale: [0.97, 1],
          duration: 1450,
          ease: "out(3)",
        });

    let frame: number | null = null;
    let idleTimer: number | null = null;
    let scrollActive = false;
    let lastScrollY = window.scrollY;
    let displayedProgress: number | null = null;
    let lastFrameTime = 0;

    const apply = () => {
      frame = null;
      const currentSection = sectionRef.current;
      if (!currentSection) return;
      const rect = currentSection.getBoundingClientRect();
      const total = Math.max(1, rect.height - window.innerHeight);
      const targetProgress = isStatic ? 0 : clamp(-rect.top / total);
      const now = performance.now();
      const deltaMs = lastFrameTime > 0 ? now - lastFrameTime : 0;
      lastFrameTime = now;
      displayedProgress = isStatic
        ? 0
        : displayedProgress === null
        ? targetProgress
        : dampProgress(displayedProgress, targetProgress, deltaMs);
      const progress = displayedProgress;
      const velocity = clamp((window.scrollY - lastScrollY) / 140, -1, 1);
      lastScrollY = window.scrollY;
      const state = getHeroMotionState(progress, {
        tier,
        reducedMotion,
        velocity,
        isScrolling: scrollActive,
      });
      const baseMetrics = metricsRef.current ?? {
        sceneWidth: window.innerWidth,
        sceneHeight: window.innerHeight,
        centerX: window.innerWidth / 2,
        centerY: window.innerHeight / 2,
        orbitRadius: getHeroOrbitRadius(window.innerWidth, window.innerHeight),
        arcStartX: 0,
        arcStartY: 0,
        arcEndX: window.innerWidth,
        arcEndY: 0,
        handoffBaseline: 0,
      };
      const measuredHandoffViewportY = measuredAnchor?.getBoundingClientRect().top ?? baseMetrics.handoffViewportY ?? 0;
      // Once the sticky Hero starts leaving the viewport, its DOM position and
      // the lower section's anchor no longer move at the same rate. Holding
      // the last shared anchor prevents the Hero layer from applying that
      // page-scroll delta a second time and producing duplicate ghost layers
      // during the crossfade.
      const stickyReleaseBoundary = window.innerHeight;
      if (rect.bottom > stickyReleaseBoundary) {
        handoffViewportRef.current = measuredHandoffViewportY;
        handoffFrozenRef.current = false;
      } else if (!handoffFrozenRef.current || handoffViewportRef.current === null) {
        handoffViewportRef.current = measuredHandoffViewportY;
        handoffFrozenRef.current = true;
      }
      const handoffViewportY = rect.bottom > stickyReleaseBoundary
        ? measuredHandoffViewportY
        : handoffViewportRef.current ?? measuredHandoffViewportY;
      const metrics: HeroLayoutMetrics = {
        ...baseMetrics,
        // This is intentionally sampled with the same frame as scroll
        // progress so the Hero and CoreSolutions use one moving coordinate
        // system during the handoff.
        handoffViewportY,
      };
      // The Hero and CoreSolutions share a short, geometry-matched relay.
      // During this window both owners settle toward the same anchor instead
      // of switching at one hard frame or leaving a visible gap.
      // The static handoff layer uses the same relay progress, keeping the
      // line, logo and nodes visually connected while ownership changes.
      // Publish and apply the same damped relay value that drives the rest of
      // the Hero. CoreSolutions consumes this signal, so it cannot race the
      // Hero with a second raw-scroll threshold while the page is moving.
      const handoffRelayProgress = state.handoffProgress;
      if (!isStatic) {
        if (handoffCompleteRef.current) {
          if (handoffRelayProgress <= HERO_HANDOFF_RESET_THRESHOLD) {
            handoffCompleteRef.current = false;
          }
        } else if (handoffRelayProgress >= HERO_HANDOFF_COMPLETE_THRESHOLD) {
          handoffCompleteRef.current = true;
        }
      }
      const handoffComplete = isStatic ? false : handoffCompleteRef.current;
      // Keep the active composition fully opaque through the relay. At the
      // settled boundary ownership changes in one frame; there is no fade-out
      // and no partially transparent gap between the two owners.
      const heroVisibility = handoffComplete ? 0 : 1;
      const stickyBackgroundVisibility = rect.bottom > window.innerHeight ? 1 : 0;
      if (stickyLayer) {
        // The sticky Hero can leave the viewport before ownership switches.
        // Release only its white canvas at that boundary so CoreSolutions is
        // readable immediately, while the rail still completes its exact
        // handoff window without being hidden by the lower section background.
        stickyLayer.style.backgroundColor = stickyBackgroundVisibility ? "rgb(255 255 255)" : "transparent";
        heroBackgroundLayers.forEach((layer) => {
          layer.style.opacity = String(stickyBackgroundVisibility);
        });
      }
      const transitionHeight = getHeroTransitionHeight(metrics);
      const arcTop = metrics.centerY
        + getHeroHandoffOffset(metrics, state.handoffProgress)
        - (HERO_ARC_CURVE_PEAK / 240) * transitionHeight;
      const arcRevealProgress = getHeroArcRevealProgress(state.progress);
      if (arcRef.current) {
        arcRef.current.style.top = `${arcTop}px`;
        arcRef.current.style.height = `${transitionHeight}px`;
        arcRef.current.style.opacity = state.progress >= 0.46 ? String(heroVisibility) : "0";
        arcPaths.forEach((path) => {
          path.style.strokeDashoffset = String(1 - arcRevealProgress);
        });
      }

      stateRef.current = { ...state, metrics };
      currentSection.dataset.heroMotionProgress = progress.toFixed(4);
      currentSection.dataset.heroHandoffProgress = (handoffComplete ? 1 : handoffRelayProgress).toFixed(4);
      currentSection.dataset.heroMotionMode = "damped";
      currentSection.dataset.heroPhase = state.phase;
      currentSection.dataset.heroStatic = String(isStatic);
      motionChannel?.publish({
        // Lite/reduced-motion Hero has no scroll choreography. Publish the
        // completed handoff to the next section so a short static Hero does
        // not leave CoreSolutions transparent when it enters the viewport.
        progress: isStatic ? 1 : state.progress,
        phase: isStatic ? "complete" : state.phase,
        handoffProgress: isStatic || handoffComplete ? 1 : state.handoffProgress,
      });
      if (introRef.current) {
        const introProgress = smoothstep(state.progress / 0.16);
        introRef.current.style.opacity = String(1 - introProgress);
        introRef.current.style.transform = `translate3d(0, ${lerp(0, -60, introProgress)}px, 0) scale(${lerp(1, 0.97, introProgress)})`;
        introRef.current.style.pointerEvents = introProgress < 0.8 ? "auto" : "none";
      }
      if (logoRef.current) {
        const logoEntry = smoothstep(state.progress / 0.16);
        const logoArcPoint = getHeroTransitionPoint(metrics, 0.5, state.handoffProgress);
        // The logo remains present and follows the same rail handoff. It does
        // not disappear while waiting for the reveal to reach its apex; the
        // last portion of the rail simply eases it from the center anchor to
        // the exact apex coordinate.
        const logoRailProgress = state.progress >= 0.46
          ? smoothstep((arcRevealProgress - 0.24) / 0.26)
          : 0;
        const logoRailX = lerp(0, logoArcPoint.x, logoRailProgress);
        const logoRailY = lerp(0, logoArcPoint.y, logoRailProgress);
        const logoScale = lerp(1, 0.8, logoRailProgress);
        logoRef.current.style.opacity = String(
          (isStatic ? 1 : logoEntry) * heroVisibility,
        );
        logoRef.current.style.transform = isStatic
          ? "translate(-50%, -50%)"
          : `translate(-50%, -50%) translate3d(${logoRailX}px, ${logoRailY}px, 0) scale(${logoScale})`;
      }
      nodeParts.forEach((parts, index) => {
        const node = nodes[index];
        if (parts && node) {
          setNodeState(parts, node, index, state, metrics, heroVisibility);
        }
        if (morphRefs.current[index]) {
          // Keep the icon recognisable during the long intro/gather phase.
          // Lite and reduced-motion tiers remain fully static and complete.
          const iconProgress = state.reducedMotion || state.tier === "lite"
            ? 1
            : Math.max(0.28, state.morphProgress);
          const previousIconProgress = iconProgressRef.current[index];
          if (
            previousIconProgress === undefined ||
            iconProgress === 1 ||
            Math.abs(iconProgress - previousIconProgress) >= 0.01
          ) {
            morphRefs.current[index]!.progress = iconProgress;
            iconProgressRef.current[index] = iconProgress;
          }
        }
      });

      const stillInHero = rect.bottom > 0 && rect.top < window.innerHeight;
      if (stillInHero) {
        sceneRef.current?.render(stateRef.current);
        if (!isStatic && (scrollActive || Math.abs(targetProgress - progress) > 0.0015)) {
          frame = window.requestAnimationFrame(apply);
        } else {
          sceneRef.current?.pause();
        }
      } else {
        sceneRef.current?.pause();
      }
    };

    const schedule = () => {
      scrollActive = true;
      if (idleTimer !== null) window.clearTimeout(idleTimer);
      idleTimer = window.setTimeout(() => {
        scrollActive = false;
        idleTimer = null;
      }, 160);
      if (frame === null) frame = window.requestAnimationFrame(apply);
    };

    const observer = typeof IntersectionObserver === "undefined"
      ? null
      : new IntersectionObserver(([entry]) => {
          setIsInView(!reducedMotion && Boolean(entry?.isIntersecting));
          if (entry?.isIntersecting) schedule();
          else {
            sceneRef.current?.pause();
            if (isStatic) {
              const boundaryProgress = entry?.boundingClientRect.bottom <= 0 ? 1 : 0;
              motionChannel?.publish({
                progress: boundaryProgress,
                phase: boundaryProgress ? "complete" : "intro",
                handoffProgress: boundaryProgress,
              });
            }
          }
        }, { threshold: 0.01 });
    observer?.observe(section);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    schedule();

    return () => {
      observer?.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame !== null) window.cancelAnimationFrame(frame);
      if (idleTimer !== null) window.clearTimeout(idleTimer);
      sceneHandle?.destroy();
      introAnimation?.pause();
    };
  }, [arcRef, introRef, logoRef, metricsRef, motionChannel, morphRefs, nodeRefs, nodes, reducedMotion, sceneRef, sectionRef, tier]);

  return { isInView, stateRef };
}
