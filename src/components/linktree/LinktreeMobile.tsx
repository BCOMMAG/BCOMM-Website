"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { linktreeLinks, linktreeServices, LinktreeIcon } from "./LinktreeData";

const ConstellationGrid = dynamic(
  () => import("@/components/ui/constellation-grid"),
  { ssr: false }
);

export function LinktreeMobile() {
  return (
    <main className="relative flex h-[100dvh] flex-col overflow-hidden bg-void-black">
      <ConstellationGrid className="absolute inset-0 opacity-20" />

      <div className="pointer-events-none absolute right-0 top-0 z-[5] h-[180px] w-[180px] opacity-50">
        <Image
          src="/hero-ai.png"
          alt=""
          fill
          className="object-contain object-right-top"
          sizes="180px"
          priority
        />
      </div>

      <div className="relative z-10 flex flex-1 flex-col px-[20px] py-[20px]">
        <div className="flex items-center">
          <img
            src="/logo.png"
            alt="BCOMM"
            className="h-[36px] w-auto opacity-60"
          />
        </div>

        <div className="mt-[16px] flex flex-col items-center">
          <div className="relative h-[70px] w-[70px] overflow-hidden rounded-full border-2 border-iris">
            <Image
              src="/logo.png"
              alt="BCOMM"
              fill
              className="object-contain p-[8px]"
              sizes="70px"
              priority
            />
          </div>

          <h1 className="mt-[10px] text-center font-playfair text-[18px] font-normal leading-[1.2] text-white">
            Tecnologia que{" "}
            <span className="text-iris">vende</span>
          </h1>

          <p className="mt-[2px] font-mono text-[11px] text-ash">
            @bcomm.br
          </p>
        </div>

        <div className="mt-[16px] flex flex-1 flex-col gap-[8px] overflow-hidden">
          {linktreeLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center gap-[10px] rounded-[10px] border border-graphite bg-surface-lift px-[12px] py-[10px] transition-all duration-200 hover:border-iron hover:bg-[#111418]"
            >
              <LinktreeIcon name={link.icon} className="!h-[16px] !w-[16px] text-iris" />
              <div className="min-w-0 flex-1">
                <p className="text-[13px] font-medium leading-[1.3] text-bone">{link.label}</p>
                <p className="font-mono text-[10px] text-ash">{link.sublabel}</p>
              </div>
              <svg className="h-[14px] w-[14px] shrink-0 text-charcoal" viewBox="0 0 16 16" fill="none">
                <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          ))}
        </div>

        <div className="mt-[12px] border-t border-graphite pt-[10px]">
          <p className="mb-[8px] text-center font-mono text-[9px] uppercase tracking-[0.05em] text-ash">
            Serviços
          </p>
          <div className="grid grid-cols-2 gap-[6px]">
            {linktreeServices.map((srv) => (
              <a
                key={srv.label}
                href={srv.href}
                className="rounded-[8px] border border-graphite bg-surface-lift px-[8px] py-[6px] text-center text-[11px] font-medium text-bone transition-all duration-200 hover:border-iron"
              >
                {srv.label}
              </a>
            ))}
          </div>
        </div>

        <p className="mt-[10px] text-center font-mono text-[9px] text-charcoal">
          © {new Date().getFullYear()} BCOMM
        </p>
      </div>
    </main>
  );
}
