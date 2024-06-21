import { readdir } from "node:fs/promises";
import { write, file } from "bun";

// read all the files in the current directory, recursively
const files = await readdir("./dist", { recursive: true });

for (const fileName of files) {
  const text = await file("./dist/" + fileName).text();

  await write("./docs/" + fileName, text);
}

console.log("done!");
