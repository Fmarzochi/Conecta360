import React from 'react';

const servicesList = [
  {
    title: "Mentoria personalizada individual para profissionais",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z"/>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
      </svg>
    )
  },
  {
    title: "Recursos Humanos",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5V4H2v16h5m10 0v-2a4 4 0 00-8 0v2m8 0H9"/>
      </svg>
    )
  },
  {
    title: "Gestão Comercial",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3v18h18"/>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 13l3-3 4 4 5-5"/>
      </svg>
    )
  },
  {
    title: "Marketing Estratégico",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5h2m-1-2v4m-7 7a9 9 0 1118 0 9 9 0 01-18 0z"/>
      </svg>
    )
  },
  {
    title: "Gestão Administrativa",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-6h6v6m2 4H7a2 2 0 01-2-2V7l6-4 6 4v12a2 2 0 01-2 2z"/>
      </svg>
    )
  },
  {
    title: "Gestão de Projetos",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6M9 8h6M5 4h14v16H5z"/>
      </svg>
    )
  },
  {
    title: "Gestão de Dados",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <ellipse cx="12" cy="5" rx="9" ry="3"/>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5v6c0 1.7 4 3 9 3s9-1.3 9-3V5"/>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 11v6c0 1.7 4 3 9 3s9-1.3 9-3v-6"/>
      </svg>
    )
  },
  {
    title: "Gestão de TI",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <rect x="3" y="4" width="18" height="12" rx="2"/>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 20h8M10 16v4M14 16v4"/>
      </svg>
    )
  },
  {
    title: "Implementação de NR1",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v4m0 4h.01M5.07 19h13.86c1.54 0 2.5-1.67 1.73-3L13.73 4a2 2 0 00-3.46 0L3.34 16c-.77 1.33.19 3 1.73 3z"/>
      </svg>
    )
  }
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 uppercase tracking-wide">
            Nossos Serviços
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {servicesList.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md border border-slate-100 transition-all duration-300 hover:-translate-y-1 group"
            >

              <div className="w-12 h-12 bg-slate-100 text-amber-500 rounded-md flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                {service.icon}
              </div>

              <h3 className="text-left text-lg font-bold text-slate-900">
                {service.title}
              </h3>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}