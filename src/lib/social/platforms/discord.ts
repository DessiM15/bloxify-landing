import type { PostResult, ResolvedImage } from "../types";

export async function postToDiscord(
  caption: string,
  image: ResolvedImage
): Promise<PostResult> {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
  if (!webhookUrl) {
    return { platform: "discord", success: false, error: "DISCORD_WEBHOOK_URL not configured" };
  }

  try {
    const form = new FormData();
    form.append("content", caption);
    form.append(
      "file",
      new Blob([new Uint8Array(image.buffer)], { type: "image/png" }),
      "bloxify-post.png"
    );

    const res = await fetch(webhookUrl, { method: "POST", body: form });

    if (!res.ok) {
      const text = await res.text();
      return { platform: "discord", success: false, error: `Discord ${res.status}: ${text}` };
    }

    return { platform: "discord", success: true };
  } catch (err) {
    return { platform: "discord", success: false, error: String(err) };
  }
}
