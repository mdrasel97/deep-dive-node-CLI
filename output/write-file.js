const fs = require("fs");
console.log("start reading");
const content1 = "This is a content \n Node js is awesome";
try {
  fs.writeFileSync("./output/");
} catch (err) {
  console.error(err);
}
