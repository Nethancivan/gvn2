import { siteData } from "@/lib/siteData";
import { Reveal } from "./Reveal";

export function MetricsSection() {
  return (
    <section className="section-divider px-5 py-20 sm:px-6 lg:px-8">
      <Reveal className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr]">
          <div>
            <p className="text-sm font-semibold uppercase text-accent">09 / Proof</p>
            <h2 className="mt-4 text-4xl font-black md:text-6xl">Chỉ số có thể cập nhật khi dữ liệu được xác thực.</h2>
          </div>
          <div className="grid gap-px overflow-hidden rounded-[8px] border border-line bg-line sm:grid-cols-2">
            {siteData.metrics.map((metric) => (
              <article key={metric.label} className="bg-surface p-7">
                <p className="text-5xl font-black text-accent md:text-6xl">{metric.value}</p>
                <p className="mt-5 text-base leading-7 text-muted">{metric.label}</p>
              </article>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
