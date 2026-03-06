import React from 'react';

export default function Mission() {
  return (
    <section id="missao" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* VISÃO */}
          <div className="bg-white/5 backdrop-blur-xl p-10 rounded-2xl border border-white/10 hover:border-amber-500/50 transition-all duration-300 shadow-xl">

            <h3 className="text-2xl font-bold text-amber-500 mb-6 uppercase tracking-wide">
              VISÃO
            </h3>

            <p className="text-slate-300 leading-relaxed text-lg">
              Ser referência nacional em soluções empresariais integradas,
              reconhecida por estruturar, organizar e impulsionar empresas
              com estratégia, inteligência e alta performance.

              <br /><br />

              Queremos ser a escolha de empresas que buscam crescimento
              com direção, segurança e resultados consistentes,
              conectando pessoas, decisões e execução a uma gestão
              profissional e sustentável.
            </p>

          </div>

          {/* MISSÃO */}
          <div className="bg-white/5 backdrop-blur-xl p-10 rounded-2xl border border-white/10 hover:border-amber-500/50 transition-all duration-300 shadow-xl">

            <h3 className="text-2xl font-bold text-amber-500 mb-6 uppercase tracking-wide">
              MISSÃO
            </h3>

            <p className="text-slate-300 leading-relaxed text-lg">
              A <strong>Conecta 360º</strong> nasce da união entre experiência prática,
              visão estratégica e desenvolvimento humano.

              <br /><br />

              Fundada por Louise Rakel, psicóloga com atuação em Recursos Humanos
              e trajetória empreendedora, a empresa carrega a vivência real
              de quem conhece os desafios da gestão por dentro,
              tanto na estrutura organizacional quanto na experiência
              de empreender.

              <br /><br />

              Nossa missão é organizar, estruturar e impulsionar empresas
              com gestão qualificada, visão sistêmica e foco absoluto
              no sucesso do cliente.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}