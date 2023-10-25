const express = require("express");
const fs = require("fs");

const app = express();
app.use(express.json());

const users = [
  { id: 1, username: "saraa" },
  { id: 2, username: "naraa" },
  { id: 3, username: "boldoo" },
  { id: 4, username: "bataa" },
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


app.get("/wordCount", (res, req) => {
  const content = fs.readFileSync("text.txt", { encoding: "utf-8" });
  const count = content.split("").length;
  res.send("Hello from express server - " + count);
});

app.get("/users/:userId", (req, res) => {
  const { userId } = req.params; // {userId: '1'}
  console.log(userId);
  const findUser = users.filter((user) => user.id === Number(userId));// [1 , 2 ] => 1 [] => 0
  if (findUser.length === 0) {
    res.status(404).json({ message: "not found" });
  } else {
    res.status(200).json({ mesage: "user is found", user: findUser });
  }

});

app.get("/users", (req, res) => {
  // const { users } = JSON.parse(fs.readFileSync("users.json", "utf-8")); //  users = [{},{}] 
  res.status(200).json({ message: "All user",  users });
});

app.post("/users", (req, res) => {
  const body = req.body;
  const newUser = { id: users.length + 1, username: body.name };
  users.push(newUser);
  res.status(200).json({ message: "All user", users });
});


app.delete("/users/:amraaid", (req, res)=> {
  const { amraaid } = req.params;

  const index = users.findIndex((val)=>{ return val.id === Number(amraaid)});
  users.splice (index,1);
  res.status(200).json({message: "hereglegch ustlaa", users});
});

app.put("/users/: bunduuleiId", (req, res)=> {
  const { bunduuleiId } = req.params;
  const { username } = req.body;
  const index = users.findIndex((value)=>{ return value.id === Number(bunduuleiId)});
  
    res.status(200).json({message: "hereglegchiin medeelel shinechilegdlee", users});
  } 
);

app.listen(8008, () => console.log("Server is listening at 8008 port"));
