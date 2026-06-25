import { siteData } from "@/lib/siteData";
import { Reveal } from "./Reveal";

export function BrandStorySection() {
  return (
    <section className="section-divider px-5 py-20 sm:px-6 lg:px-8">
      <Reveal className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1.28fr]">
        <div>
          <p className="text-sm font-semibold uppercase text-accent">01 / Positioning</p>
          <h2 className="mt-4 text-3xl font-black md:text-5xl">{siteData.business.tagline}</h2>
        </div>
        <div>
          <p className="text-3xl font-black leading-tight md:text-5xl">
            {siteData.business.coreLine}
          </p>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-muted">
            {siteData.business.supporting}
          </p>
          <p className="mt-8 max-w-3xl border-l-4 border-accent pl-5 text-lg leading-8 text-charcoal">
            {siteData.brandStory}
          </p>
        </div>
      </Reveal>
    </section>
  );
}
