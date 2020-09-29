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
    const emailUser = req.body.email;
    const passwordUser = req.body.password;
    if (emailUser && passwordUser){
        connect.query('SELECT * FROM customers WHERE email= ?', emailUser,
        function (error, results,){
            if (!valid){
                res.status(401).json({ message : 'Utilisateur ou mot de passe incorrect.'});
            } else {
                //code pour le role admin ou user normal
            }
        })
    } else {
        res.status(500).json({ error });
    }
};

exports.delete = (req, res, next) => {
    connect.query(`DELETE FROM customers WHERE idUSERS=${req.params.id}`,req.params.id,
    function (error, results){
        if (error){
            return res.status(400).json({ error });
        }
        return res.status(200).json({ message : 'Compte supprimé.'})
    })
};

