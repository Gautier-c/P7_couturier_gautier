const connect = require('../mysqlDbConnect');

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

};

exports.deletePublication = (req, res, next) => {

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
        return res.status(201).json({ message : 'Publication liké.'})
    })
};

exports.removeLike = (req, res, next) => {

};