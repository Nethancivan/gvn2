import { siteData } from "@/lib/siteData";
import { Reveal } from "./Reveal";

export function VisionMissionSection() {
  return (
    <section className="section-divider px-5 py-20 sm:px-6 lg:px-8">
      <Reveal className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.92fr_1.08fr]">
        <div>
          <p className="text-sm font-semibold uppercase text-accent">03 / Vision & Mission</p>
          <h2 className="mt-4 text-4xl font-black md:text-6xl">Một hệ sinh thái truyền thông văn hóa.</h2>
          <div className="mt-8 space-y-5 text-lg leading-8 text-muted">
            {siteData.vision.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>
        <div className="grid gap-4">
          {siteData.mission.map((item) => (
            <article key={item.title} className="premium-card p-7">
              <h3 className="text-2xl font-black">{item.title}</h3>
              <p className="mt-3 text-base leading-7 text-muted">{item.copy}</p>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
