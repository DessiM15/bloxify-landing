export type Platform = "discord" | "facebook" | "instagram" | "tiktok";

export type ImageFormat = "story" | "square";

export type PostImage =
  | { source: "countdown-api"; format: ImageFormat }
  | { source: "artist-api"; variation: "artist-tracks" | "single-track" | "spotlight"; format: ImageFormat; track?: number }
  | { source: "realm-api"; realm: number; format: ImageFormat }
  | { source: "static"; path: string };

export type PostType =
  | "countdown"
  | "realm-reveal"
  | "artist"
  | "artist-track"
  | "game-mode"
  | "season"
  | "launch";

export interface ScheduledPost {
  id: string;
  scheduledAt: string; // ISO 8601
  type: PostType;
  platforms: Platform[];
  caption: Partial<Record<Platform, string>>;
  image: PostImage;
  hashtags?: string[];
  enabled: boolean;
}

export interface PostResult {
  platform: Platform;
  success: boolean;
  postId?: string;
  error?: string;
}

export interface ResolvedImage {
  buffer: Buffer;
  publicUrl: string;
}
