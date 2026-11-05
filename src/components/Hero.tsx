"use client";

import Link from "next/link";
import { TypingEffect } from "./TypingEffect";
import { useTranslation } from "@/context/LocaleContext";

export function Hero() {
  const { dict } = useTranslation();

  return (
    <section className="relative flex min-h-[100dvh] flex-col justify-between overflow-hidden bg-transparent px-[24px] pt-[86px] pb-[32px] md:min-h-[100dvh] md:items-center md:justify-center md:px-[48px] md:pt-[80px] md:pb-0 lg:px-[80px]">
      <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-1 flex-col justify-between md:block md:flex-none">
        
        {/* Bloco Superior: Título Fixo no Topo */}
        <div className="pt-[8px] md:pt-0">
          <h1 className="animate-hero-in font-playfair text-[32px] font-normal leading-[1.1] tracking-[-0.01em] text-white sm:text-[44px] md:text-[56px] lg:text-[64px]">
            {dict.hero.titlePrefix}{" "}
            <span className="text-iris">
              <TypingEffect key={dict.locale} words={dict.hero.typingWords} />
            </span>
          </h1>
        </div>

        {/* Bloco Inferior no Mobile: Subtexto e Botões descidos para o fundo */}
        <div className="mt-auto pt-[24vh] md:mt-0 md:pt-0">
          <p className="animate-hero-in-delayed text-[15px] font-normal leading-[1.6] text-ash sm:text-[19px] md:mt-[32px] md:max-w-[620px] md:text-[17px]">
            {dict.hero.description}
          </p>

          <div className="animate-hero-in-delayed-2 mt-[20px] flex flex-col gap-[12px] sm:flex-row sm:items-center md:mt-[48px]">
            <Link
              href="/#contato"
              className="btn-slide inline-flex items-center justify-center gap-[8px] rounded-[9999px] border border-iris/50 bg-iris/10 px-[24px] py-[13px] text-[15px] font-medium text-white transition-all duration-200 hover:border-iris hover:bg-iris hover:text-black md:text-[16px] md:py-[14px]"
            >
              {dict.hero.ctaPrimary}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              href="/servicos"
              className="inline-flex items-center justify-center gap-[6px] rounded-[9999px] border border-graphite px-[22px] py-[13px] text-[15px] font-normal text-bone transition-all duration-200 hover:border-white hover:bg-white hover:text-black md:text-[16px] md:py-[14px]"
            >
              {dict.hero.ctaSecondary}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Badges Técnicas: Ocultas no Mobile (hidden), Visíveis no Desktop (md:flex) */}
        <div className="animate-hero-in-delayed-2 mt-[48px] hidden flex-wrap items-center gap-[12px] border-t border-graphite/60 pt-[24px] md:flex">
          {dict.hero.badges.map((badge) => (
            <div
              key={badge}
              className="flex items-center gap-[6px] rounded-[6px] border border-graphite bg-[#0b0b0c]/40 px-[10px] py-[5px] font-mono text-[11px] text-bone uppercase"
            >
              <span className="text-iris">/</span> {badge}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}