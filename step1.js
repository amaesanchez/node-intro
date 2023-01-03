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
