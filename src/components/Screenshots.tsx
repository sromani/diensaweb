import { useState } from "react";
import { SCREENSHOTS } from "../data/content";

export function Screenshots() {
  const [active, setActive] = useState(0);
  const current = SCREENSHOTS[active];

  return (
    <section id="screenshots" className="border-t border-border py-20 sm:py-28">
      <div className="section-container">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Screenshots
          </p>
          <h2 className="section-heading mt-2">See Capture Chess in action</h2>
          <p className="section-subheading">
            Scan boards, run Game Review on imported games, and explore openings
            — all from a clean, focused mobile interface.
          </p>
        </div>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div className="order-2 flex flex-wrap justify-center gap-3 lg:order-1 lg:flex-col lg:items-stretch">
            {SCREENSHOTS.map((shot, index) => (
              <button
                key={shot.title}
                type="button"
                onClick={() => setActive(index)}
                className={`rounded-xl border px-4 py-3 text-left transition sm:px-5 sm:py-4 ${
                  active === index
                    ? "border-accent/50 bg-accent/10"
                    : "border-border bg-card hover:border-accent/30 hover:bg-card-hover"
                }`}
                aria-pressed={active === index}
                aria-label={`View ${shot.title} screenshot`}
              >
                <span className="block text-sm font-semibold">{shot.title}</span>
                <span className="mt-0.5 block text-xs text-muted">{shot.caption}</span>
              </button>
            ))}
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative mx-auto max-w-xs sm:max-w-sm">
              <div className="absolute -inset-6 rounded-[3rem] bg-accent/5 blur-2xl" />
              <div className="relative rounded-[2.5rem] border border-border bg-card p-3 shadow-2xl">
                <div className="overflow-hidden rounded-[2rem] border border-border/80">
                  <img
                    key={current.src}
                    src={current.src}
                    alt={current.alt}
                    width={320}
                    height={600}
                    className="w-full animate-fade-in"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {SCREENSHOTS.map((shot) => (
            <figure
              key={shot.src}
              className="glass-card overflow-hidden transition hover:border-accent/30"
            >
              <img
                src={shot.src}
                alt={shot.alt}
                width={240}
                height={420}
                className="w-full"
                loading="lazy"
              />
              <figcaption className="border-t border-border px-3 py-2 text-center text-xs font-medium text-muted">
                {shot.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
