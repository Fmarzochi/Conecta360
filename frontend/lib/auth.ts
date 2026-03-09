import NextAuth, { DefaultSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// Estendendo os tipos nativos do NextAuth para a arquitetura SaaS
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

declare module "next-auth/jwt" {
  interface JWT {
    role?: string;
    company_id?: string;
  }
}

/**
 * CONFIGURAÇÃO CENTRAL DE AUTENTICAÇÃO
 * * Correção do erro MissingSecret:
 * 1. O 'secret' é definido como a primeira propriedade.
 * 2. O 'basePath' é configurado para coincidir com app/api/auth/[...auth]
 * 3. 'trustHost' é ativado para garantir o funcionamento em localhost e Vercel.
 */
export const { handlers, signIn, signOut, auth } = NextAuth({
  secret: process.env.AUTH_SECRET,
  basePath: "/api/auth",
  session: {
    strategy: "jwt",
  },
  trustHost: true,
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

        // Validação ADMIN
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
            company_id: "empresa_01"
          };
        }

        // Validação USER
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
            company_id: "empresa_01"
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
});