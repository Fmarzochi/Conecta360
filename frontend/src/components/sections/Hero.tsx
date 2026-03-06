import React from 'react';

export default function Hero() {
  return (
    <section id="inicio" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 animate-fade-in-up">
          Conectando estratégia, <br className="hidden md:block" />
          <span className="text-amber-500">pessoas e resultados.</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-slate-300 mb-10">
          Consultoria integrada que estrutura, organiza e impulsiona empresas com visão estratégica e multidisciplinar.
        </p>
        <div className="flex justify-center">
          <a
            href="https://wa.me/5584987251813"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              relative
              inline-flex
              items-center
              justify-center
              gap-3
              px-10
              py-5
              text-lg
              font-bold
              rounded-lg
              text-slate-900
              bg-amber-500
              hover:bg-amber-400
              active:scale-95
              transition-all
              duration-300
              overflow-hidden
              focus:outline-none
              focus:ring-2
              focus:ring-amber-500/50
              focus:ring-offset-2
              focus:ring-offset-black
              shadow-lg
              hover:shadow-amber-500/30
              w-full
              sm:w-auto
            "
          >
            <span className="relative z-10 flex items-center gap-3">
              Fale com a nossa especialista
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1"
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

            <span
              className="
                absolute
                inset-0
                -translate-x-full
                bg-gradient-to-r
                from-transparent
                via-white/40
                to-transparent
                group-hover:translate-x-full
                transition-transform
                duration-700
                pointer-events-none
              "
            />
          </a>
        </div>
      </div>
    </section>
  );
}