import { GlossyBlock, type BlockPalette } from "./NeonBlocks";

const ITEMS: { text: string; palette: BlockPalette }[] = [
  { text: "No Forced Ads", palette: "pink" },
  { text: "Offline Play", palette: "cyan" },
  { text: "We Support Artists", palette: "yellow" },
  { text: "Free on Google Play", palette: "lime" },
  { text: "Six Handcrafted Realms", palette: "orange" },
  { text: "Fair, Unbiased Block Drops", palette: "violet" },
];

function Strip({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {ITEMS.map((item) => (
        <li key={item.text} className="flex items-center gap-3 px-6 sm:px-8">
          <GlossyBlock shape="single" palette={item.palette} cell={14} />
          <span className="font-display whitespace-nowrap text-base tracking-wide text-snow sm:text-lg">{item.text}</span>
        </li>
      ))}
    </ul>
  );
}

/** Neon ticker of Bloxify's promises. The list is rendered twice so the loop is seamless. */
export default function MarqueeBar() {
  return (
    <div
      className="relative overflow-hidden border-y border-white/10 py-3.5"
      style={{
        background:
          "linear-gradient(90deg, rgba(255,63,211,0.16) 0%, rgba(123,63,242,0.18) 50%, rgba(53,232,255,0.16) 100%), rgba(13,10,46,0.9)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06), 0 0 30px rgba(255,63,211,0.12)",
      }}
    >
      <div className="flex w-max" style={{ animation: "marquee 38s linear infinite" }}>
        <Strip />
        <Strip hidden />
      </div>
    </div>
  );
}
