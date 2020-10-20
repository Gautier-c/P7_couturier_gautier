const conDb = require('../mysqlDbConnect');
// const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mysql = require('mysql');

exports.signup = (req, res, next) => {
    const pool = mysql.createPool({
      connectionLimit: 10,
      host: "localhost",
      user: "root",
      password: "",
      database: "groupomania"
    });
    pool.getConnection(function (err, connection){
        if (err){
            console.log(err)
            return res.status(400).json("Erreur interne")
        }
        const user = req.body.values
        bcrypt.hash(user.password, 10) 
        .then((hash) => {
            user.password = hash;
            connection.query('SELECT * from users WHERE email=?', user.email, (err, result) => {
                if (err) {
                    console.log(err)
                    return res.status(400).json("Erreur interne")
                }
                if(result.length >= 1) {
                    return res.status(500).json({ message: "Adresse mail déjà existante."});
                } else {
                    connection.query(`INSERT INTO users SET ?`, user, (err, result) => {
                      if (err) {
                        console.log(err)
                        return res.status(400).json("Erreur interne")
                    }
                      return res.status(201).json({message : 'Votre compte a bien été crée !'},)
                    });
                    connection.release();
                }
            })
        }); 
    }); 
} 

exports.login = (req, res, next) => {
  const user = req.body.values
  if (user.email && user.password){
    conDb.query('SELECT * FROM users WHERE email = ?', user.email, function(err, results){
      if (err){
        console.log(err)
        return res.status(400).json("Erreur interne")
      }
      if (results.length <= 0){
        return res.status(500).json({ message: "Email inconnu"})
      } else {
        bcrypt.compare(user.password, results[0].password)
        .then(valid => {
          if(!valid){
            return res.status(500).json({ message: "Email ou mot de passe incorrect"});
          } else {
            return res.status(200).json({
              token: jwt.sign(
                { id: results[0].id},
                'pGQ6IkWDhhns7Qzqb52dsHFNJYLfZ5NO',
                { expiresIn : '24h'}
              ),
              id: results[0].id
            })
          }
        })
        .catch(() => {
          return res.status(500).json({ message : 'Erreur interne' })
        })
      }
    })
  }
}

// exports.deleteUser = (req, res, next) => {
//     const paramsId = req.params.id;
//     connect.query('DELETE FROM users WHERE userId="'+paramsId+'"', function(error,result){
//         if (error){
//             console.log(error);
//             return res.status(400).json({ error })
//         }
//         return res.status(201).json({ message : "Utilisateur supprimé."})
//     })
// };