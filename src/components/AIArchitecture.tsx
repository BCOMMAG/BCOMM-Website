"use client";

import { useTranslation } from "@/context/LocaleContext";
import { AnimatedSection } from "./AnimatedSection";
import { SpotlightCard } from "./SpotlightCard";

export function AIArchitecture() {
  const { dict } = useTranslation();
  const pillars = dict.aiArchitecture.pillars;

  return (
    <section className="border-t border-graphite bg-transparent px-[24px] py-[96px] md:px-[48px] md:py-[120px] lg:px-[80px]">
      <div className="mx-auto max-w-[1200px]">
        <AnimatedSection>
          <div className="inline-flex items-center gap-[8px] rounded-full border border-graphite bg-[#0b0b0c]/80 px-[14px] py-[6px] backdrop-blur-md">
            <span className="h-[6px] w-[6px] rounded-full bg-iris" />
            <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-ash">
              {dict.aiArchitecture.tag}
            </span>
          </div>
          <h2 className="mt-[16px] text-[36px] font-normal leading-[1.2] tracking-[-0.05em] text-white sm:text-[44px] md:text-[56px]">
            {dict.aiArchitecture.title}
          </h2>
          <p className="mt-[16px] max-w-[620px] text-[16px] leading-[1.6] text-ash sm:text-[18px]">
            {dict.aiArchitecture.subtitle}
          </p>
        </AnimatedSection>

        <div className="mt-[64px] grid grid-cols-1 gap-[24px] md:grid-cols-3">
          {pillars.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 0.1} className="h-full">
              <SpotlightCard className="h-full transition-all duration-300 hover:-translate-y-1.5">
                <div className="flex h-full flex-col justify-between p-[32px]">
                  <div>
                    <span className="font-mono text-[11px] tracking-[0.08em] text-iris">
                      {"// "}{p.tag}
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