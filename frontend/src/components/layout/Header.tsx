import React from 'react';

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200/60 shadow-sm transition-all duration-300 ease-out">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center mx-auto md:mx-0 cursor-default select-none transition-all duration-300 ease-in-out">
            <span className="text-3xl md:text-2xl font-extrabold text-slate-900 tracking-tighter transition-all duration-300 ease-in-out">
              Conecta <span className="text-amber-500">360º</span>
            </span>
          </div>
          <nav className="hidden md:flex items-center md:space-x-6 lg:space-x-8">
            <a href="#inicio" className="text-sm lg:text-[15px] text-slate-600 hover:text-amber-500 font-medium transition-colors duration-200 ease-out px-2 py-1 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50">Início</a>
            <a href="#sobre" className="text-sm lg:text-[15px] text-slate-600 hover:text-amber-500 font-medium transition-colors duration-200 ease-out px-2 py-1 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50">Sobre</a>
            <a href="#servicos" className="text-sm lg:text-[15px] text-slate-600 hover:text-amber-500 font-medium transition-colors duration-200 ease-out px-2 py-1 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50">Serviços</a>
            <a href="#missao" className="text-sm lg:text-[15px] text-slate-600 hover:text-amber-500 font-medium transition-colors duration-200 ease-out px-2 py-1 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50">Missão e Visão</a>
            <a href="#valores" className="text-sm lg:text-[15px] text-slate-600 hover:text-amber-500 font-medium transition-colors duration-200 ease-out px-2 py-1 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50">Valores</a>
          </nav>
          <div className="hidden md:flex items-center">
            <a
              href="#contato"
              className="inline-flex items-center justify-center px-6 py-2.5 text-white text-sm font-semibold rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/50 shadow-lg hover:bg-slate-800/90 transition-all duration-300 hover:-translate-y-0.5 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/50 focus-visible:ring-offset-2"
            >
              Falar Conosco
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}