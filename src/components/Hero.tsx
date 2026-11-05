"use client";

import Link from "next/link";
import { TypingEffect } from "./TypingEffect";
import { useTranslation } from "@/context/LocaleContext";

export function Hero() {
  const { dict } = useTranslation();

  return (
    <section className="relative flex min-h-[100dvh] flex-col justify-between overflow-hidden bg-transparent px-[24px] pt-[88px] pb-[32px] md:px-[48px] md:pt-[104px] md:pb-[44px] lg:px-[80px]">
      <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-1 flex-col justify-between">
        
        {/* Bloco Superior: Título Fixo no Topo com Máximo Destaque */}
        <div className="pt-[6px] md:pt-[12px]">
          <h1 className="animate-hero-in font-playfair text-[32px] font-normal leading-[1.1] tracking-[-0.01em] text-white drop-shadow-[0_4px_28px_rgba(0,0,0,0.8)] sm:text-[44px] md:text-[56px] lg:text-[64px]">
            {dict.hero.titlePrefix}{" "}
            <span className="text-iris">
              <TypingEffect key={dict.locale} words={dict.hero.typingWords} />
            </span>
          </h1>
        </div>

        {/* Bloco Inferior: Subtítulo, Botões e Badges descidos para a área inferior */}
        <div className="mt-auto pt-[20vh] md:pt-[16vh]">
          {/* Subtítulo Descritivo */}
          <p className="animate-hero-in-delayed max-w-[640px] text-[15px] font-normal leading-[1.6] text-ash drop-shadow-[0_2px_16px_rgba(0,0,0,0.85)] sm:text-[18px] md:text-[17px]">
            {dict.hero.description}
          </p>

          {/* Botões de Ação */}
          <div className="animate-hero-in-delayed-2 mt-[20px] flex flex-col gap-[12px] sm:flex-row sm:items-center md:mt-[24px]">
            <Link
              href="/#contato"
              className="btn-slide inline-flex items-center justify-center gap-[8px] rounded-[9999px] border border-iris/60 bg-iris/15 px-[24px] py-[13px] text-[15px] font-medium text-white shadow-[0_4px_20px_rgba(146,129,247,0.15)] backdrop-blur-md transition-all duration-200 hover:border-iris hover:bg-iris hover:text-black md:text-[16px] md:py-[14px]"
            >
              {dict.hero.ctaPrimary}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              href="/servicos"
              className="inline-flex items-center justify-center gap-[6px] rounded-[9999px] border border-graphite/80 bg-black/40 px-[22px] py-[13px] text-[15px] font-normal text-bone backdrop-blur-md transition-all duration-200 hover:border-white hover:bg-white hover:text-black md:text-[16px] md:py-[14px]"
            >
              {dict.hero.ctaSecondary}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          {/* Linha com os 3 Cards / Badges Técnicas (oculta no mobile, visível no desktop na base) */}
          <div className="animate-hero-in-delayed-2 mt-[28px] hidden flex-wrap items-center gap-[12px] border-t border-graphite/60 pt-[20px] md:flex">
            {dict.hero.badges.map((badge) => (
              <div
                key={badge}
                className="flex items-center gap-[6px] rounded-[6px] border border-graphite/80 bg-[#0b0b0c]/70 px-[10px] py-[5px] font-mono text-[11px] text-bone uppercase backdrop-blur-sm shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
              >
                <span className="text-iris">/</span> {badge}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}