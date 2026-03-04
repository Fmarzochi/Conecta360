import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <span className="text-xl font-bold text-white tracking-tight">
            Conecta <span className="text-amber-500">360º</span>
          </span>
          <p className="mt-1 text-sm">Consultoria Integrada de Apoio à Gestão.</p>
        </div>
        <div className="text-sm text-center md:text-right">
          &copy; {new Date().getFullYear()} Conecta 360º. Todos os direitos reservados.<br />
          Natal - Rio Grande do Norte
        </div>
      </div>
    </footer>
  );
}


