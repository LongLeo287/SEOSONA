const proofItems = [
  { value: "300+", label: "dự án SEO" },
  { value: "1.000+", label: "học viên" },
  { value: "10+", label: "năm kinh nghiệm" },
  { value: "12+", label: "nhóm ngành" }
];

export function ProofBar() {
  return (
    <section className="bg-slate-950 py-12 text-white">
      <div className="container grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {proofItems.map((item) => (
          <div key={item.label} className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center">
            <div className="text-4xl font-black">{item.value}</div>
            <div className="mt-2 text-slate-300">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
