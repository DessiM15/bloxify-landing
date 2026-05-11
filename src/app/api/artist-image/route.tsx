import { ImageResponse } from "next/og";
import { featuredArtist } from "@/lib/artist-data";
import type { ArtistImageVariation, ImageFormat } from "@/lib/artist-data";

export const dynamic = "force-dynamic";

const BASE_URL = "https://bloxify.app";

const blockColors = ["#E24B4A", "#EF9F27", "#378ADD", "#FF7F50"];

function getDimensions(format: ImageFormat) {
  const width = 1080;
  const height = format === "story" ? 1920 : 1080;
  return { width, height };
}

/* ── Variation 1: Artist + Tracks ──────────────── */
function ArtistTracksImage({
  isStory,
}: {
  isStory: boolean;
}) {
  const artist = featuredArtist;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background:
          "linear-gradient(135deg, #0F1220 0%, #1A1F35 50%, #0F1220 100%)",
        fontFamily: "sans-serif",
        position: "relative",
        padding: isStory ? 80 : 60,
      }}
    >
      {/* Bloxify branding */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
          marginBottom: isStory ? 50 : 30,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${BASE_URL}/images/icon.png`}
          alt=""
          width={isStory ? 64 : 48}
          height={isStory ? 64 : 48}
          style={{ borderRadius: 14 }}
        />
        <span
          style={{
            color: "#FFE4D6",
            fontSize: isStory ? 48 : 36,
            fontWeight: 800,
          }}
        >
          Bloxify
        </span>
      </div>

      {/* "Featured Artist" label */}
      <span
        style={{
          color: "#FF7F50",
          fontSize: isStory ? 22 : 18,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: 4,
          marginBottom: isStory ? 36 : 24,
        }}
      >
        Featured Artist
      </span>

      {/* Artist photo */}
      <div
        style={{
          display: "flex",
          width: isStory ? 280 : 200,
          height: isStory ? 280 : 200,
          borderRadius: 32,
          overflow: "hidden",
          border: "4px solid rgba(255,127,80,0.3)",
          marginBottom: isStory ? 28 : 20,
          boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${BASE_URL}${artist.photo}`}
          alt=""
          width={isStory ? 280 : 200}
          height={isStory ? 280 : 200}
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </div>

      {/* Artist name */}
      <span
        style={{
          color: "#FFE4D6",
          fontSize: isStory ? 56 : 42,
          fontWeight: 800,
          marginBottom: isStory ? 44 : 28,
        }}
      >
        {artist.name}
      </span>

      {/* Track cards */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: isStory ? 20 : 14,
          width: "100%",
          maxWidth: isStory ? 800 : 700,
        }}
      >
        {artist.tracks.map((track, i) => (
          <div
            key={track.title}
            style={{
              display: "flex",
              alignItems: "center",
              gap: isStory ? 20 : 14,
              backgroundColor: "rgba(255,255,255,0.06)",
              borderRadius: 20,
              padding: isStory ? "24px 28px" : "18px 22px",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: isStory ? 56 : 44,
                height: isStory ? 56 : 44,
                borderRadius: 28,
                backgroundColor: blockColors[i % blockColors.length],
                flexShrink: 0,
              }}
            >
              <span
                style={{
                  color: "white",
                  fontSize: isStory ? 24 : 18,
                  fontWeight: 800,
                }}
              >
                {i + 1}
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  color: "#FFE4D6",
                  fontSize: isStory ? 28 : 22,
                  fontWeight: 700,
                }}
              >
                {track.title}
              </span>
              <span
                style={{
                  color: "#FFE4D6AA",
                  fontSize: isStory ? 18 : 14,
                }}
              >
                {track.description}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom tagline */}
      <span
        style={{
          position: "absolute",
          bottom: isStory ? 50 : 30,
          color: "#FFE4D680",
          fontSize: isStory ? 22 : 18,
        }}
      >
        bloxify.app/artists
      </span>
    </div>
  );
}

/* ── Variation 2: Single Track ─────────────────── */
function SingleTrackImage({
  isStory,
  trackIndex,
}: {
  isStory: boolean;
  trackIndex: number;
}) {
  const artist = featuredArtist;
  const track = artist.tracks[trackIndex] ?? artist.tracks[0];

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background:
          "linear-gradient(135deg, #0F1220 0%, #1A1F35 50%, #0F1220 100%)",
        fontFamily: "sans-serif",
        position: "relative",
        padding: isStory ? 80 : 60,
      }}
    >
      {/* "Now Playing" label */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          marginBottom: isStory ? 48 : 32,
        }}
      >
        <div
          style={{
            display: "flex",
            width: isStory ? 16 : 12,
            height: isStory ? 16 : 12,
            borderRadius: "50%",
            backgroundColor: "#1DB954",
          }}
        />
        <span
          style={{
            color: "#1DB954",
            fontSize: isStory ? 24 : 18,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: 3,
          }}
        >
          Now Playing
        </span>
      </div>

      {/* Album-art style: artist photo large */}
      <div
        style={{
          display: "flex",
          width: isStory ? 420 : 320,
          height: isStory ? 420 : 320,
          borderRadius: 28,
          overflow: "hidden",
          border: "4px solid rgba(255,127,80,0.2)",
          marginBottom: isStory ? 48 : 32,
          boxShadow:
            "0 30px 80px rgba(0,0,0,0.5), 0 0 60px rgba(255,127,80,0.08)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${BASE_URL}${artist.photo}`}
          alt=""
          width={isStory ? 420 : 320}
          height={isStory ? 420 : 320}
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </div>

      {/* Track title */}
      <span
        style={{
          color: "#FFE4D6",
          fontSize: isStory ? 52 : 40,
          fontWeight: 800,
          marginBottom: 8,
          textAlign: "center",
        }}
      >
        {track.title}
      </span>

      {/* Artist name */}
      <span
        style={{
          color: "#FFE4D6AA",
          fontSize: isStory ? 30 : 24,
          fontWeight: 600,
          marginBottom: isStory ? 16 : 12,
        }}
      >
        {artist.name}
      </span>

      {/* Description */}
      <span
        style={{
          color: "#FFE4D680",
          fontSize: isStory ? 22 : 17,
          textAlign: "center",
          maxWidth: isStory ? 600 : 500,
          marginBottom: isStory ? 48 : 32,
        }}
      >
        {track.description}
      </span>

      {/* Spotify + Bloxify */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 24,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <svg
            width={isStory ? 28 : 22}
            height={isStory ? 28 : 22}
            viewBox="0 0 24 24"
            fill="#1DB954"
          >
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
          </svg>
          <span
            style={{
              color: "#1DB954",
              fontSize: isStory ? 20 : 16,
              fontWeight: 600,
            }}
          >
            Listen on Spotify
          </span>
        </div>
        <span style={{ color: "#FFE4D640", fontSize: isStory ? 20 : 16 }}>
          |
        </span>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${BASE_URL}/images/icon.png`}
            alt=""
            width={isStory ? 28 : 22}
            height={isStory ? 28 : 22}
            style={{ borderRadius: 6 }}
          />
          <span
            style={{
              color: "#FF7F50",
              fontSize: isStory ? 20 : 16,
              fontWeight: 600,
            }}
          >
            In Bloxify
          </span>
        </div>
      </div>

      {/* Bottom tagline */}
      <span
        style={{
          position: "absolute",
          bottom: isStory ? 50 : 30,
          color: "#FFE4D680",
          fontSize: isStory ? 22 : 18,
        }}
      >
        bloxify.app/artists
      </span>
    </div>
  );
}

/* ── Variation 3: Spotlight ────────────────────── */
function SpotlightImage({ isStory }: { isStory: boolean }) {
  const artist = featuredArtist;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background:
          "linear-gradient(135deg, #0F1220 0%, #1A1F35 50%, #0F1220 100%)",
        fontFamily: "sans-serif",
        position: "relative",
        padding: isStory ? 80 : 60,
      }}
    >
      {/* Bloxify branding */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
          position: "absolute",
          top: isStory ? 60 : 40,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${BASE_URL}/images/icon.png`}
          alt=""
          width={isStory ? 52 : 40}
          height={isStory ? 52 : 40}
          style={{ borderRadius: 12 }}
        />
        <span
          style={{
            color: "#FFE4D6",
            fontSize: isStory ? 36 : 28,
            fontWeight: 800,
          }}
        >
          Bloxify
        </span>
      </div>

      {/* "Artist Spotlight" badge */}
      <span
        style={{
          color: "#FF7F50",
          fontSize: isStory ? 22 : 18,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: 4,
          marginBottom: isStory ? 36 : 24,
        }}
      >
        Artist Spotlight
      </span>

      {/* Artist photo */}
      <div
        style={{
          display: "flex",
          width: isStory ? 340 : 260,
          height: isStory ? 340 : 260,
          borderRadius: "50%",
          overflow: "hidden",
          border: "5px solid rgba(255,127,80,0.25)",
          marginBottom: isStory ? 36 : 24,
          boxShadow:
            "0 20px 60px rgba(0,0,0,0.4), 0 0 40px rgba(255,127,80,0.1)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${BASE_URL}${artist.photo}`}
          alt=""
          width={isStory ? 340 : 260}
          height={isStory ? 340 : 260}
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </div>

      {/* Artist name */}
      <span
        style={{
          color: "#FFE4D6",
          fontSize: isStory ? 60 : 46,
          fontWeight: 800,
          marginBottom: isStory ? 20 : 14,
        }}
      >
        {artist.name}
      </span>

      {/* Bio snippet */}
      <span
        style={{
          color: "#FFE4D6AA",
          fontSize: isStory ? 26 : 20,
          textAlign: "center",
          maxWidth: isStory ? 700 : 600,
          lineHeight: 1.5,
          marginBottom: isStory ? 48 : 32,
        }}
      >
        {artist.bio}
      </span>

      {/* Mascot */}
      <div style={{ display: "flex" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${BASE_URL}/images/mascot/blox_headphones_bloxify_t-shirt.png`}
          alt=""
          width={isStory ? 140 : 110}
          height={isStory ? 140 : 110}
        />
      </div>

      {/* Bottom tagline */}
      <span
        style={{
          position: "absolute",
          bottom: isStory ? 50 : 30,
          color: "#FFE4D680",
          fontSize: isStory ? 22 : 18,
        }}
      >
        bloxify.app/artists
      </span>
    </div>
  );
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const variation = (searchParams.get("variation") || "artist-tracks") as ArtistImageVariation;
  const format = (searchParams.get("format") === "square" ? "square" : "story") as ImageFormat;
  const trackIndex = parseInt(searchParams.get("track") || "0", 10);
  const inline = searchParams.get("inline") === "true";

  const { width, height } = getDimensions(format);
  const isStory = format === "story";

  let element: React.ReactElement;
  switch (variation) {
    case "single-track":
      element = <SingleTrackImage isStory={isStory} trackIndex={trackIndex} />;
      break;
    case "spotlight":
      element = <SpotlightImage isStory={isStory} />;
      break;
    case "artist-tracks":
    default:
      element = <ArtistTracksImage isStory={isStory} />;
      break;
  }

  const image = new ImageResponse(element, { width, height });

  const headers: Record<string, string> = {
    "Content-Type": "image/png",
    "Cache-Control": "public, max-age=3600",
  };
  if (!inline) {
    headers["Content-Disposition"] = `attachment; filename="bloxify-${variation}-${format}.png"`;
  }

  return new Response(image.body, { headers });
}
