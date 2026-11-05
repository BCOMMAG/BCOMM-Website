import type { Metadata } from "next";
import { Suspense } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PricingTabs } from "./PricingTabs";

export const metadata: Metadata = {
  title: "Planos e Soluções Sob Medida | Websites, E-commerce e Automação | BCOMM",
  description:
    "Soluções digitais sob medida da BCOMM: Websites com Link Bio integrado, Lojas Virtuais Personalizadas e Automação de Processos com Inteligência Artificial. Orçamentos transparentes.",
  keywords: [
    "soluções websites sob medida",
    "criar website profissional",
    "e-commerce personalizado",
    "loja virtual sob medida",
    "automação com IA",
    "agentes de IA atendimento",
    "link bio instagram próprio",
    "desenvolvimento web internacional",
    "bcomm soluções",
  ],
  openGraph: {
    title: "Planos e Soluções Sob Medida | BCOMM",
    description:
      "Websites com Link Bio, E-commerce Sob Medida e Automação com IA para empresas no Brasil e no exterior.",
  },
};

export default function PrecosPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "Soluções e Entregas BCOMM",
    description: "Estruturas de desenvolvimento web, lojas virtuais sob medida e automação com inteligência artificial.",
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
          <Breadcrumbs items={[{ label: "Soluções & Planos" }]} />

          {/* ======================================================== */}
          {/* HEADER DA PÁGINA COM PROPOSTA DE VALOR                   */}
          {/* ======================================================== */}
          <div className="mt-[32px] text-center max-w-[840px] mx-auto">
            <div className="inline-flex items-center gap-[8px] rounded-full border border-iris/40 bg-iris/10 px-[14px] py-[5px]">
              <span className="h-[6px] w-[6px] rounded-full bg-iris animate-pulse" />
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-iris">
                Escopos de Entrega BCOMM
              </p>
            </div>

            <h1 className="mt-[16px] text-[36px] font-normal leading-[1.15] tracking-[-0.05em] text-white sm:text-[46px] md:text-[58px]">
              Soluções sob medida para a presença e escala do seu negócio
            </h1>

            <p className="mt-[18px] text-[16px] leading-[1.65] text-ash sm:text-[18px]">
              Conheça nossas estruturas de entrega: <strong>Website com Link Bio</strong> para autoridade de marca, <strong>E-commerce Sob Medida</strong> para vender com catálogo próprio ou <strong>Sistemas Customizados com IA</strong> para máxima eficiência operacional.
            </p>
          </div>

          <Suspense
            fallback={
              <div className="mt-16 flex justify-center">
                <div className="inline-flex items-center gap-3 rounded-full border border-graphite bg-[#0e0e12] px-6 py-3 text-ash font-mono text-[13px]">
                  <span className="h-2 w-2 rounded-full bg-iris animate-ping" />
                  Carregando soluções e escopos...
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
