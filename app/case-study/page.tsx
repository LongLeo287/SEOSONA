import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Study SEO",
  description: "Các case study SEO theo ngành: nội thất, giáo dục, dược, logistics, B2B và dịch vụ chuyên môn."
};

const cases = ["Nội thất", "Giáo dục", "Dược phẩm", "Logistics", "B2B", "Luật"];

export default function Page() {
  return (
    <main className="container py-20">
      <h1 className="text-5xl font-black">Case Study SEO</h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
        Collection case study sẽ được chuẩn hóa theo bối cảnh, vấn đề, giải pháp, kết quả, dữ liệu GSC/GA4 và testimonial.
      </p>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {cases.map((item) => (
          <div className="card p-6" key={item}>
            <h2 className="text-2xl font-black">{item}</h2>
            <p className="mt-3 text-slate-600">Template case study ngành {item.toLowerCase()}.</p>
          </div>
        ))}
      </div>
    </main>
  );
}
