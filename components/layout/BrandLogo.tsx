import Link from "next/link";
import Image from "next/image";

type BrandLogoProps = {
  variant?: "dark" | "light";
  size?: "header" | "footer";
};

export function BrandLogo({ variant = "dark", size = "header" }: BrandLogoProps) {
  const widthClass = size === "footer" ? "w-[142px] sm:w-[156px]" : "w-[132px] sm:w-[148px] md:w-[160px]";

  return (
    <Link href="/" className="inline-flex shrink-0 items-center rounded-md focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-100" aria-label="SEOSONA trang chủ">
      <Image
        src="/images/brand/Seosona_Logo.png"
        alt="SEOSONA - Google Marketing Agency"
        width={2464}
        height={911}
        sizes={size === "footer" ? "(min-width: 640px) 156px, 142px" : "(min-width: 768px) 160px, (min-width: 640px) 148px, 132px"}
        className={`${widthClass} h-auto max-h-12 object-contain ${variant === "light" ? "brightness-0 invert" : ""}`}
      />
    </Link>
  );
}
