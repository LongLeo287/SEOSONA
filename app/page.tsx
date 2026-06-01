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
