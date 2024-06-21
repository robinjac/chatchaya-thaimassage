import { readdir, copyFile, rm } from "node:fs/promises";

const docFiles = await readdir("./docs", { recursive: true });

for (const file of docFiles) {
  if (file === ".nojekyll") continue;
  if (file === "CNAME") continue;

  await rm("./docs/" + file);
}

// read all the files in the current directory, recursively
const files = await readdir("./dist", { recursive: true });

for (const fileName of files) {
  await copyFile("./dist/" + fileName, "./docs/" + fileName);
}

console.log("done!");
