import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { cases } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Cases de Sucesso | Resultados Reais da BCOMM",
  description:
    "Veja como empresas reduziram custos, aumentaram conversões e escalam operações com as soluções da BCOMM. Cases com métricas reais.",
  keywords: [
    "cases de sucesso",
    "resultados BCOMM",
    "automação com IA resultados",
    "e-commerce sucesso",
    "landing page conversão",
  ],
  openGraph: {
    title: "Cases de Sucesso | BCOMM",
    description: "Resultados reais de empresas que confiaram na BCOMM.",
  },
};

export default function CasesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Cases de Sucesso BCOMM",
    description: "Resultados reais de empresas que usaram as soluções da BCOMM.",
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
          <Breadcrumbs items={[{ label: "Cases" }]} />

          <div className="mt-[32px]">
            <p className="font-mono text-[12px] uppercase tracking-[0.025em] text-ash">
              Cases de Sucesso
            </p>
            <h1 className="mt-[8px] text-[36px] font-normal leading-[1.2] tracking-[-0.05em] text-white sm:text-[44px] md:text-[56px]">
              Resultados que falam por si
            </h1>
            <p className="mt-[16px] max-w-[600px] text-[18px] leading-[1.5] text-ash">
              Empresas que confiaram na BCOMM e transformaram suas operações com tecnologia e inteligência artificial.
            </p>
          </div>

          <div className="mt-[64px] flex flex-col gap-[24px]">
            {cases.map((c, i) => (
              <div
                key={i}
                className="rounded-[16px] border border-graphite bg-[#0b0b0c] p-[32px] transition-all duration-500 hover:border-iron md:p-[48px]"
              >
                <div className="flex flex-col gap-[24px] md:flex-row md:items-start md:justify-between">
                  <div className="max-w-[600px]">
                    <div className="flex items-center gap-[12px]">
                      <span className="font-mono text-[48px] font-normal leading-[1] text-iris md:text-[56px]">
                        {c.metric}
                      </span>
                      <span className="rounded-[9999px] border border-graphite px-[12px] py-[4px] font-mono text-[11px] uppercase text-ash">
                        {c.service}
                      </span>
                    </div>
                    <h2 className="mt-[12px] text-[24px] font-medium text-white md:text-[28px]">
                      {c.label}
                    </h2>
                    <p className="mt-[8px] text-[16px] leading-[1.6] text-ash">
                      {c.description}
                    </p>
                    <p className="mt-[16px] font-mono text-[12px] uppercase text-charcoal">
                      {c.client}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-[64px] rounded-[16px] border border-graphite bg-[#0b0b0c] p-[32px] text-center md:p-[48px]">
            <h2 className="text-[24px] font-semibold text-white md:text-[32px]">
              Quer resultados assim?
            </h2>
            <p className="mt-[12px] text-[16px] text-ash">
              Agende uma conversa gratuita. Vamos analisar como a tecnologia pode gerar impacto no seu negócio.
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
