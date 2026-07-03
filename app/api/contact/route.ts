import { NextResponse } from "next/server";

const MAX_PAYLOAD_BYTES = 8_192;

function invalid(message: string, status = 400) {
  return NextResponse.json({ ok: false, error: message }, { status });
}

export async function POST(request: Request) {
  try {
    const rawBody = await request.text();
    if (new TextEncoder().encode(rawBody).length > MAX_PAYLOAD_BYTES) {
      return invalid("Nội dung gửi quá lớn. Vui lòng rút gọn thông tin tư vấn.", 413);
    }

    let body: unknown;
    try {
      body = JSON.parse(rawBody || "{}");
    } catch {
      return invalid("Dữ liệu gửi lên không đúng định dạng JSON.");
    }

    if (!body || typeof body !== "object") {
      return invalid("Dữ liệu gửi lên không hợp lệ.");
    }

    const payload = body as Record<string, unknown>;
    const name = String(payload.name || "").trim();
    const contact = String(payload.contact || "").trim();
    const message = String(payload.message || "").trim();

    if (!name || !contact) {
      return invalid("Vui lòng nhập họ tên và thông tin liên hệ.");
    }

    if (name.length > 120 || contact.length > 160 || message.length > 2_000) {
      return invalid("Thông tin gửi vượt quá độ dài cho phép.");
    }

    // TODO: Connect to CRM, Google Sheet, Resend, HubSpot, or email webhook.
    console.info("SEOSONA contact lead received", {
      hasMessage: message.length > 0,
      createdAt: new Date().toISOString()
    });

    return NextResponse.json({ ok: true });
  } catch {
    return invalid("Không thể xử lý yêu cầu.", 500);
  }
}
