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

        <ul className="hidden items-center gap-[8px] md:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="rounded-[9999px] border border-transparent px-[14px] py-[8px] text-[14px] font-normal text-bone transition-all duration-200 ease-out hover:border-graphite hover:bg-white hover:text-black"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href="#contato"
            className="inline-flex items-center gap-[6px] rounded-[9999px] border border-graphite bg-transparent px-[18px] py-[10px] text-[14px] font-normal text-white transition-all duration-300 [cubic-bezier(0.16,1,0.3,1)] hover:border-white hover:bg-white hover:text-black"
          >
            Fale Conosco
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        <button
          className="flex h-[36px] w-[36px] items-center justify-center rounded-[9999px] border border-transparent text-white transition-all duration-200 hover:border-graphite hover:bg-white hover:text-black md:hidden"
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
                  className="block rounded-[9999px] border border-transparent px-[16px] py-[10px] text-[16px] font-normal text-bone transition-all duration-200 hover:border-graphite hover:bg-white hover:text-black"
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
              className="flex items-center justify-center gap-[6px] rounded-[9999px] border border-graphite bg-transparent px-[18px] py-[10px] text-[14px] font-normal text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
              onClick={() => setMobileOpen(false)}
            >
              Fale Conosco
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
