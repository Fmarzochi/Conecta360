import React from 'react';

export default function Mission() {
  return (
    <section id="missao" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* Visão */}
          <div className="bg-black/40 backdrop-blur-md p-10 rounded-2xl border border-slate-700 hover:border-amber-500/50 transition-all duration-300">
            <h3 className="text-2xl font-bold text-amber-500 mb-6 uppercase tracking-wide">VISÃO</h3>
            <p className="text-justify text-slate-300 leading-relaxed text-lg">
              Ser referência nacional em soluções empresariais integradas, reconhecida por estruturar, organizar e impulsionar empresas com estratégia, inteligência e alta performance.
              <br /><br />
              Queremos ser a escolha de empresas que buscam crescimento com direção, segurança e resultados consistentes, conectando pessoas, decisões e execução a uma gestão profissional e sustentável.
              <br /><br />
              Também buscamos fortalecer a cultura de gestão profissional nas organizações, apoiando empresas na construção de processos mais claros, decisões mais assertivas e resultados duradouros.
            </p>
          </div>

          {/* Missão */}
          <div className="bg-black/40 backdrop-blur-md p-10 rounded-2xl border border-slate-700 hover:border-amber-500/50 transition-all duration-300">
            <h3 className="text-2xl font-bold text-amber-500 mb-6 uppercase tracking-wide">MISSÃO</h3>
            <div className="text-justify text-slate-300 leading-relaxed text-lg space-y-4">
              <p>
                A Conecta 360 tem como missão organizar, estruturar e impulsionar empresas por meio de uma gestão eficiente, estratégica e humanizada.
              </p>
              <p>
                Acreditamos que empresas crescem de forma sustentável quando existe clareza na gestão, processos bem estruturados e pessoas preparadas para gerar resultados.
              </p>
              <p>
                Por isso, atuamos apoiando organizações na construção de estruturas mais organizadas, produtivas e alinhadas aos seus objetivos, sempre com foco no sucesso do cliente e no desenvolvimento das pessoas.
              </p>
              <p className="pt-2 italic">
                Mais do que prestar serviços, nosso propósito é contribuir para empresas mais organizadas, humanas e preparadas para crescer.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}