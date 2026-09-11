"use client";

import { AnimatedSection } from "./AnimatedSection";

export function About() {
  return (
    <section id="sobre" className="border-t border-graphite bg-transparent px-[20px] py-[80px] md:px-[48px] md:py-[120px] lg:px-[80px]">
      <div className="mx-auto max-w-[1240px]">
        {/* White Island Container: Ilha Branca Premium */}
        <AnimatedSection>
          <div className="rounded-[32px] bg-white p-[32px] text-neutral-900 shadow-[0_24px_70px_rgba(0,0,0,0.45),0_0_50px_rgba(255,255,255,0.15)] md:p-[56px] lg:p-[64px]">
            
            {/* Cabeçalho da Seção */}
            <div className="max-w-[720px]">
              <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-100 px-3.5 py-1.5 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-iris animate-pulse" />
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-neutral-700">
                  Por que a BCOMM
                </p>
              </div>
              <h2 className="mt-[16px] text-[32px] font-semibold leading-[1.15] tracking-[-0.04em] text-neutral-950 sm:text-[42px] md:text-[52px]">
                Tecnologia feita para gerar faturamento real
              </h2>
              <p className="mt-[14px] text-[15px] leading-[1.6] text-neutral-600 sm:text-[17px]">
                Não construímos páginas apenas para ficarem bonitas. Desenvolvemos soluções com velocidade extrema, atendimento automatizado 24 horas e foco direto em conversão de clientes.
              </p>
            </div>

            {/* Bento Box Grid em Tons Claros e Alto Contraste */}
            <div className="mt-[48px] grid grid-cols-1 gap-[20px] md:grid-cols-12">
              
              {/* Card 1: Velocidade que Evita Perda de Vendas (Span 7 cols) */}
              <div className="rounded-[20px] border border-neutral-200 bg-neutral-50/80 p-[28px] shadow-sm transition-all duration-300 hover:border-iris/40 hover:shadow-md md:col-span-7 md:p-[36px]">
                <div className="flex items-center justify-between border-b border-neutral-200/80 pb-[16px]">
                  <span className="font-mono text-[12px] font-semibold tracking-wider text-iris uppercase">
                    01 // MÁXIMA VELOCIDADE
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-600/30 bg-emerald-50 px-[10px] py-[3px] font-mono text-[11px] font-semibold text-emerald-700">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-600" />
                    ABERTURA IMEDIATA
                  </span>
                </div>

                <h3 className="mt-[20px] text-[22px] font-semibold leading-[1.3] text-neutral-900 md:text-[26px]">
                  Seu site abre instantaneamente, sem travar nem perder clientes
                </h3>
                <p className="mt-[10px] text-[14.5px] leading-[1.6] text-neutral-600">
                  Mais da metade das pessoas desiste de comprar se uma página demora mais de 3 segundos para abrir. Nossos websites abrem em uma fração de segundo no celular de qualquer cliente, garantindo que você aproveite 100% dos acessos de quem clicou no seu anúncio.
                </p>

                {/* Painel Visual de Desempenho */}
                <div className="mt-[28px] rounded-[14px] border border-neutral-200 bg-white p-[20px] shadow-inner">
                  <div className="flex items-center justify-between text-[11px] font-mono uppercase text-neutral-500">
                    <span>Experiência do Usuário</span>
                    <span className="font-semibold text-emerald-600">Nota Máxima no Google</span>
                  </div>

                  {/* Barra de Carregamento */}
                  <div className="mt-[10px] space-y-1.5">
                    <div className="flex justify-between font-mono text-[13px] text-neutral-900 font-medium">
                      <span>Tempo de Abertura no Celular</span>
                      <span className="font-semibold text-emerald-600">Menos de 1 segundo</span>
                    </div>
                    <div className="h-[6px] w-full overflow-hidden rounded-full bg-neutral-200">
                      <div className="h-full w-[96%] rounded-full bg-gradient-to-r from-iris to-emerald-500" />
                    </div>
                  </div>

                  <div className="mt-[16px] grid grid-cols-3 gap-2 border-t border-neutral-100 pt-[14px] text-center">
                    <div>
                      <div className="font-mono text-[18px] font-bold text-neutral-900">0%</div>
                      <div className="text-[11px] text-neutral-500">Fricção ou travamento</div>
                    </div>
                    <div>
                      <div className="font-mono text-[18px] font-bold text-neutral-900">100%</div>
                      <div className="text-[11px] text-neutral-500">Otimizado para celular</div>
                    </div>
                    <div>
                      <div className="font-mono text-[18px] font-bold text-emerald-600">Total</div>
                      <div className="text-[11px] text-neutral-500">Código próprio sem Wix</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: Atendimento Inteligente 24 Horas (Span 5 cols) */}
              <div className="flex flex-col justify-between rounded-[20px] border border-neutral-200 bg-neutral-50/80 p-[28px] shadow-sm transition-all duration-300 hover:border-iris/40 hover:shadow-md md:col-span-5 md:p-[36px]">
                <div>
                  <div className="flex items-center justify-between border-b border-neutral-200/80 pb-[16px]">
                    <span className="font-mono text-[12px] font-semibold tracking-wider text-iris uppercase">
                      02 // ATENDIMENTO 24H
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-iris/40 bg-iris/10 px-[10px] py-[3px] font-mono text-[11px] font-semibold text-iris">
                      RESPOSTA EM SEGUNDOS
                    </span>
                  </div>

                  <h3 className="mt-[20px] text-[22px] font-semibold leading-[1.3] text-neutral-900 md:text-[26px]">
                    Sua empresa vendendo mesmo fora do expediente
                  </h3>
                  <p className="mt-[10px] text-[14.5px] leading-[1.6] text-neutral-600">
                    Não perca leads durante a noite ou aos finais de semana. Nossos agentes inteligentes atendem no WhatsApp, tiram dúvidas e agendam reuniões de forma natural.
                  </p>
                </div>

                {/* Diálogo WhatsApp com Fundo Real */}
                <div className="mt-[24px] rounded-[14px] border border-neutral-200 bg-white p-[18px] shadow-inner">
                  <div className="flex items-center justify-between border-b border-neutral-100 pb-2 text-[11px]">
                    <span className="flex items-center gap-1.5 font-medium text-neutral-700">
                      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                      Assistente de Atendimento Ativo
                    </span>
                    <span className="font-mono text-[10px] font-medium text-iris">24h / 7 dias</span>
                  </div>

                  <div className="mt-3 space-y-2 text-[12px]">
                    <div className="rounded-[8px] bg-neutral-100 p-2 text-neutral-700">
                      <span className="text-[10px] block font-mono text-neutral-400 mb-0.5">Cliente (WhatsApp - 22:45)</span>
                      &ldquo;Boa noite! Gostaria de saber como funciona o serviço de vocês.&rdquo;
                    </div>
                    <div className="rounded-[8px] border border-iris/20 bg-iris/10 p-2 text-neutral-900">
                      <span className="text-[10px] block font-mono text-iris font-semibold mb-0.5">IA da sua empresa (22:45)</span>
                      &ldquo;Olá! Criamos seu projeto personalizado. Posso te apresentar as opções agora ou agendar com nosso time?&rdquo;
                    </div>
                  </div>

                  <div className="mt-3 flex items-center justify-between border-t border-neutral-100 pt-2 text-[11px] text-neutral-500">
                    <span>Tempo de resposta</span>
                    <span className="font-semibold text-emerald-600">Imediato (menos de 5s)</span>
                  </div>
                </div>
              </div>

              {/* Card 3: Retorno Mensurável & ROI (Span 12 cols - Banner Largo) */}
              <div className="rounded-[20px] border border-neutral-200 bg-neutral-50/80 p-[28px] shadow-sm md:col-span-12 md:p-[36px]">
                <div className="grid grid-cols-1 gap-[24px] md:grid-cols-12 md:items-center">
                  <div className="md:col-span-7">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[12px] font-semibold tracking-wider text-iris uppercase">
                        03 // RESULTADOS REAIS
                      </span>
                      <span className="rounded-full border border-neutral-300 bg-white px-2 py-0.5 font-mono text-[10px] font-medium text-neutral-600 uppercase">
                        Retorno do Investimento
                      </span>
                    </div>
                    <h3 className="mt-[14px] text-[22px] font-semibold leading-[1.3] text-neutral-900 md:text-[26px]">
                      Criado para transformar visitantes comuns em clientes pagantes
                    </h3>
                    <p className="mt-[8px] max-w-[580px] text-[14.5px] leading-[1.6] text-neutral-600">
                      Design bonito só tem valor se colocar mais dinheiro no caixa da sua empresa. Por isso, organizamos a estrutura dos textos e os caminhos de contato para que o visitante sinta segurança imediata e entre em contato rápido.
                    </p>
                  </div>

                  {/* Indicadores de Negócio Claros */}
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:col-span-5">
                    <div className="rounded-[14px] border border-neutral-200 bg-white p-[18px] text-left shadow-sm">
                      <span className="font-mono text-[28px] font-bold tracking-tight text-neutral-950 lg:text-[32px]">
                        +3.2x
                      </span>
                      <p className="mt-1 text-[12px] leading-tight text-neutral-600">
                        Mais pedidos de orçamento recebidos
                      </p>
                    </div>

                    <div className="rounded-[14px] border border-neutral-200 bg-white p-[18px] text-left shadow-sm">
                      <span className="font-mono text-[28px] font-bold tracking-tight text-iris lg:text-[32px]">
                        -73%
                      </span>
                      <p className="mt-1 text-[12px] leading-tight text-neutral-600">
                        Menos tempo de espera do cliente
                      </p>
                    </div>

                    <div className="col-span-2 rounded-[14px] border border-neutral-200 bg-white p-[18px] text-left shadow-sm sm:col-span-1">
                      <span className="font-mono text-[28px] font-bold tracking-tight text-emerald-600 lg:text-[32px]">
                        100%
                      </span>
                      <p className="mt-1 text-[12px] leading-tight text-neutral-600">
                        Sua empresa ativa 24h por dia
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
