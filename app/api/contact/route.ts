import { NextResponse } from "next/server";

const MAX_PAYLOAD_BYTES = 8_192;
const WEBHOOK_TIMEOUT_MS = 5_000;

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

    const webhookUrl = process.env.SEOSONA_LEAD_WEBHOOK_URL;
    if (!webhookUrl) {
      return invalid("Hệ thống tiếp nhận tư vấn chưa được cấu hình. Vui lòng liên hệ trực tiếp với SEOSONA.", 503);
    }

    let parsedWebhookUrl: URL;
    try {
      parsedWebhookUrl = new URL(webhookUrl);
      if (parsedWebhookUrl.protocol !== "https:") {
        return invalid("Hệ thống tiếp nhận tư vấn chưa được cấu hình an toàn.", 503);
      }
    } catch {
      return invalid("Hệ thống tiếp nhận tư vấn chưa được cấu hình đúng.", 503);
    }

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), WEBHOOK_TIMEOUT_MS);

    try {
      const webhookResponse = await fetch(parsedWebhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(process.env.SEOSONA_LEAD_WEBHOOK_TOKEN
            ? { Authorization: `Bearer ${process.env.SEOSONA_LEAD_WEBHOOK_TOKEN}` }
            : {})
        },
        body: JSON.stringify({
          name,
          contact,
          message,
          source: "seosona-website",
          createdAt: new Date().toISOString()
        }),
        signal: controller.signal
      });

      if (!webhookResponse.ok) {
        return invalid("Không thể ghi nhận yêu cầu lúc này. Vui lòng thử lại sau.", 502);
      }
    } catch {
      return invalid("Không thể kết nối hệ thống tiếp nhận. Vui lòng thử lại sau.", 502);
    } finally {
      clearTimeout(timeout);
    }

    return NextResponse.json({ ok: true });
  } catch {
    return invalid("Không thể xử lý yêu cầu.", 500);
  }
}
