"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { linktreeLinks, linktreeServices, LinktreeIcon } from "./LinktreeData";

const ConstellationGrid = dynamic(
  () => import("@/components/ui/constellation-grid"),
  { ssr: false }
);

export function LinktreeDesktop() {
  return (
    <main className="relative flex h-[100dvh] items-center justify-center overflow-hidden bg-void-black px-[24px]">
      <ConstellationGrid className="absolute inset-0 opacity-20" />

      <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-[5] hidden w-[45%] lg:block">
        <Image
          src="/hero-ai.png"
          alt=""
          fill
          className="object-contain object-right-bottom"
          sizes="(max-width: 1024px) 0px, 45vw"
          priority
        />
      </div>

      <div className="relative z-10 grid w-full max-w-[700px] grid-cols-[auto_1fr] gap-[20px] -translate-x-[10%]">
        <div className="flex flex-col items-center rounded-[16px] border border-graphite bg-surface-lift p-[20px]">
          <div className="relative h-[100px] w-[100px] overflow-hidden rounded-full border-2 border-iris">
            <Image
              src="/logo.png"
              alt="BCOMM"
              fill
              className="object-contain p-[10px]"
              sizes="100px"
              priority
            />
          </div>

          <img
            src="/logo.png"
            alt="BCOMM"
            className="mt-[12px] h-[32px] w-auto opacity-60"
          />

          <div className="mt-[16px] flex gap-[10px]">
            {linktreeLinks.filter((l) => ["instagram", "facebook"].includes(l.icon)).map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-[32px] w-[32px] items-center justify-center rounded-full border border-graphite text-ash transition-all duration-200 hover:border-iris hover:text-iris"
                aria-label={link.label}
              >
                <LinktreeIcon name={link.icon} className="!h-[14px] !w-[14px]" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col rounded-[16px] border border-graphite bg-surface-lift p-[20px]">
          <h1 className="font-playfair text-[22px] font-normal leading-[1.2] text-white">
            Tecnologia que{" "}
            <span className="text-iris">vende</span>
          </h1>
          <p className="mt-[2px] font-mono text-[11px] text-ash">
            @bcomm.br
          </p>

          <div className="mt-[16px] flex flex-col gap-[8px]">
            {linktreeLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-[10px] rounded-[8px] border border-graphite bg-void-black px-[12px] py-[10px] transition-all duration-200 hover:border-iron hover:bg-[#111418]"
              >
                <LinktreeIcon name={link.icon} className="!h-[16px] !w-[16px] text-iris" />
                <div className="min-w-0 flex-1">
                  <p className="text-[13px] font-medium text-bone">{link.label}</p>
                  <p className="font-mono text-[10px] text-ash">{link.sublabel}</p>
                </div>
                <svg className="h-[12px] w-[12px] shrink-0 text-charcoal" viewBox="0 0 16 16" fill="none">
                  <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            ))}
          </div>

          <div className="mt-[14px] border-t border-graphite pt-[12px]">
            <p className="mb-[8px] font-mono text-[9px] uppercase tracking-[0.05em] text-ash">
              Serviços
            </p>
            <div className="grid grid-cols-2 gap-[6px]">
              {linktreeServices.map((srv) => (
                <a
                  key={srv.label}
                  href={srv.href}
                  className="rounded-[6px] border border-graphite bg-void-black px-[8px] py-[6px] text-center text-[11px] font-medium text-bone transition-all duration-200 hover:border-iron"
                >
                  {srv.label}
                </a>
              ))}
            </div>
          </div>

          <p className="mt-[12px] text-center font-mono text-[9px] text-charcoal">
            © {new Date().getFullYear()} BCOMM Comunicação Inteligente
          </p>
        </div>
      </div>
    </main>
  );
}
