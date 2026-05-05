import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const trimmed = email.trim().toLowerCase();

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmed)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
    }

    const audienceId = process.env.RESEND_AUDIENCE_ID;
    if (!audienceId) {
      console.error("RESEND_AUDIENCE_ID is not configured");
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    const { error } = await resend.contacts.create({
      email: trimmed,
      audienceId,
    });

    // Resend returns an error for duplicates — treat as success
    if (error && !error.message?.includes("already exists")) {
      console.error("Resend API error:", error);
      return NextResponse.json({ error: "Failed to join waitlist" }, { status: 500 });
    }

    // Fire-and-forget admin notification
    resend.emails.send({
      from: "Bloxify Waitlist <hello@updates.bloxify.app>",
      to: "support@bloxify.app",
      subject: `New Waitlist Signup: ${trimmed}`,
      text: `New signup on the Bloxify launch waitlist:\n\n${trimmed}\n\nTime: ${new Date().toISOString()}`,
    }).catch((err) => console.error("Admin notification failed:", err));

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Waitlist error:", err);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
