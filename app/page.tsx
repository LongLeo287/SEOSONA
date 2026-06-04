import type { Metadata } from "next";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { CaseStudyPreview } from "@/components/sections/CaseStudyPreview";
import { ClientLogoGrid } from "@/components/sections/ClientLogoGrid";
import { CtaBand } from "@/components/sections/CtaBand";
import { FeaturedPosts } from "@/components/sections/FeaturedPosts";
import { Hero } from "@/components/sections/Hero";
import { HomeFinalCta } from "@/components/sections/HomeFinalCta";
import { KnowledgeHubPreview } from "@/components/sections/KnowledgeHubPreview";
import { PressLogoGrid } from "@/components/sections/PressLogoGrid";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhyChoose } from "@/components/sections/WhyChoose";

export const metadata: Metadata = {
  title: "SEOSONA - Google Marketing Agency hàng đầu Việt Nam",
  description:
    "SEOSONA giúp doanh nghiệp tăng trưởng khách hàng tiềm năng từ Google qua SEO tổng thể, Google Ads, Content SEO và đào tạo đội ngũ nội bộ bài bản.",
  alternates: { canonical: "/" }
};

const processSteps = [
  { title: "Audit & Phân tích", description: "Rà soát toàn diện website, đối thủ, từ khóa và dữ liệu GSC/GA4 để xác định điểm yếu và cơ hội." },
  { title: "Lập roadmap", description: "Xây dựng kế hoạch triển khai theo giai đoạn, ưu tiên theo tác động kinh doanh và nguồn lực thực tế." },
  { title: "Triển khai hệ thống", description: "Tối ưu kỹ thuật, xây topical map, sản xuất nội dung và xây dựng authority theo đúng lộ trình." },
  { title: "Đo lường & Tối ưu", description: "Theo dõi thứ hạng, traffic, lead và ROI. Điều chỉnh chiến thuật theo dữ liệu thực tế mỗi tháng." }
];

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ClientLogoGrid />
      <Services />
      <WhyChoose />
      <Process
        eyebrow="Cách SEOSONA làm việc"
        title="Quy trình 4 bước tạo tăng trưởng bền vững"
        description="Mỗi dự án đều bắt đầu từ dữ liệu, không phải giả định. Quy trình của SEOSONA đảm bảo mọi hành động đều có mục tiêu và đo lường được."
        steps={processSteps}
      />
      <CtaBand />
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
