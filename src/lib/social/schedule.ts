import type { ScheduledPost } from "./types";

const ALL_PLATFORMS = ["discord", "facebook", "instagram", "tiktok"] as const;
const VISUAL_PLATFORMS = ["discord", "facebook", "instagram"] as const;

export const schedule: ScheduledPost[] = [
  // ── May 4: 30 days out ──
  {
    id: "countdown-30d",
    scheduledAt: "2026-05-04T17:00:00Z",
    type: "countdown",
    platforms: [...ALL_PLATFORMS],
    caption: {
      discord: "**30 days until Bloxify!** The countdown is ON. Are you ready to stack, match, and conquer? 🧱",
      facebook: "30 days until Bloxify launches! The countdown is officially ON. Get ready to stack, match, and conquer. Pre-register now at bloxify.app",
      instagram: "30 days until Bloxify launches! The countdown is officially ON. Get ready to stack, match, and conquer.\n\nLink in bio to join the waitlist.",
      tiktok: "30 days until Bloxify! The countdown is ON 🧱",
    },
    image: { source: "countdown-api", format: "square" },
    hashtags: ["Bloxify", "MobileGaming", "PuzzleGame", "GameLaunch", "CountdownBegins"],
    enabled: true,
  },

  // ── May 7: Realm 1 ──
  {
    id: "realm-1",
    scheduledAt: "2026-05-07T17:00:00Z",
    type: "realm-reveal",
    platforms: [...VISUAL_PLATFORMS],
    caption: {
      discord: "**Realm Reveal: The Emerald Forest** 🌿\nDeep within the emerald canopy, the first piece of Blox pulses with life. Can you find it?",
      facebook: "REALM REVEAL: The Emerald Forest 🌿\n\nDeep within the emerald canopy, the first piece of Blox pulses with life. Adventure Mode takes you through 6 handcrafted realms — this is where it all begins.",
      instagram: "REALM REVEAL: The Emerald Forest 🌿\n\nDeep within the emerald canopy, the first piece of Blox pulses with life. Adventure Mode takes you through 6 handcrafted realms — this is where it all begins.",
    },
    image: { source: "realm-api", realm: 1, format: "square" },
    hashtags: ["Bloxify", "RealmReveal", "EmeraldForest", "AdventureMode", "MobileGaming"],
    enabled: true,
  },

  // ── May 11: Countdown + Realm 2 ──
  {
    id: "countdown-24d",
    scheduledAt: "2026-05-11T15:00:00Z",
    type: "countdown",
    platforms: [...ALL_PLATFORMS],
    caption: {
      discord: "**24 days to go!** The blocks are falling into place. 🧱",
      facebook: "24 days until Bloxify! The blocks are falling into place. Have you joined the waitlist yet? bloxify.app",
      instagram: "24 days until Bloxify! The blocks are falling into place.\n\nLink in bio to join the waitlist.",
      tiktok: "24 days until Bloxify! 🧱",
    },
    image: { source: "countdown-api", format: "square" },
    hashtags: ["Bloxify", "Countdown", "MobileGaming"],
    enabled: true,
  },
  {
    id: "realm-2",
    scheduledAt: "2026-05-11T19:00:00Z",
    type: "realm-reveal",
    platforms: [...VISUAL_PLATFORMS],
    caption: {
      discord: "**Realm Reveal: The Shifting Sands** 🏜️\nAncient dunes shift to reveal buried secrets. Beneath the endless sands, a shard glints in the scorching heat.",
      facebook: "REALM REVEAL: The Shifting Sands 🏜️\n\nAncient dunes shift to reveal buried secrets. Beneath the endless sands, a shard glints in the scorching heat.",
      instagram: "REALM REVEAL: The Shifting Sands 🏜️\n\nAncient dunes shift to reveal buried secrets. Beneath the endless sands, a shard glints in the scorching heat.",
    },
    image: { source: "realm-api", realm: 2, format: "square" },
    hashtags: ["Bloxify", "RealmReveal", "ShiftingSands", "AdventureMode"],
    enabled: true,
  },

  // ── May 14: Artist Spotlight ──
  {
    id: "artist-spotlight",
    scheduledAt: "2026-05-14T17:00:00Z",
    type: "artist",
    platforms: [...ALL_PLATFORMS],
    caption: {
      discord: "**Artist Spotlight: Dubsteck** 🎧\nMeet the producer behind the Bloxify soundtrack — ambient puzzle vibes meets high-energy beats. Listen on Spotify!",
      facebook: "ARTIST SPOTLIGHT: Dubsteck 🎧\n\nMeet the electronic producer crafting the signature Bloxify sound — ambient puzzle vibes meets high-energy beats. Listen to Good Vibrations and My Dear on Spotify now.\n\nbloxify.app/artists",
      instagram: "ARTIST SPOTLIGHT: Dubsteck 🎧\n\nMeet the electronic producer crafting the signature Bloxify sound — ambient puzzle vibes meets high-energy beats.\n\nListen to Good Vibrations and My Dear on Spotify now. Link in bio.",
      tiktok: "Meet Dubsteck — the producer behind the Bloxify soundtrack 🎧🧱",
    },
    image: { source: "artist-api", variation: "spotlight", format: "square" },
    hashtags: ["Bloxify", "Dubsteck", "GameSoundtrack", "IndieMusic", "MobileGaming"],
    enabled: true,
  },

  // ── May 15: Realm 3 ──
  {
    id: "realm-3",
    scheduledAt: "2026-05-15T17:00:00Z",
    type: "realm-reveal",
    platforms: [...VISUAL_PLATFORMS],
    caption: {
      discord: "**Realm Reveal: The Abyssal Ocean** 🌊\nSunken ruins guard a piece lost to the deep. Bioluminescent light guides the way.",
      facebook: "REALM REVEAL: The Abyssal Ocean 🌊\n\nSunken ruins guard a piece lost to the deep. In the crushing depths, bioluminescent light guides the way to the third shard.",
      instagram: "REALM REVEAL: The Abyssal Ocean 🌊\n\nSunken ruins guard a piece lost to the deep. In the crushing depths, bioluminescent light guides the way to the third shard.",
    },
    image: { source: "realm-api", realm: 3, format: "square" },
    hashtags: ["Bloxify", "RealmReveal", "AbyssalOcean", "AdventureMode"],
    enabled: true,
  },

  // ── May 18: Countdown ──
  {
    id: "countdown-17d",
    scheduledAt: "2026-05-18T17:00:00Z",
    type: "countdown",
    platforms: [...ALL_PLATFORMS],
    caption: {
      discord: "**17 days until Bloxify!** Getting closer every day. 🧱",
      facebook: "17 days until Bloxify! We're getting closer every day. Join the waitlist at bloxify.app",
      instagram: "17 days until Bloxify! We're getting closer every day.\n\nLink in bio to join the waitlist.",
      tiktok: "17 days until Bloxify! Getting closer 🧱",
    },
    image: { source: "countdown-api", format: "square" },
    hashtags: ["Bloxify", "Countdown", "MobileGaming"],
    enabled: true,
  },

  // ── May 19: Realm 4 ──
  {
    id: "realm-4",
    scheduledAt: "2026-05-19T17:00:00Z",
    type: "realm-reveal",
    platforms: [...VISUAL_PLATFORMS],
    caption: {
      discord: "**Realm Reveal: The Molten Caldera** 🌋\nRivers of magma flow around the fourth fragment. Lava cascades past obsidian walls.",
      facebook: "REALM REVEAL: The Molten Caldera 🌋\n\nRivers of magma flow around the fourth fragment. Lava cascades past obsidian walls. The fourth piece burns, waiting to be claimed.",
      instagram: "REALM REVEAL: The Molten Caldera 🌋\n\nRivers of magma flow around the fourth fragment. Lava cascades past obsidian walls. The fourth piece burns, waiting to be claimed.",
    },
    image: { source: "realm-api", realm: 4, format: "square" },
    hashtags: ["Bloxify", "RealmReveal", "MoltenCaldera", "AdventureMode"],
    enabled: true,
  },

  // ── May 21: Track - Good Vibrations ──
  {
    id: "track-good-vibes",
    scheduledAt: "2026-05-21T17:00:00Z",
    type: "artist-track",
    platforms: [...ALL_PLATFORMS],
    caption: {
      discord: "**Now Playing: Good Vibrations** 🎵\nAmbient puzzle soundtrack for focused play — by Dubsteck. Listen on Spotify!",
      facebook: "NOW PLAYING: Good Vibrations 🎵\n\nAmbient puzzle soundtrack for focused play — by Dubsteck, exclusively in Bloxify.\n\nListen on Spotify: open.spotify.com/track/3C4cOyc2ZCyhhKqoTZBp9B",
      instagram: "NOW PLAYING: Good Vibrations 🎵\n\nAmbient puzzle soundtrack for focused play — by Dubsteck, exclusively in Bloxify.\n\nLink in bio to listen on Spotify.",
      tiktok: "Now Playing in Bloxify: Good Vibrations by Dubsteck 🎵🧱",
    },
    image: { source: "artist-api", variation: "single-track", format: "square", track: 0 },
    hashtags: ["Bloxify", "Dubsteck", "GoodVibrations", "GameSoundtrack", "NowPlaying"],
    enabled: true,
  },

  // ── May 23: Realm 5 ──
  {
    id: "realm-5",
    scheduledAt: "2026-05-23T17:00:00Z",
    type: "realm-reveal",
    platforms: [...VISUAL_PLATFORMS],
    caption: {
      discord: "**Realm Reveal: The Cosmic Drift** ✨\nStars and nebulae swirl around a drifting shard. Among the stars, the fifth shard orbits a dying sun.",
      facebook: "REALM REVEAL: The Cosmic Drift ✨\n\nStars and nebulae swirl around a drifting shard. Among the stars, the fifth shard orbits a dying sun — drifting, waiting.",
      instagram: "REALM REVEAL: The Cosmic Drift ✨\n\nStars and nebulae swirl around a drifting shard. Among the stars, the fifth shard orbits a dying sun — drifting, waiting.",
    },
    image: { source: "realm-api", realm: 5, format: "square" },
    hashtags: ["Bloxify", "RealmReveal", "CosmicDrift", "AdventureMode"],
    enabled: true,
  },

  // ── May 25: Zen Mode ──
  {
    id: "gamemode-zen",
    scheduledAt: "2026-05-25T17:00:00Z",
    type: "game-mode",
    platforms: [...ALL_PLATFORMS],
    caption: {
      discord: "**Zen Mode** 🧘\nNo timers. No pressure. Just you and the blocks. Zen Mode is the perfect way to unwind — stack at your own pace.",
      facebook: "ZEN MODE 🧘\n\nNo timers. No pressure. Just you and the blocks. Zen Mode is the perfect way to unwind — stack at your own pace with ambient music from Dubsteck.\n\nComing June 4. bloxify.app",
      instagram: "ZEN MODE 🧘\n\nNo timers. No pressure. Just you and the blocks. Zen Mode is the perfect way to unwind — stack at your own pace with ambient music from Dubsteck.\n\nComing June 4. Link in bio.",
      tiktok: "Zen Mode in Bloxify — no timers, no pressure, just vibes 🧘🧱",
    },
    image: { source: "static", path: "/images/screenshots/zen-mode.jpg" },
    hashtags: ["Bloxify", "ZenMode", "RelaxingGames", "MobileGaming", "PuzzleGame"],
    enabled: true,
  },

  // ── May 27: Realm 6 ──
  {
    id: "realm-6",
    scheduledAt: "2026-05-27T17:00:00Z",
    type: "realm-reveal",
    platforms: [...VISUAL_PLATFORMS],
    caption: {
      discord: "**Realm Reveal: The Void** 🕳️\nWhere nothing exists, everything is at stake. The final piece was swallowed by nothingness itself.",
      facebook: "REALM REVEAL: The Void 🕳️\n\nWhere nothing exists, everything is at stake. The final piece was swallowed by nothingness itself. Enter The Void — the ultimate test in Adventure Mode.",
      instagram: "REALM REVEAL: The Void 🕳️\n\nWhere nothing exists, everything is at stake. The final piece was swallowed by nothingness itself. Enter The Void — the ultimate test in Adventure Mode.",
    },
    image: { source: "realm-api", realm: 6, format: "square" },
    hashtags: ["Bloxify", "RealmReveal", "TheVoid", "AdventureMode", "FinalRealm"],
    enabled: true,
  },

  // ── May 28: 7 days ──
  {
    id: "countdown-7d",
    scheduledAt: "2026-05-28T17:00:00Z",
    type: "countdown",
    platforms: [...ALL_PLATFORMS],
    caption: {
      discord: "**1 WEEK TO GO!** 7 days until Bloxify launches. The final countdown has begun. 🧱🔥",
      facebook: "1 WEEK TO GO! 🔥\n\n7 days until Bloxify launches. The final countdown has begun. Join the waitlist and be the first to play. bloxify.app",
      instagram: "1 WEEK TO GO! 🔥\n\n7 days until Bloxify launches. The final countdown has begun. Join the waitlist and be the first to play.\n\nLink in bio.",
      tiktok: "1 WEEK until Bloxify! 7 days to go 🔥🧱",
    },
    image: { source: "countdown-api", format: "square" },
    hashtags: ["Bloxify", "OneWeek", "Countdown", "MobileGaming", "GameLaunch"],
    enabled: true,
  },

  // ── May 29: Track - My Dear ──
  {
    id: "track-my-dear",
    scheduledAt: "2026-05-29T17:00:00Z",
    type: "artist-track",
    platforms: [...ALL_PLATFORMS],
    caption: {
      discord: "**Now Playing: My Dear** 🎵\nHigh-energy beats for competitive sessions — by Dubsteck. Perfect for Blitz Mode. 🔥",
      facebook: "NOW PLAYING: My Dear 🎵\n\nHigh-energy beats for competitive sessions — by Dubsteck. The perfect soundtrack for Blitz Mode.\n\nListen on Spotify: open.spotify.com/track/10lteau9b0rt14OXHI7Pm2",
      instagram: "NOW PLAYING: My Dear 🎵\n\nHigh-energy beats for competitive sessions — by Dubsteck. The perfect soundtrack for Blitz Mode.\n\nLink in bio to listen on Spotify.",
      tiktok: "Now Playing in Bloxify: My Dear by Dubsteck 🎵🔥",
    },
    image: { source: "artist-api", variation: "single-track", format: "square", track: 1 },
    hashtags: ["Bloxify", "Dubsteck", "MyDear", "GameSoundtrack", "NowPlaying"],
    enabled: true,
  },

  // ── May 30: Blitz Mode ──
  {
    id: "gamemode-blitz",
    scheduledAt: "2026-05-30T17:00:00Z",
    type: "game-mode",
    platforms: [...ALL_PLATFORMS],
    caption: {
      discord: "**Blitz Mode** ⚡\nRace against the clock! Clear blocks before time runs out. Think fast, stack faster.",
      facebook: "BLITZ MODE ⚡\n\nRace against the clock! Clear blocks before time runs out. Think fast, stack faster. How high can you score?\n\nComing June 4. bloxify.app",
      instagram: "BLITZ MODE ⚡\n\nRace against the clock! Clear blocks before time runs out. Think fast, stack faster. How high can you score?\n\nComing June 4. Link in bio.",
      tiktok: "Blitz Mode in Bloxify — race against the clock ⚡🧱",
    },
    image: { source: "static", path: "/images/screenshots/blitz-mode.jpg" },
    hashtags: ["Bloxify", "BlitzMode", "CompetitiveGaming", "MobileGaming", "PuzzleGame"],
    enabled: true,
  },

  // ── May 31: Season One Tease ──
  {
    id: "season-one",
    scheduledAt: "2026-05-31T17:00:00Z",
    type: "season",
    platforms: [...ALL_PLATFORMS],
    caption: {
      discord: "**Season One: First Bloom** 🌸\nThe first season of Bloxify is coming with launch. New challenges, exclusive rewards, and limited-time events. Ready to bloom?",
      facebook: "SEASON ONE: First Bloom 🌸\n\nThe first season of Bloxify arrives at launch. New challenges, exclusive rewards, and limited-time events await. Are you ready to bloom?\n\nJune 4. bloxify.app",
      instagram: "SEASON ONE: First Bloom 🌸\n\nThe first season of Bloxify arrives at launch. New challenges, exclusive rewards, and limited-time events await. Are you ready to bloom?\n\nJune 4. Link in bio.",
      tiktok: "Season One: First Bloom — coming to Bloxify on launch day 🌸🧱",
    },
    image: { source: "static", path: "/images/screenshots/season-one.jpg" },
    hashtags: ["Bloxify", "SeasonOne", "FirstBloom", "MobileGaming", "NewSeason"],
    enabled: true,
  },

  // ── Jun 1: 3 days ──
  {
    id: "countdown-3d",
    scheduledAt: "2026-06-01T17:00:00Z",
    type: "countdown",
    platforms: [...ALL_PLATFORMS],
    caption: {
      discord: "**3 DAYS!** Bloxify launches in 3 days. We can almost feel it. 🧱🚀",
      facebook: "3 DAYS until Bloxify! 🚀\n\nWe're almost there. The blocks are about to drop. Are you ready?\n\nbloxify.app",
      instagram: "3 DAYS until Bloxify! 🚀\n\nWe're almost there. The blocks are about to drop. Are you ready?\n\nLink in bio.",
      tiktok: "3 DAYS until Bloxify! Almost there 🚀🧱",
    },
    image: { source: "countdown-api", format: "square" },
    hashtags: ["Bloxify", "3Days", "Countdown", "AlmostHere", "GameLaunch"],
    enabled: true,
  },

  // ── Jun 2: Adventure Mode ──
  {
    id: "gamemode-adventure",
    scheduledAt: "2026-06-02T17:00:00Z",
    type: "game-mode",
    platforms: [...ALL_PLATFORMS],
    caption: {
      discord: "**Adventure Mode** 🗺️\nJourney through 6 realms. 350+ levels. 72 boss puzzles. The ultimate puzzle RPG experience awaits.",
      facebook: "ADVENTURE MODE 🗺️\n\nJourney through 6 handcrafted realms. 350+ levels. 72 boss puzzles. 50+ unlockables. The ultimate puzzle RPG experience launches in 2 days.\n\nbloxify.app",
      instagram: "ADVENTURE MODE 🗺️\n\nJourney through 6 handcrafted realms. 350+ levels. 72 boss puzzles. 50+ unlockables. The ultimate puzzle RPG experience launches in 2 days.\n\nLink in bio.",
      tiktok: "Adventure Mode: 6 realms, 350+ levels, 72 boss puzzles 🗺️🧱",
    },
    image: { source: "static", path: "/images/screenshots/adventure-mode.jpg" },
    hashtags: ["Bloxify", "AdventureMode", "PuzzleRPG", "MobileGaming", "BossPuzzles"],
    enabled: true,
  },

  // ── Jun 3: Tomorrow ──
  {
    id: "countdown-1d",
    scheduledAt: "2026-06-03T17:00:00Z",
    type: "countdown",
    platforms: [...ALL_PLATFORMS],
    caption: {
      discord: "**TOMORROW!** Bloxify launches TOMORROW at noon CDT. Set your alarms. This is it! 🧱🎉",
      facebook: "TOMORROW! 🎉\n\nBloxify launches TOMORROW, June 4th at noon CDT. Set your alarms — you don't want to miss this.\n\nbloxify.app",
      instagram: "TOMORROW! 🎉\n\nBloxify launches TOMORROW, June 4th at noon CDT. Set your alarms — you don't want to miss this.\n\nLink in bio.",
      tiktok: "TOMORROW! Bloxify launches TOMORROW! 🎉🧱",
    },
    image: { source: "countdown-api", format: "square" },
    hashtags: ["Bloxify", "Tomorrow", "LaunchDay", "MobileGaming", "GameLaunch"],
    enabled: true,
  },

  // ── Jun 4: LAUNCH DAY ──
  {
    id: "launch-day",
    scheduledAt: "2026-06-04T17:00:00Z",
    type: "launch",
    platforms: [...ALL_PLATFORMS],
    caption: {
      discord: "**WE'RE LIVE!** 🚀🎉\nBloxify is officially available NOW! Download it, play it, love it. The blocks have dropped. Let's GO!\n\n👉 https://bloxify.app",
      facebook: "WE'RE LIVE! 🚀🎉\n\nBloxify is officially available NOW! Download it from the Play Store and be one of the first to experience Zen Mode, Blitz Mode, and Adventure Mode.\n\nThe blocks have dropped. Let's GO!\n\n👉 bloxify.app",
      instagram: "WE'RE LIVE! 🚀🎉\n\nBloxify is officially available NOW! Download it from the Play Store and be one of the first to experience Zen Mode, Blitz Mode, and Adventure Mode.\n\nThe blocks have dropped. Let's GO!\n\nLink in bio to download.",
      tiktok: "WE'RE LIVE! Bloxify is officially out NOW! Download and play 🚀🧱🎉",
    },
    image: { source: "countdown-api", format: "square" },
    hashtags: ["Bloxify", "LaunchDay", "OutNow", "MobileGaming", "PuzzleGame", "DownloadNow"],
    enabled: true,
  },
];
