import { siteData } from "@/lib/siteData";
import { ButtonLink } from "./ButtonLink";
import { Reveal } from "./Reveal";

export function EngagementModels() {
  return (
    <section id="services" className="section-divider px-5 py-20 sm:px-6 lg:px-8">
      <Reveal className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase text-accent">10 / Services</p>
            <h2 className="mt-4 text-4xl font-black md:text-6xl">Dịch vụ và mô hình hợp tác.</h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-muted lg:pt-10">
            Tùy vào mục tiêu, GOVIETNAMEZE có thể tham gia như một đơn vị chiến lược, studio sản xuất, đối tác công nghệ hoặc đội ngũ đồng hành dài hạn.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {siteData.services.map((service) => (
            <article key={service.title} className="premium-card p-6">
              <h3 className="text-xl font-black">{service.title}</h3>
              <p className="mt-4 text-sm leading-6 text-muted">{service.copy}</p>
            </article>
          ))}
        </div>
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {siteData.engagementModels.map((model) => (
            <article key={model.title} className="premium-card flex flex-col p-7">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-3xl font-black">{model.title}</h3>
                <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">
                  {model.price}
                </span>
              </div>
              <p className="mt-8 text-sm font-semibold uppercase text-charcoal">Best for</p>
              <p className="mt-3 text-base leading-7 text-muted">{model.bestFor}</p>
              <p className="mt-8 text-sm font-semibold uppercase text-charcoal">Includes</p>
              <p className="mt-3 text-base leading-7 text-muted">{model.includes}</p>
              <ButtonLink href="#contact" variant="ghost" className="mt-8 w-full">
                {model.cta}
              </ButtonLink>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
