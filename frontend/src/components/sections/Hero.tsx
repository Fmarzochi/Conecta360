import React from 'react';

export default function Hero() {
  return (
    <section id="inicio" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 animate-fade-in-up">
          Conectando estratégia, <br className="hidden md:block" />
          <span className="text-amber-500">pessoas e resultados.</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-slate-300 mb-10">
          Consultoria integrada que estrutura, organiza e impulsiona empresas com visão estratégica e multidisciplinar.
        </p>
        <div className="flex justify-center">
          <a
            href="https://wa.me/5584987251813"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-md text-slate-900 bg-amber-500 hover:bg-amber-400 transition-all shadow-lg hover:shadow-amber-500/30 transform hover:-translate-y-1"
          >
            Fale com a nossa especialista
          </a>
        </div>
      </div>
    </section>
  );
}