import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import Link from "next/link";
import { ArrowRight, Search, BarChart, Settings, Share2, MonitorPlay } from "lucide-react";

export const metadata: Metadata = {
  title: "Dịch vụ Digital Marketing chuyên sâu | SEOSONA",
  description:
    "Hệ sinh thái dịch vụ SEOSONA: SEO Tổng thể, Google Ads, Facebook Ads, Youtube Ads, Tracking & Automation giúp doanh nghiệp tăng trưởng đột phá.",
  alternates: { canonical: "/dich-vu/" }
};

const services = [
  {
    category: "SEO & Organic Growth",
    items: [
      {
        title: "SEO Tổng thể",
        description: "Giải pháp SEO All-in-one giúp thống lĩnh thị trường ngách, mang lại hàng trăm nghìn traffic tự nhiên bền vững.",
        href: "/dich-vu-seo/",
        icon: <Search className="h-6 w-6 text-[#1D4ED8]" />
      },
      {
        title: "Tư vấn SEO chuyên sâu",
        description: "Dành cho doanh nghiệp đã có team in-house cần Audit, lập Roadmap và định hướng chiến lược.",
        href: "/tu-van-seo-chuyen-sau/",
        icon: <BarChart className="h-6 w-6 text-[#1D4ED8]" />
      },
      {
        title: "Audit SEO",
        description: "Chẩn đoán technical, content, indexation, tracking và conversion để biết chính xác điểm nghẽn.",
        href: "/audit-seo/",
        icon: <BarChart className="h-6 w-6 text-[#1D4ED8]" />
      },
      {
        title: "Option SEO",
        description: "Chọn hướng triển khai phù hợp: audit, tư vấn, SEO tổng thể, website chuẩn SEO hoặc đào tạo in-house.",
        href: "/option-seo/",
        icon: <Settings className="h-6 w-6 text-[#1D4ED8]" />
      },
      {
        title: "Plan - Quy trình",
        description: "Quy trình từ brief, audit, proposal, roadmap, triển khai, báo cáo đến nghiệm thu và duy trì.",
        href: "/quy-trinh-seo/",
        icon: <MonitorPlay className="h-6 w-6 text-[#1D4ED8]" />
      },
      {
        title: "Tài nguyên SEO",
        description: "Checklist, template, ebook và tài liệu giúp đội SEO chuẩn bị dữ liệu và triển khai nhanh hơn.",
        href: "/tai-nguyen/",
        icon: <Search className="h-6 w-6 text-[#1D4ED8]" />
      }
    ]
  },
  {
    category: "Quảng cáo Đa kênh",
    items: [
      {
        title: "Google Ads",
        description: "Tiếp cận khách hàng có nhu cầu nóng, tối ưu CPA và tỷ lệ chuyển đổi cao nhất.",
        href: "/dich-vu-ads/google/",
        icon: <Search className="h-6 w-6 text-[#1D4ED8]" />
      },
      {
        title: "Facebook Ads",
        description: "Chiến lược quảng cáo đa điểm chạm, từ nhận diện thương hiệu đến re-marketing chuyển đổi.",
        href: "/dich-vu-ads/facebook/",
        icon: <Share2 className="h-6 w-6 text-[#1D4ED8]" />
      },
      {
        title: "YouTube Ads",
        description: "Lan tỏa thương hiệu qua video funnel, remarketing và đo lường tác động nhận diện/chuyển đổi.",
        href: "/dich-vu-ads/youtube/",
        icon: <MonitorPlay className="h-6 w-6 text-[#1D4ED8]" />
      }
    ]
  },
  {
    category: "Data & Vận hành",
    items: [
      {
        title: "Tracking, Automation & BE",
        description: "Thiết lập luồng tracking dữ liệu chuyên sâu, tự động hóa marketing và tích hợp CRM/Backend.",
        href: "/giai-phap/tracking-automation/",
        icon: <Settings className="h-6 w-6 text-[#1D4ED8]" />
      }
    ]
  }
];

export default function Page() {
  return (
    <main>
      <PageHero 
        eyebrow="Hệ sinh thái Dịch vụ" 
        title="Tăng trưởng bền vững bằng Dữ liệu và Trải nghiệm" 
        accentWord="Dữ liệu và Trải nghiệm"
        description="Chúng tôi không chỉ cung cấp dịch vụ đơn lẻ, SEOSONA mang đến một hệ sinh thái các giải pháp Digital Marketing toàn diện giúp doanh nghiệp của bạn phủ sóng mọi điểm chạm." 
        secondaryCta="Xem dự án thành công" 
        secondaryHref="/case-study/" 
      />

      <section className="py-16 md:py-24 bg-white relative">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-16">
            {services.map((group, groupIndex) => (
              <div key={groupIndex} className="flex flex-col">
                <h2 className="text-2xl font-black text-[#04091A] mb-8 pb-4 border-b border-slate-100 flex items-center gap-3">
                  <div className="h-6 w-1 bg-[#1D4ED8] rounded-full"></div>
                  {group.category}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {group.items.map((item, index) => (
                    <Link href={item.href} key={index} className="group relative flex flex-col p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:border-[#1D4ED8]/30 hover:shadow-[0_12px_40px_rgba(59,166,241,0.12)] transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                      <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
                        {item.icon}
                      </div>
                      <div className="h-14 w-14 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                      <h3 className="text-[20px] font-bold text-[#04091A] mb-3 group-hover:text-[#1D4ED8] transition-colors">{item.title}</h3>
                      <p className="text-[15px] text-slate-500 font-medium leading-relaxed mb-6 flex-1">
                        {item.description}
                      </p>
                      <div className="flex items-center text-[14px] font-bold text-[#1D4ED8]">
                        Tìm hiểu thêm
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}

