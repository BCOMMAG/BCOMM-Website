"use client";

import { AnimatedSection } from "./AnimatedSection";
import { SpotlightCard } from "./SpotlightCard";

interface StepItem {
  number: string;
  phase: string;
  duration: string;
  title: string;
  description: string;
  deliverables: string[];
}

const stepsData: StepItem[] = [
  {
    number: "01",
    phase: "ETAPA 01",
    duration: "Primeiras 48h",
    title: "Alinhamento & Plano Estratégico",
    description:
      "Entendemos o seu modelo de negócio, quem é o seu público e o que você precisa resolver. Definimos o que será feito com clareza, prazo certo e sem custos surpresa.",
    deliverables: ["Entendimento do Negócio", "Plano de Ação", "Orçamento Transparente"],
  },
  {
    number: "02",
    phase: "ETAPA 02",
    duration: "Design & Copy",
    title: "Criação Visual & Textos de Venda",
    description:
      "Criamos um design exclusivo com a identidade da sua marca e escrevemos textos estratégicos que prendem a atenção e mostram com clareza a autoridade da sua empresa.",
    deliverables: ["Visual Exclusivo", "Textos Persuasivos", "Aprovação com Você"],
  },
  {
    number: "03",
    phase: "ETAPA 03",
    duration: "Construção",
    title: "Desenvolvimento & Automações",
    description:
      "Construímos a estrutura técnica para que o site seja ultrarrápido no celular e integramos seus canais de contato (WhatsApp, formulários e sistemas que você já utiliza).",
    deliverables: ["Carregamento Instantâneo", "Conexão com WhatsApp", "Testes em Celulares"],
  },
  {
    number: "04",
    phase: "ETAPA 04",
    duration: "Entrega & Apoio",
    title: "Lançamento & Suporte Contínuo",
    description:
      "Colocamos o seu projeto no ar, configuramos a presença para o Google encontrar sua empresa e prestamos todo o suporte para que você nunca fique na mão.",
    deliverables: ["Publicação no Ar", "Otimização para o Google", "Acompanhamento Ativo"],
  },
];

export function Process() {
  return (
    <section id="processo" className="border-t border-graphite bg-transparent px-[24px] py-[96px] md:px-[48px] md:py-[120px] lg:px-[80px] lg:py-[144px]">
      <div className="mx-auto max-w-[1200px]">
        {/* Cabeçalho da Seção */}
        <AnimatedSection>
          <div className="flex items-center gap-2">
            <span className="h-[6px] w-[6px] rounded-full bg-iris" />
            <p className="font-mono text-[12px] uppercase tracking-[0.08em] text-ash">
              Como trabalhamos
            </p>
          </div>
          <h2 className="mt-[12px] text-[36px] font-normal leading-[1.15] tracking-[-0.05em] text-white sm:text-[44px] md:text-[56px]">
            Um processo simples, transparente e sem complicações
          </h2>
          <p className="mt-[16px] max-w-[640px] text-[16px] leading-[1.6] text-ash sm:text-[18px]">
            Você acompanha a evolução do seu projeto passo a passo, sabendo exatamente o que está sendo construído e quando cada etapa será entregue.
          </p>
        </AnimatedSection>

        {/* Linha do Tempo Visual */}
        <div className="relative mt-[56px] md:mt-[72px]">
          {/* Trilha Conectora Sutil (Desktop: horizontal, Mobile: vertical) */}
          <div className="pointer-events-none absolute left-0 top-[28px] hidden h-[2px] w-full bg-gradient-to-r from-iris/10 via-iris/60 to-iris/10 md:block" />
          <div className="pointer-events-none absolute left-[19px] top-0 h-full w-[2px] bg-gradient-to-b from-iris/30 via-iris/60 to-transparent md:hidden" />

          <div className="grid grid-cols-1 gap-[24px] md:grid-cols-4 md:gap-[20px]">
            {stepsData.map((step, idx) => (
              <AnimatedSection key={step.number} delay={idx * 0.12} className="relative">
                {/* Marcador de Etapa Conectado */}
                <div className="mb-[20px] flex items-center gap-3">
                  <div className="relative z-10 flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full border border-iris/40 bg-[#0b0b0c] text-iris shadow-[0_0_15px_rgba(146,129,247,0.25)]">
                    <span className="font-mono text-[13px] font-semibold">{step.number}</span>
                    <span className="absolute -inset-1 rounded-full border border-iris/20 opacity-60" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-mono text-[10px] tracking-wider text-iris uppercase">
                      {step.phase}
                    </span>
                    <span className="font-mono text-[11px] text-ash">
                      {step.duration}
                    </span>
                  </div>
                </div>

                {/* Card com Efeito Suave */}
                <SpotlightCard className="flex h-[calc(100%-60px)] flex-col justify-between p-[24px]">
                  <div>
                    <h3 className="text-[19px] font-medium leading-[1.35] text-white">
                      {step.title}
                    </h3>
                    <p className="mt-[12px] text-[14px] leading-[1.6] text-ash">
                      {step.description}
                    </p>
                  </div>

                  {/* Entregáveis de Fácil Entendimento */}
                  <div className="mt-[24px] border-t border-graphite/60 pt-[16px]">
                    <span className="block font-mono text-[10px] uppercase tracking-wider text-ash/70">
                      O que você recebe:
                    </span>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {step.deliverables.map((item) => (
                        <span
                          key={item}
                          className="rounded-[6px] border border-graphite bg-[#070708] px-2 py-1 text-[11px] text-bone/90"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </SpotlightCard>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Rodapé de Confiança e Agilidade */}
        <AnimatedSection delay={0.4} className="mt-[40px]">
          <div className="flex flex-col items-start justify-between gap-4 rounded-[14px] border border-graphite bg-[#0b0b0c]/60 px-[24px] py-[18px] sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span className="text-[14px] text-bone">
                Você testa e valida tudo antes do lançamento oficial. Total controle em suas mãos.
              </span>
            </div>
            <span className="shrink-0 font-mono text-[12px] uppercase text-iris">
              Início do Diagnóstico em até 48 Horas
            </span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
