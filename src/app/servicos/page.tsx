import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { allServices } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Nossos Serviços | Websites, Landing Pages, E-commerce e Automação com IA",
  description:
    "Todos os serviços da BCOMM: criação de websites, landing pages, e-commerce personalizado, automação com IA, integrações e atendimento inteligente.",
  keywords: [
    "serviços de tecnologia",
    "criação de site",
    "landing page",
    "e-commerce",
    "automação com IA",
    "integração de sistemas",
    "atendimento inteligente",
    "desenvolvimento web Curitiba",
  ],
  openGraph: {
    title: "Serviços BCOMM | Websites, Landing Pages, E-commerce e Automação",
    description:
      "Websites, landing pages, e-commerce, automação com IA e integrações.",
  },
};

export default function ServicosPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Serviços BCOMM",
    description: "Todos os serviços da BCOMM: websites, landing pages, e-commerce, automação com IA.",
    url: "https://agent-bcomm.space/servicos",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Header />
      <main className="min-h-screen bg-void-black pt-[120px] pb-[96px]">
        <div className="mx-auto max-w-[1200px] px-[24px] md:px-[48px] lg:px-[80px]">
          <Breadcrumbs items={[{ label: "Serviços" }]} />

          <div className="mt-[32px]">
            <p className="font-mono text-[12px] uppercase tracking-[0.025em] text-ash">
              Serviços
            </p>
            <h1 className="mt-[8px] text-[36px] font-normal leading-[1.2] tracking-[-0.05em] text-white sm:text-[44px] md:text-[56px]">
              Do website à automação completa
            </h1>
            <p className="mt-[16px] max-w-[600px] text-[18px] leading-[1.5] text-ash">
              Cada serviço resolve um problema específico. Conheça o que a gente faz.
            </p>
          </div>

          <div className="mt-[64px] flex flex-col gap-[32px]">
            {allServices.map((service) => (
              <Link
                key={service.slug}
                href={`/servicos/${service.slug}`}
                className="group rounded-[16px] border border-graphite bg-[#0b0b0c] p-[32px] transition-all duration-500 hover:-translate-y-1 hover:border-iron hover:shadow-[0_8px_30px_rgba(255,255,255,0.08)] md:p-[48px]"
              >
                <div className="flex flex-col gap-[24px] md:flex-row md:items-start md:justify-between">
                  <div className="max-w-[600px]">
                    <h2 className="text-[24px] font-semibold text-white transition-colors group-hover:text-iris-glow md:text-[32px]">
                      {service.title}
                    </h2>
                    <p className="mt-[12px] text-[16px] leading-[1.6] text-ash">
                      {service.description}
                    </p>
                  </div>
                  <span className="inline-flex shrink-0 items-center gap-[6px] text-[14px] font-normal text-iris transition-colors group-hover:text-iris-glow">
                    Saiba mais
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>

                <div className="mt-[24px] grid grid-cols-1 gap-[8px] sm:grid-cols-2 lg:grid-cols-3">
                  {service.features.map((f) => (
                    <div key={f} className="flex items-center gap-[8px] text-[14px] text-ash">
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="shrink-0 text-iris">
                        <path d="M3 8L7 12L13 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {f}
                    </div>
                  ))}
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-[64px] rounded-[16px] border border-graphite bg-[#0b0b0c] p-[32px] text-center md:p-[48px]">
            <h2 className="text-[24px] font-semibold text-white md:text-[32px]">
              Não sabe qual serviço precisa?
            </h2>
            <p className="mt-[12px] text-[16px] text-ash">
              Agende uma conversa gratuita. A gente analisa sua necessidade e indica a melhor solução.
            </p>
            <Link
              href="/#contato"
              className="mt-[24px] inline-flex items-center gap-[8px] rounded-[9999px] border border-graphite bg-transparent px-[24px] py-[12px] text-[16px] text-white transition-all duration-200 hover:border-white hover:bg-white hover:text-black"
            >
              Agendar conversa
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
