"use client";

import { useEffect, useState, type RefObject } from "react";

type InViewOptions = {
  rootMargin?: string;
  threshold?: number;
};

/**
 * Keeps animation loops dormant until a component is near the viewport.
 * The observer callback is intentionally the only place that updates state,
 * so mounting a page does not cause an extra synchronous render.
 */
export function useIsInView<T extends Element>(
  ref: RefObject<T | null>,
  { rootMargin = "200px 0px", threshold = 0.01 }: InViewOptions = {},
) {
  const [isInView, setIsInView] = useState(false);
  const [isPageVisible, setIsPageVisible] = useState(true);

  useEffect(() => {
    const updatePageVisibility = () => setIsPageVisible(!document.hidden);

    updatePageVisibility();
    document.addEventListener("visibilitychange", updatePageVisibility);
    return () => document.removeEventListener("visibilitychange", updatePageVisibility);
  }, []);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { rootMargin, threshold },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [ref, rootMargin, threshold]);

  return isInView && isPageVisible;
}
