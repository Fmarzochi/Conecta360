import React from 'react';

const servicesList = [
  "Recursos Humanos",
  "Gestão Comercial",
  "Marketing Estratégico",
  "Gestão Administrativa",
  "Gestão de Projetos",
  "Gestão de Dados",
  "Gestão de TI",
  "Implementação de NR1"
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 uppercase tracking-wide">Nossos Serviços</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesList.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md border border-slate-100 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 bg-slate-100 text-amber-500 rounded-md flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                {/* Ícone Genérico Tailwind/Heroicons */}
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900">{service}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}