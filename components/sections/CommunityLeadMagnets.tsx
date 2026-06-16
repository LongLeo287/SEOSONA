"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Download } from "lucide-react";
import { LeadCaptureModal } from "@/components/ui/LeadCaptureModal";
import { ResourceCard } from "@/components/ui/ResourceCard";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { resources, type Resource } from "@/data/resources";

const featuredResources = resources
  .filter((resource) => resource.isFeatured)
  .slice(0, 3);

export function CommunityLeadMagnets() {
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);

  if (featuredResources.length < 3) return null;

  return (
    <>
      <section id="lead-magnets" className="border-y border-slate-100 bg-white py-16 lg:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <RevealOnScroll direction="up" className="mb-12 flex flex-col items-center text-center">
            <SectionBadge live={true} icon={<Download className="h-3.5 w-3.5" />}>
              Tài nguyên miễn phí
            </SectionBadge>
            <h2 className="mx-auto mb-5 max-w-4xl text-[32px] font-black leading-tight tracking-tight text-[#04091A] sm:text-4xl md:text-[44px] text-balance">
              Kho tri thức thực chiến dành riêng cho <br className="hidden sm:block" />
              <span className="text-[#1D4ED8]">Manager & C-Level</span>
            </h2>
            <p className="mx-auto max-w-2xl text-[17px] font-medium leading-relaxed text-slate-500 text-pretty">
              Không cần cam kết dịch vụ. Hãy tải xuống những tài liệu cốt lõi
              mà đội ngũ chuyên gia của chúng tôi đang sử dụng mỗi ngày để tạo ra
              kết quả đột phá
            </p>
          </RevealOnScroll>

          <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
            {featuredResources.map((resource, index) => (
              <RevealOnScroll
                key={resource.id}
                direction="up"
                delay={index * 100}
              >
                <ResourceCard
                  resource={resource}
                  onClick={setSelectedResource}
                />
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll direction="up" className="mt-12 flex justify-center">
            <Link
              href="/tai-nguyen"
              className="flex h-14 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-8 text-[15px] font-bold text-[#04091A] transition-all hover:border-[#1D4ED8] hover:text-[#1D4ED8] group shadow-sm hover:shadow-md"
            >
              Khám phá toàn bộ Thư viện <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </RevealOnScroll>

        </div>
      </section>

      <LeadCaptureModal
        open={!!selectedResource}
        onClose={() => setSelectedResource(null)}
        resource={selectedResource}
      />
    </>
  );
}
