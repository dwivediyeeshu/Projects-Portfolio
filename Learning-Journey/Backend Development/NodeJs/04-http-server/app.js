const http = require("node:http");

const server = http.createServer(function (req, res) {
  console.log(`Incoming Request at [${Date.now().toLocaleString()}]`);
  //   console.log(req.headers);
  console.log(req.method);
  console.log(req.url);

  //....Response logic

  switch (req.url) {
    case "/":
      res.writeHead(200);
      return res.end("Homepage");

    case "/contact-us":
      res.writeHead(200);
      return res.end("Contact me at yeeshuwork@gmail.com");

    case "/about":
      res.writeHead(200);
      return res.end("I am a Senior System Engineer");

    default:
      res.writeHead(404);
      return res.end("You are lost Koneko Chan");
  }
});

server.listen(8000, () => {
  console.log("Server is running on Port 8000");
});
