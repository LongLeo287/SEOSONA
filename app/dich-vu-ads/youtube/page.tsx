import type { Metadata } from "next";
import { CtaBand } from "@/components/sections/CtaBand";
import { Faq } from "@/components/sections/Faq";
import { Process } from "@/components/sections/Process";
import { PricingTable } from "@/components/sections/PricingTable";
import { PlayCircle, Users, BarChart3, CheckCircle2, MonitorPlay } from "lucide-react";
import { YoutubePlayerMockup } from "@/components/mockups/YoutubePlayerMockup";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dịch vụ Quảng cáo YouTube Ads | SEOSONA",
  description: "Dịch vụ YouTube Ads SEOSONA: video funnel, bumper ads, in-stream, remarketing video và đo lường brand/search lift cho doanh nghiệp.",
  alternates: { canonical: "/dich-vu-ads/youtube/" }
};

export default function YoutubeAdsPage() {
  const auditItems = [
    { title: "Video Funnel", desc: "Xác định video đang phục vụ nhận diện, cân nhắc, remarketing hay chuyển đổi để chọn format đúng.", icon: MonitorPlay },
    { title: "Audience Intent", desc: "Rà topic, placement, custom segment, remarketing viewer và tín hiệu từ Search/Website.", icon: Users },
    { title: "Creative Hook", desc: "Đánh giá 5 giây đầu, thông điệp, offer, proof, CTA và khả năng giữ chân người xem.", icon: PlayCircle },
    { title: "Measurement", desc: "Kiểm tra view, view rate, CPV, earned action, assisted conversion, brand/search lift và remarketing pool.", icon: BarChart3 }
  ];

  const options = [
    { title: "Skippable In-stream", desc: "Kể câu chuyện thương hiệu hoặc offer rõ trong 5 giây đầu, tối ưu view rate và hành động sau xem." },
    { title: "Bumper Ads", desc: "Thông điệp 6 giây để tăng ghi nhớ thương hiệu, phù hợp remarketing hoặc chiến dịch phủ nhanh." },
    { title: "Video Action", desc: "Tối ưu hành động như lead, đăng ký hoặc truy cập landing page khi video đã có CTA rõ." },
    { title: "YouTube Remarketing", desc: "Tái tiếp cận người đã xem video, subscribe, vào website hoặc tương tác với kênh." },
    { title: "Sequential Storytelling", desc: "Sắp xếp nhiều video theo hành trình biết - hiểu - tin - hành động." },
    { title: "SEO YouTube Support", desc: "Tận dụng video, title, description và topic để hỗ trợ khám phá tự nhiên trên YouTube/Google." }
  ];

  const steps = [
    { title: "Phân tích Kênh & Video", description: "Audit lại chất lượng video hiện có, lên kịch bản (Hook - Body - CTA) cho từng giai đoạn nhận thức." },
    { title: "Setup Audience & Format", description: "Cài đặt tệp đối tượng tương tác, Custom Intent và chọn định dạng Video Ads (In-stream, Bumper...) phù hợp." },
    { title: "Phân phối & Đo lường", description: "Chạy chiến dịch và đo lường các chỉ số tương tác sâu: View Rate, Cost per View (CPV), Earned actions." },
    { title: "Tái tiếp cận (Retargeting)", description: "Dùng phễu người xem Video để remarketing lại trên Google Search hoặc GDN để tối đa hóa chuyển đổi cuối." }
  ];

  const pricingPlans = [
    {
      name: "Brand Awareness",
      price: "15.000.000đ",
      description: "Gói tăng nhận diện thương hiệu cho sản phẩm mới, sự kiện hoặc chiến dịch ngắn hạn.",
      features: [
        "Phí quản lý: 20% ngân sách",
        "Setup 2-3 chiến dịch Bumper/In-stream",
        "Tối ưu Cost per View (CPV)",
        "Báo cáo View Rate & Brand Lift"
      ]
    },
    {
      name: "Video Funnel",
      price: "30.000.000đ",
      description: "Kết hợp giữa nhận diện và chuyển đổi (Performance Video Ads) cho ngân sách > 100tr.",
      features: [
        "Phí quản lý: 15% ngân sách",
        "Tạo tệp Remarketing YouTube sâu",
        "Kết nối Video Ads với Google Search",
        "Tracking chuyển đổi (Video Action)",
        "Tối ưu Kênh YouTube chuẩn SEO"
      ],
      isPopular: true
    },
    {
      name: "Enterprise Video",
      price: "Liên hệ",
      description: "Quản trị toàn diện Video Marketing, từ Production (sản xuất) đến Media Booking.",
      features: [
        "Lên ý tưởng & Kịch bản TVC/UGC",
        "Setup hệ thống phễu đa kênh",
        "Đo lường Attribution phức tạp",
        "Bảo vệ bản quyền (Content ID)",
        "Dashboard chuyên sâu Real-time"
      ],
      ctaText: "Nhận chiến lược riêng"
    }
  ];

  const faq = [
    { question: "YouTube Ads phù hợp với mục tiêu nào?", answer: "Phù hợp với nhận diện thương hiệu, ra mắt sản phẩm, remarketing bằng video, giáo dục thị trường và hỗ trợ chuyển đổi cho các ngành cần giải thích giá trị." },
    { question: "Có cần video sản xuất chuyên nghiệp không?", answer: "Không phải lúc nào cũng cần TVC lớn, nhưng video cần hook mạnh, thông điệp rõ, proof đủ tin và CTA phù hợp với format chạy." },
    { question: "Đo YouTube Ads bằng gì ngoài lượt xem?", answer: "Cần xem thêm view rate, CPV, earned action, assisted conversion, tăng trưởng remarketing pool, brand/search lift và tác động lên Google Search/Direct." }
  ];

  return (
    <main className="bg-slate-50">
      {/* SaaS Light Mode Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white border-b border-slate-200">
         {/* Background Effects */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-rose-50/50 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-red-50/50 blur-[100px] rounded-full pointer-events-none" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:32px_32px] opacity-40" />
        
        <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-50 border border-rose-100 text-rose-600 font-bold text-sm mb-8 animate-in slide-in-from-bottom-4 fade-in duration-700 shadow-sm">
            <MonitorPlay size={16} /> Video Funnel Strategy
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 tracking-tight mb-6 animate-in slide-in-from-bottom-6 fade-in duration-700 delay-100 text-balance leading-[1.1]">
            YouTube Ads <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-red-600">Mở Rộng Nhận Diện & Nuôi Chuyển Đổi</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 animate-in slide-in-from-bottom-8 fade-in duration-700 delay-200 text-pretty">
            Chúng tôi xây dựng YouTube Ads theo tư duy video funnel: phân bổ đúng format, đúng thông điệp và đo lường sự đóng góp của video vào hành trình mua hàng.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in slide-in-from-bottom-10 fade-in duration-700 delay-300">
            <Link href="/lien-he/" className="h-14 px-8 rounded-full bg-red-600 text-white font-bold text-[15px] flex items-center justify-center hover:bg-red-700 transition-all shadow-xl hover:shadow-red-500/25 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-100">
              Nhận Chiến lược Video Ads
            </Link>
          </div>

          {/* Animated Mockup: YouTube In-stream Ad Player */}
          <div className="mt-20 relative mx-auto max-w-4xl animate-in fade-in slide-in-from-bottom-24 duration-1000 delay-500">
             <YoutubePlayerMockup />
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
              Audit Phễu Video
            </h2>
            <p className="text-lg text-slate-600 text-pretty">
              YouTube Ads dễ lãng phí nếu dùng cùng một video cho mọi mục tiêu. Chúng tôi audit format, audience, hook và đo lường để video có vai trò rõ trong phễu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {auditItems.map((item, index) => {
               const Icon = item.icon;
               return (
              <div key={index} className="p-8 rounded-3xl bg-white border border-slate-200 hover:shadow-lg hover:border-rose-200 transition-all duration-300 flex flex-col gap-4 group">
                <div className="h-14 w-14 rounded-2xl bg-rose-50 border border-rose-100 text-rose-600 flex items-center justify-center group-hover:scale-110 transition-transform">
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
              Tách Rõ Format Triển Khai
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {options.map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-slate-100 shadow-sm">
                 <CheckCircle2 size={24} className="text-red-500 shrink-0 mt-1" />
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
        title="Quy trình Triển khai YouTube Ads"
        description="Chúng tôi giúp bạn đi từ chiến lược kịch bản Video đến việc Remarketing và đo lường sự đóng góp của YouTube vào chuyển đổi tổng."
        steps={steps}
      />

      <PricingTable 
        eyebrow="Báo giá Dịch vụ"
        title="Gói Dịch Vụ YouTube Ads"
        description="Đầu tư vào Video Marketing chuyên nghiệp để tăng sức mạnh cho toàn bộ phễu bán hàng."
        plans={pricingPlans}
      />

      <Faq items={faq} />
      <CtaBand />
    </main>
  );
}
