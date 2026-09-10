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
            Tecnologia feita para gerar faturamento real
          </h2>
          <p className="mt-[16px] max-w-[640px] text-[16px] leading-[1.6] text-ash sm:text-[18px]">
            Não construímos páginas apenas para ficarem bonitas. Desenvolvemos soluções com velocidade extrema, atendimento automatizado 24 horas e foco direto em conversão de clientes.
          </p>
        </AnimatedSection>

        {/* Bento Box Grid */}
        <div className="mt-[48px] grid grid-cols-1 gap-[20px] md:mt-[64px] md:grid-cols-12">
          
          {/* Card 1: Velocidade que Evita Perda de Vendas (Span 7 cols) */}
          <div className="md:col-span-7">
            <AnimatedSection delay={0.1} className="h-full">
              <SpotlightCard className="flex h-full flex-col justify-between p-[32px] md:p-[40px]">
                <div>
                  <div className="flex items-center justify-between border-b border-graphite/80 pb-[20px]">
                    <span className="font-mono text-[13px] tracking-wider text-iris uppercase">
                      01 // MÁXIMA VELOCIDADE
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-[10px] py-[4px] font-mono text-[11px] font-medium text-emerald-400">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                      ABERTURA IMEDIATA
                    </span>
                  </div>

                  <h3 className="mt-[24px] text-[24px] font-medium leading-[1.3] text-bone md:text-[28px]">
                    Seu site abre instantaneamente, sem travar nem perder clientes
                  </h3>
                  <p className="mt-[12px] text-[15px] leading-[1.6] text-ash">
                    Mais da metade das pessoas desiste de comprar se uma página demora mais de 3 segundos para abrir. Nossos websites abrem em uma fração de segundo no celular de qualquer cliente, garantindo que você aproveite 100% dos acessos de quem clicou no seu anúncio.
                  </p>
                </div>

                {/* Painel Visual de Desempenho */}
                <div className="mt-[32px] rounded-[12px] border border-graphite bg-[#070708] p-[20px]">
                  <div className="flex items-center justify-between text-[11px] font-mono uppercase text-ash/80">
                    <span>Experiência do Usuário</span>
                    <span className="text-emerald-400 font-semibold">Nota Máxima no Google</span>
                  </div>

                  {/* Barra de Carregamento */}
                  <div className="mt-[12px] space-y-2">
                    <div className="flex justify-between font-mono text-[13px] text-white">
                      <span>Tempo de Abertura no Celular</span>
                      <span className="text-emerald-400 font-semibold">Menos de 1 segundo</span>
                    </div>
                    <div className="h-[6px] w-full overflow-hidden rounded-full bg-graphite/60">
                      <div className="h-full w-[96%] rounded-full bg-gradient-to-r from-iris to-emerald-400" />
                    </div>
                  </div>

                  <div className="mt-[16px] grid grid-cols-3 gap-2 border-t border-graphite/50 pt-[14px] text-center">
                    <div>
                      <div className="font-mono text-[18px] font-semibold text-white">0%</div>
                      <div className="text-[11px] text-ash">Fricção ou travamento</div>
                    </div>
                    <div>
                      <div className="font-mono text-[18px] font-semibold text-white">100%</div>
                      <div className="text-[11px] text-ash">Otimizado para celular</div>
                    </div>
                    <div>
                      <div className="font-mono text-[18px] font-semibold text-emerald-400">Total</div>
                      <div className="text-[11px] text-ash">Código de propriedade sua</div>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </AnimatedSection>
          </div>

          {/* Card 2: Atendimento Inteligente 24 Horas (Span 5 cols) */}
          <div className="md:col-span-5">
            <AnimatedSection delay={0.2} className="h-full">
              <SpotlightCard className="flex h-full flex-col justify-between p-[32px] md:p-[40px]">
                <div>
                  <div className="flex items-center justify-between border-b border-graphite/80 pb-[20px]">
                    <span className="font-mono text-[13px] tracking-wider text-iris uppercase">
                      02 // ATENDIMENTO 24H
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-iris/30 bg-iris/10 px-[10px] py-[4px] font-mono text-[11px] font-medium text-iris">
                      RESPOSTA EM SEGUNDOS
                    </span>
                  </div>

                  <h3 className="mt-[24px] text-[24px] font-medium leading-[1.3] text-bone md:text-[28px]">
                    Sua empresa vendendo mesmo fora do horário comercial
                  </h3>
                  <p className="mt-[12px] text-[15px] leading-[1.6] text-ash">
                    Não perca leads durante a noite ou aos finais de semana. Nossos agentes inteligentes atendem no WhatsApp, tiram dúvidas frequentes, explicam seus serviços e agendam reuniões de forma natural.
                  </p>
                </div>

                {/* Simulador de Atendimento Humanizado */}
                <div className="mt-[32px] rounded-[12px] border border-graphite bg-[#070708] p-[18px]">
                  <div className="flex items-center justify-between border-b border-graphite/60 pb-2 text-[11px]">
                    <span className="flex items-center gap-1.5 text-ash">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                      Assistente de Atendimento Ativo
                    </span>
                    <span className="font-mono text-[10px] text-iris">24h / 7 dias</span>
                  </div>

                  {/* Diálogo ilustrativo claro para o empresário */}
                  <div className="mt-3 space-y-2 text-[12px]">
                    <div className="rounded-[8px] bg-graphite/40 p-2 text-bone/90">
                      <span className="text-[10px] block font-mono text-ash mb-0.5">Cliente (WhatsApp - 22:45)</span>
                      &ldquo;Boa noite! Gostaria de saber como funciona o serviço de vocês.&rdquo;
                    </div>
                    <div className="rounded-[8px] border border-iris/20 bg-iris/10 p-2 text-white">
                      <span className="text-[10px] block font-mono text-iris mb-0.5">IA da sua empresa (22:45)</span>
                      &ldquo;Olá! Criamos seu projeto personalizado. Posso te apresentar as opções agora ou agendar com nosso time?&rdquo;
                    </div>
                  </div>

                  <div className="mt-3 flex items-center justify-between border-t border-graphite/50 pt-2 text-[11px] text-ash">
                    <span>Tempo médio de resposta</span>
                    <span className="text-emerald-400 font-medium">Imediato (menos de 5s)</span>
                  </div>
                </div>
              </SpotlightCard>
            </AnimatedSection>
          </div>

          {/* Card 3: Retorno Mensurável & ROI (Span 12 cols) */}
          <div className="md:col-span-12">
            <AnimatedSection delay={0.3}>
              <SpotlightCard className="p-[32px] md:p-[40px]">
                <div className="grid grid-cols-1 gap-[24px] md:grid-cols-12 md:items-center">
                  <div className="md:col-span-7">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[13px] tracking-wider text-iris uppercase">
                        03 // RESULTADOS REAIS
                      </span>
                      <span className="rounded-full border border-graphite bg-iron/20 px-2 py-0.5 font-mono text-[10px] text-ash uppercase">
                        Retorno do Investimento
                      </span>
                    </div>
                    <h3 className="mt-[16px] text-[24px] font-medium leading-[1.3] text-bone md:text-[28px]">
                      Criado para transformar visitantes comuns em clientes pagantes
                    </h3>
                    <p className="mt-[10px] max-w-[580px] text-[15px] leading-[1.6] text-ash">
                      Design bonito só tem valor se colocar mais dinheiro no caixa da sua empresa. Por isso, organizamos a estrutura dos textos e os caminhos de contato para que o visitante sinta segurança imediata e entre em contato rápido.
                    </p>
                  </div>

                  {/* Indicadores de Negócio Claros */}
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:col-span-5">
                    <div className="rounded-[12px] border border-graphite bg-[#070708] p-[16px] text-left">
                      <span className="font-mono text-[28px] font-semibold tracking-tight text-white lg:text-[32px]">
                        +3.2x
                      </span>
                      <p className="mt-1 text-[12px] leading-tight text-ash">
                        Mais pedidos de orçamento recebidos
                      </p>
                    </div>

                    <div className="rounded-[12px] border border-graphite bg-[#070708] p-[16px] text-left">
                      <span className="font-mono text-[28px] font-semibold tracking-tight text-iris lg:text-[32px]">
                        -73%
                      </span>
                      <p className="mt-1 text-[12px] leading-tight text-ash">
                        Menos tempo de espera do cliente
                      </p>
                    </div>

                    <div className="col-span-2 rounded-[12px] border border-graphite bg-[#070708] p-[16px] text-left sm:col-span-1">
                      <span className="font-mono text-[28px] font-semibold tracking-tight text-emerald-400 lg:text-[32px]">
                        100%
                      </span>
                      <p className="mt-1 text-[12px] leading-tight text-ash">
                        Seu negócio funcionando 24h por dia
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
