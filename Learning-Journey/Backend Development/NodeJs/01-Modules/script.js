const fs = require("node:fs");

// Task - Read the contents of notes.txt

console.log("Start of the Script");

// Sync => Blocking Operations
// const content = fs.readFileSync("notes.txt", "utf-8");
// console.log("Contents", content);

// [Async] => Non Blocking
fs.readFile("notes.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Content got", data);
  }
});

console.log("End of Script");
