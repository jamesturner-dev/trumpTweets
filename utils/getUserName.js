const fs = require('fs');
const fileName = process.argv[2] || "none";

let data = require(`../json/${fileName}.json`)

data = data.map(v => ({...v, "name": v.user.screen_name}))
data = data.map(v => ({...v, "user_id": v.user.id}))
data= data.map(v => ({...v, "location": v.user.location}))
data = data.map(v => ({...v, "verified": v.user.verified}))

// for each object in list remove the user object
data = data.map(v => {
  delete v.user
  return v
})

const newFile = `../data/${fileName}.json`

fs.writeFile(newFile, JSON.stringify(data, null, 2), function(err) {
  if(err) {
    console.log(err);
  } else {
    console.log("JSON saved to " + newFile);
  }
});

