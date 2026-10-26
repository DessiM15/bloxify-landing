import type { PostResult, ResolvedImage } from "../types";

export async function postToInstagram(
  caption: string,
  image: ResolvedImage,
  hashtags?: string[]
): Promise<PostResult> {
  const igUserId = process.env.INSTAGRAM_USER_ID;
  const accessToken = process.env.FACEBOOK_PAGE_ACCESS_TOKEN;

  if (!igUserId || !accessToken) {
    return { platform: "instagram", success: false, error: "Instagram env vars not configured" };
  }

  // Append hashtags to caption if provided
  const fullCaption = hashtags?.length
    ? `${caption}\n\n${hashtags.map((h) => `#${h}`).join(" ")}`
    : caption;

  try {
    // Step 1: Create media container
    const createUrl = `https://graph.facebook.com/v21.0/${igUserId}/media`;
    const createParams = new URLSearchParams({
      image_url: image.publicUrl,
      caption: fullCaption,
      access_token: accessToken,
    });

    const createRes = await fetch(`${createUrl}?${createParams.toString()}`, {
      method: "POST",
    });
    const createData = await createRes.json();

    if (!createRes.ok || createData.error) {
      return {
        platform: "instagram",
        success: false,
        error: createData.error?.message || `IG create ${createRes.status}`,
      };
    }

    const containerId = createData.id;

    // Step 2: Publish the container
    const publishUrl = `https://graph.facebook.com/v21.0/${igUserId}/media_publish`;
    const publishParams = new URLSearchParams({
      creation_id: containerId,
      access_token: accessToken,
    });

    const publishRes = await fetch(`${publishUrl}?${publishParams.toString()}`, {
      method: "POST",
    });
    const publishData = await publishRes.json();

    if (!publishRes.ok || publishData.error) {
      return {
        platform: "instagram",
        success: false,
        error: publishData.error?.message || `IG publish ${publishRes.status}`,
      };
    }

    return { platform: "instagram", success: true, postId: publishData.id };
  } catch (err) {
    return { platform: "instagram", success: false, error: String(err) };
  }
}
