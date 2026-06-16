import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { siteConfig } from "@/lib/site";
import Image from "next/image";
import { CheckCircle2, Target, Eye, ShieldCheck, Heart, Users, LineChart } from "lucide-react";

export const metadata: Metadata = {
  title: "Về SEOSONA — Google Marketing Agency Việt Nam",
  description:
    "SEOSONA là Google Marketing Agency chuyên SEO tổng thể, Google Ads, Content SEO và đào tạo đội ngũ. Phương pháp tiếp cận dựa trên dữ liệu và tư duy hệ thống.",
  alternates: { canonical: "/ve-seosona/" }
};

const timeline = [
  { year: "2018", title: "Khởi nguồn", description: "Bắt đầu với đội ngũ nhỏ chuyên sâu về Technical SEO và xây dựng nền tảng PBN." },
  { year: "2020", title: "Thành lập công ty", description: "Chính thức ra mắt thương hiệu SEOSONA, mở rộng dịch vụ SEO Tổng thể cho doanh nghiệp." },
  { year: "2022", title: "Định vị Google Marketing Agency", description: "Mở rộng hệ sinh thái bao gồm Google Ads, Facebook Ads và thiết lập hệ thống Tracking & Automation." },
  { year: "Nay", title: "Tiếp tục Tăng trưởng", description: "Phục vụ hơn 500+ khách hàng doanh nghiệp, đẩy mạnh ứng dụng AI vào quy trình Data và Content." }
];

const values = [
  {
    title: "Tư duy hệ thống",
    description: "Không chạy theo các thủ thuật (trick) ngắn hạn. Chúng tôi xây dựng cấu trúc bền vững ngay từ những viên gạch đầu tiên.",
    icon: <LineChart className="w-6 h-6 text-blue-600" />
  },
  {
    title: "Cam kết minh bạch",
    description: "Khách hàng nắm rõ mọi dòng chảy của dự án: Traffic đến từ đâu, chi phí phân bổ ra sao, chuyển đổi đạt mức nào.",
    icon: <ShieldCheck className="w-6 h-6 text-blue-600" />
  },
  {
    title: "Trách nhiệm tận tâm",
    description: "Coi sản phẩm của khách hàng như sản phẩm của chính mình. Sự phát triển của đối tác là bảo chứng cho năng lực của SEOSONA.",
    icon: <Heart className="w-6 h-6 text-blue-600" />
  },
  {
    title: "Đội ngũ chuyên biệt",
    description: "Sở hữu những nhân sự am hiểu sâu sắc về Tech, Content và UI/UX để giải quyết triệt để bài toán tăng trưởng.",
    icon: <Users className="w-6 h-6 text-blue-600" />
  }
];

export default function Page() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "Về SEOSONA — Google Marketing Agency Việt Nam",
    url: `${siteConfig.domain}/ve-seosona/`,
    description:
      "SEOSONA là Google Marketing Agency chuyên SEO tổng thể, Google Ads, Content SEO và đào tạo đội ngũ.",
    mainEntity: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.domain,
      email: siteConfig.email,
      telephone: siteConfig.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address,
        addressLocality: "TP.HCM",
        addressCountry: "VN"
      },
      sameAs: Object.values(siteConfig.socials)
    }
  };

  return (
    <main className="bg-white">
      <JsonLd data={aboutSchema} />
      
      <PageHero 
        eyebrow="Câu chuyện của chúng tôi" 
        title="Từ nhóm chuyên gia Technical đến Google Marketing Agency Số 1" 
        accentWord="Số 1"
        description="SEOSONA không bán những lời hứa hẹn sáo rỗng. Chúng tôi dùng Dữ liệu, Công nghệ và Quy trình chuẩn hóa để thiết kế nên lộ trình tăng trưởng thực tế cho hàng trăm doanh nghiệp tại Việt Nam." 
      />

      {/* Vision & Mission */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-50/50 pointer-events-none"></div>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            <ScrollReveal>
              <div className="relative">
                <div className="aspect-[4/3] rounded-[40px] overflow-hidden bg-slate-100 relative shadow-2xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src="https://seosona.com/wp-content/uploads/2023/10/seosona-logo-final.png" 
                    alt="Văn phòng SEOSONA" 
                    className="object-contain p-20 w-full h-full bg-white"
                  />
                </div>
                <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-[30px] shadow-xl border border-slate-100 hidden md:block">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100">
                      <Users className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-3xl font-black text-slate-900">50+</div>
                      <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Chuyên gia</div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <div className="flex flex-col justify-center">
              <ScrollReveal delay={100}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-bold text-sm mb-6 border border-blue-100">
                  Tầm nhìn & Sứ mệnh
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-[1.2]">
                  Đồng hành cùng sự thịnh vượng của đối tác
                </h2>
                <p className="text-lg text-slate-600 mb-10 text-pretty">
                  Trong một thế giới Digital Marketing ngày càng phân mảnh và phức tạp, SEOSONA đóng vai trò là một "Hệ điều hành" kết nối mọi điểm chạm: từ tối ưu công cụ tìm kiếm, quảng cáo, đến phân tích hành vi người dùng bằng Data và AI.
                </p>
                
                <div className="space-y-8">
                  <div className="flex gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center shrink-0 shadow-lg shadow-blue-600/30">
                      <Target className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">Sứ mệnh</h4>
                      <p className="text-slate-600 text-pretty">Giúp các doanh nghiệp SMB tại Việt Nam sở hữu hệ thống Marketing In-house mạnh mẽ, tối ưu hóa chi phí chuyển đổi (CPA) thông qua quy trình tinh gọn.</p>
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center shrink-0 shadow-lg shadow-slate-900/20">
                      <Eye className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">Tầm nhìn</h4>
                      <p className="text-slate-600 text-pretty">Trở thành top 3 Performance Marketing Agency tại Việt Nam vào năm 2028, tiên phong ứng dụng công nghệ Tracking & AI Automation.</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-32 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-20 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">Hệ giá trị cốt lõi</h2>
              <p className="text-lg text-slate-600">Được xây dựng trên nền tảng đạo đức nghề nghiệp và năng lực chuyên môn, đây là 4 trụ cột định hình phong cách làm việc của toàn thể đội ngũ SEOSONA.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, idx) => (
                <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-500 group transform hover:-translate-y-2">
                  <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-500">
                    <div className="group-hover:text-white transition-colors duration-500 [&>svg]:text-inherit">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">Hành trình phát triển</h2>
              <p className="text-lg text-slate-600">Từ một văn phòng nhỏ đến một hệ sinh thái Google Marketing.</p>
            </div>
          </ScrollReveal>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="relative pl-12 md:pl-0">
                  {/* Desktop Center Line */}
                  <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2"></div>
                  
                  {/* Mobile Left Line */}
                  <div className="md:hidden absolute left-[15px] top-0 bottom-0 w-px bg-slate-200"></div>

                  <div className={`md:flex items-center justify-between w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    {/* Dot */}
                    <div className="absolute left-0 md:left-1/2 top-2 md:top-1/2 w-8 h-8 rounded-full bg-white border-4 border-blue-600 -translate-x-1/2 md:-translate-y-1/2 z-10 shadow-lg"></div>

                    {/* Content */}
                    <div className="md:w-[45%]">
                      <div className={`bg-slate-50 p-6 rounded-3xl border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 relative group ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                        <div className="text-blue-600 font-black text-xl mb-2">{item.year}</div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                        <p className="text-slate-600">{item.description}</p>
                      </div>
                    </div>
                    
                    {/* Empty Space for Grid */}
                    <div className="hidden md:block md:w-[45%]"></div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
