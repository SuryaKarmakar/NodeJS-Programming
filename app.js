const http = require("http");

const PORT = 3000;
const HOST = "localhost";

const requestListener = (req, res) => {
  res.write("<h1>Welcome to vanilla node server</h1>");
  res.end();
};
const server = http.createServer(requestListener);

server.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});
