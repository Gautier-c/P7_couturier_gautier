const connect = require('../mysqlDbConnect');
const jwt = require('jsonwebtoken');

exports.getAllMessages = (req, res, next) => {
   
};

exports.publish = (req, res, next) => {
    const userMessage = req.body;
    connect.query('INSERT INTO messages SET ?', userMessage, function(error, results) {
        if (error){
            return res.status(400).json({ error })
        }
        return res.status(201).json({ message : 'Message publié.'})
    })
};

exports.modifyPublication = (req, res, next) => {
    connect.query('SELECT * FROM messages WHERE idMESSAGES=?', req.params.id, function(error,results){
        if (error){
            return res.status(400).json({ error })
        }
        const token = req.headers.authorisation.split(' ')[1];
        const decodedToken = jwt.verify(token, 'pGQ6IkWDhhns7Qzqb52dsHFNJYLfZ5NO');
        const userId = decodedToken.userId;
        const role = decodedToken.role
        const messageId = results[0].idUSERS
        if (userId !== messageId && role !== 'admin') {
            return res.status(401).json({ message : 'Impossible de modifier ce message.'})
        }
        const modifyMessage = req.body;
        connect.query('UPDATE messages SET ? WHERE idMESSAGES=?',[modifyMessage, req.params.id], function (error,results){
            if (error){
                return res.status(400).json({ error })
            }
            return res.status(200).json({ message : 'Message modifié.'})
        })
    })
};

exports.deletePublication = (req, res, next) => {
    connect.query('SELECT * FROM messages WHERE idMESSAGES=?', req.params.id, function(error,results){
        if (error) {
            return res.status(400).json({ error })
        }
        const token = req.headers.authorisation.split(' ')[1];
        const decodedToken = jwt.verify(token, 'pGQ6IkWDhhns7Qzqb52dsHFNJYLfZ5NO');
        const userId = decodedToken.userId;
        const role = decodedToken.role
        const messageId = results[0].idUSERS
        if (userId !== messageId && role !== 'admin') {
            return res.status(401).json({ message : 'Impossible de supprimer ce message.'})
        }
        connect.query(`DELETE FROM messages WHERE idMESSAGES=${req.params.id}`, req.params.id, function (error,results){
            if (error){
                return res.status(400).json({ error })
            }
            return res.status(200).json({ message : 'Message supprimé.'})
        })
    })
};

exports.answer = (req, res, next) => {
    const userAnswer = req.body
    connect.query('INSERT INTO answer SET ?', userAnswer, function(error,results){
        if (error) {
            return res.status(400).json({ error })
        }
        return res.status(201).json({ message : 'Réponse envoyée.'})
    })
};

exports.modifyAnswer = (req, res, next) => {

};

exports.deleteAnswer = (req, res, next) => {

};

exports.likeMessages = (req, res, next) => {
    const userLike = req.body;
    connect.query('INSERT INTO likes SET ?', userLike, function(error,results){
        if (error){
            return res.status(400).json({ error })
        }
        return res.status(201).json({ message : 'Like ajouté.'})
    })
};

exports.removeLike = (req, res, next) => {
    const token = req.headers.authorisation.split(' ')[1];
    const decodedToken = jwt.verify(token, 'pGQ6IkWDhhns7Qzqb52dsHFNJYLfZ5NO');
    const userId = decodedToken.userId;
    connect.query(`DELETE FROM likes WHERE idMESSAGES=${req.params.id} && idUSERS=${userId}`,
    function (error, results){
        if (error) {
            return res.status(400).json({ error });
        }
        return res.status(200).json({ message : 'Like enlevé.'})
    })
};