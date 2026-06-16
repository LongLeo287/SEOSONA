import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { EcosystemProof } from "@/components/sections/EcosystemProof";
import { TrustSection } from "@/components/sections/TrustSection";
import { CoreSolutions } from "@/components/sections/CoreSolutions";
import dynamic from "next/dynamic";

const AiIntegration = dynamic(() => import("@/components/sections/AiIntegration").then(mod => mod.AiIntegration));
const CustomerJourney = dynamic(() => import("@/components/sections/CustomerJourney").then(mod => mod.CustomerJourney));
const HighTicketCaseStudies = dynamic(() => import("@/components/sections/HighTicketCaseStudies").then(mod => mod.HighTicketCaseStudies));
const Testimonials = dynamic(() => import("@/components/sections/Testimonials").then(mod => mod.Testimonials));
const CommunityLeadMagnets = dynamic(() => import("@/components/sections/CommunityLeadMagnets").then(mod => mod.CommunityLeadMagnets));
const FeaturedPosts = dynamic(() => import("@/components/sections/FeaturedPosts").then(mod => mod.FeaturedPosts));
const ConsultingCta = dynamic(() => import("@/components/sections/ConsultingCta").then(mod => mod.ConsultingCta));

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
      <TrustSection />
      <CoreSolutions />
      <div className="relative overflow-hidden bg-[#04091A]">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#3BA6F1]/50 to-transparent" />
        <AiIntegration />
      </div>
      <CustomerJourney />
      <HighTicketCaseStudies />
      <EcosystemProof />
      <Testimonials />
      <CommunityLeadMagnets />
      <FeaturedPosts />
      <ConsultingCta />
    </main>
  );
}
