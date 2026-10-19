"use client";

import { useEffect, useId, useRef, useState } from "react";
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
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousActiveElementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;

    previousActiveElementRef.current = document.activeElement as HTMLElement | null;

    const focusableSelector = [
      "button:not([disabled])",
      "input:not([disabled])",
      "select:not([disabled])",
      "textarea:not([disabled])",
      "a[href]",
      "[tabindex]:not([tabindex=\"-1\"])"
    ].join(",");

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key !== "Tab") return;

      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(focusableSelector);
      if (!focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    requestAnimationFrame(() => closeButtonRef.current?.focus());

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      previousActiveElementRef.current?.focus();
      previousActiveElementRef.current = null;
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
        ref={dialogRef}
        data-lenis-prevent
        className="relative max-h-[min(90vh,720px)] w-full max-w-xl overflow-y-auto overscroll-contain overflow-x-hidden rounded-[28px] border border-white/10 bg-white shadow-2xl"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="absolute inset-x-0 top-0 h-1 bg-blue-600" />
        <button
          type="button"
          ref={closeButtonRef}
          aria-label="Đóng"
          onClick={onClose}
          className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-500 transition hover:border-slate-300 hover:text-[#04091A] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-100"
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
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-amber-900" role="status" aria-live="polite">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" />
                <div>
                  <p className="font-bold">Tính năng nhận tài liệu đang được hoàn thiện.</p>
                  <p className="mt-1 text-sm text-amber-800">
                    Website chưa kết nối hệ thống email nên chưa ghi nhận hoặc gửi
                    email của bạn. Vui lòng quay lại sau hoặc liên hệ trực tiếp với
                    SEOSONA.
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
