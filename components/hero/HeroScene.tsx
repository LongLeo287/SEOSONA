"use client";

import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { HeroFallback } from "./HeroFallback";
import { getHeroMotionState, progressBetween } from "./hero-motion";
import type { HeroSceneState, HeroTier } from "./hero-types";

export type HeroSceneHandle = {
  render: (state: HeroSceneState) => void;
  pause: () => void;
  destroy: () => void;
};

type HeroSceneProps = {
  tier: HeroTier;
  reducedMotion: boolean;
  className?: string;
  onError?: (error: unknown) => void;
};

type SceneRuntime = {
  app: {
    canvas: HTMLCanvasElement;
    stage: {
      addChild: (...children: unknown[]) => void;
    };
    renderer: { render: (stage: unknown) => void; resize: (width: number, height: number) => void };
    destroy: (removeView?: boolean, options?: { children?: boolean; texture?: boolean; textureSource?: boolean }) => void;
  };
  stage: {
    addChild: (...children: unknown[]) => void;
  };
  orbitOuter: SceneGraphic;
  orbitInner: SceneGraphic;
  glow: SceneGraphic;
  particles: Array<{ graphic: SceneGraphic; x: number; y: number; radius: number }>;
  paused: boolean;
  geometryKey: string;
};

type SceneGraphic = {
  alpha: number;
  x: number;
  y: number;
  scale: { set: (value: number) => void };
  clear: () => SceneGraphic;
  circle: (x: number, y: number, radius: number) => SceneGraphic;
  ellipse: (x: number, y: number, radiusX: number, radiusY: number) => SceneGraphic;
  fill: (options: { color: number; alpha?: number }) => SceneGraphic;
  stroke: (options: { color: number; alpha?: number; width?: number; alignment?: number }) => SceneGraphic;
};

const PARTICLE_COUNT = 12;

function makeParticlePosition(index: number) {
  const angle = (index / PARTICLE_COUNT) * Math.PI * 2;
  const radius = 0.24 + (index % 4) * 0.06;
  return {
    x: Math.cos(angle) * radius,
    y: Math.sin(angle) * radius,
    radius: 2 + (index % 3),
  };
}

function renderScene(runtime: SceneRuntime, state: HeroSceneState) {
  if (runtime.paused) return;

  const metrics = state.metrics;
  const width = metrics?.sceneWidth ?? 1000;
  const height = metrics?.sceneHeight ?? 700;
  const centerX = metrics?.centerX ?? width / 2;
  const centerY = metrics?.centerY ?? height / 2;
  const radius = metrics?.orbitRadius ?? Math.min(width, height) * 0.3;
  const scale = state.tier === "full" ? 1 : 0.82;
  const decorativeAlpha = state.tier === "full" ? 1 : 0.68;

  const geometryKey = [width, height, centerX, centerY, radius]
    .map((value) => Math.round(value))
    .join(":");
  if (runtime.geometryKey !== geometryKey) {
    runtime.orbitOuter
      .clear()
      .ellipse(centerX, centerY, radius, radius * 0.7)
      .stroke({ color: 0x93c5fd, alpha: 0.22 * decorativeAlpha, width: 1 });
    runtime.orbitInner
      .clear()
      .ellipse(centerX, centerY, radius * 0.62, radius * 0.44)
      .stroke({ color: 0xbfdbfe, alpha: 0.28 * decorativeAlpha, width: 1 });
    runtime.glow
      .clear()
      .circle(centerX, centerY, Math.max(18, radius * 0.35))
      .fill({ color: 0x3b82f6, alpha: 0.08 * decorativeAlpha });
    runtime.geometryKey = geometryKey;
  }

  const orbitExit = 1 - progressBetween(state.progress, 0.56, 0.9);
  // The lower SVG rail is the single hero path. Keep Pixi focused on sparse
  // particles so its old elliptical orbits cannot read as a second ring.
  runtime.orbitOuter.alpha = 0;
  runtime.orbitInner.alpha = 0;
  runtime.glow.alpha = 0;
  runtime.orbitOuter.scale.set(scale);
  runtime.orbitInner.scale.set(scale);

  runtime.particles.forEach((particle, index) => {
    const drift = state.tier === "full" ? Math.sin(state.progress * 5 + index) * 4 : 0;
    particle.graphic.x = centerX + particle.x * width + drift;
    particle.graphic.y = centerY + particle.y * height;
    particle.graphic.alpha = orbitExit * decorativeAlpha * 0.7;
  });

  runtime.app.renderer.render(runtime.stage);
}

export const HeroScene = forwardRef<HeroSceneHandle, HeroSceneProps>(function HeroScene(
  { tier, reducedMotion, className = "", onError },
  ref,
) {
  const hostRef = useRef<HTMLDivElement>(null);
  const runtimeRef = useRef<SceneRuntime | null>(null);
  const [failed, setFailed] = useState(false);

  useImperativeHandle(ref, () => ({
    render(state) {
      if (tier === "lite" || reducedMotion) return;
      if (runtimeRef.current) {
        runtimeRef.current.paused = false;
        renderScene(runtimeRef.current, state);
      }
    },
    pause() {
      if (runtimeRef.current) runtimeRef.current.paused = true;
    },
    destroy() {
      const runtime = runtimeRef.current;
      if (!runtime) return;
      runtime.paused = true;
      runtime.app.destroy(true, { children: true, texture: true, textureSource: true });
      runtimeRef.current = null;
    },
  }), [reducedMotion, tier]);

  useEffect(() => {
    if (tier === "lite" || reducedMotion || !hostRef.current) return;

    let disposed = false;
    let resizeObserver: ResizeObserver | null = null;

    async function initialize() {
      try {
        const pixi = await import("pixi.js");
        if (disposed || !hostRef.current) return;

        const host = hostRef.current;
        const app = new pixi.Application();
        await app.init({
          antialias: true,
          autoStart: false,
          backgroundAlpha: 0,
          clearBeforeRender: true,
          preference: "webgl",
          resizeTo: host,
          // The particles are decorative and do not need a native 2x backing
          // buffer. Capping DPR keeps the scroll-driven renderer from doing
          // four times the pixel work on high-density displays.
          resolution: Math.min(window.devicePixelRatio || 1, 1.5),
        });
        (app as unknown as { ticker?: { stop: () => void } }).ticker?.stop();
        if (disposed) {
          app.destroy(true, { children: true, texture: true, textureSource: true });
          return;
        }

        const stage = app.stage as unknown as SceneRuntime["stage"];
        const orbitOuter = new pixi.Graphics() as unknown as SceneGraphic;
        const orbitInner = new pixi.Graphics() as unknown as SceneGraphic;
        const glow = new pixi.Graphics() as unknown as SceneGraphic;
        const particles = Array.from({ length: PARTICLE_COUNT }, (_, index) => {
          const particle = makeParticlePosition(index);
          const graphic = new pixi.Graphics()
            .circle(0, 0, particle.radius)
            .fill({ color: 0x60a5fa, alpha: 0.7 }) as unknown as SceneGraphic;
          return { graphic, ...particle };
        });

        stage.addChild(orbitOuter, orbitInner, glow, ...particles.map((particle) => particle.graphic));
        host.appendChild(app.canvas);
        app.canvas.setAttribute("aria-hidden", "true");
        app.canvas.style.position = "absolute";
        app.canvas.style.inset = "0";
        app.canvas.style.height = "100%";
        app.canvas.style.width = "100%";
        app.canvas.style.pointerEvents = "none";

        runtimeRef.current = {
          app: app as unknown as SceneRuntime["app"],
          stage,
          orbitOuter,
          orbitInner,
          glow,
          particles,
          paused: false,
          geometryKey: "",
        };
        renderScene(runtimeRef.current, {
          ...getHeroMotionState(0, { tier, reducedMotion }),
          metrics: null,
        });

        resizeObserver = new ResizeObserver(() => {
          const runtime = runtimeRef.current;
          if (!runtime || !hostRef.current) return;
          const rect = hostRef.current.getBoundingClientRect();
          runtime.app.renderer.resize(Math.max(1, rect.width), Math.max(1, rect.height));
        });
        resizeObserver.observe(host);
      } catch (error) {
        if (disposed) return;
        setFailed(true);
        onError?.(error);
      }
    }

    void initialize();

    return () => {
      disposed = true;
      resizeObserver?.disconnect();
      resizeObserver = null;
      const runtime = runtimeRef.current;
      if (runtime) {
        runtime.paused = true;
        runtime.app.destroy(true, { children: true, texture: true, textureSource: true });
        runtimeRef.current = null;
      }
    };
  }, [onError, reducedMotion, tier]);

  return (
    <div
      ref={hostRef}
      data-hero-scene
      data-hero-tier={tier}
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {(tier === "lite" || reducedMotion || failed) && <HeroFallback />}
    </div>
  );
});
