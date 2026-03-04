

import React from 'react';

export default function Mission() {
  return (
    <section id="missao" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* Visão */}
          <div className="bg-slate-800/50 p-10 rounded-2xl border border-slate-700 hover:border-amber-500/50 transition-colors">
            <h3 className="text-2xl font-bold text-amber-500 mb-6 uppercase tracking-wide">Nossa Visão</h3>
            <p className="text-slate-300 leading-relaxed text-lg">
              Ser referência nacional em consultoria de recursos humanos, reconhecida pela excelência na transformação organizacional através da forte integração entre estratégia, pessoas e tecnologia, promovendo ambientes de trabalho seguros, produtivos e sustentáveis.
            </p>
          </div>

          {/* Missão */}
          <div className="bg-slate-800/50 p-10 rounded-2xl border border-slate-700 hover:border-amber-500/50 transition-colors">
            <h3 className="text-2xl font-bold text-amber-500 mb-6 uppercase tracking-wide">Nossa Missão</h3>
            <p className="text-slate-300 leading-relaxed text-lg">
              Oferecer soluções estratégicas e integradas de recursos humanos e desenvolvimento organizacional, combinando expertise consultiva com tecnologia de ponta, capacitando empresas a otimizar processos, desenvolver talentos, garantir segurança e alcançar resultados sustentáveis de alto desempenho, atuando também através de um software completo incluindo gestão de NR1.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}