import React from 'react';
import Link from 'next/link';
import { auth } from '@/auth';

export default async function BackendConstrucao() {
  const session = await auth();
  const role = session?.user?.role || 'USER';

  const titulo = role === 'ADMIN' ? 'Administrador' : 'Usuário';

  return (
    <main className="min-h-screen w-full bg-black flex flex-col items-center justify-center px-4 text-center">
      <div className="bg-black p-12 rounded-3xl border border-slate-700 max-w-lg w-full shadow-2xl">
        <div className="flex justify-center mb-8">
          <svg
            className="w-24 h-24 text-amber-500 animate-pulse"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
          Backend do {titulo} em <br className="hidden md:block" />
          <span className="text-amber-500">construção</span>
        </h1>

        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 mt-8 text-slate-900 text-[15px] font-bold rounded-xl bg-amber-500 hover:bg-amber-400 transition-all duration-300 hover:-translate-y-0.5 active:scale-95 shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50"
        >
          Voltar para a página inicial
        </Link>
      </div>
    </main>
  );
}