import { siteData } from "@/lib/siteData";
import { Reveal } from "./Reveal";

export function ProcessSection() {
  return (
    <section id="approach" className="section-divider px-5 py-20 sm:px-6 lg:px-8">
      <Reveal className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase text-accent">04 / Approach</p>
          <h2 className="mt-4 text-4xl font-black md:text-6xl">Từ bối cảnh văn hóa đến hệ thống triển khai.</h2>
        </div>
        <div className="mt-14 grid gap-px overflow-hidden rounded-[8px] border border-line bg-line md:grid-cols-2 lg:grid-cols-4">
          {siteData.process.map((step, index) => (
            <article key={step.title} className="bg-background p-6 md:p-7">
              <span className="text-sm font-semibold text-accent">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-8 text-2xl font-black">{step.title}</h3>
              <p className="mt-5 text-base leading-7 text-muted">{step.copy}</p>
              <p className="mt-6 border-t border-line pt-5 text-sm leading-6 text-charcoal">
                {step.deliverable}
              </p>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
