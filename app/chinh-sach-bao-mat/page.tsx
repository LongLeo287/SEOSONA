import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Chính sách bảo mật | SEOSONA",
  description:
    "Chính sách bảo mật thông tin khi khách hàng truy cập website, gửi biểu mẫu tư vấn hoặc tương tác với các kênh chính thức của SEOSONA.",
  alternates: { canonical: "/chinh-sach-bao-mat/" }
};

const sections = [
  {
    title: "Thông tin SEOSONA có thể thu thập",
    body: "Khi bạn gửi biểu mẫu tư vấn, đăng ký nhận tài liệu hoặc liên hệ trực tiếp, SEOSONA có thể ghi nhận họ tên, số điện thoại, email, website, nhu cầu dịch vụ và các thông tin bạn chủ động cung cấp."
  },
  {
    title: "Mục đích sử dụng thông tin",
    body: "Thông tin được dùng để tư vấn dịch vụ, phản hồi yêu cầu, cải thiện trải nghiệm website, đo lường hiệu quả marketing và gửi nội dung phù hợp với nhu cầu bạn đã thể hiện."
  },
  {
    title: "Bảo mật và chia sẻ dữ liệu",
    body: "SEOSONA không bán dữ liệu cá nhân. Dữ liệu chỉ được chia sẻ cho đối tác kỹ thuật hoặc nền tảng vận hành cần thiết khi phục vụ đúng mục đích tư vấn, đo lường, chăm sóc khách hàng hoặc khi cơ quan có thẩm quyền yêu cầu theo quy định pháp luật."
  },
  {
    title: "Cookie và dữ liệu đo lường",
    body: "Website có thể dùng cookie, analytics, tracking chuyển đổi và các công cụ đo lường để hiểu hiệu suất nội dung, chất lượng traffic và hành vi tương tác ở mức phục vụ vận hành marketing."
  },
  {
    title: "Quyền của khách hàng",
    body: "Bạn có thể yêu cầu SEOSONA cập nhật, điều chỉnh hoặc ngừng sử dụng thông tin liên hệ của mình cho mục đích marketing bằng cách gửi yêu cầu qua email hoặc hotline chính thức."
  }
];

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Chính sách bảo mật | SEOSONA",
    url: `${siteConfig.domain}/chinh-sach-bao-mat/`,
    description: metadata.description
  };

  return (
    <main className="bg-white">
      <JsonLd data={schema} />
      <section className="relative overflow-hidden bg-[#F8FAFC] py-14 sm:py-16 lg:py-20">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-black uppercase text-[#3BA6F1]">SEOSONA Legal</p>
          <h1 className="mt-4 text-balance text-4xl font-black leading-tight text-[#04091A] sm:text-5xl">
            Chính sách bảo mật
          </h1>
          <p className="mt-5 text-pretty text-[17px] font-medium leading-8 text-slate-600">
            Chính sách này mô tả cách SEOSONA thu thập, sử dụng và bảo vệ thông tin khi bạn truy cập website hoặc gửi yêu cầu tư vấn.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-14">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {sections.map((section) => (
              <article key={section.title} className="border-b border-slate-200 pb-8">
                <h2 className="text-2xl font-black text-[#04091A]">{section.title}</h2>
                <p className="mt-3 text-base leading-8 text-slate-600">{section.body}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-[24px] border border-slate-200 bg-[#F8FAFC] p-6 sm:p-8">
            <h2 className="text-2xl font-black text-[#04091A]">Thông tin liên hệ</h2>
            <p className="mt-3 text-base leading-8 text-slate-600">
              Email: <a className="font-bold text-[#3BA6F1]" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              {" "}· Hotline: <a className="font-bold text-[#3BA6F1]" href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}>{siteConfig.phone}</a>
            </p>
            <Link href="/lien-he/" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#3BA6F1] px-6 py-3 text-sm font-bold text-white transition-all hover:bg-blue-600">
              Gửi yêu cầu hỗ trợ <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
