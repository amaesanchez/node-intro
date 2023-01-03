"use strict";
const argv = process.argv;
console.log(argv)
const fsP = require("fs/promises");

async function cat(path) {
  try {
    let contents = await fsP.readFile(path, "utf8");
    console.log(contents);
    } catch (err) {
      console.log('Error', err)
      process.exit(1);
  }
}

cat(argv[2])

// TODO: why are the paths diff between step.js & one.txt
  // argv[0] and [1] are special -- represents absolute paths of node and the file
  // youre running
  // everything else after reads as text (one.txt does not represent path)
