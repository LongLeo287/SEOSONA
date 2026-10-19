export const SEOSONA_SCROLL_TO_EVENT = "seosona:scroll-to";

export type ScrollTarget = number | string | HTMLElement;

export type ScrollRequest = {
  target: ScrollTarget;
  offset?: number;
  immediate?: boolean;
  duration?: number;
};

/**
 * Routes programmatic page scrolling through the active Lenis instance when
 * available, while retaining a native fallback for reduced-motion and SSR.
 */
export function requestScroll({ target, offset = 0, immediate = false, duration }: ScrollRequest) {
  if (typeof window === "undefined") return;

  const event = new CustomEvent<ScrollRequest>(SEOSONA_SCROLL_TO_EVENT, {
    cancelable: true,
    detail: { target, offset, immediate, duration },
  });

  // SmoothScroll prevents the event when Lenis owns the page scroll. If no
  // controller is mounted, fall back to the browser's native scroll API.
  if (!window.dispatchEvent(event)) return;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const behavior: ScrollBehavior = immediate || reducedMotion ? "auto" : "smooth";

  if (typeof target === "number") {
    window.scrollTo({ top: Math.max(0, target + offset), behavior });
    return;
  }

  const element = typeof target === "string" ? document.querySelector<HTMLElement>(target) : target;
  if (!element) return;

  const top = element.getBoundingClientRect().top + window.scrollY + offset;
  window.scrollTo({ top: Math.max(0, top), behavior });
}
