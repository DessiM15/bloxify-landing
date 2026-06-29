import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — Bloxify",
  description: "Bloxify Terms of Service. The rules for using the Bloxify app, virtual items, and Season Pass.",
};

export default function TermsOfService() {
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
          Terms of Service
        </h1>
        <p className="text-cream-dim text-sm mb-10">Last updated: 2026-06-29</p>

        <div className="space-y-8 text-cream-dim leading-relaxed">
          <p>
            These Terms of Service (&ldquo;Terms&rdquo;) are a legal agreement between you and
            Steady Games Studio, LLC (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), the developer of the
            Bloxify mobile application (&ldquo;Bloxify&rdquo; or &ldquo;the App&rdquo;). By downloading,
            accessing, or using the App, you agree to be bound by these Terms. If you do
            not agree, please do not use the App. These Terms work together with our{" "}
            <Link href="/privacy" className="text-coral hover:underline">Privacy Policy</Link>.
          </p>

          {/* Section 1 */}
          <section>
            <h2 className="text-xl font-bold text-cream mb-4">1. Eligibility</h2>
            <p>
              Bloxify is rated for ages 13 and up. You must be at least 13 years old to
              use the App. If you are under the age of majority in your jurisdiction, you
              must have permission from a parent or legal guardian, who agrees to be bound
              by these Terms on your behalf. By using the App, you represent that you meet
              these requirements.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl font-bold text-cream mb-4">2. Your Account</h2>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>You may play as a guest or link an email or Google account for cross-device sync and account recovery.</li>
              <li>You are responsible for any activity that occurs under your account and for keeping your login credentials secure.</li>
              <li>You agree to provide accurate information and not to impersonate any person or entity.</li>
              <li>You may delete your account at any time; see our <Link href="/privacy" className="text-coral hover:underline">Privacy Policy</Link> for how account and data deletion works.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl font-bold text-cream mb-4">3. Acceptable Use</h2>
            <p className="mb-3">When using Bloxify, you agree that you will NOT:</p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>Cheat, exploit bugs, use automation or modified clients, or otherwise manipulate scores, leaderboards, coins, streaks, or rewards.</li>
              <li>Choose a display name, or submit any content, that is offensive, hateful, harassing, deceptive, infringing, or otherwise objectionable.</li>
              <li>Harass, threaten, or abuse other players.</li>
              <li>Attempt to access another user&apos;s account or data.</li>
              <li>Reverse engineer, decompile, or attempt to extract the source code of the App, except where permitted by law.</li>
              <li>Interfere with, disrupt, or place undue load on our servers or third-party services.</li>
              <li>Use the App for any unlawful purpose or in violation of these Terms or applicable app-store policies.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl font-bold text-cream mb-4">4. Virtual Items and Currency</h2>
            <p className="mb-3">
              Bloxify includes virtual items such as coins, themes, shields, and other
              in-game content (&ldquo;Virtual Items&rdquo;). You should understand that:
            </p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>Virtual Items have <strong className="text-cream">no real-world monetary value</strong>, are not your property, and cannot be redeemed for cash or transferred outside the App.</li>
              <li>We grant you a limited, personal, non-transferable, revocable license to use Virtual Items within the App.</li>
              <li>We may modify, manage, regulate, or remove Virtual Items, and may change their price or availability, at any time.</li>
              <li>Virtual Items are forfeited if your account is terminated or deleted, and are not refundable except as required by law or applicable app-store policy.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-xl font-bold text-cream mb-4">5. Purchases and Subscriptions</h2>
            <p className="mb-3">
              Bloxify offers optional in-app purchases, including the <strong className="text-cream">Season Pass</strong> subscription.
            </p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>All purchases are processed through Google Play Billing and managed via RevenueCat. Your purchase is also subject to Google Play&apos;s terms.</li>
              <li>The Season Pass is a recurring auto-renewing subscription. Unless cancelled, it renews automatically at the end of each billing period and your payment method is charged the then-current price.</li>
              <li>You can manage or cancel your subscription at any time in your Google Play account settings. Cancellation takes effect at the end of the current billing period.</li>
              <li><strong className="text-cream">Refunds</strong> are handled in accordance with Google Play&apos;s refund policies. Except where required by law, purchases are non-refundable.</li>
              <li>We may change subscription prices or the contents of a purchase. Price changes will be communicated and applied in accordance with Google Play&apos;s requirements.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-xl font-bold text-cream mb-4">6. Advertising</h2>
            <p>
              Bloxify offers optional rewarded advertisements through Google AdMob. Ads are
              shown only when you choose to watch one (for example, by tapping a &ldquo;watch
              ad&rdquo; button) in exchange for an in-game reward. We do not show forced or
              interruptive ads during gameplay.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-xl font-bold text-cream mb-4">7. Intellectual Property</h2>
            <p>
              The App and all of its content — including code, artwork, characters, audio,
              music, designs, logos, and the &ldquo;Bloxify&rdquo; and &ldquo;Steady Games Studio&rdquo; names —
              are owned by Steady Games Studio, LLC or its licensors and are protected by
              intellectual-property laws. We grant you a limited, personal, non-exclusive,
              non-transferable, revocable license to use the App for your own
              non-commercial entertainment. You may not copy, distribute, modify, or
              create derivative works from the App or its content without our written
              permission.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-xl font-bold text-cream mb-4">8. User Content</h2>
            <p>
              You are responsible for any content you submit, such as your display name and
              invite codes (&ldquo;User Content&rdquo;). You grant us a worldwide, royalty-free
              license to use, display, and store your User Content as needed to operate the
              App (for example, showing your display name on leaderboards). We may remove
              any User Content, or suspend any display name, that we believe violates these
              Terms, at our discretion and without notice.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-xl font-bold text-cream mb-4">9. Suspension and Termination</h2>
            <p className="mb-3">
              We may suspend, limit, or terminate your access to the App or your account, in
              whole or in part, at any time and without notice, if we reasonably believe you
              have violated these Terms or engaged in conduct that harms other users, us, or
              the App.
            </p>
            <p>
              You may stop using the App at any time and may delete your account. Upon
              termination, your license to use the App and any Virtual Items ends, and
              Virtual Items are forfeited. Sections that by their nature should survive
              termination (including intellectual property, disclaimers, and limitation of
              liability) will continue to apply.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-xl font-bold text-cream mb-4">10. Disclaimer of Warranties</h2>
            <p>
              The App is provided <strong className="text-cream">&ldquo;as is&rdquo; and &ldquo;as available&rdquo;</strong> without
              warranties of any kind, whether express or implied, including but not limited
              to merchantability, fitness for a particular purpose, and non-infringement.
              We do not warrant that the App will be uninterrupted, error-free, secure, or
              that progress, scores, or Virtual Items will never be lost. Your use of the
              App is at your own risk.
            </p>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="text-xl font-bold text-cream mb-4">11. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Steady Games Studio, LLC and its
              owners, employees, and partners will not be liable for any indirect,
              incidental, special, consequential, or punitive damages, or for any loss of
              data, progress, Virtual Items, or profits, arising out of or related to your
              use of the App. To the maximum extent permitted by law, our total liability
              for any claim relating to the App will not exceed the greater of (a) the
              amount you paid us in the twelve months before the claim, or (b) ten US
              dollars (US $10.00).
            </p>
          </section>

          {/* Section 12 */}
          <section>
            <h2 className="text-xl font-bold text-cream mb-4">12. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Steady Games Studio, LLC from any
              claims, damages, losses, or expenses (including reasonable legal fees) arising
              out of your misuse of the App, your violation of these Terms, or your
              violation of any law or the rights of a third party.
            </p>
          </section>

          {/* Section 13 */}
          <section>
            <h2 className="text-xl font-bold text-cream mb-4">13. Changes to the App and These Terms</h2>
            <p>
              We may modify, suspend, or discontinue any part of the App at any time. We may
              also update these Terms from time to time. The &ldquo;Last updated&rdquo; date at the
              top of this page reflects the latest version, and material changes will be
              communicated in-app or on this page before they take effect. Your continued
              use of the App after changes become effective constitutes acceptance of the
              updated Terms.
            </p>
          </section>

          {/* Section 14 */}
          <section>
            <h2 className="text-xl font-bold text-cream mb-4">14. Governing Law</h2>
            <p>
              These Terms are governed by the laws of the United States and the state in
              which Steady Games Studio, LLC is organized, without regard to its conflict of
              law principles. You agree that any dispute arising from these Terms or the App
              will be resolved in the courts located in that state, unless applicable law
              requires otherwise.
            </p>
          </section>

          {/* Section 15 */}
          <section>
            <h2 className="text-xl font-bold text-cream mb-4">15. Apple and Google</h2>
            <p>
              The App is distributed through third-party app stores (such as Google Play).
              Your use is also subject to that store&apos;s terms. The app store is not a party
              to these Terms and is not responsible for the App or its content. Google and
              the Google Play logo are trademarks of Google LLC.
            </p>
          </section>

          {/* Section 16 */}
          <section>
            <h2 className="text-xl font-bold text-cream mb-4">16. Contact Us</h2>
            <p className="mb-2">If you have questions about these Terms, contact us at:</p>
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
