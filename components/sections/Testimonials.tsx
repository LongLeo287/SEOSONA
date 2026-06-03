import Image from "next/image";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const testimonials = [
  {
    name: "Mr. Hoàng Hệ",
    role: "Giám đốc Marketing",
    company: "Khách hàng SEOSONA",
    avatar: "/images/legacy/testimonials/hoang-van-he.jpg",
    rating: 5,
    quote:
      "SEOSONA hỗ trợ doanh nghiệp nhìn rõ hơn chiến lược SEO, cách đo lường và các ưu tiên cần triển khai để tăng trưởng bền vững. Đội ngũ rất chuyên sâu và minh bạch trong báo cáo."
  },
  {
    name: "Ms. Linh",
    role: "SEO Manager",
    company: "Khách hàng SEOSONA",
    avatar: "/images/legacy/testimonials/thuy-linh.jpg",
    rating: 5,
    quote:
      "Điểm mạnh của SEOSONA là tư duy hệ thống: từ nghiên cứu từ khóa, nội dung, technical đến báo cáo kết quả đều rõ ràng. Mình học được rất nhiều từ cách làm việc của team."
  },
  {
    name: "Anh Minh Tuấn",
    role: "Founder & CEO",
    company: "Doanh nghiệp nội thất",
    avatar: "/images/legacy/testimonials/hoang-van-he.jpg",
    rating: 5,
    quote:
      "Sau 6 tháng triển khai SEO cùng SEOSONA, traffic organic tăng hơn 180%. Quan trọng hơn là chất lượng lead tốt hơn hẳn — khách hàng đến từ Google thực sự có nhu cầu mua hàng."
  },
  {
    name: "Ms. Hương Giang",
    role: "Digital Marketing Lead",
    company: "Công ty giáo dục",
    avatar: "/images/legacy/testimonials/thuy-linh.jpg",
    rating: 5,
    quote:
      "Team SEOSONA không chỉ làm SEO mà còn đào tạo đội in-house của mình biết cách tự audit, viết content chuẩn SEO và theo dõi dữ liệu. Đó mới là giá trị lâu dài thực sự."
  }
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="h-4 w-4 fill-amber-400 text-amber-400" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="py-14 sm:py-16 lg:py-20">
      <div className="container">
        <RevealOnScroll className="mx-auto mb-8 max-w-3xl text-center sm:mb-10 lg:mx-0 lg:text-left">
          <span className="font-bold text-blue-700">Khách hàng nói gì</span>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            Niềm tin đến từ kết quả và cách làm minh bạch
          </h2>
        </RevealOnScroll>
        <div className="grid gap-4 sm:grid-cols-2 lg:gap-5">
          {testimonials.map((item, index) => (
            <RevealOnScroll key={item.name} delay={index * 80}>
              <div className="card group h-full p-5 transition hover:-translate-y-1 hover:border-blue-200 sm:p-7">
                <StarRating count={item.rating} />
                <p className="mt-4 text-base leading-8 text-slate-800 sm:text-lg">"{item.quote}"</p>
                <div className="mt-6 flex items-center gap-4">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    width={64}
                    height={64}
                    className="h-14 w-14 rounded-full object-cover ring-4 ring-blue-50 transition group-hover:ring-blue-100 sm:h-16 sm:w-16"
                  />
                  <div>
                    <div className="font-black text-slate-950">{item.name}</div>
                    <div className="text-sm font-medium text-slate-600">{item.role}</div>
                    <div className="text-xs text-slate-400">{item.company}</div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
