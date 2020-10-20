const mysql = require('mysql');

const conDb = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "groupomania"
});
module.exports = conDb;