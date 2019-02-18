const http = require('http');
const fs = require('fs');

const mainPage = function (res) {
    let resMessage = `
        <html>
            <head>
                <title>Server NodeJS</title>
            </head>
            <body>
                <form action="/message" method="POST">
                    <input type="text" name="message">
                    <button type="submit">
                        Send
                    </button>
                </form>
            </body>
        </html>
    `;

    res.setHeader('Content-Type', 'text/html');
    res.write(resMessage);
    return res.end();
};

const errorPage = function (res) { 
    let resMessage = `
        <html>
            <head>
                <title>Server NodeJS</title>
            </head>
            <body>
                <h1>This route does not exist!</h1>
            </body>
        </html>
    `;

    res.setHeader('Content-Type', 'text/html');
    res.write(resMessage);
    return res.end();
};

const messagePage = function(req, res) {
    const body = [];

    req.on('data', (chunk) => {
        body.push(chunk);
    });

    req.on('end', () => {
        const parseBody = Buffer.concat(body).toString();
        const message = parseBody.split('=')[1];
        fs.writeFileSync('message.txt', message);
    });
    
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end()
}

const serverRouter = function (req, res) {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        return mainPage(res);
    }
    
    if (url === '/message' && method === 'POST') {
        return messagePage(req, res);
    }
        
    return errorPage(res);
}

const server = http.createServer((req, res) => {
    serverRouter(req, res);
});

server.listen(3000);
