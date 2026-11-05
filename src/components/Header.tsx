"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "@/context/LocaleContext";
import { LanguageSelector } from "./LanguageSelector";

interface NavItemProps {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

function handleAnchorClick(
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string,
  callback?: () => void
) {
  if (callback) callback();
  if (href.startsWith("/#")) {
    const hash = href.replace("/#", "");
    if (typeof window !== "undefined" && window.location.pathname === "/") {
      e.preventDefault();
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", href);
      }
    }
  }
}

function handleLogoClick(
  e: React.MouseEvent<HTMLAnchorElement>,
  callback?: () => void
) {
  if (callback) callback();
  if (typeof window !== "undefined") {
    if (window.location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.history.pushState(null, "", "/");
    }
  }
}

function NavDropdown({
  item,
  onClose,
}: {
  item: NavItemProps;
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
      <Link
        href={item.href}
        onClick={(e) => handleAnchorClick(e, item.href, onClose)}
        className="rounded-[9999px] border border-transparent px-[14px] py-[8px] text-[14px] font-normal text-bone transition-all duration-200 ease-out hover:border-graphite hover:bg-white hover:text-black"
      >
        {item.label}
      </Link>
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
        <div className="absolute left-0 top-full z-50 mt-[8px] min-w-[200px] rounded-[8px] border border-graphite bg-void-black p-[8px] backdrop-blur-[25px]">
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className="block rounded-[6px] px-[12px] py-[8px] text-[14px] font-normal text-bone transition-colors duration-150 hover:bg-white hover:text-black"
              onClick={(e) => {
                setOpen(false);
                handleAnchorClick(e, child.href, onClose);
              }}
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function Header() {
  const { dict } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const navItems: NavItemProps[] = [
    {
      label: dict.nav.services,
      href: "/servicos",
      children: [
        { label: dict.nav.allServices, href: "/servicos" },
        { label: dict.nav.websites, href: "/servicos/websites" },
        { label: dict.nav.ecommerce, href: "/servicos/ecommerce" },
        { label: dict.nav.automation, href: "/servicos/automacao" },
        { label: dict.nav.linkBio, href: "/servicos/link-bio" },
        { label: dict.nav.centralLinks, href: "/links" },
      ],
    },
    { label: dict.nav.prices, href: "/precos" },
    {
      label: dict.nav.about,
      href: "/#sobre",
      children: [
        { label: dict.nav.aboutUs, href: "/#sobre" },
        { label: dict.nav.howWeWork, href: "/#processo" },
      ],
    },
    { label: dict.nav.cases, href: "/#cases" },
    { label: dict.nav.contact, href: "/#contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-[25px] bg-[#000000f2]" : "bg-transparent"
      }`}
      style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}
    >
      <nav
        className="mx-auto flex max-w-[1200px] items-center justify-between px-[24px] py-[16px] md:px-[48px]"
        aria-label="Navegação principal"
      >
        <Link
          href="/"
          onClick={(e) => handleLogoClick(e, () => setMobileOpen(false))}
          className="flex items-center transition-opacity hover:opacity-85 py-1"
          aria-label="BCOMM - Voltar para o início"
        >
          <Image
            src="/logo.png"
            alt="BCOMM"
            width={142}
            height={26}
            className="h-[22px] w-auto md:h-[26px] object-contain"
            priority
          />
        </Link>

        <ul className="hidden items-center gap-[8px] md:flex">
          {navItems.map((item) => (
            <li key={item.label} className="flex items-center">
              <NavDropdown item={item} />
            </li>
          ))}
        </ul>

        {/* Bloco Desktop: Seletor de Idioma + CTA */}
        <div className="hidden md:flex items-center gap-[12px]">
          <LanguageSelector />
          <Link
            href="/#contato"
            onClick={(e) => handleAnchorClick(e, "/#contato")}
            className="btn-slide inline-flex items-center gap-[6px] rounded-[9999px] border border-iris/50 bg-iris/10 px-[20px] py-[10px] text-[14px] font-medium text-white transition-all duration-200 hover:border-iris hover:bg-iris hover:text-black"
          >
            {dict.nav.requestProposal}
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        {/* Bloco Mobile: Seletor de Idioma + Hambúrguer */}
        <div className="flex items-center gap-[8px] md:hidden">
          <LanguageSelector />
          <button
            className="flex h-[36px] w-[36px] items-center justify-center rounded-[9999px] border border-transparent text-white transition-all duration-200 hover:border-graphite hover:bg-white hover:text-black"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? dict.nav.menuClose : dict.nav.menuOpen}
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
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-graphite backdrop-blur-[25px] bg-[#000000f2] md:hidden overflow-hidden"
          >
            <ul className="flex flex-col gap-[4px] px-[24px] py-[16px]">
              {navItems.map((item) => (
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
                              <Link
                                href={child.href}
                                className="block rounded-[6px] px-[12px] py-[8px] text-[14px] font-normal text-ash transition-colors duration-150 hover:text-white"
                                onClick={(e) =>
                                  handleAnchorClick(e, child.href, () => setMobileOpen(false))
                                }
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block rounded-[9999px] border border-transparent px-[16px] py-[10px] text-[16px] font-normal text-bone transition-all duration-200 hover:border-graphite hover:bg-white hover:text-black"
                      onClick={(e) =>
                        handleAnchorClick(e, item.href, () => setMobileOpen(false))
                      }
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <div className="px-[24px] pb-[20px]">
              <Link
                href="/#contato"
                className="btn-slide flex items-center justify-center gap-[6px] rounded-[9999px] border border-iris/50 bg-iris/10 px-[18px] py-[10px] text-[14px] font-medium text-white transition-all duration-200 hover:border-iris hover:bg-iris hover:text-black"
                onClick={(e) =>
                  handleAnchorClick(e, "/#contato", () => setMobileOpen(false))
                }
              >
                {dict.nav.requestProposal}
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}