import type { Metadata } from "next";
import { Playfair_Display, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/LenisProvider";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: "400",
});

const siteUrl = "https://agent-bcomm.space";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "BCOMM | Criação de Websites, Landing Pages, E-commerce e Automação com IA",
    template: "%s | BCOMM Comunicação Inteligente",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    other: [
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  description:
    "Websites, landing pages, e-commerces e automações com IA. BCOMM Comunicação Inteligente, Curitiba.",
  keywords: [
    "criação de site",
    "criação de website",
    "desenvolvimento de site",
    "landing page",
    "página de vendas",
    "e-commerce",
    "loja virtual",
    "loja online",
    "automação com IA",
    "inteligência artificial para empresas",
    "integração de sistemas",
    "atendimento inteligente",
    "chatbot",
    "desenvolvimento web",
    "empresa de tecnologia Curitiba",
    "agência digital Curitiba",
    "criação de site Curitiba",
    "desenvolvimento de software sob medida",
  ],
  authors: [{ name: "BCOMM Comunicação Inteligente" }],
  creator: "BCOMM Comunicação Inteligente",
  publisher: "BCOMM Comunicação Inteligente",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "BCOMM Comunicação Inteligente",
    title: "BCOMM | Criação de Websites, Landing Pages, E-commerce e Automação com IA",
    description:
      "Websites, landing pages, e-commerces e automações com IA para empresas.",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "BCOMM — Criação de Websites, Landing Pages e Automação com IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BCOMM | Criação de Websites, Landing Pages, E-commerce e Automação com IA",
    description:
      "Websites, landing pages, e-commerces e automações com IA para empresas.",
    images: [`${siteUrl}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "BCOMM Comunicação Inteligente",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description:
      "Criação de websites, landing pages, e-commerces e automação com IA para empresas.",
    email: "contato@agent-bcomm.space",
    telephone: "+554196398023",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Curitiba",
      addressRegion: "PR",
      addressCountry: "BR",
    },
    areaServed: "BR",
    sameAs: [
      "https://www.instagram.com/bcomm.br",
      "https://www.facebook.com/bcommagent",
    ],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "BCOMM Comunicação Inteligente",
    url: siteUrl,
    description:
      "Websites, landing pages, e-commerces e automações com IA para empresas.",
    inLanguage: "pt-BR",
  };

  return (
    <html
      lang="pt-BR"
      className={`${playfair.variable} ${inter.variable} ${jetbrains.variable} antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
