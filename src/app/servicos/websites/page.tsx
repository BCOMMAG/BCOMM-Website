import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Criação de Websites e Landing Pages | BCOMM",
  description:
    "Criamos websites institucionais e landing pages de alta conversão. Design responsivo, SEO otimizado, performance impecável. Fale com a BCOMM.",
  keywords: [
    "criação de site",
    "criação de website",
    "desenvolvimento de site",
    "landing page",
    "página de vendas",
    "site institucional",
    "desenvolvimento web",
    "site responsivo",
    "SEO",
    "criação de site Curitiba",
  ],
  openGraph: {
    title: "Criação de Websites e Landing Pages | BCOMM",
    description:
      "Websites institucionais e landing pages que convertem. Design sob medida com performance e SEO.",
  },
};

const features = [
  {
    title: "Design Responsivo Sob Medida",
    description: "Layouts exclusivos que funcionam perfeitamente em desktop, tablet e mobile. Sem templates genéricos.",
  },
  {
    title: "SEO Técnico Impecável",
    description: "Estrutura otimizada para mecanismos de busca: meta tags, schema, velocidade, Core Web Vitals.",
  },
  {
    title: "Performance Extrema",
    description: "Sites que carregam em menos de 2 segundos. Otimização de imagens, código e infraestrutura.",
  },
  {
    title: "Copy que Converte",
    description: "Textos focados em resultado, baseados em dados e testes. Cada palavra justifica sua existência.",
  },
  {
    title: "Integrações Completas",
    description: "Formulários, analytics, pixels de rastreamento, WhatsApp, CRM — tudo conectado.",
  },
  {
    title: "CMS Para Você Atualizar",
    description: "Painel administrativo para atualizar conteúdo sem depender de desenvolvedor.",
  },
];

const process = [
  { step: "01", title: "Discovery", description: "Entendemos seu negócio, público e objetivos. Definimos métricas de sucesso." },
  { step: "02", title: "UX & Copy", description: "Arquitetura da informação, wireframes e copy focada em conversão." },
  { step: "03", title: "Design", description: "Visual exclusivo alinhado com sua marca. Protótipo interativo para validação." },
  { step: "04", title: "Desenvolvimento", description: "Código limpo, performático e acessível. Testes em múltiplos dispositivos." },
  { step: "05", title: "Lançamento", description: "Deploy, configuração de domínio, SSL e monitoramento. Site no ar em semanas." },
];

export default function WebsitesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Criação de Websites e Landing Pages",
    provider: {
      "@type": "Organization",
      name: "BCOMM Comunicação Inteligente",
    },
    description: "Websites institucionais e landing pages de alta conversão com design responsivo, SEO e performance.",
    areaServed: "BR",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="min-h-screen bg-void-black pt-[120px] pb-[96px]">
        <div className="mx-auto max-w-[1200px] px-[24px] md:px-[48px] lg:px-[80px]">
          <Breadcrumbs items={[{ label: "Serviços", href: "/servicos" }, { label: "Websites & Landing Pages" }]} />

          <div className="mt-[32px]">
            <p className="font-mono text-[12px] uppercase tracking-[0.025em] text-ash">
              Websites & Landing Pages
            </p>
            <h1 className="mt-[8px] text-[36px] font-normal leading-[1.2] tracking-[-0.05em] text-white sm:text-[44px] md:text-[56px]">
              Sites que convertem visitantes em clientes
            </h1>
            <p className="mt-[16px] max-w-[600px] text-[18px] leading-[1.5] text-ash">
              Criamos websites institucionais e landing pages com design exclusivo, performance extrema e SEO técnico para que seu negócio seja encontrado e converta.
            </p>
          </div>

          <div className="mt-[64px] grid grid-cols-1 gap-[24px] sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="rounded-[16px] border border-graphite bg-[#0b0b0c] p-[32px]">
                <h3 className="text-[18px] font-semibold text-white">{f.title}</h3>
                <p className="mt-[8px] text-[14px] leading-[1.6] text-ash">{f.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-[96px]">
            <h2 className="text-[36px] font-normal leading-[1.2] tracking-[-0.05em] text-white sm:text-[44px]">
              Como trabalhamos
            </h2>
            <div className="mt-[48px] flex flex-col gap-[32px] md:grid md:grid-cols-5 md:gap-[16px]">
              {process.map((s) => (
                <div key={s.step}>
                  <span className="font-mono text-[48px] font-normal leading-[1] text-graphite">{s.step}</span>
                  <h3 className="mt-[8px] text-[18px] font-medium text-white">{s.title}</h3>
                  <p className="mt-[4px] text-[14px] leading-[1.5] text-ash">{s.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-[96px] rounded-[16px] border border-graphite bg-[#0b0b0c] p-[32px] text-center md:p-[48px]">
            <h2 className="text-[24px] font-semibold text-white md:text-[32px]">
              Pronto para criar seu website?
            </h2>
            <p className="mt-[12px] text-[16px] text-ash">
              Agende uma conversa gratuita. Vamos entender seu projeto e apresentar a melhor solução.
            </p>
            <Link
              href="/#contato"
              className="mt-[24px] inline-flex items-center gap-[8px] rounded-[9999px] border border-graphite bg-transparent px-[24px] py-[12px] text-[16px] text-white transition-all duration-200 hover:border-white hover:bg-white hover:text-black"
            >
              Solicitar orçamento
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
