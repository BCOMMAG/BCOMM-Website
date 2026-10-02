"use client";

import React, { useState, useEffect, useRef } from "react";
import { AnimatedSection } from "./AnimatedSection";

interface DifferentialItem {
  id: string;
  tag: string;
  title: string;
  hook: string;
  benefit: string;
  metricNumber: string;
  metricLabel: string;
  serviceHref: string;
  serviceCta: string;
}

const differentialsData: DifferentialItem[] = [
  {
    id: "websites",
    tag: "WEBSITES & LANDING PAGES",
    title: "Páginas que Convertem Visitantes em Clientes",
    hook: "Não é apenas design bonito: é um canal direto de orçamentos.",
    benefit:
      "Abre em menos de 1 segundo no celular. Cada elemento e botão de WhatsApp é desenhado para o visitante não hesitar e entrar em contato com você.",
    metricNumber: "+3.2x",
    metricLabel: "Mais contatos recebidos de anúncios",
    serviceHref: "/servicos/websites",
    serviceCta: "Ver websites",
  },
  {
    id: "automacao",
    tag: "ATENDIMENTO 24H",
    title: "IA no WhatsApp que Vende às 23h ou no Domingo",
    hook: "Sua empresa operando em tempo integral sem equipe extra.",
    benefit:
      "Responde em menos de 5 segundos, tira dúvidas de preços, qualifica o cliente e agenda reuniões automaticamente direto no seu WhatsApp.",
    metricNumber: "Zero",
    metricLabel: "Clientes perdidos fora do expediente",
    serviceHref: "/servicos/automacao",
    serviceCta: "Ver automação",
  },
  {
    id: "link-bio",
    tag: "LINK BIO INSTAGRAM",
    title: "Bio do Instagram Transformada em Vendas",
    hook: "Substitua links genéricos por uma página veloz e profissional.",
    benefit:
      "Página exclusiva com a identidade da sua marca, catálogo de produtos e atalhos rápidos de atendimento que passam autoridade imediata.",
    metricNumber: "100%",
    metricLabel: "Identidade visual própria sem marcas alheias",
    serviceHref: "/links",
    serviceCta: "Ver Link Bio",
  },
  {
    id: "ecommerce",
    tag: "LOJAS VIRTUAIS & E-COMMERCE",
    title: "Checkout Rápido que Evita Abandono de Compra",
    hook: "Venda direta com Pix, cartão e aviso automático no WhatsApp.",
    benefit:
      "Experiência de compra fluida em apenas 1 página, sem cadastros complicados que fazem o cliente desistir na hora de pagar.",
    metricNumber: "-40%",
    metricLabel: "Queda no abandono de carrinho",
    serviceHref: "/servicos/ecommerce",
    serviceCta: "Ver e-commerce",
  },
  {
    id: "proprietario",
    tag: "LIBERDADE TOTAL",
    title: "Sem Mensalidades Ocultas ou Plataformas Lentas",
    hook: "A plataforma e o código são 100% de propriedade da sua empresa.",
    benefit:
      "Livre de taxas abusivas de ferramentas prontas como Wix ou WordPress pesado. Você é dono absoluto do seu projeto digital.",
    metricNumber: "100%",
    metricLabel: "Código proprietário entregue a você",
    serviceHref: "#contato",
    serviceCta: "Falar com especialista",
  },
];

export function About() {
  // ==========================================
  // LÓGICA DO DESKTOP: CARROSSEL DINÂMICO
  // ==========================================
  const [desktopIndex, setDesktopIndex] = useState(0);
  const [isDesktopHovered, setIsDesktopHovered] = useState(false);

  // Auto-avanço suave no desktop a cada 6 segundos quando não pausado
  useEffect(() => {
    if (isDesktopHovered) return;
    const interval = setInterval(() => {
      setDesktopIndex((prev) => (prev + 1) % differentialsData.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isDesktopHovered]);

  // ==========================================
  // LÓGICA DO MOBILE: AUTOSCROLL LENTO + PAUSA 30S
  // ==========================================
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const [isMobilePaused, setIsMobilePaused] = useState(false);
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Scroll contínuo suave no mobile
  useEffect(() => {
    const container = mobileScrollRef.current;
    if (!container) return;

    let animFrame: number;
    let lastTime = performance.now();

    const scrollLoop = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;

      if (!isMobilePaused && container) {
        // Velocidade lenta e sutil (aprox 35 pixels por segundo)
        container.scrollLeft += (delta / 1000) * 35;

        // Se chegar ao final, faz o loop suave para o início
        if (container.scrollLeft >= container.scrollWidth - container.clientWidth - 5) {
          container.scrollLeft = 0;
        }
      }

      animFrame = requestAnimationFrame(scrollLoop);
    };

    animFrame = requestAnimationFrame(scrollLoop);
    return () => cancelAnimationFrame(animFrame);
  }, [isMobilePaused]);

  // Ao tocar na tela no mobile: pausa por 30 segundos
  const handleMobileTouch = () => {
    setIsMobilePaused(true);

    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
    }

    // Retoma o scroll automático após 30 segundos
    pauseTimeoutRef.current = setTimeout(() => {
      setIsMobilePaused(false);
    }, 30000);
  };

  return (
    <section
      id="sobre"
      className="border-t border-graphite bg-transparent px-[20px] py-[80px] md:px-[48px] md:py-[120px] lg:px-[80px]"
    >
      <div className="mx-auto max-w-[1280px]">
        {/* White Island Container: Ilha Branca Premium */}
        <AnimatedSection>
          <div className="rounded-[32px] bg-white p-[28px] text-neutral-900 shadow-[0_24px_70px_rgba(0,0,0,0.45),0_0_50px_rgba(255,255,255,0.15)] md:p-[56px] lg:p-[64px]">
            
            {/* Cabeçalho da Seção */}
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-[700px]">
                <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-100 px-3.5 py-1.5 shadow-sm">
                  <span className="h-2 w-2 rounded-full bg-iris animate-pulse" />
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-neutral-700">
                    Por que a BCOMM
                  </p>
                </div>
                <h2 className="mt-[16px] text-[32px] font-semibold leading-[1.15] tracking-[-0.04em] text-neutral-950 sm:text-[42px] md:text-[50px]">
                  Tecnologia feita para gerar faturamento real
                </h2>
                <p className="mt-[12px] text-[15px] leading-[1.6] text-neutral-600 sm:text-[17px]">
                  Não criamos páginas estáticas sem propósito. Desenvolvemos ferramentas diretas que colocam mais dinheiro no caixa da sua empresa.
                </p>
              </div>

              {/* Botão de Ação Rápida */}
              <div className="shrink-0">
                <a
                  href="#contato"
                  className="inline-flex items-center gap-2 rounded-full bg-neutral-950 px-[22px] py-[12px] font-medium text-[14px] text-white shadow-md transition-all duration-200 hover:bg-iris hover:text-black active:scale-95"
                >
                  Solicitar meu projeto
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>

            {/* ========================================================== */}
            {/* VERSÃO DESKTOP: CARROSSEL DINÂMICO INTERATIVO (md:block)   */}
            {/* ========================================================== */}
            <div
              className="mt-[48px] hidden md:block"
              onMouseEnter={() => setIsDesktopHovered(true)}
              onMouseLeave={() => setIsDesktopHovered(false)}
            >
              {/* Abas / Seletores Rápidos de Alto Impacto */}
              <div className="flex items-center gap-2 border-b border-neutral-200/80 pb-3">
                {differentialsData.map((item, idx) => {
                  const isActive = desktopIndex === idx;
                  return (
                    <button
                      type="button"
                      key={item.id}
                      onClick={() => setDesktopIndex(idx)}
                      className={`relative rounded-xl px-4 py-2.5 font-mono text-[12px] uppercase tracking-wider transition-all duration-300 ${
                        isActive
                          ? "bg-neutral-950 text-white shadow-sm font-semibold"
                          : "bg-transparent text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900"
                      }`}
                    >
                      {item.tag}
                      {isActive && (
                        <span className="absolute -bottom-[13px] left-1/2 -translate-x-1/2 h-[3px] w-6 rounded-full bg-iris" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Card em Destaque: 100% FUNDO TRANSPARENTE E BORDAS ELEGANTES */}
              <div className="mt-[28px] grid grid-cols-12 gap-[32px] rounded-[24px] border border-neutral-300/80 bg-transparent p-[40px] transition-all duration-300">
                <div className="col-span-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 font-mono text-[12px] font-semibold text-iris uppercase">
                      <span>0{desktopIndex + 1} de 0{differentialsData.length}</span>
                      <span>//</span>
                      <span>{differentialsData[desktopIndex].tag}</span>
                    </div>

                    <h3 className="mt-[16px] text-[28px] font-semibold leading-[1.25] text-neutral-950 lg:text-[32px]">
                      {differentialsData[desktopIndex].title}
                    </h3>

                    <p className="mt-[12px] text-[17px] font-medium text-iris-glow">
                      &ldquo;{differentialsData[desktopIndex].hook}&rdquo;
                    </p>

                    <p className="mt-[14px] text-[15px] leading-[1.7] text-neutral-600">
                      {differentialsData[desktopIndex].benefit}
                    </p>
                  </div>

                  <div className="mt-[32px] flex items-center gap-4">
                    <a
                      href={differentialsData[desktopIndex].serviceHref}
                      className="inline-flex items-center gap-2 rounded-full border border-neutral-950 bg-neutral-950 px-[20px] py-[10px] text-[14px] font-medium text-white transition-all hover:bg-iris hover:border-iris hover:text-black"
                    >
                      {differentialsData[desktopIndex].serviceCta}
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                        <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                    <span className="font-mono text-[11px] text-neutral-400">
                      Pausa automática ao passar o cursor
                    </span>
                  </div>
                </div>

                {/* Métrica de Impacto Visual */}
                <div className="col-span-4 flex flex-col items-center justify-center rounded-[20px] border border-neutral-200/80 bg-neutral-50/50 p-[32px] text-center">
                  <span className="font-mono text-[52px] font-bold tracking-tight text-neutral-950 lg:text-[64px]">
                    {differentialsData[desktopIndex].metricNumber}
                  </span>
                  <p className="mt-2 text-[14px] font-medium leading-snug text-neutral-600">
                    {differentialsData[desktopIndex].metricLabel}
                  </p>
                  <div className="mt-6 flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-3 py-1 font-mono text-[10px] font-semibold text-emerald-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    RESULTADO COMPROVADO
                  </div>
                </div>
              </div>

              {/* Botões de Avanço Manual do Desktop */}
              <div className="mt-[24px] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {differentialsData.map((_, i) => (
                    <button
                      type="button"
                      key={i}
                      onClick={() => setDesktopIndex(i)}
                      aria-label={`Slide ${i + 1}`}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        desktopIndex === i ? "w-8 bg-neutral-950" : "w-2 bg-neutral-300"
                      }`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setDesktopIndex((prev) => (prev - 1 + differentialsData.length) % differentialsData.length)}
                    className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-neutral-200 text-neutral-700 transition-colors hover:border-neutral-950 hover:text-neutral-950 active:scale-95"
                    aria-label="Anterior"
                  >
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path d="M10 13L5 8L10 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={() => setDesktopIndex((prev) => (prev + 1) % differentialsData.length)}
                    className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-neutral-200 text-neutral-700 transition-colors hover:border-neutral-950 hover:text-neutral-950 active:scale-95"
                    aria-label="Próximo"
                  >
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* ========================================================== */}
            {/* VERSÃO MOBILE: AUTOSCROLL CONTÍNUO LENTO + PAUSA 30S (md:hidden) */}
            {/* ========================================================== */}
            <div className="mt-[36px] block md:hidden">
              
              {/* Aviso amigável de toque para pausar */}
              <div className="mb-3 flex items-center justify-between font-mono text-[11px] text-neutral-500">
                <span className="flex items-center gap-1.5">
                  <span className={`h-2 w-2 rounded-full ${isMobilePaused ? "bg-amber-500" : "bg-emerald-500 animate-pulse"}`} />
                  {isMobilePaused ? "Pausado por 30s (toque para ler)" : "Deslizando automaticamente"}
                </span>
                <span className="text-[10px] uppercase">5 Soluções</span>
              </div>

              {/* Faixa com Scroll Contínuo e Suave */}
              <div
                ref={mobileScrollRef}
                onTouchStart={handleMobileTouch}
                onClick={handleMobileTouch}
                className="flex gap-[16px] overflow-x-auto pb-4 pt-2 no-scrollbar"
                style={{
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                  WebkitOverflowScrolling: "touch",
                }}
              >
                {differentialsData.map((item, idx) => (
                  <div
                    key={item.id}
                    className="w-[84vw] max-w-[310px] shrink-0 rounded-[20px] border border-neutral-300/90 bg-transparent p-[24px] shadow-sm flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between border-b border-neutral-200/80 pb-3">
                        <span className="font-mono text-[11px] font-semibold text-iris uppercase">
                          0{idx + 1} // {item.tag}
                        </span>
                        <span className="font-mono text-[18px] font-bold text-neutral-950">
                          {item.metricNumber}
                        </span>
                      </div>

                      <h3 className="mt-[16px] text-[20px] font-semibold leading-[1.3] text-neutral-900">
                        {item.title}
                      </h3>

                      <p className="mt-[8px] text-[13px] font-medium text-neutral-700 italic">
                        &ldquo;{item.hook}&rdquo;
                      </p>

                      <p className="mt-[10px] text-[13px] leading-[1.6] text-neutral-600">
                        {item.benefit}
                      </p>
                    </div>

                    <div className="mt-[20px] border-t border-neutral-200/80 pt-3 flex items-center justify-between">
                      <span className="text-[11px] text-neutral-500 leading-tight">
                        {item.metricLabel}
                      </span>
                      <a
                        href={item.serviceHref}
                        className="shrink-0 inline-flex items-center gap-1 font-mono text-[12px] font-semibold text-iris"
                      >
                        Ver detalhes &rarr;
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Indicador de retorno após os 30s */}
              <div className="mt-2 text-center font-mono text-[10px] uppercase tracking-wider text-neutral-400">
                Toque em qualquer card para pausar o movimento por 30 segundos
              </div>
            </div>

          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
