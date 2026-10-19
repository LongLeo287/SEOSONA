import type { HeroLayoutMetrics, HeroMotionOptions, HeroMotionState, HeroPhase } from "./hero-types";

// The two visual owners must not be visible at the same time: their DOM
// coordinate systems differ by a few pixels while the sticky Hero releases.
// A short relay window keeps the handoff calm without producing ghosted logos
// or duplicate nodes.
// Keep the Hero and CoreSolutions owners in a short, shared relay instead of
// switching both layers at one scroll threshold. The distance is measured
// after the Hero's sticky canvas reaches the viewport bottom.
export const HERO_HANDOFF_SWITCH_DISTANCE = 104;
export const HERO_LOGO_ARC_GAP = 24;
export const HERO_ARC_PATH = "M 110 220 Q 500 -44 890 220";
export const HERO_ARC_CURVE_PEAK = 88;
export const HERO_ARC_REVEAL_START = 0.46;
export const HERO_ARC_REVEAL_END = 0.86;
// Switch visual ownership only after the shared geometry has settled. This
// keeps the handoff binary instead of fading the same composition twice.
export const HERO_HANDOFF_COMPLETE_THRESHOLD = 0.999;
// Hysteresis prevents Lenis/damped progress from toggling ownership when the
// scroll settles around the completion threshold. The Hero only hands back to
// the dynamic owner after the user has clearly scrolled back into the relay.
export const HERO_HANDOFF_RESET_THRESHOLD = 0.96;
// Keep the dynamic rail locked to the viewport centre until ownership has
// actually moved to CoreSolutions. Settling against the lower section before
// that point makes the rail drift down while the sticky canvas is releasing.
export const HERO_ARC_SETTLE_START = HERO_HANDOFF_COMPLETE_THRESHOLD;
export const HERO_ARC_SETTLE_END = 1;

// One shared geometry contract for the dynamic Hero and the static
// CoreSolutions handoff. The center slot belongs to the StrategyCore; the
// remaining slots stay balanced around it instead of clustering near center.
export const HERO_ARC_SLOTS = [0.03, 0.28, 0.5, 0.72, 0.97] as const;

export function getHeroOrbitRadius(sceneWidth: number, sceneHeight: number) {
  return Math.min(sceneWidth * 0.34, sceneHeight * 0.28);
}

export function clamp(value: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, Number.isFinite(value) ? value : min));
}

export function smoothstep(value: number) {
  const t = clamp(value);
  return t * t * (3 - 2 * t);
}

export function progressBetween(progress: number, start: number, end: number) {
  if (end <= start) return progress >= end ? 1 : 0;
  return smoothstep((clamp(progress) - start) / (end - start));
}

export function getHeroArcRevealProgress(progress: number) {
  return progressBetween(progress, HERO_ARC_REVEAL_START, HERO_ARC_REVEAL_END);
}

/**
 * Frame-rate independent low-pass smoothing for scroll-driven motion.
 * A response time keeps the visual motion consistent across 60/120Hz panels.
 */
export function dampProgress(current: number, target: number, deltaMs: number, responseMs = 145) {
  if (!Number.isFinite(current) || !Number.isFinite(target)) return target;
  const alpha = 1 - Math.exp(-Math.max(0, deltaMs) / Math.max(1, responseMs));
  return current + (target - current) * alpha;
}

export function getHeroTransitionHeight(metrics: HeroLayoutMetrics) {
  return clamp(metrics.sceneWidth * 0.16, 140, 210);
}

export function getHeroArcPoint(progress: number) {
  const t = clamp(progress);
  return {
    xPercent: 11 + 78 * t,
    curveY: 220 - 528 * t + 528 * t * t,
  };
}

/**
 * Final Hero anchor shared by the DOM core, node semicircle and Pixi arc.
 * Leave a deliberate air gap before the next section's transition ribbon so
 * the brand mark does not sit directly on top of the handoff line.
 */
export function getHeroHandoffOffset(metrics: HeroLayoutMetrics, motionProgress = 1) {
  const transitionHeight = getHeroTransitionHeight(metrics);
  const measuredAnchorOffset = Number.isFinite(metrics.handoffViewportY)
    ? Number(metrics.handoffViewportY) - metrics.centerY
    : Number.NaN;
  const anchorOffset = Number.isFinite(measuredAnchorOffset)
    ? measuredAnchorOffset
    : clamp(
        metrics.handoffBaseline - metrics.centerY,
        -metrics.sceneHeight * 0.1,
        metrics.sceneHeight * 0.32,
      );

  // Keep the moving rail centred while it reveals. Using the eventual static
  // section anchor from the first reveal frame pushes the whole composition
  // below the fold on tall viewports. The rail only settles into that anchor
  // during the final handoff, after its nodes and logo have already landed.
  const settleProgress = progressBetween(motionProgress, HERO_ARC_SETTLE_START, HERO_ARC_SETTLE_END);
  const movingOffset = lerp(0, anchorOffset, settleProgress);

  // The SVG anchor is at the vertical midpoint of the ribbon (120/240),
  // while the curve apex is at y=88/240. Keep all Hero objects on that exact
  // apex instead of maintaining a second, visually conflicting orbit.
  return movingOffset - transitionHeight * (32 / 240);
}

export function getHeroTransitionPoint(metrics: HeroLayoutMetrics, progress: number, motionProgress = 1) {
  const transitionHeight = getHeroTransitionHeight(metrics);
  const { xPercent, curveY } = getHeroArcPoint(progress);

  return {
    x: (xPercent / 100) * metrics.sceneWidth - metrics.centerX,
    y: getHeroHandoffOffset(metrics, motionProgress) + ((curveY - HERO_ARC_CURVE_PEAK) / 240) * transitionHeight,
  };
}

function lerp(from: number, to: number, progress: number) {
  return from + (to - from) * progress;
}

export function phaseFromProgress(progress: number): HeroPhase {
  const value = clamp(progress);
  if (value >= 1) return "complete";
  if (value >= 0.86) return "handoff";
  if (value >= 0.58) return "morph";
  if (value >= 0.32) return "orbit";
  if (value >= 0.1) return "gather";
  return "intro";
}

export function getHeroMotionState(progress: number, options: HeroMotionOptions): HeroMotionState {
  const reducedMotion = options.reducedMotion || options.tier === "lite";
  const normalizedProgress = clamp(progress);

  return {
    progress: normalizedProgress,
    phase: phaseFromProgress(normalizedProgress),
    velocity: clamp(options.velocity ?? 0, -1, 1),
    isScrolling: reducedMotion ? false : Boolean(options.isScrolling),
    tier: options.tier,
    reducedMotion,
    gatherProgress: progressBetween(normalizedProgress, 0.1, 0.32),
    orbitProgress: progressBetween(normalizedProgress, 0.26, 0.58),
    morphProgress: progressBetween(normalizedProgress, 0.58, 0.86),
    handoffProgress: progressBetween(normalizedProgress, 0.86, 1),
  };
}
