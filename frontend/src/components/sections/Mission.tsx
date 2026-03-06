import React from 'react';

export default function Mission() {
  return (
    <section id="missao" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* Visão */}
          <div className="bg-black/40 backdrop-blur-md p-10 rounded-2xl border border-slate-700 hover:border-amber-500/50 transition-all duration-300">
            <h3 className="text-2xl font-bold text-amber-500 mb-6 uppercase tracking-wide">VISÃO</h3>
            <p className="text-slate-300 leading-relaxed text-lg">
              Ser referência nacional em soluções empresariais integradas, reconhecida por estruturar, organizar e impulsionar empresas com estratégia, inteligência e alta performance.
              <br /><br />
              Queremos ser a escolha de empresas que buscam crescimento com direção, segurança e resultados consistentes conectando pessoas, decisões e execução a uma gestão profissional e sustentável.
            </p>
          </div>

          {/* Missão */}
          <div className="bg-black/40 backdrop-blur-md p-10 rounded-2xl border border-slate-700 hover:border-amber-500/50 transition-all duration-300">
            <h3 className="text-2xl font-bold text-amber-500 mb-6 uppercase tracking-wide">MISSÃO</h3>
            <div className="text-slate-300 leading-relaxed text-lg space-y-4">
              <p>
                A Conecta 360 nasce da união entre experiência prática, visão estratégica e desenvolvimento humano.
              </p>
              <p>
                Fundada por Louise Rakel, psicóloga com atuação em Recursos Humanos e trajetória empreendedora, a empresa carrega a vivência real de quem conhece os desafios da gestão por dentro tanto na estrutura organizacional quanto na experiência de empreender.
              </p>
              <p>
                Nossa missão é organizar, estruturar e impulsionar empresas com gestão qualificada, visão sistêmica e foco absoluto no sucesso do cliente.
              </p>
              <p>
                Atuamos de forma multidisciplinar, com profissionais selecionados a partir de um banco de talentos próprio e estratégico, formado por especialistas previamente avaliados e recrutados com base em critérios técnicos, comportamentais e de performance.
              </p>
              <p>
                Isso garante que cada projeto seja conduzido por profissionais adequados à real necessidade do cliente assegurando qualidade nas entregas, cumprimento de prazos e alta performance.
              </p>
              <p className="font-semibold text-white">Nosso compromisso é oferecer:</p>
              <ul className="list-none space-y-1">
                <li>Excelência no atendimento</li>
                <li>Agilidade e responsabilidade nas entregas</li>
                <li>Projetos bem direcionados e acompanhados</li>
                <li>Gestão eficiente, organizada e mensurável</li>
                <li>Crescimento estruturado e sustentável</li>
              </ul>
              <p className="pt-2 italic">
                Mais do que prestar serviços, entregamos estrutura, direção e resultados consistentes.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}