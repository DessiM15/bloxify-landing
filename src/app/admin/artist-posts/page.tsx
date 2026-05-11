"use client";

import { useState } from "react";
import { featuredArtist } from "@/lib/artist-data";
import type { ArtistImageVariation, ImageFormat } from "@/lib/artist-data";

const variations: ArtistImageVariation[] = ["artist-tracks", "single-track", "spotlight"];
const formats: ImageFormat[] = ["story", "square"];

function buildUrl(variation: ArtistImageVariation, format: ImageFormat, track: number, inline: boolean) {
  const params = new URLSearchParams({ variation, format });
  if (variation === "single-track") params.set("track", String(track));
  if (inline) params.set("inline", "true");
  return `/api/artist-image?${params.toString()}`;
}

function allCombinations() {
  const combos: { variation: ArtistImageVariation; format: ImageFormat; track: number; label: string }[] = [];
  for (const variation of variations) {
    for (const format of formats) {
      if (variation === "single-track") {
        featuredArtist.tracks.forEach((t, i) => {
          combos.push({ variation, format, track: i, label: `${variation}-${format}-${t.title}` });
        });
      } else {
        combos.push({ variation, format, track: 0, label: `${variation}-${format}` });
      }
    }
  }
  return combos;
}

export default function AdminArtistPostsPage() {
  const [variation, setVariation] = useState<ArtistImageVariation>("artist-tracks");
  const [format, setFormat] = useState<ImageFormat>("story");
  const [trackIndex, setTrackIndex] = useState(0);
  const [downloading, setDownloading] = useState(false);

  const inlineSrc = buildUrl(variation, format, trackIndex, true);
  const downloadHref = buildUrl(variation, format, trackIndex, false);

  async function downloadAll() {
    setDownloading(true);
    const combos = allCombinations();
    for (const combo of combos) {
      const url = buildUrl(combo.variation, combo.format, combo.track, false);
      const a = document.createElement("a");
      a.href = url;
      a.download = `bloxify-${combo.label}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      // Small delay between downloads to avoid browser throttling
      await new Promise((r) => setTimeout(r, 500));
    }
    setDownloading(false);
  }

  return (
    <div className="min-h-screen bg-navy text-cream p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-extrabold mb-2">Artist Post Generator</h1>
        <p className="text-cream-dim text-sm mb-8">
          Internal tool — generate and download shareable artist images.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8">
          {/* Controls */}
          <div className="space-y-6">
            {/* Variation */}
            <div>
              <label className="text-xs font-bold uppercase tracking-widest text-cream-dim mb-2 block">
                Variation
              </label>
              <div className="flex flex-wrap gap-2">
                {variations.map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariation(v)}
                    className={`px-4 py-2 rounded-full text-sm font-bold transition-all cursor-pointer ${
                      variation === v
                        ? "bg-coral text-navy"
                        : "bg-cream/10 text-cream-dim hover:bg-cream/20"
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Format */}
            <div>
              <label className="text-xs font-bold uppercase tracking-widest text-cream-dim mb-2 block">
                Format
              </label>
              <div className="flex gap-2">
                {formats.map((f) => (
                  <button
                    key={f}
                    onClick={() => setFormat(f)}
                    className={`px-4 py-2 rounded-full text-sm font-bold transition-all cursor-pointer ${
                      format === f
                        ? "bg-coral text-navy"
                        : "bg-cream/10 text-cream-dim hover:bg-cream/20"
                    }`}
                  >
                    {f === "story" ? "Story 9:16" : "Square 1:1"}
                  </button>
                ))}
              </div>
            </div>

            {/* Track (single-track only) */}
            {variation === "single-track" && (
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-cream-dim mb-2 block">
                  Track
                </label>
                <div className="flex gap-2">
                  {featuredArtist.tracks.map((track, i) => (
                    <button
                      key={track.title}
                      onClick={() => setTrackIndex(i)}
                      className={`px-4 py-2 rounded-full text-sm font-bold transition-all cursor-pointer ${
                        trackIndex === i
                          ? "bg-block-blue text-white"
                          : "bg-cream/10 text-cream-dim hover:bg-cream/20"
                      }`}
                    >
                      {track.title}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={downloadHref}
                download
                className="flex items-center gap-2 bg-coral hover:bg-coral-dark text-navy font-bold text-sm px-5 py-2.5 rounded-full transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                Download This
              </a>
              <button
                onClick={downloadAll}
                disabled={downloading}
                className="flex items-center gap-2 bg-cream/10 hover:bg-cream/20 text-cream font-bold text-sm px-5 py-2.5 rounded-full transition-colors cursor-pointer disabled:opacity-50"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                </svg>
                {downloading ? "Downloading..." : `Download All (~${allCombinations().length} images)`}
              </button>
            </div>
          </div>

          {/* Preview */}
          <div className="flex flex-col items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-cream-dim">
              Preview
            </span>
            <div className="rounded-xl overflow-hidden border border-cream/10 shadow-lg bg-navy-light">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                key={`${variation}-${format}-${trackIndex}`}
                src={inlineSrc}
                alt={`Preview: ${variation} ${format}`}
                className={format === "story" ? "w-56" : "w-64"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
