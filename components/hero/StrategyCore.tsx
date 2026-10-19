"use client";

import Image from "next/image";
import { forwardRef, type CSSProperties } from "react";

type StrategyCoreProps = {
  className?: string;
  style?: CSSProperties;
};

/**
 * The shared visual focal point for the Hero handoff. It is deliberately DOM
 * based so the brand mark stays crisp on every device tier; Pixi only paints
 * the decorative orbit and particle layer around it.
 */
export const StrategyCore = forwardRef<HTMLDivElement, StrategyCoreProps>(function StrategyCore(
  { className = "", style },
  ref,
) {
  return (
    <div
      ref={ref}
      data-strategy-core
      aria-hidden="true"
      className={`pointer-events-none absolute left-1/2 top-1/2 z-30 ${className}`}
      style={style}
    >
      <div className="relative grid h-40 w-40 place-items-center sm:h-48 sm:w-48 lg:h-56 lg:w-56">
        <span className="absolute inset-0 rounded-full border border-blue-100/80 bg-blue-50/30 shadow-[0_0_80px_rgba(37,99,235,0.14)]" />
        <span className="absolute inset-[-12px] rounded-full border border-blue-100/70" />
        <span className="absolute inset-[-24px] rounded-full border border-blue-50/80" />
        <span className="absolute h-3 w-3 rounded-full bg-blue-500 shadow-[0_0_24px_rgba(37,99,235,0.7)]" />
        <div className="relative grid h-[82%] w-[82%] place-items-center rounded-full border border-slate-100 bg-white shadow-[0_16px_50px_rgba(15,23,42,0.12)]">
          <Image
            src="/images/brand/Seosona_Logo.png"
            alt=""
            aria-hidden="true"
            width={180}
            height={72}
            className="h-auto w-[82%] object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
});
