const proofItems = [
  { value: "300+", label: "dự án SEO" },
  { value: "1.000+", label: "học viên" },
  { value: "10+", label: "năm kinh nghiệm" },
  { value: "12+", label: "nhóm ngành" }
];

export function ProofBar() {
  return (
    <section className="bg-[#F8FAFC] py-8 lg:py-12">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {proofItems.map((item) => (
            <div 
              key={item.label} 
              className="group relative flex flex-col items-center justify-center rounded-3xl border border-slate-200/80 bg-white p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-[#3BA6F1]/30 hover:shadow-[0_12px_40px_rgba(59,166,241,0.12)]"
            >
              <div className="text-4xl font-black text-[#04091A] group-hover:text-[#3BA6F1] transition-colors duration-500">
                {item.value}
              </div>
              <div className="mt-2 text-[13px] font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-600 transition-colors duration-500">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
