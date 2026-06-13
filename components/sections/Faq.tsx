import { JsonLd } from "@/components/seo/JsonLd";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqProps = {
  items: FaqItem[];
};

export function Faq({ items }: FaqProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };

  return (
    <section className="bg-white py-12 lg:py-16">
      <JsonLd data={schema} />
      <div className="container">
        <div className="mb-10 max-w-3xl">
          <span className="font-bold text-blue-600">FAQ</span>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950">Câu hỏi thường gặp</h2>
        </div>
        <div className="grid gap-4">
          {items.map((item) => (
            <details key={item.question} className="card group p-6 open:border-blue-200">
              <summary className="cursor-pointer list-none text-xl font-black text-slate-950">
                {item.question}
              </summary>
              <p className="mt-4 leading-8 text-slate-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
