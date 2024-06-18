import { write, file } from "bun";
import { renderToStaticMarkup } from "react-dom/server";
import App from "./src/App";

const html = renderToStaticMarkup(<App />);
const index = await file("index.html").text();

const result = index.replace(
  `<div class="absolute inset-0 overflow-x-hidden" id="root"></div>`,
  `<div class="absolute inset-0 overflow-x-hidden" id="root">${html}</div>`
);

await write("./dist/index.html", result);

console.log("done!");
