"use client";

import { useTranslation } from "@/context/LocaleContext";
import { AnimatedSection } from "./AnimatedSection";
import { SpotlightCard } from "./SpotlightCard";

export function Process() {
  const { dict } = useTranslation();
  const steps = dict.process.steps;

  return (
    <section id="processo" className="border-t border-graphite bg-transparent px-[24px] py-[96px] md:px-[48px] md:py-[120px] lg:px-[80px] lg:py-[144px]">
      <div className="mx-auto max-w-[1200px]">
        {/* Cabeçalho da Seção */}
        <AnimatedSection>
          <div className="flex items-center gap-2">
            <span className="h-[6px] w-[6px] rounded-full bg-iris" />
            <p className="font-mono text-[12px] uppercase tracking-[0.08em] text-ash">
              {dict.process.tag}
            </p>
          </div>
          <h2 className="mt-[12px] text-[36px] font-normal leading-[1.15] tracking-[-0.05em] text-white sm:text-[44px] md:text-[56px]">
            {dict.process.title}
          </h2>
          <p className="mt-[16px] max-w-[640px] text-[16px] leading-[1.6] text-ash sm:text-[18px]">
            {dict.process.subtitle}
          </p>
        </AnimatedSection>

        {/* Linha do Tempo Visual */}
        <div className="relative mt-[56px] md:mt-[72px]">
          {/* Trilha Conectora Sutil */}
          <div className="pointer-events-none absolute left-0 top-[28px] hidden h-[2px] w-full bg-gradient-to-r from-iris/10 via-iris/60 to-iris/10 md:block" />
          <div className="pointer-events-none absolute left-[19px] top-0 h-full w-[2px] bg-gradient-to-b from-iris/30 via-iris/60 to-transparent md:hidden" />

          <div className="grid grid-cols-1 gap-[24px] md:grid-cols-4 md:gap-[20px]">
            {steps.map((step, idx) => (
              <AnimatedSection key={step.number} delay={idx * 0.12} className="relative">
                {/* Marcador de Etapa Conectado */}
                <div className="mb-[20px] flex items-center gap-3">
                  <div className="relative z-10 flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full border border-iris/40 bg-[#0b0b0c] text-iris shadow-[0_0_15px_rgba(146,129,247,0.25)]">
                    <span className="font-mono text-[13px] font-semibold">{step.number}</span>
                    <span className="absolute -inset-1 rounded-full border border-iris/20 opacity-60" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-mono text-[10px] tracking-wider text-iris uppercase">
                      Etapa {step.number}
                    </span>
                    <span className="font-mono text-[11px] text-ash">
                      {step.detail}
                    </span>
                  </div>
                </div>

                {/* Card com Efeito Suave */}
                <SpotlightCard className="flex h-[calc(100%-60px)] flex-col justify-between p-[24px]">
                  <div>
                    <h3 className="text-[18px] font-medium leading-[1.3] text-white">
                      {step.title}
                    </h3>
                    <p className="mt-[12px] text-[14px] leading-[1.6] text-ash">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-[20px] border-t border-graphite/60 pt-[14px] flex items-center justify-between font-mono text-[11px] text-bone">
                    <span className="text-iris">{"//"} {step.detail}</span>
                    <span className="text-emerald-400">Ativa</span>
                  </div>
                </SpotlightCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}