import { NextResponse } from "next/server";
import { schedule } from "@/lib/social/schedule";
import { resolveImage, postToAllPlatforms, hasBeenPosted, markAsPosted } from "@/lib/social/post";
import type { PostResult } from "@/lib/social/types";

const WINDOW_MS = 30 * 60 * 1000; // ±15 minutes

export async function GET(request: Request) {
  // Same auth pattern as launch-emails cron
  const authHeader = request.headers.get("authorization");
  const expected = `Bearer ${process.env.CRON_SECRET}`;

  if (!process.env.CRON_SECRET || authHeader !== expected) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const now = Date.now();
  const results: {
    id: string;
    status: "posted" | "skipped" | "failed";
    platforms?: PostResult[];
    error?: string;
  }[] = [];

  // Find posts due within the window
  const duePosts = schedule.filter((post) => {
    if (!post.enabled) return false;
    const scheduledTime = new Date(post.scheduledAt).getTime();
    return Math.abs(now - scheduledTime) <= WINDOW_MS;
  });

  for (const post of duePosts) {
    // Check idempotency
    const alreadyPosted = await hasBeenPosted(post.id);
    if (alreadyPosted) {
      results.push({ id: post.id, status: "skipped" });
      continue;
    }

    try {
      const image = await resolveImage(post.image);
      const platformResults = await postToAllPlatforms(post, image);
      await markAsPosted(post.id);
      results.push({ id: post.id, status: "posted", platforms: platformResults });
    } catch (err) {
      results.push({ id: post.id, status: "failed", error: String(err) });
    }
  }

  return NextResponse.json({
    checked: schedule.length,
    due: duePosts.length,
    results,
    now: new Date(now).toISOString(),
  });
}
