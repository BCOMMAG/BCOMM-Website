import { cases } from "@/lib/constants";
import { AnimatedSection } from "./AnimatedSection";
import { AnimatedCounter } from "./AnimatedCounter";

export function Cases() {
  return (
    <section id="cases" className="border-t border-graphite bg-transparent px-[24px] py-[96px] md:px-[48px] md:py-[120px] lg:px-[80px] lg:py-[144px]">
      <div className="mx-auto max-w-[1200px]">
        <AnimatedSection>
          <p className="font-mono text-[12px] uppercase tracking-[0.025em] text-ash">
            Cases
          </p>
          <h2 className="mt-[8px] text-[36px] font-normal leading-[1.2] tracking-[-0.05em] text-white sm:text-[44px] md:text-[56px]">
            Resultados que falam por si
          </h2>
        </AnimatedSection>

        <div className="mt-[48px] grid grid-cols-1 gap-[16px] md:grid-cols-3">
          {cases.slice(0, 3).map((c, i) => (
            <AnimatedSection key={c.client} delay={i * 0.1}>
              <div className="rounded-[16px] border border-graphite bg-void-black p-[32px] transition-all duration-500 hover:-translate-y-2 hover:border-iron hover:shadow-[0_8px_30px_rgba(255,255,255,0.08)]">
                <div className="flex items-center gap-[8px]">
                  <span className="font-mono text-[48px] font-normal leading-[1] text-iris md:text-[56px]">
                    <AnimatedCounter
                      value={parseFloat(c.metric)}
                      suffix={c.metric.replace(/[0-9.]/g, "")}
                      decimals={c.metric.includes(".") ? 1 : 0}
                    />
                  </span>
                  <span className="rounded-[9999px] border border-graphite px-[8px] py-[2px] font-mono text-[10px] uppercase text-ash">
                    {c.service}
                  </span>
                </div>
                <h3 className="mt-[16px] text-[20px] font-medium leading-[1] text-bone">
                  {c.label}
                </h3>
                <p className="mt-[8px] text-[16px] leading-[1.5] text-ash">
                  {c.description}
                </p>
                <p className="mt-[20px] border-t border-graphite pt-[16px] font-mono text-[12px] uppercase tracking-[0.025em] text-charcoal">
                  {c.client}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.25}>
          <div className="mt-[32px] rounded-[16px] border border-graphite bg-[#0b0b0c]/80 p-[32px] md:p-[40px]">
            <div className="flex flex-col gap-[20px] md:flex-row md:items-center md:justify-between">
              <div className="max-w-[760px]">
                <p className="font-playfair text-[20px] italic leading-[1.6] text-bone sm:text-[22px]">
                  &ldquo;A transição para a plataforma desenvolvida pela BCOMM reduziu drasticamente nossos gargalos de suporte e dobrou a velocidade de fechamento das propostas comerciais. É engenharia pura com foco no nosso caixa.&rdquo;
                </p>
                <div className="mt-[16px] flex items-center gap-[12px]">
                  <div className="h-[36px] w-[36px] rounded-full border border-graphite bg-[#111418] flex items-center justify-center font-mono text-[12px] text-iris">
                    LT
                  </div>
                  <div>
                    <p className="text-[14px] font-medium text-white">Diretoria de Operações</p>
                    <p className="font-mono text-[12px] text-ash">LogTech &amp; Supply Chain PR</p>
                  </div>
                </div>
              </div>
              <div className="shrink-0 border-t border-graphite pt-[16px] md:border-t-0 md:border-l md:pl-[32px] md:pt-0">
                <span className="font-mono text-[32px] font-normal text-white">99.8%</span>
                <p className="font-mono text-[11px] uppercase tracking-[0.05em] text-ash">Taxa de Retenção &amp; Uptime</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.35}>
          <div className="mt-[48px] text-center">
            <a
              href="/cases"
              className="inline-flex items-center gap-[8px] rounded-[9999px] border border-graphite bg-transparent px-[24px] py-[12px] text-[16px] font-normal text-white transition-all duration-200 hover:border-white hover:bg-white hover:text-black"
            >
              Ver todos os cases
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
