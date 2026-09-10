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
    phase: "FASE 01",
    duration: "48 Horas",
    title: "Diagnóstico & Mapeamento de Gargalos",
    description:
      "Auditamos detalhadamente a infraestrutura atual, a jornada do cliente e os pontos de atrito no funil. Definimos o escopo cirúrgico e o plano de retorno sobre o investimento.",
    deliverables: ["Auditoria Técnica", "Mapeamento de Fluxo", "Matriz de Escopo"],
  },
  {
    number: "02",
    phase: "FASE 02",
    duration: "Ciclo 1",
    title: "Arquitetura & Engenharia de Conversão",
    description:
      "Construímos wireframes de alta fidelidade, desenhamos a arquitetura do banco de dados e estruturamos os prompts e fontes de conhecimento dos agentes de IA.",
    deliverables: ["UI/UX sob Medida", "Schema & RAG Specs", "Protótipo Funcional"],
  },
  {
    number: "03",
    phase: "FASE 03",
    duration: "Ciclo 2",
    title: "Engenharia de Código & Integrações",
    description:
      "Codificação em Next.js no padrão BCOMM, integração de APIs (CRMs, gateways de pagamento, WhatsApp Business Cloud) e testes automatizados de carga.",
    deliverables: ["Código Next.js Edge", "Conexão Webhooks", "Zero Erros de Console"],
  },
  {
    number: "04",
    phase: "FASE 04",
    duration: "Contínuo",
    title: "Go-Live, Telemetria & Escala",
    description:
      "Publicação global em Edge Network com DNS protegido, indexação técnica para buscadores e IAs, acompanhamento contínuo de conversões e suporte rápido.",
    deliverables: ["Deploy Edge Global", "Auditoria 100/100", "Monitoramento Ativo"],
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
            Do diagnóstico à evolução contínua
          </h2>
          <p className="mt-[16px] max-w-[640px] text-[16px] leading-[1.6] text-ash sm:text-[18px]">
            Um método claro, linear e sem ruídos. Você acompanha cada etapa de forma transparente, com entregáveis palpáveis e validação contínua.
          </p>
        </AnimatedSection>

        {/* Linha do Tempo Dinâmica */}
        <div className="relative mt-[56px] md:mt-[72px]">
          {/* Trilha do Feixe Conector Luminous (Desktop: horizontal, Mobile: vertical) */}
          <div className="pointer-events-none absolute left-0 top-[28px] hidden h-[2px] w-full bg-gradient-to-r from-iris/10 via-iris/60 to-iris/10 md:block" />
          <div className="pointer-events-none absolute left-[19px] top-0 h-full w-[2px] bg-gradient-to-b from-iris/30 via-iris/60 to-transparent md:hidden" />

          <div className="grid grid-cols-1 gap-[24px] md:grid-cols-4 md:gap-[20px]">
            {stepsData.map((step, idx) => (
              <AnimatedSection key={step.number} delay={idx * 0.12} className="relative">
                {/* Marcador de Conexão com Nó Iluminado */}
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

                {/* Card de Conteúdo com Spotlight */}
                <SpotlightCard className="flex h-[calc(100%-60px)] flex-col justify-between p-[24px]">
                  <div>
                    <h3 className="text-[19px] font-medium leading-[1.35] text-white">
                      {step.title}
                    </h3>
                    <p className="mt-[12px] text-[14px] leading-[1.6] text-ash">
                      {step.description}
                    </p>
                  </div>

                  {/* Badges de Entregáveis Técnicos */}
                  <div className="mt-[24px] border-t border-graphite/60 pt-[16px]">
                    <span className="block font-mono text-[10px] uppercase tracking-wider text-ash/70">
                      Entregáveis da Fase:
                    </span>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {step.deliverables.map((item) => (
                        <span
                          key={item}
                          className="rounded-[6px] border border-graphite bg-[#070708] px-2 py-1 font-mono text-[10px] text-bone/90"
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

        {/* Rodapé Informativo da Metodologia */}
        <AnimatedSection delay={0.4} className="mt-[40px]">
          <div className="flex flex-col items-start justify-between gap-4 rounded-[14px] border border-graphite bg-[#0b0b0c]/60 px-[24px] py-[18px] sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span className="text-[14px] text-bone">
                Transparência absoluta: acesso em tempo real ao ambiente de homologação e código-fonte.
              </span>
            </div>
            <span className="shrink-0 font-mono text-[12px] uppercase text-iris">
              SLA Médio de Entrada: 48 Horas
            </span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
