"use client";

import { useEffect, useRef } from "react";
import { useScroll } from "framer-motion";

interface ScrollSequenceProps {
  desktopFramesCount: number;
  mobileFramesCount: number;
}

export function ScrollSequence({ desktopFramesCount, mobileFramesCount }: ScrollSequenceProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scrollYProgress } = useScroll();
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Detect mobile or desktop
    const isMobile = window.innerWidth < 768;
    const framesCount = isMobile ? mobileFramesCount : desktopFramesCount;
    const prefix = isMobile ? "/frames/mobile/frame_" : "/frames/desktop/frame_";
    
    // Preload images
    const images: HTMLImageElement[] = [];
    for (let i = 1; i <= framesCount; i++) {
      const img = new window.Image();
      const paddedIndex = i.toString().padStart(4, '0');
      img.src = `${prefix}${paddedIndex}.jpg`;
      images.push(img);
    }

    let currentFrame = 0;

    const render = (index: number) => {
      if (images[index] && images[index].complete && images[index].naturalWidth > 0) {
        const img = images[index];
        const canvasRatio = canvas.width / canvas.height;
        const imgRatio = img.width / img.height;
        let drawWidth = canvas.width;
        let drawHeight = canvas.height;
        let offsetX = 0;
        let offsetY = 0;

        // object-fit: cover equivalent
        if (canvasRatio > imgRatio) {
           drawHeight = canvas.width / imgRatio;
           offsetY = (canvas.height - drawHeight) / 2;
        } else {
           drawWidth = canvas.height * imgRatio;
           offsetX = (canvas.width - drawWidth) / 2;
        }
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      }
    };

    // Initial setup
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render(currentFrame);
    };

    if (images[0]) {
      images[0].onload = () => {
        resizeCanvas();
      };
    }

    window.addEventListener('resize', resizeCanvas);

    const unsubscribe = scrollYProgress.on('change', (v) => {
      const frameIndex = Math.min(
        framesCount - 1,
        Math.floor(v * framesCount)
      );
      
      if (frameIndex !== currentFrame) {
        currentFrame = frameIndex;
        requestAnimationFrame(() => render(frameIndex));
      }
    });

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      unsubscribe();
    };
  }, [desktopFramesCount, mobileFramesCount, scrollYProgress]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-[100vh] z-[-1] pointer-events-none"
    />
  );
}
