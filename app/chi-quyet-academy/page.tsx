import { Metadata } from "next";
import { AcademyHero } from "@/components/sections/academy/AcademyHero";
import { AcademyInstructor } from "@/components/sections/academy/AcademyInstructor";
import { AcademyBenefits } from "@/components/sections/academy/AcademyBenefits";
import { Testimonials } from "@/components/sections/Testimonials";

export const metadata: Metadata = {
  title: "Khóa học SEO All In One - Chí Quyết Academy | SEOSONA",
  description: "Khóa học truyền nghề SEO thực chiến đúc kết 7+ năm kinh nghiệm từ Trần Chí Quyết. Lộ trình SEO All In One từ cơ bản đến nâng cao giúp bạn tự triển khai và kiếm tiền từ nghề SEO.",
  openGraph: {
    title: "Khóa học SEO All In One - Chí Quyết Academy | SEOSONA",
    description: "Khóa học truyền nghề SEO thực chiến đúc kết 7+ năm kinh nghiệm từ Trần Chí Quyết. Lộ trình SEO All In One từ cơ bản đến nâng cao giúp bạn tự triển khai và kiếm tiền từ nghề SEO.",
    url: "https://seosona.com/chi-quyet-academy/",
    type: "website",
  },
};

export default function AcademyPage() {
  return (
    <main>
      <AcademyHero />
      <AcademyInstructor />
      <AcademyBenefits />
      <Testimonials />
    </main>
  );
}
