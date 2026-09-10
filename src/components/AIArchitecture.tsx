import { AnimatedSection } from "./AnimatedSection";
import { SpotlightCard } from "./SpotlightCard";

const pillars = [
  {
    tag: "SEGURANÇA & PRECISÃO",
    title: "Treinada com as Regras do Seu Negócio",
    description:
      "A IA só responde o que você aprova. Ela conhece seus preços, seus produtos e as políticas da sua empresa, atendendo com naturalidade e sem inventar informações.",
    detail: "100% de Precisão nas Respostas",
  },
  {
    tag: "AUTONOMIA REAL",
    title: "Executa Ações Sozinha, Não Só Conversa",
    description:
      "Muito além de um assistente com respostas prontas: ela consulta seu estoque, agenda reuniões, emite pedidos, cadastra o cliente no seu sistema e avisa seu time comercial.",
    detail: "Conexão Direta com Seus Sistemas",
  },
  {
    tag: "DISPONIBILIDADE TOTAL",
    title: "Atendimento Rápido e Sem Filas 24 Horas",
    description:
      "Se 10 ou 100 clientes mandarem mensagem no WhatsApp ao mesmo tempo, todos são atendidos em menos de 2 segundos. Sem tempo de espera e sem perder vendas fora do expediente.",
    detail: "Disponibilidade Contínua 24/7",
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
              Inteligência Artificial Prática
            </span>
          </div>
          <h2 className="mt-[16px] text-[36px] font-normal leading-[1.2] tracking-[-0.05em] text-white sm:text-[44px] md:text-[56px]">
            Como a IA trabalha pela sua empresa
          </h2>
          <p className="mt-[16px] max-w-[620px] text-[16px] leading-[1.6] text-ash sm:text-[18px]">
            Muito além de um robô que manda mensagens engessadas: um assistente inteligente integrado à rotina do seu negócio que resolve problemas e gera vendas reais.
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
                  <div className="mt-[28px] border-t border-graphite/60 pt-[16px] font-mono text-[11px] uppercase text-emerald-400">
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
