import React from 'react';

const valuesList = [
  { title: "Foco no Sucesso do Cliente", desc: "O crescimento do cliente é nossa principal medida de desempenho. Atuamos com proximidade, escuta ativa e comprometimento real com resultados." },
  { title: "Gestão Estratégica e Qualificada", desc: "Unimos conhecimento técnico, experiência prática e visão sistêmica para garantir decisões seguras e direcionamento claro." },
  { title: "Performance com Qualidade", desc: "Trabalhamos com organização, indicadores e acompanhamento constante para assegurar entregas ágeis, eficientes e de alto padrão." },
  { title: "Ética e Transparência", desc: "Conduzimos cada projeto com responsabilidade, conformidade normativa e clareza nas relações." },
  { title: "Desenvolvimento Sustentável", desc: "Buscamos resultados sólidos e duradouros, fortalecendo a empresa hoje e preparando a para crescer de forma estruturada no futuro." }
];

export default function Values() {
  return (
    <section id="valores" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 uppercase tracking-wide">
            NOSSOS VALORES
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {valuesList.map((val, index) => (
            <div key={index} className="p-8 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-slate-900 mb-3">{val.title}</h3>
              <p className="text-slate-600">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}