"use client";

import { useState, useEffect } from "react";
import { nav } from "@/lib/constants";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-xl shadow-[0_1px_0_rgba(255,255,255,0.08)]"
          : "bg-black/0"
      }`}
    >
      <nav
        className="mx-auto flex max-w-[1200px] items-center justify-between px-[24px] py-[16px] md:px-[48px]"
        aria-label="Navegação principal"
      >
        <a href="#" className="font-inter-tight text-[20px] font-semibold tracking-[-0.03em] text-white">
          BCOMM
        </a>

        <ul className="hidden items-center gap-[32px] md:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-[14px] font-medium text-white/70 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href="#contato"
            className="inline-block rounded-[980px] bg-bcomm-action px-[15px] py-[8px] text-[14px] font-medium text-white transition-colors hover:bg-bcomm-action/90"
          >
            Fale com a gente
          </a>
        </div>

        <button
          className="flex h-[36px] w-[36px] items-center justify-center rounded-[8px] text-white md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileOpen}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            {mobileOpen ? (
              <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            ) : (
              <>
                <path d="M3 6H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M3 10H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M3 14H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-black/95 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col gap-[4px] px-[24px] py-[16px]">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block rounded-[8px] px-[12px] py-[10px] text-[16px] font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="px-[24px] pb-[20px]">
            <a
              href="#contato"
              className="block rounded-[980px] bg-bcomm-action px-[15px] py-[10px] text-center text-[14px] font-medium text-white transition-colors hover:bg-bcomm-action/90"
              onClick={() => setMobileOpen(false)}
            >
              Fale com a gente
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
