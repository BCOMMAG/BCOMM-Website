"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { linktreeLinks, linktreeServices, LinktreeIcon } from "./LinktreeData";
import { Marquee } from "@/components/ui/marquee";

const ConstellationGrid = dynamic(
  () => import("@/components/ui/constellation-grid"),
  { ssr: false }
);

const marqueeItems = [
  "Websites & Landing Pages",
  "E-commerce",
  "Automação com IA",
  "Integrações",
  "Atendimento Inteligente",
  "Criação de Linktree",
];

const linkShadow: Record<string, string> = {
  globe: "0 4px 16px rgba(146, 129, 247, 0.35)",
  whatsapp: "0 4px 16px rgba(37, 211, 102, 0.35)",
  instagram: "0 4px 16px rgba(225, 48, 108, 0.35)",
  facebook: "0 4px 16px rgba(24, 119, 242, 0.35)",
};

export function LinktreeMobile() {
  return (
    <main className="relative flex h-[100dvh] flex-col overflow-hidden bg-void-black">
      <ConstellationGrid className="absolute inset-0 opacity-20" />

      <div className="relative z-10 flex flex-1 flex-col justify-center px-[20px] py-[24px]">
        <div className="flex flex-col items-center">
          <div className="relative h-[150px] w-[150px] overflow-hidden rounded-full border-2 border-iris">
            <Image
              src="/hero-ai.png"
              alt="BCOMM"
              fill
              className="object-cover"
              sizes="150px"
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

        <div className="mt-[16px] overflow-hidden">
          <Marquee pauseOnHover repeat={5} className="[--duration:25s]">
            {marqueeItems.map((item) => (
              <span
                key={item}
                className="mx-[4px] shrink-0 rounded-full border border-graphite bg-surface-lift px-[10px] py-[4px] font-mono text-[10px] text-ash"
              >
                {item}
              </span>
            ))}
          </Marquee>
        </div>

        <div className="mt-[16px] grid grid-cols-2 gap-[6px]">
          {linktreeServices.map((srv, i) => (
            <a
              key={srv.label}
              href={srv.href}
              style={{ animationDelay: `${i * 1.2}s` }}
              className="animate-[subtle-glow_4s_ease-in-out_infinite] rounded-[8px] border border-graphite bg-surface-lift px-[8px] py-[6px] text-center text-[11px] font-medium text-bone transition-all duration-200"
            >
              {srv.label}
            </a>
          ))}
        </div>

        <div className="mt-[24px] flex flex-col gap-[8px] overflow-hidden">
          {linktreeLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center gap-[10px] self-center rounded-[10px] border border-graphite bg-surface-lift px-[8px] py-[10px] transition-all duration-200 hover:border-iron hover:bg-[#111418]"
              style={{ width: "min(320px, 85vw)", boxShadow: linkShadow[link.icon] || "none" }}
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

        <p className="mt-[10px] text-center font-mono text-[9px] text-charcoal">
          © {new Date().getFullYear()} BCOMM
        </p>
      </div>
    </main>
  );
}
