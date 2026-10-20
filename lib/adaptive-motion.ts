export type AdaptiveMotionMode = "full" | "balanced" | "lite" | "paused";

export type AdaptiveMotionCapabilities = {
  reducedMotion: boolean;
  saveData: boolean;
  effectiveType?: string;
  hasCoarsePointer: boolean;
  hasFinePointer: boolean;
  maxTouchPoints: number;
  hardwareConcurrency?: number;
  deviceMemory?: number;
  webglAvailable: boolean;
};

export type AdaptiveMotionSnapshot = {
  mode: AdaptiveMotionMode;
  targetFps: number;
  capabilities: AdaptiveMotionCapabilities;
  documentVisible: boolean;
  activeSubscribers: number;
  revision: number;
};

export type AdaptiveMotionTick = {
  timestamp: number;
  delta: number;
  snapshot: AdaptiveMotionSnapshot;
};

export type AdaptiveMotionListener = (tick: AdaptiveMotionTick) => void;

export type AdaptiveMotionSubscription = {
  setActive: (active: boolean) => void;
  setVisible: (visible: boolean) => void;
  unsubscribe: () => void;
};

export type AdaptiveMotionSubscriptionOptions = {
  active?: boolean;
  element?: Element | null;
};

export type AdaptiveMotionRuntime = {
  getSnapshot: () => AdaptiveMotionSnapshot;
  subscribeSnapshot: (listener: () => void) => () => void;
  subscribe: (
    listener: AdaptiveMotionListener,
    options?: AdaptiveMotionSubscriptionOptions,
  ) => AdaptiveMotionSubscription;
  destroy: () => void;
};

const constrainedConnections = new Set(["slow-2g", "2g"]);
const modeOrder: AdaptiveMotionMode[] = ["full", "balanced", "lite"];
const targetFpsByMode: Record<AdaptiveMotionMode, number> = {
  full: 60,
  balanced: 30,
  lite: 20,
  paused: 0,
};

function hasWebGLSupport() {
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
function getConnection() {
  return (navigator as Navigator & {
    connection?: {
      effectiveType?: string;
      saveData?: boolean;
      addEventListener?: (type: string, listener: () => void) => void;
      removeEventListener?: (type: string, listener: () => void) => void;
    };
  }).connection;
}

export function readAdaptiveMotionCapabilities(): AdaptiveMotionCapabilities {
  const reducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
  const hasCoarsePointer = window.matchMedia?.("(pointer: coarse)").matches ?? false;
  const hasFinePointer = window.matchMedia?.("(pointer: fine)").matches ?? false;
  const connection = getConnection();

  return {
    reducedMotion,
    saveData: connection?.saveData === true,
    effectiveType: connection?.effectiveType,
    hasCoarsePointer,
    hasFinePointer,
    maxTouchPoints: navigator.maxTouchPoints ?? 0,
    hardwareConcurrency: navigator.hardwareConcurrency,
    deviceMemory: (navigator as Navigator & { deviceMemory?: number }).deviceMemory,
    webglAvailable: hasWebGLSupport(),
  };
}

function isTouchPrimary(capabilities: AdaptiveMotionCapabilities) {
  return (
    capabilities.hasCoarsePointer ||
    (capabilities.maxTouchPoints > 0 && !capabilities.hasFinePointer)
  );
}

export function getInitialAdaptiveMotionMode(
  capabilities: AdaptiveMotionCapabilities,
): AdaptiveMotionMode {
  const hardLite =
    capabilities.reducedMotion ||
    capabilities.saveData ||
    constrainedConnections.has(capabilities.effectiveType ?? "") ||
    !capabilities.webglAvailable;

  if (hardLite) return "lite";

  const lowEnd =
    (capabilities.hardwareConcurrency ?? 8) <= 4 ||
    (capabilities.deviceMemory ?? 8) <= 4;

  if (lowEnd || isTouchPrimary(capabilities)) return "balanced";
  return "full";
}

function nextLowerMode(mode: AdaptiveMotionMode) {
  if (mode === "full") return "balanced";
  if (mode === "balanced") return "lite";
  return "lite";
}

function nextHigherMode(mode: AdaptiveMotionMode, ceiling: AdaptiveMotionMode) {
  const currentIndex = modeOrder.indexOf(mode);
  const ceilingIndex = modeOrder.indexOf(ceiling);
  if (currentIndex <= 0 || currentIndex <= ceilingIndex) return mode;
  return modeOrder[currentIndex - 1] ?? mode;
}

export const DEFAULT_ADAPTIVE_MOTION_SNAPSHOT: AdaptiveMotionSnapshot = {
  mode: "lite",
  targetFps: targetFpsByMode.lite,
  capabilities: {
    reducedMotion: false,
    saveData: false,
    hasCoarsePointer: false,
    hasFinePointer: false,
    maxTouchPoints: 0,
    webglAvailable: false,
  },
  documentVisible: true,
  activeSubscribers: 0,
  revision: 0,
};

export function createAdaptiveMotionRuntime(): AdaptiveMotionRuntime {
  const capabilities = readAdaptiveMotionCapabilities();
  const modeCeiling = getInitialAdaptiveMotionMode(capabilities);
  let mode = modeCeiling;
  let snapshot: AdaptiveMotionSnapshot = {
    mode,
    targetFps: targetFpsByMode[mode],
    capabilities,
    documentVisible: document.visibilityState !== "hidden",
    activeSubscribers: 0,
    revision: 0,
  };
  let rafId: number | null = null;
  let lastFrameTime = 0;
  let lastDispatchTime = 0;
  let pressureStreak = 0;
  let stableStreak = 0;
  let destroyed = false;
  let nextId = 0;
  const listeners = new Map<
    number,
    {
      listener: AdaptiveMotionListener;
      active: boolean;
      visible: boolean;
      element: Element | null;
    }
  >();
  const snapshotListeners = new Set<() => void>();
  const observer = "IntersectionObserver" in window
    ? new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            listeners.forEach((subscriber) => {
              if (subscriber.element === entry.target) {
                subscriber.visible = entry.isIntersecting || entry.intersectionRatio > 0;
              }
            });
          });
          publishSnapshot();
          ensureLoop();
        },
        { rootMargin: "160px 0px", threshold: [0, 0.01] },
      )
    : null;

  function getActiveCount() {
    let count = 0;
    listeners.forEach((subscriber) => {
      if (subscriber.active && subscriber.visible) count += 1;
    });
    return count;
  }

  function effectiveMode() {
    return document.visibilityState === "hidden" ? "paused" : mode;
  }

  function publishSnapshot() {
    snapshot = {
      ...snapshot,
      mode: effectiveMode(),
      targetFps: targetFpsByMode[effectiveMode()],
      activeSubscribers: getActiveCount(),
      revision: snapshot.revision + 1,
    };
    snapshotListeners.forEach((listener) => listener());
    document.documentElement.dataset.adaptiveMotionMode = snapshot.mode;
    document.documentElement.style.setProperty(
      "--adaptive-motion-fps",
      String(snapshot.targetFps),
    );
    document.documentElement.dataset.adaptiveMotionActive = String(snapshot.activeSubscribers);
  }

  function updateMode(nextMode: AdaptiveMotionMode) {
    if (nextMode === mode || nextMode === "paused") return;
    mode = nextMode;
    pressureStreak = 0;
    stableStreak = 0;
    publishSnapshot();
  }

  function sampleFrame(delta: number) {
    if (delta <= 0) return;
    const pressureLimit = mode === "full" ? 24 : mode === "balanced" ? 42 : 66;
    if (delta > pressureLimit) {
      pressureStreak += 1;
      stableStreak = 0;
    } else if (delta < pressureLimit * 0.65) {
      stableStreak += 1;
      pressureStreak = Math.max(0, pressureStreak - 1);
    } else {
      pressureStreak = Math.max(0, pressureStreak - 1);
      stableStreak = Math.max(0, stableStreak - 1);
    }

    if (pressureStreak >= 8) {
      updateMode(nextLowerMode(mode));
      return;
    }

    if (stableStreak >= 120) {
      updateMode(nextHigherMode(mode, modeCeiling));
    }
  }

  function hasActiveWork() {
    return snapshot.documentVisible && getActiveCount() > 0;
  }

  function schedule() {
    if (destroyed || rafId !== null || !hasActiveWork()) return;
    rafId = window.requestAnimationFrame(step);
  }

  function step(timestamp: number) {
    rafId = null;
    if (destroyed || !hasActiveWork()) return;

    const delta = lastFrameTime > 0 ? timestamp - lastFrameTime : 0;
    lastFrameTime = timestamp;
    sampleFrame(delta);

    const targetInterval = 1000 / Math.max(1, snapshot.targetFps);
    if (lastDispatchTime === 0 || timestamp - lastDispatchTime >= targetInterval) {
      lastDispatchTime = timestamp;
      const tick: AdaptiveMotionTick = { timestamp, delta, snapshot };
      listeners.forEach((subscriber) => {
        if (!subscriber.active || !subscriber.visible) return;
        try {
          subscriber.listener(tick);
        } catch (error) {
          if (process.env.NODE_ENV !== "production") {
            console.error("[adaptive-motion] subscriber failed", error);
          }
        }
      });
    }

    schedule();
  }

  function onVisibilityChange() {
    snapshot = { ...snapshot, documentVisible: document.visibilityState !== "hidden" };
    publishSnapshot();
    if (!snapshot.documentVisible) {
      lastFrameTime = 0;
      lastDispatchTime = 0;
    }
    schedule();
  }

  function onCapabilityChange() {
    const nextCapabilities = readAdaptiveMotionCapabilities();
    Object.assign(capabilities, nextCapabilities);
    mode = getInitialAdaptiveMotionMode(capabilities);
    publishSnapshot();
    schedule();
  }

  function ensureLoop() {
    publishSnapshot();
    schedule();
  }

  document.addEventListener("visibilitychange", onVisibilityChange);
  const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  const pointerQuery = window.matchMedia("(pointer: coarse)");
  reducedMotionQuery.addEventListener?.("change", onCapabilityChange);
  pointerQuery.addEventListener?.("change", onCapabilityChange);
  const connection = getConnection();
  connection?.addEventListener?.("change", onCapabilityChange);

  const runtime: AdaptiveMotionRuntime = {
    getSnapshot: () => snapshot,
    subscribeSnapshot(listener) {
      snapshotListeners.add(listener);
      return () => snapshotListeners.delete(listener);
    },
    subscribe(listener, options = {}) {
      const id = nextId++;
      const element = options.element ?? null;
      const subscriber = {
        listener,
        active: options.active ?? true,
        visible: true,
        element,
      };
      listeners.set(id, subscriber);
      if (element && observer) {
        subscriber.visible = element.getBoundingClientRect().bottom >= -160 && element.getBoundingClientRect().top <= window.innerHeight + 160;
        observer.observe(element);
      }
      ensureLoop();

      return {
        setActive(active: boolean) {
          const current = listeners.get(id);
          if (!current) return;
          current.active = active;
          ensureLoop();
        },
        setVisible(visible: boolean) {
          const current = listeners.get(id);
          if (!current) return;
          current.visible = visible;
          ensureLoop();
        },
        unsubscribe() {
          const current = listeners.get(id);
          if (!current) return;
          if (current.element && observer) observer.unobserve(current.element);
          listeners.delete(id);
          publishSnapshot();
        },
      } satisfies AdaptiveMotionSubscription;
    },
    destroy() {
      if (destroyed) return;
      destroyed = true;
      if (rafId !== null) window.cancelAnimationFrame(rafId);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      reducedMotionQuery.removeEventListener?.("change", onCapabilityChange);
      pointerQuery.removeEventListener?.("change", onCapabilityChange);
      connection?.removeEventListener?.("change", onCapabilityChange);
      observer?.disconnect();
      listeners.clear();
      snapshotListeners.clear();
      delete document.documentElement.dataset.adaptiveMotionMode;
      delete document.documentElement.dataset.adaptiveMotionActive;
      document.documentElement.style.removeProperty("--adaptive-motion-fps");
    },
  };

  publishSnapshot();
  return runtime;
}

let defaultRuntime: AdaptiveMotionRuntime | null = null;

export function getAdaptiveMotionRuntime() {
  if (typeof window === "undefined") return null;
  defaultRuntime ??= createAdaptiveMotionRuntime();
  return defaultRuntime;
}

export function subscribeAdaptiveMotion(
  listener: AdaptiveMotionListener,
  options?: AdaptiveMotionSubscriptionOptions,
) {
  return getAdaptiveMotionRuntime()?.subscribe(listener, options) ?? {
    setActive: () => undefined,
    setVisible: () => undefined,
    unsubscribe: () => undefined,
  };
}

