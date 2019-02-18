const http = require('http');

const server = http.createServer((req, resp) => {
    // Get request attributes
    console.log(req.url, req.method, req.headers);

    // Creates response and send it back
    resp.setHeader('Content-Type', 'text/html');
    resp.write(`
        <html>
            <head>
                <title>Server NodeJS</title>
            </head>
            <body>
                <h1>Server NodeJS</h1>
            </body>
        </html>
    `);
    resp.end();
});

server.listen(3000);
