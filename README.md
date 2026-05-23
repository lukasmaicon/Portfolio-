# Portfólio — Instruções de build e deploy (Vercel)

Projeto React + TanStack React Start.

Resumo rápido:
- O build do cliente fica em `dist/client`.
- `vercel.json` já está configurado para publicar `dist/client`.

Passos locais para testar:

1. Instalar dependências

```bash
npm install
```

2. Gerar build (produz `dist/client` e `dist/server`)

```bash
npm run build
```

3. Visualizar build estático (opcional)

```bash
npm run preview
# ou usar um servidor estático, por exemplo:
npx serve dist/client
```

Deploy no Vercel (estático usando `dist/client`):

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
- Build Command: `npm run vercel-build` (ou `npm run build`)
- Output Directory: `dist/client`

Alternativa: usar `vercel` CLI

```bash
npm i -g vercel
vercel login
vercel --prod
```

Observações:
- Este projeto também inclui código para SSR (Cloudflare Workers). Se desejar deploy com SSR, recomendo fazer deploy no Cloudflare Workers e usar `wrangler`.
- Se quiser que eu faça o push para um repositório GitHub (se você autorizar e fornecer acesso), eu posso guiar passo a passo.
