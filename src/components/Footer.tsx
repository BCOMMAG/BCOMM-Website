"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/context/LocaleContext";

export function Footer() {
  const { dict } = useTranslation();

  return (
    <footer className="border-t border-graphite bg-transparent px-[24px] py-[32px] md:px-[48px]">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col gap-[32px] md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-[12px]">
            <Link
              href="/"
              onClick={(e) => {
                if (typeof window !== "undefined" && window.location.pathname === "/") {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className="flex items-center transition-opacity hover:opacity-100"
              aria-label="BCOMM - Voltar para o início"
            >
              <Image
                src="/logo.png"
                alt="BCOMM"
                width={120}
                height={22}
                className="h-[22px] w-auto opacity-70"
              />
            </Link>
            <span className="text-[14px] font-normal text-ash">
              &copy; {new Date().getFullYear()} {dict.footer.copyright}
            </span>
          </div>

          <div className="flex flex-col gap-[16px] md:flex-row md:items-center md:gap-[32px]">
            <nav className="flex flex-wrap gap-[20px] md:gap-[24px]" aria-label="Serviços">
              <Link href="/servicos/websites" className="text-[14px] font-normal text-ash transition-colors hover:text-bone">
                {dict.footer.websites}
              </Link>
              <Link href="/servicos/ecommerce" className="text-[14px] font-normal text-ash transition-colors hover:text-bone">
                {dict.footer.ecommerce}
              </Link>
              <Link href="/servicos/automacao" className="text-[14px] font-normal text-ash transition-colors hover:text-bone">
                {dict.footer.automation}
              </Link>
              <Link href="/servicos/link-bio" className="text-[14px] font-normal text-ash transition-colors hover:text-bone">
                {dict.footer.linkBio}
              </Link>
            </nav>

            <div className="flex flex-wrap gap-[20px] md:gap-[24px]">
              <Link href="/precos" className="text-[14px] font-normal text-ash transition-colors hover:text-bone">
                {dict.footer.prices}
              </Link>
              <Link href="/links" className="text-[14px] font-normal text-ash transition-colors hover:text-bone">
                {dict.footer.centralLinks}
              </Link>
              <Link href="/#contato" className="text-[14px] font-normal text-ash transition-colors hover:text-bone">
                {dict.footer.contact}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}