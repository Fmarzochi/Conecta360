import NextAuth, { DefaultSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// Estendendo os tipos nativos do NextAuth para reconhecer as propriedades da arquitetura SaaS
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

// Estendendo a tipagem do JWT para incluir os novos campos
declare module "next-auth/jwt" {
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
        // LOGS PARA O TERMINAL: A prova real do que está acontecendo nos bastidores
        console.log("➡️ Tentativa de login. E-mail digitado:", credentials?.email);
        console.log("➡️ Senha recebida no servidor:", credentials?.password);

        if (!credentials?.email || !credentials?.password) {
          console.log("❌ Bloqueado: Faltam credenciais.");
          return null;
        }

        const adminEmail = process.env.ADMIN_EMAIL;
        const adminPassword = process.env.ADMIN_PASSWORD;
        const userEmail = process.env.USER_EMAIL;
        const userPassword = process.env.USER_PASSWORD;

        // 1. VALIDAÇÃO DO ADMINISTRADOR
        if (credentials.email === adminEmail) {
          if (credentials.password === adminPassword) {
            console.log("✅ Sucesso: Admin autenticado!");
            return {
              id: "1",
              name: "Administrador",
              email: adminEmail,
              role: process.env.ROLE_ADMIN || "ADMIN",
              company_id: "tenant_01"
            };
          } else {
            console.log("❌ Bloqueado: Senha do Admin está incorreta!");
            return null; // Trava imediata aqui
          }
        }

        // 2. VALIDAÇÃO DO USUÁRIO
        if (credentials.email === userEmail) {
          if (credentials.password === userPassword) {
            console.log("✅ Sucesso: Usuário autenticado!");
            return {
              id: "2",
              name: "Usuário Padrão",
              email: userEmail,
              role: process.env.ROLE_USER || "USER",
              company_id: "tenant_01"
            };
          } else {
            console.log("❌ Bloqueado: Senha do Usuário está incorreta!");
            return null; // Trava imediata aqui
          }
        }

        console.log("❌ Bloqueado: E-mail não encontrado na base de dados.");
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