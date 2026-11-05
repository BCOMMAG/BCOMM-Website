"use client";

import React from "react";

export function ContinuousBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none"
    >
      {/* ======================================================== */}
      {/* 1. HERO: VÍDEOS EM LOOPING CONTÍNUO (DESKTOP & MOBILE)     */}
      {/* ======================================================== */}
      <div className="absolute top-0 left-0 right-0 h-[100dvh] min-h-[720px] overflow-hidden">
        {/* Vídeo Desktop (16:9) */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/videos/header-desktop-poster.webp"
          className="hidden md:block absolute inset-0 w-full h-full object-cover object-center"
        >
          <source src="/videos/header-desktop.mp4" type="video/mp4" />
        </video>

        {/* Vídeo Mobile (9:16) */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/videos/header-mobile-poster.webp"
          className="block md:hidden absolute inset-0 w-full h-full object-cover object-center"
        >
          <source src="/videos/header-mobile.mp4" type="video/mp4" />
        </video>
      </div>

      {/* ======================================================== */}
      {/* 2. SOLUÇÕES: AURA ORBITAL VIOLETA                        */}
      {/* ======================================================== */}
      <div className="absolute top-[100dvh] left-1/2 -translate-x-1/2 h-[800px] w-[1050px] max-w-[95vw] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(146,129,247,0.18)_0%,_rgba(88,68,200,0.08)_45%,_transparent_70%)] blur-[90px]" />

      {/* ======================================================== */}
      {/* 3. SOBRE & DIFERENCIAIS: ONDA VETORIAL SUAVE E CONTÍNUA  */}
      {/* ======================================================== */}
      <div className="absolute top-[1800px] left-0 right-0 h-[450px]">
        {/* Glow perolado suave à esquerda */}
        <div className="absolute -top-[100px] left-[-100px] h-[550px] w-[650px] rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.04)_0%,_rgba(146,129,247,0.12)_50%,_transparent_70%)] blur-[100px]" />

        {/* Onda sinuosa fluida */}
        <svg
          className="w-full h-full opacity-40"
          viewBox="0 0 1440 360"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M0,180 C360,320 600,60 960,200 C1200,290 1340,120 1440,180 L1440,360 L0,360 Z"
            fill="url(#wave-gradient-sobre)"
          />
          <defs>
            <linearGradient id="wave-gradient-sobre" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#9281f7" stopOpacity="0.14" />
              <stop offset="45%" stopColor="#ffffff" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#7059e6" stopOpacity="0.10" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* ======================================================== */}
      {/* 4. PROCESSO: TRILHA DE ONDA GUIA                         */}
      {/* ======================================================== */}
      <div className="absolute top-[2600px] left-0 right-0 h-[500px]">
        <div className="absolute top-[50px] left-1/2 -translate-x-1/2 h-[450px] w-[900px] rounded-full bg-[radial-gradient(circle,_rgba(146,129,247,0.11)_0%,_transparent_65%)] blur-[95px]" />

        <svg
          className="w-full h-full opacity-45"
          viewBox="0 0 1440 400"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M-50,80 C350,280 720,100 1100,260 C1280,330 1400,220 1500,280"
            stroke="url(#process-wave-stroke)"
            strokeWidth="1.75"
            strokeDasharray="5 9"
          />
          <defs>
            <linearGradient id="process-wave-stroke" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#9281f7" stopOpacity="0.65" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#9281f7" stopOpacity="0.5" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* ======================================================== */}
      {/* 5. CASES DE SUCESSO: HALOS LATERAIS                      */}
      {/* ======================================================== */}
      <div className="absolute top-[3500px] left-0 right-0 h-[600px]">
        <div className="absolute top-[50px] -left-[100px] h-[550px] w-[600px] rounded-full bg-[radial-gradient(circle,_rgba(146,129,247,0.12)_0%,_transparent_65%)] blur-[100px]" />
        <div className="absolute top-[180px] -right-[120px] h-[500px] w-[550px] rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.035)_0%,_rgba(112,89,230,0.10)_50%,_transparent_70%)] blur-[95px]" />
      </div>

      {/* ======================================================== */}
      {/* 6. ARQUITETURA DE IA: AURA EXPANSIVA NEURAL              */}
      {/* ======================================================== */}
      <div className="absolute top-[4300px] left-1/2 -translate-x-1/2 h-[750px] w-[1150px] max-w-[98vw] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(146,129,247,0.20)_0%,_rgba(186,167,255,0.08)_40%,_transparent_70%)] blur-[110px]" />

      {/* ======================================================== */}
      {/* 7. CONTATO: ONDA DE ENERGIA & CONVERSÃO FINAL            */}
      {/* ======================================================== */}
      <div className="absolute bottom-0 left-0 right-0 h-[900px]">
        <div className="absolute bottom-[100px] left-1/2 -translate-x-1/2 h-[750px] w-[1250px] max-w-[98vw] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(146,129,247,0.22)_0%,_rgba(186,167,255,0.09)_40%,_transparent_70%)] blur-[120px]" />

        <svg
          className="absolute bottom-0 left-0 w-full h-[320px] opacity-35"
          viewBox="0 0 1440 320"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M0,120 C400,260 900,40 1440,160 L1440,320 L0,320 Z"
            fill="url(#contact-base-wave)"
          />
          <defs>
            <linearGradient id="contact-base-wave" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#9281f7" stopOpacity="0.16" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0.95" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}