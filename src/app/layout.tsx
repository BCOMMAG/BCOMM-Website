import type { Metadata } from "next";
import { Playfair_Display, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

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
    default: "BCOMM Comunicação Inteligente | Automação, IA e Integrações",
    template: "%s | BCOMM Comunicação Inteligente",
  },
  description:
    "Automação com IA, integrações de sistemas, atendimento inteligente e plataformas SaaS sob medida para empresas.",
  keywords: [
    "automação com IA",
    "integração de sistemas",
    "atendimento inteligente",
    "plataforma SaaS",
    "empresa de tecnologia",
    "agentes de IA para empresas",
    "automação de processos",
    "integração ERP CRM",
    "chatbot inteligente",
    "desenvolvimento de software sob medida",
    "soluções de comunicação empresarial",
    "tecnologia para empresas",
    "engenharia de software",
    "inteligência artificial empresarial",
    "BCOMM comunicação inteligente",
    "empresa de automação em Curitiba",
  ],
  authors: [{ name: "BCOMM Comunicação Inteligente" }],
  creator: "BCOMM Comunicação Inteligente",
  publisher: "BCOMM Comunicação Inteligente",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "BCOMM Comunicação Inteligente",
    title: "BCOMM Comunicação Inteligente | Automação, IA e Integrações",
    description:
      "Automação com IA, integrações e agentes inteligentes para empresas. Soluções de tecnologia com resultado mensurável.",
  },
  twitter: {
    card: "summary_large_image",
    title: "BCOMM Comunicação Inteligente | Automação, IA e Integrações",
    description:
      "Automação com IA, integrações e agentes inteligentes para empresas. Resultado mensurável.",
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
      "Empresa de tecnologia especializada em automação com IA, integrações de sistemas, atendimento inteligente e plataformas SaaS sob medida.",
    email: "contato@agent-bcomm.space",
    telephone: "+554196398023",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Curitiba",
      addressRegion: "PR",
      addressCountry: "BR",
    },
    areaSBR: "BR",
    sameAs: [],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "BCOMM Comunicação Inteligente",
    url: siteUrl,
    description:
      "Automação com IA, integrações e agentes inteligentes para empresas. Resultado mensurável.",
    inLanguage: "pt-BR",
  };

  return (
    <html
      lang="pt-BR"
      className={`${playfair.variable} ${inter.variable} ${jetbrains.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
