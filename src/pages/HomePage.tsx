import { Hero } from "../components/Hero";
import { HowItWorks } from "../components/HowItWorks";
import { Features } from "../components/Features";
import { Screenshots } from "../components/Screenshots";
import { FAQ } from "../components/FAQ";
import { Contact } from "../components/Contact";

export function HomePage() {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <Features />
      <Screenshots />
      <FAQ />
      <Contact />
    </main>
  );
}
