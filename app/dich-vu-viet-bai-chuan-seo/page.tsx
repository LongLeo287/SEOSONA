import type { Metadata } from "next";
import { CtaBand } from "@/components/sections/CtaBand";
import { Faq } from "@/components/sections/Faq";
import { Process } from "@/components/sections/Process";
import { PricingTable } from "@/components/sections/PricingTable";
import { Sparkles, PenTool, CheckCircle2, Type, ListChecks, LayoutTemplate, Layers, Target, FileText } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { MarkerHighlight } from "@/components/ui/marker-highlight";
import { InlineHighlight } from "@/components/ui/inline-highlight";

export const metadata: Metadata = {
  title: "Giải pháp Content SEO Mastery (Research & Viết bài) | SEOSONA",
  description: "Dịch vụ Content SEO Mastery trọn gói: Research Keyword, Research Content và sản xuất bài viết chuẩn SEO. Đảm bảo Unique 100%, tối ưu tỷ lệ chuyển đổi.",
  alternates: { canonical: "/dich-vu-viet-bai-chuan-seo/" }
};

export default function ContentSeoPage() {
  const features: Array<{ title: string; desc: string; icon: LucideIcon }> = [
    { title: "Nghiên cứu Search Intent", desc: "Phân tích kỹ lưỡng ý định tìm kiếm của người dùng (Informational, Navigational, Transactional) để viết đúng trọng tâm, đáp ứng chính xác thứ khách hàng cần.", icon: Target },
    { title: "Chuẩn hóa Semantic SEO", desc: "Không chỉ nhồi nhét từ khóa. Bài viết được cấu trúc khoa học với các LSI Keywords, thực thể (Entity) giúp Google dễ dàng hiểu rõ chủ đề cốt lõi.", icon: Layers },
    { title: "Chất lượng 100% Unique", desc: "Nội dung được viết mới hoàn toàn bởi các Content Writer có chuyên môn. Cam kết vượt qua mọi bài kiểm tra đạo văn và AI Detection.", icon: FileText },
    { title: "Tối ưu Tỷ lệ chuyển đổi", desc: "Kết hợp nghệ thuật Copywriting (AIDA, PAS) để lồng ghép khéo léo Call-to-Action, biến người đọc thành khách hàng tiềm năng.", icon: Sparkles }
  ];

  const options = [
    { title: "Outline Độc Quyền", desc: "Dàn ý bài viết chi tiết, phân nhóm Heading logic, bao phủ toàn bộ chủ đề." },
    { title: "Tối ưu Thẻ Meta", desc: "Title và Meta Description hấp dẫn để tăng CTR (Tỷ lệ click) trên trang kết quả tìm kiếm." },
    { title: "Hình ảnh Thiết kế", desc: "Bao gồm ảnh minh họa sắc nét, có gắn Watermark và tối ưu thẻ Alt văn bản." },
    { title: "Internal Link", desc: "Thiết lập liên kết nội bộ theo cấu trúc Topic Cluster chuyên nghiệp." },
    { title: "Văn phong Phù hợp", desc: "Linh hoạt giọng văn (Chuyên gia, Giải trí, Hướng dẫn) phù hợp với Brand Guideline." },
    { title: "Đăng tải Trực tiếp", desc: "Hỗ trợ đăng tải, format bài viết chuẩn chỉnh trực tiếp lên Website của bạn." }
  ];

  const steps = [
    { title: "Nghiên cứu & Định hướng", description: "Tiếp nhận Yêu cầu, phân tích đối tượng mục tiêu, đối thủ cạnh tranh và bộ từ khóa." },
    { title: "Lên Outline & Duyệt", description: "Xây dựng dàn ý chi tiết cho từng bài viết và gửi khách hàng duyệt trước khi triển khai." },
    { title: "Sản xuất Nội dung", description: "Đội ngũ Writer tiến hành viết bài, thiết kế hình ảnh theo đúng văn phong và tiêu chuẩn SEO." },
    { title: "Kiểm duyệt & Edit", description: "Trưởng nhóm Content (Editor) kiểm tra chất lượng, check đạo văn và tối ưu Semantic Keywords." },
    { title: "Bàn giao & Đăng tải", description: "Bàn giao file nội dung hoàn chỉnh và hỗ trợ đăng tải, index bài viết lên Google." }
  ];

  const pricingPlans = [
    {
      name: "Gói Cơ Bản (Standard)",
      price: "150.000đ",
      description: "Giá áp dụng cho 1 bài viết chuẩn SEO cơ bản, độ dài ~1000 từ.",
      features: [
        "Độ dài 1000 - 1200 từ",
        "Unique 100% (Pass CopyScape)",
        "Tối ưu H1, H2, H3 chuẩn SEO",
        "Kèm 2 hình ảnh minh họa cơ bản",
        "Hỗ trợ chỉnh sửa 1 lần"
      ]
    },
    {
      name: "Gói Chuyên Sâu (Premium)",
      price: "250.000đ",
      description: "Phù hợp cho các bài Pillar Content, bài chuyên ngành cần nghiên cứu sâu.",
      features: [
        "Độ dài 1500 - 2000 từ",
        "Phân tích Search Intent & LSI",
        "Văn phong Chuyên gia ngành",
        "Kèm 3-4 hình ảnh thiết kế riêng",
        "Tối ưu Internal Link theo Cluster"
      ],
      isPopular: true
    },
    {
      name: "Gói Content Chăm Sóc (Monthly)",
      price: "Liên hệ",
      description: "Quản trị nội dung website toàn diện theo tháng. Giữ cho website luôn 'Sống động'.",
      features: [
        "Xây dựng Kế hoạch Content tháng",
        "Sản xuất 20-50 bài/tháng",
        "Đăng tải & Tối ưu trực tiếp lên Web",
        "Báo cáo Traffic hàng tháng",
        "Định hướng Topic Cluster mở rộng"
      ],
      ctaText: "Nhận chiến lược riêng"
    }
  ];

  const faq = [
    { question: "Bài viết của SEOSONA có dùng AI không?", answer: "Chúng tôi đề cao tính nguyên bản. Mọi bài viết đều được nghiên cứu và viết bởi con người (Copywriter) để đảm bảo chiều sâu và độ tin cậy. AI chỉ được sử dụng để hỗ trợ Brainstorm ý tưởng hoặc kiểm tra lỗi chính tả." },
    { question: "Tôi có được duyệt dàn ý (Outline) trước không?", answer: "Hoàn toàn có! SEOSONA luôn gửi Outline chi tiết để bạn nắm được bố cục và định hướng bài viết. Sau khi bạn duyệt, chúng tôi mới tiến hành viết chi tiết." },
    { question: "Bài viết chuẩn SEO có đảm bảo lên Top không?", answer: "Bài viết chuẩn SEO là yếu tố bắt buộc để Google đánh giá cao. Tuy nhiên, để lên Top còn phụ thuộc vào sức mạnh (Domain Authority) và các yếu tố Offpage khác. Chúng tôi đảm bảo bài viết có chất lượng tốt nhất để cạnh tranh sòng phẳng." }
  ];

  return (
    <main className="bg-slate-50">
      {/* SaaS Light Mode Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white border-b border-slate-200">
         {/* Background Effects */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-rose-100/50 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-100/30 blur-[100px] rounded-full pointer-events-none" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#f43f5e0a_1px,transparent_1px),linear-gradient(to_bottom,#f43f5e0a_1px,transparent_1px)] bg-[size:32px_32px] opacity-40" />
        
        <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-50 border border-rose-100 text-rose-600 font-bold text-sm mb-8 animate-in slide-in-from-bottom-4 fade-in duration-700 shadow-sm">
            <PenTool size={16} /> Unique - Chuyên Sâu - Chuyển Đổi Cao
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 tracking-tight mb-6 animate-in slide-in-from-bottom-6 fade-in duration-700 delay-100 text-balance leading-[1.1]">
            Giải pháp Content SEO Mastery <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-600">Research & Viết Bài Chuẩn SEO</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 animate-in slide-in-from-bottom-8 fade-in duration-700 delay-200 text-pretty">
            Không chỉ là &quot;sản xuất chữ&quot;. Chúng tôi cung cấp giải pháp trọn gói từ <strong>Research Keyword</strong>, <strong>Research Content</strong> đến thiết lập dàn ý và viết bài chuyên sâu <InlineHighlight highlightColor="#e11d48" className="font-bold">chạm đúng Search Intent</InlineHighlight>.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in slide-in-from-bottom-10 fade-in duration-700 delay-300">
            <Link href="/lien-he/" className="h-14 px-8 rounded-full bg-rose-600 text-white font-bold text-[15px] flex items-center justify-center hover:bg-rose-700 transition-all shadow-xl hover:shadow-rose-500/25 hover:-translate-y-1">
              Nhận Bảng Giá Content
            </Link>
            <Link href="/case-study/" className="h-14 px-8 rounded-full bg-white text-slate-900 border border-slate-200 font-bold text-[15px] flex items-center justify-center hover:bg-slate-50 transition-all hover:-translate-y-1 shadow-sm">
              Xem Bài Viết Mẫu
            </Link>
          </div>

          {/* Interactive Content Editor Dashboard Mockup */}
          <div className="mt-20 relative mx-auto max-w-5xl animate-in fade-in slide-in-from-bottom-24 duration-1000 delay-500">
            <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-[0_30px_60px_rgba(244,63,94,0.08)] relative z-10 text-left flex">
               {/* Sidebar Editor */}
               <div className="w-[30%] hidden md:flex flex-col border-r border-slate-100 pr-3">
                  <div className="px-4 py-3 bg-slate-50 rounded-xl border border-slate-100 mb-4">
                     <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">SEO Score</div>
                     <div className="flex items-center gap-3">
                        <div className="text-4xl font-black text-rose-500">98<span className="text-xl text-slate-300">/100</span></div>
                        <div className="px-2 py-1 bg-rose-100 text-rose-700 rounded text-xs font-bold">Excellent</div>
                     </div>
                  </div>
                  <div className="flex-1 px-2 space-y-4">
                     <div>
                        <div className="text-xs font-bold text-slate-400 mb-2">READABILITY</div>
                        <div className="flex items-center gap-2 text-sm text-emerald-600 font-medium">
                           <CheckCircle2 size={16} /> Câu văn súc tích
                        </div>
                        <div className="flex items-center gap-2 text-sm text-emerald-600 font-medium mt-2">
                           <CheckCircle2 size={16} /> Phân bổ Heading tốt
                        </div>
                     </div>
                     <div>
                        <div className="text-xs font-bold text-slate-400 mb-2 mt-4">KEYWORDS</div>
                        <div className="flex justify-between items-center text-sm font-medium p-2 bg-rose-50 rounded-lg text-rose-700">
                           <span>dịch vụ viết bài chuẩn seo</span>
                           <span>1.2%</span>
                        </div>
                        <div className="flex justify-between items-center text-sm font-medium p-2 text-slate-600">
                           <span>thuê viết content</span>
                           <span className="text-emerald-500"><CheckCircle2 size={14}/></span>
                        </div>
                        <div className="flex justify-between items-center text-sm font-medium p-2 text-slate-600">
                           <span>giá viết bài website</span>
                           <span className="text-emerald-500"><CheckCircle2 size={14}/></span>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Main Editor */}
               <div className="flex-1 md:pl-6 pl-2 py-2">
                  <div className="flex items-center gap-2 mb-6 border-b border-slate-100 pb-4">
                     <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400"><Type size={16}/></div>
                     <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400"><ListChecks size={16}/></div>
                     <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400"><LayoutTemplate size={16}/></div>
                     <div className="h-6 w-px bg-slate-200 mx-2"></div>
                     <div className="flex items-center gap-2 px-3 py-1.5 bg-rose-50 text-rose-600 rounded-lg font-bold text-sm hover:bg-rose-100 transition-colors">
                        <Sparkles size={14} /> Tối ưu Semantic
                     </div>
                  </div>

                  <h2 className="text-3xl font-black text-slate-800 mb-4 border-l-4 border-rose-500 pl-4">
                     Giải pháp Content SEO Mastery toàn diện - Thúc đẩy doanh thu
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-4 text-sm md:text-base">
                     Trong thời đại Digital Marketing, <span className="bg-rose-100 text-rose-800 px-1 rounded font-medium">nội dung chất lượng</span> chính là cầu nối vững chắc nhất giữa doanh nghiệp và khách hàng. Một bài viết được đầu tư kỹ lưỡng không chỉ giúp website <MarkerHighlight markerColor="#fda4af" delay={0.5}>leo top Google dễ dàng</MarkerHighlight>, mà còn giữ chân người dùng ở lại lâu hơn.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-4 text-sm md:text-base">
                     Tại SEOSONA, chúng tôi không &quot;sản xuất chữ&quot;. Đội ngũ Copywriter phân tích sâu sắc <span className="text-blue-600 font-medium cursor-help" title="Ý định tìm kiếm">Search Intent</span> của người dùng trước khi đặt bút, đảm bảo bài viết giải quyết triệt để vấn đề của họ...
                  </p>
                  
                  {/* Fake Image Placeholder */}
                  <div className="w-full h-40 bg-slate-100 rounded-xl border border-dashed border-slate-300 flex items-center justify-center text-slate-400 flex-col gap-2 mb-4">
                     <LayoutTemplate size={32} />
                     <span className="text-sm font-medium">Khu vực chèn Hình ảnh minh họa (Alt text: bảng giá viết bài)</span>
                  </div>
               </div>
            </div>
            {/* Soft Glow under mockup */}
            <div className="absolute -inset-x-20 -bottom-20 h-[50%] bg-gradient-to-t from-slate-50 to-transparent z-20 pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Philosophy / Features */}
      <section className="py-24 relative z-30 bg-slate-50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
              Khác biệt của Content SEOSONA
            </h2>
            <p className="text-lg text-slate-600 text-pretty">
              Tạm biệt những bài viết sáo rỗng, nhồi nhét từ khóa thiếu tự nhiên. Chúng tôi viết để con người đọc, và để Google yêu thích.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {features.map((item, index) => {
               const IconComponent = item.icon;
               return (
              <div key={index} className="p-8 rounded-3xl bg-white border border-slate-200 hover:shadow-xl hover:border-rose-300 transition-all duration-300 flex flex-col gap-5 group">
                <div className="h-14 w-14 rounded-2xl bg-rose-50 border border-rose-100 text-rose-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <IconComponent size={28} />
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
              Tiêu chuẩn Tối ưu Bài Viết
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {options.map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-slate-100 shadow-sm">
                 <CheckCircle2 size={24} className="text-rose-500 shrink-0 mt-1" />
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
        eyebrow="Quy trình"
        title="Sản xuất Nội Dung"
        description="Quy trình làm việc chuyên nghiệp, khép kín từ khâu lên ý tưởng đến khi bài viết được xuất bản trên website của bạn."
        steps={steps}
      />

      <PricingTable 
        eyebrow="Bảng giá"
        title="Báo Giá Viết Bài Chuẩn SEO"
        description="Đa dạng gói bài viết phù hợp với nhu cầu và ngân sách của từng doanh nghiệp."
        plans={pricingPlans}
      />

      <Faq items={faq} />
      <CtaBand />
    </main>
  );
}
