import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alp Yağız Pala — Bilgisayar Mühendisliği",
  description:
    "Alp Yağız Pala’nın kişisel portfolyosu. TED Üniversitesi Bilgisayar Mühendisliği öğrencisi.",
  openGraph: {
    title: "Alp Yağız Pala — Bilgisayar Mühendisliği",
    description: "TED Üniversitesi Bilgisayar Mühendisliği öğrencisi Alp Yağız Pala’nın portfolyosu.",
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
