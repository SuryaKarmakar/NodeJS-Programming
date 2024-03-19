const http = require("http");

const PORT = 3000;
const HOST = "localhost";

const requestListener = (req, res) => {
  // var body = "hello world";
  // response.setHeader() allows you only to set a singular header.
  // response.setHeader("Content-Length", body.length);
  // response.setHeader("Content-Type", "text/plain");
  // response.setHeader("Set-Cookie", "type=ninja");
  // response.status(200);

  // response.writeHead() will allow you to set pretty much everything about the response head including status code, content, and multiple headers.
  // response.writeHead(200, {
  //     "Content-Length": body.length,
  //     "Content-Type": "text/plain",
  //     "Set-Cookie": "type=ninja"
  // });
  // res.writeHead(200, { "Content-Type": "application/json" });

  res.setHeader("Content-Type", "text/html");
  res.write("<h1>Welcome to vanilla node server</h1>");
  res.end();
};
const server = http.createServer(requestListener);

server.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});
