import { cases } from "@/lib/constants";
import { AnimatedSection } from "./AnimatedSection";

export function Cases() {
  return (
    <section id="cases" className="bg-void-black px-[24px] py-[80px] md:px-[48px] md:py-[96px] lg:px-[80px]">
      <div className="mx-auto max-w-[1200px]">
        <AnimatedSection>
          <p className="font-mono text-[12px] uppercase tracking-[0.025em] text-ash">
            Cases
          </p>
          <h2 className="mt-[8px] text-[36px] font-normal leading-[1.2] tracking-[-0.05em] text-white sm:text-[44px] md:text-[56px]">
            Resultados que falam por si.
          </h2>
        </AnimatedSection>

        <div className="mt-[48px] grid grid-cols-1 gap-[16px] md:grid-cols-3">
          {cases.map((c, i) => (
            <AnimatedSection key={c.client} delay={i * 0.1}>
              <div className="rounded-[16px] border border-graphite bg-void-black p-[32px] transition-colors hover:border-iron">
                <span className="font-mono text-[48px] font-normal leading-[1] text-iris md:text-[56px]">
                  {c.metric}
                </span>
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
      </div>
    </section>
  );
}
