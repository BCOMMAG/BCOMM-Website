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

export const metadata: Metadata = {
  title: "BCOMM Comunicação Inteligente | Automação, IA e Integrações",
  description:
    "Automação com IA, integrações e agentes inteligentes para empresas. Soluções de tecnologia com resultado mensurável. Fale conosco.",
  keywords: [
    "automação com IA",
    "integração de sistemas",
    "atendimento inteligente",
    "plataforma SaaS",
    "empresa de tecnologia Curitiba",
    "agentes de IA",
    "automação de processos",
    "chatbot inteligente",
    "desenvolvimento de software",
  ],
  openGraph: {
    title: "BCOMM Comunicação Inteligente | Automação, IA e Integrações",
    description:
      "Automação com IA, integrações e agentes inteligentes para empresas. Soluções de tecnologia com resultado mensurável.",
    url: "https://agent-bcomm.space",
    siteName: "BCOMM Comunicação Inteligente",
    locale: "pt_BR",
    type: "website",
  },
};

export default function Home() {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "BCOMM Comunicação Inteligente",
    description:
      "Empresa de tecnologia especializada em automação com IA, integrações de sistemas, atendimento inteligente e plataformas SaaS sob medida.",
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
      name: "Soluções BCOMM",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Automação com IA",
            description: "Agentes inteligentes que automatizam processos repetitivos e reduzem erros operacionais.",
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
            description: "Chatbots e canais de suporte que resolvem, aprendem e escalam.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Plataformas SaaS sob Medida",
            description: "Soluções personalizadas do MVP ao enterprise com arquitetura escalável.",
          },
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <Solutions />
        <About />
        <Process />
        <Cases />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
