import { NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Please send your name and email." },
      { status: 400 },
    );
  }

  const payload = body as Record<string, unknown>;
  const name = String(payload.name ?? "").trim();
  const email = String(payload.email ?? "").trim();
  const city = String(payload.city ?? "").trim();

  if (name.length < 2) {
    return NextResponse.json(
      { ok: false, error: "Please share your name." },
      { status: 400 },
    );
  }

  if (!emailPattern.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Please share a valid email." },
      { status: 400 },
    );
  }

  // Mock success until a list provider (Kajabi, ConvertKit, etc.) is connected.
  console.info("[waitlist]", { name, email, city: city || undefined });

  return NextResponse.json({ ok: true });
}
