import { ImageResponse } from "next/og";

export const alt = "Artists — Bloxify";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function ArtistOGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0F1220 0%, #1A1F35 50%, #0F1220 100%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* App icon */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://bloxify.app/images/icon.png"
            alt=""
            width={56}
            height={56}
            style={{ borderRadius: 12 }}
          />
        </div>

        {/* Label */}
        <span
          style={{
            color: "#FF7F50",
            fontSize: 18,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: 4,
            marginBottom: 16,
          }}
        >
          Artists Wanted
        </span>

        {/* Heading */}
        <span
          style={{
            color: "#FFE4D6",
            fontSize: 64,
            fontWeight: 800,
            marginBottom: 16,
          }}
        >
          Be Part of Bloxify
        </span>

        {/* Subtext */}
        <span
          style={{
            color: "#FFE4D6AA",
            fontSize: 24,
            maxWidth: 700,
            textAlign: "center",
            lineHeight: 1.4,
          }}
        >
          Submit your music to be featured in a premium mobile puzzle game
        </span>

        {/* Bottom URL */}
        <span
          style={{
            position: "absolute",
            bottom: 30,
            color: "#FFE4D680",
            fontSize: 16,
          }}
        >
          bloxify.app/artists
        </span>
      </div>
    ),
    { ...size }
  );
}
