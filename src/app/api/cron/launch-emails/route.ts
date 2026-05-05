import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

// Launch: May 6, 2026 17:00 UTC (12:00 CDT)
const LAUNCH_UTC = new Date("2026-05-06T17:00:00Z");
const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID!;
const FROM = "Bloxify <hello@updates.bloxify.app>";

type EmailTier = {
  label: string;
  subject: string;
  heading: string;
  body: string;
};

function getTier(now: Date): EmailTier | null {
  // Only fire in 2026
  if (now.getFullYear() !== 2026) return null;

  const diffMs = LAUNCH_UTC.getTime() - now.getTime();
  const diffHrs = diffMs / (1000 * 60 * 60);

  // 12-hour window: 11–13 hrs before launch
  if (diffHrs >= 11 && diffHrs <= 13) {
    return {
      label: "12hrs",
      subject: "12 hours until Bloxify launches! 🚀",
      heading: "12 Hours to Go!",
      body: "The countdown is ON. In just 12 hours, Bloxify goes live and you'll be among the very first to experience it. Get ready to explore, create, and play — the blocks are almost in place!",
    };
  }

  // 5-hour window: 4–6 hrs before launch
  if (diffHrs >= 4 && diffHrs <= 6) {
    return {
      label: "5hrs",
      subject: "5 hours to go — Bloxify is almost here! ⏳",
      heading: "5 Hours to Go!",
      body: "We're in the final stretch. The team is putting the finishing touches on launch day. Make sure your notifications are on — you won't want to miss this moment. See you soon!",
    };
  }

  // 3-minute window: 0–5 min before launch
  if (diffHrs >= 0 && diffHrs <= 0.1) {
    return {
      label: "3min",
      subject: "3 minutes! Bloxify is about to go live! 🎉",
      heading: "It's Happening NOW!",
      body: "This is it — Bloxify launches in minutes. Head to the Play Store and be one of the first players to jump in. The world of Bloxify awaits!",
    };
  }

  return null;
}

function buildHtml(tier: EmailTier): string {
  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"/></head>
<body style="margin:0;padding:0;background:#0F1220;font-family:'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0F1220;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#1a1f35;border-radius:12px;overflow:hidden;">
        <!-- Header -->
        <tr><td style="background:linear-gradient(135deg,#FF7F50,#E24B4A);padding:32px;text-align:center;">
          <h1 style="margin:0;color:#fff;font-size:28px;font-weight:700;">${tier.heading}</h1>
        </td></tr>
        <!-- Body -->
        <tr><td style="padding:32px;color:#FFE4D6;font-size:16px;line-height:1.6;">
          <p style="margin:0 0 24px;">${tier.body}</p>
          <table cellpadding="0" cellspacing="0" style="margin:0 auto;">
            <tr><td style="background:#FF7F50;border-radius:8px;padding:14px 28px;">
              <a href="https://bloxify.app" style="color:#fff;text-decoration:none;font-weight:600;font-size:16px;">Visit Bloxify</a>
            </td></tr>
          </table>
        </td></tr>
        <!-- Footer -->
        <tr><td style="padding:20px 32px;text-align:center;color:#888;font-size:12px;border-top:1px solid #2a2f45;">
          You're receiving this because you joined the Bloxify launch waitlist.
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

export async function GET(request: Request) {
  // Verify authorization
  const authHeader = request.headers.get("authorization");
  const expected = `Bearer ${process.env.CRON_SECRET}`;

  if (!process.env.CRON_SECRET || authHeader !== expected) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const now = new Date();
  const tier = getTier(now);

  if (!tier) {
    return NextResponse.json({
      message: "No email tier matches current time",
      now: now.toISOString(),
    });
  }

  // Fetch all contacts from the audience
  const { data: contactsData, error: contactsError } =
    await resend.contacts.list({ audienceId: AUDIENCE_ID });

  if (contactsError || !contactsData?.data?.length) {
    console.error("Failed to fetch contacts:", contactsError);
    return NextResponse.json(
      { error: "Failed to fetch contacts", details: contactsError },
      { status: 500 }
    );
  }

  const contacts = contactsData.data;
  const html = buildHtml(tier);

  // Batch send (Resend supports up to 100 per batch call)
  const emails = contacts.map((contact) => ({
    from: FROM,
    to: contact.email,
    subject: tier.subject,
    html,
  }));

  // Send in batches of 100
  const batchSize = 100;
  let sent = 0;
  const errors: unknown[] = [];

  for (let i = 0; i < emails.length; i += batchSize) {
    const batch = emails.slice(i, i + batchSize);
    const { error } = await resend.batch.send(batch);
    if (error) {
      errors.push(error);
    } else {
      sent += batch.length;
    }
  }

  return NextResponse.json({
    tier: tier.label,
    sent,
    total: contacts.length,
    errors: errors.length > 0 ? errors : undefined,
  });
}
