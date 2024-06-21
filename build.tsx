import { write, file, $ } from "bun";
import { renderToString } from "react-dom/server";
import App from "./src/App";

import { rmdir } from "node:fs/promises";

const stylesID = crypto.randomUUID();
const productionID = crypto.randomUUID();

console.log("Clering old files");

await rmdir("./dist", { recursive: true });

console.log("\n Building CSS");

await $`NODE_ENV=production bunx tailwindcss -m -i ./styles.css -o ./dist/styles.${stylesID}.css`;

console.log("\n Building JS");

await $`NODE_ENV=production bun build --minify ./src/production.tsx --outdir ./dist --entry-naming production.${productionID}.js "`;

const html = renderToString(<App />);

const index = await file("index.html").text();

const result = index
  .replace(
    `<div class="absolute inset-0 overflow-x-hidden" id="root"></div>`,
    `<div class="absolute inset-0 overflow-x-hidden" id="root">${html}</div>`
  )
  .replace(
    '<link rel="stylesheet" href="/styles.css" />',
    `<link rel="stylesheet" href="./styles.${stylesID}.css" />`
  )
  .replace(
    '<script type="module" src="/src/development.tsx"></script>',
    `<script type="module" src="./production.${productionID}.js"></script>`
  );

await write(`./dist/index.html`, result);

console.log("done!");
