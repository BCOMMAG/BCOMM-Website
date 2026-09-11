"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
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

  // Estado para o Stack de Cartões no Mobile (Ideia 3)
  const [activeStackIndex, setActiveStackIndex] = useState(0);

  const nextCard = () => {
    setActiveStackIndex((prev) => (prev + 1) % solutions.length);
  };

  const prevCard = () => {
    setActiveStackIndex((prev) => (prev - 1 + solutions.length) % solutions.length);
  };

  return (
    <section
      id="servicos"
      className="relative overflow-hidden bg-transparent px-[24px] py-[80px] md:px-[48px] md:py-[120px] lg:px-[80px]"
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

          {/* Cards Orbitando: 100% SÓLIDOS, NITIDEZ MÁXIMA E RAIO EXPANDIDO (sem sobreposição) */}
          {solutions.map((s, i) => {
            const itemAngle = (angle + i * 90) * (Math.PI / 180);
            
            // Raio expandido para os cards orbitarem com espaço de sobra ao redor do bloco branco
            const radiusX = 490;
            const radiusY = 320;
            const x = Math.cos(itemAngle) * radiusX;
            const y = Math.sin(itemAngle) * radiusY;

            // Profundidade: mantemos SEMPRE 100% de opacidade (sem transparência nem opaco)
            const depthFactor = (Math.sin(itemAngle) + 1) / 2; // 0 a 1
            const scale = 0.95 + depthFactor * 0.1; // 0.95x a 1.05x (sutil variação de tamanho)
            const zIndex = Math.round(depthFactor * 30);

            return (
              <div
                key={s.title}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                className="absolute left-1/2 top-1/2 will-change-transform"
                style={{
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(${scale})`,
                  opacity: 1, // 100% nítido, sem transparência
                  zIndex,
                  transition: "transform 0.1s linear",
                }}
              >
                <div className="w-[310px]">
                  {/* Fundo 100% sólido escuro (#0e0e11) e borda luminosa para máximo contraste */}
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
        {/* VERSÃO MOBILE & TABLET: STACK DE CARTÕES INTERATIVOS (lg:hidden)          */}
        {/* ========================================================================= */}
        <div className="block lg:hidden">
          {/* Bloco Central com Fundo Branco no Mobile */}
          <AnimatedSection>
            <div className="rounded-[24px] bg-white p-[28px] text-center shadow-[0_16px_40px_rgba(0,0,0,0.3)]">
              <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-100 px-3 py-1 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-iris animate-pulse" />
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-neutral-700">
                  Nossas Soluções
                </p>
              </div>
              <h2 className="mt-[14px] text-[30px] font-semibold leading-[1.15] tracking-[-0.04em] text-neutral-950 sm:text-[36px]">
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

          {/* Stack de Cartões Sobrepostos no Mobile */}
          <div className="relative mt-[36px] flex flex-col items-center">
            
            {/* Área do Baralho com Altura Fixa */}
            <div className="relative h-[360px] w-full max-w-[360px]">
              {solutions.map((item, idx) => {
                const offset = (idx - activeStackIndex + solutions.length) % solutions.length;
                if (offset > 2) return null;

                const translateY = offset * 14;
                const scale = 1 - offset * 0.06;
                const opacity = 1; // 100% nítido
                const zIndex = 20 - offset;

                return (
                  <motion.div
                    key={item.title}
                    animate={{
                      y: translateY,
                      scale: scale,
                      opacity: opacity,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                    }}
                    onClick={offset === 0 ? undefined : () => setActiveStackIndex(idx)}
                    className="absolute inset-0 cursor-pointer"
                    style={{ zIndex }}
                  >
                    <SpotlightCard className="h-full !bg-[#0e0e11] border border-graphite/90 shadow-[0_16px_40px_rgba(0,0,0,0.8)]">
                      <div className="relative flex h-full flex-col justify-between p-[28px]">
                        <div
                          className={`absolute inset-0 opacity-20 ${bgClass[item.variant]}`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e11] via-[#0e0e11]/90 to-transparent" />

                        <div className="relative z-10">
                          <div className="flex items-center justify-between border-b border-graphite/60 pb-[14px]">
                            <span className="font-mono text-[11px] font-medium uppercase tracking-wider text-iris">
                              0{idx + 1} de 0{solutions.length}
                            </span>
                            <span className="rounded-full border border-graphite bg-[#151518] px-2 py-0.5 font-mono text-[10px] text-bone">
                              {offset === 0 ? "TOQUE NO BOTÃO" : "TOQUE P/ ABRIR"}
                            </span>
                          </div>

                          <h3 className="mt-[20px] text-[22px] font-semibold leading-[1.3] text-white">
                            {item.title}
                          </h3>
                          <p className="mt-[12px] text-[14px] leading-[1.6] text-ash">
                            {item.description}
                          </p>
                        </div>

                        <div className="relative z-10 mt-[20px] border-t border-graphite/60 pt-[16px]">
                          <a
                            href={item.ctaHref}
                            className="inline-flex w-full items-center justify-between rounded-full border border-iris/40 bg-iris/15 px-[18px] py-[10px] text-[14px] font-medium text-white transition-colors hover:bg-iris hover:text-black"
                          >
                            <span>{item.cta}</span>
                            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                              <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </SpotlightCard>
                  </motion.div>
                );
              })}
            </div>

            {/* Controles de Navegação do Stack no Mobile */}
            <div className="mt-[48px] flex w-full max-w-[360px] items-center justify-between px-2">
              <button
                type="button"
                onClick={prevCard}
                aria-label="Solução anterior"
                className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-graphite bg-[#0e0e11] text-ash transition-colors hover:border-iris hover:text-white active:scale-95"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M10 13L5 8L10 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {/* Indicadores de Pontos */}
              <div className="flex items-center gap-2">
                {solutions.map((_, i) => (
                  <button
                    type="button"
                    key={i}
                    onClick={() => setActiveStackIndex(i)}
                    aria-label={`Ir para solução 0${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeStackIndex === i ? "w-6 bg-iris" : "w-2 bg-graphite"
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={nextCard}
                aria-label="Próxima solução"
                className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-graphite bg-[#0e0e11] text-ash transition-colors hover:border-iris hover:text-white active:scale-95"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
