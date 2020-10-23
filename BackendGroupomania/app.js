const express = require('express');
const bodyparser = require('body-parser');
const messagesRoutes = require('./routes/messages');
const userRoutes = require('./routes/user');
const connect = require('./mysqlDbConnect');
const app = express();

const createTable = "CREATE TABLE IF NOT EXISTS users (id INT NOT NULL IDENTITY PRIMARY KEY, email VARCHAR(255), name VARCHAR(255), firstname VARCHAR(255), password VARCHAR(255), role VARCHAR(255)";
module.exports = createTable;
const createTableComments = "CREATE TABLE IF NOT EXISTS publish (idPublication INT NOT NULL IDENTITY PRIMARY KEY, content VARCHAR(255), userId VARCHAR(255), date DATE";
module.exports = createTableComments;

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

connect.connect(function(err){
    if (err){
        console.log("Erreur de connection à la BDD Groupomania")
    }
    else {
        console.log("Connection BDD Groupomania réussie")
    }
});

app.use(bodyparser.json());
app.use('/api/messages', messagesRoutes);
app.use('/api/user', userRoutes);

module.exports = app;