import Image from "next/image";
import Link from "next/link";

type BrandLogoProps = {
  variant?: "dark" | "light";
};

export function BrandLogo({ variant = "dark" }: BrandLogoProps) {
  return (
    <Link href="/" className="inline-flex items-center" aria-label="SEOSONA trang chủ">
      <Image
        src="/images/brand/seosona-logo.svg"
        alt="SEOSONA - Google Marketing Agency"
        width={195}
        height={54}
        priority
        className={variant === "light" ? "brightness-0 invert" : "h-auto w-[170px] sm:w-[195px]"}
      />
    </Link>
  );
}
