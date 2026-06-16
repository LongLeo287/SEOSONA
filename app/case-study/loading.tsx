import AnimatedLoadingSkeleton from "@/components/ui/animated-loading-skeleton";

export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-[#F4F6F8] py-20">
      <div className="text-center w-full">
        <h2 className="mb-4 text-2xl font-bold text-[#04091A]">Đang tải dữ liệu Case Study...</h2>
        <AnimatedLoadingSkeleton />
      </div>
    </div>
  );
}
