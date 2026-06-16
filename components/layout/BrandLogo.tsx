import Link from "next/link";

type BrandLogoProps = {
  variant?: "dark" | "light";
  size?: "header" | "footer";
};

export function BrandLogo({ variant = "dark", size = "header" }: BrandLogoProps) {
  const widthClass = size === "footer" ? "w-[142px] sm:w-[156px]" : "w-[132px] sm:w-[148px] md:w-[160px]";

  return (
    <Link href="/" className="inline-flex shrink-0 items-center rounded-md focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-100" aria-label="SEOSONA trang chủ">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://seosona.com/wp-content/uploads/2023/10/seosona-logo-final.png"
        alt="SEOSONA - Google Marketing Agency"
        className={`${widthClass} h-auto max-h-12 object-contain ${variant === "light" ? "brightness-0 invert" : ""}`}
      />
    </Link>
  );
}
