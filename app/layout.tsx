import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site";

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
    <html lang="vi">
      <body>
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
