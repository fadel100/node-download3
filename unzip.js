const unzipper = require("unzipper");
const fs = require("fs");

fs.createReadStream("./test4").pipe(unzipper.Extract({ path: "output/path2" }));
