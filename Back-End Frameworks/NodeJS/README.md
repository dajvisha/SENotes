# NodeJS

### How the Web Works

1. Browser request a URL.
2. A DNS maps a URL to an IP.
3. The server process the request using a server language like **NodeJS**.
4. The server returns a response to the browser. 

Requests and responses are processed using **HTTP** or **HTTPS**. HTTP means Hyper Text Transfer Protocol, and it is a protocol to format and transfer data across the web. 

### Core Modules

1. **http**: Launch a server, and send requests.
2. **https**: Launch a SSL server.
3. **fs**
4. **path**
5. **os**

### Create a server

**Create a server - option 1**
```js
const http = require('http');

const requesListener = function (req, resp) {
    // code
}

const server = http.createServer(requestListener);

server.listen(3000);
```

**Create a server - option 2**
```js
const http = require('http');

const server = http.createServer((req, resp) => {
    // code
});

server.listen(3000);
```

**Request attributes**

```js
req.url // Returns the requested path, example: /home
req.method // Returns the request method, example: GET
req.headers // Returns the request's headers
```

**Response methods**

```js
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

### The Node Lifecycle & Event Loop

**NodeJS Program Lifecycle**

1. NodeJS app.
2. Start script.
3. Parse code, register variables and functions.
4. **Event Loop**: Keeps on running as long as there are event listeners registered. 
5. **process.exit()**: ends the event loop.
