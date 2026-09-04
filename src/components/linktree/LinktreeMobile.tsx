"use client";

import Image from "next/image";
import { linktreeLinks, linktreeServices, LinktreeIcon } from "./LinktreeData";

export function LinktreeMobile() {
  return (
    <main className="min-h-screen bg-void-black px-[20px] py-[40px]">
      <div className="mx-auto max-w-[400px]">
        <div className="flex flex-col items-center">
          <img
            src="/logo.png"
            alt="BCOMM"
            className="h-[48px] w-auto opacity-60"
          />
        </div>

        <div className="mt-[32px] flex flex-col items-center">
          <div className="relative h-[100px] w-[100px] overflow-hidden rounded-full border-2 border-iris">
            <Image
              src="/hero-ai.png"
              alt="BCOMM"
              fill
              className="object-cover"
              sizes="100px"
              priority
            />
          </div>

          <h1 className="mt-[16px] text-center font-playfair text-[20px] font-normal leading-[1.2] text-white">
            Tecnologia que{" "}
            <span className="text-iris">vende</span>
          </h1>

          <p className="mt-[4px] font-mono text-[12px] text-ash">
            @bcomm.br
          </p>
        </div>

        <div className="mt-[32px] flex flex-col gap-[12px]">
          {linktreeLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center gap-[14px] rounded-[12px] border border-graphite bg-surface-lift px-[16px] py-[14px] transition-all duration-200 hover:border-iron hover:bg-[#111418]"
            >
              <LinktreeIcon name={link.icon} className="text-iris" />
              <div className="min-w-0 flex-1">
                <p className="text-[15px] font-medium leading-[1.3] text-bone">{link.label}</p>
                <p className="font-mono text-[11px] text-ash">{link.sublabel}</p>
              </div>
              <svg className="h-[16px] w-[16px] shrink-0 text-charcoal" viewBox="0 0 16 16" fill="none">
                <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          ))}
        </div>

        <div className="mt-[32px] border-t border-graphite pt-[24px]">
          <p className="mb-[12px] text-center font-mono text-[11px] uppercase tracking-[0.05em] text-ash">
            Serviços
          </p>
          <div className="flex flex-col gap-[8px]">
            {linktreeServices.map((srv) => (
              <a
                key={srv.label}
                href={srv.href}
                className="rounded-[10px] border border-graphite bg-surface-lift px-[14px] py-[10px] text-center text-[13px] font-medium text-bone transition-all duration-200 hover:border-iron hover:bg-[#111418]"
              >
                {srv.label}
              </a>
            ))}
          </div>
        </div>

        <p className="mt-[32px] text-center font-mono text-[11px] text-charcoal">
          © {new Date().getFullYear()} BCOMM Comunicação Inteligente
        </p>
      </div>
    </main>
  );
}
