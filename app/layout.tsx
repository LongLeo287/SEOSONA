import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { LoadingLogo } from "@/components/layout/LoadingLogo";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site";
import { MotionConfig } from "framer-motion";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-poppins"
});

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter"
});

export const viewport = {
  themeColor: "#1D4ED8",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: "SEOSONA - Google Marketing Agency hàng đầu Việt Nam",
    template: "%s"
  },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "SEOSONA - Google Marketing Agency",
    description: siteConfig.description,
    url: siteConfig.domain,
    siteName: "SEOSONA",
    locale: "vi_VN",
    type: "website"
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi" id="top">
      <body className={`${poppins.variable} ${inter.variable} font-sans antialiased`}>
        <MotionConfig reducedMotion="user">
          <SmoothScroll>
            <LoadingLogo />
            <JsonLd data={[organizationSchema(), websiteSchema()]} />
            <Header />
            {children}
            <Footer />
            <FloatingActions />
          </SmoothScroll>
        </MotionConfig>
      </body>
    </html>
  );
}
