import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "Đội ngũ chuyên gia SEOSONA — Google Marketing",
  description:
    "Đội ngũ chuyên gia SEO, Google Ads, Content SEO và đào tạo của SEOSONA. Nhiều năm kinh nghiệm triển khai dự án thực chiến cho doanh nghiệp Việt Nam.",
  alternates: { canonical: "/doi-ngu-nhan-su/" }
};

const team = [
  { name: "Trần Chí Quyết", role: "SEO Consultant / Trainer" },
  { name: "SEO Strategy Team", role: "Technical, Content, Entity, Analytics" },
  { name: "Growth Team", role: "Google Ads, CRO, Reporting" }
];

export default function Page() {
  return (
    <main>
      <PageHero eyebrow="Đội ngũ" title="Đội ngũ triển khai SEO và Google Marketing" description="Trang đội ngũ sẽ được hoàn thiện bằng ảnh thật, profile chuyên gia, kinh nghiệm, chứng chỉ, dự án tiêu biểu và liên kết author cho bài viết chuyên môn." />
      <section className="container py-16">
        <div className="grid gap-5 md:grid-cols-3">
          {team.map((member) => (
            <div key={member.name} className="card p-6">
              <div className="mb-5 grid h-20 w-20 place-items-center rounded-3xl bg-blue-50 text-2xl font-black text-blue-700">{member.name.charAt(0)}</div>
              <h2 className="text-2xl font-black">{member.name}</h2>
              <p className="mt-2 text-slate-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
