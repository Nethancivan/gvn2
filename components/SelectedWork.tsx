import { siteData } from "@/lib/siteData";
import { Reveal } from "./Reveal";

export function SelectedWork() {
  return (
    <section id="work" className="section-divider px-5 py-20 sm:px-6 lg:px-8">
      <Reveal className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase text-accent">08 / Selected work</p>
            <h2 className="mt-4 text-4xl font-black md:text-6xl">Dự án tiêu biểu.</h2>
          </div>
          <p className="max-w-md text-base leading-7 text-muted">
            Những hướng triển khai thể hiện cách GOVIETNAMEZE kết nối di sản, truyền thông, công nghệ và cộng đồng sáng tạo.
          </p>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {siteData.projects.map((project, index) => (
            <article
              key={project.title}
              className="premium-card group flex min-h-[470px] flex-col p-7 transition duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-soft"
            >
              <div className="flex items-start justify-between gap-6">
                <span className="text-sm font-semibold text-accent">{String(index + 1).padStart(2, "0")}</span>
                <span className="rounded-full border border-line px-3 py-1 text-xs text-muted">
                  {project.category}
                </span>
              </div>
              <h3 className="mt-14 text-3xl font-black md:text-4xl">{project.title}</h3>
              <p className="mt-6 text-base leading-7 text-muted">{project.description}</p>
              <p className="mt-auto border-t border-line pt-6 text-base font-semibold leading-7 text-charcoal">
                {project.impact}
              </p>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
