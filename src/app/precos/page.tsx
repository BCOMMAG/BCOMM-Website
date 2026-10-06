import type { Metadata } from "next";
import { Suspense } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PricingTabs } from "./PricingTabs";

export const metadata: Metadata = {
  title: "Tabela de Preços e Planos Transparentes | Websites & E-commerce | BCOMM",
  description:
    "Conheça os planos transparentes da BCOMM. Websites profissionais a partir de R$ 597 e Lojas Virtuais Sob Medida a partir de R$ 1.897 com gestão técnica especializada.",
  keywords: [
    "preços criação de sites",
    "quanto custa um site",
    "preço e-commerce",
    "preço loja virtual",
    "criar loja virtual sob medida",
    "preço landing page",
    "planos de manutenção de site",
    "gestão e-commerce vps",
    "link bio instagram preço",
    "desenvolvimento web preços",
    "bcomm preços",
  ],
  openGraph: {
    title: "Tabela de Preços e Planos Transparentes | BCOMM",
    description:
      "Websites a partir de R$ 597 e E-commerce Sob Medida a partir de R$ 1.897. Transparência comercial e alta performance.",
  },
};

export default function PrecosPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "PriceSpecification",
    name: "Tabela de Preços BCOMM",
    description: "Estruturas de desenvolvimento digital, lojas virtuais sob medida e planos de gestão contínua da BCOMM.",
    priceCurrency: "BRL",
    url: "https://agent-bcomm.space/precos",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="min-h-screen bg-void-black pt-[120px] pb-[96px]">
        <div className="mx-auto max-w-[1280px] px-[20px] md:px-[40px] lg:px-[64px]">
          <Breadcrumbs items={[{ label: "Preços & Planos" }]} />

          {/* ======================================================== */}
          {/* HEADER DA PÁGINA COM PROPOSTA DE VALOR                   */}
          {/* ======================================================== */}
          <div className="mt-[32px] text-center max-w-[840px] mx-auto">
            <div className="inline-flex items-center gap-[8px] rounded-full border border-iris/40 bg-iris/10 px-[14px] py-[5px]">
              <span className="h-[6px] w-[6px] rounded-full bg-iris animate-pulse" />
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-iris">
                Transparência Comercial BCOMM
              </p>
            </div>

            <h1 className="mt-[16px] text-[36px] font-normal leading-[1.15] tracking-[-0.05em] text-white sm:text-[46px] md:text-[58px]">
              Escolha a estrutura ideal para sua presença e vendas online
            </h1>

            <p className="mt-[18px] text-[16px] leading-[1.65] text-ash sm:text-[18px]">
              Planos objetivos e transparentes: selecione entre <strong>Websites Institucionais</strong> para autoridade de marca ou <strong>Lojas Virtuais Sob Medida</strong> para vender com catálogo próprio e controle total da sua operação.
            </p>
          </div>

          <Suspense
            fallback={
              <div className="mt-16 flex justify-center">
                <div className="inline-flex items-center gap-3 rounded-full border border-graphite bg-[#0e0e12] px-6 py-3 text-ash font-mono text-[13px]">
                  <span className="h-2 w-2 rounded-full bg-iris animate-ping" />
                  Carregando planos e opções...
                </div>
              </div>
            }
          >
            <PricingTabs />
          </Suspense>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
