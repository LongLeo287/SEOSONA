export type HeroTier = "full" | "balanced" | "lite";

export type HeroPhase = "intro" | "gather" | "orbit" | "morph" | "handoff" | "complete";

export type HeroCapabilityInput = {
  reducedMotion: boolean;
  hasCoarsePointer: boolean;
  hasFinePointer: boolean;
  maxTouchPoints: number;
  hardwareConcurrency?: number;
  deviceMemory?: number;
  saveData?: boolean;
  effectiveType?: string;
  webglAvailable?: boolean;
};

export type HeroMotionOptions = {
  tier: HeroTier;
  reducedMotion: boolean;
  velocity?: number;
  isScrolling?: boolean;
};

export type HeroMotionState = {
  progress: number;
  phase: HeroPhase;
  velocity: number;
  isScrolling: boolean;
  tier: HeroTier;
  reducedMotion: boolean;
  gatherProgress: number;
  orbitProgress: number;
  morphProgress: number;
  handoffProgress: number;
};

export type HeroLayoutMetrics = {
  sceneWidth: number;
  sceneHeight: number;
  centerX: number;
  centerY: number;
  orbitRadius: number;
  arcStartX: number;
  arcStartY: number;
  arcEndX: number;
  arcEndY: number;
  handoffBaseline: number;
  /** Current viewport Y of the shared CoreSolutions transition anchor. */
  handoffViewportY?: number;
};

export type HeroSceneState = HeroMotionState & {
  metrics: HeroLayoutMetrics | null;
};
