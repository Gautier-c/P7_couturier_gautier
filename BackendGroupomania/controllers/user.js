const connect = require('../mysqlDbConnect');

exports.signup = (req, res, next) => {
    const user = req.body
    connect.query('INSERT INTO customers', user, function (error, result) {
        if (error) {
            console.log(error);
            return res.status(400).json({ error })
        };
        return res.status(201).json ({ message : 'Utilisateur créé.'})
    });
};

exports.login = (req, res, next) => {

};

// exports.delete = (req, res, next) => {

// };