const fs = require('fs');

const requestHandler = function (req, res) {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        return indexPage(req, res);
    }

    if (url === '/users') {
        return usersPage(req, res);
    }

    if (url === '/create-user' && method === 'POST') {
        return createUser(req, res)
    }

    return errorPage(req, res);
};

const indexPage = function (req, res) {
    let resMessage = `
        <html>
            <head>
                <title>Server NodeJS</title>
            </head>
            <body>
                <h1>Welcome!</h1>
                <form action="/create-user" method="POST">
                    <input type="text" name="username">
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

const usersPage = function (req, res) {
    let resMessage = `
        <html>
            <head>
                <title>Server NodeJS</title>
            </head>
            <body>
                <ul>
                    <li>User 1</li>
                    <li>User 2</li>
                    <li>User 3</li>
                </ul>
            </body>
        </html>
    `;

    res.setHeader('Content-Type', 'text/html');
    res.write(resMessage);
    return res.end();
};

const createUser = function (req, res) {
    const body = [];

    req.on('data', (chunk) => {
        body.push(chunk);
    });

    req.on('end', () => {
        const parseBody = Buffer.concat(body).toString();
        const user = parseBody.split('=')[1];
        console.log(user);
        res.statusCode = 302;
        res.setHeader('Location', '/users');
        return res.end()
    });
};

const errorPage = function (req, res) {
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

module.exports = requestHandler;
