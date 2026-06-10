import { APP_STORE_URL } from "../data/content";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid-pattern bg-grid opacity-60"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-40 -right-20 h-72 w-72 rounded-full bg-emerald-900/30 blur-3xl"
      />

      <div className="section-container relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="animate-fade-up">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent-soft/40 px-3 py-1 text-xs font-medium text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              Offline chess vision · Powered by Stockfish
            </div>

            <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Turn Any Chess Board{" "}
              <span className="bg-gradient-to-r from-accent to-emerald-300 bg-clip-text text-transparent">
                Into Analysis
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
              Take a photo of a real chess board and instantly analyze the position,
              discover openings and find the best moves.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                id="app-store"
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-6 py-3.5 text-base"
                aria-label="Download Capture Chess on the App Store"
              >
                <AppleIcon />
                Download on the App Store
              </a>
              <a href="#how-it-works" className="btn-secondary px-6 py-3.5 text-base">
                Learn More
                <ArrowDownIcon />
              </a>
            </div>

            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
              <li className="flex items-center gap-2">
                <CheckIcon />
                On-device recognition
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon />
                Stockfish engine
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon />
                Works offline
              </li>
            </ul>
          </div>

          <div className="relative mx-auto w-full max-w-sm animate-fade-up lg:max-w-none [animation-delay:150ms]">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-b from-accent/20 to-transparent blur-2xl" />
            <div className="relative animate-float">
              <PhoneMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[280px] sm:w-[300px]">
      <div className="rounded-[2.5rem] border border-border bg-zinc-950 p-3 shadow-2xl shadow-black/50">
        <div className="overflow-hidden rounded-[2rem] border border-border/80 bg-card">
          <img
            src="/screenshots/mobile-home.png"
            alt="Capture Chess home screen"
            width={276}
            height={598}
            className="w-full"
            loading="eager"
            fetchPriority="high"
          />
        </div>
      </div>
    </div>
  );
}

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
      <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
    </svg>
  );
}

function ArrowDownIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M10 4v12M10 16l-4-4M10 16l4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-4 w-4 text-accent" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M3 8l3.5 3.5L13 5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
