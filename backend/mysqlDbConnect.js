const dotenv = require('dotenv').config();
const mysql = require('mysql');

const conDb = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB
});
module.exports = conDb;