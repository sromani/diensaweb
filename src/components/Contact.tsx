import { Link } from "react-router-dom";
import { APP_STORE_URL, CONTACT_EMAIL, NAV_LINKS } from "../data/content";

export function Contact() {
  return (
    <section id="contact" className="border-t border-border py-20 sm:py-28">
      <div className="section-container">
        <div className="glass-card overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 sm:p-10 lg:p-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                Contact
              </p>
              <h2 className="section-heading mt-2">Get in touch</h2>
              <p className="section-subheading">
                Questions, feedback, or partnership inquiries — we&apos;d love to hear from you.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="flex items-center gap-3 text-muted transition hover:text-accent"
                >
                  <MailIcon />
                  <span>{CONTACT_EMAIL}</span>
                </a>
                <a
                  href={APP_STORE_URL}
                  className="flex items-center gap-3 text-muted transition hover:text-accent"
                >
                  <AppleIcon />
                  <span>Coming soon on the App Store</span>
                </a>
              </div>
            </div>

            <form
              className="border-t border-border bg-card/40 p-8 sm:p-10 lg:border-t-0 lg:border-l lg:p-12"
              onSubmit={(e) => e.preventDefault()}
              aria-label="Contact form"
            >
              <div className="space-y-4">
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium">Name</span>
                  <input
                    type="text"
                    name="name"
                    required
                    autoComplete="name"
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-accent/50 focus:ring-1 focus:ring-accent/30"
                    placeholder="Your name"
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium">Email</span>
                  <input
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-accent/50 focus:ring-1 focus:ring-accent/30"
                    placeholder="you@example.com"
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium">Message</span>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-accent/50 focus:ring-1 focus:ring-accent/30"
                    placeholder="Tell us how we can help..."
                  />
                </label>
                <button type="submit" className="btn-primary w-full py-3.5">
                  Send Message
                </button>
                <p className="text-center text-xs text-muted">
                  Static demo form — wire to your backend or Formspree on deploy.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="section-container flex flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} Capture Chess. Built with VisionChess technology.
        </p>
        <nav className="flex flex-wrap justify-center gap-6" aria-label="Footer navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition hover:text-accent"
            >
              {link.label}
            </a>
          ))}
          <Link to="/privacy" className="text-sm text-muted transition hover:text-accent">
            Privacy Policy
          </Link>
        </nav>
      </div>
    </footer>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
      <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
    </svg>
  );
}
