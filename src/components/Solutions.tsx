"use client";

import React, { useState, useEffect, useRef } from "react";
import { solutions } from "@/lib/constants";
import { AnimatedSection } from "./AnimatedSection";
import { SpotlightCard } from "./SpotlightCard";

const bgClass: Record<string, string> = {
  automation: "solution-bg-automation",
  integration: "solution-bg-integration",
  support: "solution-bg-support",
  saas: "solution-bg-saas",
};

export function Solutions() {
  // Estado para o sistema orbital no Desktop
  const [isPaused, setIsPaused] = useState(false);
  const [angle, setAngle] = useState(0);
  const requestRef = useRef<number | null>(null);

  // Animação contínua da órbita com requestAnimationFrame para performance 60fps fluida
  useEffect(() => {
    let lastTime = performance.now();

    const animateOrbit = (time: number) => {
      const delta = (time - lastTime) / 1000;
      lastTime = time;

      if (!isPaused) {
        // Rotação suave: 360 graus em ~36 segundos
        setAngle((prev) => (prev + delta * 10) % 360);
      }
      requestRef.current = requestAnimationFrame(animateOrbit);
    };

    requestRef.current = requestAnimationFrame(animateOrbit);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isPaused]);

  // Estado e Ref para o Carrossel Horizontal Snap & Peek no Mobile (Ideia 1)
  const carouselRef = useRef<HTMLDivElement>(null);
  const [mobileActiveIndex, setMobileActiveIndex] = useState(0);

  // Sincroniza o indicador de pontos com a rolagem do usuário pelo polegar
  const handleScroll = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, clientWidth } = carouselRef.current;
    const index = Math.round(scrollLeft / (clientWidth * 0.82));
    setMobileActiveIndex(Math.min(Math.max(index, 0), solutions.length - 1));
  };

  const scrollToCard = (index: number) => {
    if (!carouselRef.current) return;
    const cardWidth = carouselRef.current.clientWidth * 0.82;
    carouselRef.current.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
    setMobileActiveIndex(index);
  };

  return (
    <section
      id="servicos"
      className="relative overflow-hidden bg-transparent px-[20px] py-[80px] md:px-[48px] md:py-[120px] lg:px-[80px]"
    >
      <div className="mx-auto max-w-[1360px]">

        {/* ========================================================================= */}
        {/* VERSÃO DESKTOP: SISTEMA ORBITAL COM NÚCLEO CENTRAL BRANCO (lg:flex)       */}
        {/* ========================================================================= */}
        <div className="relative hidden min-h-[820px] w-full items-center justify-center lg:flex">
          
          {/* Círculo Orbital Guia e Brilho Sutil no Fundo */}
          <div className="pointer-events-none absolute h-[640px] w-[640px] rounded-full border border-dashed border-iris/25 opacity-70" />
          <div className="pointer-events-none absolute h-[380px] w-[380px] rounded-full bg-iris/15 blur-[100px]" />
          
          {/* Marcadores de Eixo da Órbita */}
          <div className="pointer-events-none absolute h-[640px] w-[640px] rounded-full">
            <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-iris/50" />
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 h-2 w-2 rounded-full bg-iris/50" />
            <span className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-iris/50" />
            <span className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-iris/50" />
          </div>

          {/* NÚCLEO CENTRAL GRAVITACIONAL COM FUNDO BRANCO PREMIUM */}
          <div className="relative z-20 mx-auto max-w-[460px] rounded-[28px] bg-white p-[40px] text-center shadow-[0_20px_60px_rgba(0,0,0,0.4),0_0_50px_rgba(255,255,255,0.2)]">
            
            {/* Tag / Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-100 px-3.5 py-1.5 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-iris animate-pulse" />
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-neutral-700">
                Nossas Soluções
              </p>
            </div>

            {/* Título Principal em Preto com Contraste Total */}
            <h2 className="mt-[16px] text-[36px] font-semibold leading-[1.15] tracking-[-0.04em] text-neutral-950">
              Soluções de Alta Performance
            </h2>

            {/* Descrição em Cinza Escuro de Alta Legibilidade */}
            <p className="mt-[14px] text-[15px] leading-[1.6] text-neutral-600">
              Elimine gargalos operacionais e acelere suas vendas diárias com plataformas sob medida e inteligência artificial prática.
            </p>

            {/* Botão de Ação Destacado */}
            <div className="mt-[24px]">
              <a
                href="/servicos"
                className="inline-flex items-center gap-[8px] rounded-full bg-neutral-950 px-[22px] py-[12px] font-medium text-[14px] text-white shadow-md transition-all duration-200 hover:bg-iris hover:text-black active:scale-95"
              >
                Ver todos os serviços
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

            {/* Indicador de Pausa no Hover */}
            <div className="mt-4 font-mono text-[10px] uppercase tracking-wider text-neutral-400">
              {isPaused ? "[ ÓRBITA PAUSADA ]" : "Passe o cursor sobre os cards para pausar"}
            </div>
          </div>

          {/* Cards Orbitando: 100% SÓLIDOS, NITIDEZ MÁXIMA E RAIO EXPANDIDO */}
          {solutions.map((s, i) => {
            const itemAngle = (angle + i * 90) * (Math.PI / 180);
            
            const radiusX = 490;
            const radiusY = 320;
            const x = Math.cos(itemAngle) * radiusX;
            const y = Math.sin(itemAngle) * radiusY;

            const depthFactor = (Math.sin(itemAngle) + 1) / 2;
            const scale = 0.95 + depthFactor * 0.1;
            const zIndex = Math.round(depthFactor * 30);

            return (
              <div
                key={s.title}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                className="absolute left-1/2 top-1/2 will-change-transform"
                style={{
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(${scale})`,
                  opacity: 1,
                  zIndex,
                  transition: "transform 0.1s linear",
                }}
              >
                <div className="w-[310px]">
                  <SpotlightCard className="!bg-[#0e0e11] border-graphite/90 shadow-[0_16px_40px_rgba(0,0,0,0.85)] transition-all duration-300 hover:border-iris/80 hover:shadow-[0_0_30px_rgba(146,129,247,0.3)]">
                    <a
                      href={s.ctaHref}
                      className="relative flex h-[280px] flex-col justify-between p-[26px]"
                    >
                      <div
                        className={`absolute inset-0 opacity-20 transition-opacity duration-500 group-hover:opacity-40 ${bgClass[s.variant]}`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e11] via-[#0e0e11]/90 to-transparent" />
                      
                      <div className="relative z-10">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[11px] font-medium tracking-wider text-iris">
                            SOLUÇÃO 0{i + 1}
                          </span>
                          <span className="h-2 w-2 rounded-full bg-iris" />
                        </div>
                        <h3 className="mt-[14px] text-[20px] font-semibold leading-[1.3] text-white">
                          {s.title}
                        </h3>
                        <p className="mt-[10px] text-[13.5px] leading-[1.6] text-ash">
                          {s.description}
                        </p>
                      </div>

                      <div className="relative z-10 mt-[16px] flex items-center justify-between border-t border-graphite/70 pt-[14px]">
                        <span className="inline-flex items-center gap-[6px] text-[13px] font-medium text-iris transition-colors duration-200 group-hover:text-white">
                          {s.cta}
                          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                            <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        <span className="font-mono text-[10px] text-iron">BCOMM //</span>
                      </div>
                    </a>
                  </SpotlightCard>
                </div>
              </div>
            );
          })}
        </div>


        {/* ========================================================================= */}
        {/* VERSÃO MOBILE & TABLET: CARROSSEL HORIZONTAL SNAP & PEEK (Ideia 1)        */}
        {/* ========================================================================= */}
        <div className="block lg:hidden">
          {/* Bloco de Apresentação com Fundo Branco */}
          <AnimatedSection>
            <div className="rounded-[24px] bg-white p-[26px] text-center shadow-[0_16px_40px_rgba(0,0,0,0.3)]">
              <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-100 px-3 py-1 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-iris animate-pulse" />
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-neutral-700">
                  Nossas Soluções
                </p>
              </div>
              <h2 className="mt-[14px] text-[28px] font-semibold leading-[1.15] tracking-[-0.04em] text-neutral-950 sm:text-[34px]">
                Soluções de Alta Performance
              </h2>
              <p className="mt-[12px] text-[14px] leading-[1.6] text-neutral-600">
                Elimine gargalos operacionais e acelere suas vendas diárias com plataformas sob medida e inteligência artificial prática.
              </p>
              <div className="mt-[20px]">
                <a
                  href="/servicos"
                  className="inline-flex items-center gap-[8px] rounded-full bg-neutral-950 px-[20px] py-[10px] text-[13px] font-medium text-white shadow-md active:scale-95"
                >
                  Ver todos os serviços
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* Carrossel Horizontal "Snap & Peek" */}
          <div className="mt-[32px]">
            {/* Faixa deslizante com Snap e ponta do próximo card visível (Peek) */}
            <div
              ref={carouselRef}
              onScroll={handleScroll}
              className="flex snap-x snap-mandatory gap-[16px] overflow-x-auto pb-[16px] pt-[8px] no-scrollbar"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                WebkitOverflowScrolling: "touch",
              }}
            >
              {solutions.map((item, idx) => (
                <div
                  key={item.title}
                  className="w-[84vw] max-w-[320px] shrink-0 snap-start"
                >
                  <SpotlightCard className="h-[300px] !bg-[#0e0e11] border border-graphite/90 shadow-[0_16px_40px_rgba(0,0,0,0.85)]">
                    <a
                      href={item.ctaHref}
                      className="relative flex h-full flex-col justify-between p-[24px]"
                    >
                      <div
                        className={`absolute inset-0 opacity-20 ${bgClass[item.variant]}`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e11] via-[#0e0e11]/90 to-transparent" />

                      <div className="relative z-10">
                        <div className="flex items-center justify-between border-b border-graphite/60 pb-[12px]">
                          <span className="font-mono text-[11px] font-medium uppercase tracking-wider text-iris">
                            0{idx + 1} // SOLUÇÃO
                          </span>
                          <span className="h-2 w-2 rounded-full bg-iris" />
                        </div>

                        <h3 className="mt-[16px] text-[20px] font-semibold leading-[1.3] text-white">
                          {item.title}
                        </h3>
                        <p className="mt-[10px] text-[13.5px] leading-[1.6] text-ash">
                          {item.description}
                        </p>
                      </div>

                      <div className="relative z-10 mt-[16px] border-t border-graphite/60 pt-[14px]">
                        <span className="inline-flex w-full items-center justify-between text-[13.5px] font-medium text-iris">
                          <span>{item.cta}</span>
                          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                            <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                      </div>
                    </a>
                  </SpotlightCard>
                </div>
              ))}
            </div>

            {/* Controles de Navegação e Indicadores de Progresso em Pílula */}
            <div className="mt-[18px] flex items-center justify-between px-2">
              <button
                type="button"
                onClick={() => scrollToCard(Math.max(0, mobileActiveIndex - 1))}
                aria-label="Card anterior"
                disabled={mobileActiveIndex === 0}
                className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-graphite bg-[#0e0e11] text-ash transition-colors hover:border-iris hover:text-white disabled:opacity-30 active:scale-95"
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M10 13L5 8L10 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {/* Indicadores de Pontos / Barra em Pílula Luminosa */}
              <div className="flex items-center gap-2">
                {solutions.map((_, i) => (
                  <button
                    type="button"
                    key={i}
                    onClick={() => scrollToCard(i)}
                    aria-label={`Ir para solução 0${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      mobileActiveIndex === i ? "w-6 bg-iris" : "w-2 bg-graphite"
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => scrollToCard(Math.min(solutions.length - 1, mobileActiveIndex + 1))}
                aria-label="Próximo card"
                disabled={mobileActiveIndex === solutions.length - 1}
                className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-graphite bg-[#0e0e11] text-ash transition-colors hover:border-iris hover:text-white disabled:opacity-30 active:scale-95"
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            {/* Dica sutil de deslizamento para o usuário */}
            <div className="mt-3 text-center font-mono text-[10px] uppercase tracking-wider text-ash/60">
              Deslize para ver todas as soluções
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
