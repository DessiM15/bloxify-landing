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
const labels = ["Days", "Hrs", "Min", "Sec"];

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
          background: "linear-gradient(135deg, #0F1220 0%, #1A1F35 50%, #0F1220 100%)",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Left side — branding + countdown */}
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
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://bloxify.app/images/icon.png"
              alt=""
              width={48}
              height={48}
              style={{ borderRadius: 10 }}
            />
            <span style={{ color: "#FFE4D6", fontSize: 36, fontWeight: 800 }}>Bloxify</span>
          </div>

          {launched ? (
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: 56, fontWeight: 800, color: "#FF7F50", marginBottom: 8 }}>
                We&apos;re Live! 🎉
              </span>
              <span style={{ color: "#FFE4D6CC", fontSize: 24 }}>
                Available now on Google Play
              </span>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column" }}>
              {/* Launching label */}
              <span
                style={{
                  color: "#FF7F50",
                  fontSize: 15,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: 4,
                  marginBottom: 6,
                }}
              >
                Launching on Google Play
              </span>
              <span style={{ color: "#FFE4D6", fontSize: 42, fontWeight: 800, marginBottom: 32 }}>
                May 16, 2026
              </span>

              {/* Countdown blocks */}
              <div style={{ display: "flex", gap: 14 }}>
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
                        width: 100,
                        height: 107,
                        borderRadius: 16,
                        backgroundColor: blockColors[i],
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 4px 0 rgba(0,0,0,0.2), 0 6px 16px rgba(0,0,0,0.3)",
                      }}
                    >
                      <span style={{ color: "white", fontSize: 52, fontWeight: 800 }}>
                        {String(val).padStart(2, "0")}
                      </span>
                    </div>
                    <span
                      style={{
                        color: "#FFE4D6CC",
                        fontSize: 13,
                        fontWeight: 600,
                        marginTop: 8,
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
