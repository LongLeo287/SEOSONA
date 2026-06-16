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
      <main className="overflow-hidden bg-[#F8FAFC] text-[#04091A]">
        <section className="py-12 lg:py-16">
          <div className="mx-auto w-full max-w-[1200px] px-6 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-[#F0F6FF] px-4 py-1.5 text-[14px] font-bold text-[#1D4ED8]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1D4ED8] opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#1D4ED8]"></span>
              </span>
              <LibraryBig className="h-4 w-4" />
              <span>SEOSONA Resource Hub</span>
            </div>
            
            <h1 className="mx-auto mt-4 max-w-4xl text-balance text-4xl font-black leading-tight tracking-tight text-[#04091A] sm:text-[54px]">
              Kho tài nguyên độc quyền cho đội ngũ <span className="text-[#1D4ED8]">tăng trưởng trên Google</span>
            </h1>
            
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-base font-medium leading-relaxed text-slate-500 sm:text-[17px]">
              Tải template, checklist, ebook và video training được SEOSONA chuẩn hóa từ các dự án SEO, GA4, Content và AI Search thực chiến.
            </p>
          </div>
        </section>

        <section className="pb-12 lg:pb-16">
          <div className="mx-auto w-full max-w-[1200px] px-6">
            <div className="mb-10 flex flex-wrap items-center justify-center gap-3 lg:mb-12">
              {filters.map((filter) => {
                const isActive = activeFilter === filter.key;
                return (
                  <button
                    key={filter.key}
                    type="button"
                    onClick={() => setActiveFilter(filter.key)}
                    className={cn(
                      "rounded-full border px-6 py-2.5 text-[15px] font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8]",
                      isActive
                        ? "border-[#1D4ED8] bg-[#1D4ED8] text-white shadow-[0_8px_20px_rgba(59,166,241,0.25)]"
                        : "border-slate-200 bg-white text-slate-500 hover:border-[#1D4ED8]/30 hover:text-[#1D4ED8] hover:shadow-sm"
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
