import { solutions } from "@/lib/constants";
import { AnimatedSection } from "./AnimatedSection";

export function Solutions() {
  return (
    <section id="solucoes" className="bg-bcomm-gray px-[24px] py-[80px] md:px-[48px] md:py-[120px] lg:px-[80px]">
      <div className="mx-auto max-w-[1200px]">
        <AnimatedSection>
          <p className="text-[12px] font-medium uppercase tracking-[0.1em] text-bcomm-secondary md:text-[14px]">
            Soluções
          </p>
          <h2 className="mt-[8px] font-inter-tight text-[32px] font-medium leading-[1.1] tracking-[-0.015em] text-bcomm-ink sm:text-[40px] md:text-[48px]">
            Construídas para resolver.
          </h2>
          <p className="mt-[16px] max-w-[480px] text-[17px] leading-[1.47] tracking-[-0.022em] text-bcomm-secondary">
            Cada frente de atuação é um conjunto de ferramentas, métodos e expertise que se conectam para gerar resultado.
          </p>
        </AnimatedSection>

        <div className="mt-[48px] grid grid-cols-1 gap-[20px] sm:grid-cols-2 lg:grid-cols-4 lg:gap-[24px]">
          {solutions.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.08}>
              <div className="group rounded-[16px] bg-white p-[28px] transition-shadow duration-300 hover:shadow-[0_2px_12px_rgba(0,0,0,0.06)] md:p-[32px]">
                <div className="flex h-[48px] w-[48px] items-center justify-center rounded-[12px] bg-bcomm-gray text-[24px]">
                  {s.icon}
                </div>
                <h3 className="mt-[20px] font-inter-tight text-[24px] font-semibold leading-[1.2] text-bcomm-ink">
                  {s.title}
                </h3>
                <p className="mt-[12px] text-[15px] leading-[1.5] text-bcomm-secondary">
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
