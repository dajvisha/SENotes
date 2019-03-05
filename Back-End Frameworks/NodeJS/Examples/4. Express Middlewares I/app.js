const express = require('express');
const app = express();

// Server configuration
app.listen(8080);

// Middleware I
app.use((req, res, next) => {
    console.log('Authentication Middleware');
    next();
});

// Middlaware II
app.use((req, res, next) => {
    console.log('Authorization Middleware');
    next();
});

// Route "/users"
app.use("/users", (req, res, next) => {
    res.send("<h1>Users List</h1>");
});

// Route "/"
app.use("/", (req, res, next) => {
    res.send("<h1>Home Page</h1>")
});
