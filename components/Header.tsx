import { siteData } from "@/lib/siteData";
import { ButtonLink } from "./ButtonLink";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/88 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <a
            href="#top"
            className="text-base font-black uppercase focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            {siteData.business.wordmark}
          </a>
          <ButtonLink href="#contact" className="hidden sm:inline-flex">
            Bắt đầu dự án
          </ButtonLink>
        </div>
        <nav aria-label="Điều hướng chính" className="flex items-center justify-between gap-4">
          <div className="flex w-full gap-2 overflow-x-auto pb-1 md:w-auto md:overflow-visible md:pb-0">
            {siteData.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="shrink-0 rounded-[6px] px-3 py-2 text-sm text-muted transition hover:bg-surface hover:text-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                {item.label}
              </a>
            ))}
          </div>
          <ButtonLink href="#contact" className="shrink-0 sm:hidden">
            Bắt đầu
          </ButtonLink>
        </nav>
      </div>
    </header>
  );
}
