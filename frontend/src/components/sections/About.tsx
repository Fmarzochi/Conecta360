import React from 'react';

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 uppercase tracking-wide">
          Sobre a Empresa
        </h2>
        <div className="w-24 h-1 bg-amber-500 mx-auto mb-8 rounded-full"></div>
        <p className="text-lg leading-relaxed text-slate-600 mb-6">
          A <strong className="text-slate-900">Conecta 360º</strong> é uma consultoria integrada de apoio à gestão, especializada em estruturar, organizar e impulsionar empresas por meio de uma visão estratégica e multidisciplinar.
        </p>
        <p className="text-lg leading-relaxed text-slate-600 mb-6">
          Atuamos conectando pessoas, processos, estratégia e indicadores, oferecendo soluções completas nas áreas de Recursos Humanos, Administrativo, Comercial, Marketing e Performance.
        </p>
        <p className="text-lg leading-relaxed text-slate-600 font-medium">
          Mais do que entregar diagnósticos, implementamos e acompanhamos soluções que garantem organização, eficiência operacional e crescimento sustentável.
        </p>
      </div>
    </section>
  );
}