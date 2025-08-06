import { NextResponse } from "next/server";

export interface ContactPayload {
  email: string;
  name: string;
  message: string;
}

export async function POST(req: Request) {
  try {
    const payload: ContactPayload = await req.json();

    const xApiKey = process.env.CONTACT_X_API_KEY;
    const baseURL = process.env.CONTACT_API_BASE_URL;

    if (!xApiKey || !baseURL) {
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    const response = await fetch(baseURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": xApiKey,
      },
      body: JSON.stringify(payload),
    });
    
    if (!response.ok) {
      return NextResponse.json({ success: false }, { status: response.status });
    }

    return NextResponse.json({ success: true });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}