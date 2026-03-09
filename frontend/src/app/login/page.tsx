"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() !== '' && password.trim() !== '') {
      setIsLoading(true);

      try {
        const result = await signIn('credentials', {
          redirect: false,
          email,
          password,
        });

        if (result?.error) {
          alert('Falha na autenticação. Verifique suas credenciais.');
          setIsLoading(false);
        } else {
          router.push('/backend-construcao');
          router.refresh();
        }
      } catch (error) {
        console.error('Erro ao realizar login:', error);
        setIsLoading(false);
      }
    }
  };

  return (
    <main className="min-h-screen w-full bg-slate-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Login</h1>
          <div className="w-12 h-1 bg-amber-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all outline-none"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-2">
              Senha
            </label>
            <input
              type="password"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full inline-flex items-center justify-center px-6 py-3.5 text-white text-[15px] font-semibold rounded-xl bg-black hover:bg-neutral-900 transition-all duration-300 hover:-translate-y-0.5 active:scale-95 shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-black/50 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Autenticando...' : 'Entrar'}
          </button>
        </form>
      </div>
    </main>
  );
}