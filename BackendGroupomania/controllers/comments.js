const conDb = require('../mysqlDbConnect');
const jwt = require('jsonwebtoken');

exports.comments = (req, res, next) => {
    const newComment = req.body.values
    conDb.query('INSERT INTO comments SET ?', newComment, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(400).json({ message : "Erreur interne"})
        }
    return res.status(201).json({ message: 'Votre message a bien été posté !' })
    })
};

exports.getAllComments = (req, res, next) => {
    conDb.query('SELECT * FROM comments', (err, result) => {
        if(err) {
            console.log(err);
            return res.status(400).json({ message : "Erreur interne"})
        }
        return res.status(200).json({result});
    })
};
