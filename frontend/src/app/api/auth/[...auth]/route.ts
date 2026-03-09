import { handlers } from "@/auth";

/**
 * Manipuladores de Rota (Route Handlers) para o Auth.js v5.
 * Esta rota atende em /api/auth/* devido ao nome da pasta [...auth]
 * e à configuração de 'basePath' definida no arquivo lib/auth.ts.
 */
export const { GET, POST } = handlers;

/**
 * Nota de Segurança:
 * O Auth.js detectará automaticamente o AUTH_SECRET do seu arquivo .env
 * ao processar as requisições através destes handlers.
 */

