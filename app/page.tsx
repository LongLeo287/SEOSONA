import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { CoreSolutions } from "@/components/sections/CoreSolutions";
import dynamic from "next/dynamic";

const AiIntegration = dynamic(() => import("@/components/sections/AiIntegration").then(mod => mod.AiIntegration));
const CustomerJourney = dynamic(() => import("@/components/sections/CustomerJourney").then(mod => mod.CustomerJourney));
const TrackingDataSection = dynamic(() => import("@/components/sections/TrackingDataSection").then(mod => mod.TrackingDataSection));
const HighTicketCaseStudies = dynamic(() => import("@/components/sections/HighTicketCaseStudies").then(mod => mod.HighTicketCaseStudies));
const CommunityHub = dynamic(() => import("@/components/sections/CommunityHub").then(mod => mod.CommunityHub));
const TrustEcosystem = dynamic(() => import("@/components/sections/TrustEcosystem").then(mod => mod.TrustEcosystem));
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
      <CoreSolutions />
      <div className="relative overflow-hidden bg-white">
        <AiIntegration />
      </div>
      <TrackingDataSection />
      <HighTicketCaseStudies />
      <CustomerJourney />
      <CommunityHub />
      <TrustEcosystem />
      <FeaturedPosts />
      <ConsultingCta />
    </main>
  );
}
