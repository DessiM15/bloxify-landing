import { NextResponse } from "next/server";
import { schedule } from "@/lib/social/schedule";
import { resolveImage, postToAllPlatforms, markAsPosted } from "@/lib/social/post";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { postId, secret } = body as { postId?: string; secret?: string };

    if (!process.env.ADMIN_SECRET || secret !== process.env.ADMIN_SECRET) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (!postId) {
      return NextResponse.json({ error: "postId required" }, { status: 400 });
    }

    const post = schedule.find((p) => p.id === postId);
    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    const image = await resolveImage(post.image);
    const results = await postToAllPlatforms(post, image);
    await markAsPosted(post.id);

    return NextResponse.json({
      id: post.id,
      results,
    });
  } catch (err) {
    return NextResponse.json(
      { error: "Trigger failed", details: String(err) },
      { status: 500 }
    );
  }
}
