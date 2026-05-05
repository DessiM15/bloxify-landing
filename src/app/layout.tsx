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
    "A premium mobile block puzzle game with adventure mode, daily challenges, and a handcrafted soundtrack. Launching May 5, 2026 on Google Play.",
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
    images: [
      {
        url: "/images/icon.png",
        width: 512,
        height: 512,
        alt: "Bloxify App Icon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bloxify — Block Puzzle, Reimagined",
    description:
      "A premium mobile block puzzle game. Launching May 5, 2026 on Google Play.",
    images: ["/images/icon.png"],
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
