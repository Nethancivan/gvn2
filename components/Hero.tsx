import { siteData } from "@/lib/siteData";
import { ButtonLink } from "./ButtonLink";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid min-h-[calc(100vh-112px)] max-w-7xl items-center gap-14 px-5 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
        <Reveal>
          <p className="mb-5 text-sm font-semibold uppercase text-accent">{siteData.hero.label}</p>
          <h1 className="max-w-5xl text-5xl font-black leading-[0.95] md:text-7xl lg:text-8xl">
            {siteData.hero.headline}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted md:text-xl">
            {siteData.hero.subheadline}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#contact">{siteData.hero.primaryCta}</ButtonLink>
            <ButtonLink href="#capabilities" variant="secondary">
              {siteData.hero.secondaryCta}
            </ButtonLink>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {siteData.hero.pills.map((pill) => (
              <span
                key={pill}
                className="rounded-full border border-line bg-surface/60 px-3 py-2 text-sm text-charcoal"
              >
                {pill}
              </span>
            ))}
          </div>
          <p className="mt-8 flex max-w-xl items-start gap-3 text-sm text-muted">
            <span className="signal-dot mt-1 bg-yellow" aria-hidden="true" />
            <span>{siteData.hero.status}</span>
          </p>
        </Reveal>
        <Reveal delay={0.1} className="keycap-stage">
          <div className="relative mx-auto max-w-[520px]">
            <div className="absolute -left-2 top-10 h-28 w-2 bg-red" aria-hidden="true" />
            <div className="absolute -right-4 bottom-16 h-3 w-28 bg-yellow" aria-hidden="true" />
            <div className="keycap">
              <span className="enter-stem" aria-hidden="true" />
              <span className="sr-only">CSS keycap Enter visual for GOVIETNAMEZE</span>
            </div>
            <div className="mt-16 grid grid-cols-3 gap-3 text-xs font-semibold uppercase text-muted">
              <span>Heritage</span>
              <span>Technology</span>
              <span>Creative</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
