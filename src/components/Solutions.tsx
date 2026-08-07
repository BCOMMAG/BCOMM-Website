import { solutions } from "@/lib/constants";
import { AnimatedSection } from "./AnimatedSection";

export function Solutions() {
  return (
    <section id="solucoes" className="bg-void-black px-[24px] py-[80px] md:px-[48px] md:py-[96px] lg:px-[80px]">
      <div className="mx-auto max-w-[1200px]">
        <AnimatedSection>
          <p className="font-mono text-[12px] uppercase tracking-[0.025em] text-ash">
            Soluções
          </p>
          <h2 className="mt-[8px] text-[36px] font-normal leading-[1.2] tracking-[-0.05em] text-white sm:text-[44px] md:text-[56px]">
            Construídas para resolver.
          </h2>
          <p className="mt-[16px] max-w-[480px] text-[16px] leading-[1.5] text-ash">
            Cada frente de atuação é um conjunto de ferramentas, métodos e expertise que se conectam para gerar resultado.
          </p>
        </AnimatedSection>

        <div className="mt-[48px] grid grid-cols-1 gap-[16px] sm:grid-cols-2 lg:grid-cols-4 lg:gap-[16px]">
          {solutions.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.08}>
              <div className="rounded-[16px] border border-graphite bg-void-black p-[32px] transition-colors hover:border-iron">
                <div className="flex h-[48px] w-[48px] items-center justify-center rounded-[16px] text-[24px]">
                  {s.icon}
                </div>
                <h3 className="mt-[20px] text-[24px] font-medium leading-[1.5] text-bone">
                  {s.title}
                </h3>
                <p className="mt-[8px] text-[16px] leading-[1.5] text-ash">
                  {s.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
