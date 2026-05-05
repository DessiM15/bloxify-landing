import Image from "next/image";

interface DeviceMockupProps {
  screenshot?: string;
}

export default function DeviceMockup({ screenshot }: DeviceMockupProps) {
  return (
    <div className="relative mx-auto w-[260px] sm:w-[280px]">
      {/* Phone frame */}
      <div className="relative rounded-[2.5rem] border-4 border-cream/20 bg-navy-light p-2 shadow-2xl shadow-coral/10">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-navy-light rounded-b-2xl z-10" />

        {/* Screen */}
        <div className="relative rounded-[2rem] overflow-hidden bg-navy aspect-[9/19.5]">
          {screenshot ? (
            <Image
              src={screenshot}
              alt="Bloxify gameplay screenshot"
              fill
              className="object-cover"
            />
          ) : (
            /* Placeholder screen content */
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-b from-navy-light to-navy">
              <Image
                src="/images/icon.png"
                alt="Bloxify"
                width={80}
                height={80}
                className="rounded-2xl"
              />
              <p className="text-cream/50 text-xs font-medium">
                Gameplay Preview
              </p>
              {/* Mini block grid */}
              <div className="grid grid-cols-4 gap-1 mt-2">
                {[
                  "red", "blue", "orange", "red",
                  "orange", "red", "blue", "orange",
                  "blue", "orange", "red", "blue",
                ].map((color, i) => (
                  <div
                    key={i}
                    className="w-5 h-5 rounded-sm"
                    style={{
                      backgroundColor:
                        color === "red"
                          ? "#E24B4A"
                          : color === "orange"
                            ? "#EF9F27"
                            : "#378ADD",
                      opacity: 0.7,
                    }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
