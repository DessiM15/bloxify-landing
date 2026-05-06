import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Delete Your Account — Bloxify",
  description: "How to request deletion of your Bloxify account and associated data.",
};

export default function DeleteAccount() {
  return (
    <div className="min-h-screen bg-navy">
      {/* Header */}
      <header className="border-b border-cream/10 py-4 px-4">
        <div className="max-w-3xl mx-auto flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Image src="/images/icon.png" alt="Bloxify" width={32} height={32} className="rounded-lg" />
            <span className="text-lg font-bold text-cream">Bloxify</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-coral mb-1">
          Delete Your Bloxify Account
        </h1>
        <p className="text-cream-dim text-sm mb-10">Last updated: 2026-05-05</p>

        <div className="space-y-8 text-cream-dim leading-relaxed">
          <p>
            This page explains how to request deletion of your Bloxify account and the data
            associated with it. We respect your right to remove your information from our
            systems and aim to make the process simple.
          </p>

          {/* How to Request */}
          <section>
            <h2 className="text-xl font-bold text-cream mb-4">How to Request Deletion</h2>
            <p className="mb-5">
              Bloxify currently processes account deletions by email request. Follow the four
              steps below.
            </p>

            <div className="space-y-3">
              <div className="bg-cream/5 border border-cream/10 rounded-lg p-5">
                <p className="text-coral font-bold text-base mb-1">Step 1 — Send us an email</p>
                <p>
                  Email{" "}
                  <a href="mailto:support@bloxify.app" className="text-coral hover:underline">
                    support@bloxify.app
                  </a>{" "}
                  from the email address linked to your Bloxify account, OR include your
                  Bloxify display name and invite code in the message body so we can locate
                  your account.
                </p>
              </div>

              <div className="bg-cream/5 border border-cream/10 rounded-lg p-5">
                <p className="text-coral font-bold text-base mb-1">Step 2 — Use this subject line</p>
                <p>
                  <code className="bg-cream/10 px-2 py-0.5 rounded text-cream/90 text-sm">
                    Account Deletion Request — Bloxify
                  </code>
                </p>
              </div>

              <div className="bg-cream/5 border border-cream/10 rounded-lg p-5">
                <p className="text-coral font-bold text-base mb-1">Step 3 — Include this in the body</p>
                <ul className="list-disc pl-6 space-y-1.5">
                  <li>Your display name in Bloxify</li>
                  <li>
                    Your invite code (visible in Settings → About if you&apos;ve ever used the
                    referral system) — optional but speeds up account lookup
                  </li>
                  <li>The email address linked to your account, if any</li>
                  <li>
                    A brief confirmation that you&apos;re requesting account and data deletion
                    (e.g., &ldquo;I confirm I want my Bloxify account and associated data
                    permanently deleted.&rdquo;)
                  </li>
                </ul>
              </div>

              <div className="bg-cream/5 border border-cream/10 rounded-lg p-5">
                <p className="text-coral font-bold text-base mb-1">Step 4 — We process your request</p>
                <p>
                  We confirm receipt within 3 business days. The deletion itself completes
                  within 30 days of confirmation. You&apos;ll receive a final confirmation email
                  when it&apos;s done.
                </p>
              </div>
            </div>
          </section>

          {/* What Gets Deleted */}
          <section>
            <h2 className="text-xl font-bold text-cream mb-4">What Gets Deleted</h2>
            <p className="mb-3">The following data is permanently removed from our active systems:</p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>
                <strong className="text-cream">Account profile</strong> — display name,
                linked email (if any), invite code, account creation date
              </li>
              <li>
                <strong className="text-cream">Game progress</strong> — coins balance,
                streak count, scores, levels completed, achievements, daily login history
              </li>
              <li>
                <strong className="text-cream">Cosmetic ownership</strong> — owned themes,
                season pass progress, equipped cosmetics
              </li>
              <li>
                <strong className="text-cream">Social data</strong> — friend connections,
                referral records, leaderboard placements (your display name is removed from
                past leaderboards)
              </li>
              <li>
                <strong className="text-cream">Device-tied data</strong> — push notification
                token, advertising ID associations
              </li>
              <li>
                <strong className="text-cream">Analytics events</strong> — anonymous in-app
                event records associated with your user ID
              </li>
            </ul>
          </section>

          {/* What Is Retained */}
          <section>
            <h2 className="text-xl font-bold text-cream mb-4">What Is Retained (and Why)</h2>
            <p className="mb-3">
              Some information is retained after account deletion only when required by law
              or for the operation of essential services:
            </p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>
                <strong className="text-cream">Purchase records</strong> — financial records
                of any Season Pass or in-app purchases are retained by Google Play and
                RevenueCat (our subscription processor) per their respective retention
                policies, typically required for tax and accounting purposes. We do not
                store payment details ourselves.
              </li>
              <li>
                <strong className="text-cream">Anonymous aggregate analytics</strong> —
                analytics events that have been aggregated and stripped of all identifiers
                (e.g., &ldquo;X total users opened the app on date Y&rdquo;) are retained
                for trend analysis. These cannot be tied back to your account.
              </li>
              <li>
                <strong className="text-cream">Backup snapshots</strong> — database backups
                may contain your data for up to 30 days after deletion before being
                automatically purged.
              </li>
            </ul>
          </section>

          {/* Retention Period */}
          <section>
            <h2 className="text-xl font-bold text-cream mb-4">Retention Period</h2>
            <p className="mb-3">From the moment we confirm receipt of your deletion request:</p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>
                <strong className="text-cream">Active database deletion:</strong> within 30 days
              </li>
              <li>
                <strong className="text-cream">Backup purge:</strong> within 30 additional days (60 days total)
              </li>
              <li>
                <strong className="text-cream">Aggregate analytics expiry:</strong> up to 24 months (anonymized, non-identifiable)
              </li>
              <li>
                <strong className="text-cream">Financial records:</strong> retained per Google Play and RevenueCat&apos;s policies (typically 7 years for tax compliance)
              </li>
            </ul>
          </section>

          {/* Callout */}
          <div className="bg-coral/10 border-l-4 border-coral rounded-r-lg px-5 py-4">
            <p>
              <strong className="text-cream">Important:</strong> Account deletion is
              permanent. Your progress, coins, owned cosmetics, streak, achievements, and
              friends list cannot be recovered after deletion. If you simply want to take a
              break, no action is needed — your account is preserved indefinitely while
              inactive.
            </p>
          </div>

          {/* Partial Data Deletion */}
          <section>
            <h2 className="text-xl font-bold text-cream mb-4">Partial Data Deletion</h2>
            <p>
              Bloxify currently supports full account deletion only — we do not yet have a
              mechanism to delete specific subsets of data while preserving the rest of your
              account. If you have a specific request (e.g., remove a particular friend
              connection, change your display name), please email{" "}
              <a href="mailto:support@bloxify.app" className="text-coral hover:underline">
                support@bloxify.app
              </a>{" "}
              and we&apos;ll handle it directly.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-xl font-bold text-cream mb-4">Contact Us</h2>
            <p className="mb-2">For account deletion or any privacy-related questions:</p>
            <p className="mb-4">
              <strong className="text-cream">Email:</strong>{" "}
              <a href="mailto:support@bloxify.app" className="text-coral hover:underline">
                support@bloxify.app
              </a>
            </p>
            <p>
              For our complete privacy practices, see our{" "}
              <Link href="/privacy" className="text-coral hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </section>
        </div>

        {/* Back link */}
        <div className="mt-16 pt-8 border-t border-cream/10">
          <Link href="/" className="text-coral hover:underline text-sm">
            &larr; Back to home
          </Link>
        </div>
      </main>
    </div>
  );
}
