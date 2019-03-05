# NodeJS

<img src="https://bit.ly/2T7nwyA" width="250"/>

## How the Web Works

1. Browser request a URL.
2. A DNS maps a URL to an IP.
3. The server process the request using a server language like **NodeJS**.
4. The server returns a response to the browser. 

Requests and responses are processed using **HTTP** or **HTTPS**. HTTP means Hyper Text Transfer Protocol, and it is a protocol to format and transfer data across the web. 

## NodeJS Core Modules

1. **http**: Launch a server, and send requests.
2. **https**: Launch a SSL server.
3. **fs**
4. **path**
5. **os**

### Create a server

```js
// Example 1 - Create a server
const http = require('http');

const server = http.createServer((req, resp) => {
    // code
});
server.listen(3000);
```

```js
// Example 2 - Create a server
const http = require('http');

const requesListener = function (req, resp) {
    // code
}

const server = http.createServer(requestListener);
server.listen(3000);
```

### Request attributes and Response methods

```js
// Request attributes

req.url // Returns the requested path, example: /home
req.method // Returns the request method, example: GET
req.headers // Returns the request's headers
```

```js
// Request methods

res.setHeaders(); // Configure response headers, example: Content-Type
res.write(); // Configure response body
res.end(); // Send back a response
```

### Streams and Buffers

When the browser sends a **POST request** the data is sent as a **stream of data**. An stream is an ongoing process. The request is read in chunks, this allows to the server process data as it is arriving. 

```js
const reqMessage = [];

// req.on() allows listen for events
// the event 'data' will be fired when a new chunk is ready
// the second parameter is function to process the chunk
req.on('data', (chunk) => {
    reqMessage.push(chunk);
});

// the event 'end' will be fired when the income req is done
req.on('end', () => {
    const parsedMessage = Buffer.concat(reqMessage).toString();
});
```

### Event Driven Code Execution

The order of execution is not the same as you have written your program. Remember NodeJS is aynchronous. 

```js
req.on("end", () => {
    // This code could be executed after the server respond to the client
    const parsedBoddy = Buffer.concat(reqMessage).toString();
    const message = parseBody.split('=')[1]
    fs.writeFileSync('message.txt', message);
});

res.statusCode = 302;
res.setHeader('Location', '/');

return res.end();
```

### Sync and Async function

When you are writting NodeJS applications you allways must use async functions. Sync functions blocks your server until the function's process end. 

```js
fs.writeFyleSync('fileName.txt', message);

// Async functions receives a callback function
// Callback functions are executed when the main function was completed
fs.writeFile('fileName.txt', message, (err) => {
    // code
})
```

### The Node Lifecycle & Event Loop

**NodeJS Program Lifecycle**

1. NodeJS app.
2. Start script.
3. Parse code, register variables and functions.
4. **Event Loop**: Keeps on running as long as there are event listeners registered. 
5. **process.exit()**: ends the event loop.

### Single Thread, Event Loop & Blocking Code

NodeJS uses only one single thread. To handle multiple request NodeJS uses the **Event Loop**. The Event Loop starts automatically when a NodeJS server starts. The Event Loop is responsible for handling **callbacks**. The Event Loop will only handle callbacks that contain fast finish code. 

The async function, or functions that do not run fast, are sended to the **Worker Pool**. This Worker Pool is detached from JavaScript code, and it runs in different threads. When a worker is done, it will trigger its corresponding fallback from the Event Loop. 

The **Event Loop** keeps the NodeJS process running, and it has an order to go through the callbacks. The process is:

1. **Timers** - It checks if there are any timer callbacks it should execute. For example: `setTimeout` and `setInterval`.
2. **Pending Callbacks** - Execute callbacks that were deferred. For example: `I/O-related`.
3. **Poll** - Retrieve new I/O events, and execute their callbacks. 
4. **Check** - Execute `setImmediate()` callbacks. 
5. **Close Callbacks** - Execute all 'close' event callbacks. 

### Exporting and Importing modules

```js
// Example 1
module.exports = requestHandler;

const routes = require('./routes.js');
```

```js
// Example 2
module.exports = {
    handler: requestHandler,
    someText: 'Some text'
}

const routes = require('./routes.js');
const server = http.createServer(routes.handler);
```

```js
// Example 3
module.exports.handler = requestHandler;
module.exports.someText = 'Some text'

const routes = require('./routes.js');
const server = http.createServer(routes.handler);
```

```js
// Example 4
exports.handler = requestHandler;
exports.someText = 'Some text';

const routes = require('./routes.js');
const server = http.createServer(routes.handler);
```

### NPM

NPM is package manager for NodeJS. It creates a file `package.json`.

```
// Start a npm project
npm init
```

Inside `package.json` you can create your own scripts

```js
{
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node app.js",
    "start-server": "node app,js"
  }
}
```

In order to run your own keys you need to execute

```
npm run start-server
```

### Installing 3rd Party Packages

NPM allows you to install dependencies (3rd party node packeges) like expess, body-parser. This packages lives in the npm repository. 

```
npm install <package_nodemon>
```

You can install packages for development or for production. When you install a package, NodeJS stores them inside `node_modules`.

* `npm install nodemon --save-dev`
* `npm install nodemon --save`
* `npm install nodemon -g`

## ExpressJS

```js
const express = require('express');
const app = express();
```

### Middleware

```js
app.use((req, res, next) => {
    console.log('In the middleware!');
    // Allows the request to continue to the next middleware in line
    next();
});

app.use((req, res, next) => {
    console.log('In another middleware!');
    res.send('<h1>Hello from Express!</h1>')
})
```

### Handling different routes

```js
app.use('/add-product', (req, res, next) => {
    res.send('<h1>The Add Product Page</h1>');
});

app.use('/', (req, res, next) => {
    res.send('<h1>The Home Page</h1>');
});
```
