const fs = require("fs");
console.log("start reading");
fs.readFile("./data/diary.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
  }
  console.log(data);
});
