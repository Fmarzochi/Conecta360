import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200/60 shadow-sm transition-all duration-300 ease-out">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
        <div className="flex justify-between items-center h-20">

          {/* Logo Desktop */}
          <div className="hidden md:flex flex-shrink-0 items-center cursor-default select-none transition-all duration-300 ease-in-out -ml-3 lg:-ml-6">
            <span className="text-3xl md:text-2xl font-extrabold text-slate-900 tracking-tighter transition-all duration-300 ease-in-out">
              Conecta <span className="text-amber-500">360º</span>
            </span>
          </div>

          {/* Logo Mobile */}
          <div className="flex md:hidden w-full justify-center items-center mx-auto">
            <Link href="/login" className="flex-shrink-0 cursor-pointer select-none transition-all duration-300 ease-in-out">
              <span className="text-3xl font-extrabold text-slate-900 tracking-tighter transition-all duration-300 ease-in-out">
                Conecta <span className="text-amber-500">360º</span>
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center md:space-x-6 lg:space-x-8">
            <a href="/#inicio" className="text-[15px] lg:text-base text-slate-600 hover:text-amber-500 font-medium transition-colors duration-200 ease-out px-2 py-1 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50">Início</a>
            <a href="/#sobre" className="text-[15px] lg:text-base text-slate-600 hover:text-amber-500 font-medium transition-colors duration-200 ease-out px-2 py-1 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50">Sobre</a>
            <a href="/#servicos" className="text-[15px] lg:text-base text-slate-600 hover:text-amber-500 font-medium transition-colors duration-200 ease-out px-2 py-1 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50">Serviços</a>
            <a href="/#missao" className="text-[15px] lg:text-base text-slate-600 hover:text-amber-500 font-medium transition-colors duration-200 ease-out px-2 py-1 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50">Missão e Visão</a>
            <a href="/#valores" className="text-[15px] lg:text-base text-slate-600 hover:text-amber-500 font-medium transition-colors duration-200 ease-out px-2 py-1 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50">Valores</a>
            <a href="/login" className="text-[15px] lg:text-base text-slate-600 hover:text-amber-500 font-medium transition-colors duration-200 ease-out px-2 py-1 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50">Login</a>
          </nav>

          <div className="hidden md:flex items-center -mr-3 lg:-mr-6">
            <a
              href="/#contato"
              className="inline-flex items-center justify-center px-6 py-2.5 text-white text-sm font-semibold rounded-xl bg-black backdrop-blur-md border border-slate-700/50 shadow-lg hover:bg-neutral-800 transition-all duration-300 hover:-translate-y-0.5 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/50 focus-visible:ring-offset-2"
            >
              Falar Conosco
            </a>
          </div>

        </div>
      </div>
    </header>
  );
}