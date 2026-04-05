import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Taqneo",
  description: "Privacy policy for Taqneo services and website.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-32">
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 12L6 8l4-4" />
        </svg>
        Back to Home
      </Link>

      <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
        Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Last updated: April 2025
      </p>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground">
        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">1. Information We Collect</h2>
          <p>
            We may collect personal information that you provide directly to us, including your name, email address, phone number, and project details when you contact us or use our services.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">2. How We Use Your Information</h2>
          <p>
            We use the information we collect to provide and improve our services, communicate with you about projects, respond to inquiries, and send relevant updates about our services. We do not sell your personal information to third parties.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">3. Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">4. Cookies</h2>
          <p>
            Our website may use cookies and similar technologies to enhance your browsing experience. You can control cookie settings through your browser preferences.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">5. Third-Party Services</h2>
          <p>
            We may use third-party services for analytics, hosting, and other functionalities. These services may collect information as governed by their own privacy policies.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">6. Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal information. You may also request that we restrict or stop processing your data. To exercise these rights, please contact us.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">7. Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">8. Contact</h2>
          <p>
            For questions about this privacy policy, please contact us at{" "}
            <a href="mailto:taqneo101@gmail.com" className="text-neo-teal hover:underline">
              taqneo101@gmail.com
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
}
