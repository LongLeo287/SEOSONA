import Image from "next/image";
import type { ReactNode } from "react";

type SonatoolsLogoProps = {
  className?: string;
  alt?: string;
  size?: "inline" | "compact" | "card";
};

const sizeClasses = {
  inline: "inline-block h-[1.45em] w-auto max-w-[9rem] align-[-0.34em] object-contain",
  compact: "h-5 w-auto max-w-[8rem] object-contain",
  card: "h-auto w-[160px] max-h-16 object-contain sm:w-[180px] md:w-[200px]",
} as const;

export function SonatoolsLogo({
  className = "",
  alt = "Sonatools",
  size = "inline",
}: SonatoolsLogoProps) {
  return (
    <Image
      src="/images/brand/sonatools.png"
      alt={alt}
      width={1446}
      height={600}
      sizes={size === "card" ? "(min-width: 768px) 200px, 160px" : "auto"}
      className={`${sizeClasses[size]} ${className}`.trim()}
    />
  );
}

const brandTokenPattern = /^sonatools?(?:\.io)?$/i;
const brandMentionPattern = /((?<![\w./:-])sonatools?(?:\.io)?\b)/gi;

export function renderBrandText(children: ReactNode): ReactNode {
  if (typeof children === "string") {
    return children.split(brandMentionPattern).map((part, index) =>
    brandTokenPattern.test(part) ? <SonatoolsLogo key={`${part}-${index}`} /> : part
    );
  }

  if (Array.isArray(children)) {
    return children.map((child, index) => <span key={index}>{renderBrandText(child)}</span>);
  }

  return children;
}

export function BrandText({ children }: { children: string }) {
  return renderBrandText(children);
}
