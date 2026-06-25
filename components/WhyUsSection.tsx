import { siteData } from "@/lib/siteData";
import { Reveal } from "./Reveal";

export function WhyUsSection() {
  return (
    <section className="section-divider px-5 py-20 sm:px-6 lg:px-8">
      <Reveal className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase text-accent">07 / Why us</p>
          <h2 className="mt-4 text-4xl font-black md:text-6xl">Studio văn hóa dành cho những dự án cần sự chính xác và sức sống.</h2>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {siteData.whyUs.map((item, index) => (
            <article key={item.title} className="premium-card p-7">
              <span className="text-sm font-semibold text-accent">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-8 text-2xl font-black">{item.title}</h3>
              <p className="mt-5 text-base leading-7 text-muted">{item.copy}</p>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
