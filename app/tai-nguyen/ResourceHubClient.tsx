"use client";

import { useMemo, useState } from "react";
import { Download, LibraryBig, Sparkles } from "lucide-react";
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
      <main className="overflow-hidden bg-[#F4F6F8] text-[#04091A]">
        <section className="relative overflow-hidden bg-[#04091A] pb-14 pt-24 text-white sm:pt-32 lg:pb-28 lg:pt-36">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,166,241,0.22),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_38%)]" />
          <div className="relative mx-auto w-full max-w-[1200px] px-6">
            <div className="grid gap-10 lg:grid-cols-[1fr_380px] lg:items-end">
              <div>
                <div className="badge-premium mb-6 border-white/10 bg-white/5">
                  <LibraryBig className="h-4 w-4 text-[#3BA6F1]" />
                  <span className="text-slate-300">SEOSONA Resource Hub</span>
                </div>
                <h1 className="max-w-4xl break-words text-3xl font-black leading-tight sm:text-5xl lg:text-7xl">
                  Kho tài nguyên độc quyền cho đội ngũ tăng trưởng trên Google
                </h1>
                <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
                  Tải template, checklist, ebook và video training được SEOSONA
                  chuẩn hóa từ các dự án SEO, GA4, Content và AI Search thực chiến
                </p>
              </div>

              <div className="min-w-0 rounded-[28px] border border-white/10 bg-white/[0.06] p-6 backdrop-blur">
                <div className="flex items-start gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#3BA6F1] text-[#04091A]">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-3xl font-black">50+</p>
                    <p className="mt-1 text-sm leading-6 text-slate-300">
                      Tài nguyên miễn phí được cập nhật theo playbook triển khai
                      nội bộ của SEOSONA
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-20 lg:py-24">
          <div className="mx-auto w-full max-w-[1200px] px-6">
            <div className="mb-10 flex flex-col gap-6 lg:mb-14 lg:flex-row lg:items-end lg:justify-between">
              <div className="min-w-0">
                <div className="badge-premium mb-5 bg-white">
                  <Download className="h-4 w-4 text-blue-600" />
                  <span className="text-slate-700">Gated content miễn phí</span>
                </div>
                <h2 className="max-w-2xl break-words text-2xl font-black leading-tight sm:text-4xl">
                  Chọn tài nguyên phù hợp với mục tiêu hiện tại
                </h2>
              </div>

              <div className="grid w-full min-w-0 gap-2 rounded-[28px] border border-slate-200 bg-white p-2 shadow-sm sm:grid-cols-2 lg:w-auto lg:grid-cols-4">
                {filters.map((filter) => {
                  const isActive = activeFilter === filter.key;

                  return (
                    <button
                      key={filter.key}
                      type="button"
                      onClick={() => setActiveFilter(filter.key)}
                      className={cn(
                        "rounded-2xl px-4 py-3 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
                        isActive
                          ? "bg-[#04091A] text-white shadow-lg"
                          : "text-slate-600 hover:bg-slate-50 hover:text-[#04091A]"
                      )}
                    >
                      <span className="block text-sm font-bold">{filter.label}</span>
                      <span
                        className={cn(
                          "mt-1 block text-xs",
                          isActive ? "text-slate-300" : "text-slate-400"
                        )}
                      >
                        {filter.description}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {visibleResources.map((resource, index) => (
                <ResourceCard
                  key={resource.id}
                  resource={resource}
                  className={cn(
                    activeFilter === "all" &&
                    resource.isFeatured &&
                    index === 0 &&
                    "xl:col-span-2"
                  )}
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
