import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Đội ngũ chuyên gia SEOSONA — Google Marketing",
  description:
    "Đội ngũ chuyên gia SEO, Google Ads, Content SEO và đào tạo của SEOSONA. Nhiều năm kinh nghiệm triển khai dự án thực chiến cho doanh nghiệp Việt Nam.",
  alternates: { canonical: "/doi-ngu-nhan-su/" }
};

const leaders = [
  { 
    name: "Trần Chí Quyết", 
    role: "CEO / Founder", 
    description: "Hơn 6 năm kinh nghiệm thực chiến SEO & Google Marketing. Định hướng chiến lược phát triển hệ sinh thái SEOSONA và học viện Chí Quyết Academy.",
    image: "https://secure.gravatar.com/avatar/fc4b2d1123d00b3a541c255586ff902b5ca2e5360ea56bb8eab2cdcb73c8fb5d?s=500&d=mm&r=g",
    social: {
      facebook: "https://www.facebook.com/chiquyet.tran.1",
      linkedin: "https://vn.linkedin.com/in/tranchiquyet1",
      youtube: "https://www.youtube.com/@chiquyet.tran.1"
    }
  },
  { 
    name: "Phạm Hữu Đạt", 
    role: "Head of SEO", 
    description: "Chịu trách nhiệm vận hành hệ thống SEO, Technical, và Entity cho hàng trăm dự án khách hàng lớn nhỏ.",
    image: "/avatar-placeholder.png", // We will fall back to an initial if image fails
    social: { linkedin: "#" }
  },
  { 
    name: "Nguyễn Thị A", 
    role: "Head of Content", 
    description: "Chuyên gia về Semantic SEO, Content Hub và tối ưu hóa Search Intent. Dẫn dắt đội ngũ 20+ content creator.",
    image: "/avatar-placeholder.png",
    social: { linkedin: "#" }
  },
  { 
    name: "Trần Văn B", 
    role: "Head of Performance Ads", 
    description: "Quản lý ngân sách quảng cáo tiền tỷ trên Google và Meta Ads, tập trung tối đa vào tối ưu CPA và tỷ lệ chuyển đổi.",
    image: "/avatar-placeholder.png",
    social: { linkedin: "#" }
  }
];

export default function Page() {
  return (
    <main className="bg-slate-50">
      <PageHero 
        eyebrow="Đội ngũ SEOSONA" 
        title="Những bộ óc đứng sau sự tăng trưởng của bạn" 
        description="Chúng tôi không chỉ là một Agency, chúng tôi là tập hợp những chuyên gia đam mê dữ liệu, công nghệ và mong muốn mang lại giá trị thật cho doanh nghiệp." 
      />

      <section className="py-20 md:py-32 bg-white border-b border-slate-200">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal>
            <div className="text-center mb-20 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">Ban Giám Đốc & Quản Lý</h2>
              <p className="text-lg text-slate-600">Đội ngũ chuyên gia có nhiều năm kinh nghiệm thực chiến trong các mảng SEO, Performance Marketing và Quản trị dữ liệu.</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leaders.map((member, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="group bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 hover:border-blue-300 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col h-full">
                  <div className="relative aspect-square w-full overflow-hidden bg-slate-200">
                    {/* Fallback to Initial if image is placeholder */}
                    {member.image === "/avatar-placeholder.png" ? (
                      <div className="absolute inset-0 flex items-center justify-center text-7xl font-black text-slate-300 bg-slate-100 group-hover:text-blue-200 transition-colors duration-500">
                        {member.name.charAt(0)}
                      </div>
                    ) : (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      {member.social.facebook && member.social.facebook !== "#" && (
                        <Link href={member.social.facebook} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} Facebook`} className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 hover:scale-110 transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-100">
                          <span className="text-lg font-black leading-none">f</span>
                        </Link>
                      )}
                      {member.social.linkedin && member.social.linkedin !== "#" && (
                        <Link href={member.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} LinkedIn`} className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 hover:scale-110 transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-100">
                          <span className="text-xs font-black leading-none">in</span>
                        </Link>
                      )}
                      {member.social.youtube && member.social.youtube !== "#" && (
                        <Link href={member.social.youtube} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} YouTube`} className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center hover:bg-red-700 hover:scale-110 transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-red-100">
                          <span className="text-xs font-black leading-none">YT</span>
                        </Link>
                      )}
                    </div>
                  </div>
                  
                  <div className="p-8 flex-1 flex flex-col">
                    <div className="text-blue-600 font-bold text-sm tracking-widest uppercase mb-2">{member.role}</div>
                    <h3 className="text-2xl font-black text-slate-900 mb-4">{member.name}</h3>
                    <p className="text-slate-600 text-[15px] leading-relaxed flex-1">{member.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* 50+ Experts Section */}
      <section className="py-20 md:py-32 relative overflow-hidden bg-blue-600">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8">Và hơn 50+ Chuyên viên thực chiến</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-12">
              SEOSONA tự hào sở hữu đội ngũ nhân sự trẻ trung, năng động, được đào tạo bài bản và luôn sẵn sàng dấn thân vào những chiến dịch Marketing khó nhằn nhất.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/ve-seosona/" className="px-8 py-4 bg-white text-blue-600 font-bold rounded-full hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] hover:scale-105 transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-100">
                Tìm hiểu về văn hóa
              </Link>
              <Link href="/tuyen-dung/" className="px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-100">
                Gia nhập đội ngũ <ExternalLink className="w-5 h-5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </main>
  );
}
