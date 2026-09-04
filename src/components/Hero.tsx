"use client";

import dynamic from "next/dynamic";
import { AnimatedSection } from "./AnimatedSection";
import { TypingEffect } from "./TypingEffect";

const ConstellationGrid = dynamic(
  () => import("@/components/ui/constellation-grid"),
  { ssr: false }
);

export function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] items-center overflow-hidden bg-void-black px-[24px] pt-[80px] md:px-[48px] lg:px-[80px]">
      <ConstellationGrid className="opacity-30" />

      <div className="relative z-10 mx-auto w-full max-w-[1200px]">
        <AnimatedSection>
          <h1 className="font-playfair text-[36px] font-normal leading-[1] tracking-[-0.01em] text-white sm:text-[48px] md:text-[77px] lg:text-[96px]">
            Tecnologia que comunica
            <br />
            <span className="text-bone">Soluções que funcionam</span>
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="mt-[24px] max-w-[560px] text-[18px] font-normal leading-[1.5] text-ash md:mt-[32px]">
            Automação, integrações e agentes de IA construídos com engenharia de
            verdade, para empresas que precisam de resultados, não de promessas.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="mt-[16px] md:mt-[24px]">
            <span className="text-iris">
              <TypingEffect words={["Automação com IA", "Integrações", "Atendimento Inteligente", "SaaS sob Medida"]} />
            </span>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="mt-[40px] flex flex-col gap-[12px] sm:flex-row md:mt-[48px]">
            <a
              href="#contato"
              className="btn-slide inline-flex items-center gap-[8px] rounded-[9999px] border border-graphite bg-transparent px-[20px] py-[12px] text-[16px] font-normal text-white md:px-[24px] md:py-[14px]"
            >
              Agende uma conversa
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#solucoes"
              className="inline-flex items-center gap-[6px] rounded-[9999px] border border-transparent px-[20px] py-[12px] text-[16px] font-normal text-bone transition-all duration-200 hover:border-graphite hover:bg-white hover:text-black md:px-[24px] md:py-[14px]"
            >
              Conheça as soluções
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
