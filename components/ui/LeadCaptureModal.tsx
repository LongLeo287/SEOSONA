"use client";

import { useEffect, useId, useState } from "react";
import { CheckCircle2, Mail, X } from "lucide-react";
import type { Resource } from "@/data/resources";
import { cn } from "@/lib/utils";

type LeadCaptureModalProps = {
  open: boolean;
  resource: Resource | null;
  onClose: () => void;
};

export function LeadCaptureModal({
  open,
  resource,
  onClose
}: LeadCaptureModalProps) {
  const titleId = useId();
  const descriptionId = useId();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setEmail("");
      setSubmitted(false);
    }
  }, [open]);

  if (!open || !resource) return null;

  const Icon = resource.icon;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-[#04091A]/75 px-4 py-4 backdrop-blur-sm sm:items-center sm:py-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      onMouseDown={onClose}
    >
      <div
        className="relative w-full max-w-xl overflow-hidden rounded-[28px] border border-white/10 bg-white shadow-2xl"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="absolute inset-x-0 top-0 h-1 bg-blue-600" />
        <button
          type="button"
          aria-label="Đóng"
          onClick={onClose}
          className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-500 transition hover:border-slate-300 hover:text-[#04091A]"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="p-6 sm:p-8">
          <div className="mb-6 flex items-start gap-4 pr-12">
            <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-blue-50 text-blue-600">
              <Icon className="h-7 w-7" />
            </div>
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-blue-600">
                {resource.type} - {resource.category}
              </p>
              <h2
                id={titleId}
                className="text-2xl font-black leading-tight text-[#04091A] sm:text-3xl"
              >
                Nhận tài liệu qua Email
              </h2>
            </div>
          </div>

          <p id={descriptionId} className="mb-6 text-base leading-7 text-slate-600">
            Nhập email để nhận <strong>{resource.title}</strong> cùng checklist
            triển khai từ đội ngũ SEOSONA.
          </p>

          {submitted ? (
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-emerald-800">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
                <div>
                  <p className="font-bold">Đã ghi nhận email của bạn.</p>
                  <p className="mt-1 text-sm text-emerald-700">
                    Đây là bản demo gated content. Link tải sẽ được kích hoạt
                    khi kết nối hệ thống email.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <form
              className="space-y-4"
              onSubmit={(event) => {
                event.preventDefault();
                setSubmitted(true);
              }}
            >
              <label className="block">
                <span className="mb-2 block text-sm font-bold text-[#04091A]">
                  Email công việc
                </span>
                <span className="relative block">
                  <Mail className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="you@company.com"
                    className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-12 pr-4 text-base font-medium text-[#04091A] outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  />
                </span>
              </label>

              <button
                type="submit"
                className={cn(
                  "inline-flex h-14 w-full items-center justify-center rounded-full bg-[#04091A] px-6 text-base font-bold text-white transition hover:-translate-y-0.5 hover:bg-blue-600 hover:shadow-xl hover:shadow-blue-600/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-4"
                )}
              >
                Nhận tài liệu qua Email
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
