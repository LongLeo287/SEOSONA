import { Metadata } from "next";
import { AcademyHero } from "@/components/sections/academy/AcademyHero";
import { AcademyInstructor } from "@/components/sections/academy/AcademyInstructor";
import { AcademyBenefits } from "@/components/sections/academy/AcademyBenefits";
import { EventGallery } from "@/components/sections/academy/EventGallery";
import { Curriculum } from "@/components/sections/Curriculum";
import { Testimonials } from "@/components/sections/Testimonials";
import { JsonLd } from "@/components/seo/JsonLd";
import { courseSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Khóa học SEO All In One - Chí Quyết Academy | SEOSONA",
  description: "Khóa học SEO thực chiến từ Trần Chí Quyết: lộ trình All In One từ nền tảng đến nâng cao, giúp bạn tự triển khai dự án và phát triển nghề SEO.",
  alternates: { canonical: "/chi-quyet-academy/" },
  openGraph: {
    title: "Khóa học SEO All In One - Chí Quyết Academy | SEOSONA",
    description: "Khóa học SEO thực chiến từ Trần Chí Quyết: lộ trình All In One từ nền tảng đến nâng cao, giúp bạn tự triển khai dự án và phát triển nghề SEO.",
    url: "https://seosona.com/chi-quyet-academy/",
    type: "website",
  },
};

export default function AcademyPage() {
  const jsonLd = courseSchema({
    name: "Khóa học SEO All In One - Chí Quyết Academy",
    description: "Khóa học SEO thực chiến từ nền tảng đến nâng cao, giúp học viên tự triển khai dự án và phát triển nghề SEO.",
    path: "/chi-quyet-academy/"
  });

  return (
    <main>
      <JsonLd data={jsonLd} />
      <AcademyHero />
      <AcademyInstructor />
      <AcademyBenefits />
      <Curriculum 
        id="curriculum"
        eyebrow="Lộ trình đào tạo"
        title="Giáo trình SEO All In One độc quyền"
        description="Được tinh gọn từ 7 năm thực chiến của giảng viên Trần Chí Quyết, mang đến quy trình SEO chuẩn hóa giúp bạn có thể tự tin quản lý dự án ngay sau khóa học."
        modules={[
          { title: "Module 1: Tư duy nền tảng & Chiến lược SEO", lessons: ["Cách Google hoạt động và xếp hạng website", "Xây dựng tư duy SEO Manager", "Phân tích Search Intent và lập kế hoạch SEO tổng thể"] },
          { title: "Module 2: Keyword Research & Topical Map", lessons: ["Phân tích từ khóa chuyên sâu", "Gom nhóm và xây dựng Topical Map", "Lên sơ đồ cấu trúc Silo cho website"] },
          { title: "Module 3: Onpage & Content Chuẩn SEO", lessons: ["Viết Outline và Content Brief chuẩn", "Tối ưu Onpage bài viết (Title, Heading, Entity)", "Tối ưu UX/UI và E-E-A-T cho Content"] },
          { title: "Module 4: Technical SEO & Audit", lessons: ["Kiểm tra tốc độ trang (Core Web Vitals)", "Sử dụng Schema Markup", "Thu thập dữ liệu, Audit lỗi index và crawl"] },
          { title: "Module 5: Offpage & Link Building", lessons: ["Chiến lược đi backlink an toàn", "Social Entity & Brand Mentions", "Digital PR và báo chí"] },
          { title: "Module 6: Đo lường & Tối ưu", lessons: ["Sử dụng Google Search Console và GA4", "Tạo Report báo cáo KPIs tự động", "Tối ưu hóa chuyển đổi (CRO) trên website"] }
        ]}
      />
      <EventGallery />
      <Testimonials />
    </main>
  );
}
