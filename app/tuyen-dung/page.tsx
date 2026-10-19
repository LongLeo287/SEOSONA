import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { webPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Tuyển dụng SEO và Google Marketing | SEOSONA",
  description:
    "Cơ hội nghề nghiệp tại SEOSONA: SEO Executive, Content SEO, Technical SEO, Google Ads Specialist. Môi trường thực chiến, học hỏi từ dự án thật.",
  alternates: { canonical: "/tuyen-dung/" }
};

const jobs = ["SEO Executive", "Content SEO Writer", "Technical SEO Specialist", "Google Ads Specialist"];

export default function Page() {
  const jsonLd = webPageSchema({
    name: "Tuyển dụng SEO và Google Marketing tại SEOSONA",
    description: "Cơ hội nghề nghiệp tại SEOSONA cho SEO, Content SEO, Technical SEO và Google Ads.",
    path: "/tuyen-dung/"
  });

  return (
    <main>
      <JsonLd data={jsonLd} />
      <PageHero eyebrow="Tuyển dụng" title="Gia nhập đội ngũ SEOSONA" description="SEOSONA tìm kiếm những người yêu thích SEO, dữ liệu, nội dung và tăng trưởng bền vững trên Google." primaryCta="Gửi CV" />
      <section className="container py-16">
        <div className="grid gap-5 md:grid-cols-2">
          {jobs.map((job) => (
            <div key={job} className="card p-6">
              <h2 className="text-2xl font-black text-balance">{job}</h2>
              <p className="mt-3 text-slate-600 text-pretty">Thông tin vị trí sẽ được cập nhật theo từng đợt tuyển dụng. Bạn có thể gửi CV để SEOSONA lưu hồ sơ và liên hệ khi có cơ hội phù hợp.</p>
            </div>
          ))}
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
