const express = require('express');
const bodyparser = require('body-parser');
const messagesRoutes = require('./routes/sauces');
const userRoutes = require('./routes/user');
const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyparser.json());
app.use('/api/messages', messagesRoutes);
app.use('/api/auth', userRoutes);

module.exports = app;