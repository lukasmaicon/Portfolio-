const fs = require('fs');
const path = require('path');

function safeFind(files, re) {
  return files.find((f) => re.test(f));
}

const clientDir = path.join(process.cwd(), 'dist', 'client');
const assetsDir = path.join(clientDir, 'assets');

if (!fs.existsSync(clientDir) || !fs.existsSync(assetsDir)) {
  console.error('dist/client or dist/client/assets not found — run build first');
  process.exit(0);
}

const files = fs.readdirSync(assetsDir);
const css = safeFind(files, /\.css$/) || null;
const indexJs = safeFind(files, /^index-.*\.js$/) || safeFind(files, /index-.*\.js$/) || safeFind(files, /index.*\.js$/) || null;
const routerJs = safeFind(files, /router-.*\.js$/) || null;

const scriptFile = indexJs || routerJs;

if (!scriptFile) {
  console.error('Não foi possível localizar um arquivo de entrada JS em dist/client/assets. Encontrados:', files);
  process.exit(1);
}

const cssTag = css ? `<link rel="stylesheet" href="/assets/${css}">` : '';

const html = `<!doctype html>
<html lang="pt-br">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Portfólio</title>
    <link rel="icon" href="/favicon.png" />
    ${cssTag}
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/assets/${scriptFile}"></script>
  </body>
</html>`;

fs.writeFileSync(path.join(clientDir, 'index.html'), html, 'utf8');
console.log('Generated dist/client/index.html ->', scriptFile);
