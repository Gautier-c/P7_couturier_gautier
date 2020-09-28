const mysql = require('mysql');

const connectDb = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "esther07",
    database: "groupomaniaDb"
});

module.exports = connectDb;