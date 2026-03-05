import React from 'react';

export default function Contact() {
  return (
    <>
      <section id="contato" className="py-16 bg-amber-500 relative overflow-hidden">

        {/* Micro-animação injetada diretamente para não alterar o Tailwind config */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes softFloat {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-4px); }
          }
          .animate-soft-float {
            animation: softFloat 4s ease-in-out infinite;
          }
        `}} />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex justify-center">

          {/* Botão Refinado com Shimmer Sweep e Ícone */}
          <a
            href="mailto:louiserakel@hotmail.com?subject=Contato%20via%20Site%20Conecta%20360&body=Olá,%20gostaria%20de%20mais%20informações%20sobre%20a%20Conecta%20360."
            className="
              group
              relative
              inline-flex
              items-center
              justify-center
              gap-2
              px-10
              py-5
              text-lg
              font-bold
              rounded-lg
              text-white
              bg-slate-900
              hover:bg-slate-800
              active:scale-95
              transition-all
              duration-300
              overflow-hidden
              focus:outline-none
              focus:ring-2
              focus:ring-white/30
              focus:ring-offset-2
              focus:ring-offset-amber-500
              w-full
              sm:w-auto
              shadow-xl
            "
          >
            <span className="relative z-10 flex items-center gap-2">
              Enviar Mensagem

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"
                />
              </svg>
            </span>

            {/* Efeito Shimmer Sweep */}
            <span
              className="
                absolute
                inset-0
                -translate-x-full
                bg-gradient-to-r
                from-transparent
                via-white/20
                to-transparent
                group-hover:translate-x-full
                transition-transform
                duration-700
                pointer-events-none
              "
            />
          </a>

        </div>
      </section>

      {/* Container SaaS Premium - Movido para fora da section (resolve overflow-hidden) */}
      <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-3 p-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] animate-soft-float">

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/company/conectarecursoshumanos360/"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-white/40 hover:bg-[#0A66C2]/15 border border-white/40 hover:border-[#0A66C2]/30 transition-all duration-300 hover:scale-[1.08] active:scale-95 active:brightness-110 hover:shadow-[0_0_20px_rgba(10,102,194,0.25)]"
          aria-label="Acessar LinkedIn"
        >
          {/* Tooltip (Desktop apenas para evitar travamento no mobile) */}
          <span className="hidden md:block absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-slate-900/90 backdrop-blur-sm text-white text-xs font-medium rounded-lg opacity-0 pointer-events-none translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap shadow-xl border border-white/10">
            LinkedIn
          </span>
          {/* Ícone com cor forte sólida e drop-shadow para destaque no glass */}
          <svg className="w-[26px] h-[26px] text-[#0A66C2] drop-shadow-sm transition-transform duration-300 group-active:scale-90" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/5584987251813"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-white/40 hover:bg-[#25D366]/15 border border-white/40 hover:border-[#25D366]/30 transition-all duration-300 hover:scale-[1.08] active:scale-95 active:brightness-110 hover:shadow-[0_0_20px_rgba(37,211,102,0.25)]"
          aria-label="Falar no WhatsApp"
        >
          {/* Tooltip (Desktop apenas para evitar travamento no mobile) */}
          <span className="hidden md:block absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-slate-900/90 backdrop-blur-sm text-white text-xs font-medium rounded-lg opacity-0 pointer-events-none translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap shadow-xl border border-white/10">
            WhatsApp
          </span>
          {/* Ícone com cor forte sólida e drop-shadow para destaque no glass */}
          <svg className="w-[26px] h-[26px] text-[#25D366] drop-shadow-sm transition-transform duration-300 group-active:scale-90" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
          </svg>
        </a>

      </div>
    </>
  );
}