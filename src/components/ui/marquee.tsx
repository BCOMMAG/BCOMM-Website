"use client";

import React, { useRef } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps extends React.ComponentPropsWithoutRef<"div"> {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
  ariaLabel?: string;
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ariaLabel,
  ...props
}: MarqueeProps) {
  const marqueeRef = useRef<HTMLDivElement>(null);

  return (
    <div
      {...props}
      ref={marqueeRef}
      className={cn(
        "group flex overflow-hidden [--gap:1rem] [gap:var(--gap)]",
        vertical ? "flex-col" : "flex-row",
        className
      )}
      aria-label={ariaLabel}
      role="marquee"
      tabIndex={0}
    >
      {React.useMemo(
        () => (
          <>
            {Array.from({ length: repeat }, (_, i) => (
              <div
                key={i}
                className={cn(
                  "flex shrink-0 justify-around [gap:var(--gap)]",
                  vertical ? "flex-col" : "flex-row",
                  !vertical && "animate-marquee",
                  vertical && "animate-marquee-vertical",
                  pauseOnHover && "group-hover:[animation-play-state:paused]",
                  reverse && "[animation-direction:reverse]"
                )}
              >
                {children}
              </div>
            ))}
          </>
        ),
        [repeat, children, vertical, pauseOnHover, reverse]
      )}
    </div>
  );
}
