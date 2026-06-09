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
