import { siteData } from "@/lib/siteData";
import { Reveal } from "./Reveal";

export function PillarSection() {
  return (
    <section className="section-divider px-5 py-20 sm:px-6 lg:px-8">
      <Reveal className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase text-accent">02 / Three pillars</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-black md:text-6xl">
              Di sản – Công nghệ – Sáng tạo
            </h2>
          </div>
          <p className="max-w-md text-base leading-7 text-muted">
            Ba lớp năng lực tạo nên cách GOVIETNAMEZE thiết kế những dự án văn hóa có chiều sâu và khả năng lan tỏa.
          </p>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {siteData.pillars.map((pillar, index) => (
            <article key={pillar.title} className="premium-card min-h-[360px] p-7 md:p-9">
              <span className="text-sm font-semibold text-accent">0{index + 1}</span>
              <h3 className="mt-8 text-4xl font-black md:text-5xl">{pillar.title}</h3>
              <p className="mt-8 text-lg leading-8 text-muted">{pillar.copy}</p>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
