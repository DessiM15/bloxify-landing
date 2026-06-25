import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Bloxify",
  description: "Bloxify privacy policy. Learn how we collect, use, and protect your data.",
};

export default function PrivacyPolicy() {
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
          Privacy Policy
        </h1>
        <p className="text-cream-dim text-sm mb-10">Last updated: 2026-06-25</p>

        <div className="space-y-8 text-cream-dim leading-relaxed">
          <p>
            This Privacy Policy describes how Steady Games Studio, LLC (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;),
            the developer of Bloxify, collects, uses, and shares your information when you use our mobile application
            (&ldquo;Bloxify&rdquo; or &ldquo;the App&rdquo;). By using the App, you agree to this Privacy Policy.
          </p>

          {/* Section 1 */}
          <section>
            <h2 className="text-xl font-bold text-cream mb-4">1. Information We Collect</h2>

            <h3 className="text-base font-semibold text-cream/90 mb-2">Information you provide directly</h3>
            <ul className="list-disc pl-6 space-y-1.5 mb-5">
              <li><strong className="text-cream">Display name</strong> — chosen by you and shown on leaderboards and to friends.</li>
              <li><strong className="text-cream">Email address</strong> — only if you choose to link an email account or sign in with Google. Used solely for account recovery and authentication.</li>
              <li><strong className="text-cream">Referral codes</strong> — if you enter or share an invite code.</li>
            </ul>

            <h3 className="text-base font-semibold text-cream/90 mb-2">Information collected automatically</h3>
            <ul className="list-disc pl-6 space-y-1.5 mb-5">
              <li><strong className="text-cream">Game progress data</strong> — coins, streak count, scores, levels completed, achievements, daily login history, season pass progress, themes owned.</li>
              <li><strong className="text-cream">Device identifiers</strong> — Google Advertising ID for delivering rewarded ads. You can reset or opt out of this in your device settings.</li>
              <li><strong className="text-cream">Push notification token</strong> — only if you grant permission for streak and challenge reminder notifications. You can revoke this at any time in your device settings.</li>
              <li><strong className="text-cream">Anonymous usage analytics</strong> — screen views, taps, in-app events, and crash diagnostics, used to improve the App.</li>
            </ul>

            <h3 className="text-base font-semibold text-cream/90 mb-2">Information we do NOT collect</h3>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>We do not collect your real name, phone number, address, or precise location.</li>
              <li>We do not access your contacts, photos, or device storage outside of the App&apos;s own data.</li>
              <li>We do not sell your personal information to anyone, ever.</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl font-bold text-cream mb-4">2. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>To run the game (save your progress, sync between devices, calculate leaderboards).</li>
              <li>To deliver rewarded ads through Google AdMob (only when you opt in by tapping a &ldquo;watch ad&rdquo; button).</li>
              <li>To process in-app purchases (Season Pass) through RevenueCat and Google Play Billing.</li>
              <li>To send optional push notifications (streak reminders, daily challenges, re-engagement) — only with your permission.</li>
              <li>To detect crashes, diagnose performance issues, and improve gameplay.</li>
              <li>To prevent fraud and abuse (e.g., leaderboard manipulation).</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl font-bold text-cream mb-4">3. Third-Party Services</h2>
            <p className="mb-3">We use trusted third-party providers to operate the App. Each service has its own privacy policy.</p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li><strong className="text-cream">Supabase</strong> — secure backend hosting for your account and game data. <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" className="text-coral hover:underline">supabase.com/privacy</a></li>
              <li><strong className="text-cream">Google AdMob</strong> — rewarded video ad delivery. <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-coral hover:underline">policies.google.com/privacy</a></li>
              <li><strong className="text-cream">RevenueCat</strong> — subscription management for the Season Pass. <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer" className="text-coral hover:underline">revenuecat.com/privacy</a></li>
              <li><strong className="text-cream">PostHog</strong> — anonymous product analytics. <a href="https://posthog.com/privacy" target="_blank" rel="noopener noreferrer" className="text-coral hover:underline">posthog.com/privacy</a></li>
              <li><strong className="text-cream">Google Play Billing</strong> — in-app purchase processing. Governed by Google Play&apos;s policies.</li>
              <li><strong className="text-cream">Expo Notifications</strong> — delivery of push notifications. Tokens are managed via Apple Push Notification Service and Google Firebase Cloud Messaging.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl font-bold text-cream mb-4">4. Data Sharing</h2>
            <p className="mb-3">
              We do not sell or rent your personal information. We share data only with the
              third-party processors listed above, and only as necessary to operate the App.
            </p>
            <p>
              Your <strong className="text-cream">display name</strong>, <strong className="text-cream">game scores</strong>, and{" "}
              <strong className="text-cream">cosmetic equipment</strong> are visible to other players on the
              public leaderboard. Your email address, account ID, and personal account
              details are never shown to other players.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-xl font-bold text-cream mb-4">5. Children&apos;s Privacy</h2>
            <p>
              Bloxify is rated for ages 13 and up and is not directed at children under 13.
              We do not knowingly collect personal information from children under 13. If
              you believe a child under 13 has provided us information, please contact us
              so we can remove it.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-xl font-bold text-cream mb-4">6. Your Rights</h2>
            <p className="mb-3">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-1.5 mb-4">
              <li><strong className="text-cream">Access</strong> the personal data we hold about you.</li>
              <li><strong className="text-cream">Correct</strong> inaccurate data — change your display name in Settings, or contact us.</li>
              <li><strong className="text-cream">Delete</strong> your account and all associated data — request via the contact below. Account deletion is permanent and removes your data from our backend within 30 days.</li>
              <li><strong className="text-cream">Opt out of analytics</strong> — disable advertising ID tracking via your device&apos;s privacy settings.</li>
              <li><strong className="text-cream">Withdraw consent</strong> for push notifications at any time via your device&apos;s notification settings.</li>
            </ul>
            <p>
              Residents of the EU/UK have additional rights under GDPR; residents of
              California have additional rights under CCPA. Contact us to exercise any of
              these rights.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-xl font-bold text-cream mb-4">7. Data Security</h2>
            <p>
              All data transmitted between the App and our servers is encrypted using
              HTTPS/TLS. Your data is stored on Supabase&apos;s secure infrastructure with
              access controls and at-rest encryption. No transmission over the internet
              can be guaranteed 100% secure, but we work to protect your information using
              industry-standard practices.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-xl font-bold text-cream mb-4">8. Data Retention</h2>
            <p className="mb-3">
              We retain your account data for as long as your account is active. If you
              delete your account, all personal data is removed within 30 days, except
              where retention is required by law (e.g., financial records of in-app
              purchases, retained by Google Play and RevenueCat per their policies).
            </p>
            <p>
              Anonymous analytics events are retained for up to 24 months for
              aggregate trend analysis, then automatically purged.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-xl font-bold text-cream mb-4">9. International Users</h2>
            <p>
              Our servers are operated by Supabase and may be located in the United
              States or other countries. By using the App, you consent to the transfer
              and processing of your information in countries that may have data
              protection laws different from those in your country.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-xl font-bold text-cream mb-4">10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The &ldquo;Last updated&rdquo;
              date at the top of this page reflects when the policy was last changed.
              Material changes will be communicated in-app before they take effect.
            </p>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="text-xl font-bold text-cream mb-4">11. Contact Us</h2>
            <p className="mb-2">If you have questions about this Privacy Policy or your data, contact us at:</p>
            <p>
              <strong className="text-cream">Email:</strong>{" "}
              <a href="mailto:support@bloxify.app" className="text-coral hover:underline">
                support@bloxify.app
              </a>
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
