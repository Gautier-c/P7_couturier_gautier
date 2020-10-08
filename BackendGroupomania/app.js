const express = require('express');
const bodyparser = require('body-parser');
// const messagesRoutes = require('./routes/messages');
const userRoutes = require('./routes/user');
const connect = require('./mysqlDbConnect');
const app = express();


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

connect.connect(function(er){
    if (err){
        console.log("Erreur de connection à la BDD Groupomania")
    }
    else {
        connect.query("CREATE DATABASE IF NOT EXISTS groupomaniaDb", function (err, result){
            if (err) throw err;
        });
        const usersTable = "CREATE TABLE IF NOT EXISTS users (name VARCHAR(255), firstname VARCHAR(255), email VARCHAR(255), password VARCHAR(255))";
        connect.query(usersTable, function (err, result){
            if (err) throw err;
        });
        console.log("Connection BDD Groupomania réussie")
    }
});

app.use(bodyparser.json());
// app.use('/api/messages', messagesRoutes);
app.use('/api/auth', userRoutes);

module.exports = app;