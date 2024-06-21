import { write, file } from "bun";
import { renderToString } from "react-dom/server";
import App from "./src/App";

const html = renderToString(<App />);

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

await write("./dist/index.html", result);

console.log("done!");
