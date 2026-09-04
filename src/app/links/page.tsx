"use client";

import { useState, useEffect } from "react";
import { LinktreeMobile } from "@/components/linktree/LinktreeMobile";
import { LinktreeDesktop } from "@/components/linktree/LinktreeDesktop";

export default function LinksPage() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (isMobile === null) return null;

  return isMobile ? <LinktreeMobile /> : <LinktreeDesktop />;
}
