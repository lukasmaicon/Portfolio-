const fs = require("fs");
const path = require("path");

function safeFind(files, re) {
  return files.find((f) => re.test(f));
}

const clientDir = path.join(process.cwd(), "dist", "client");
const assetsDir = path.join(clientDir, "assets");

if (!fs.existsSync(clientDir) || !fs.existsSync(assetsDir)) {
  console.error("dist/client or dist/client/assets not found — run build first");
  process.exit(0);
}

const files = fs.readdirSync(assetsDir);
const css = safeFind(files, /\.css$/) || null;
const indexFiles = files.filter((file) => /^index.*\.js$/.test(file));

const entryScore = (file) => {
  const content = fs.readFileSync(path.join(assetsDir, file), "utf8");
  let score = 0;
  if (/window\.__TSS_START_OPTIONS__/.test(content)) score += 10;
  if (/createRoot\(/.test(content)) score += 8;
  if (/hydrate\(/.test(content)) score += 8;
  if (/createRootRouteWithContext/.test(content)) score += 6;
  if (/new Router\(/.test(content)) score += 6;
  if (/import\{r as y,j as h\}/.test(content)) score -= 5;
  return score;
};

const sortedIndexFiles = indexFiles.sort((a, b) => entryScore(b) - entryScore(a));
const indexJs = sortedIndexFiles[0] || null;
const routerJs = safeFind(files, /router-.*\.js$/) || null;

const scriptFile = indexJs || routerJs;

if (!scriptFile) {
  console.error(
    "Não foi possível localizar um arquivo de entrada JS em dist/client/assets. Encontrados:",
    files,
  );
  process.exit(1);
}

const cssTag = css ? `<link rel="stylesheet" href="assets/${css}">` : "";

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

fs.writeFileSync(path.join(clientDir, "index.html"), html, "utf8");
console.log("Generated dist/client/index.html ->", scriptFile);
