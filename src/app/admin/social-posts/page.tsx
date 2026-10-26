"use client";

import { useState, useMemo } from "react";
import { schedule } from "@/lib/social/schedule";
import type { ScheduledPost, Platform, PostType } from "@/lib/social/types";

const platformIcons: Record<Platform, string> = {
  discord: "Discord",
  facebook: "Facebook",
  instagram: "Instagram",
  tiktok: "TikTok",
};

const platformColors: Record<Platform, string> = {
  discord: "#5865F2",
  facebook: "#1877F2",
  instagram: "#E4405F",
  tiktok: "#000000",
};

const typeLabels: Record<PostType, { label: string; color: string }> = {
  countdown: { label: "Countdown", color: "#EF9F27" },
  "realm-reveal": { label: "Realm Reveal", color: "#059669" },
  artist: { label: "Artist", color: "#7C3AED" },
  "artist-track": { label: "Track", color: "#1DB954" },
  "game-mode": { label: "Game Mode", color: "#378ADD" },
  season: { label: "Season", color: "#EC4899" },
  launch: { label: "Launch", color: "#E24B4A" },
};

function getStatus(post: ScheduledPost): "upcoming" | "past" | "disabled" {
  if (!post.enabled) return "disabled";
  return new Date(post.scheduledAt).getTime() > Date.now() ? "upcoming" : "past";
}

function getImagePreviewUrl(post: ScheduledPost): string {
  const img = post.image;
  switch (img.source) {
    case "countdown-api":
      return `/api/countdown-image?format=${img.format}&inline=true`;
    case "artist-api": {
      const params = new URLSearchParams({
        variation: img.variation,
        format: img.format,
        inline: "true",
      });
      if (img.track !== undefined) params.set("track", String(img.track));
      return `/api/artist-image?${params.toString()}`;
    }
    case "realm-api":
      return `/api/realm-image?realm=${img.realm}&format=${img.format}&inline=true`;
    case "static":
      return img.path;
  }
}

function groupByDate(posts: ScheduledPost[]): Map<string, ScheduledPost[]> {
  const groups = new Map<string, ScheduledPost[]>();
  for (const post of posts) {
    const date = new Date(post.scheduledAt).toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
    const existing = groups.get(date) ?? [];
    existing.push(post);
    groups.set(date, existing);
  }
  return groups;
}

export default function AdminSocialPostsPage() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [filterPlatform, setFilterPlatform] = useState<Platform | null>(null);
  const [filterType, setFilterType] = useState<PostType | null>(null);
  const [triggerStatus, setTriggerStatus] = useState<Record<string, string>>({});

  const filteredPosts = useMemo(() => {
    return schedule.filter((post) => {
      if (filterPlatform && !post.platforms.includes(filterPlatform)) return false;
      if (filterType && post.type !== filterType) return false;
      return true;
    });
  }, [filterPlatform, filterType]);

  const grouped = useMemo(() => groupByDate(filteredPosts), [filteredPosts]);

  async function triggerPost(postId: string) {
    const secret = prompt("Enter admin secret:");
    if (!secret) return;

    setTriggerStatus((prev) => ({ ...prev, [postId]: "posting..." }));

    try {
      const res = await fetch("/api/admin/social-posts/trigger", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ postId, secret }),
      });
      const data = await res.json();

      if (!res.ok) {
        setTriggerStatus((prev) => ({ ...prev, [postId]: `Error: ${data.error}` }));
        return;
      }

      const successes = data.results?.filter((r: { success: boolean }) => r.success).length ?? 0;
      const total = data.results?.length ?? 0;
      setTriggerStatus((prev) => ({
        ...prev,
        [postId]: `Posted ${successes}/${total} platforms`,
      }));
    } catch (err) {
      setTriggerStatus((prev) => ({ ...prev, [postId]: `Failed: ${err}` }));
    }
  }

  const allPlatforms: Platform[] = ["discord", "facebook", "instagram", "tiktok"];
  const allTypes: PostType[] = ["countdown", "realm-reveal", "artist", "artist-track", "game-mode", "season", "launch"];

  return (
    <div className="min-h-screen bg-navy text-cream p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-extrabold mb-2">Social Posts Schedule</h1>
        <p className="text-cream-dim text-sm mb-8">
          Internal tool — view schedule, preview images, and manually trigger posts.
        </p>

        {/* Filter pills */}
        <div className="space-y-4 mb-8">
          {/* Platform filters */}
          <div>
            <label className="text-xs font-bold uppercase tracking-widest text-cream-dim mb-2 block">
              Platform
            </label>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setFilterPlatform(null)}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  !filterPlatform
                    ? "bg-coral text-navy"
                    : "bg-cream/10 text-cream-dim hover:bg-cream/20"
                }`}
              >
                All
              </button>
              {allPlatforms.map((p) => (
                <button
                  key={p}
                  onClick={() => setFilterPlatform(filterPlatform === p ? null : p)}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    filterPlatform === p
                      ? "text-white"
                      : "bg-cream/10 text-cream-dim hover:bg-cream/20"
                  }`}
                  style={filterPlatform === p ? { backgroundColor: platformColors[p] } : {}}
                >
                  {platformIcons[p]}
                </button>
              ))}
            </div>
          </div>

          {/* Type filters */}
          <div>
            <label className="text-xs font-bold uppercase tracking-widest text-cream-dim mb-2 block">
              Post Type
            </label>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setFilterType(null)}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  !filterType
                    ? "bg-coral text-navy"
                    : "bg-cream/10 text-cream-dim hover:bg-cream/20"
                }`}
              >
                All
              </button>
              {allTypes.map((t) => (
                <button
                  key={t}
                  onClick={() => setFilterType(filterType === t ? null : t)}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    filterType === t
                      ? "text-white"
                      : "bg-cream/10 text-cream-dim hover:bg-cream/20"
                  }`}
                  style={filterType === t ? { backgroundColor: typeLabels[t].color } : {}}
                >
                  {typeLabels[t].label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="flex gap-4 mb-6 text-sm">
          <span className="text-cream-dim">
            {filteredPosts.length} post{filteredPosts.length !== 1 ? "s" : ""}
          </span>
          <span className="text-cream-dim">|</span>
          <span className="text-yellow-400">
            {filteredPosts.filter((p) => getStatus(p) === "upcoming").length} upcoming
          </span>
          <span className="text-green-400">
            {filteredPosts.filter((p) => getStatus(p) === "past").length} past
          </span>
          <span className="text-gray-500">
            {filteredPosts.filter((p) => getStatus(p) === "disabled").length} disabled
          </span>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          {Array.from(grouped.entries()).map(([date, posts]) => (
            <div key={date}>
              <h2 className="text-sm font-bold text-coral uppercase tracking-widest mb-3">
                {date}
              </h2>
              <div className="space-y-3">
                {posts.map((post) => {
                  const status = getStatus(post);
                  const isExpanded = expandedId === post.id;
                  const tLabel = typeLabels[post.type];

                  return (
                    <div
                      key={post.id}
                      className="rounded-xl border border-cream/10 overflow-hidden"
                      style={{ backgroundColor: "rgba(26, 31, 53, 0.6)" }}
                    >
                      {/* Header row */}
                      <button
                        onClick={() => setExpandedId(isExpanded ? null : post.id)}
                        className="w-full flex items-center gap-3 p-4 text-left cursor-pointer hover:bg-cream/5 transition-colors"
                      >
                        {/* Status badge */}
                        <span
                          className={`w-2 h-2 rounded-full flex-shrink-0 ${
                            status === "upcoming"
                              ? "bg-yellow-400"
                              : status === "past"
                              ? "bg-green-400"
                              : "bg-gray-600"
                          }`}
                        />

                        {/* Time */}
                        <span className="text-xs text-cream-dim w-16 flex-shrink-0">
                          {new Date(post.scheduledAt).toLocaleTimeString("en-US", {
                            hour: "numeric",
                            minute: "2-digit",
                            hour12: true,
                          })}
                        </span>

                        {/* Type badge */}
                        <span
                          className="px-2 py-0.5 rounded text-xs font-bold flex-shrink-0"
                          style={{
                            backgroundColor: `${tLabel.color}30`,
                            color: tLabel.color,
                          }}
                        >
                          {tLabel.label}
                        </span>

                        {/* Post ID / title */}
                        <span className="text-sm font-semibold text-cream flex-1 truncate">
                          {post.id}
                        </span>

                        {/* Platform indicators */}
                        <div className="flex gap-1.5 flex-shrink-0">
                          {post.platforms.map((p) => (
                            <span
                              key={p}
                              className="w-5 h-5 rounded flex items-center justify-center text-[10px] font-bold text-white"
                              style={{ backgroundColor: platformColors[p] }}
                              title={platformIcons[p]}
                            >
                              {p[0].toUpperCase()}
                            </span>
                          ))}
                        </div>

                        {/* Expand chevron */}
                        <svg
                          className={`w-4 h-4 text-cream-dim transition-transform ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>

                      {/* Expanded content */}
                      {isExpanded && (
                        <div className="px-4 pb-4 border-t border-cream/5 pt-4">
                          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6">
                            {/* Captions */}
                            <div className="space-y-4">
                              {post.platforms.map((p) => (
                                <div key={p}>
                                  <span
                                    className="text-xs font-bold uppercase tracking-wider"
                                    style={{ color: platformColors[p] }}
                                  >
                                    {platformIcons[p]}
                                  </span>
                                  <p className="text-sm text-cream-dim mt-1 whitespace-pre-wrap">
                                    {post.caption[p] ?? "—"}
                                  </p>
                                </div>
                              ))}

                              {post.hashtags && (
                                <div>
                                  <span className="text-xs font-bold uppercase tracking-wider text-cream-dim">
                                    Hashtags
                                  </span>
                                  <p className="text-sm text-cream-dim mt-1">
                                    {post.hashtags.map((h) => `#${h}`).join(" ")}
                                  </p>
                                </div>
                              )}

                              {/* Trigger button */}
                              <div className="flex items-center gap-3 pt-2">
                                <button
                                  onClick={() => triggerPost(post.id)}
                                  className="px-4 py-2 bg-coral hover:bg-coral-dark text-navy font-bold text-sm rounded-full transition-colors cursor-pointer"
                                >
                                  Post Now
                                </button>
                                {triggerStatus[post.id] && (
                                  <span className="text-xs text-cream-dim">
                                    {triggerStatus[post.id]}
                                  </span>
                                )}
                              </div>
                            </div>

                            {/* Image preview */}
                            <div className="flex flex-col items-center gap-2">
                              <span className="text-xs font-bold uppercase tracking-widest text-cream-dim">
                                Preview
                              </span>
                              <div className="rounded-lg overflow-hidden border border-cream/10">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                  src={getImagePreviewUrl(post)}
                                  alt={`Preview: ${post.id}`}
                                  className="w-48"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
