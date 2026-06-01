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
    <section className="py-16 lg:py-20">
      <div className="container">
        <div className="mb-10 max-w-3xl">
          <span className="font-bold text-blue-600">Khách hàng nói gì</span>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950">Niềm tin đến từ kết quả và cách làm minh bạch</h2>
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          {testimonials.map((item) => (
            <div key={item.name} className="card p-7">
              <p className="text-lg leading-8 text-slate-700">“{item.quote}”</p>
              <div className="mt-6 flex items-center gap-4">
                <Image src={item.avatar} alt={item.name} width={64} height={64} className="h-16 w-16 rounded-full object-cover" />
                <div>
                  <div className="font-black text-slate-950">{item.name}</div>
                  <div className="text-sm text-slate-500">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
