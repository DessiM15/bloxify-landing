import type { PostResult, ResolvedImage } from "../types";

export async function postToFacebook(
  caption: string,
  image: ResolvedImage
): Promise<PostResult> {
  const pageId = process.env.FACEBOOK_PAGE_ID;
  const accessToken = process.env.FACEBOOK_PAGE_ACCESS_TOKEN;

  if (!pageId || !accessToken) {
    return { platform: "facebook", success: false, error: "Facebook env vars not configured" };
  }

  try {
    // POST /{page-id}/photos with public image URL + message
    const url = `https://graph.facebook.com/v21.0/${pageId}/photos`;
    const params = new URLSearchParams({
      url: image.publicUrl,
      message: caption,
      access_token: accessToken,
    });

    const res = await fetch(`${url}?${params.toString()}`, { method: "POST" });
    const data = await res.json();

    if (!res.ok || data.error) {
      return {
        platform: "facebook",
        success: false,
        error: data.error?.message || `Facebook ${res.status}`,
      };
    }

    return { platform: "facebook", success: true, postId: data.id };
  } catch (err) {
    return { platform: "facebook", success: false, error: String(err) };
  }
}
