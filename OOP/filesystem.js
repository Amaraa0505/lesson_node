const fs = require("fs");

// fs.readFile("text.txt", { encoding: "utf8" }, (err, data) => {
//   if (err) {
//     console.log(`Error: ${err}`);
//     return;
//   }
//   console.log("Data", data);
// });

// fs.write("text.txt", "hello pinecone fs writer", (err) => {
//   if (err) {
//     console.log("writer err", err);
//   }
//   console.log(" write successfully");
// });

const data = fs.readFileSync("text.txt", { encoding: "utf-8" });
console.log("niit usgiin too", data.length);
console.log("niit ugiin too", data.split("").length);
const count = parsedData.reduce((prev, curr) => prev + curr.length, 0);
const arr = [1, 2, 3, 4, 5];
const sum = arr.reduce((prev, curr) => {
  return prev + curr;
}, 0);
console.log("sum:", sum);

console.log(`start of file read`);

const writeText = (text) => {
  fs.readFile("text.txt", { enounding: "utf8" }, (error, info) => {
    if (error) {
      console.log("Info", info);
    }
    console.log("function successfully");
  });
};
