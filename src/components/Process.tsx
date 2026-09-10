import { processSteps } from "@/lib/constants";
import { AnimatedSection } from "./AnimatedSection";

export function Process() {
  return (
    <section id="processo" className="border-t border-graphite bg-transparent px-[24px] py-[96px] md:px-[48px] md:py-[120px] lg:px-[80px] lg:py-[144px]">
      <div className="mx-auto max-w-[1200px]">
        <AnimatedSection>
          <p className="font-mono text-[12px] uppercase tracking-[0.025em] text-ash">
            Como trabalhamos
          </p>
          <h2 className="mt-[8px] text-[36px] font-normal leading-[1.2] tracking-[-0.05em] text-white sm:text-[44px] md:text-[56px]">
            Do diagnóstico à evolução
          </h2>
        </AnimatedSection>

        <div className="mt-[64px] flex flex-col gap-[48px] md:mt-[80px] md:grid md:grid-cols-4 md:gap-[16px]">
          {processSteps.map((s, i) => (
            <AnimatedSection key={s.step} delay={i * 0.1}>
              <div className="relative">
                <span className="font-mono text-[56px] font-normal leading-[1] text-graphite sm:text-[72px] md:text-[80px]">
                  {s.step}
                </span>
                <div className="relative -mt-[16px] md:-mt-[20px]">
                  <h3 className="text-[24px] font-medium leading-[1.5] text-white">
                    {s.title}
                  </h3>
                  <p className="mt-[8px] text-[16px] leading-[1.5] text-ash">
                    {s.description}
                  </p>
                </div>
                {i < processSteps.length - 1 && (
                  <div className="mt-[40px] hidden h-[1px] w-full bg-graphite md:block" />
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
