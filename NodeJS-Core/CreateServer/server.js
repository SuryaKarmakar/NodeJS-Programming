const http = require("http");

const PORT = 3000;
const HOST = "localhost";

// Ex 1:
// const server = http.createServer((req, res) => {
//   res.write("<h1>Welcome to vanilla node server</h1>");
//   res.end();
// });

// Ex 2:
const requestListener = (req, res) => {
  res.write("<h1>Welcome to vanilla node server</h1>");
  res.end();
};
const server = http.createServer(requestListener);

// Ex 3:
// const server = http.createServer();

// server.on("request", (req, res) => {
//   res.write("<h1>Welcome to vanilla node server</h1>");
//   res.end();
// });

// listen defult domain address (localhost)
// server.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

// listen specific domain address (public or localhost)
server.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});
