import { useState } from "react";
import { Link } from "react-router-dom";
import { NAV_LINKS } from "../data/content";

type HeaderProps = {
  variant?: "home" | "legal";
};

function Logo() {
  return (
    <Link to="/" className="group flex items-center gap-2.5" aria-label="Capture Chess home">
      <img
        src="/favicon-32.png"
        alt=""
        width={36}
        height={36}
        className="rounded-lg shadow-lg shadow-accent/10 transition group-hover:scale-105"
      />
      <span className="text-lg font-bold tracking-tight">
        Capture<span className="text-accent">Chess</span>
      </span>
    </Link>
  );
}

export function Header({ variant = "home" }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const sectionHref = (hash: string) => (variant === "home" ? hash : `/${hash}`);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="section-container flex h-16 items-center justify-between">
        <Logo />

        {variant === "home" ? (
          <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={sectionHref(link.href)}
                className="text-sm font-medium text-muted transition hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </nav>
        ) : (
          <nav className="hidden items-center gap-6 md:flex" aria-label="Legal navigation">
            <Link to="/" className="text-sm font-medium text-muted transition hover:text-accent">
              Home
            </Link>
            <Link
              to="/privacy"
              className="text-sm font-medium text-accent"
              aria-current="page"
            >
              Privacy Policy
            </Link>
          </nav>
        )}

        <div className="flex items-center gap-3">
          <a
            href={sectionHref("#app-store")}
            className="btn-primary hidden px-4 py-2 text-xs sm:inline-flex"
          >
            Download
          </a>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted transition hover:border-accent/40 hover:text-accent md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-nav"
          className="border-t border-border bg-background/95 px-4 py-4 md:hidden"
          aria-label="Mobile navigation"
        >
          <ul className="space-y-1">
            {variant === "home"
              ? NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={sectionHref(link.href)}
                      className="block rounded-lg px-3 py-2.5 text-sm font-medium text-muted transition hover:bg-card hover:text-accent"
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))
              : (
                <>
                  <li>
                    <Link
                      to="/"
                      className="block rounded-lg px-3 py-2.5 text-sm font-medium text-muted transition hover:bg-card hover:text-accent"
                      onClick={() => setMenuOpen(false)}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/privacy"
                      className="block rounded-lg px-3 py-2.5 text-sm font-medium text-accent"
                      onClick={() => setMenuOpen(false)}
                    >
                      Privacy Policy
                    </Link>
                  </li>
                </>
              )}
            <li className="pt-2">
              <a
                href={sectionHref("#app-store")}
                className="btn-primary w-full py-2.5 text-sm"
                onClick={() => setMenuOpen(false)}
              >
                Download on the App Store
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
