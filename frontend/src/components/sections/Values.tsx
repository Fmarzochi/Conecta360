import React from 'react';

const valuesList = [
  { title: "Excelência Estratégica", desc: "Planejamento e execução de alto nível." },
  { title: "Inovação Tecnológica", desc: "Soluções modernas para problemas complexos." },
  { title: "Desenvolvimento Humano", desc: "Pessoas no centro do crescimento." },
  { title: "Conformidade e Segurança", desc: "Atuação ética e respeito às normas." },
  { title: "Parceria e Confiança", desc: "Relações sólidas com nossos clientes." },
  { title: "Resultados Sustentáveis", desc: "Crescimento contínuo e estruturado." }
];

export default function Values() {
  return (
    <section id="valores" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 uppercase tracking-wide">Nossos Valores</h2>
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