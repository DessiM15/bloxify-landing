import type { PostResult, ResolvedImage } from "../types";

export async function postToTiktok(
  caption: string,
  image: ResolvedImage,
  hashtags?: string[]
): Promise<PostResult> {
  const accessToken = process.env.TIKTOK_ACCESS_TOKEN;

  if (!accessToken) {
    return { platform: "tiktok", success: false, error: "TIKTOK_ACCESS_TOKEN not configured" };
  }

  // Append hashtags to caption
  const fullCaption = hashtags?.length
    ? `${caption} ${hashtags.map((h) => `#${h}`).join(" ")}`
    : caption;

  try {
    // TikTok Content Posting API — photo post with PULL_FROM_URL
    const res = await fetch(
      "https://open.tiktokapis.com/v2/post/publish/content/init/",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({
          post_info: {
            title: fullCaption,
            privacy_level: "PUBLIC_TO_EVERYONE",
            disable_comment: false,
            auto_add_music: true,
          },
          source_info: {
            source: "PULL_FROM_URL",
            photo_cover_index: 0,
            photo_images: [image.publicUrl],
          },
          post_mode: "DIRECT_POST",
          media_type: "PHOTO",
        }),
      }
    );

    const data = await res.json();

    if (data.error?.code !== "ok" && data.error?.code) {
      return {
        platform: "tiktok",
        success: false,
        error: data.error?.message || `TikTok ${res.status}: ${data.error?.code}`,
      };
    }

    return {
      platform: "tiktok",
      success: true,
      postId: data.data?.publish_id,
    };
  } catch (err) {
    return { platform: "tiktok", success: false, error: String(err) };
  }
}
