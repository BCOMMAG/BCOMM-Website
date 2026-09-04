"use client";

import { useRef, useEffect, useCallback } from "react";

interface TypingEffectProps {
  words: string[];
  startIndex?: number;
  className?: string;
}

export function TypingEffect({ words, startIndex = 0, className = "" }: TypingEffectProps) {
  const spanRef = useRef<HTMLSpanElement>(null);

  const animate = useCallback(() => {
    const el = spanRef.current;
    if (!el || words.length === 0) return;
    let wordIndex = startIndex;
    let charIndex = 0;
    let isDeleting = false;
    let timeout: ReturnType<typeof setTimeout>;

    function tick() {
      const current = el;
      if (!current) return;
      const word = words[wordIndex];
      if (!isDeleting) {
        current.textContent = word.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === word.length) {
          timeout = setTimeout(() => { isDeleting = true; tick(); }, 2000);
          return;
        }
        timeout = setTimeout(tick, 70);
      } else {
        current.textContent = word.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length;
          timeout = setTimeout(tick, 300);
          return;
        }
        timeout = setTimeout(tick, 40);
      }
    }
    tick();
    return () => clearTimeout(timeout);
  }, [words, startIndex]);

  useEffect(() => { const cleanup = animate(); return cleanup; }, [animate]);

  return (
    <span className={className}>
      <span ref={spanRef} aria-hidden="true" />
      <span
        className="ml-0.5 inline-block w-[2px] bg-iris"
        style={{ height: "1em", verticalAlign: "text-bottom", animation: "blink 1s step-end infinite" }}
        aria-hidden="true"
      />
    </span>
  );
}
