import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions — Taqneo",
  description: "Terms and conditions for using Taqneo services.",
};

export default function TermsPage() {
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
        Terms & Conditions
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Last updated: April 2025
      </p>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground">
        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">1. Acceptance of Terms</h2>
          <p>
            By accessing and using the services provided by Taqneo, you agree to be bound by these Terms & Conditions. If you do not agree to these terms, please do not use our services.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">2. Services</h2>
          <p>
            Taqneo provides web design, software development, digital marketing, email marketing, office email and suite setup, and website maintenance services. The specific scope, deliverables, and timelines for each project will be outlined in a separate agreement or proposal.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">3. Intellectual Property</h2>
          <p>
            All content, designs, code, and materials created by Taqneo remain the intellectual property of Taqneo until full payment has been received. Upon full payment, ownership of the deliverables transfers to the client unless otherwise specified in the project agreement.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">4. Payment Terms</h2>
          <p>
            Payment terms will be specified in the project proposal or agreement. Late payments may result in project delays or suspension of services. All prices are quoted in the currency specified in the proposal.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">5. Client Responsibilities</h2>
          <p>
            Clients are responsible for providing accurate content, timely feedback, and necessary access to systems required for project completion. Delays in providing these may affect project timelines.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">6. Limitation of Liability</h2>
          <p>
            Taqneo shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services. Our total liability shall not exceed the amount paid by the client for the specific service in question.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">7. Modifications</h2>
          <p>
            Taqneo reserves the right to update these terms at any time. Changes will be posted on this page with an updated revision date. Continued use of our services constitutes acceptance of the modified terms.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">8. Contact</h2>
          <p>
            For questions regarding these terms, please contact us at{" "}
            <a href="mailto:taqneo101@gmail.com" className="text-neo-teal hover:underline">
              taqneo101@gmail.com
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
}
