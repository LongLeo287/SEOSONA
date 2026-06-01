import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dịch vụ SEO tổng thể",
  description: "Dịch vụ SEO tổng thể SEOSONA: technical SEO, content SEO, entity, offpage và đo lường tăng trưởng."
};

export default function Page() {
  return (
    <main className="container py-20">
      <h1 className="text-5xl font-black">Dịch vụ SEO tổng thể</h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
        Trang landing dịch vụ SEO sẽ được rebuild với cấu trúc: vấn đề khách hàng, giải pháp, quy trình, case study, bảng gói, FAQ, schema Service và CTA.
      </p>
    </main>
  );
}
