import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body.name || "").trim();
    const contact = String(body.contact || "").trim();
    const message = String(body.message || "").trim();

    if (!name || !contact) {
      return NextResponse.json({ ok: false, error: "Vui lòng nhập họ tên và thông tin liên hệ." }, { status: 400 });
    }

    // TODO: Connect to CRM, Google Sheet, Resend, HubSpot, or email webhook.
    console.log("SEOSONA contact lead", { name, contact, message, createdAt: new Date().toISOString() });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Không thể xử lý yêu cầu." }, { status: 500 });
  }
}
