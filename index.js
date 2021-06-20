// import * as Axios from "axios";
const Axios = require("axios");
const stream = require("stream");
const fs = require("fs");
// import * as stream from "stream";
// import * as fs from "fs";

async function downloadFile(fileUrl, outputLocationPath) {
  const writer = fs.createWriteStream(outputLocationPath);

  return Axios({
    url: fileUrl,
    headers: {
      referer: "https://www107.zippyshare.com/v/i8vUZttO/file.html",
      Cookie: "JSESSIONID=DA8EE4D80357E63D9A63E17FF8DC2332",
      "user-agent":
        "Mozilla/5.0 (Windows NT 6.0) Gecko/20100101 Firefox/14.0.1",
    },
    responseType: "stream",
  }).then((response) => {
    //ensure that the user can call `then()` only when the file has
    //been downloaded entirely.

    return new Promise((resolve, reject) => {
      response.data.pipe(writer);
      let error = null;
      writer.on("error", (err) => {
        error = err;
        writer.close();
        reject(err);
      });
      writer.on("close", () => {
        if (!error) {
          resolve(true);
        }
        //no need to call the reject here, as it will have been called in the
        //'error' stream;
      });
    });
  });
}

downloadFile(
  "https://www107.zippyshare.com/d/i8vUZttO/22601/JP-STB3.0.zip.001",
  "./test1"
);

// async function getUser() {
//   try {
//     const response = await axios.get("/d/i8vUZttO/22601/JP-STB3.0.zip.001", {
//       baseURL: "https://www107.zippyshare.com",
//       headers: {
//         referer: "https://www107.zippyshare.com/v/i8vUZttO/file.html",
//         Cookie: "JSESSIONID=DA8EE4D80357E63D9A63E17FF8DC2332",
//         "user-agent":
//           "Mozilla/5.0 (Windows NT 6.0) Gecko/20100101 Firefox/14.0.1",
//       },
//     });
//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }
// }

// getUser();

// https://www107.zippyshare.com/d/i8vUZttO/8028/JP-STB3.0.zip.001

// https://www107.zippyshare.com/d/i8vUZttO/22601/JP-STB3.0.zip.001

// const Downloader = require("nodejs-file-downloader");

// (async () => {
//   //Wrapping the code with an async function, just for the sake of example.

//   const downloader = new Downloader({
//     url: "https://www107.zippyshare.com/d/i8vUZttO/2242/JP-STB3.0.zip.001", //If the file name already exists, a new file with the name 200MB1.zip is created.
//     directory: "./downloadsssss", //This folder will be created, if it doesn't exist.
//   });
//   try {
//     await downloader.download(); //Downloader.download() returns a promise.

//     console.log("All done");
//   } catch (error) {
//     //IMPORTANT: Handle a possible error. An error is thrown in case of network errors, or status codes of 400 and above.
//     //Note that if the maxAttempts is set to higher than 1, the error is thrown only if all attempts fail.
//     console.log("Download failed", error);
//   }
// })();
