import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import {
  developmentPlans,
  managementPlans,
  structureComparisonRows,
  managementComparisonRows,
  pricingFaq,
} from "@/lib/pricingData";

export const metadata: Metadata = {
  title: "Tabela de Preços e Planos Transparentes | BCOMM",
  description:
    "Conheça os planos de desenvolvimento e gestão da BCOMM. Websites profissionais a partir de R$ 597 e opções flexíveis de gestão contínua a partir de R$ 0/mês.",
  keywords: [
    "preços criação de sites",
    "quanto custa um site",
    "preço landing page",
    "planos de manutenção de site",
    "link bio instagram preço",
    "desenvolvimento web preços",
    "bcomm preços",
  ],
  openGraph: {
    title: "Tabela de Preços e Planos Transparentes | BCOMM",
    description:
      "Desenvolvimento de Websites a partir de R$ 597. Escolha sua estrutura e decida se quer ou não contratar gestão após a entrega.",
  },
};

const WHATSAPP_NUMBER = "554196398023";

function getWhatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export default function PrecosPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "PriceSpecification",
    name: "Tabela de Preços BCOMM",
    description: "Estruturas de desenvolvimento digital e planos de gestão contínua da BCOMM.",
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
              Escolha como quer começar sua presença digital
            </h1>

            <p className="mt-[18px] text-[16px] leading-[1.65] text-ash sm:text-[18px]">
              Separamos o investimento em duas decisões simples e sem pegadinhas: primeiro você escolhe a <strong>estrutura inicial do seu projeto</strong> e, após a entrega, decide com total liberdade se deseja ou não contratar <strong>gestão contínua</strong>.
            </p>

            {/* Atalhos Rápidos */}
            <div className="mt-[32px] flex flex-wrap items-center justify-center gap-[12px]">
              <a
                href="#desenvolvimento"
                className="inline-flex items-center gap-[6px] rounded-full border border-graphite bg-[#0e0e11] px-[18px] py-[10px] text-[13px] font-medium text-bone transition-colors hover:border-iris hover:text-white"
              >
                <span>1. Estrutura Inicial (R$ 597 a R$ 1.297)</span>
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                  <path d="M8 3v10M3 8l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="#gestao"
                className="inline-flex items-center gap-[6px] rounded-full border border-graphite bg-[#0e0e11] px-[18px] py-[10px] text-[13px] font-medium text-bone transition-colors hover:border-iris hover:text-white"
              >
                <span>2. Gestão Pós-Entrega (R$ 0 a R$ 297/mês)</span>
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                  <path d="M8 3v10M3 8l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>

          {/* ======================================================== */}
          {/* FASE 1: PLANOS DE DESENVOLVIMENTO (ESTRUTURA INICIAL)     */}
          {/* ======================================================== */}
          <section id="desenvolvimento" className="mt-[72px] md:mt-[96px] scroll-mt-28">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between border-b border-graphite pb-[24px]">
              <div>
                <span className="font-mono text-[12px] font-semibold text-iris uppercase tracking-wider">
                  Etapa 01 // Escolha Inicial
                </span>
                <h2 className="mt-[8px] text-[28px] font-normal leading-[1.2] tracking-[-0.04em] text-white sm:text-[38px]">
                  Planos de Desenvolvimento
                </h2>
                <p className="mt-[8px] text-[15px] text-ash">
                  Investimento único para criação, arquitetura, design sob medida e publicação global.
                </p>
              </div>
              <div className="mt-4 md:mt-0 font-mono text-[12px] text-neutral-400">
                Sem mensalidade obrigatória
              </div>
            </div>

            {/* Grid dos 3 Cards de Desenvolvimento */}
            <div className="mt-[36px] grid grid-cols-1 gap-[24px] lg:grid-cols-3">
              {developmentPlans.map((plan) => {
                const isHighlighted = plan.highlight;
                return (
                  <div
                    key={plan.id}
                    className={`relative flex flex-col justify-between rounded-[24px] p-[32px] transition-all duration-300 ${
                      isHighlighted
                        ? "border-2 border-iris bg-[#0f0e18] shadow-[0_0_40px_rgba(146,129,247,0.22)] lg:-translate-y-2"
                        : "border border-graphite bg-[#0b0b0c] hover:border-iron"
                    }`}
                  >
                    {/* Badge de Destaque */}
                    {plan.badge && (
                      <div className="absolute -top-[13px] left-1/2 -translate-x-1/2 rounded-full bg-iris px-[14px] py-[3px] text-center font-mono text-[10px] font-bold uppercase tracking-wider text-black shadow-md">
                        {plan.badge}
                      </div>
                    )}

                    <div>
                      {/* Topo do Card */}
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[12px] uppercase tracking-wider text-neutral-400">
                          {plan.tagline}
                        </span>
                        {isHighlighted && (
                          <span className="h-2 w-2 rounded-full bg-iris animate-pulse" />
                        )}
                      </div>

                      <h3 className="mt-[12px] text-[26px] font-semibold text-white">
                        {plan.name}
                      </h3>

                      <p className="mt-[8px] text-[13.5px] leading-[1.5] text-ash min-h-[42px]">
                        {plan.description}
                      </p>

                      {/* Bloco de Preço */}
                      <div className="mt-[24px] border-y border-graphite/70 py-[20px]">
                        <div className="flex items-baseline gap-[6px]">
                          <span className="text-[14px] font-normal text-neutral-400">R$</span>
                          <span
                            className={`font-mono text-[44px] font-bold leading-none tracking-tight ${
                              isHighlighted ? "text-iris" : "text-white"
                            }`}
                          >
                            {plan.price}
                          </span>
                        </div>
                        <span className="mt-[4px] block font-mono text-[11px] text-neutral-400">
                          Pagamento único no desenvolvimento
                        </span>
                      </div>

                      {/* Lista de Recursos */}
                      <div className="mt-[24px]">
                        <p className="font-mono text-[11px] uppercase tracking-wider text-neutral-400 font-semibold mb-3">
                          O que está incluído:
                        </p>
                        <ul className="flex flex-col gap-[10px]">
                          {plan.features.map((feat) => (
                            <li key={feat} className="flex items-start gap-[10px] text-[13.5px] text-bone">
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                className="shrink-0 mt-0.5 text-iris"
                              >
                                <path
                                  d="M3 8L7 12L13 4"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Itens que não fazem parte do plano (transparência total) */}
                        {plan.notIncluded && plan.notIncluded.length > 0 && (
                          <div className="mt-[18px] border-t border-graphite/40 pt-[14px]">
                            <ul className="flex flex-col gap-[8px]">
                              {plan.notIncluded.map((item) => (
                                <li key={item} className="flex items-center gap-[10px] text-[12.5px] text-neutral-500">
                                  <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    className="shrink-0 text-neutral-600"
                                  >
                                    <path
                                      d="M4 4L12 12M12 4L4 12"
                                      stroke="currentColor"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                    />
                                  </svg>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Botão de Contratação */}
                    <div className="mt-[32px]">
                      <a
                        href={getWhatsappLink(plan.whatsappMessage)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full inline-flex items-center justify-center gap-[8px] rounded-full px-[24px] py-[13px] text-[14px] font-semibold transition-all duration-200 active:scale-98 ${
                          isHighlighted
                            ? "bg-iris text-black hover:bg-white hover:text-black shadow-lg"
                            : "border border-graphite bg-[#121216] text-white hover:border-iris hover:bg-iris hover:text-black"
                        }`}
                      >
                        {plan.cta}
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                          <path
                            d="M6 3L11 8L6 13"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Tabela Comparativa dos Planos de Desenvolvimento */}
            <div className="mt-[48px] overflow-hidden rounded-[20px] border border-graphite bg-[#0b0b0c]">
              <div className="p-[20px] border-b border-graphite bg-[#0e0e11] flex items-center justify-between">
                <span className="font-mono text-[12px] font-semibold text-white uppercase tracking-wider">
                  Comparativo Detalhado de Desenvolvimento
                </span>
                <span className="font-mono text-[11px] text-ash">3 Estruturas</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-[14px]">
                  <thead>
                    <tr className="border-b border-graphite/70 text-neutral-400 font-mono text-[11px] uppercase">
                      <th className="p-[16px] md:p-[20px]">Recurso Incluso</th>
                      <th className="p-[16px] text-center">Essential (R$ 597)</th>
                      <th className="p-[16px] text-center text-iris font-semibold">Professional (R$ 897)</th>
                      <th className="p-[16px] text-center">Presença Digital (R$ 1.297)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-graphite/40 text-bone">
                    {structureComparisonRows.map((row) => (
                      <tr key={row.feature} className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-[16px] md:p-[20px] text-ash font-medium">{row.feature}</td>
                        <td className="p-[16px] text-center">
                          {row.essential ? (
                            <span className="inline-block text-emerald-400 font-bold">✓</span>
                          ) : (
                            <span className="inline-block text-neutral-600">—</span>
                          )}
                        </td>
                        <td className="p-[16px] text-center bg-iris/[0.03]">
                          {row.professional ? (
                            <span className="inline-block text-iris font-bold">✓</span>
                          ) : (
                            <span className="inline-block text-neutral-600">—</span>
                          )}
                        </td>
                        <td className="p-[16px] text-center">
                          {row.presenca ? (
                            <span className="inline-block text-emerald-400 font-bold">✓</span>
                          ) : (
                            <span className="inline-block text-neutral-600">—</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* ======================================================== */}
          {/* BANNER INTERMEDIÁRIO: A LIBERDADE DE ESCOLHA              */}
          {/* ======================================================== */}
          <div className="mt-[80px] md:mt-[110px] rounded-[28px] border border-graphite bg-gradient-to-r from-[#0b0b0c] via-[#12111d] to-[#0b0b0c] p-[32px] md:p-[52px] text-center shadow-lg">
            <span className="font-mono text-[11px] font-semibold text-iris uppercase tracking-widest">
              Transparência BCOMM
            </span>
            <h2 className="mt-[12px] text-[26px] font-semibold text-white sm:text-[34px]">
              Após a entrega, você escolhe com total liberdade como quer manter seu site
            </h2>
            <p className="mt-[14px] mx-auto max-w-[720px] text-[15px] leading-[1.65] text-ash sm:text-[17px]">
              Nada de ficar preso a contratos longos ou mensalidades forçadas. Você pode seguir sem gestão por <strong>R$ 0/mês</strong> ou contratar nossos planos de acompanhamento técnico contínuo para que nossa equipe cuide de tudo para você.
            </p>
          </div>

          {/* ======================================================== */}
          {/* FASE 2: PLANOS DE GESTÃO PÓS-ENTREGA                      */}
          {/* ======================================================== */}
          <section id="gestao" className="mt-[72px] md:mt-[96px] scroll-mt-28">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between border-b border-graphite pb-[24px]">
              <div>
                <span className="font-mono text-[12px] font-semibold text-iris uppercase tracking-wider">
                  Etapa 02 // Manutenção Opcional
                </span>
                <h2 className="mt-[8px] text-[28px] font-normal leading-[1.2] tracking-[-0.04em] text-white sm:text-[38px]">
                  Planos de Gestão Contínua
                </h2>
                <p className="mt-[8px] text-[15px] text-ash">
                  Você decide como quer manter sua plataforma: de R$ 0 por conta própria a planos com suporte ativo.
                </p>
              </div>
              <div className="mt-4 md:mt-0 font-mono text-[12px] text-emerald-400">
                Cancele ou altere a qualquer momento
              </div>
            </div>

            {/* Grid dos 4 Cards de Gestão */}
            <div className="mt-[36px] grid grid-cols-1 gap-[24px] md:grid-cols-2 lg:grid-cols-4">
              {managementPlans.map((plan) => {
                const isHighlighted = plan.highlight;
                return (
                  <div
                    key={plan.id}
                    className={`relative flex flex-col justify-between rounded-[22px] p-[28px] transition-all duration-300 ${
                      isHighlighted
                        ? "border-2 border-iris bg-[#0f0e18] shadow-[0_0_35px_rgba(146,129,247,0.2)]"
                        : "border border-graphite bg-[#0b0b0c] hover:border-iron"
                    }`}
                  >
                    {/* Badge */}
                    {plan.badge && (
                      <div className="absolute -top-[12px] left-1/2 -translate-x-1/2 rounded-full bg-iris px-[12px] py-[2px] font-mono text-[9px] font-bold uppercase tracking-wider text-black shadow-md">
                        {plan.badge}
                      </div>
                    )}

                    <div>
                      {/* Topo */}
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-400">
                          {plan.number} // {plan.tagline}
                        </span>
                        {isHighlighted && (
                          <span className="h-2 w-2 rounded-full bg-iris animate-pulse" />
                        )}
                      </div>

                      <h3 className="mt-[10px] text-[22px] font-semibold text-white">
                        {plan.name}
                      </h3>

                      <p className="mt-[8px] text-[13px] leading-[1.5] text-ash min-h-[40px]">
                        {plan.description}
                      </p>

                      {/* Bloco de Mensalidade */}
                      <div className="mt-[20px] border-y border-graphite/70 py-[16px]">
                        <div className="flex items-baseline gap-[4px]">
                          <span className="text-[13px] font-normal text-neutral-400">R$</span>
                          <span
                            className={`font-mono text-[38px] font-bold leading-none ${
                              isHighlighted ? "text-iris" : "text-white"
                            }`}
                          >
                            {plan.monthlyPrice}
                          </span>
                          <span className="text-[13px] font-normal text-neutral-400">/mês</span>
                        </div>
                        <span className="mt-[4px] block font-mono text-[10px] text-neutral-400">
                          {plan.isPaid ? "Sem contrato de fidelidade" : "Sem mensalidade recorrente"}
                        </span>
                      </div>

                      {/* Recursos da Gestão */}
                      <div className="mt-[20px]">
                        <ul className="flex flex-col gap-[9px]">
                          {plan.features.map((feat) => (
                            <li key={feat} className="flex items-start gap-[8px] text-[13px] text-bone">
                              <svg
                                width="14"
                                height="14"
                                viewBox="0 0 16 16"
                                fill="none"
                                className="shrink-0 mt-0.5 text-iris"
                              >
                                <path
                                  d="M3 8L7 12L13 4"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Caixa de Atenção do Domínio */}
                        {plan.domainNote && (
                          <div className="mt-[16px] rounded-[10px] border border-graphite/80 bg-[#141418] p-[12px] text-[11.5px] leading-[1.5] text-neutral-400">
                            <span className="font-semibold text-bone block mb-1">
                              {plan.isPaid ? "✦ Domínio Próprio Incluso" : "⚠️ Nota sobre Domínio"}
                            </span>
                            {plan.domainNote}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Botão de Ação */}
                    <div className="mt-[28px]">
                      <a
                        href={getWhatsappLink(plan.whatsappMessage)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full inline-flex items-center justify-center gap-[6px] rounded-full px-[18px] py-[11px] text-[13px] font-semibold transition-all duration-200 active:scale-98 ${
                          isHighlighted
                            ? "bg-iris text-black hover:bg-white hover:text-black shadow-md"
                            : "border border-graphite bg-[#121216] text-bone hover:border-iris hover:text-white"
                        }`}
                      >
                        {plan.cta}
                        <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                          <path
                            d="M6 3L11 8L6 13"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Tabela Comparativa de Gestão */}
            <div className="mt-[48px] overflow-hidden rounded-[20px] border border-graphite bg-[#0b0b0c]">
              <div className="p-[20px] border-b border-graphite bg-[#0e0e11] flex items-center justify-between">
                <span className="font-mono text-[12px] font-semibold text-white uppercase tracking-wider">
                  Comparativo de Níveis de Gestão
                </span>
                <span className="font-mono text-[11px] text-ash">Escada de Serviços</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-[13.5px]">
                  <thead>
                    <tr className="border-b border-graphite/70 text-neutral-400 font-mono text-[11px] uppercase">
                      <th className="p-[16px] md:p-[20px]">Serviço / Cobertura</th>
                      <th className="p-[16px] text-center">Sem Gestão (R$ 0)</th>
                      <th className="p-[16px] text-center">Essencial (R$ 97)</th>
                      <th className="p-[16px] text-center text-iris font-semibold">Presença (R$ 197)</th>
                      <th className="p-[16px] text-center">Crescimento (R$ 297)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-graphite/40 text-bone">
                    {managementComparisonRows.map((row) => (
                      <tr key={row.item} className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-[16px] md:p-[20px] text-ash font-medium">{row.item}</td>
                        <td className="p-[16px] text-center text-neutral-400 font-mono text-[12px]">{row.semGestao}</td>
                        <td className="p-[16px] text-center text-bone font-mono text-[12px]">{row.essencial}</td>
                        <td className="p-[16px] text-center text-iris font-mono text-[12px] bg-iris/[0.03] font-semibold">{row.presenca}</td>
                        <td className="p-[16px] text-center text-emerald-400 font-mono text-[12px]">{row.crescimento}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* ======================================================== */}
          {/* SEÇÃO 3: COMO FUNCIONA O PROCESSO EM 3 ETAPAS            */}
          {/* ======================================================== */}
          <section className="mt-[96px] md:mt-[120px]">
            <div className="text-center max-w-[680px] mx-auto">
              <span className="font-mono text-[12px] uppercase text-ash tracking-wider">
                Simples &amp; Sem Burocracia
              </span>
              <h2 className="mt-[8px] text-[32px] font-normal leading-[1.2] tracking-[-0.04em] text-white sm:text-[42px]">
                Como funciona a contratação
              </h2>
              <p className="mt-[12px] text-[15px] text-ash">
                O fluxo completo do primeiro contato até o seu site gerando contatos e autoridade.
              </p>
            </div>

            <div className="mt-[48px] grid grid-cols-1 gap-[24px] md:grid-cols-3">
              <div className="rounded-[20px] border border-graphite bg-[#0b0b0c] p-[32px]">
                <span className="font-mono text-[42px] font-normal text-graphite">01</span>
                <h3 className="mt-[12px] text-[19px] font-semibold text-white">
                  Escolha sua estrutura
                </h3>
                <p className="mt-[10px] text-[14px] leading-[1.6] text-ash">
                  Você define o plano inicial ideal para sua empresa (R$ 597, R$ 897 ou R$ 1.297) de acordo com os canais que você precisa ativar.
                </p>
              </div>

              <div className="rounded-[20px] border border-iris/40 bg-[#0e0d16] p-[32px] shadow-sm">
                <span className="font-mono text-[42px] font-normal text-iris">02</span>
                <h3 className="mt-[12px] text-[19px] font-semibold text-white">
                  Desenvolvimento &amp; Validação
                </h3>
                <p className="mt-[10px] text-[14px] leading-[1.6] text-ash">
                  Construímos o projeto com alta velocidade. Você testa, aprova cada detalhe no celular e recebe sua plataforma publicada no ar.
                </p>
              </div>

              <div className="rounded-[20px] border border-graphite bg-[#0b0b0c] p-[32px]">
                <span className="font-mono text-[42px] font-normal text-graphite">03</span>
                <h3 className="mt-[12px] text-[19px] font-semibold text-white">
                  Decida sobre a gestão
                </h3>
                <p className="mt-[10px] text-[14px] leading-[1.6] text-ash">
                  Com o site pronto, você tem total liberdade para seguir sem mensalidade (R$ 0) ou contratar um plano de suporte técnico e presença ativa.
                </p>
              </div>
            </div>
          </section>

          {/* ======================================================== */}
          {/* SEÇÃO 4: DÚVIDAS FREQUENTES (FAQ)                        */}
          {/* ======================================================== */}
          <section className="mt-[96px] md:mt-[120px]">
            <div className="text-center max-w-[680px] mx-auto">
              <span className="font-mono text-[12px] uppercase text-ash tracking-wider">
                Tire suas dúvidas
              </span>
              <h2 className="mt-[8px] text-[32px] font-normal leading-[1.2] tracking-[-0.04em] text-white sm:text-[42px]">
                Perguntas Frequentes sobre Preços
              </h2>
            </div>

            <div className="mt-[48px] max-w-[860px] mx-auto flex flex-col gap-[16px]">
              {pricingFaq.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-[16px] border border-graphite bg-[#0b0b0c] p-[24px] md:p-[28px]"
                >
                  <h3 className="text-[17px] font-semibold text-white">
                    {faq.q}
                  </h3>
                  <p className="mt-[10px] text-[14.5px] leading-[1.65] text-ash">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ======================================================== */}
          {/* BANNER FINAL DE FECHAMENTO                               */}
          {/* ======================================================== */}
          <div className="mt-[96px] rounded-[28px] border border-graphite bg-[#0b0b0c] p-[36px] text-center md:p-[60px]">
            <h2 className="text-[28px] font-semibold text-white sm:text-[38px]">
              Vamos colocar a presença digital da sua empresa em outro nível?
            </h2>
            <p className="mt-[14px] mx-auto max-w-[580px] text-[16px] text-ash">
              Fale diretamente com nossa equipe no WhatsApp. Analisamos sua necessidade e apresentamos o direcionamento exato para o seu negócio.
            </p>
            <div className="mt-[32px] flex flex-wrap items-center justify-center gap-[14px]">
              <a
                href={getWhatsappLink("Olá! Gostaria de conversar com um especialista da BCOMM para tirar dúvidas e iniciar o projeto da minha empresa.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-slide inline-flex items-center gap-[8px] rounded-full border border-iris/50 bg-iris/10 px-[28px] py-[14px] text-[15px] font-semibold text-white transition-all duration-200 hover:border-iris hover:bg-iris hover:text-black"
              >
                Conversar pelo WhatsApp
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M6 3L11 8L6 13"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <Link
                href="/servicos"
                className="inline-flex items-center gap-[8px] rounded-full border border-graphite bg-transparent px-[24px] py-[14px] text-[15px] text-bone transition-all duration-200 hover:border-white hover:bg-white hover:text-black"
              >
                Conhecer todos os serviços
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M6 3L11 8L6 13"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
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
