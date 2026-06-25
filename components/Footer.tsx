import { siteData } from "@/lib/siteData";

export function Footer() {
  return (
    <footer className="section-divider px-5 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-2xl font-black uppercase">{siteData.business.wordmark}</p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-muted">{siteData.business.fullName}</p>
        </div>
        <div className="text-sm leading-6 text-muted md:text-right">
          <p>{siteData.business.location}</p>
          <p>Di sản · Công nghệ · Sáng tạo</p>
        </div>
      </div>
    </footer>
  );
}
