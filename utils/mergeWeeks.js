const merge = require('deepmerge');
const fs = require('fs');
const keyphrase = (process.argv[2] || 'none');

var one = require(`../json/weekTwo/${keyphrase}.json`);
var two = require(`../json/weekOne/${keyphrase}.json`);
// var three = require(`./jsonWeekThree/${keyphrase}.json`);

var merged = merge(one, two);
// var mergedFinal = merge(merged, three);

var outFile = '../data/${keyphrase}.json';

fs.writeFile(outFile, JSON.stringify(merged, null, 2), function(err) {
  if(err) {
    console.log(err);
  } else {
    console.log("JSON saved to " + outFile);
  }
});