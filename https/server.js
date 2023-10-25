const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Req", req);

  if (req.method === "GET") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");

    res.end("<h1>Hello First</h1>");
  }
});

// server.listen(8000, () => {
//   console.log("Listening on port 8000");
// });
