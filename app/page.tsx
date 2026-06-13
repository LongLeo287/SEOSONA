import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { EcosystemProof } from "@/components/sections/EcosystemProof";
import { ClientLogoGrid } from "@/components/sections/ClientLogoGrid";
import { PressLogoGrid } from "@/components/sections/PressLogoGrid";
import { CoreSolutions } from "@/components/sections/CoreSolutions";
import { AiIntegration } from "@/components/sections/AiIntegration";
import { CustomerJourney } from "@/components/sections/CustomerJourney";
import { HighTicketCaseStudies } from "@/components/sections/HighTicketCaseStudies";
import { Testimonials } from "@/components/sections/Testimonials";
import { CommunityLeadMagnets } from "@/components/sections/CommunityLeadMagnets";
import { ConsultingCta } from "@/components/sections/ConsultingCta";

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
      <EcosystemProof />
      <ClientLogoGrid />
      <PressLogoGrid />
      <CoreSolutions />
      <AiIntegration />
      <CustomerJourney />
      <HighTicketCaseStudies />
      <Testimonials />
      <CommunityLeadMagnets />
      <ConsultingCta />
    </main>
  );
}
