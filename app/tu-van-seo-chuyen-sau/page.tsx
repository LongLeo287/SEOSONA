import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tư vấn SEO chuyên sâu",
  description: "Dịch vụ tư vấn SEO chuyên sâu cho doanh nghiệp cần audit, roadmap và cố vấn triển khai SEO."
};

export default function Page() {
  return (
    <main className="container py-20">
      <h1 className="text-5xl font-black">Tư vấn SEO chuyên sâu</h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
        Trang này sẽ kế thừa intent cũ nhưng loại bỏ heading lặp, shortcode lỗi và tăng trust bằng profile chuyên gia, quy trình audit, deliverables, FAQ và form tư vấn.
      </p>
    </main>
  );
}
