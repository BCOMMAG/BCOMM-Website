import { differentials } from "@/lib/constants";
import { AnimatedSection } from "./AnimatedSection";

export function About() {
  return (
    <section id="sobre" className="border-t border-graphite bg-void-black px-[24px] py-[96px] md:px-[48px] md:py-[120px] lg:px-[80px] lg:py-[144px]">
      <div className="mx-auto max-w-[1200px]">
        <AnimatedSection>
          <p className="font-mono text-[12px] uppercase tracking-[0.025em] text-ash">
            Por que a BCOMM
          </p>
          <h2 className="mt-[8px] text-[36px] font-normal leading-[1.2] tracking-[-0.05em] text-white sm:text-[44px] md:text-[56px]">
            Engenharia com propósito.
          </h2>
        </AnimatedSection>

        <div className="mt-[64px] flex flex-col gap-[48px] md:mt-[80px] md:flex-row md:gap-[16px]">
          {differentials.map((d, i) => (
            <AnimatedSection key={d.number} delay={i * 0.1} className="flex-1">
              <div className="border-t border-graphite pt-[24px]">
                <span className="font-mono text-[48px] font-normal leading-[1] text-iris lg:text-[64px]">
                  {d.number}
                </span>
                <h3 className="mt-[16px] text-[24px] font-medium leading-[1.5] text-bone">
                  {d.title}
                </h3>
                <p className="mt-[8px] text-[16px] leading-[1.5] text-ash">
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
