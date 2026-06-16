"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Search, BarChart, Settings, Share2, MonitorPlay, PenTool, Link2, type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Search, BarChart, Settings, Share2, MonitorPlay, PenTool, Link2,
};

interface ServiceItem {
  title: string;
  description: string;
  href: string;
  iconName: string;
}

interface ServiceGroup {
  category: string;
  items: ServiceItem[];
}

export function ServiceTabs({ groups }: { groups: ServiceGroup[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      {/* Tab Buttons */}
      <div className="flex flex-wrap gap-2 mb-10">
        {groups.map((group, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`px-5 py-2.5 rounded-full text-[14px] font-bold transition-all duration-300 border ${
              activeIndex === index
                ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20"
                : "bg-white text-slate-600 border-slate-200 hover:border-blue-200 hover:text-blue-600"
            }`}
          >
            {group.category}
            <span className={`ml-2 text-[12px] font-medium ${
              activeIndex === index ? "text-blue-200" : "text-slate-400"
            }`}>
              {group.items.length}
            </span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div
        key={activeIndex}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {groups[activeIndex].items.map((item, index) => {
          const Icon = iconMap[item.iconName] || Search;
          return (
            <Link
              href={item.href}
              key={`${activeIndex}-${index}`}
              className="group relative flex flex-col p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:border-blue-200 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              style={{
                opacity: 0,
                animation: `fadeSlideUp 400ms cubic-bezier(0.16, 1, 0.3, 1) ${index * 60}ms forwards`,
              }}
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
                <Icon className="h-6 w-6 text-blue-600" />
              </div>
              <div className="h-14 w-14 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-50 group-hover:border-blue-100 transition-all duration-500">
                <Icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-[20px] font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-[15px] text-slate-500 font-medium leading-relaxed mb-6 flex-1">
                {item.description}
              </p>
              <div className="flex items-center text-[14px] font-bold text-blue-600">
                Tìm hiểu thêm
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-500 group-hover:translate-x-2" />
              </div>
            </Link>
          );
        })}
      </div>

      <style jsx>{`
        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
