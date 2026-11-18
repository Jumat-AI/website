import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jumat.AI.ID — Komunitas Sharing AI Mingguan Indonesia",
  description:
    "Portal resmi jumat.ai.id: Komunitas sharing & belajar Artificial Intelligence daring setiap hari Jumat malam. Terbuka, gratis, dan ramah pemula maupun praktisi.",
  keywords: [
    "Jumat AI",
    "Komunitas AI Indonesia",
    "Sharing AI",
    "Webinar AI",
    "Machine Learning Indonesia",
    "LLM",
    "Agentic AI",
    "RAG",
    "Deep Learning",
  ],
  authors: [{ name: "Komunitas Jumat.AI" }],
  openGraph: {
    title: "Jumat.AI.ID — Komunitas Sharing AI Mingguan Indonesia",
    description:
      "Sesi sharing daring gratis seputar perkembangan Artificial Intelligence setiap Jumat malam pukul 20:00 WIB.",
    url: "https://jumat.ai.id",
    siteName: "Jumat.AI.ID",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-zinc-100 selection:bg-cyan-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
