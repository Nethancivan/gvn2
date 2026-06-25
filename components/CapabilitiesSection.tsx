import { siteData } from "@/lib/siteData";
import { Reveal } from "./Reveal";

export function CapabilitiesSection() {
  const marqueeItems = [...siteData.hero.pills, ...siteData.hero.pills];

  return (
    <section id="capabilities" className="section-divider overflow-hidden px-5 py-20 sm:px-6 lg:px-8">
      <Reveal className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase text-accent">05 / Capabilities</p>
            <h2 className="mt-4 text-4xl font-black md:text-6xl">Năng lực từ chiến lược đến vận hành.</h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-muted lg:pt-10">
            GOVIETNAMEZE kết hợp nghiên cứu, truyền thông, sáng tạo, công nghệ và quản trị dự án để xây dựng những chương trình văn hóa có thể đi từ ý tưởng đến công chúng.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {siteData.capabilities.map((capability) => (
            <article key={capability.title} className="premium-card p-7 transition duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-soft">
              <h3 className="text-2xl font-black">{capability.title}</h3>
              <p className="mt-5 text-base leading-7 text-muted">{capability.copy}</p>
            </article>
          ))}
        </div>
        <div className="mt-12 overflow-hidden border-y border-line py-4">
          <div className="marquee-track flex w-max gap-3">
            {marqueeItems.map((item, index) => (
              <span key={`${item}-${index}`} className="rounded-full border border-line bg-surface px-4 py-2 text-sm text-muted">
                {item}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
