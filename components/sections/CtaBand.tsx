import Link from "next/link";

export function CtaBand() {
  return (
    <section className="py-16">
      <div className="container rounded-[32px] bg-gradient-to-br from-blue-600 via-cyan-500 to-violet-600 p-10 text-white md:p-14">
        <h2 className="max-w-3xl text-4xl font-black tracking-tight">Cần một kế hoạch SEO/Growth rõ ràng hơn?</h2>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-blue-50">SEOSONA sẽ audit hiện trạng, xác định cơ hội tăng trưởng và đề xuất roadmap triển khai phù hợp với nguồn lực doanh nghiệp.</p>
        <Link href="/lien-he/" className="mt-8 inline-flex rounded-full bg-white px-6 py-4 font-black text-blue-700">Nhận tư vấn</Link>
      </div>
    </section>
  );
}
