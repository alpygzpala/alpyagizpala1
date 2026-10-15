import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alpyagiz Pala — Fikirden etkiye",
  description:
    "Alpyagiz Pala'nın kişisel çalışma alanı. Tasarım, teknoloji ve merakın kesiştiği fikirler.",
  openGraph: {
    title: "Alpyagiz Pala — Fikirden etkiye",
    description: "Tasarım, teknoloji ve merakın kesiştiği kişisel çalışma alanı.",
    type: "website",
    locale: "tr_TR",
  },
};

export const viewport: Viewport = {
  themeColor: "#222a33",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
