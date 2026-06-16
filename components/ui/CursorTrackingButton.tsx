"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface CursorTrackingButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export function CursorTrackingButton({
  href,
  className,
  children,
  ...props
}: CursorTrackingButtonProps) {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePosition({ x, y });
    }
  };

  const style = {
    "--x": `${mousePosition.x}px`,
    "--y": `${mousePosition.y}px`,
  } as React.CSSProperties;

  return (
    <Link
      href={href}
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={style}
      className={cn(
        "relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full px-8 text-[16px] font-bold transition-all duration-300",
        "bg-[#1D4ED8] text-white",
        "hover:shadow-[0_12px_30px_rgba(29,78,216,0.3)] hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-100",
        className
      )}
      {...props}
    >
      {/* Spotlight effect that follows the cursor */}
      <span
        className={cn(
          "pointer-events-none absolute inset-0 z-0 transition-opacity duration-300",
          isHovering ? "opacity-100" : "opacity-0"
        )}
        style={{
          background: "radial-gradient(100px circle at var(--x) var(--y), rgba(255,255,255,0.3), transparent 100%)",
        }}
      />
      {/* Light border reflection on hover */}
      <span
        className={cn(
          "pointer-events-none absolute inset-0 z-0 rounded-full border border-white/40 transition-opacity duration-300",
          isHovering ? "opacity-100" : "opacity-0"
        )}
        style={{
          WebkitMaskImage: "radial-gradient(120px circle at var(--x) var(--y), black 20%, transparent 100%)",
        }}
      />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </Link>
  );
}
