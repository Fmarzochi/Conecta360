import NextAuth, { type DefaultSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { JWT } from "@auth/core/jwt"; // Importação explícita para o TS não se perder

// Estendendo os tipos nativos do NextAuth
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: string;
      company_id?: string;
    } & DefaultSession["user"];
  }

  interface User {
    role?: string;
    company_id?: string;
  }
}

// Forma mais segura de estender o JWT na v5
declare module "@auth/core/jwt" {
  interface JWT {
    role?: string;
    company_id?: string;
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: "jwt",
  },
  secret: process.env.AUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Senha", type: "password" }
      },
      async authorize(credentials) {
        console.log("➡️ Tentativa de login. E-mail digitado:", credentials?.email);

        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const adminEmail = process.env.ADMIN_EMAIL;
        const adminPassword = process.env.ADMIN_PASSWORD;
        const userEmail = process.env.USER_EMAIL;
        const userPassword = process.env.USER_PASSWORD;

        // 1. VALIDAÇÃO DO ADMINISTRADOR
        if (credentials.email === adminEmail) {
          if (credentials.password === adminPassword) {
            return {
              id: "1",
              name: "Administrador",
              email: adminEmail,
              role: process.env.ROLE_ADMIN || "ADMIN",
              company_id: "tenant_01"
            };
          }
          return null;
        }

        // 2. VALIDAÇÃO DO USUÁRIO
        if (credentials.email === userEmail) {
          if (credentials.password === userPassword) {
            return {
              id: "2",
              name: "Usuário Padrão",
              email: userEmail,
              role: process.env.ROLE_USER || "USER",
              company_id: "tenant_01"
            };
          }
          return null;
        }

        return null;
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.sub = user.id;
        token.role = user.role;
        token.company_id = user.company_id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        if (token.sub) session.user.id = token.sub;
        if (token.role) session.user.role = token.role as string;
        if (token.company_id) session.user.company_id = token.company_id as string;
      }
      return session;
    }
  },
  pages: {
    signIn: '/login',
  },
  trustHost: true,
});