import { STEPS } from "../data/content";
import { StepIcon } from "./Icons";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t border-border py-20 sm:py-28">
      <div className="section-container">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            How It Works
          </p>
          <h2 className="section-heading mt-2">From photo to insight in seconds</h2>
          <p className="section-subheading">
            Three simple steps to turn any physical board into a fully interactive
            analysis session.
          </p>
        </div>

        <ol className="mt-14 grid gap-6 md:grid-cols-3">
          {STEPS.map((step, index) => (
            <li
              key={step.title}
              className="glass-card group relative p-6 transition hover:border-accent/30 hover:bg-card-hover sm:p-8"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {index < STEPS.length - 1 && (
                <div
                  aria-hidden
                  className="absolute top-1/2 -right-3 hidden h-px w-6 bg-gradient-to-r from-accent/50 to-transparent md:block"
                />
              )}
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft/60 text-accent transition group-hover:bg-accent/20">
                  <StepIcon name={step.icon} />
                </div>
                <span className="text-3xl font-bold text-border">{step.number}</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
