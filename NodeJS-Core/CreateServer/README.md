# Create a server with vanilla node js :

To create the server, you need to call the createServer method from the HTTP module. i.e, http.createServer.

## http.createServer([options][, requestlistener])

- options => Object
- requestListener => Function

The requestListener is a function which is automatically added to the 'request' event.

## Create a server :

- **Example 1 :**

```js
const server = http.createServer((req, res) => {
  res.write("<h1>Welcome to vanilla node server</h1>");
  res.end();
});
```

- **Example 2 :**

```js
const requestListener = (req, res) => {
  res.write("<h1>Welcome to vanilla node server</h1>");
  res.end();
};
const server = http.createServer(requestListener);
```

- **Example 3 :**

```js
const server = http.createServer();

server.on("request", (req, res) => {
  res.write("<h1>Welcome to vanilla node server</h1>");
  res.end();
});
```

## Create a listener :

- **Default address :**

```js
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```

- **Specific address :**

```js
server.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});
```
