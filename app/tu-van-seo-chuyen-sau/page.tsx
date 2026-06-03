import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { Process } from "@/components/sections/Process";
import { Faq } from "@/components/sections/Faq";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site";


export const metadata: Metadata = {
  title: "Tư vấn SEO chuyên sâu cho doanh nghiệp | SEOSONA",
  description:
    "Dịch vụ tư vấn SEO chuyên sâu: audit hiện trạng, lập SEO roadmap, cố vấn triển khai và review định kỳ cho đội marketing in-house muốn tăng trưởng bền vững.",
  alternates: { canonical: "/tu-van-seo-chuyen-sau/" }
};

const deliverables = [
  { title: "SEO Audit", description: "Báo cáo technical, content, keyword, indexation, internal link, backlink và tracking." },
  { title: "SEO Roadmap", description: "Kế hoạch ưu tiên theo tháng, chia rõ việc của SEO, content, dev và business owner." },
  { title: "Review triển khai", description: "Đánh giá định kỳ các đầu việc đã làm, phát hiện điểm nghẽn và điều chỉnh chiến lược." },
  { title: "Coaching team", description: "Đào tạo đội in-house biết cách đọc dữ liệu, triển khai checklist và quản trị chất lượng." },
  { title: "Content system", description: "Xây quy trình brief, viết, review, publish, update và internal link." },
  { title: "Measurement", description: "Thiết lập dashboard theo dõi traffic, ranking, lead, conversion và business impact." }
];

const steps = [
  { title: "Khảo sát", description: "Thu thập mục tiêu, hiện trạng, dữ liệu GSC/GA4 và bối cảnh kinh doanh." },
  { title: "Audit", description: "Phân tích website, đối thủ, cơ hội từ khóa, technical và content gap." },
  { title: "Roadmap", description: "Xây kế hoạch ưu tiên theo tác động, nguồn lực và timeline triển khai." },
  { title: "Cố vấn", description: "Đồng hành review, tháo gỡ vướng mắc và tối ưu liên tục theo dữ liệu." }
];

const faq = [
  { question: "Tư vấn SEO khác gì dịch vụ SEO tổng thể?", answer: "Tư vấn SEO phù hợp khi doanh nghiệp đã có team triển khai nội bộ và cần chuyên gia audit, định hướng, review chất lượng và cố vấn chiến lược." },
  { question: "Có cần cấp quyền GSC/GA4 không?", answer: "Nên có quyền xem dữ liệu GSC, GA4, CMS và một số công cụ audit để đánh giá chính xác hiện trạng và ưu tiên xử lý." },
  { question: "Buổi tư vấn nhận được gì?", answer: "Tùy gói, doanh nghiệp có thể nhận audit, roadmap, danh sách việc ưu tiên, review content/technical và khuyến nghị đo lường." }
];

export default function Page() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Tư vấn SEO chuyên sâu",
    description:
      "Dịch vụ tư vấn SEO: audit hiện trạng, lập SEO roadmap, cố vấn triển khai và review định kỳ cho đội marketing in-house.",
    provider: { "@type": "Organization", name: siteConfig.name, url: siteConfig.domain },
    areaServed: "Việt Nam",
    serviceType: "SEO Consulting"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer }
    }))
  };

  return (
    <main>
      <JsonLd data={[serviceSchema, faqSchema]} />
      <PageHero eyebrow="Tư vấn SEO chuyên sâu" title="Cố vấn SEO cho doanh nghiệp cần chiến lược rõ ràng" description="SEOSONA hỗ trợ audit, lập roadmap, review triển khai và cố vấn đội in-house để SEO đi đúng hướng, tránh làm nhiều nhưng không tạo tăng trưởng." secondaryCta="Xem dịch vụ SEO" secondaryHref="/dich-vu-seo/" />
      <FeatureGrid eyebrow="Deliverables" title="Bạn nhận được gì sau quá trình tư vấn?" features={deliverables} />
      <Process steps={steps} description="Quy trình tư vấn tập trung vào chẩn đoán đúng vấn đề, ưu tiên đúng việc và giúp team nội bộ triển khai hiệu quả hơn." />
      <Faq items={faq} />
      <CtaBand />
    </main>
  );
}
