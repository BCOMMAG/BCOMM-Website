"use client";

import { useState, useRef, useEffect } from "react";
import { useTranslation } from "@/context/LocaleContext";
import { Locale } from "@/dictionaries";

interface LanguageOption {
  code: Locale;
  label: string;
  flag: string;
  sublabel: string;
}

const languages: LanguageOption[] = [
  { code: "pt", label: "Português", flag: "🇧🇷", sublabel: "Brasil & Portugal" },
  { code: "en", label: "English", flag: "🇺🇸", sublabel: "Global & USA" },
  { code: "es", label: "Español", flag: "🇪🇸", sublabel: "América Latina & España" },
  { code: "fr", label: "Français", flag: "🇫🇷", sublabel: "France & Canada" },
];

export function LanguageSelector({ className = "" }: { className?: string }) {
  const { locale, setLocale } = useTranslation();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentLang = languages.find((l) => l.code === locale) || languages[0];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (code: Locale) => {
    setLocale(code);
    setOpen(false);
  };

  const handleAutoTranslate = () => {
    // Inject and trigger Google Translate Element for unsupported locales (German, Italian, etc.)
    setOpen(false);
    if (typeof window !== "undefined") {
      const existingScript = document.getElementById("google-translate-script");
      if (!existingScript) {
        const script = document.createElement("script");
        script.id = "google-translate-script";
        script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        document.body.appendChild(script);

        const initDiv = document.createElement("div");
        initDiv.id = "google_translate_element";
        initDiv.style.position = "fixed";
        initDiv.style.bottom = "20px";
        initDiv.style.left = "20px";
        initDiv.style.zIndex = "99999";
        document.body.appendChild(initDiv);

        (window as unknown as { googleTranslateElementInit: () => void }).googleTranslateElementInit = () => {
          new (window as unknown as {
            google: {
              translate: {
                TranslateElement: new (
                  options: { pageLanguage: string; layout?: unknown },
                  elementId: string
                ) => void;
              };
            };
          }).google.translate.TranslateElement(
            { pageLanguage: locale },
            "google_translate_element"
          );
        };
      }
    }
  };

  return (
    <div ref={containerRef} className={`relative inline-block text-left ${className}`}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 rounded-full border border-graphite bg-[#0e0e14]/90 px-3 py-1.5 font-mono text-[12px] font-medium text-bone transition-all duration-200 hover:border-iris/60 hover:bg-[#14141e] hover:text-white"
        aria-expanded={open}
        aria-haspopup="true"
        aria-label="Selecionar idioma / Select language"
      >
        <span className="text-[13px]">{currentLang.flag}</span>
        <span className="uppercase tracking-wider">{currentLang.code}</span>
        <svg
          width="10"
          height="10"
          viewBox="0 0 16 16"
          fill="none"
          className={`transition-transform duration-200 text-ash ${open ? "rotate-180" : ""}`}
        >
          <path
            d="M4 6L8 10L12 6"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 top-full z-50 mt-2 w-[220px] rounded-xl border border-graphite bg-[#0c0c12]/95 p-1.5 shadow-2xl backdrop-blur-xl ring-1 ring-white/10">
          <div className="px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-ash border-b border-graphite/60">
            Idioma / Language
          </div>

          <div className="mt-1 space-y-0.5">
            {languages.map((l) => {
              const isSelected = l.code === locale;
              return (
                <button
                  key={l.code}
                  type="button"
                  onClick={() => handleSelect(l.code)}
                  className={`flex w-full items-center justify-between rounded-lg px-2.5 py-2 text-left text-[13px] transition-colors ${
                    isSelected
                      ? "bg-iris/15 text-iris-glow font-medium"
                      : "text-bone hover:bg-white/[0.06] hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-[14px]">{l.flag}</span>
                    <div>
                      <p className="leading-tight">{l.label}</p>
                      <p className="text-[10px] text-ash font-mono">{l.sublabel}</p>
                    </div>
                  </div>
                  {isSelected && (
                    <span className="h-1.5 w-1.5 rounded-full bg-iris" />
                  )}
                </button>
              );
            })}
          </div>

          <div className="mt-1.5 border-t border-graphite/60 pt-1.5">
            <button
              type="button"
              onClick={handleAutoTranslate}
              className="flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-left text-[12px] font-mono text-ash hover:bg-white/[0.06] hover:text-iris-glow transition-colors"
            >
              <span>🌐</span>
              <div>
                <p className="text-[11.5px] leading-tight">Outros Idiomas</p>
                <p className="text-[9.5px] text-charcoal">Tradutor Automático</p>
              </div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
