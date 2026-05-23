# Portfólio — Instruções de build e deploy (Vercel)

Projeto React + Vite + React Router.

Resumo rápido:

- O build de produção gera `dist`.
- `vercel.json` já está configurado para publicar `dist`.

Passos locais para testar:

1. Instalar dependências

```bash
npm install
```

2. Gerar build

```bash
npm run build
```

3. Visualizar build estático (opcional)

```bash
npm run preview
# ou usar um servidor estático, por exemplo:
npx serve dist
```

Deploy no Vercel:

1. Criar repositório no GitHub (ou Git provider de sua escolha).

2. Inicializar git localmente e commitar:

```bash
git init
git add .
git commit -m "Prepare project for Vercel"
git branch -M main
git remote add origin <URL_DO_REPO>
git push -u origin main
```

3. No painel do Vercel, conectar o repositório e configurar:

- Build Command: `npm run vercel-build`
- Output Directory: `dist`

Alternativa: usar `vercel` CLI

```bash
npm i -g vercel
vercel login
vercel --prod
```

Observações:

- Este projeto agora é um app React estático compatível com Vercel.
- O código antigo de SSR e Cloudflare Workers foi removido.
