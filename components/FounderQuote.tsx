import { siteData } from "@/lib/siteData";
import { Reveal } from "./Reveal";

export function FounderQuote() {
  return (
    <section className="section-divider px-5 py-20 sm:px-6 lg:px-8">
      <Reveal className="mx-auto max-w-7xl">
        <figure className="grid gap-10 lg:grid-cols-[0.35fr_1.65fr]">
          <figcaption>
            <p className="text-sm font-semibold uppercase text-accent">06 / Philosophy</p>
            <p className="mt-4 text-base text-muted">{siteData.founderQuote.label}</p>
          </figcaption>
          <blockquote className="text-4xl font-black leading-tight md:text-6xl">
            “{siteData.founderQuote.quote}”
          </blockquote>
        </figure>
      </Reveal>
    </section>
  );
}
