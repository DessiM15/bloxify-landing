export interface Realm {
  name: string;
  tagline: string;
  story: string;
  image: string;
  number: number;
  gradient: string;
}

export const realms: Realm[] = [
  {
    name: "The Emerald Forest",
    tagline: "A lush canopy of green hides the first shard.",
    story: "Deep within the emerald canopy, the first piece of Blox pulses with life.",
    image: "/images/realms/realm1.png",
    number: 1,
    gradient: "from-green-950 via-emerald-900 to-green-950",
  },
  {
    name: "The Shifting Sands",
    tagline: "Ancient dunes shift to reveal buried secrets.",
    story: "Beneath the endless dunes, a shard glints in the scorching heat.",
    image: "/images/realms/realm2.png",
    number: 2,
    gradient: "from-amber-950 via-yellow-900 to-orange-950",
  },
  {
    name: "The Abyssal Ocean",
    tagline: "Sunken ruins guard a piece lost to the deep.",
    story: "In the crushing depths, bioluminescent light guides the way to the third shard.",
    image: "/images/realms/realm3.png",
    number: 3,
    gradient: "from-blue-950 via-cyan-900 to-blue-950",
  },
  {
    name: "The Molten Caldera",
    tagline: "Rivers of magma flow around the fourth fragment.",
    story: "Lava cascades past obsidian walls. The fourth piece burns, waiting to be claimed.",
    image: "/images/realms/realm4.png",
    number: 4,
    gradient: "from-red-950 via-orange-900 to-red-950",
  },
  {
    name: "The Cosmic Drift",
    tagline: "Stars and nebulae swirl around a drifting shard.",
    story: "Among the stars, the fifth shard orbits a dying sun — drifting, waiting.",
    image: "/images/realms/realm5.png",
    number: 5,
    gradient: "from-purple-950 via-indigo-900 to-violet-950",
  },
  {
    name: "The Void",
    tagline: "Where nothing exists, everything is at stake.",
    story: "The final piece was swallowed by nothingness itself. Enter The Void.",
    image: "/images/realms/realm6.png",
    number: 6,
    gradient: "from-gray-950 via-zinc-900 to-black",
  },
];
