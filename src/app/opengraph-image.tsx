import { ImageResponse } from "next/og";

export const alt = "Bloxify — Block Puzzle, Reimagined";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Force dynamic so the countdown updates on each fetch
export const dynamic = "force-dynamic";

const LAUNCH_DATE = new Date("2026-05-16T20:00:00-05:00").getTime();

function getTimeLeft() {
  const diff = Math.max(0, LAUNCH_DATE - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

const blockColors = ["#E24B4A", "#EF9F27", "#378ADD", "#FF7F50"];
const labels = ["Days", "Hours", "Minutes", "Seconds"];

export default function OGImage() {
  const time = getTimeLeft();
  const values = [time.days, time.hours, time.minutes, time.seconds];
  const launched = Date.now() >= LAUNCH_DATE;

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
        {/* App icon + title */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 12 }}>
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

        {launched ? (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <span style={{ fontSize: 72, fontWeight: 800, color: "#FF7F50", marginBottom: 8 }}>
              We&apos;re Live! 🎉
            </span>
            <span style={{ color: "#FFE4D6CC", fontSize: 28 }}>
              Available now on Google Play
            </span>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            {/* Launching label */}
            <span
              style={{
                color: "#FF7F50",
                fontSize: 18,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: 4,
                marginBottom: 8,
              }}
            >
              Launching on Google Play
            </span>
            <span style={{ color: "#FFE4D6", fontSize: 48, fontWeight: 800, marginBottom: 40 }}>
              May 16, 2026
            </span>

            {/* Countdown blocks */}
            <div style={{ display: "flex", gap: 24 }}>
              {values.map((val, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      width: 140,
                      height: 150,
                      borderRadius: 20,
                      backgroundColor: blockColors[i],
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 6px 0 rgba(0,0,0,0.2), 0 8px 20px rgba(0,0,0,0.3)",
                      position: "relative",
                    }}
                  >
                    <span style={{ color: "white", fontSize: 72, fontWeight: 800 }}>
                      {String(val).padStart(2, "0")}
                    </span>
                  </div>
                  <span
                    style={{
                      color: "#FFE4D6CC",
                      fontSize: 16,
                      fontWeight: 600,
                      marginTop: 12,
                      textTransform: "uppercase",
                      letterSpacing: 2,
                    }}
                  >
                    {labels[i]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom tagline */}
        <span
          style={{
            position: "absolute",
            bottom: 30,
            color: "#FFE4D680",
            fontSize: 16,
          }}
        >
          bloxify.app
        </span>
      </div>
    ),
    { ...size }
  );
}
