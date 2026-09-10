"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
}

export function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(146, 129, 247, 0.15)", // tom Iris da BCOMM
}: SpotlightCardProps) {
  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return;
    const { left, top } = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        mouseX.set(-500);
        mouseY.set(-500);
      }}
      className={`group relative overflow-hidden rounded-[16px] border border-graphite bg-[#0b0b0c]/90 transition-all duration-300 hover:border-iron hover:shadow-[0_8px_30px_rgba(255,255,255,0.03)] ${className}`}
    >
      {/* Spotlight de luz suave no tom Íris que segue as coordenadas do mouse */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[16px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              450px circle at ${mouseX}px ${mouseY}px,
              ${spotlightColor},
              transparent 80%
            )
          `,
        }}
      />
      {/* Efeito de brilho na borda ao redor do cursor */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[16px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              250px circle at ${mouseX}px ${mouseY}px,
              rgba(146, 129, 247, 0.4),
              transparent 70%
            )
          `,
          maskImage: "linear-gradient(black, black) content-box, linear-gradient(black, black)",
          WebkitMaskImage: "linear-gradient(black, black) content-box, linear-gradient(black, black)",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
          padding: "1px",
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
