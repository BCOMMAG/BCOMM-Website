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
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-void-black px-[24px] py-[40px]">
      <ConstellationGrid className="opacity-20" />

      <div className="relative z-10 grid w-full max-w-[700px] grid-cols-[auto_1fr] gap-[24px]">
        <div className="flex flex-col items-center rounded-[16px] border border-graphite bg-surface-lift p-[24px]">
          <div className="relative h-[140px] w-[140px] overflow-hidden rounded-full border-2 border-iris">
            <Image
              src="/hero-ai.png"
              alt="BCOMM"
              fill
              className="object-cover"
              sizes="140px"
              priority
            />
          </div>

          <img
            src="/logo.png"
            alt="BCOMM"
            className="mt-[16px] h-[40px] w-auto opacity-60"
          />

          <div className="mt-[24px] flex gap-[12px]">
            {linktreeLinks.filter((l) => ["instagram", "facebook"].includes(l.icon)).map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-[36px] w-[36px] items-center justify-center rounded-full border border-graphite text-ash transition-all duration-200 hover:border-iris hover:text-iris"
                aria-label={link.label}
              >
                <LinktreeIcon name={link.icon} className="!h-[16px] !w-[16px]" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col rounded-[16px] border border-graphite bg-surface-lift p-[28px]">
          <h1 className="font-playfair text-[24px] font-normal leading-[1.2] text-white">
            Tecnologia que{" "}
            <span className="text-iris">vende</span>
          </h1>
          <p className="mt-[4px] font-mono text-[12px] text-ash">
            @bcomm.br
          </p>

          <div className="mt-[24px] flex flex-col gap-[10px]">
            {linktreeLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-[12px] rounded-[10px] border border-graphite bg-void-black px-[14px] py-[12px] transition-all duration-200 hover:border-iron hover:bg-[#111418]"
              >
                <LinktreeIcon name={link.icon} className="text-iris" />
                <div className="min-w-0 flex-1">
                  <p className="text-[14px] font-medium text-bone">{link.label}</p>
                  <p className="font-mono text-[11px] text-ash">{link.sublabel}</p>
                </div>
                <svg className="h-[14px] w-[14px] shrink-0 text-charcoal" viewBox="0 0 16 16" fill="none">
                  <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            ))}
          </div>

          <div className="mt-[20px] border-t border-graphite pt-[16px]">
            <p className="mb-[10px] font-mono text-[10px] uppercase tracking-[0.05em] text-ash">
              Serviços
            </p>
            <div className="grid grid-cols-2 gap-[8px]">
              {linktreeServices.map((srv) => (
                <a
                  key={srv.label}
                  href={srv.href}
                  className="rounded-[8px] border border-graphite bg-void-black px-[12px] py-[8px] text-center text-[12px] font-medium text-bone transition-all duration-200 hover:border-iron"
                >
                  {srv.label}
                </a>
              ))}
            </div>
          </div>

          <p className="mt-[16px] text-center font-mono text-[10px] text-charcoal">
            © {new Date().getFullYear()} BCOMM Comunicação Inteligente
          </p>
        </div>
      </div>
    </main>
  );
}
