"use client";

import { useState, useEffect, useRef } from "react";
import { nav } from "@/lib/constants";

function NavDropdown({
  item,
  onClose,
}: {
  item: (typeof nav)[number];
  onClose?: () => void;
}) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);

  const handleEnter = () => {
    clearTimeout(timeoutRef.current!);
    setOpen(true);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 120);
  };

  if (!item.children) {
    return (
      <a
        href={item.href}
        className="rounded-[9999px] border border-transparent px-[14px] py-[8px] text-[14px] font-normal text-bone transition-all duration-200 ease-out hover:border-graphite hover:bg-white hover:text-black"
      >
        {item.label}
      </a>
    );
  }

  return (
    <div className="relative" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <button
        className="flex items-center gap-[4px] rounded-[9999px] border border-transparent px-[14px] py-[8px] text-[14px] font-normal text-bone transition-all duration-200 ease-out hover:border-graphite hover:bg-white hover:text-black"
        aria-expanded={open}
      >
        {item.label}
        <svg
          width="10"
          height="10"
          viewBox="0 0 16 16"
          fill="none"
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div className="absolute left-0 top-full z-50 mt-[8px] min-w-[180px] rounded-[8px] border border-graphite bg-void-black p-[8px] backdrop-blur-[25px]">
          {item.children.map((child) => (
            <a
              key={child.href}
              href={child.href}
              className="block rounded-[6px] px-[12px] py-[8px] text-[14px] font-normal text-bone transition-colors duration-150 hover:bg-white hover:text-black"
              onClick={onClose}
            >
              {child.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
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
        <a href="#" className="flex items-center">
          <img src="/logo.png" alt="" className="h-[32px] w-auto md:h-[36px]" aria-hidden="true" />
          <span className="sr-only">BCOMM</span>
        </a>

        <ul className="hidden items-center gap-[8px] md:flex">
          {nav.map((item) => (
            <li key={item.label} className="flex items-center">
              <NavDropdown item={item} />
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href="#contato"
            className="btn-slide inline-flex items-center gap-[6px] rounded-[9999px] border border-graphite bg-transparent px-[18px] py-[10px] text-[14px] font-normal text-white"
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
              <li key={item.label}>
                {item.children ? (
                  <>
                    <button
                      className="flex w-full items-center justify-between rounded-[9999px] border border-transparent px-[16px] py-[10px] text-[16px] font-normal text-bone transition-all duration-200 hover:border-graphite hover:bg-white hover:text-black"
                      onClick={() =>
                        setMobileExpanded(
                          mobileExpanded === item.label ? null : item.label
                        )
                      }
                      aria-expanded={mobileExpanded === item.label}
                    >
                      {item.label}
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 16 16"
                        fill="none"
                        className={`transition-transform duration-200 ${
                          mobileExpanded === item.label ? "rotate-180" : ""
                        }`}
                      >
                        <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    {mobileExpanded === item.label && (
                      <ul className="ml-[16px] mt-[4px] flex flex-col gap-[2px] border-l border-graphite pl-[16px]">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <a
                              href={child.href}
                              className="block rounded-[6px] px-[12px] py-[8px] text-[14px] font-normal text-ash transition-colors duration-150 hover:text-white"
                              onClick={() => setMobileOpen(false)}
                            >
                              {child.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <a
                    href={item.href}
                    className="block rounded-[9999px] border border-transparent px-[16px] py-[10px] text-[16px] font-normal text-bone transition-all duration-200 hover:border-graphite hover:bg-white hover:text-black"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
          <div className="px-[24px] pb-[20px]">
            <a
              href="#contato"
              className="btn-slide flex items-center justify-center gap-[6px] rounded-[9999px] border border-graphite bg-transparent px-[18px] py-[10px] text-[14px] font-normal text-white"
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
