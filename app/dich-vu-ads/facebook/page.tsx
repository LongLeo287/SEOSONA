import type { Metadata } from "next";
import { CtaBand } from "@/components/sections/CtaBand";
import { Faq } from "@/components/sections/Faq";
import { Process } from "@/components/sections/Process";
import { PricingTable } from "@/components/sections/PricingTable";
import { Users, Target, TrendingUp, CheckCircle2, ImageIcon, SplitSquareHorizontal } from "lucide-react";
import { FacebookAbTestMockup } from "@/components/mockups/FacebookAbTestMockup";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dịch vụ Quảng cáo Facebook Ads | SEOSONA",
  description: "Dịch vụ Facebook Ads SEOSONA: chiến lược đa điểm chạm, creative testing, lead generation, remarketing và tracking chuyển đổi cho doanh nghiệp.",
  alternates: { canonical: "/dich-vu-ads/facebook/" }
};

export default function FacebookAdsPage() {
  const auditItems = [
    { title: "Funnel Diagnosis", desc: "Xác định mục tiêu campaign theo awareness, consideration, conversion, lead quality hoặc remarketing.", icon: Target },
    { title: "Audience Quality", desc: "Rà tệp cold, warm, lookalike, remarketing, exclusion và mức độ chồng chéo giữa các nhóm.", icon: Users },
    { title: "Creative Fatigue", desc: "Đánh giá hook, visual, offer, message angle, tần suất hiển thị và dấu hiệu creative bị mỏi.", icon: ImageIcon },
    { title: "Pixel & Event", desc: "Kiểm tra Meta Pixel, CAPI, event priority, form submit, CRM signal và độ tin cậy của conversion data.", icon: TrendingUp }
  ];

  const options = [
    { title: "Lead Generation", desc: "Tạo lead nhanh với form, landing page hoặc tin nhắn, có lọc chất lượng để giảm lead rác." },
    { title: "Conversion Ads", desc: "Tối ưu mua hàng/đăng ký bằng Pixel, CAPI, landing page và chiến lược testing rõ ràng." },
    { title: "Remarketing", desc: "Bám lại người đã xem video, tương tác page, vào website, bỏ form hoặc chưa hoàn tất mua hàng." },
    { title: "Creative Testing", desc: "Test nhiều hook, format, offer, angle và bằng chứng tin cậy để tìm thông điệp thắng." },
    { title: "Messenger/Zalo Flow", desc: "Kết nối quảng cáo với luồng tư vấn, kịch bản chốt lead và phân loại nhu cầu." },
    { title: "Scale Ngân Sách", desc: "Mở rộng ngân sách theo tín hiệu CPA, chất lượng lead, tần suất, audience size và creative health." }
  ];

  const steps = [
    { title: "Audit & Planning", description: "Rà soát lịch sử chạy, xác định chân dung khách hàng, lập ma trận Content & Audience để test." },
    { title: "Creative Production", description: "Sản xuất hàng loạt mẫu quảng cáo (Hình ảnh/Video/Carousel) theo các góc tiếp cận (Angles) khác nhau." },
    { title: "A/B Testing", description: "Chạy thử nghiệm chia nhỏ ngân sách để tìm ra 'Winning Creative' và 'Winning Audience'." },
    { title: "Scale & Retargeting", description: "Bơm ngân sách vào nhóm hiệu quả, đồng thời bám đuổi (Remarketing) những người đã tương tác nhưng chưa để lại Lead." }
  ];

  const pricingPlans = [
    {
      name: "Performance Test",
      price: "12.000.000đ",
      description: "Dành cho việc test thị trường và tìm ra Winning Creative trong thời gian ngắn.",
      features: [
        "Phí quản lý: 20% ngân sách",
        "Sản xuất 5-7 mẫu Creative/tháng",
        "Lên chiến dịch A/B Testing",
        "Báo cáo tỷ lệ chuyển đổi hàng tuần"
      ]
    },
    {
      name: "Scale System",
      price: "25.000.000đ",
      description: "Phù hợp để bứt phá doanh số với ngân sách Ads > 100tr/tháng.",
      features: [
        "Phí quản lý: 15% ngân sách",
        "Sản xuất 15-20 mẫu Creative/tháng",
        "Setup hệ thống Retargeting đa lớp",
        "Tích hợp API gửi Data về CRM",
        "Tối ưu Landing Page đi kèm"
      ],
      isPopular: true
    },
    {
      name: "Master Funnel",
      price: "Liên hệ",
      description: "Gói chiến lược dài hạn, phủ sóng toàn diện và nuôi dưỡng Lead B2B/High-ticket.",
      features: [
        "Phí quản lý linh hoạt + Thưởng KPI",
        "Cam kết số lượng Lead/CPL",
        "Xây dựng kịch bản Automation Chatbot",
        "Quản trị Fanpage & Sản xuất nội dung",
        "Hệ thống báo cáo Real-time độc quyền"
      ],
      ctaText: "Nhận báo giá riêng"
    }
  ];

  const faq = [
    { question: "Facebook Ads phù hợp với ngành nào?", answer: "Phù hợp với ngành cần tạo nhu cầu, nuôi nhận diện, thu lead hoặc bán hàng bằng hình ảnh, video, social proof và remarketing." },
    { question: "Vì sao Facebook Ads dễ có lead rác?", answer: "Thường do offer quá rộng, form quá dễ, tracking không lọc chất lượng hoặc sales feedback không được đưa ngược về tối ưu chiến dịch." },
    { question: "Bao lâu cần thay creative?", answer: "Tùy tần suất và quy mô audience. Khi CTR giảm, CPA tăng, frequency cao hoặc comment chất lượng kém, cần làm mới hook/visual/offer." }
  ];

  return (
    <main className="bg-slate-50">
      {/* SaaS Light Mode Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white border-b border-slate-200">
         {/* Background Effects */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-50/50 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-violet-50/50 blur-[100px] rounded-full pointer-events-none" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:32px_32px] opacity-40" />
        
        <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 font-bold text-sm mb-8 animate-in slide-in-from-bottom-4 fade-in duration-700 shadow-sm">
            <SplitSquareHorizontal size={16} /> Creative Funnel
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 tracking-tight mb-6 animate-in slide-in-from-bottom-6 fade-in duration-700 delay-100 text-balance leading-[1.1]">
            Facebook Ads <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-violet-600">Tạo Nhu Cầu & Tăng Chuyển Đổi</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 animate-in slide-in-from-bottom-8 fade-in duration-700 delay-200 text-pretty">
            Chúng tôi vận hành Facebook Ads như một hệ thống phễu đa điểm chạm: đúng audience, đúng creative, đúng tracking và vòng lặp A/B testing liên tục để tìm ra Win Campaign.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in slide-in-from-bottom-10 fade-in duration-700 delay-300">
            <Link href="/lien-he/" className="h-14 px-8 rounded-full bg-indigo-600 text-white font-bold text-[15px] flex items-center justify-center hover:bg-indigo-700 transition-all shadow-xl hover:shadow-indigo-500/25 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-100">
              Yêu cầu Tư vấn Giải pháp
            </Link>
          </div>

          {/* Animated Mockup: A/B Testing Creative Funnel */}
          <div className="mt-20 relative mx-auto max-w-4xl animate-in fade-in slide-in-from-bottom-24 duration-1000 delay-500">
            <FacebookAbTestMockup />
            {/* Soft Glow under mockup */}
            <div className="absolute -inset-x-20 -bottom-20 h-[50%] bg-gradient-to-t from-slate-50 to-transparent z-20 pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 lg:py-32 relative z-30 bg-slate-50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
              Audit Phễu Quảng Cáo
            </h2>
            <p className="text-lg text-slate-600 text-pretty">
              Facebook Ads không chỉ là bấm chạy campaign. Chúng tôi tìm điểm nghẽn giữa Audience, Creative và Lead Quality để giải quyết bài toán ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {auditItems.map((item, index) => {
               const Icon = item.icon;
               return (
              <div key={index} className="p-8 rounded-3xl bg-white border border-slate-200 hover:shadow-lg hover:border-indigo-200 transition-all duration-300 flex flex-col gap-4 group">
                <div className="h-14 w-14 rounded-2xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="text-[15px] text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            )})}
          </div>

          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
              Option Triển khai Theo Funnel
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {options.map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-slate-100 shadow-sm">
                 <CheckCircle2 size={24} className="text-indigo-500 shrink-0 mt-1" />
                 <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-[14px] text-slate-600 leading-relaxed">{item.desc}</p>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Process 
        eyebrow="Roadmap"
        title="Quy trình Triển khai Facebook Ads"
        description="Quy trình tập trung vào việc tạo ra vòng lặp A/B testing liên tục để tìm ra Win Campaign và Scale ngân sách an toàn."
        steps={steps}
      />

      <PricingTable 
        eyebrow="Báo giá Dịch vụ"
        title="Gói Dịch Vụ Facebook Ads"
        description="Lựa chọn phương án đầu tư phù hợp để bứt phá doanh số qua mạng xã hội."
        plans={pricingPlans}
      />

      <Faq items={faq} />
      <CtaBand />
    </main>
  );
}

