import Image from "next/image";
import Link from "next/link";

type BrandLogoProps = {
  variant?: "dark" | "light";
  size?: "header" | "footer";
};

export function BrandLogo({ variant = "dark", size = "header" }: BrandLogoProps) {
  const widthClass = size === "footer" ? "w-[142px] sm:w-[156px]" : "w-[132px] sm:w-[148px] md:w-[160px]";

  return (
    <Link href="/" className="inline-flex shrink-0 items-center" aria-label="SEOSONA trang chủ">
      <Image
        src="/images/brand/Seosona_Logo.png"
        alt="SEOSONA - Google Marketing Agency"
        width={180}
        height={58}
        priority
        className={`${widthClass} h-auto max-h-12 object-contain ${variant === "light" ? "brightness-0 invert" : ""}`}
      />
    </Link>
  );
}
