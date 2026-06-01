import Image from "next/image";
import Link from "next/link";

type BrandLogoProps = {
  variant?: "dark" | "light";
};

export function BrandLogo({ variant = "dark" }: BrandLogoProps) {
  return (
    <Link href="/" className="inline-flex items-center" aria-label="SEOSONA trang chủ">
      <Image
        src="/images/brand/Seosona_Logo.png"
        alt="SEOSONA - Google Marketing Agency"
        width={220}
        height={70}
        priority
        className={variant === "light" ? "h-auto w-[170px] brightness-0 invert sm:w-[210px]" : "h-auto w-[170px] sm:w-[210px]"}
      />
    </Link>
  );
}
