"use client";

import { TypingEffect } from "./TypingEffect";

export function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] items-center overflow-hidden bg-transparent px-[24px] pt-[80px] md:px-[48px] lg:px-[80px]">
      <div className="relative z-10 mx-auto w-full max-w-[1200px]">
        <h1 className="animate-hero-in font-playfair text-[36px] font-normal leading-[1.1] tracking-[-0.01em] text-white sm:text-[44px] md:text-[56px] lg:text-[64px]">
          Tecnologia que{" "}
          <span className="text-iris">
            <TypingEffect words={["multiplica suas vendas", "escala sua operação", "automatiza seu negócio"]} />
          </span>
        </h1>

        <p className="animate-hero-in-delayed mt-[24px] max-w-[620px] text-[17px] font-normal leading-[1.6] text-ash sm:text-[19px] md:mt-[32px]">
          Construímos plataformas web de alta velocidade e agentes de IA autônomos que operam em regime ininterrupto para captar clientes, fechar negócios e reduzir despesas operacionais da sua empresa.
        </p>

        <div className="animate-hero-in-delayed-2 mt-[40px] flex flex-col gap-[12px] sm:flex-row sm:items-center md:mt-[48px]">
          <a
            href="#contato"
            className="btn-slide inline-flex items-center justify-center gap-[8px] rounded-[9999px] border border-iris/50 bg-iris/10 px-[24px] py-[14px] text-[16px] font-medium text-white transition-all duration-200 hover:border-iris hover:bg-iris hover:text-black"
          >
            Solicitar Proposta
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="/servicos"
            className="inline-flex items-center justify-center gap-[6px] rounded-[9999px] border border-graphite px-[22px] py-[14px] text-[16px] font-normal text-bone transition-all duration-200 hover:border-white hover:bg-white hover:text-black"
          >
            Conheça nossas soluções
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        <div className="animate-hero-in-delayed-2 mt-[48px] flex flex-wrap items-center gap-[12px] border-t border-graphite/60 pt-[24px]">
          <div className="flex items-center gap-[6px] rounded-[6px] border border-graphite bg-[#0b0b0c]/40 px-[10px] py-[5px] font-mono text-[11px] text-bone">
            <span className="text-iris">/</span> CARREGAMENTO &lt; 1S
          </div>
          <div className="flex items-center gap-[6px] rounded-[6px] border border-graphite bg-[#0b0b0c]/40 px-[10px] py-[5px] font-mono text-[11px] text-bone">
            <span className="text-iris">/</span> IA ATIVA 24/7
          </div>
          <div className="flex items-center gap-[6px] rounded-[6px] border border-graphite bg-[#0b0b0c]/40 px-[10px] py-[5px] font-mono text-[11px] text-bone">
            <span className="text-iris">/</span> FOCO EM ROI MENSURÁVEL
          </div>
        </div>
      </div>
    </section>
  );
}
