import { ImageResponse } from "next/og";

export const alt = "Bloxify — Block Puzzle, Reimagined";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Evergreen brand card — no launch date or countdown, so it never goes stale.
const blockColors = ["#E24B4A", "#EF9F27", "#378ADD", "#FF7F50"];

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "linear-gradient(135deg, #0F1220 0%, #1A1F35 50%, #0F1220 100%)",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Left side — branding */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "40px 0 40px 60px",
            width: "58%",
          }}
        >
          {/* App icon + title */}
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 28 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://bloxify.app/images/icon.png"
              alt=""
              width={56}
              height={56}
              style={{ borderRadius: 12 }}
            />
            <span style={{ color: "#FFE4D6", fontSize: 40, fontWeight: 800 }}>Bloxify</span>
          </div>

          {/* Motto */}
          <span
            style={{
              color: "#FFE4D6",
              fontSize: 58,
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: 12,
            }}
          >
            Drop. Clear. Climb. 🌸
          </span>

          {/* Descriptor */}
          <span
            style={{
              color: "#FF7F50",
              fontSize: 27,
              fontWeight: 600,
              marginBottom: 30,
            }}
          >
            Block Puzzle, Reimagined
          </span>

          {/* Decorative block accent — brand callback */}
          <div style={{ display: "flex", gap: 10, marginBottom: 32 }}>
            {blockColors.map((c, i) => (
              <div
                key={i}
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 7,
                  backgroundColor: c,
                  boxShadow: "0 3px 0 rgba(0,0,0,0.2)",
                }}
              />
            ))}
          </div>

          {/* Google Play badge */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://bloxify.app/images/google-play-badge.png"
            alt="Get it on Google Play"
            width={155}
            height={60}
          />
        </div>

        {/* Right side — phone mockup + mascot */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "42%",
            position: "relative",
          }}
        >
          {/* Phone frame */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: 220,
              height: 440,
              borderRadius: 32,
              border: "4px solid #2a2f45",
              backgroundColor: "#111",
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(255,127,80,0.1)",
              position: "relative",
            }}
          >
            {/* Notch */}
            <div
              style={{
                display: "flex",
                position: "absolute",
                top: 0,
                left: "50%",
                transform: "translateX(-50%)",
                width: 80,
                height: 24,
                backgroundColor: "#111",
                borderBottomLeftRadius: 14,
                borderBottomRightRadius: 14,
                zIndex: 2,
              }}
            />
            {/* Screenshot */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://bloxify.app/images/screenshots/adventure-mode.jpg"
              alt=""
              width={220}
              height={440}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </div>

          {/* Mascot — waving, positioned bottom-right of phone */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://bloxify.app/images/mascot/blox_waving.png"
            alt=""
            width={120}
            height={160}
            style={{
              position: "absolute",
              bottom: 50,
              right: 30,
            }}
          />
        </div>

        {/* Bottom tagline */}
        <span
          style={{
            position: "absolute",
            bottom: 20,
            left: 60,
            color: "#FFE4D680",
            fontSize: 14,
          }}
        >
          bloxify.app
        </span>
      </div>
    ),
    { ...size }
  );
}
