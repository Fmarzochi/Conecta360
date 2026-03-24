# Política de Segurança — Conecta360

## Compromisso com a Segurança
O **Conecta360** é um ecossistema de integração e, por isso, a integridade do fluxo de dados é nossa prioridade. Valorizamos o trabalho de pesquisadores de segurança e agradecemos reportes responsáveis que ajudem a manter o ambiente seguro.

## Versões Suportadas
Apenas a branch principal (main) recebe atualizações de segurança ativas.

| Versão | Suportada |
| :--- | :--- |
| **v1.x (Latest)** | ✅ Sim |
| Beta / Dev | ⚠️ Limitada |

## Como reportar uma vulnerabilidade
**NÃO utilize Issues públicas para reportar problemas de segurança.**

Caso identifique uma falha crítica ou potencial vazamento de dados, entre em contato imediatamente:
- **Contato:** [Seu E-mail de Suporte Aqui]

Protocolo de resposta:
1. Confirmação de recebimento em até 24 horas.
2. Análise de impacto e desenvolvimento de patch.
3. Notificação aos usuários afetados (se aplicável) após a correção.

## Pilares de Segurança
- **Integração:** Validação rigorosa de payloads em todos os endpoints de integração.
- **Autenticação:** Proteção de rotas via JWT com validação de claims.
- **Ambiente:** Chaves de terceiros e segredos nunca são versionados, sendo injetados via Environment Variables.
