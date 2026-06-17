"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({ name: "", contact: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<boolean | null>(null);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setErrorMsg("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok && result.ok) {
        setSuccess(true);
        setFormData({ name: "", contact: "", message: "" });
      } else {
        setSuccess(false);
        setErrorMsg(result.error || "Có lỗi xảy ra, vui lòng thử lại.");
      }
    } catch {
      setSuccess(false);
      setErrorMsg("Không thể kết nối tới máy chủ. Vui lòng thử lại sau.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="card flex flex-col items-center justify-center p-8 text-center bg-emerald-50/50 border-emerald-200">
        <div className="grid h-16 w-16 place-items-center rounded-full bg-emerald-100 text-emerald-600 mb-4">
          ✓
        </div>
        <h3 className="text-2xl font-black text-slate-900">Gửi thông tin thành công!</h3>
        <p className="mt-3 text-slate-600 leading-relaxed max-w-sm">
          Cảm ơn bạn đã tin tưởng SEOSONA. Đội ngũ chuyên gia của chúng tôi sẽ liên hệ lại với bạn trong vòng 24 giờ làm việc.
        </p>
        <button
          type="button"
          onClick={() => setSuccess(null)}
          className="mt-6 text-sm font-bold text-blue-600 hover:underline"
        >
          Gửi yêu cầu khác
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-1">
        <label htmlFor="name" className="text-sm font-bold text-slate-700">Họ và tên <span className="text-red-500">*</span></label>
        <input
          id="name"
          type="text"
          required
          disabled={loading}
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="rounded-[20px] border-2 border-transparent bg-slate-50 p-4 font-medium outline-none focus:border-blue-500 focus:bg-white disabled:bg-slate-100 transition-all duration-300"
          placeholder="Ví dụ: Nguyễn Văn A"
        />
      </div>

      <div className="grid gap-1">
        <label htmlFor="contact" className="text-sm font-bold text-slate-700">Số điện thoại / Email <span className="text-red-500">*</span></label>
        <input
          id="contact"
          type="text"
          required
          disabled={loading}
          value={formData.contact}
          onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
          className="rounded-[20px] border-2 border-transparent bg-slate-50 p-4 font-medium outline-none focus:border-blue-500 focus:bg-white disabled:bg-slate-100 transition-all duration-300"
          placeholder="Ví dụ: 0909xxxxxx hoặc contact@email.com"
        />
      </div>

      <div className="grid gap-1">
        <label htmlFor="message" className="text-sm font-bold text-slate-700">Nhu cầu tư vấn</label>
        <textarea
          id="message"
          disabled={loading}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="min-h-32 rounded-[20px] border-2 border-transparent bg-slate-50 p-4 font-medium outline-none focus:border-blue-500 focus:bg-white disabled:bg-slate-100 transition-all duration-300 resize-none"
          placeholder="Hãy mô tả ngắn gọn hiện trạng website và mục tiêu kinh doanh của bạn..."
        />
      </div>

      {success === false && (
        <div className="rounded-2xl bg-red-50 border border-red-150 p-4 text-sm font-medium text-red-700">
          ⚠️ {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="mt-2 rounded-full bg-blue-600 px-6 py-4 font-bold text-white shadow-[0_8px_30px_-10px_rgba(37,99,235,0.5)] hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-[0_12px_40px_-12px_rgba(37,99,235,0.7)] disabled:bg-slate-300 disabled:shadow-none disabled:cursor-not-allowed disabled:transform-none transition-all duration-300 flex items-center justify-center gap-2"
      >
        {loading && <Loader2 size={18} className="animate-spin" />}
        Gửi thông tin
      </button>
    </form>
  );
}
