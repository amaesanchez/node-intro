"use strict";


const argv = process.argv;
console.log(argv);
const fsP = require("fs/promises");
const axios = require("axios");
const { Console } = require("console");

const arg2 = argv[2]
const arg3 = argv[3]
const arg4 = argv[4]


// step 1
/** reads txt file and prints content or throws error */
async function cat(path) {
  try {
    let contents = await fsP.readFile(path, "utf8");
    console.log(contents);
    return contents;
  } catch (err) {
    console.log("Error", err);
    process.exit(1);
  }
}


// step 2
function httpCheck() {
  if (arg2.startsWith("http")) {
    webCat(arg2);
  } else {
    cat(arg2);
  }
}



/** makes get request given url and prints contents or throws error */
async function webCat(url) {
  try {
    const resp = await axios({ url });
    console.log(resp.data);
    return JSON.stringify(resp.data)
  } catch (err) {
    console.log("Error", err);
    process.exit(1);
  }
}

// step 3
async function catWrite(fileContents,path) {
  // write contents to file
  try{
    await fsP.writeFile(`./${path}`, fileContents,"utf8");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
  console.log("Successfully wrote file")
}

async function webCatWrite(responseContents, path){
  try{
    await fsP.writeFile(`./${path}`, responseContents,"utf8");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
  console.log("Successfully wrote file")
}

async function darfunction() {
  if (arg2 === "--out") {
    // write file to 3
    // read from 4
    if (!arg4.startsWith("http")) {
      const contents = await cat(arg4);
      catWrite(contents, arg3)

    } else {
      const contents = await webCat(arg4);
      webCatWrite(contents, arg3)
    }

  } else {
    httpCheck()
  }

}
darfunction()
