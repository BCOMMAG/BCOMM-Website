import { AnimatedSection } from "./AnimatedSection";
import { SpotlightCard } from "./SpotlightCard";

const pillars = [
  {
    tag: "CALIBRAÇÃO FINA",
    title: "Modelos Especializados sem Alucinação",
    description:
      "Afinamos modelos neurais de última geração exclusivamente na base de regras e políticas do seu negócio. A IA nunca inventa informações ou erra valores.",
    detail: "RAG Nativo + Validação em Múltiplas Camadas",
  },
  {
    tag: "AÇÕES EM TEMPO REAL",
    title: "Execução Autônoma de Tarefas",
    description:
      "Nossos agentes não se limitam a responder mensagens. Eles consultam estoque, emitem pedidos, atualizam seu CRM e disparam notificações instantâneas.",
    detail: "Integração Bidirecional via Webhooks & REST APIs",
  },
  {
    tag: "DISPONIBILIDADE CONTÍNUA",
    title: "Operação 24/7 em Menos de 2 Segundos",
    description:
      "Atendimento humanizado ininterrupto que absorve picos de demanda simultâneos sem filas de espera, com escalonamento inteligente para humanos quando necessário.",
    detail: "Infraestrutura Distribuída de Baixa Latência",
  },
];

export function AIArchitecture() {
  return (
    <section className="border-t border-graphite bg-transparent px-[24px] py-[96px] md:px-[48px] md:py-[120px] lg:px-[80px]">
      <div className="mx-auto max-w-[1200px]">
        <AnimatedSection>
          <div className="inline-flex items-center gap-[8px] rounded-full border border-graphite bg-[#0b0b0c]/80 px-[14px] py-[6px] backdrop-blur-md">
            <span className="h-[6px] w-[6px] rounded-full bg-iris" />
            <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-ash">
              Engenharia Proprietária
            </span>
          </div>
          <h2 className="mt-[16px] text-[36px] font-normal leading-[1.2] tracking-[-0.05em] text-white sm:text-[44px] md:text-[56px]">
            Arquitetura do Agente de IA BCOMM
          </h2>
          <p className="mt-[16px] max-w-[620px] text-[16px] leading-[1.6] text-ash sm:text-[18px]">
            Muito além de um chatbot comum: uma camada de inteligência corporativa conectada diretamente à engrenagem operacional da sua empresa.
          </p>
        </AnimatedSection>

        <div className="mt-[64px] grid grid-cols-1 gap-[24px] md:grid-cols-3">
          {pillars.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 0.1} className="h-full">
              <SpotlightCard className="h-full transition-all duration-300 hover:-translate-y-1.5">
                <div className="flex h-full flex-col justify-between p-[32px]">
                  <div>
                    <span className="font-mono text-[11px] tracking-[0.08em] text-iris">
                      // {p.tag}
                    </span>
                    <h3 className="mt-[16px] text-[22px] font-medium leading-[1.4] text-white">
                      {p.title}
                    </h3>
                    <p className="mt-[12px] text-[15px] leading-[1.7] text-ash">
                      {p.description}
                    </p>
                  </div>
                  <div className="mt-[28px] border-t border-graphite/60 pt-[16px] font-mono text-[11px] uppercase text-bone/60">
                    {p.detail}
                  </div>
                </div>
              </SpotlightCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
