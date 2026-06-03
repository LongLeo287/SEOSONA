import type { Metadata } from "next";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { CaseStudyPreview } from "@/components/sections/CaseStudyPreview";
import { ClientLogoGrid } from "@/components/sections/ClientLogoGrid";
import { FeaturedPosts } from "@/components/sections/FeaturedPosts";
import { Hero } from "@/components/sections/Hero";
import { HomeFinalCta } from "@/components/sections/HomeFinalCta";
import { KnowledgeHubPreview } from "@/components/sections/KnowledgeHubPreview";
import { PressLogoGrid } from "@/components/sections/PressLogoGrid";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhyChoose } from "@/components/sections/WhyChoose";

export const metadata: Metadata = {
  title: "SEOSONA - Google Marketing Agency hàng đầu Việt Nam",
  description:
    "SEOSONA giúp doanh nghiệp tăng trưởng khách hàng tiềm năng từ Google qua SEO tổng thể, Google Ads, Content SEO và đào tạo đội ngũ nội bộ bài bản.",
  alternates: { canonical: "/" }
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ClientLogoGrid />
      <Services />
      <WhyChoose />
      <AboutPreview />
      <CaseStudyPreview />
      <KnowledgeHubPreview />
      <Testimonials />
      <PressLogoGrid />
      <FeaturedPosts />
      <HomeFinalCta />
    </main>
  );
}
