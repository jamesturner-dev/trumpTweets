const fs = require("fs");
const keyphrase = process.argv[2] || "none";
const week = "weekThree";

var tweets = require(`../json/${week}/${keyphrase}.json`);
var outFile = `../data/${week}/${keyphrase}.json`;

try {
  tweets.forEach(function (tweet) {
    tweet.keywords = keyphrase;
  });

  fs.writeFile(outFile, JSON.stringify(tweets, null, 2), function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("JSON saved to " + outFile);
    }
  });
} catch (error) {
  console.log(error);
}
