import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "Về SEOSONA",
  description: "SEOSONA là Google Marketing Agency tập trung vào SEO, Google Ads, Content SEO và đào tạo SEO thực chiến."
};

const features = [
  { title: "Tư duy chiến lược", description: "Không chỉ tối ưu từ khóa, SEOSONA tập trung vào tăng trưởng organic gắn với mục tiêu kinh doanh." },
  { title: "Triển khai có hệ thống", description: "Kết hợp technical, content, authority, dữ liệu và quy trình phối hợp với team nội bộ." },
  { title: "Minh bạch dữ liệu", description: "Báo cáo dựa trên GSC, GA4, tracking chuyển đổi và các chỉ số vận hành quan trọng." }
];

export default function Page() {
  return (
    <main>
      <PageHero eyebrow="Về SEOSONA" title="Google Marketing Agency tập trung vào tăng trưởng bền vững" description="SEOSONA đồng hành cùng doanh nghiệp trong chiến lược SEO, Google Ads, Content SEO và đào tạo đội ngũ triển khai nội bộ." />
      <FeatureGrid eyebrow="Triết lý" title="Làm SEO như một hệ thống tăng trưởng" features={features} />
      <CtaBand />
    </main>
  );
}
