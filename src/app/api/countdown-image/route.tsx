import { ImageResponse } from "next/og";

export const dynamic = "force-dynamic";

const LAUNCH_DATE = new Date("2026-06-04T12:00:00-05:00").getTime();

const blockColors = ["#E24B4A", "#EF9F27", "#378ADD", "#FF7F50"];
const labels = ["Days", "Hrs", "Min", "Sec"];

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

  const isStory = format === "story";
  const blockSize = isStory ? 160 : 120;
  const blockGap = isStory ? 20 : 14;
  const blockFontSize = isStory ? 72 : 52;
  const phoneW = isStory ? 320 : 240;
  const phoneH = isStory ? 640 : 480;
  const phoneRadius = isStory ? 44 : 36;
  const mascotSize = isStory ? 180 : 140;

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
          position: "relative",
        }}
      >
        {/* Wordmark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: isStory ? 40 : 24,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://bloxify.app/images/icon.png"
            alt=""
            width={isStory ? 72 : 56}
            height={isStory ? 72 : 56}
            style={{ borderRadius: 16 }}
          />
          <span style={{ color: "#FFE4D6", fontSize: isStory ? 56 : 44, fontWeight: 800 }}>
            Bloxify
          </span>
        </div>

        {/* Headline */}
        <span
          style={{
            color: "#FF7F50",
            fontSize: isStory ? 44 : 32,
            fontWeight: 800,
            marginBottom: isStory ? 36 : 20,
          }}
        >
          {daysText}
        </span>

        {/* Phone mockup + mascot */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            marginBottom: isStory ? 48 : 24,
          }}
        >
          {/* Phone frame */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: phoneW,
              height: phoneH,
              borderRadius: phoneRadius,
              border: "5px solid #2a2f45",
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
                width: isStory ? 100 : 80,
                height: isStory ? 30 : 24,
                backgroundColor: "#111",
                borderBottomLeftRadius: 16,
                borderBottomRightRadius: 16,
                zIndex: 2,
              }}
            />
            {/* Screenshot */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://bloxify.app/images/screenshots/adventure-mode.jpg"
              alt=""
              width={phoneW}
              height={phoneH}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </div>

          {/* Mascot — waving, bottom-right of phone */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://bloxify.app/images/mascot/blox_waving.png"
            alt=""
            width={mascotSize}
            height={Math.round(mascotSize * 1.33)}
            style={{
              position: "absolute",
              bottom: -10,
              right: isStory ? -60 : -50,
            }}
          />
        </div>

        {/* Countdown blocks */}
        {!launched && (
          <div style={{ display: "flex", gap: blockGap }}>
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
                    height: Math.round(blockSize * 1.07),
                    borderRadius: 20,
                    backgroundColor: blockColors[i],
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 4px 0 rgba(0,0,0,0.2), 0 6px 16px rgba(0,0,0,0.3)",
                  }}
                >
                  <span style={{ color: "white", fontSize: blockFontSize, fontWeight: 800 }}>
                    {String(val).padStart(2, "0")}
                  </span>
                </div>
                <span
                  style={{
                    color: "#FFE4D6CC",
                    fontSize: isStory ? 16 : 13,
                    fontWeight: 600,
                    marginTop: 10,
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
