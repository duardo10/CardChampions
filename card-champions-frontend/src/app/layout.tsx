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
  title: "Card Champions - Copa do Mundo 2026",
  description: "Colecione cartas dos jogadores da Copa do Mundo 2026. Monte sua escalação dos sonhos e compete com amigos neste jogo de cartas colecionáveis digital.",
  keywords: "copa do mundo, cartas colecionáveis, futebol, 2026, jogo, coleção",
  authors: [{ name: "Card Champions Team" }],
  openGraph: {
    title: "Card Champions - Copa do Mundo 2026",
    description: "Colecione cartas dos jogadores da Copa do Mundo 2026",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Card Champions - Copa do Mundo 2026",
    description: "Colecione cartas dos jogadores da Copa do Mundo 2026",
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
