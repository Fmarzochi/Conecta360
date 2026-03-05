import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 md:py-16 border-t border-slate-800/60 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.02)]">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">

        <div className="flex flex-col items-center md:items-start text-center md:text-left">

          <span className="text-2xl font-extrabold text-white tracking-tighter select-none">
            Conecta <span className="text-amber-500">360º</span>
          </span>

          <p className="mt-2.5 text-sm md:text-[15px] text-slate-400/90 font-medium tracking-wide">
            Consultoria Integrada de Apoio à Gestão.
          </p>
        </div>

        <div className="text-sm md:text-[15px] text-slate-500 text-center md:text-right leading-relaxed font-medium">
          &copy; 2024 - Conecta 360º. Todos os direitos reservados.<br />
          Natal - Rio Grande do Norte
        </div>

      </div>
    </footer>
  );
}