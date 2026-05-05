const footerLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Support", href: "mailto:support@bloxify.app" },
];

const socialLinks = [
  { label: "Twitter", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Discord", href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-cream/10 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Studio */}
          <div className="text-center sm:text-left">
            <p className="text-cream font-bold text-lg">Bloxify</p>
            <p className="text-cream-dim text-sm mt-1">
              Built by Bloxify Studios
            </p>
            <p className="text-cream-dim text-sm">
              Contact:{" "}
              <a
                href="mailto:support@bloxify.app"
                className="text-coral hover:underline"
              >
                support@bloxify.app
              </a>
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-cream-dim hover:text-coral transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-cream-dim hover:text-coral transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-cream/5 text-center">
          <p className="text-cream-dim/50 text-xs">
            &copy; {new Date().getFullYear()} Bloxify Studios. All rights
            reserved. Google Play and the Google Play logo are trademarks of
            Google LLC.
          </p>
        </div>
      </div>
    </footer>
  );
}
