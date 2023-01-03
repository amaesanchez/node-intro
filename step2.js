"use strict";


const argv = process.argv;
console.log(argv);
const fsP = require("fs/promises");
const axios = require("axios");

/** reads txt file and prints content or throws error */
async function cat(path) {
  try {
    let contents = await fsP.readFile(path, "utf8");
    console.log(contents);
  } catch (err) {
    console.log("Error", err);
    process.exit(1);
  }
}


if (argv[2].startsWith("http")) {
  webCat(argv[2]);
} else {
  cat(argv[2]);
}


/** makes get request given url and prints contents or throws error */
async function webCat(url) {
  try {
    const resp = await axios({ url });
    console.log(resp.data);
  } catch (err) {
    console.log("Error", err);
    process.exit(1);
  }
}
