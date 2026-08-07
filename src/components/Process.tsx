import { processSteps } from "@/lib/constants";
import { AnimatedSection } from "./AnimatedSection";

export function Process() {
  return (
    <section className="bg-bcomm-black px-[24px] py-[80px] md:px-[48px] md:py-[120px] lg:px-[80px]">
      <div className="mx-auto max-w-[1200px]">
        <AnimatedSection>
          <p className="text-[12px] font-medium uppercase tracking-[0.1em] text-bcomm-secondary md:text-[14px]">
            Como trabalhamos
          </p>
          <h2 className="mt-[8px] font-inter-tight text-[32px] font-medium leading-[1.1] tracking-[-0.015em] text-white sm:text-[40px] md:text-[48px]">
            Do diagnóstico à evolução.
          </h2>
        </AnimatedSection>

        <div className="mt-[60px] flex flex-col gap-[48px] md:mt-[80px] md:grid md:grid-cols-4 md:gap-[32px]">
          {processSteps.map((s, i) => (
            <AnimatedSection key={s.step} delay={i * 0.1}>
              <div className="relative">
                <span className="font-inter-tight text-[56px] font-semibold leading-[1] tracking-[-0.03em] text-white/[0.06] sm:text-[72px] md:text-[80px]">
                  {s.step}
                </span>
                <div className="relative -mt-[20px] md:-mt-[28px]">
                  <h3 className="font-inter-tight text-[24px] font-semibold leading-[1.2] text-white md:text-[28px]">
                    {s.title}
                  </h3>
                  <p className="mt-[12px] text-[15px] leading-[1.5] text-bcomm-secondary">
                    {s.description}
                  </p>
                </div>
                {i < processSteps.length - 1 && (
                  <div className="mt-[40px] hidden h-[1px] w-full bg-white/10 md:block" />
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
