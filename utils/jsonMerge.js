// Description: Merges the JSON files from each week into one file

const keyphrase = process.argv[2] || "none";
const merge = require('deepmerge');
const fs = require('fs');

var wOne = require(`../data/weekOne/${keyphrase}.json`);
var wTwo = require(`../data/weekTwo/${keyphrase}.json`);
var wThree = require(`../data/weekThree/${keyphrase}.json`);

var mOne = merge(wOne, wTwo);
var mTwo = merge(mOne, wThree);

var outputFilename = `../json/${keyphrase}.json`;

fs.writeFile(outputFilename, JSON.stringify(mTwo, null, 2), function(err) {
  if(err) {
    console.log(err);
  } else {
    console.log("JSON saved to " + outputFilename);
  }
});