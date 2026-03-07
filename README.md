**Status:** 🚧 Em andamento

# Conecta 360º - Frontend Corporativo

![Next.js](https://img.shields.io/badge/Framework-Next.js%2015-black)
![React](https://img.shields.io/badge/Library-React-blue)
![Tailwind](https://img.shields.io/badge/CSS-Tailwind%20CSS-blue)
![TypeScript](https://img.shields.io/badge/Language-TypeScript-blue)
![Architecture](https://img.shields.io/badge/Architecture-Monorepo_Modular-lightgrey)
![Vercel](https://img.shields.io/badge/Hosting-Vercel-black)

## 📌 Sobre o Projeto

Eu desenvolvi este projeto de landing page institucional utilizando o motor mais recente do **Next.js**, focado em entregar uma interface de alto padrão com performance otimizada e código escalável. O sistema foi projetado sob uma arquitetura de componentes modulares, permitindo manutenção ágil e reaproveitamento de blocos de UI.

O objetivo técnico da implementação é garantir:

- **Performance Core Web Vitals:** Carregamento ultra-rápido através de Server Components.
- **Design Responsivo Progressivo:** Layout mobile-first adaptável a qualquer resolução via Tailwind CSS.
- **Tipagem Estrita:** Uso de TypeScript em todo o fluxo de dados para evitar erros em tempo de execução.
- **Navegação Semântica:** Estrutura HTML5 acessível com scroll suave nativo.

Este projeto utiliza uma estrutura limpa, isolando as responsabilidades de estilo, layout e lógica de interface de forma profissional.

---

## 🚀 Tecnologias & Arquitetura

- **Core Engine:** Next.js 15 com App Router (Localizado em `frontend/src/app`).
- **Estilização:** Tailwind CSS (Arquitetura Utilitária para performance de renderização).
- **Linguagem:** TypeScript (Garantia de integridade e inteligência no desenvolvimento).
- **Componentização:** Padrão Atômico segregado em `components/layout` e `components/sections`.
- **Arquitetura de Pastas:** Estrutura Monorepo organizada para suportar expansão de backend futuro.

---

## 📂 Organização Modular (UI)

1. **Layout Components**
   - Cabeçalhos fixos com efeito *backdrop-blur* e rodapés corporativos.
2. **Section Components**
   - Blocos independentes (Hero, Services, About, Mission) que facilitam a gestão do conteúdo.
3. **Global Provider**
   - Configuração de fontes e estilos globais centralizados no `layout.tsx`.

---

## 📅 Histórico de Evolução

### Fase 1: Fundação & Setup ✅
- [x] Eu inicializei o motor Next.js e configurei o ambiente TypeScript.
- [x] Eu estabeleci o arquivo `.gitignore` para proteção de dependências e lixo de build.

### Fase 2: Estrutura Monorepo ✅
- [x] Eu organizei a hierarquia de pastas separando `frontend` e `backend` na raiz.
- [x] Eu migrei a lógica para dentro da pasta `src/` para seguir padrões de mercado.

### Fase 3: Desenvolvimento de UI 🎨
- [x] **Componentização:** Criação das seções modulares (Hero, About, Services, Mission, Values, Contact).
- [x] **Estilização Premium:** Implementação da paleta institucional via Tailwind.
- [x] **Refatoração de Caminhos:** Correção de imports e estabilização de rotas internas.

### Fase 4: Preparação para Produção 🛠️
- [x] Limpeza de arquivos residuais e boilerplates desnecessários.
- [x] Validação de responsabilidade mobile e tablet.

### Fase 5: Roteamento & Fluxo de Autenticação 🔐
- [x] Eu criei a nova rota `/login` com interface de formulário e validação visual de campos obrigatórios.
- [x] Eu desenvolvi a página de status `/backend-construcao` com layout centralizado, animações e feedback visual.
- [x] Eu implementei ajustes finos de responsividade no Header, incluindo um novo item de menu e um comportamento inteligente para o logo (centralizado e clicável apenas no mobile).

---

📌 **Status atual:**
O frontend encontra-se **100% estabilizado e funcional**, agora incluindo um fluxo de navegação simulado para áreas restritas. A arquitetura de rotas e componentes foi validada, e o sistema está pronto para ser conectado aos serviços do backend que serão construídos. O código está limpo, sem dependências desnecessárias e devidamente versionado no GitHub.

---

## 🚀 Próximos Passos

- [ ] Iniciar a estruturação da camada de Backend (API e Banco de Dados).
- [ ] Conectar o formulário de `/login` com rotas de autenticação reais (ex: JWT ou NextAuth).
- [ ] Configuração de um pipeline de CI/CD para automação de testes e deploy corporativo.

---

## 🌐 Como testar o Projeto

Você pode acessar e interagir com a versão mais recente do projeto diretamente em produção através do link abaixo:

🔗 **[Acessar Conecta 360º na Vercel](https://conecta360.vercel.app/)**