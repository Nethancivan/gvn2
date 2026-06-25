import { siteData } from "@/lib/siteData";
import { Reveal } from "./Reveal";

export function PartnerEcosystem() {
  return (
    <section className="section-divider px-5 py-20 sm:px-6 lg:px-8">
      <Reveal className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.7fr_1.3fr]">
        <div>
          <p className="text-sm font-semibold uppercase text-accent">11 / Ecosystem</p>
          <h2 className="mt-4 text-4xl font-black md:text-6xl">Mạng lưới đối tác văn hóa.</h2>
          <p className="mt-6 text-lg leading-8 text-muted">
            GOVIETNAMEZE thiết kế dự án cùng nhiều nhóm liên quan để đảm bảo giá trị văn hóa được tôn trọng, diễn giải đúng và lan tỏa hiệu quả.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {siteData.partnerEcosystem.map((partner) => (
            <div key={partner} className="border-b border-line py-5 text-xl font-black">
              {partner}
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
