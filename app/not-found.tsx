import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container py-24 text-center">
      <div className="mx-auto max-w-2xl">
        <div className="text-8xl font-black text-blue-100">404</div>
        <h1 className="mt-4 text-5xl font-black tracking-tight text-slate-950">Không tìm thấy trang</h1>
        <p className="mt-5 text-lg leading-8 text-slate-600">
          URL này có thể đã được di chuyển trong quá trình rebuild. Hãy quay về trang chủ hoặc thư viện kiến thức SEO.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link href="/" className="rounded-full bg-blue-600 px-6 py-4 font-bold text-white">Về trang chủ</Link>
          <Link href="/seo/" className="rounded-full border border-slate-200 bg-white px-6 py-4 font-bold text-slate-950">Kiến thức SEO</Link>
        </div>
      </div>
    </main>
  );
}
