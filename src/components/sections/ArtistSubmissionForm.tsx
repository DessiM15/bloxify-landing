"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What genres are you looking for?",
    answer:
      "We're open to all genres! Bloxify's worlds span chill ambient to high-energy electronic. If your music could soundtrack a puzzle adventure, we want to hear it.",
  },
  {
    question: "Do I need to be signed to a label?",
    answer:
      "Not at all. We specifically seek independent artists who own their own music. Label-signed artists are welcome too, but you'll need to confirm you have the rights to license your tracks.",
  },
  {
    question: "Will I retain ownership of my music?",
    answer:
      "Yes, always. We negotiate non-exclusive licensing agreements. You keep full ownership of your music and can continue to distribute it however you like.",
  },
  {
    question: "How long until I hear back?",
    answer:
      "We review every submission and typically respond within 1–2 weeks. If your music is a good fit, we'll reach out to discuss next steps and terms.",
  },
  {
    question: "Can I submit multiple tracks?",
    answer:
      "Absolutely. Include a link to your portfolio, playlist, or album — we'll listen to everything and let you know which tracks could work for Bloxify.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-cream/10 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left cursor-pointer group"
      >
        <span className="text-cream font-semibold text-sm sm:text-base pr-4 group-hover:text-coral transition-colors">
          {question}
        </span>
        <svg
          className={`w-5 h-5 text-coral flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-60 pb-4" : "max-h-0"}`}
      >
        <p className="text-cream-dim text-sm leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function ArtistSubmissionForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [genre, setGenre] = useState("");
  const [musicLink, setMusicLink] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !musicLink.trim()) return;

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/artist-submission", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          genre: genre.trim() || undefined,
          musicLink: musicLink.trim(),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong");
        return;
      }

      setStatus("success");
      setName("");
      setEmail("");
      setGenre("");
      setMusicLink("");
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  };

  return (
    <div>
      {/* Form */}
      <div className="glass rounded-2xl p-6 sm:p-8 mb-8">
        <h3 className="text-2xl font-bold text-cream mb-2">Submit Your Music</h3>
        <p className="text-cream-dim text-sm mb-6">
          Share a link to your music and we&apos;ll take a listen.
        </p>

        {status === "success" ? (
          <div className="text-center py-6">
            <p className="text-coral font-semibold text-lg mb-2">
              Thanks for your submission!
            </p>
            <p className="text-cream-dim text-sm">
              We&apos;ll listen to your music and reach out to discuss next steps.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="artist-name" className="text-cream text-sm font-medium mb-1 block">
                Name <span className="text-coral">*</span>
              </label>
              <input
                id="artist-name"
                type="text"
                placeholder="Your name or artist name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                disabled={status === "loading"}
                className="w-full rounded-lg bg-navy-light border border-cream/10 px-4 py-3 text-base text-cream placeholder:text-cream/40 focus:outline-none focus:border-coral/50 transition-colors disabled:opacity-50"
              />
            </div>

            <div>
              <label htmlFor="artist-email" className="text-cream text-sm font-medium mb-1 block">
                Email <span className="text-coral">*</span>
              </label>
              <input
                id="artist-email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={status === "loading"}
                className="w-full rounded-lg bg-navy-light border border-cream/10 px-4 py-3 text-base text-cream placeholder:text-cream/40 focus:outline-none focus:border-coral/50 transition-colors disabled:opacity-50"
              />
            </div>

            <div>
              <label htmlFor="artist-genre" className="text-cream text-sm font-medium mb-1 block">
                Genre <span className="text-cream/40">(optional)</span>
              </label>
              <input
                id="artist-genre"
                type="text"
                placeholder="e.g. Lo-fi, Electronic, Ambient"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                disabled={status === "loading"}
                className="w-full rounded-lg bg-navy-light border border-cream/10 px-4 py-3 text-base text-cream placeholder:text-cream/40 focus:outline-none focus:border-coral/50 transition-colors disabled:opacity-50"
              />
            </div>

            <div>
              <label htmlFor="artist-music" className="text-cream text-sm font-medium mb-1 block">
                Link to Music <span className="text-coral">*</span>
              </label>
              <input
                id="artist-music"
                type="url"
                placeholder="Spotify, SoundCloud, YouTube, etc."
                value={musicLink}
                onChange={(e) => setMusicLink(e.target.value)}
                required
                disabled={status === "loading"}
                className="w-full rounded-lg bg-navy-light border border-cream/10 px-4 py-3 text-base text-cream placeholder:text-cream/40 focus:outline-none focus:border-coral/50 transition-colors disabled:opacity-50"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full rounded-lg bg-coral px-6 py-3 text-base font-semibold text-navy whitespace-nowrap transition-colors hover:bg-coral-dark cursor-pointer disabled:opacity-50"
            >
              {status === "loading" ? "Submitting..." : "Submit"}
            </button>

            {status === "error" && (
              <p className="text-red-400 text-xs text-center">{errorMsg}</p>
            )}
          </form>
        )}

        <p className="text-cream/40 text-xs mt-4 text-center">
          Or email us directly at{" "}
          <a
            href="mailto:support@bloxify.app?subject=Artist%20Music%20Submission"
            className="text-coral hover:underline"
          >
            support@bloxify.app
          </a>
        </p>
      </div>

      {/* FAQ */}
      <div className="glass rounded-2xl p-6 sm:p-8">
        <h3 className="text-xl font-bold text-cream mb-4">Frequently Asked Questions</h3>
        <div>
          {faqs.map((faq) => (
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
}
