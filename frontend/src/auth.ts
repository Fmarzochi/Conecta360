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
  // Configuração obrigatória da estratégia de sessão
  session: {
    strategy: "jwt",
  },
  // Chave secreta obrigatória para assinar o JWT
  secret: process.env.AUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Senha", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const adminEmail = process.env.ADMIN_EMAIL;
        const adminPassword = process.env.ADMIN_PASSWORD;
        const userEmail = process.env.USER_EMAIL;
        const userPassword = process.env.USER_PASSWORD;

        const roleAdmin = process.env.ROLE_ADMIN || "ADMIN";
        const roleUser = process.env.ROLE_USER || "USER";

        // VALIDAÇÃO: Usuário Administrador (ADMIN)
        if (
          adminEmail &&
          adminPassword &&
          credentials.email === adminEmail &&
          credentials.password === adminPassword
        ) {
          return {
            id: "1",
            name: "Administrador",
            email: adminEmail,
            role: roleAdmin,
            company_id: "tenant_01"
          };
        }

        // VALIDAÇÃO: Usuário Comum (USER)
        if (
          userEmail &&
          userPassword &&
          credentials.email === userEmail &&
          credentials.password === userPassword
        ) {
          return {
            id: "2",
            name: "Usuário Padrão",
            email: userEmail,
            role: roleUser,
            company_id: "tenant_01"
          };
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
        if (token.sub) {
          session.user.id = token.sub;
        }
        if (token.role) {
          session.user.role = token.role as string;
        }
        if (token.company_id) {
          session.user.company_id = token.company_id as string;
        }
      }
      return session;
    }
  },
  pages: {
    signIn: '/login',
  },
  // Garante compatibilidade de URLs em diferentes ambientes (Localhost/Vercel)
  trustHost: true,
});