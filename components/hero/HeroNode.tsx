"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { createMorph } from "morphicons/dom";
import type { Morph } from "morphicons/dom";

type HeroNodeProps = {
  label: string;
  href: string;
  color: string;
  iconPath: string;
  setRef: (element: HTMLDivElement | null) => void;
  setMorphRef: (morph: Morph | null) => void;
};

const birthPath = "M4 12h16M12 4v16";

export function HeroNode({
  label,
  href,
  color,
  iconPath,
  setRef,
  setMorphRef,
}: HeroNodeProps) {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!pathRef.current) return;
    const morph = createMorph(pathRef.current, birthPath, {
      reducedMotion: "always",
      strokeWidth: 2.2,
    });
    morph.seek(iconPath, 0);
    setMorphRef(morph);

    return () => {
      morph.destroy();
      setMorphRef(null);
    };
  }, [iconPath, setMorphRef]);

  return (
    <div
      ref={setRef}
      className="absolute left-1/2 top-1/2 z-20 hidden sm:block"
      style={{ opacity: 0, pointerEvents: "none", transformStyle: "preserve-3d", willChange: "transform, opacity" }}
    >
      <Link
        href={href}
        aria-label={label}
        className="group relative block h-12 w-12 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-100"
      >
        <span
          data-hero-node-card
          className="absolute left-1/2 top-1/2 flex items-center gap-3 whitespace-nowrap rounded-full border border-slate-200/80 bg-white/95 px-4 py-3 shadow-[0_12px_34px_rgba(15,23,42,0.08)] backdrop-blur-md transition-[border-color,box-shadow,color] duration-300 group-hover:border-blue-200 group-hover:shadow-[0_18px_46px_rgba(37,99,235,0.14)]"
        >
          <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border border-slate-100 bg-white shadow-sm ${color}`}>
            <svg
              aria-hidden="true"
              className="h-5 w-5 overflow-visible"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path ref={pathRef} d={birthPath} />
            </svg>
          </span>
          <span
            data-hero-node-label
            className="hidden pr-1 text-[14px] font-black text-slate-700 transition-colors group-hover:text-blue-600 sm:inline"
          >
            {label}
          </span>
        </span>
        <span
          data-hero-node-orbit
          aria-hidden="true"
          className={`absolute left-1/2 top-1/2 grid h-12 w-12 place-items-center rounded-full border border-slate-100 bg-white shadow-[0_10px_28px_rgba(15,23,42,0.1)] ${color}`}
        >
          <svg
            aria-hidden="true"
            className="h-5 w-5 overflow-visible"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d={iconPath} />
          </svg>
        </span>
      </Link>
    </div>
  );
}
