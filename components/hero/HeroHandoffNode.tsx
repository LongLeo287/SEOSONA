import Link from "next/link";

type HeroHandoffNodeProps = {
  label: string;
  href: string;
  color: string;
  iconPath: string;
  style: React.CSSProperties;
};

export function HeroHandoffNode({ label, href, color, iconPath, style }: HeroHandoffNodeProps) {
  return (
    <Link
      href={href}
      aria-label={label}
      tabIndex={-1}
      style={style}
      className={`pointer-events-auto absolute grid h-12 w-12 place-items-center rounded-full border border-slate-100 bg-white shadow-[0_10px_28px_rgba(15,23,42,0.1)] transition-transform duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-100 ${color}`}
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
    </Link>
  );
}
