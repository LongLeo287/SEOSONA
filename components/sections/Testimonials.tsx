import Image from "next/image";

const testimonials = [
  {
    name: "Mr. Hoàng Hệ",
    role: "Khách hàng SEOSONA",
    avatar: "/images/legacy/testimonials/hoang-van-he.jpg",
    quote: "SEOSONA hỗ trợ doanh nghiệp nhìn rõ hơn chiến lược SEO, cách đo lường và các ưu tiên cần triển khai để tăng trưởng bền vững."
  },
  {
    name: "Ms. Linh",
    role: "Khách hàng SEOSONA",
    avatar: "/images/legacy/testimonials/thuy-linh.jpg",
    quote: "Điểm mạnh của SEOSONA là tư duy hệ thống: từ nghiên cứu từ khóa, nội dung, technical đến báo cáo kết quả đều rõ ràng."
  }
];

export function Testimonials() {
  return (
    <section className="py-14 sm:py-16 lg:py-20">
      <div className="container">
        <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-10 lg:mx-0 lg:text-left">
          <span className="font-bold text-blue-700">Khách hàng nói gì</span>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">Niềm tin đến từ kết quả và cách làm minh bạch</h2>
        </div>
        <div className="grid gap-4 lg:grid-cols-2 lg:gap-5">
          {testimonials.map((item) => (
            <div key={item.name} className="card group p-5 transition hover:-translate-y-1 hover:border-blue-200 sm:p-7">
              <p className="text-base leading-8 text-slate-800 sm:text-lg">“{item.quote}”</p>
              <div className="mt-6 flex items-center gap-4">
                <Image src={item.avatar} alt={item.name} width={64} height={64} className="h-14 w-14 rounded-full object-cover ring-4 ring-blue-50 transition group-hover:ring-blue-100 sm:h-16 sm:w-16" />
                <div>
                  <div className="font-black text-slate-950">{item.name}</div>
                  <div className="text-sm font-medium text-slate-600">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
