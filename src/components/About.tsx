import { differentials } from "@/lib/constants";
import { AnimatedSection } from "./AnimatedSection";

export function About() {
  return (
    <section id="sobre" className="bg-bcomm-white px-[24px] py-[80px] md:px-[48px] md:py-[120px] lg:px-[80px]">
      <div className="mx-auto max-w-[1200px]">
        <AnimatedSection>
          <p className="text-[12px] font-medium uppercase tracking-[0.1em] text-bcomm-secondary md:text-[14px]">
            Por que a BCOMM
          </p>
          <h2 className="mt-[8px] font-inter-tight text-[32px] font-medium leading-[1.1] tracking-[-0.015em] text-bcomm-ink sm:text-[40px] md:text-[48px]">
            Engenharia com propósito.
          </h2>
        </AnimatedSection>

        <div className="mt-[60px] flex flex-col gap-[48px] md:mt-[80px] md:flex-row md:gap-[48px] lg:gap-[64px]">
          {differentials.map((d, i) => (
            <AnimatedSection key={d.number} delay={i * 0.1} className="flex-1">
              <div className="border-t border-bcomm-border-soft pt-[24px]">
                <span className="font-inter-tight text-[48px] font-semibold leading-[1] tracking-[-0.03em] text-bcomm-border-soft lg:text-[64px]">
                  {d.number}
                </span>
                <h3 className="mt-[16px] font-inter-tight text-[24px] font-semibold leading-[1.2] text-bcomm-ink md:text-[28px]">
                  {d.title}
                </h3>
                <p className="mt-[12px] text-[15px] leading-[1.5] text-bcomm-secondary md:text-[17px]">
                  {d.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
