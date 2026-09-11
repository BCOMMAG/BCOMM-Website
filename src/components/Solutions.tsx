"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
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

  // Animação contínua da órbita com requestAnimationFrame para performance 60fps
  useEffect(() => {
    let lastTime = performance.now();

    const animateOrbit = (time: number) => {
      const delta = (time - lastTime) / 1000;
      lastTime = time;

      if (!isPaused) {
        // Rotação suave: 360 graus em ~32 segundos
        setAngle((prev) => (prev + delta * 11.25) % 360);
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
      <div className="mx-auto max-w-[1280px]">

        {/* ========================================================================= */}
        {/* VERSÃO DESKTOP: SISTEMA ORBITAL GRAVITACIONAL EM TORNO DO TEXTO (lg:block) */}
        {/* ========================================================================= */}
        <div className="relative hidden h-[760px] w-full items-center justify-center lg:flex">
          
          {/* Círculo Orbital Guia e Brilho Gravitacional de Fundo */}
          <div className="pointer-events-none absolute h-[580px] w-[580px] rounded-full border border-dashed border-iris/20 opacity-60" />
          <div className="pointer-events-none absolute h-[320px] w-[320px] rounded-full bg-iris/10 blur-[90px]" />
          
          {/* Marcadores de Órbita */}
          <div className="pointer-events-none absolute h-[580px] w-[580px] rounded-full">
            <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-iris/40" />
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 h-2 w-2 rounded-full bg-iris/40" />
            <span className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-iris/40" />
            <span className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-iris/40" />
          </div>

          {/* Núcleo Central Gravitacional (Texto que Permanece Fixo no Centro) */}
          <div className="relative z-20 mx-auto max-w-[440px] text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-graphite bg-[#0b0b0c]/90 px-3.5 py-1.5 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-iris animate-pulse" />
              <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-ash">
                Nossas Soluções
              </p>
            </div>

            <h2 className="mt-[16px] text-[38px] font-normal leading-[1.15] tracking-[-0.04em] text-white">
              Soluções de Alta Performance
            </h2>

            <p className="mt-[14px] text-[15px] leading-[1.6] text-ash">
              Elimine gargalos operacionais e acelere suas vendas diárias com plataformas sob medida e inteligência artificial prática.
            </p>

            <div className="mt-[24px]">
              <a
                href="/servicos"
                className="inline-flex items-center gap-[8px] rounded-full border border-iris/40 bg-iris/10 px-[20px] py-[10px] font-mono text-[13px] text-white backdrop-blur-sm transition-all duration-200 hover:border-iris hover:bg-iris hover:text-black"
              >
                Ver todos os serviços
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

            {/* Dica discreta de pausa ao passar o mouse */}
            <div className="mt-4 font-mono text-[10px] text-iron tracking-wider uppercase">
              {isPaused ? "[ ÓRBITA PAUSADA ]" : "Passe o cursor sobre os cards para pausar"}
            </div>
          </div>

          {/* Cards Orbitando Suavemente ao Redor do Centro (Raio X: 420px, Raio Y: 260px) */}
          {solutions.map((s, i) => {
            // Cada card fica defasado em 90 graus (360 / 4)
            const itemAngle = (angle + i * 90) * (Math.PI / 180);
            
            // Trajetória elíptica que dá sensação de perspectiva 3D
            const radiusX = 420;
            const radiusY = 270;
            const x = Math.cos(itemAngle) * radiusX;
            const y = Math.sin(itemAngle) * radiusY;

            // Profundidade: quando sin(angle) > 0 está na frente, quando < 0 está no fundo
            const depthFactor = (Math.sin(itemAngle) + 1) / 2; // varia de 0 (fundo) a 1 (frente)
            const scale = 0.86 + depthFactor * 0.18; // 0.86x a 1.04x
            const opacity = 0.65 + depthFactor * 0.35; // 0.65 a 1.0
            const zIndex = Math.round(depthFactor * 30); // 0 a 30

            return (
              <div
                key={s.title}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                className="absolute left-1/2 top-1/2 will-change-transform"
                style={{
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(${scale})`,
                  opacity,
                  zIndex,
                  transition: "opacity 0.2s ease-out, transform 0.1s linear",
                }}
              >
                <div className="w-[300px]">
                  <SpotlightCard className="transition-all duration-300 hover:shadow-[0_0_30px_rgba(146,129,247,0.25)]">
                    <a
                      href={s.ctaHref}
                      className="relative flex h-[280px] flex-col justify-between p-[24px]"
                    >
                      <div
                        className={`absolute inset-0 opacity-25 transition-opacity duration-500 group-hover:opacity-50 ${bgClass[s.variant]}`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0c] via-[#0b0b0c]/90 to-transparent" />
                      
                      <div className="relative z-10">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[11px] text-iris tracking-wider">
                            SOLUÇÃO 0{i + 1}
                          </span>
                          <span className="h-2 w-2 rounded-full bg-iris" />
                        </div>
                        <h3 className="mt-[14px] text-[19px] font-medium leading-[1.3] text-white">
                          {s.title}
                        </h3>
                        <p className="mt-[10px] text-[13px] leading-[1.6] text-ash">
                          {s.description}
                        </p>
                      </div>

                      <div className="relative z-10 mt-[16px] flex items-center justify-between border-t border-graphite/60 pt-[12px]">
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
          {/* Cabeçalho Mobile */}
          <AnimatedSection>
            <div className="flex items-center gap-2">
              <span className="h-[6px] w-[6px] rounded-full bg-iris" />
              <p className="font-mono text-[12px] uppercase tracking-[0.08em] text-ash">
                Nossas Soluções
              </p>
            </div>
            <h2 className="mt-[12px] text-[34px] font-normal leading-[1.15] tracking-[-0.04em] text-white sm:text-[40px]">
              Soluções de Alta Performance
            </h2>
            <p className="mt-[14px] text-[15px] leading-[1.6] text-ash">
              Elimine gargalos operacionais e acelere suas vendas diárias com plataformas sob medida e inteligência artificial prática.
            </p>
          </AnimatedSection>

          {/* Stack de Cartões Sobrepostos */}
          <div className="relative mt-[36px] flex flex-col items-center">
            
            {/* Área do Baralho com Altura Fixa */}
            <div className="relative h-[360px] w-full max-w-[360px]">
              {solutions.map((item, idx) => {
                // Cálculo de distância no stack a partir do card ativo
                const offset = (idx - activeStackIndex + solutions.length) % solutions.length;
                
                // Exibimos no máximo os 3 primeiros níveis do baralho
                if (offset > 2) return null;

                const translateY = offset * 14;
                const scale = 1 - offset * 0.06;
                const opacity = 1 - offset * 0.25;
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
                    <SpotlightCard className="h-full border border-graphite/90 bg-[#0c0c0e] shadow-[0_12px_36px_rgba(0,0,0,0.6)]">
                      <div className="relative flex h-full flex-col justify-between p-[28px]">
                        <div
                          className={`absolute inset-0 opacity-20 ${bgClass[item.variant]}`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0c] via-[#0b0b0c]/90 to-transparent" />

                        <div className="relative z-10">
                          <div className="flex items-center justify-between border-b border-graphite/60 pb-[14px]">
                            <span className="font-mono text-[11px] uppercase tracking-wider text-iris">
                              0{idx + 1} de 0{solutions.length}
                            </span>
                            <span className="rounded-full border border-graphite bg-[#111418] px-2 py-0.5 font-mono text-[10px] text-ash">
                              {offset === 0 ? "TOQUE NO BOTÃO" : "TOQUE P/ ABRIR"}
                            </span>
                          </div>

                          <h3 className="mt-[20px] text-[22px] font-medium leading-[1.3] text-white">
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
                className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-graphite bg-[#0b0b0c] text-ash transition-colors hover:border-iris hover:text-white active:scale-95"
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
                className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-graphite bg-[#0b0b0c] text-ash transition-colors hover:border-iris hover:text-white active:scale-95"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            <div className="mt-[28px] text-center">
              <a
                href="/servicos"
                className="inline-flex items-center gap-[8px] rounded-full border border-graphite bg-transparent px-[20px] py-[10px] text-[14px] font-normal text-white transition-all hover:border-white hover:bg-white hover:text-black"
              >
                Ver todos os serviços
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
