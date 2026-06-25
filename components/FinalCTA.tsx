import { siteData } from "@/lib/siteData";
import { ButtonLink } from "./ButtonLink";
import { Reveal } from "./Reveal";

export function FinalCTA() {
  return (
    <section id="contact" className="section-divider px-5 py-20 sm:px-6 lg:px-8">
      <Reveal className="mx-auto max-w-7xl">
        <div className="bg-charcoal p-8 text-white md:p-12 lg:p-16">
          <p className="text-sm font-semibold uppercase text-yellow">13 / Start</p>
          <h2 className="mt-6 max-w-4xl text-4xl font-black leading-tight md:text-7xl">
            Có một giá trị văn hóa cần được kể lại đúng cách?
          </h2>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-white/72">
            Hãy bắt đầu bằng một cuộc trao đổi chiến lược. GOVIETNAMEZE sẽ cùng bạn xác định giá trị cốt lõi, công chúng mục tiêu và cách chuyển hóa di sản thành truyền thông, trải nghiệm hoặc nền tảng số có khả năng lan tỏa.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href={`mailto:${siteData.contact.email}`} className="border-white bg-white text-charcoal hover:border-yellow hover:bg-yellow hover:text-charcoal">
              Bắt đầu dự án
            </ButtonLink>
            <a
              href={`tel:${siteData.contact.phone.replaceAll(" ", "")}`}
              className="inline-flex min-h-11 items-center justify-center rounded-[6px] border border-white/24 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              {siteData.contact.phone}
            </a>
          </div>
          <div className="mt-12 grid gap-5 border-t border-white/16 pt-8 text-sm leading-6 text-white/72 md:grid-cols-3">
            <a href={`mailto:${siteData.contact.email}`} className="transition hover:text-white">
              {siteData.contact.email}
            </a>
            <p>{siteData.contact.phone}</p>
            <p>{siteData.contact.address}</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
