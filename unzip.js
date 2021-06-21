const decompress = require("decompress");

(async () => {
  try {
    const files = await decompress("./test4.zip", "dist");
    console.log(files);
  } catch (error) {
    console.log(error);
  }
})();

// const unzipper = require("unzipper");
// const fs = require("fs");

// fs.createReadStream("./test4.zip").pipe(
//   unzipper.Extract({ path: "output/path2" })
// );
