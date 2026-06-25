import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GOVIETNAMEZE — Di sản, Công nghệ, Sáng tạo",
  description:
    "GOVIETNAMEZE là đơn vị truyền thông và sáng tạo văn hóa kết nối di sản Việt Nam với công nghệ, nội dung, sự kiện trải nghiệm và nền tảng số dành cho công chúng hiện đại.",
  openGraph: {
    title: "GOVIETNAMEZE — Di sản, Công nghệ, Sáng tạo",
    description:
      "Đơn vị truyền thông và sáng tạo văn hóa kết nối di sản Việt Nam với công nghệ, nội dung, sự kiện trải nghiệm và nền tảng số.",
    type: "website",
    locale: "vi_VN"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className="bg-background text-charcoal antialiased">{children}</body>
    </html>
  );
}
