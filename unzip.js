const decompress = require("decompress");

(async () => {
  try {
    const files = await decompress("./JP-STB3.0.zip.001", "dist");
    console.log("d");
  } catch (error) {
    console.log(error);
  }
})();

// const unzipper = require("unzipper");
// const fs = require("fs");

// fs.createReadStream("./test4.zip").pipe(
//   unzipper.Extract({ path: "output/path2" })
// );
