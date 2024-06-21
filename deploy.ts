import { readdir, copyFile, rm } from "node:fs/promises";

const docFiles = await readdir("./docs", { recursive: true });

for (const file of docFiles) {
  if (file === ".nojekyll") continue;
  if (file === "CNAME") continue;

  await rm(file);
}

// read all the files in the current directory, recursively
const files = await readdir("./dist", { recursive: true });

for (const fileName of files) {
  await copyFile(fileName, "./docs/" + fileName);
}

console.log("done!");
