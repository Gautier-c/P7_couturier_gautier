const mysql = require('mysql');
const User = require('../models/User'); //Appel du modele User

const con = mysql.createConnection({
    host: "localhost",
    user: "gautier",
    password: "esther07",
    database: "groupomaniaDB" 
})

exports.signup = (req, res, next) => {  
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        //Insert a record in the "customers" table:
        var sql = "INSERT INTO customers (name, address) VALUES (req.body.email, req.body.password, req.body.name, req.body.firstname)";
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log("1 record inserted");
        });
    });
};

exports.login = (req, res, next) => {

};