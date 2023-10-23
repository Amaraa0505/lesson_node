const express = require("express");
const fs = require("fs");

const app = express();
app.use(express.json());
const users = [
  { id: 1, username: "saraa" },
  { id: 2, username: "saraae" },
  { id: 2, username: "saraarg" },
  { id: 2, username: "saraadf" },
];
app.get("/", (req, res) => {
  res.send("hello Express Server");
});
app.get("/characterCount", (req, res) => {
  res.status(200).json({
    name: "Naraa",
    age: 29,
    isVerified: true,
    score: [208, 203],
    address: {
      no: 100,
    },
  });
});

// JSON.stringify();
fs.readFile("./OOP/text.txt", { encoding: "utf8" }, (err, data) => {
  if (err) {
    console.log(`Error: ${err}`);
    return;
  }

  console.log("niit ugiin too", data.length);
});

app.get("/wordCount", (res, req) => {
  const content = fs.readFileSync("text.txt", { encoding: "utf-8" });
  const count = content.split("").length;
  res.send("Hello from express server - " + count);
});

app.get("/user/userId", (req, res) => {
  const { userId } = req.params;
  const findUser = users.filter((user) => user.id === Number(userId));
  if (findUser.length === 0) {
    res.status(404).json({ message: "not found" });
  } else {
    res.status(200).json({ mesage: "user is found", user: findUser });
  }
  res.json(findUser);
});

app.get("/users", (req, res) => {
  const { users } = JSON.parse(fs.readFileSync("users.json", "utf-8"));
  res.status(200).json({ message: "All user", users });
});
app.post("/users", (req, res) => {
  const body = req.body;
  const newUser = { id: users.length + 1, username: body.name };
  users.push(newUser);
  res.status(200).json({ message: "All user", users });
});

app.listen(8008, () => console.log("Server is listening at 8008 port"));
