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
    <form onSubmit={handleSubmit} className="card grid gap-4 p-8 bg-white/90">
      <div className="grid gap-1">
        <label htmlFor="name" className="text-sm font-bold text-slate-700">Họ và tên <span className="text-red-500">*</span></label>
        <input
          id="name"
          type="text"
          required
          disabled={loading}
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="rounded-2xl border border-slate-200 p-4 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 disabled:bg-slate-50 transition"
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
          className="rounded-2xl border border-slate-200 p-4 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 disabled:bg-slate-50 transition"
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
          className="min-h-32 rounded-2xl border border-slate-200 p-4 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 disabled:bg-slate-50 transition"
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
        className="rounded-full bg-blue-600 px-6 py-4 font-bold text-white shadow-lg shadow-blue-600/15 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed transition flex items-center justify-center gap-2"
      >
        {loading && <Loader2 size={18} className="animate-spin" />}
        Gửi thông tin
      </button>
    </form>
  );
}
