"use client";

import Image from "next/image";
import { useEffect, useLayoutEffect, useState } from "react";

const MINIMUM_DISPLAY_MS = 520;
const MAXIMUM_DISPLAY_MS = 1800;
const EXIT_DURATION_MS = 420;

export function LoadingLogo() {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useLayoutEffect(() => {
    if (!isVisible) return;

    const root = document.documentElement;
    const body = document.body;
    root.classList.add("seosona-loading");
    body.classList.add("seosona-loading");

    return () => {
      root.classList.remove("seosona-loading");
      body.classList.remove("seosona-loading");
    };
  }, [isVisible]);

  useEffect(() => {
    let finished = false;
    let exitTimer: number | undefined;
    let removeTimer: number | undefined;
    const startedAt = performance.now();

    const removeLoader = () => {
      if (finished) return;
      finished = true;

      const elapsed = performance.now() - startedAt;
      const waitForMinimum = Math.max(0, MINIMUM_DISPLAY_MS - elapsed);
      exitTimer = window.setTimeout(() => {
        setIsExiting(true);
        removeTimer = window.setTimeout(() => setIsVisible(false), EXIT_DURATION_MS);
      }, waitForMinimum);
    };

    const onWindowLoad = () => {
      void document.fonts?.ready.then(removeLoader);
    };

    if (document.readyState === "complete") {
      onWindowLoad();
    } else {
      window.addEventListener("load", onWindowLoad, { once: true });
    }

    const fallbackTimer = window.setTimeout(removeLoader, MAXIMUM_DISPLAY_MS);

    return () => {
      finished = true;
      window.removeEventListener("load", onWindowLoad);
      window.clearTimeout(fallbackTimer);
      if (exitTimer !== undefined) window.clearTimeout(exitTimer);
      if (removeTimer !== undefined) window.clearTimeout(removeTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      role="status"
      aria-label="Đang tải SEOSONA"
      aria-live="polite"
      className={`seosona-loader fixed inset-0 z-[9999] grid place-items-center overflow-hidden bg-white transition-opacity duration-[420ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${isExiting ? "pointer-events-none opacity-0" : "opacity-100"}`}
    >
      <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(to_right,#04091A08_1px,transparent_1px),linear-gradient(to_bottom,#04091A08_1px,transparent_1px)] bg-[size:28px_28px]" />
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(219,234,254,0.52),transparent_38%)]" />

      <div className="relative z-10 flex flex-col items-center">
        <div className="relative grid h-40 w-40 place-items-center sm:h-48 sm:w-48">
          <span className="seosona-loader-ring absolute inset-0 rounded-full border border-blue-100/80" />
          <span className="seosona-loader-ring seosona-loader-ring-delayed absolute inset-4 rounded-full border border-blue-200/70" />
          <div className="relative grid h-[78%] w-[78%] place-items-center rounded-full border border-slate-100 bg-white shadow-[0_20px_70px_rgba(37,99,235,0.16)]">
            <Image
              src="/images/brand/Seosona_Logo.png"
              alt="SEOSONA"
              width={2464}
              height={911}
              priority
              className="h-auto w-[78%] object-contain"
            />
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-3">
          <div className="h-1 w-40 overflow-hidden rounded-full bg-blue-50 sm:w-48">
            <span className="seosona-loader-progress block h-full w-1/2 rounded-full bg-gradient-to-r from-blue-300 via-blue-600 to-blue-300" />
          </div>
          <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-slate-400">Đang khởi tạo hệ sinh thái</p>
        </div>
      </div>
    </div>
  );
}
