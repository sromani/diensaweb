import { FEATURES } from "../data/content";
import { FeatureIcon } from "./Icons";

export function Features() {
  return (
    <section id="features" className="border-t border-border bg-zinc-950/50 py-20 sm:py-28">
      <div className="section-container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Features
          </p>
          <h2 className="section-heading mt-2">Everything you need to study smarter</h2>
          <p className="section-subheading mx-auto">
            Built on the VisionChess engine stack — local vision, legal board play,
            and deep Stockfish analysis in your pocket.
          </p>
        </div>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <li
              key={feature.title}
              className="glass-card p-6 transition hover:border-accent/30 hover:bg-card-hover sm:p-7"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <FeatureIcon name={feature.icon} />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{feature.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
