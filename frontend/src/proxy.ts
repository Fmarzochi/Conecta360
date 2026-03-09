import { auth } from "@/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const { nextUrl } = req;

  // Define a rota que criamos como protegida
  const isProtectedRoute = nextUrl.pathname.startsWith('/backend-construcao');

  // Se o usuário tentar acessar uma rota protegida sem estar logado, redireciona para o login
  if (isProtectedRoute && !isLoggedIn) {
    return NextResponse.redirect(new URL('/login', nextUrl));
  }

  // O redirecionamento baseado em role (ADMIN -> painel administrativo, USER -> dashboard)
  // pode ser implementado aqui futuramente quando essas rotas específicas existirem.
  // Por enquanto, o acesso é liberado para a página "/backend-construcao",
  // que já faz a distinção do texto com base na role.

  return NextResponse.next();
});

// O matcher define em quais caminhos o proxy será ativado.
// Configurado para rodar em todas as rotas, exceto arquivos estáticos e rotas internas do Next.js.
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};