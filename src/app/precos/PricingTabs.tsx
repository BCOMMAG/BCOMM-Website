"use client";

import Link from "next/link";
import { useTranslation } from "@/context/LocaleContext";
import {
  solutionProducts,
  scopeComparisonRows,
  scopeFaq,
} from "@/lib/pricingData";

const WHATSAPP_NUMBER = "554196398023";

function getWhatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function PricingTabs() {
  const { dict, locale } = useTranslation();
  const pricingText = dict.pricingPage;

  return (
    <div className="mt-12">
      {/* ======================================================== */}
      {/* 3 CARDS DE SOLUÇÕES PRINCIPAIS                            */}
      {/* ======================================================== */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {solutionProducts.map((p) => {
          const isHighlight = p.highlight;
          const mailtoSubject = encodeURIComponent(
            locale === "en"
              ? `Quote Request BCOMM: ${p.name}`
              : locale === "es"
              ? `Presupuesto BCOMM: ${p.name}`
              : locale === "fr"
              ? `Devis BCOMM: ${p.name}`
              : `Orçamento BCOMM: ${p.name}`
          );

          const mailtoBody = encodeURIComponent(
            locale === "en"
              ? `Hello BCOMM Team!\n\nI would like to request a proposal for: ${p.name}.\n\nCompany / Country:\nProject details:\n`
              : locale === "es"
              ? `¡Hola equipo de BCOMM!\n\nMe gustaría solicitar una propuesta para: ${p.name}.\n\nEmpresa / País:\nDetalles del proyecto:\n`
              : locale === "fr"
              ? `Bonjour l'équipe BCOMM!\n\nJe souhaite obtenir un devis pour: ${p.name}.\n\nEntreprise / Pays:\nDétails du projet:\n`
              : `Olá equipe BCOMM!\n\nGostaria de solicitar uma proposta comercial para a solução: ${p.name}.\n\nEmpresa / País:\nDetalhes da demanda:\n`
          );

          const mailtoLink = `mailto:contato@agent-bcomm.space?subject=${mailtoSubject}&body=${mailtoBody}`;

          return (
            <div
              key={p.id}
              className={`relative flex flex-col justify-between rounded-[24px] border p-8 transition-all duration-300 md:p-10 ${
                isHighlight
                  ? "border-iris/60 bg-[#101018] shadow-[0_0_50px_rgba(146,129,247,0.12)] ring-1 ring-iris/40"
                  : "border-graphite bg-[#0b0b0f] hover:border-iron hover:bg-[#0e0e14]"
              }`}
            >
              {/* Badge superior */}
              {p.badge && (
                <div className="absolute -top-3.5 left-8">
                  <span
                    className={`rounded-full px-3.5 py-1 font-mono text-[11px] font-semibold tracking-wider uppercase ${
                      isHighlight
                        ? "bg-iris text-white shadow-md"
                        : "border border-graphite bg-[#16161e] text-ash"
                    }`}
                  >
                    {isHighlight ? pricingText.cardBadgePopular : p.badge}
                  </span>
                </div>
              )}

              {/* Cabeçalho do Card */}
              <div>
                <div className="mt-2">
                  <span className="font-mono text-[12px] uppercase tracking-wider text-iris">
                    {p.tagline}
                  </span>
                  <h2 className="mt-2 text-[26px] font-medium leading-[1.25] text-white">
                    {p.name}
                  </h2>
                </div>

                <p className="mt-4 text-[14.5px] leading-[1.65] text-ash">
                  {p.description}
                </p>

                {/* Bloco de Orçamento Sob Medida */}
                <div className="mt-6 rounded-2xl border border-graphite/80 bg-black/40 p-5">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[12px] uppercase text-ash">
                      {pricingText.commercialModel}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[11px] font-medium text-emerald-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {pricingText.immediateService}
                    </span>
                  </div>
                  <p className="mt-2 text-[22px] font-semibold text-white">
                    {pricingText.customQuote}
                  </p>
                  <p className="mt-1 text-[12.5px] text-ash leading-relaxed">
                    {pricingText.customQuoteDesc}
                  </p>
                </div>

                {/* Checklist de Recursos */}
                <div className="mt-8">
                  <p className="font-mono text-[12px] font-semibold uppercase tracking-wider text-white">
                    {pricingText.includedTitle}
                  </p>
                  <ul className="mt-4 space-y-3">
                    {p.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-3 text-[14px] text-bone">
                        <svg
                          className="mt-0.5 h-4 w-4 shrink-0 text-iris"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M13.3334 4L6.00008 11.3333L2.66675 8"
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
                </div>

                {/* Box de Entregáveis */}
                <div className="mt-8 rounded-xl border border-neutral-800/80 bg-neutral-900/40 p-4">
                  <p className="font-mono text-[11px] uppercase tracking-wider text-iris font-semibold">
                    {pricingText.deliverablesTitle}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.deliverables.map((del) => (
                      <span
                        key={del}
                        className="rounded-lg border border-graphite/60 bg-[#14141c] px-2.5 py-1 font-mono text-[11.5px] text-ash"
                      >
                        {del}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Botões de Ação Duplo (WhatsApp + E-mail) */}
              <div className="mt-8 pt-6 border-t border-graphite/70 flex flex-col gap-3">
                <a
                  href={getWhatsappLink(p.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2.5 rounded-full py-3.5 px-6 font-medium text-[15px] transition-all duration-200 active:scale-98 ${
                    isHighlight
                      ? "bg-iris text-black hover:bg-iris-glow shadow-[0_0_20px_rgba(146,129,247,0.3)]"
                      : "bg-white text-black hover:bg-neutral-200"
                  }`}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  {pricingText.ctaWhatsapp}
                </a>

                <a
                  href={mailtoLink}
                  className="flex items-center justify-center gap-2 rounded-full py-2.5 px-4 text-[13px] font-mono text-ash transition-colors duration-150 hover:bg-white/[0.05] hover:text-white"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  {pricingText.ctaEmail}
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* ======================================================== */}
      {/* TABELA COMPARATIVA DE ESCOPOS                             */}
      {/* ======================================================== */}
      <div className="mt-24">
        <div className="text-center max-w-2xl mx-auto">
          <p className="font-mono text-[12px] uppercase tracking-wider text-iris">
            {pricingText.tableTag}
          </p>
          <h2 className="mt-2 text-[30px] font-normal tracking-[-0.03em] text-white md:text-[38px]">
            {pricingText.tableTitle}
          </h2>
          <p className="mt-3 text-[15px] text-ash">
            {pricingText.tableSubtitle}
          </p>
        </div>

        <div className="mt-10 overflow-x-auto rounded-2xl border border-graphite bg-[#0b0b0f]">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-graphite bg-[#121218] text-[13px] font-mono text-ash uppercase">
                <th className="py-4 px-6 font-semibold">{pricingText.tableCol1}</th>
                <th className="py-4 px-6 font-semibold text-center">{pricingText.tableCol2}</th>
                <th className="py-4 px-6 font-semibold text-center text-iris">{pricingText.tableCol3}</th>
                <th className="py-4 px-6 font-semibold text-center">{pricingText.tableCol4}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-graphite/60 text-[14px]">
              {scopeComparisonRows.map((row) => (
                <tr key={row.feature} className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-4 px-6 font-medium text-bone">{row.feature}</td>
                  
                  {/* Website */}
                  <td className="py-4 px-6 text-center">
                    {typeof row.website === "boolean" ? (
                      row.website ? (
                        <span className="inline-block text-emerald-400 font-bold">✓</span>
                      ) : (
                        <span className="inline-block text-neutral-600">—</span>
                      )
                    ) : (
                      <span className="font-mono text-[12px] text-ash">{row.website}</span>
                    )}
                  </td>

                  {/* E-commerce */}
                  <td className="py-4 px-6 text-center bg-iris/[0.02]">
                    {typeof row.ecommerce === "boolean" ? (
                      row.ecommerce ? (
                        <span className="inline-block text-emerald-400 font-bold">✓</span>
                      ) : (
                        <span className="inline-block text-neutral-600">—</span>
                      )
                    ) : (
                      <span className="font-mono text-[12px] text-iris">{row.ecommerce}</span>
                    )}
                  </td>

                  {/* Custom AI */}
                  <td className="py-4 px-6 text-center">
                    {typeof row.customAi === "boolean" ? (
                      row.customAi ? (
                        <span className="inline-block text-emerald-400 font-bold">✓</span>
                      ) : (
                        <span className="inline-block text-neutral-600">—</span>
                      )
                    ) : (
                      <span className="font-mono text-[12px] text-ash">{row.customAi}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ======================================================== */}
      {/* FAQ DA PÁGINA                                             */}
      {/* ======================================================== */}
      <div className="mt-24 max-w-3xl mx-auto">
        <div className="text-center">
          <p className="font-mono text-[12px] uppercase tracking-wider text-iris">
            {pricingText.faqTag}
          </p>
          <h2 className="mt-2 text-[28px] font-normal tracking-[-0.03em] text-white md:text-[34px]">
            {pricingText.faqTitle}
          </h2>
        </div>

        <div className="mt-10 space-y-4">
          {scopeFaq.map((item) => (
            <div
              key={item.q}
              className="rounded-2xl border border-graphite bg-[#0b0b0f] p-6 hover:border-iron transition-colors"
            >
              <h3 className="text-[17px] font-medium text-white">{item.q}</h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-ash">{item.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ======================================================== */}
      {/* BANNER INFERIOR DE CONVERSÃO                              */}
      {/* ======================================================== */}
      <div className="mt-24 rounded-3xl border border-iris/40 bg-gradient-to-b from-[#141424] to-[#0a0a10] p-10 text-center md:p-14 shadow-2xl">
        <h2 className="text-[28px] font-normal text-white md:text-[36px]">
          {pricingText.bannerTitle}
        </h2>
        <p className="mt-4 text-[16px] text-ash max-w-xl mx-auto">
          {pricingText.bannerDesc}
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={getWhatsappLink(
              locale === "en"
                ? "Hello BCOMM! I would like a technical analysis to determine the best solution for my business."
                : locale === "es"
                ? "¡Hola BCOMM! Me gustaría un análisis técnico para determinar la mejor solución para mi empresa."
                : locale === "fr"
                ? "Bonjour BCOMM! Je souhaite une analyse technique pour identifier la meilleure solution pour mon entreprise."
                : "Olá! Gostaria de uma análise técnica para saber qual solução melhor atende a minha empresa."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-iris px-8 py-4 text-[15px] font-semibold text-black transition-all hover:bg-iris-glow shadow-[0_0_25px_rgba(146,129,247,0.35)]"
          >
            {pricingText.bannerCtaWhatsapp}
          </a>
          <Link
            href="/#contato"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-graphite px-8 py-4 text-[15px] font-normal text-white hover:border-white hover:bg-white/5 transition-all"
          >
            {pricingText.bannerCtaForm}
          </Link>
        </div>
      </div>
    </div>
  );
}