import type { HeroMotionNode } from "./useHeroMotion";

export type HeroNodeDefinition = HeroMotionNode & {
  label: string;
  href: string;
  color: string;
  iconPath: string;
};

export const heroNodes: HeroNodeDefinition[] = [
  {
    label: "Dịch vụ SEO",
    href: "/dich-vu-seo-tong-the/",
    color: "text-blue-600",
    iconPath: "M3 17l6-6 4 4 8-8M17 7h4v4",
    startXRatio: -0.5,
    startYRatio: -0.48,
    depth: 1.1,
    rotate: -12,
    orbitAngle: 54 * (Math.PI / 180),
    semicircleSlot: 4,
  },
  {
    label: "Quảng cáo Ads",
    href: "/dich-vu-ads/",
    color: "text-amber-500",
    iconPath: "M4 7h16v10H4zM8 7V5h8v2",
    startXRatio: -0.38,
    startYRatio: 0.38,
    depth: 0.8,
    rotate: 12,
    orbitAngle: 198 * (Math.PI / 180),
    semicircleSlot: 0,
  },
  {
    label: "Giải pháp AI",
    href: "/giai-phap/ai-customer-journey/",
    color: "text-violet-500",
    iconPath: "M12 8V4M8 12h8M6 16h12M4 20h16",
    startXRatio: 0.5,
    startYRatio: -0.48,
    depth: 0.9,
    rotate: -6,
    orbitAngle: -90 * (Math.PI / 180),
    semicircleSlot: 2,
  },
  {
    label: "Data & Auto",
    href: "/giai-phap/tracking-automation/",
    color: "text-emerald-500",
    iconPath: "M4 5h16v14H4zM8 9h8M8 13h5",
    startXRatio: 0.45,
    startYRatio: 0.05,
    depth: 0.65,
    rotate: -14,
    orbitAngle: -18 * (Math.PI / 180),
    semicircleSlot: 3,
  },
  {
    label: "Academy",
    href: "/chi-quyet-academy/",
    color: "text-rose-500",
    iconPath: "M3 9l9-5 9 5-9 5zM7 12v5c3 2 7 2 10 0v-5",
    startXRatio: 0.38,
    startYRatio: 0.4,
    depth: 1.2,
    rotate: 8,
    orbitAngle: 126 * (Math.PI / 180),
    semicircleSlot: 1,
  },
];
