import { ImageResponse } from "next/og";

export const dynamic = "force-dynamic";

const LAUNCH_DATE = new Date("2026-05-16T20:00:00-05:00").getTime();

const blockColors = ["#E24B4A", "#EF9F27", "#378ADD", "#FF7F50"];
const labels = ["Days", "Hours", "Min", "Sec"];

function getTimeLeft() {
  const diff = Math.max(0, LAUNCH_DATE - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const format = searchParams.get("format") === "square" ? "square" : "story";

  const width = 1080;
  const height = format === "story" ? 1920 : 1080;

  const time = getTimeLeft();
  const values = [time.days, time.hours, time.minutes, time.seconds];
  const launched = Date.now() >= LAUNCH_DATE;
  const daysText = launched
    ? "We're Live!"
    : `${time.days} day${time.days !== 1 ? "s" : ""} until launch!`;

  const blockSize = format === "story" ? 180 : 140;
  const blockGap = format === "story" ? 24 : 16;
  const blockFontSize = format === "story" ? 80 : 60;

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
          background: "linear-gradient(135deg, #0F1220 0%, #1A1F35 50%, #0F1220 100%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* Wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: format === "story" ? 60 : 32 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://bloxify.app/images/icon.png"
            alt=""
            width={72}
            height={72}
            style={{ borderRadius: 16 }}
          />
          <span style={{ color: "#FFE4D6", fontSize: 56, fontWeight: 800 }}>Bloxify</span>
        </div>

        {/* Headline */}
        <span
          style={{
            color: "#FF7F50",
            fontSize: format === "story" ? 48 : 36,
            fontWeight: 800,
            marginBottom: format === "story" ? 48 : 28,
          }}
        >
          {daysText}
        </span>

        {/* Countdown blocks */}
        {!launched && (
          <div style={{ display: "flex", gap: blockGap, marginBottom: format === "story" ? 60 : 32 }}>
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
                    width: blockSize,
                    height: blockSize * 1.07,
                    borderRadius: 24,
                    backgroundColor: blockColors[i],
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 6px 0 rgba(0,0,0,0.2), 0 8px 20px rgba(0,0,0,0.3)",
                  }}
                >
                  <span style={{ color: "white", fontSize: blockFontSize, fontWeight: 800 }}>
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
        )}

        {/* Mascot */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: format === "story" ? 40 : 20 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://bloxify.app/images/mascot/blox_celebrating.png"
            alt=""
            width={100}
            height={100}
          />
        </div>

        {/* Bottom tagline */}
        <span
          style={{
            position: "absolute",
            bottom: 40,
            color: "#FFE4D680",
            fontSize: 20,
          }}
        >
          bloxify.app
        </span>
      </div>
    ),
    { width, height }
  );

  // Set content-disposition to trigger download
  const response = new Response(image.body, {
    headers: {
      "Content-Type": "image/png",
      "Content-Disposition": `attachment; filename="bloxify-countdown-${format}.png"`,
      "Cache-Control": "no-store",
    },
  });

  return response;
}
