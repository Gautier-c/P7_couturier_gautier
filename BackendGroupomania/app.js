const express = require('express');
const bodyparser = require('body-parser');
// const messagesRoutes = require('./routes/messages');
const userRoutes = require('./routes/user');
const app = express();

const createTableCustomers = "CREATE TABLE IF NOT EXISTS customers (id VARCHAR(255), email VARCHAR(255), password VARCHAR(255), name VARCHAR(255), firstname VARCHAR(255), PRIMARY KEY (id))";
module.exports = createTableCustomers;

const createTableMessages = "CREATE TABLE IF NOT EXISTS messages (userId VARCHER(255), messages VARCHAR(255), answer VARCHAR(255), likes VARCHAR(255), usersLiked VARCHAR(255), usersDisliked VARCHAR(255), PRIMARY KEY (userID))";
module.exports = createTableMessages;

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyparser.json());
// app.use('/api/messages', messagesRoutes);
app.use('/api/auth', userRoutes);

module.exports = app;