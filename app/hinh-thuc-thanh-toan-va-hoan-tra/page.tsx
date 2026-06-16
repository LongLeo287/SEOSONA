import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hình thức thanh toán và hoàn trả | SEOSONA",
  description:
    "Thông tin thanh toán, xuất hóa đơn và nguyên tắc hoàn trả khi khách hàng sử dụng dịch vụ SEO, Ads, đào tạo hoặc tư vấn tại SEOSONA.",
  alternates: { canonical: "/hinh-thuc-thanh-toan-va-hoan-tra/" }
};

const items = [
  {
    title: "Hình thức thanh toán",
    body: "Khách hàng có thể thanh toán theo hợp đồng, báo giá hoặc thỏa thuận triển khai đã được xác nhận với đội ngũ SEOSONA. Thông tin chuyển khoản chính thức sẽ được gửi trong quá trình tư vấn hoặc ký kết."
  },
  {
    title: "Xuất hóa đơn và chứng từ",
    body: "SEOSONA hỗ trợ chứng từ thanh toán và hóa đơn theo thông tin doanh nghiệp khách hàng cung cấp, phù hợp với phạm vi dịch vụ và quy định hiện hành."
  },
  {
    title: "Nguyên tắc hoàn trả",
    body: "Chính sách hoàn trả được xem xét theo từng trường hợp, dựa trên phạm vi công việc, mức độ đã triển khai, điều khoản hợp đồng và thỏa thuận bàn giao giữa hai bên."
  },
  {
    title: "Trao đổi trước khi thanh toán",
    body: "Khách hàng nên xác nhận rõ mục tiêu, phạm vi triển khai, timeline, đầu mối phụ trách, tiêu chí nghiệm thu và chi phí phát sinh trước khi tiến hành thanh toán."
  }
];

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Hình thức thanh toán và hoàn trả | SEOSONA",
    url: `${siteConfig.domain}/hinh-thuc-thanh-toan-va-hoan-tra/`,
    description: metadata.description
  };

  return (
    <main className="bg-white">
      <JsonLd data={schema} />
      <section className="relative overflow-hidden bg-[#F8FAFC] py-14 sm:py-16 lg:py-20">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-black uppercase text-[#3BA6F1]">SEOSONA Legal</p>
          <h1 className="mt-4 text-balance text-4xl font-black leading-tight text-[#04091A] sm:text-5xl">
            Hình thức thanh toán và hoàn trả
          </h1>
          <p className="mt-5 text-pretty text-[17px] font-medium leading-8 text-slate-600">
            Trang này giúp khách hàng nắm nhanh nguyên tắc thanh toán, chứng từ và hoàn trả trước khi sử dụng dịch vụ tại SEOSONA.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-14">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {items.map((item) => (
              <article key={item.title} className="border-b border-slate-200 pb-8">
                <h2 className="text-2xl font-black text-[#04091A]">{item.title}</h2>
                <p className="mt-3 text-base leading-8 text-slate-600">{item.body}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-[24px] border border-slate-200 bg-[#F8FAFC] p-6 sm:p-8">
            <h2 className="text-2xl font-black text-[#04091A]">Cần xác nhận thông tin thanh toán?</h2>
            <p className="mt-3 text-base leading-8 text-slate-600">
              Liên hệ SEOSONA qua {siteConfig.phone} hoặc {siteConfig.email} để được kiểm tra đúng báo giá, hợp đồng và thông tin chuyển khoản.
            </p>
            <Link href="/lien-he/" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#3BA6F1] px-6 py-3 text-sm font-bold text-white transition-all hover:bg-blue-600">
              Liên hệ xác nhận <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
