const connect = require('../mysqlDbConnect');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.signup = (req, res, next) => {
    const user = {
        name : req.body.name,
        firstname : req.body.firstname,
        email : req.body.email,
        password : req.body.password
    }
    // bcrypt.hash(user.password, 10)
    // .then(hash => { 
    //     user.password = hash
        connect.query('SELECT * FROM users WHERE email="'+user.email+'"', function(error, result){        //Verification si email existe deja
            if (error) throw error;
            if (result.length > 0){
                return res.status(500).json({ message : "Adresse mail déjà utilisée."})
            } else {
                connect.query('INSERT INTO users SET ?', user, function (error, result){                //Inscription de l'utilisateur
                    if (error) {
                        console.log(error);
                        return res.status(400).json({ error })
                    };
                    return res.status(201).json({ message : 'Utilisateur créé.'})
                })
                }
        })
    // })
}

exports.login = (req, res, next) => {
    const user = {
        email : req.body.email,
        password : req.body.password
    }
        connect.query('SELECT * FROM users WHERE email="'+user.email+'"', function(err, result){          //Verification si l'email existe dans la BDD
            if (err) throw err;
            if (result.length <= 0){
                return res.status(500).json({ message : "Utilisateur inconnu."})
            } else {
                bcrypt.compare(userPassword, result[0].password)
                .then(valid => {
                    if(!valid) {
                        return res.status(500).json({ message : "Mot de passe incorrect"})
                    }
                    return res.status(200).json({
                        token: jwt.sign(
                            { userId: result[0].id},
                            'pGQ6IkWDhhns7Qzqb52dsHFNJYLfZ5NO',
                            { expiresIn: '24h'}
                        )
                    })
                })
                .catch(() => {
                    return res.status(500).json({ error })
                })
            }
        })
};

exports.deleteUser = (req, res, next) => {
    const paramsId = req.params.id;
    connect.query('DELETE FROM users WHERE userId="'+paramsId+'"', function(error,result){
        if (error){
            console.log(error);
            return res.status(400).json({ error })
        }
        return res.status(201).json({ message : "Utilisateur supprimé."})
    })
};