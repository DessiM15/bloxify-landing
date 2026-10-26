import type { PostImage, PostResult, ResolvedImage, ScheduledPost, Platform } from "./types";
import { postToDiscord } from "./platforms/discord";
import { postToFacebook } from "./platforms/facebook";
import { postToInstagram } from "./platforms/instagram";
import { postToTiktok } from "./platforms/tiktok";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://bloxify.app";

function buildImageUrl(image: PostImage): string {
  switch (image.source) {
    case "countdown-api":
      return `${BASE_URL}/api/countdown-image?format=${image.format}&inline=true`;
    case "artist-api": {
      const params = new URLSearchParams({
        variation: image.variation,
        format: image.format,
        inline: "true",
      });
      if (image.track !== undefined) params.set("track", String(image.track));
      return `${BASE_URL}/api/artist-image?${params.toString()}`;
    }
    case "realm-api":
      return `${BASE_URL}/api/realm-image?realm=${image.realm}&format=${image.format}&inline=true`;
    case "static":
      return `${BASE_URL}${image.path}`;
  }
}

export async function resolveImage(image: PostImage): Promise<ResolvedImage> {
  const publicUrl = buildImageUrl(image);

  // For static images, fetch from our own host
  // For API images, the route generates a fresh PNG
  const res = await fetch(publicUrl);
  if (!res.ok) {
    throw new Error(`Failed to fetch image: ${res.status} ${publicUrl}`);
  }

  const arrayBuffer = await res.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  return { buffer, publicUrl };
}

export async function postToAllPlatforms(
  post: ScheduledPost,
  resolvedImage: ResolvedImage
): Promise<PostResult[]> {
  const tasks = post.platforms.map(async (platform: Platform): Promise<PostResult> => {
    const caption = post.caption[platform];
    if (!caption) {
      return { platform, success: false, error: "No caption for platform" };
    }

    switch (platform) {
      case "discord":
        return postToDiscord(caption, resolvedImage);
      case "facebook":
        return postToFacebook(caption, resolvedImage);
      case "instagram":
        return postToInstagram(caption, resolvedImage, post.hashtags);
      case "tiktok":
        return postToTiktok(caption, resolvedImage, post.hashtags);
      default:
        return { platform, success: false, error: "Unknown platform" };
    }
  });

  const settled = await Promise.allSettled(tasks);

  return settled.map((result, i) => {
    if (result.status === "fulfilled") return result.value;
    return {
      platform: post.platforms[i],
      success: false,
      error: String(result.reason),
    };
  });
}

// ── KV idempotency helpers ──

const KV_URL = process.env.KV_REST_API_URL;
const KV_TOKEN = process.env.KV_REST_API_TOKEN;

export async function hasBeenPosted(postId: string): Promise<boolean> {
  if (!KV_URL || !KV_TOKEN) return false; // No KV = no idempotency check

  try {
    const res = await fetch(`${KV_URL}/get/social:${postId}`, {
      headers: { Authorization: `Bearer ${KV_TOKEN}` },
    });
    const data = await res.json();
    return data.result !== null;
  } catch {
    return false;
  }
}

export async function markAsPosted(postId: string): Promise<void> {
  if (!KV_URL || !KV_TOKEN) return;

  try {
    await fetch(`${KV_URL}/set/social:${postId}/${Date.now()}`, {
      headers: { Authorization: `Bearer ${KV_TOKEN}` },
    });
  } catch {
    // Silently fail — non-critical
  }
}
