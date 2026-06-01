import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ProofBar } from "@/components/sections/ProofBar";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { Process } from "@/components/sections/Process";
import { Faq } from "@/components/sections/Faq";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Dịch vụ SEO tổng thể",
  description: "Dịch vụ SEO tổng thể SEOSONA: technical SEO, content SEO, entity, offpage và đo lường tăng trưởng."
};

const features = [
  { title: "Technical SEO", description: "Audit crawl, index, canonical, redirect, sitemap, robots, schema và Core Web Vitals." },
  { title: "Content SEO", description: "Xây topical map, keyword mapping, content brief, internal link và kế hoạch update nội dung." },
  { title: "Authority & Entity", description: "Tăng độ tin cậy website bằng entity, brand mention, digital PR và backlink có kiểm soát." },
  { title: "Analytics", description: "Thiết lập GA4, GSC, conversion tracking, dashboard và báo cáo tăng trưởng theo tháng." },
  { title: "SEO Roadmap", description: "Ưu tiên backlog theo impact, effort, timeline và nguồn lực triển khai thực tế." },
  { title: "CRO phối hợp", description: "Tối ưu landing page, CTA, form và luồng chuyển đổi để traffic tạo ra lead/doanh thu." }
];

const steps = [
  { title: "Audit", description: "Đánh giá hiện trạng website, thị trường, đối thủ, tracking và dữ liệu organic." },
  { title: "Strategy", description: "Xây chiến lược SEO, topical map, KPI, roadmap và kế hoạch nguồn lực." },
  { title: "Execution", description: "Triển khai technical, content, onpage, internal link, entity và authority." },
  { title: "Growth", description: "Đo lường, update, tối ưu chuyển đổi và mở rộng cụm tăng trưởng." }
];

const faq = [
  { question: "Dịch vụ SEO tổng thể phù hợp với ai?", answer: "Phù hợp với doanh nghiệp muốn tăng trưởng organic dài hạn, có website đang hoạt động hoặc chuẩn bị xây lại website để đầu tư SEO bài bản." },
  { question: "Bao lâu thấy kết quả SEO?", answer: "Thông thường cần 3-6 tháng để thấy tín hiệu rõ hơn, tùy độ cạnh tranh ngành, hiện trạng website, ngân sách content và tốc độ triển khai kỹ thuật." },
  { question: "SEOSONA có cam kết top Google không?", answer: "Nên tập trung cam kết quy trình, minh bạch dữ liệu và mục tiêu tăng trưởng hợp lý thay vì cam kết top tuyệt đối, vì ranking phụ thuộc thuật toán và cạnh tranh thị trường." }
];

export default function Page() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Dịch vụ SEO tổng thể",
    provider: { "@type": "Organization", name: siteConfig.name, url: siteConfig.domain },
    areaServed: "Việt Nam",
    serviceType: "SEO"
  };

  return (
    <main>
      <JsonLd data={serviceSchema} />
      <PageHero eyebrow="Dịch vụ SEO tổng thể" title="Tăng trưởng organic bền vững bằng hệ thống SEO toàn diện" description="SEOSONA xây dựng chiến lược SEO từ technical, content, entity, authority đến analytics để giúp doanh nghiệp tăng traffic chất lượng và chuyển đổi từ Google." secondaryCta="Xem case study" secondaryHref="/case-study/" />
      <ProofBar />
      <FeatureGrid eyebrow="Phạm vi dịch vụ" title="Không chỉ tối ưu từ khóa, mà xây hệ thống tăng trưởng" description="Một dự án SEO hiệu quả cần kết hợp kỹ thuật, nội dung, độ tin cậy, dữ liệu và khả năng chuyển đổi." features={features} />
      <Process steps={steps} description="Quy trình giúp đội ngũ và khách hàng cùng nhìn rõ việc cần làm, ưu tiên triển khai và kết quả kỳ vọng." />
      <Faq items={faq} />
      <CtaBand />
    </main>
  );
}
