import { ImageResponse } from "next/og";
import { realms } from "@/lib/realm-data";

export const dynamic = "force-dynamic";

const BASE_URL = "https://bloxify.app";

// Gradient color mapping for each realm (CSS-friendly, not Tailwind classes)
const realmColors: Record<number, { primary: string; accent: string; bg: string }> = {
  1: { primary: "#059669", accent: "#34d399", bg: "linear-gradient(135deg, #052e16 0%, #064e3b 50%, #052e16 100%)" },
  2: { primary: "#d97706", accent: "#fbbf24", bg: "linear-gradient(135deg, #451a03 0%, #78350f 50%, #431407 100%)" },
  3: { primary: "#0284c7", accent: "#22d3ee", bg: "linear-gradient(135deg, #082f49 0%, #155e75 50%, #082f49 100%)" },
  4: { primary: "#dc2626", accent: "#f97316", bg: "linear-gradient(135deg, #450a0a 0%, #9a3412 50%, #450a0a 100%)" },
  5: { primary: "#7c3aed", accent: "#a78bfa", bg: "linear-gradient(135deg, #2e1065 0%, #312e81 50%, #4c1d95 100%)" },
  6: { primary: "#52525b", accent: "#a1a1aa", bg: "linear-gradient(135deg, #09090b 0%, #18181b 50%, #000000 100%)" },
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const realmNum = parseInt(searchParams.get("realm") || "1", 10);
  const format = searchParams.get("format") === "square" ? "square" : "story";
  const inline = searchParams.get("inline") === "true";

  const realm = realms.find((r) => r.number === realmNum) ?? realms[0];
  const colors = realmColors[realm.number] ?? realmColors[1];

  const width = 1080;
  const height = format === "story" ? 1920 : 1080;
  const isStory = format === "story";

  const image = new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: colors.bg,
          fontFamily: "sans-serif",
          position: "relative",
          padding: isStory ? 80 : 60,
        }}
      >
        {/* Bloxify branding top */}
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
            width={isStory ? 56 : 44}
            height={isStory ? 56 : 44}
            style={{ borderRadius: 12 }}
          />
          <span
            style={{
              color: "#FFE4D6",
              fontSize: isStory ? 40 : 30,
              fontWeight: 800,
            }}
          >
            Bloxify
          </span>
        </div>

        {/* "Realm Reveal" label */}
        <span
          style={{
            color: colors.accent,
            fontSize: isStory ? 22 : 18,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: 4,
            marginBottom: isStory ? 24 : 16,
          }}
        >
          Realm Reveal
        </span>

        {/* Realm number badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: isStory ? 80 : 64,
            height: isStory ? 80 : 64,
            borderRadius: "50%",
            backgroundColor: colors.primary,
            marginBottom: isStory ? 24 : 16,
            boxShadow: `0 0 40px ${colors.primary}80`,
          }}
        >
          <span
            style={{
              color: "white",
              fontSize: isStory ? 36 : 28,
              fontWeight: 800,
            }}
          >
            {realm.number}
          </span>
        </div>

        {/* Realm artwork */}
        <div
          style={{
            display: "flex",
            width: isStory ? 600 : 440,
            height: isStory ? 340 : 250,
            borderRadius: 24,
            overflow: "hidden",
            border: `3px solid ${colors.primary}60`,
            marginBottom: isStory ? 36 : 24,
            boxShadow: `0 20px 60px rgba(0,0,0,0.5), 0 0 30px ${colors.primary}30`,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${BASE_URL}${realm.image}`}
            alt=""
            width={isStory ? 600 : 440}
            height={isStory ? 340 : 250}
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </div>

        {/* Realm name */}
        <span
          style={{
            color: "#FFE4D6",
            fontSize: isStory ? 52 : 40,
            fontWeight: 800,
            marginBottom: isStory ? 12 : 8,
            textAlign: "center",
          }}
        >
          {realm.name}
        </span>

        {/* Tagline */}
        <span
          style={{
            color: colors.accent,
            fontSize: isStory ? 26 : 20,
            fontWeight: 600,
            marginBottom: isStory ? 20 : 14,
            textAlign: "center",
            maxWidth: isStory ? 700 : 600,
          }}
        >
          {realm.tagline}
        </span>

        {/* Story text */}
        <span
          style={{
            color: "#FFE4D6AA",
            fontSize: isStory ? 22 : 17,
            textAlign: "center",
            maxWidth: isStory ? 700 : 600,
            lineHeight: 1.5,
            marginBottom: isStory ? 40 : 24,
          }}
        >
          {realm.story}
        </span>

        {/* Mascot bottom */}
        <div style={{ display: "flex" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${BASE_URL}/images/mascot/blox_waving.png`}
            alt=""
            width={isStory ? 120 : 90}
            height={isStory ? 160 : 120}
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
          bloxify.app
        </span>
      </div>
    ),
    { width, height }
  );

  const headers: Record<string, string> = {
    "Content-Type": "image/png",
    "Cache-Control": "public, max-age=86400",
  };
  if (!inline) {
    headers["Content-Disposition"] = `attachment; filename="bloxify-realm-${realm.number}-${format}.png"`;
  }

  return new Response(image.body, { headers });
}
