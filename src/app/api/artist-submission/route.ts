import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { name, email, genre, musicLink } = await request.json();

    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const trimmedEmail = email.trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
    }

    if (!musicLink || typeof musicLink !== "string" || !musicLink.trim()) {
      return NextResponse.json({ error: "Music link is required" }, { status: 400 });
    }

    // Send notification email to support
    const { error } = await resend.emails.send({
      from: "Bloxify Artists <hello@updates.bloxify.app>",
      to: "support@bloxify.app",
      subject: `New Artist Submission: ${name.trim()}`,
      text: `New artist submission on Bloxify:\n\nName: ${name.trim()}\nEmail: ${trimmedEmail}\nGenre: ${genre?.trim() || "Not specified"}\nMusic Link: ${musicLink.trim()}\n\nTime: ${new Date().toISOString()}`,
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json({ error: "Failed to submit" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Artist submission error:", err);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
