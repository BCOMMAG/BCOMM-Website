import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Solutions } from "@/components/Solutions";
import { About } from "@/components/About";
import { Process } from "@/components/Process";
import { Cases } from "@/components/Cases";
import { Contact } from "@/components/Contact";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Footer } from "@/components/Footer";
import { ScrollSequence } from "@/components/ScrollSequence";
import { FAQ } from "@/components/FAQ";
import { AIArchitecture } from "@/components/AIArchitecture";
import { faqItems } from "@/lib/constants";

export const metadata: Metadata = {
  title: "BCOMM | Criação de Websites, Landing Pages, E-commerce e Automação com IA",
  description:
    "Websites, landing pages, e-commerces e automações com IA para empresas que precisam de resultado. Fale com a BCOMM.",
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
  openGraph: {
    title: "BCOMM | Criação de Websites, Landing Pages, E-commerce e Automação com IA",
    description:
      "Websites, landing pages, e-commerces e automações com IA. Fale com a BCOMM.",
    url: "https://agent-bcomm.space",
    siteName: "BCOMM Comunicação Inteligente",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://agent-bcomm.space/og-image.png",
        width: 1200,
        height: 630,
        alt: "BCOMM — Criação de Websites, Landing Pages e Automação com IA",
      },
    ],
  },
};

export default function Home() {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "BCOMM Comunicação Inteligente",
    description:
      "Criação de websites, landing pages, e-commerces e automação com IA para empresas.",
    url: "https://agent-bcomm.space",
    email: "contato@agent-bcomm.space",
    telephone: "+554196398023",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Curitiba",
      addressRegion: "PR",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -25.4284,
      longitude: -49.2733,
    },
    areaServed: {
      "@type": "Country",
      name: "Brasil",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços BCOMM",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Criação de Websites Institucionais",
            description: "Sites modernos, rápidos e feitos para converter visitantes em clientes.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Landing Pages de Alta Conversão",
            description: "Páginas focadas em resultado para captação de leads e campanhas.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "E-commerce Personalizado",
            description: "Lojas virtuais que crescem com o negócio, do catálogo ao checkout.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Automação com IA",
            description: "Agentes inteligentes que automatizam processos e reduzem erros operacionais.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Integrações de Sistemas",
            description: "Conexão de ERP, CRM e ferramentas internas em um fluxo único de dados.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Atendimento Inteligente",
            description: "Chatbots e canais de suporte que resolvem, aprendem e crescem.",
          },
        },
      ],
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <ScrollSequence desktopFramesCount={192} mobileFramesCount={192} />
      <Header />
      <main>
        <Hero />
        <Solutions />
        <About />
        <Process />
        <Cases />
        <AIArchitecture />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
