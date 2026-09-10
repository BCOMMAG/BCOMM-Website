"use client";

import { AnimatedSection } from "./AnimatedSection";
import { SpotlightCard } from "./SpotlightCard";

export function About() {
  return (
    <section id="sobre" className="border-t border-graphite bg-transparent px-[24px] py-[96px] md:px-[48px] md:py-[120px] lg:px-[80px] lg:py-[144px]">
      <div className="mx-auto max-w-[1200px]">
        {/* Cabeçalho da Seção */}
        <AnimatedSection>
          <div className="flex items-center gap-2">
            <span className="h-[6px] w-[6px] rounded-full bg-iris" />
            <p className="font-mono text-[12px] uppercase tracking-[0.08em] text-ash">
              Por que a BCOMM
            </p>
          </div>
          <h2 className="mt-[12px] text-[36px] font-normal leading-[1.15] tracking-[-0.05em] text-white sm:text-[44px] md:text-[56px]">
            Engenharia com propósito e telemetria real
          </h2>
          <p className="mt-[16px] max-w-[640px] text-[16px] leading-[1.6] text-ash sm:text-[18px]">
            Eliminamos amadorismo, templates lentos e soluções frágeis. Cada sistema que entregamos é desenhado para operar no limite de performance e retorno mensurável.
          </p>
        </AnimatedSection>

        {/* Bento Box Grid Interativo */}
        <div className="mt-[48px] grid grid-cols-1 gap-[20px] md:mt-[64px] md:grid-cols-12">
          
          {/* Card 1: Código Proprietário & Velocidade (Span 7 cols) */}
          <div className="md:col-span-7">
            <AnimatedSection delay={0.1} className="h-full">
              <SpotlightCard className="flex h-full flex-col justify-between p-[32px] md:p-[40px]">
                <div>
                  <div className="flex items-center justify-between border-b border-graphite/80 pb-[20px]">
                    <span className="font-mono text-[13px] tracking-wider text-iris">
                      01 // ARQUITETURA NEXT.JS EDGE
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-[10px] py-[4px] font-mono text-[11px] font-medium text-emerald-400">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                      SUB-SEGUNDO
                    </span>
                  </div>

                  <h3 className="mt-[24px] text-[24px] font-medium leading-[1.3] text-bone md:text-[28px]">
                    Código Proprietário & Velocidade Extrema
                  </h3>
                  <p className="mt-[12px] text-[15px] leading-[1.6] text-ash">
                    Sem templates pesados de WordPress ou construtores genéricos. Engenharia pura em Next.js com carregamento em milissegundos, Core Web Vitals perfeitos e deploy distribuído em Edge Global.
                  </p>
                </div>

                {/* Telemetria de Performance Visual */}
                <div className="mt-[32px] rounded-[12px] border border-graphite bg-[#070708] p-[20px]">
                  <div className="flex items-center justify-between text-[11px] font-mono uppercase text-ash/80">
                    <span>Métrica de Carregamento</span>
                    <span className="text-emerald-400">Google Lighthouse 100/100</span>
                  </div>

                  {/* Barra de Progresso / Velocidade */}
                  <div className="mt-[12px] space-y-2">
                    <div className="flex justify-between font-mono text-[13px] text-white">
                      <span>TTFB (Time to First Byte)</span>
                      <span className="text-iris font-semibold">0.04s</span>
                    </div>
                    <div className="h-[6px] w-full overflow-hidden rounded-full bg-graphite/60">
                      <div className="h-full w-[94%] rounded-full bg-gradient-to-r from-iris to-emerald-400" />
                    </div>
                  </div>

                  <div className="mt-[16px] grid grid-cols-3 gap-2 border-t border-graphite/50 pt-[14px] text-center font-mono">
                    <div>
                      <div className="text-[18px] font-semibold text-white">0.38s</div>
                      <div className="text-[10px] uppercase text-ash">FCP Load</div>
                    </div>
                    <div>
                      <div className="text-[18px] font-semibold text-white">0.00</div>
                      <div className="text-[10px] uppercase text-ash">CLS Score</div>
                    </div>
                    <div>
                      <div className="text-[18px] font-semibold text-emerald-400">A+</div>
                      <div className="text-[10px] uppercase text-ash">Edge Security</div>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </AnimatedSection>
          </div>

          {/* Card 2: Inteligência Artificial Integrada & Webhooks (Span 5 cols) */}
          <div className="md:col-span-5">
            <AnimatedSection delay={0.2} className="h-full">
              <SpotlightCard className="flex h-full flex-col justify-between p-[32px] md:p-[40px]">
                <div>
                  <div className="flex items-center justify-between border-b border-graphite/80 pb-[20px]">
                    <span className="font-mono text-[13px] tracking-wider text-iris">
                      02 // AGENTES AUTÔNOMOS
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-iris/30 bg-iris/10 px-[10px] py-[4px] font-mono text-[11px] font-medium text-iris">
                      24/7 ONLINE
                    </span>
                  </div>

                  <h3 className="mt-[24px] text-[24px] font-medium leading-[1.3] text-bone md:text-[28px]">
                    Inteligência Artificial Nativa
                  </h3>
                  <p className="mt-[12px] text-[15px] leading-[1.6] text-ash">
                    Não desenvolvemos páginas mortas. Integramos fluxos de raciocínio de IA, webhooks em tempo real e automações que atendem, qualificam e operam seu negócio sem pausas.
                  </p>
                </div>

                {/* Simulador de Telemetria de Terminal IA */}
                <div className="mt-[32px] rounded-[12px] border border-graphite bg-[#070708] p-[18px] font-mono">
                  <div className="flex items-center justify-between border-b border-graphite/60 pb-2 text-[11px] text-ash">
                    <span className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                      webhook_listener: active
                    </span>
                    <span className="text-[10px] text-iron">PORT: 443</span>
                  </div>
                  <div className="mt-3 space-y-1.5 text-[12px]">
                    <div className="text-ash/70">{`> payload_received: { source: "whatsapp" }`}</div>
                    <div className="text-iris">{`> agent_rag: context match (score: 0.98)`}</div>
                    <div className="text-emerald-400 font-semibold">{`> status: lead_qualified_in_420ms`}</div>
                  </div>
                  <div className="mt-3 flex items-center justify-between border-t border-graphite/50 pt-2 text-[10px] text-ash/80">
                    <span>Taxa de resolução</span>
                    <span className="text-white font-medium">92% autônoma</span>
                  </div>
                </div>
              </SpotlightCard>
            </AnimatedSection>
          </div>

          {/* Card 3: Foco em Resultados Mensuráveis (Span 12 cols - Full Width Banner Bento) */}
          <div className="md:col-span-12">
            <AnimatedSection delay={0.3}>
              <SpotlightCard className="p-[32px] md:p-[40px]">
                <div className="grid grid-cols-1 gap-[24px] md:grid-cols-12 md:items-center">
                  <div className="md:col-span-7">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[13px] tracking-wider text-iris">
                        03 // RESULTADOS REAIS
                      </span>
                      <span className="rounded-full border border-graphite bg-iron/20 px-2 py-0.5 font-mono text-[10px] text-ash uppercase">
                        Data-Driven ROI
                      </span>
                    </div>
                    <h3 className="mt-[16px] text-[24px] font-medium leading-[1.3] text-bone md:text-[28px]">
                      Cada linha de código desenhada para tração financeira
                    </h3>
                    <p className="mt-[10px] max-w-[560px] text-[15px] leading-[1.6] text-ash">
                      Não entregamos design por vaidade. Estruturamos a jornada inteira do visitante com copy persuasiva, funil de conversão sem fricção e relatórios de impacto direto no faturamento.
                    </p>
                  </div>

                  {/* Indicadores de Impacto */}
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:col-span-5">
                    <div className="rounded-[12px] border border-graphite bg-[#070708] p-[16px] text-left">
                      <span className="font-mono text-[28px] font-semibold tracking-tight text-white lg:text-[32px]">
                        +3.2x
                      </span>
                      <p className="mt-1 text-[12px] leading-tight text-ash">
                        Aumento na taxa de conversão
                      </p>
                    </div>

                    <div className="rounded-[12px] border border-graphite bg-[#070708] p-[16px] text-left">
                      <span className="font-mono text-[28px] font-semibold tracking-tight text-iris lg:text-[32px]">
                        -73%
                      </span>
                      <p className="mt-1 text-[12px] leading-tight text-ash">
                        Tempo de espera do cliente
                      </p>
                    </div>

                    <div className="col-span-2 rounded-[12px] border border-graphite bg-[#070708] p-[16px] text-left sm:col-span-1">
                      <span className="font-mono text-[28px] font-semibold tracking-tight text-emerald-400 lg:text-[32px]">
                        Zero
                      </span>
                      <p className="mt-1 text-[12px] leading-tight text-ash">
                        Dependência de templates legados
                      </p>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </AnimatedSection>
          </div>

        </div>
      </div>
    </section>
  );
}
