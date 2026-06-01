import Link from "next/link";

type BrandLogoProps = {
  variant?: "dark" | "light";
};

export function BrandLogo({ variant = "dark" }: BrandLogoProps) {
  const textClass = variant === "light" ? "text-white" : "text-slate-950";
  const subClass = variant === "light" ? "text-blue-100" : "text-slate-500";

  return (
    <Link href="/" className="group flex items-center gap-3" aria-label="SEOSONA homepage">
      <span className="relative grid h-12 w-12 place-items-center overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 via-cyan-500 to-violet-600 text-lg font-black text-white shadow-lg shadow-blue-600/20">
        <span className="absolute inset-0 bg-white/10 opacity-0 transition group-hover:opacity-100" />
        S
      </span>
      <span className="leading-none">
        <span className={`block text-2xl font-black tracking-tight ${textClass}`}>
          SEO<span className="text-blue-600">SONA</span>
        </span>
        <span className={`mt-1 block text-xs font-bold uppercase tracking-[0.2em] ${subClass}`}>
          Google Marketing
        </span>
      </span>
    </Link>
  );
}
