import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site";

const beVietnam = Be_Vietnam_Pro({
  subsets: ["vietnamese", "latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-be-vietnam"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: "SEOSONA - Google Marketing Agency hàng đầu Việt Nam",
    template: "%s | SEOSONA"
  },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "SEOSONA - Google Marketing Agency",
    description: siteConfig.description,
    url: siteConfig.domain,
    siteName: "SEOSONA",
    locale: "vi_VN",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi" id="top">
      <body className={beVietnam.variable}>
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <Header />
        {children}
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
