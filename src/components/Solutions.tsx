import { solutions } from "@/lib/constants";
import { AnimatedSection } from "./AnimatedSection";

const bgClass: Record<string, string> = {
  automation: "solution-bg-automation",
  integration: "solution-bg-integration",
  support: "solution-bg-support",
  saas: "solution-bg-saas",
};

export function Solutions() {
  return (
    <section id="servicos" className="bg-void-black px-[24px] py-[80px] md:px-[48px] md:py-[96px] lg:px-[80px]">
      <div className="mx-auto max-w-[1200px]">
        <AnimatedSection>
          <p className="font-mono text-[12px] uppercase tracking-[0.025em] text-ash">
            Nossos Serviços
          </p>
          <h2 className="mt-[8px] text-[36px] font-normal leading-[1.2] tracking-[-0.05em] text-white sm:text-[44px] md:text-[56px]">
            Soluções que geram resultado
          </h2>
          <p className="mt-[16px] max-w-[560px] text-[16px] leading-[1.5] text-ash">
            Do website à automação completa. Cada serviço é construído com engenharia de verdade para resolver problemas reais.
          </p>
        </AnimatedSection>

        <div className="mt-[48px] grid grid-cols-1 gap-[16px] sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.08}>
              <a href={s.ctaHref} className="group relative flex min-h-[320px] flex-col overflow-hidden rounded-[16px] border border-graphite bg-[#0b0b0c] transition-all duration-500 hover:-translate-y-2 hover:border-iron hover:shadow-[0_8px_30px_rgba(255,255,255,0.08)]">
                <div
                  className={`absolute inset-0 opacity-30 transition-opacity duration-500 group-hover:opacity-60 ${bgClass[s.variant]}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0c] via-[#0b0b0c]/80 to-transparent" />
                <div className="relative z-10 flex flex-1 flex-col justify-end p-[32px]">
                  <h3 className="text-[22px] font-semibold leading-[1.3] tracking-[-0.02em] text-white transition-colors duration-300 group-hover:text-iris-glow">
                    {s.title}
                  </h3>
                  <p className="mt-[12px] text-[14px] leading-[1.6] text-ash">
                    {s.description}
                  </p>
                  <span className="mt-[20px] inline-flex items-center gap-[6px] text-[14px] font-normal text-iris transition-colors duration-200 group-hover:text-iris-glow">
                    {s.cta}
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3}>
          <div className="mt-[48px] text-center">
            <a
              href="/servicos"
              className="inline-flex items-center gap-[8px] rounded-[9999px] border border-graphite bg-transparent px-[24px] py-[12px] text-[16px] font-normal text-white transition-all duration-200 hover:border-white hover:bg-white hover:text-black"
            >
              Ver todos os serviços
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
