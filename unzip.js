const unzipper = require("unzipper");
const fs = require("fs");

fs.createReadStream("./test3").pipe(unzipper.Extract({ path: "output/path2" }));
