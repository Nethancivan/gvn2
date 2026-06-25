import { siteData } from "@/lib/siteData";
import { Reveal } from "./Reveal";

export function FAQSection() {
  return (
    <section className="section-divider px-5 py-20 sm:px-6 lg:px-8">
      <Reveal className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.65fr_1.35fr]">
        <div>
          <p className="text-sm font-semibold uppercase text-accent">12 / FAQ</p>
          <h2 className="mt-4 text-4xl font-black md:text-6xl">Câu hỏi thường gặp.</h2>
        </div>
        <div className="divide-y divide-line border-y border-line">
          {siteData.faq.map((item) => (
            <details key={item.question} className="group py-6">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-xl font-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
                <span>{item.question}</span>
                <span className="mt-1 text-accent transition group-open:rotate-45" aria-hidden="true">
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-3xl text-base leading-7 text-muted">{item.answer}</p>
            </details>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
