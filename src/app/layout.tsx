import type { Metadata } from "next";
import { Inter_Tight, Inter } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "BCOMM Comunicação Inteligente",
  description:
    "Automação, integrações e agentes de IA construídos com engenharia de verdade. Soluções empresariais de tecnologia para empresas que precisam de resultados.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${interTight.variable} ${inter.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
