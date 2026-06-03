import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { Process } from "@/components/sections/Process";
import { Faq } from "@/components/sections/Faq";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Khóa học Content SEO thực chiến từ A đến Z | SEOSONA",
  description:
    "Khóa học Content SEO SEOSONA: xây topical map, content brief, phân tích search intent và sản xuất nội dung có khả năng xếp hạng cao trên Google bền vững.",
  alternates: { canonical: "/khoa-hoc-content-seo/" }
};

const features = [
  { title: "Search Intent", description: "Phân tích ý định tìm kiếm, hành trình khách hàng và loại nội dung cần sản xuất theo từng giai đoạn." },
  { title: "Topical Map", description: "Xây cấu trúc cụm chủ đề theo topical authority, liên kết nội bộ và hành trình đọc của người dùng." },
  { title: "Content Brief", description: "Tạo outline, entity, heading, FAQ, internal link và checklist tối ưu trước khi viết để đảm bảo chất lượng." },
  { title: "E-E-A-T Signals", description: "Tích hợp expertise, experience, authority và trust vào nội dung theo tiêu chuẩn đánh giá của Google." },
  { title: "Content System", description: "Xây quy trình sản xuất, review, publish, update và đo lường hiệu quả nội dung theo dữ liệu thực." },
  { title: "Đo lường & Tối ưu", description: "Theo dõi ranking, CTR, traffic, bounce rate và cải thiện nội dung liên tục theo GSC và GA4." }
];

const curriculum = [
  { title: "Module 1 — Nền tảng Content SEO", description: "Cách Google đánh giá nội dung, E-E-A-T, các loại content theo search intent và hành trình khách hàng." },
  { title: "Module 2 — Keyword & Topical Map", description: "Nghiên cứu từ khóa, phân tích intent, xây topical cluster và ưu tiên keyword theo cơ hội thực tế." },
  { title: "Module 3 — Content Brief & Outline", description: "Tạo brief chuẩn, outline theo SERP, heading structure, entity và checklist tối ưu trước khi viết." },
  { title: "Module 4 — Viết & Tối ưu nội dung", description: "Kỹ thuật viết SEO: intro hook, structured data, internal link, CTA và cách update bài cũ hiệu quả." },
  { title: "Module 5 — Content System", description: "Xây quy trình sản xuất nội dung cho team: từ brief, viết, review, publish đến tracking kết quả." },
  { title: "Module 6 — Đo lường & Tăng trưởng", description: "Đọc dữ liệu GSC, GA4, tìm cơ hội cải thiện và mở rộng cụm nội dung theo hiệu suất thực tế." }
];

const faq = [
  { question: "Khóa học Content SEO dành cho ai?", answer: "Phù hợp với content writer, editor, SEO executive, content manager và doanh nghiệp muốn xây đội content có năng lực tăng trưởng organic bài bản." },
  { question: "Sau khóa học có thể làm được gì?", answer: "Học viên có thể tự nghiên cứu từ khóa, xây topical map, tạo content brief chuyên sâu, viết nội dung chuẩn SEO và đo lường hiệu quả bằng GSC/GA4." },
  { question: "Khóa học có bài tập thực hành không?", answer: "Có. Mỗi module đều có bài tập thực hành áp dụng ngay vào dự án thật. Học viên được review bài và hỗ trợ trực tiếp từ giảng viên." },
  { question: "Hình thức học như thế nào?", answer: "Học online qua video kết hợp bài tập thực hành. Có thể học theo tiến độ cá nhân và nhận hỗ trợ Q&A trong suốt quá trình học." }
];

export default function Page() {
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Khóa học Content SEO thực chiến SEOSONA",
    description:
      "Chương trình đào tạo Content SEO từ nền tảng đến hệ thống: keyword research, topical map, content brief, viết SEO và đo lường tăng trưởng.",
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.domain
    },
    courseMode: "Online",
    inLanguage: "vi",
    teaches: "Content SEO, Topical Map, Search Intent, Content Brief",
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "Online",
      instructor: {
        "@type": "Person",
        name: "Trần Chí Quyết",
        jobTitle: "SEO Consultant & Content Strategist"
      }
    }
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
      <JsonLd data={[courseSchema, faqSchema]} />
      <PageHero
        eyebrow="Khóa học Content SEO"
        title="Xây nội dung SEO có chiến lược và khả năng xếp hạng"
        description="Chương trình dành cho content writer, editor, SEO executive và doanh nghiệp muốn xây đội content có năng lực tăng trưởng organic bền vững."
        secondaryCta="Xem Khóa học SEO"
        secondaryHref="/khoa-hoc-seo/"
      />
      <FeatureGrid
        eyebrow="Kỹ năng chính"
        title="Từ keyword đến content system hoàn chỉnh"
        description="Không chỉ học cách viết — mỗi module trang bị năng lực chiến lược, thực thi và đo lường nội dung theo dữ liệu."
        features={features}
      />
      <Process
        steps={curriculum}
        description="Chương trình 6 module từ nền tảng đến hệ thống, mỗi module có bài tập thực hành trên dự án thật."
      />
      <Faq items={faq} />
      <CtaBand />
    </main>
  );
}
