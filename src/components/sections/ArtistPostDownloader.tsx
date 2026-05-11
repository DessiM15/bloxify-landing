"use client";

import { useState } from "react";
import { featuredArtist } from "@/lib/artist-data";
import type { ArtistImageVariation, ImageFormat } from "@/lib/artist-data";

const variations: { value: ArtistImageVariation; label: string; description: string }[] = [
  { value: "artist-tracks", label: "Artist + Tracks", description: "Photo, name, and all tracks" },
  { value: "single-track", label: "Single Track", description: "\"Now Playing\" style with one featured track" },
  { value: "spotlight", label: "Spotlight", description: "Photo, name, bio, and mascot" },
];

const formats: { value: ImageFormat; label: string }[] = [
  { value: "story", label: "Story 9:16" },
  { value: "square", label: "Square 1:1" },
];

export default function ArtistPostDownloader() {
  const [variation, setVariation] = useState<ArtistImageVariation>("artist-tracks");
  const [format, setFormat] = useState<ImageFormat>("story");
  const [trackIndex, setTrackIndex] = useState(0);

  const params = new URLSearchParams({
    variation,
    format,
    ...(variation === "single-track" ? { track: String(trackIndex) } : {}),
  });

  const inlineSrc = `/api/artist-image?${params.toString()}&inline=true`;
  const downloadHref = `/api/artist-image?${params.toString()}`;

  return (
    <div className="flex flex-col items-center gap-5">
      {/* Variation selector */}
      <div className="flex flex-wrap justify-center gap-2">
        {variations.map((v) => (
          <button
            key={v.value}
            onClick={() => setVariation(v.value)}
            className={`px-4 py-2 rounded-full text-sm font-bold transition-all cursor-pointer ${
              variation === v.value
                ? "bg-coral text-navy"
                : "bg-cream/10 text-cream-dim hover:bg-cream/20"
            }`}
            title={v.description}
          >
            {v.label}
          </button>
        ))}
      </div>

      {/* Format toggle */}
      <div className="flex gap-2">
        {formats.map((f) => (
          <button
            key={f.value}
            onClick={() => setFormat(f.value)}
            className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
              format === f.value
                ? "bg-coral text-navy"
                : "bg-cream/10 text-cream-dim hover:bg-cream/20"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Track selector (single-track only) */}
      {variation === "single-track" && (
        <div className="flex gap-2">
          {featuredArtist.tracks.map((track, i) => (
            <button
              key={track.title}
              onClick={() => setTrackIndex(i)}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                trackIndex === i
                  ? "bg-block-blue text-white"
                  : "bg-cream/10 text-cream-dim hover:bg-cream/20"
              }`}
            >
              {track.title}
            </button>
          ))}
        </div>
      )}

      {/* Inline preview */}
      <div className="rounded-xl overflow-hidden border border-cream/10 shadow-lg bg-navy-light">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          key={`${variation}-${format}-${trackIndex}`}
          src={inlineSrc}
          alt={`${featuredArtist.name} - ${variation} (${format})`}
          className={format === "story" ? "w-48 sm:w-56" : "w-56 sm:w-64"}
        />
      </div>

      {/* Download button */}
      <a
        href={downloadHref}
        download
        className="flex items-center gap-2 bg-coral hover:bg-coral-dark text-navy font-bold text-sm px-5 py-2.5 rounded-full transition-colors shadow-lg"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
        </svg>
        Download Image
      </a>
    </div>
  );
}
