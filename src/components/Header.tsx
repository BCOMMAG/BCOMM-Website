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
        scrolled ? "backdrop-blur-[25px] bg-[#000000f2]" : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex max-w-[1200px] items-center justify-between px-[24px] py-[16px] md:px-[48px]"
        aria-label="Navegação principal"
      >
        <a href="#" className="text-[16px] font-semibold tracking-[-0.02em] text-white">
          BCOMM
        </a>

        <ul className="hidden items-center gap-[32px] md:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-[14px] font-normal text-bone transition-colors hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href="#contato"
            className="inline-block rounded-[6px] border border-graphite bg-transparent px-[16px] py-[12px] text-[14px] font-normal text-white transition-colors hover:border-white/30"
          >
            Fale com a gente
          </a>
        </div>

        <button
          className="flex h-[36px] w-[36px] items-center justify-center rounded-[6px] text-white md:hidden"
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
        <div className="border-t border-graphite backdrop-blur-[25px] bg-[#000000f2] md:hidden">
          <ul className="flex flex-col gap-[4px] px-[24px] py-[16px]">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block rounded-[6px] px-[12px] py-[10px] text-[16px] font-normal text-bone transition-colors hover:text-white"
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
              className="block rounded-[6px] border border-graphite bg-transparent px-[16px] py-[10px] text-center text-[14px] font-normal text-white transition-colors hover:border-white/30"
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
