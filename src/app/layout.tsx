import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bloxify.app"),
  title: "Bloxify — Block Puzzle, Reimagined",
  description:
    "A premium mobile block puzzle game with adventure mode, daily challenges, and a handcrafted soundtrack. Free on Google Play.",
  keywords: [
    "block puzzle",
    "puzzle game",
    "mobile game",
    "android game",
    "bloxify",
  ],
  openGraph: {
    title: "Bloxify — Block Puzzle, Reimagined",
    description:
      "A premium mobile block puzzle game with adventure mode, daily challenges, and a handcrafted soundtrack.",
    url: "https://bloxify.app",
    siteName: "Bloxify",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bloxify — Block Puzzle, Reimagined",
    description:
      "A premium mobile block puzzle game. Free on Google Play.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://bloxify.app/#website",
      url: "https://bloxify.app",
      name: "Bloxify",
      description:
        "A premium mobile block puzzle game with adventure mode, daily challenges, and a handcrafted soundtrack.",
      inLanguage: "en-US",
      publisher: { "@id": "https://bloxify.app/#organization" },
      creator: { "@id": "https://smartscaleagent.com/#organization" },
    },
    {
      "@type": "Organization",
      "@id": "https://bloxify.app/#organization",
      name: "Steady Games Studio, LLC",
      alternateName: "Steady Games Studio",
      url: "https://bloxify.app",
      description:
        "An independent game development studio focused on crafting polished mobile puzzle experiences.",
      email: "support@bloxify.app",
      logo: {
        "@type": "ImageObject",
        url: "https://bloxify.app/images/bloxify-wordmark.png",
      },
      sameAs: [
        "https://www.instagram.com/bloxify.app",
        "https://www.tiktok.com/@bloxify.app",
        "https://www.facebook.com/share/1E2u9jExgV/?mibextid=wwXIfr",
        "https://discord.gg/wJM2JcgC",
      ],
    },
    {
      "@type": "Organization",
      "@id": "https://smartscaleagent.com/#organization",
      name: "Smart Scale, LLC",
      alternateName: "Smart Scale",
      url: "https://smartscaleagent.com/",
      description:
        "Software development agency building custom web applications, mobile apps, AI systems, and enterprise platforms.",
      sameAs: [
        "https://smartscaleagent.com/",
        "https://share.google/zOjECRk8TweTpgnkT",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
