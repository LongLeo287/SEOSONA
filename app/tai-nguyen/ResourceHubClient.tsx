"use client";

import { useMemo, useState } from "react";
import { LibraryBig } from "lucide-react";
import { LeadCaptureModal } from "@/components/ui/LeadCaptureModal";
import { ResourceCard } from "@/components/ui/ResourceCard";
import { resources, type Resource } from "@/data/resources";
import { cn } from "@/lib/utils";

type FilterKey = "all" | "template" | "ebook-checklist" | "webinar";

const filters: Array<{ key: FilterKey; label: string; description: string }> = [
  {
    key: "all",
    label: "All",
    description: "Toàn bộ tài nguyên"
  },
  {
    key: "template",
    label: "Template Data",
    description: "Dashboard, CSV, brief"
  },
  {
    key: "ebook-checklist",
    label: "Ebook & Checklist",
    description: "Playbook và workbook"
  },
  {
    key: "webinar",
    label: "Webinar",
    description: "Video training"
  }
];

function filterResources(activeFilter: FilterKey) {
  if (activeFilter === "all") return resources;
  if (activeFilter === "template") {
    return resources.filter((resource) => resource.type === "Template Data");
  }
  if (activeFilter === "ebook-checklist") {
    return resources.filter((resource) =>
      ["Ebook", "Checklist Excel"].includes(resource.type)
    );
  }
  return resources.filter((resource) => resource.type === "Video Training");
}

export function ResourceHubClient() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);

  const visibleResources = useMemo(
    () => filterResources(activeFilter),
    [activeFilter]
  );

  return (
    <>
      <main className="overflow-hidden bg-slate-50 text-slate-900">
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-white border-b border-slate-200">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-50/80 blur-[120px] rounded-full pointer-events-none" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:64px_64px] opacity-40" />
          
          <div className="relative z-10 mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2 text-[14px] font-bold text-indigo-600 mb-8 animate-in slide-in-from-bottom-4 fade-in duration-700">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-500 opacity-75"></span>
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-indigo-600"></span>
              </span>
              <LibraryBig className="h-4 w-4" />
              <span>SEOSONA Resource Hub</span>
            </div>
            
            <h1 className="mx-auto max-w-4xl text-balance text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-slate-900 animate-in slide-in-from-bottom-6 fade-in duration-700 delay-100">
              Kho tài nguyên độc quyền cho đội ngũ <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">tăng trưởng trên Google</span>
            </h1>
            
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg font-medium leading-relaxed text-slate-500 animate-in slide-in-from-bottom-8 fade-in duration-700 delay-200">
              Tải template, checklist, ebook và video training được SEOSONA chuẩn hóa từ các dự án SEO, GA4, Content và AI Search thực chiến.
            </p>
          </div>
        </section>

        <section className="py-20 lg:py-32 relative z-20">
          <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
            <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
              {filters.map((filter) => {
                const isActive = activeFilter === filter.key;
                return (
                  <button
                    key={filter.key}
                    type="button"
                    onClick={() => setActiveFilter(filter.key)}
                    className={cn(
                      "rounded-full border px-6 py-2.5 text-[15px] font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500",
                      isActive
                        ? "border-indigo-600 bg-indigo-600 text-white shadow-[0_8px_20px_rgba(79,70,229,0.25)]"
                        : "border-slate-200 bg-white text-slate-500 hover:border-indigo-500/30 hover:text-indigo-600 hover:shadow-sm"
                    )}
                  >
                    {filter.label}
                  </button>
                );
              })}
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
              {visibleResources.map((resource) => (
                <ResourceCard
                  key={resource.id}
                  resource={resource}
                  onClick={setSelectedResource}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <LeadCaptureModal
        open={selectedResource !== null}
        resource={selectedResource}
        onClose={() => setSelectedResource(null)}
      />
    </>
  );
}
