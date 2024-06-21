import { write, file } from "bun";
import { renderToStaticMarkup } from "react-dom/server";
import App from "./src/App";


import { readdir, rmdir } from "node:fs/promises";


/*
// read all the files in the current directory, recursively
const files = await readdir("./src/assets/images", { recursive: true });

for (const fileName of files) {
  const text = await file("./dist/" + fileName).text();

  await write("./dist/" + fileName, text);
}
 */


await rmdir("./dist", { recursive: true })

console.log("clering old dist")

const html = renderToStaticMarkup(<App />);

const index = await file("index.html").text();

const result = index
  .replace(
    `<div class="absolute inset-0 overflow-x-hidden" id="root"></div>`,
    `<div class="absolute inset-0 overflow-x-hidden" id="root">${html}</div>`
  )
  .replace(
    '<link rel="stylesheet" href="/styles.css" />',
    '<link rel="stylesheet" href="./styles.css" />'
  )
  .replace(
    '<script type="module" src="/src/development.tsx"></script>',
    '<script type="module" src="./production.js"></script>'
  );

await write(`./dist/index.${crypto.randomUUID()}.html`, result);

console.log("done!");
