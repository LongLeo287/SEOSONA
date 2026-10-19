import type { HeroCapabilityInput, HeroTier } from "./hero-types";

const constrainedConnections = new Set(["slow-2g", "2g"]);

export function getHeroDeviceTier(input: HeroCapabilityInput): HeroTier {
  if (
    input.reducedMotion ||
    input.saveData === true ||
    constrainedConnections.has(input.effectiveType ?? "") ||
    input.webglAvailable === false
  ) {
    return "lite";
  }

  const constrainedHardware =
    (input.hardwareConcurrency ?? 8) <= 4 ||
    (input.deviceMemory ?? 8) <= 4;
  const touchPrimary =
    input.hasCoarsePointer ||
    (input.maxTouchPoints > 0 && !input.hasFinePointer);

  // Touch-primary devices already have a compositor-optimized native scroll
  // path. Keep the Hero decorative layer static there so Pixi's large runtime
  // does not compete with touch momentum, thermal headroom, or the main thread.
  return constrainedHardware || touchPrimary ? "lite" : "full";
}

function hasWebGLSupport() {
  if (typeof document === "undefined") return false;

  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      canvas.getContext("webgl2") ||
      canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl"),
    );
  } catch {
    return false;
  }
}

export function readHeroCapabilityInput(): HeroCapabilityInput {
  if (typeof window === "undefined" || typeof navigator === "undefined") {
    return {
      reducedMotion: true,
      hasCoarsePointer: false,
      hasFinePointer: false,
      maxTouchPoints: 0,
      webglAvailable: false,
    };
  }

  const connection = (navigator as Navigator & {
    connection?: { effectiveType?: string; saveData?: boolean };
  }).connection;
  const reducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;

  return {
    reducedMotion,
    hasCoarsePointer: window.matchMedia?.("(pointer: coarse)").matches ?? false,
    hasFinePointer: window.matchMedia?.("(pointer: fine)").matches ?? false,
    maxTouchPoints: navigator.maxTouchPoints ?? 0,
    hardwareConcurrency: navigator.hardwareConcurrency,
    deviceMemory: (navigator as Navigator & { deviceMemory?: number }).deviceMemory,
    saveData: connection?.saveData,
    effectiveType: connection?.effectiveType,
    webglAvailable: hasWebGLSupport(),
  };
}
