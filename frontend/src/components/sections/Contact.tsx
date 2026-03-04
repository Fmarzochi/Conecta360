import React from 'react';

export default function Contact() {
  return (
    <section id="contato" className="py-24 bg-amber-500 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-8">
          Vamos estruturar o crescimento da sua empresa?
        </h2>

        <p className="text-lg text-slate-800 font-medium mb-10">
          📍 Natal – Rio Grande do Norte <br />
          📞 (84) 98725-1813
        </p>

        <a
          href="https://wa.me/5584987251813"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold rounded-lg text-white bg-slate-900 hover:bg-slate-800 transition-all shadow-2xl hover:-translate-y-1"
        >
          Falar no WhatsApp
        </a>
      </div>
    </section>
  );
}