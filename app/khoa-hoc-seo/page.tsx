import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { Process } from "@/components/sections/Process";
import { Faq } from "@/components/sections/Faq";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Khóa học SEO thực chiến cho doanh nghiệp | SEOSONA",
  description:
    "Khóa học SEO SEOSONA: đào tạo thực chiến từ nền tảng đến triển khai cho cá nhân, marketer, content team và doanh nghiệp muốn tự làm SEO bài bản.",
  alternates: { canonical: "/khoa-hoc-seo/" }
};

const features = [
  { title: "Nền tảng SEO", description: "Hiểu cách Google crawl, index, xếp hạng và cách xây chiến lược SEO đúng từ đầu, tránh lãng phí nguồn lực." },
  { title: "Keyword Research", description: "Phân tích search intent, xây topical map, keyword mapping và ưu tiên từ khóa theo tiềm năng chuyển đổi." },
  { title: "Technical SEO", description: "Kiểm tra crawlability, indexation, tốc độ trang, schema, redirect và các yếu tố kỹ thuật quan trọng." },
  { title: "Content SEO", description: "Viết content brief, tối ưu heading, entity, internal link và nội dung đáp ứng E-E-A-T của Google." },
  { title: "Thực hành dự án", description: "Làm keyword research, audit onpage, technical checklist, content brief và đo lường kết quả trên dự án thực." },
  { title: "Ứng dụng doanh nghiệp", description: "Biết cách phối hợp content, dev, ads, sales và quản trị KPI SEO theo tháng để tăng trưởng bền vững." }
];

const curriculum = [
  { title: "Module 1 — Nền tảng", description: "Cách Google hoạt động, thuật toán xếp hạng, E-E-A-T và tư duy chiến lược SEO." },
  { title: "Module 2 — Keyword & Topical Map", description: "Nghiên cứu từ khóa, phân tích search intent, xây topical map và keyword mapping." },
  { title: "Module 3 — Technical SEO", description: "Crawl, index, tốc độ trang, Core Web Vitals, schema markup và redirect." },
  { title: "Module 4 — Content & Onpage", description: "Content brief, heading, entity, internal link, CTA và tối ưu bài viết hiện có." },
  { title: "Module 5 — Offpage & Authority", description: "Link building, brand mention, digital PR và xây dựng uy tín tên miền có kiểm soát." },
  { title: "Module 6 — Đo lường & Tăng trưởng", description: "GSC, GA4, dashboard, báo cáo KPI và chiến lược mở rộng cụm nội dung." }
];

const faq = [
  { question: "Khóa học SEO phù hợp với ai?", answer: "Phù hợp với cá nhân, content writer, marketer, doanh nghiệp muốn tự triển khai SEO hoặc xây đội in-house có năng lực phân tích và triển khai SEO bài bản." },
  { question: "Hình thức học như thế nào?", answer: "Học online qua video kết hợp bài tập thực hành trên dự án thật. Có hỗ trợ review bài và Q&A với giảng viên trong suốt khóa học." },
  { question: "Sau khóa học có thể làm được gì?", answer: "Học viên có thể tự audit website, lập SEO roadmap, xây topical map, viết content brief chuẩn SEO và đo lường tăng trưởng bằng GSC/GA4." },
  { question: "Có chứng chỉ sau khi hoàn thành không?", answer: "Có. Học viên hoàn thành khóa học và bài tập thực hành sẽ nhận chứng chỉ từ SEOSONA, có thể dùng trong hồ sơ nghề nghiệp." }
];

export default function Page() {
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Khóa học SEO thực chiến SEOSONA",
    description:
      "Chương trình đào tạo SEO từ nền tảng đến triển khai cho cá nhân, marketer và doanh nghiệp.",
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.domain
    },
    courseMode: "Online",
    inLanguage: "vi",
    teaches: "Search Engine Optimization",
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "Online",
      instructor: {
        "@type": "Person",
        name: "Trần Chí Quyết",
        jobTitle: "SEO Consultant & Trainer"
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
        eyebrow="Khóa học SEO"
        title="Học SEO thực chiến từ nền tảng đến triển khai"
        description="Chương trình đào tạo dành cho người muốn làm SEO bài bản: phân tích dữ liệu, lập kế hoạch, triển khai và đo lường tăng trưởng organic từ Google."
        secondaryCta="Xem Case Study"
        secondaryHref="/case-study/"
      />
      <FeatureGrid
        eyebrow="Kỹ năng chính"
        title="Tập trung vào năng lực triển khai thật"
        description="Không chỉ học lý thuyết — mỗi module đều có bài tập thực hành và áp dụng ngay vào dự án thực tế."
        features={features}
      />
      <Process
        steps={curriculum}
        description="Chương trình 6 module từ nền tảng đến triển khai, kết hợp lý thuyết và bài tập thực hành trên dự án thật."
      />
      <Faq items={faq} />
      <CtaBand />
    </main>
  );
}
