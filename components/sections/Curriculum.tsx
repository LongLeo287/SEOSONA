import { BookOpen } from "lucide-react";

type ModuleProps = {
  title: string;
  lessons: string[];
};

type CurriculumProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  modules: ModuleProps[];
};

export function Curriculum({ eyebrow, title, description, modules }: CurriculumProps) {
  return (
    <section className="bg-white py-12 lg:py-16 border-y border-slate-100">
      <div className="container">
        <div className="mb-12 max-w-3xl">
          {eyebrow && <span className="badge mb-4">{eyebrow}</span>}
          <h2 className="mt-3 text-4xl font-black tracking-tight text-[#04091A] sm:text-5xl">
            {title}
          </h2>
          {description && (
            <p className="mt-5 text-lg leading-8 text-slate-600">
              {description}
            </p>
          )}
        </div>

        <div className="grid gap-4 max-w-4xl">
          {modules.map((module, idx) => (
            <details key={idx} className="group rounded-[24px] border border-slate-200 bg-slate-50 p-6 transition-all duration-300 open:bg-white open:shadow-lg open:border-blue-200">
              <summary className="flex cursor-pointer list-none items-center justify-between text-xl font-black text-slate-900 outline-none">
                <span className="flex items-center gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700 text-sm">
                    {idx + 1}
                  </span>
                  {module.title}
                </span>
                <span className="ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-200 text-slate-600 group-open:bg-blue-600 group-open:text-white transition-colors">
                  <span className="group-open:hidden">+</span>
                  <span className="hidden group-open:block">-</span>
                </span>
              </summary>
              <div className="mt-6 ml-14 border-l-2 border-slate-100 pl-6">
                <ul className="flex flex-col gap-4">
                  {module.lessons.map((lesson, lessonIdx) => (
                    <li key={lessonIdx} className="flex items-start gap-3">
                      <BookOpen className="mt-1 h-5 w-5 shrink-0 text-blue-400" />
                      <span className="text-slate-700 leading-7">{lesson}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
