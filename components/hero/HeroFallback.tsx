type HeroFallbackProps = {
  className?: string;
};

export function HeroFallback({ className = "" }: HeroFallbackProps) {
  return (
    <div
      data-hero-fallback
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <svg
        className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2"
        viewBox="0 0 1000 700"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
      >
        <defs>
          <radialGradient id="hero-fallback-glow" cx="50%" cy="48%" r="50%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.16" />
            <stop offset="68%" stopColor="#3B82F6" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
          </radialGradient>
        </defs>
        <ellipse cx="500" cy="350" rx="360" ry="250" fill="url(#hero-fallback-glow)" />
        <ellipse cx="500" cy="350" rx="230" ry="160" fill="none" stroke="#93C5FD" strokeOpacity="0.2" strokeDasharray="4 12" />
        <ellipse cx="500" cy="350" rx="145" ry="100" fill="none" stroke="#BFDBFE" strokeOpacity="0.3" strokeDasharray="3 9" />
        <circle cx="500" cy="350" r="8" fill="#2563EB" fillOpacity="0.82" />
        <circle cx="265" cy="420" r="5" fill="#60A5FA" fillOpacity="0.7" />
        <circle cx="735" cy="420" r="5" fill="#60A5FA" fillOpacity="0.7" />
      </svg>
    </div>
  );
}
