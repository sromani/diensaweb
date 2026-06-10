import { useEffect, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { CONTACT_EMAIL, LEGAL } from "../data/content";

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="scroll-mt-24">
      <h2 className="text-xl font-semibold text-foreground sm:text-2xl">{title}</h2>
      <div className="prose-legal mt-4 space-y-4 text-sm leading-relaxed text-muted sm:text-base">
        {children}
      </div>
    </section>
  );
}

export function PrivacyPolicyPage() {
  useEffect(() => {
    document.title = "Privacy Policy — Capture Chess";
    const meta = document.querySelector('meta[name="description"]');
    meta?.setAttribute(
      "content",
      "Privacy Policy for Capture Chess. Learn how we handle camera, photos, and on-device chess analysis data.",
    );
  }, []);

  return (
    <main className="pt-28 pb-20 sm:pt-36">
      <div className="section-container">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Legal
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-muted">
            <strong className="font-medium text-foreground">Effective date:</strong>{" "}
            {LEGAL.effectiveDate}
            <br />
            <strong className="font-medium text-foreground">Last updated:</strong>{" "}
            {LEGAL.lastUpdated}
          </p>

          <div className="mt-10 space-y-10">
            <Section title="1. Introduction">
              <p>
                {LEGAL.appName} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the{" "}
                {LEGAL.appName} mobile application for iOS (the &quot;App&quot;) and the website at{" "}
                <a href={LEGAL.websiteUrl} className="text-accent hover:underline">
                  {LEGAL.websiteUrl}
                </a>{" "}
                (the &quot;Site&quot;).
              </p>
              <p>
                This Privacy Policy explains what information the App and Site process, how that
                information is used, and your choices. By using the App or Site, you agree to this
                policy.
              </p>
              <p>
                {LEGAL.appName} is designed for chess board analysis. Core features — including
                board recognition and engine analysis — run{" "}
                <strong className="font-medium text-foreground">on your device</strong>. We do not
                require you to create an account.
              </p>
            </Section>

            <Section title="2. Information We Process">
              <p>Depending on how you use the App, the following data may be processed:</p>

              <h3 className="text-base font-semibold text-foreground">2.1 Camera and photos</h3>
              <p>
                If you choose to scan a chess board, the App may access your device camera or photo
                library. Images are used to detect the board position and generate a chess FEN
                (position notation). Processing occurs locally on your device unless you explicitly
                use a feature that sends data over the network (if offered in a future version).
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  <strong className="font-medium text-foreground">Camera:</strong> to photograph
                  physical chess boards for analysis.
                </li>
                <li>
                  <strong className="font-medium text-foreground">Photo library (read):</strong> to
                  select existing board images for analysis.
                </li>
                <li>
                  <strong className="font-medium text-foreground">Photo library (write):</strong>{" "}
                  only if you choose to save an analyzed board image to your library.
                </li>
              </ul>

              <h3 className="text-base font-semibold text-foreground">
                2.2 On-device analysis data
              </h3>
              <p>
                The App runs machine-learning models and the Stockfish chess engine on your device.
                Detected positions, analysis results, saved boards, opening progress, and app
                preferences may be stored locally on your device.
              </p>

              <h3 className="text-base font-semibold text-foreground">2.3 Network usage</h3>
              <p>
                The App may use the internet to download vision or engine model files on first use,
                or to check for app updates through the App Store. Routine board scanning and
                analysis do not require uploading your photos to our servers.
              </p>

              <h3 className="text-base font-semibold text-foreground">2.4 Website contact form</h3>
              <p>
                If you submit our Site contact form, we receive the information you provide (such as
                name, email address, and message content) solely to respond to your inquiry.
              </p>

              <h3 className="text-base font-semibold text-foreground">
                2.5 Information we do not collect
              </h3>
              <p>We do not knowingly collect:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Account credentials (the App does not require sign-in)</li>
                <li>Precise location data</li>
                <li>Contacts, calendars, or health data</li>
                <li>Advertising identifiers for cross-app tracking</li>
                <li>Payment information (purchases, if any, are handled by Apple)</li>
              </ul>
            </Section>

            <Section title="3. How We Use Information">
              <p>We use processed information only to:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Detect chess board positions from images you provide</li>
                <li>Provide interactive board play and Stockfish engine analysis</li>
                <li>Save boards, opening study progress, and preferences on your device</li>
                <li>Improve reliability and support when you contact us</li>
                <li>Comply with legal obligations</li>
              </ul>
              <p>
                We do <strong className="font-medium text-foreground">not</strong> sell your
                personal information. We do not use your board photos for advertising or unrelated
                profiling.
              </p>
            </Section>

            <Section title="4. Data Storage and Retention">
              <p>
                Data stored on your device (saved positions, settings, cached models) remains until
                you delete the App, clear app data, or remove saved items within the App.
              </p>
              <p>
                Contact form messages sent through the Site are retained only as long as needed to
                handle your request and maintain reasonable business records, unless a longer period
                is required by law.
              </p>
            </Section>

            <Section title="5. Sharing and Disclosure">
              <p>We may share information only in these limited cases:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  <strong className="font-medium text-foreground">Service providers:</strong>{" "}
                  hosting or email providers that help operate the Site, bound by confidentiality
                  obligations.
                </li>
                <li>
                  <strong className="font-medium text-foreground">Legal requirements:</strong> when
                  required by law, court order, or to protect rights, safety, and security.
                </li>
                <li>
                  <strong className="font-medium text-foreground">Business transfers:</strong> in
                  connection with a merger, acquisition, or asset sale, with notice where required
                  by law.
                </li>
                <li>
                  <strong className="font-medium text-foreground">Apple:</strong> app distribution,
                  updates, and in-app purchases are subject to Apple&apos;s privacy practices.
                </li>
              </ul>
              <p>We do not share board photos with third parties for their marketing purposes.</p>
            </Section>

            <Section title="6. Apple App Privacy Details">
              <p>
                For App Store privacy nutrition labels, {LEGAL.appName} generally collects or
                processes the following categories:
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  <strong className="font-medium text-foreground">Photos or videos</strong> — used
                  for board detection; processed on-device; not linked to your identity by us.
                </li>
                <li>
                  <strong className="font-medium text-foreground">User content</strong> — chess
                  positions and saved boards stored locally on your device.
                </li>
                <li>
                  <strong className="font-medium text-foreground">Diagnostics</strong> — only if
                  enabled through a future crash-reporting feature; currently not collected by
                  default.
                </li>
              </ul>
              <p>
                Data is not used for tracking across apps and websites owned by other companies, and
                is not sold.
              </p>
            </Section>

            <Section title="7. Children's Privacy">
              <p>
                The App is not directed to children under 13 (or the minimum age required in your
                country). We do not knowingly collect personal information from children. If you
                believe a child has provided personal information through the Site contact form,
                contact us and we will delete it.
              </p>
            </Section>

            <Section title="8. Your Rights and Choices">
              <p>You can:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Deny or revoke camera and photo permissions in iOS Settings</li>
                <li>Delete saved boards and app data within the App or by uninstalling the App</li>
                <li>Request access, correction, or deletion of information submitted via the Site</li>
              </ul>
              <p>
                Depending on your location (including the EEA, UK, or California), you may have
                additional rights such as portability, restriction of processing, or objection. To
                exercise these rights, email us at{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-accent hover:underline">
                  {CONTACT_EMAIL}
                </a>
                .
              </p>
            </Section>

            <Section title="9. International Users">
              <p>
                If you access the Site from outside your home country, your information may be
                processed in countries with different data-protection laws. We take reasonable steps
                to protect information consistent with this policy.
              </p>
            </Section>

            <Section title="10. Security">
              <p>
                We use reasonable technical and organizational measures to protect information
                submitted through the Site. On-device processing reduces exposure of your board
                photos to network transmission. No method of storage or transmission is 100% secure.
              </p>
            </Section>

            <Section title="11. Changes to This Policy">
              <p>
                We may update this Privacy Policy from time to time. We will post the revised policy
                on this page and update the &quot;Last updated&quot; date. Material changes may
                also be communicated in the App or on the Site where appropriate.
              </p>
            </Section>

            <Section title="12. Contact Us">
              <p>
                Questions about this Privacy Policy or our data practices? Contact us at:
              </p>
              <p>
                <strong className="font-medium text-foreground">{LEGAL.appName}</strong>
                <br />
                Email:{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-accent hover:underline">
                  {CONTACT_EMAIL}
                </a>
              </p>
            </Section>
          </div>

          <div className="mt-12">
            <Link to="/" className="inline-flex text-sm font-medium text-accent hover:underline">
              ← Back to home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
