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
    <div className="bg-gradient-to-r from-coral via-block-orange to-block-red py-4 overflow-hidden">
      <div
        className="flex whitespace-nowrap"
        style={{ animation: "marquee 20s linear infinite" }}
      >
        {repeated.map((item, i) => (
          <span key={i} className="flex items-center gap-4 mx-8 text-white font-bold text-lg sm:text-xl tracking-wide">
            <span className="w-2 h-2 rounded-full bg-white/60 flex-shrink-0" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
