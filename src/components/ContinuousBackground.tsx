"use client";

import React from "react";
import Image from "next/image";

export function ContinuousBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-[-1] overflow-hidden select-none"
    >
      {/* ======================================================== */}
      {/* 1. HERO: PRIMEIRA IMAGEM ESTÁTICA COM TRANSIÇÃO SUAVE      */}
      {/* ======================================================== */}
      <div className="absolute top-0 left-0 right-0 h-[100dvh] min-h-[720px] overflow-hidden">
        {/* Imagem Desktop */}
        <div className="hidden md:block absolute inset-0">
          <Image
            src="/frames/desktop/frame_0001.webp"
            alt=""
            fill
            priority
            quality={85}
            className="object-cover object-center opacity-70"
            sizes="100vw"
          />
        </div>

        {/* Imagem Mobile */}
        <div className="block md:hidden absolute inset-0">
          <Image
            src="/frames/mobile/frame_0001.webp"
            alt=""
            fill
            priority
            quality={80}
            className="object-cover object-center opacity-65"
            sizes="100vw"
          />
        </div>

        {/* Overlay escuro uniforme para legibilidade impecável dos textos */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Glow de horizonte violeta suave no rodapé da dobra */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[350px] w-[800px] max-w-full rounded-full bg-iris/15 blur-[120px]" />

        {/* Transição perfeita em fade do Hero para o fundo das próximas seções */}
        <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-gradient-to-b from-transparent via-[#030306]/85 to-[#030306]" />
      </div>

      {/* ======================================================== */}
      {/* 2. SOLUÇÕES: AURA ORBITAL VIOLETA                        */}
      {/* ======================================================== */}
      <div className="absolute top-[95dvh] left-1/2 -translate-x-1/2 h-[800px] w-[1000px] max-w-[95vw] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(146,129,247,0.13)_0%,_rgba(88,68,200,0.05)_45%,_transparent_70%)] blur-[90px]" />

      {/* ======================================================== */}
      {/* 3. SOBRE & DIFERENCIAIS: ONDA VETORIAL SUAVE E CONTÍNUA  */}
      {/* ======================================================== */}
      <div className="absolute top-[1800px] left-0 right-0 h-[400px]">
        {/* Glow perolado suave do lado esquerdo */}
        <div className="absolute -top-[100px] left-[-150px] h-[500px] w-[600px] rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.03)_0%,_rgba(146,129,247,0.08)_50%,_transparent_70%)] blur-[100px]" />

        {/* Onda sinuosa fluida conectando as seções */}
        <svg
          className="w-full h-full opacity-30"
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
              <stop offset="0%" stopColor="#9281f7" stopOpacity="0.10" />
              <stop offset="45%" stopColor="#ffffff" stopOpacity="0.03" />
              <stop offset="100%" stopColor="#7059e6" stopOpacity="0.08" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* ======================================================== */}
      {/* 4. PROCESSO: TRILHA DE ONDA LINEAR GUIA                  */}
      {/* ======================================================== */}
      <div className="absolute top-[2600px] left-0 right-0 h-[500px]">
        {/* Aura central suave */}
        <div className="absolute top-[50px] left-1/2 -translate-x-1/2 h-[400px] w-[850px] rounded-full bg-[radial-gradient(circle,_rgba(146,129,247,0.08)_0%,_transparent_65%)] blur-[90px]" />

        {/* Linha fluida vetorial pontilhada de alta precisão */}
        <svg
          className="w-full h-full opacity-35"
          viewBox="0 0 1440 400"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M-50,80 C350,280 720,100 1100,260 C1280,330 1400,220 1500,280"
            stroke="url(#process-wave-stroke)"
            strokeWidth="1.5"
            strokeDasharray="4 8"
          />
          <defs>
            <linearGradient id="process-wave-stroke" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#9281f7" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#9281f7" stopOpacity="0.4" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* ======================================================== */}
      {/* 5. CASES DE SUCESSO: HALOS LATERAIS DE PROFUNDIDADE      */}
      {/* ======================================================== */}
      <div className="absolute top-[3500px] left-0 right-0 h-[600px]">
        <div className="absolute top-[50px] -left-[100px] h-[550px] w-[600px] rounded-full bg-[radial-gradient(circle,_rgba(146,129,247,0.09)_0%,_transparent_65%)] blur-[100px]" />
        <div className="absolute top-[180px] -right-[120px] h-[500px] w-[550px] rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.025)_0%,_rgba(112,89,230,0.07)_50%,_transparent_70%)] blur-[95px]" />
      </div>

      {/* ======================================================== */}
      {/* 6. ARQUITETURA DE IA: AURA EXPANSIVA NEURAL              */}
      {/* ======================================================== */}
      <div className="absolute top-[4300px] left-1/2 -translate-x-1/2 h-[750px] w-[1100px] max-w-[98vw] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(146,129,247,0.15)_0%,_rgba(186,167,255,0.06)_40%,_transparent_70%)] blur-[110px]" />

      {/* ======================================================== */}
      {/* 7. CONTATO: ONDA DE ENERGIA & CONVERSÃO FINAL            */}
      {/* ======================================================== */}
      <div className="absolute bottom-0 left-0 right-0 h-[900px]">
        {/* Glow amplo ascendente atrás da ilha de contato */}
        <div className="absolute bottom-[100px] left-1/2 -translate-x-1/2 h-[750px] w-[1200px] max-w-[98vw] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(146,129,247,0.18)_0%,_rgba(186,167,255,0.07)_40%,_transparent_70%)] blur-[120px]" />

        {/* Curva vetorial de base que encerra a composição */}
        <svg
          className="absolute bottom-0 left-0 w-full h-[320px] opacity-25"
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
              <stop offset="0%" stopColor="#9281f7" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#030306" stopOpacity="0.9" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}