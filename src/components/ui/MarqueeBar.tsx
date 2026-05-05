"use client";

const items = [
  "No Forced Ads",
  "Offline Play",
  "We Support Artists",
];

export default function MarqueeBar() {
  // Duplicate items enough times for seamless scroll
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className="bg-gradient-to-r from-coral via-block-orange to-block-red py-3 overflow-hidden">
      <div
        className="flex whitespace-nowrap"
        style={{ animation: "marquee 20s linear infinite" }}
      >
        {repeated.map((item, i) => (
          <span key={i} className="flex items-center gap-3 mx-6 text-white font-semibold text-sm tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-white/60 flex-shrink-0" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
