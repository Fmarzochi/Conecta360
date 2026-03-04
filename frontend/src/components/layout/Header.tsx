import React from 'react';

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-extrabold text-slate-900 tracking-tight">
              Conecta <span className="text-amber-500">360º</span>
            </span>
          </div>

          {/* Navegação Desktop */}
          <nav className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-slate-600 hover:text-amber-500 font-medium transition-colors">Início</a>
            <a href="#sobre" className="text-slate-600 hover:text-amber-500 font-medium transition-colors">Sobre</a>
            <a href="#servicos" className="text-slate-600 hover:text-amber-500 font-medium transition-colors">Serviços</a>
            <a href="#missao" className="text-slate-600 hover:text-amber-500 font-medium transition-colors">Missão e Visão</a>
            <a href="#valores" className="text-slate-600 hover:text-amber-500 font-medium transition-colors">Valores</a>
          </nav>

          {/* Botão CTA Header */}
          <div className="hidden md:flex">
            <a
              href="#contato"
              className="bg-slate-900 text-white px-5 py-2 rounded-md font-semibold hover:bg-slate-800 transition-colors shadow-md"
            >
              Falar Conosco
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

