export interface Track {
  title: string;
  description: string;
  spotifyUrl: string;
}

export interface Artist {
  name: string;
  slug: string;
  photo: string;
  bio: string;
  tracks: Track[];
}

export const featuredArtist: Artist = {
  name: "Dubsteck",
  slug: "dubsteck",
  photo: "/images/dubsteck.png",
  bio: "Electronic producer crafting the signature Bloxify sound — ambient puzzle vibes meets high-energy beats.",
  tracks: [
    {
      title: "Good Vibrations",
      description: "Ambient puzzle soundtrack for focused play",
      spotifyUrl:
        "https://open.spotify.com/track/3C4cOyc2ZCyhhKqoTZBp9B?si=c9db797d67b64191",
    },
    {
      title: "My Dear",
      description: "High-energy beats for competitive sessions",
      spotifyUrl:
        "https://open.spotify.com/track/10lteau9b0rt14OXHI7Pm2?si=4c248d69abee41b7",
    },
  ],
};

export type ArtistImageVariation = "artist-tracks" | "single-track" | "spotlight";
export type ImageFormat = "story" | "square";
