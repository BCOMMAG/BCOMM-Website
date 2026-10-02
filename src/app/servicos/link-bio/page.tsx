import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Criação de Link Bio Instagram Profissional | BCOMM",
  description:
    "Página de links personalizada para a bio do Instagram e redes sociais. Design exclusivo, abertura instantânea, integração com WhatsApp e alta conversão.",
  keywords: [
    "link bio instagram",
    "criação de link de bio",
    "link bio profissional",
    "página de links personalizada",
    "cartão de visitas digital",
    "link para instagram",
    "link na bio",
    "linktree personalizado",
    "agência digital Curitiba",
  ],
  openGraph: {
    title: "Criação de Link Bio Instagram Profissional | BCOMM",
    description:
      "Transforme sua bio do Instagram em um canal direto de vendas com uma página de links veloz e 100% personalizada.",
  },
};

const features = [
  {
    title: "Identidade Visual 100% Exclusiva",
    description:
      "Design alinhado com a paleta de cores, tipografia e logotipo da sua marca. Sem templates genéricos ou marcas d'água de terceiros que enfraquecem sua credibilidade.",
  },
  {
    title: "Abertura Instantânea no Celular",
    description:
      "Carregamento sub-segundo otimizado para redes móveis 4G/5G. Seu cliente não espera nem desiste antes de ver suas ofertas.",
  },
  {
    title: "Direcionamento Estratégico no WhatsApp",
    description:
      "Botões inteligentes que iniciam conversas com mensagens pré-formatadas para orçamentos, pedidos ou suporte imediato.",
  },
  {
    title: "Organização por Prioridade & Categorias",
    description:
      "Apresente seus principais serviços, promoções sazonais, catálogo e canais de contato de forma hierárquica e sem poluição visual.",
  },
  {
    title: "Métricas & Rastreamento Avançado",
    description:
      "Integração nativa com Meta Pixel e Google Analytics para mensurar cliques reais e otimizar campanhas de tráfego pago.",
  },
  {
    title: "Domínio Próprio & Liberdade Total",
    description:
      "Publique no seu próprio domínio ou utilize nosso link de alta velocidade. Sem mensalidades abusivas nem bloqueios de cliques.",
  },
];

const process = [
  {
    step: "01",
    title: "Mapeamento dos Links",
    description:
      "Identificamos os links prioritários, canais de atendimento, catálogo e os objetivos comerciais da sua bio.",
  },
  {
    step: "02",
    title: "Design & Identidade",
    description:
      "Desenhamos uma interface sob medida alinhada à autoridade da sua marca e ao comportamento do seu seguidor no celular.",
  },
  {
    step: "03",
    title: "Engenharia & Performance",
    description:
      "Construção com tecnologia Next.js em Edge Global, garantindo que o link abra num piscar de olhos no smartphone.",
  },
  {
    step: "04",
    title: "Rastreamento & Pixels",
    description:
      "Configuração de pixels do Meta Ads, Google Analytics e eventos de conversão em cada botão para alimentar seu tráfego.",
  },
  {
    step: "05",
    title: "Publicação & Entrega",
    description:
      "Link publicado e pronto para uso no Instagram, WhatsApp e redes sociais em até 48 horas úteis, com suporte ativo.",
  },
];

export default function LinkBioPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Criação de Link Bio Instagram",
    provider: {
      "@type": "Organization",
      name: "BCOMM Comunicação Inteligente",
    },
    description:
      "Página de links personalizada para bio do Instagram com carregamento ultrarrápido, design exclusivo e integração com WhatsApp.",
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
          <Breadcrumbs
            items={[
              { label: "Serviços", href: "/servicos" },
              { label: "Link Bio Instagram" },
            ]}
          />

          {/* Cabeçalho do Serviço */}
          <div className="mt-[32px]">
            <div className="inline-flex items-center gap-[8px] rounded-full border border-iris/40 bg-iris/10 px-[12px] py-[4px]">
              <span className="h-[6px] w-[6px] rounded-full bg-iris animate-pulse" />
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-iris">
                Bio de Alta Conversão
              </p>
            </div>
            <h1 className="mt-[16px] text-[36px] font-normal leading-[1.15] tracking-[-0.05em] text-white sm:text-[44px] md:text-[56px]">
              Sua bio do Instagram transformada em um canal direto de vendas
            </h1>
            <p className="mt-[16px] max-w-[680px] text-[18px] leading-[1.6] text-ash">
              Substitua links lentos e genéricos por uma página moderna com a identidade exclusiva da sua marca, abertura imediata no celular e atalhos estratégicos para o WhatsApp.
            </p>

            {/* Ações Rápidas */}
            <div className="mt-[32px] flex flex-wrap items-center gap-[14px]">
              <Link
                href="/#contato"
                className="btn-slide inline-flex items-center gap-[8px] rounded-[9999px] border border-iris/50 bg-iris/10 px-[24px] py-[12px] text-[15px] font-medium text-white transition-all duration-200 hover:border-iris hover:bg-iris hover:text-black"
              >
                Solicitar proposta
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link
                href="/links"
                className="inline-flex items-center gap-[8px] rounded-[9999px] border border-graphite bg-[#0b0b0c] px-[22px] py-[12px] text-[15px] font-normal text-bone transition-all duration-200 hover:border-white hover:bg-white hover:text-black"
              >
                Ver demonstração ao vivo
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Banner de Demonstração / Submenu Highlight */}
          <div className="mt-[64px] rounded-[24px] border border-iris/30 bg-gradient-to-r from-iris/10 via-[#0b0b0c] to-[#0b0b0c] p-[32px] md:p-[48px]">
            <div className="flex flex-col gap-[24px] md:flex-row md:items-center md:justify-between">
              <div className="max-w-[620px]">
                <span className="font-mono text-[12px] font-semibold uppercase tracking-wider text-iris">
                  Experiência Real
                </span>
                <h2 className="mt-[8px] text-[24px] font-semibold text-white md:text-[30px]">
                  Veja nossa Central de Links em funcionamento
                </h2>
                <p className="mt-[8px] text-[15px] leading-[1.6] text-ash">
                  Experimente você mesmo a velocidade, a responsividade e o acabamento visual da nossa página oficial de links na bio acessível em qualquer dispositivo.
                </p>
              </div>
              <div className="shrink-0">
                <Link
                  href="/links"
                  className="inline-flex items-center gap-[8px] rounded-[9999px] bg-white px-[24px] py-[13px] text-[14px] font-semibold text-neutral-950 shadow-md transition-all duration-200 hover:bg-iris hover:text-black active:scale-95"
                >
                  Acessar Central de Links
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Grid de Benefícios / Diferenciais */}
          <div className="mt-[64px] grid grid-cols-1 gap-[24px] sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-[16px] border border-graphite bg-[#0b0b0c] p-[32px] transition-all duration-300 hover:border-iron hover:shadow-[0_8px_30px_rgba(255,255,255,0.06)]"
              >
                <div className="flex items-center gap-[8px]">
                  <span className="h-[8px] w-[8px] rounded-full bg-iris" />
                  <h3 className="text-[18px] font-semibold text-white">{f.title}</h3>
                </div>
                <p className="mt-[12px] text-[14px] leading-[1.6] text-ash">{f.description}</p>
              </div>
            ))}
          </div>

          {/* Etapas de Trabalho */}
          <div className="mt-[96px]">
            <p className="font-mono text-[12px] uppercase tracking-[0.025em] text-ash">
              Fluxo Ágil
            </p>
            <h2 className="mt-[8px] text-[36px] font-normal leading-[1.2] tracking-[-0.05em] text-white sm:text-[44px]">
              Como criamos seu Link de Bio
            </h2>
            <div className="mt-[48px] flex flex-col gap-[32px] md:grid md:grid-cols-5 md:gap-[16px]">
              {process.map((s) => (
                <div key={s.step} className="rounded-[12px] border border-graphite/60 bg-[#0b0b0c]/60 p-[20px]">
                  <span className="font-mono text-[42px] font-normal leading-[1] text-graphite">{s.step}</span>
                  <h3 className="mt-[12px] text-[17px] font-medium text-white">{s.title}</h3>
                  <p className="mt-[6px] text-[13px] leading-[1.5] text-ash">{s.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bloco de Chamada Final */}
          <div className="mt-[96px] rounded-[24px] border border-graphite bg-[#0b0b0c] p-[36px] text-center md:p-[56px]">
            <h2 className="text-[26px] font-semibold text-white md:text-[34px]">
              Pronto para elevar o padrão da sua bio no Instagram?
            </h2>
            <p className="mt-[12px] mx-auto max-w-[540px] text-[16px] text-ash">
              Solicite uma proposta personalizada e receba o diagnóstico completo para transformar seguidores casuais em clientes qualificados.
            </p>
            <div className="mt-[28px] flex flex-wrap items-center justify-center gap-[12px]">
              <Link
                href="/#contato"
                className="btn-slide inline-flex items-center gap-[8px] rounded-[9999px] border border-iris/50 bg-iris/10 px-[26px] py-[13px] text-[15px] font-medium text-white transition-all duration-200 hover:border-iris hover:bg-iris hover:text-black"
              >
                Solicitar Proposta Agora
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link
                href="/links"
                className="inline-flex items-center gap-[8px] rounded-[9999px] border border-graphite bg-transparent px-[22px] py-[13px] text-[15px] text-bone transition-all duration-200 hover:border-white hover:bg-white hover:text-black"
              >
                Explorar Exemplo
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
