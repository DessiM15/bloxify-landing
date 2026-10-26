"use client";

import { useState } from "react";

interface WaitlistFormProps {
  variant?: "dark" | "coral" | "glass" | "neon";
  label?: string;
  placeholder?: string;
  buttonText?: string;
  successMessage?: string;
}

export default function WaitlistForm({
  variant = "dark",
  label,
  placeholder = "Enter your email",
  buttonText = "Notify Me",
  successMessage = "You're on the list!",
}: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong");
        return;
      }

      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  };

  const isCoral = variant === "coral";
  const isNeon = variant === "neon";

  const containerClass = isNeon
    ? "glass-neon-soft"
    : isCoral
      ? "bg-white/15 border border-white/20"
      : "glass border border-coral/20";

  const inputClass = isNeon
    ? "bg-white/5 border border-white/15 text-snow placeholder:text-snow/40 focus:border-cyan focus:shadow-[0_0_0_3px_rgba(53,232,255,0.2)]"
    : isCoral
      ? "bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:border-white/40"
      : "bg-navy-light border border-cream/10 text-cream placeholder:text-cream/40 focus:border-coral/50";

  const buttonClass = isNeon
    ? "btn-neon btn-neon--cyan btn-neon--sm !rounded-xl"
    : isCoral
      ? "bg-white text-coral hover:bg-white/90"
      : "bg-coral text-navy hover:bg-coral-dark";

  const labelClass = isNeon ? "text-snow" : isCoral ? "text-white/70" : "text-cream-dim";

  const successClass = isNeon ? "text-lime text-glow-lime" : isCoral ? "text-white" : "text-coral";

  return (
    <div className="w-full">
      {label && (
        <p className={`text-lg sm:text-xl font-bold mb-3 text-center lg:text-left ${labelClass}`}>
          {label}
        </p>
      )}
      <div className={`rounded-2xl p-3 ${containerClass}`}>
        {status === "success" ? (
          <p className={`font-medium text-sm text-center py-1 ${successClass}`}>
            {successMessage}
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              placeholder={placeholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={status === "loading"}
              className={`flex-1 min-w-0 rounded-lg px-4 py-3 text-base focus:outline-none transition-colors disabled:opacity-50 ${inputClass}`}
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className={`${isNeon ? "" : "rounded-lg px-5 py-3 text-base font-semibold transition-colors"} whitespace-nowrap cursor-pointer disabled:opacity-50 ${buttonClass}`}
            >
              {status === "loading" ? "..." : buttonText}
            </button>
          </form>
        )}
        {status === "error" && (
          <p className="text-red-400 text-xs mt-2 text-center">{errorMsg}</p>
        )}
      </div>
    </div>
  );
}
