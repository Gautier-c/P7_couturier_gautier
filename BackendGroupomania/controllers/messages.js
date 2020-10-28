const conDb = require('../mysqlDbConnect');
const jwt = require('jsonwebtoken');

exports.getAllMessages = (req, res, next) => {
    conDb.query('SELECT * FROM publications', (err, result) => {
        if(err) {
            console.log(err);
            return res.status(400).json({ message : "Erreur interne"})
        }
        return res.status(200).json({result});
        
    })
};

exports.publish = (req, res, next) => {
    const message = req.body.values
    conDb.query('INSERT INTO publications SET ?', message, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(400).json({ message : "Erreur interne"})
        }
    return res.status(201).json({ message: 'Votre message a bien été posté !' })
    })
};

// exports.modifyPublication = (req, res, next) => {
//     conDb.query('SELECT * FROM publications', req.params.id, (err, result) => {
//         if (err){
//             console.log(err);
//             return res.status(400).json({ message : "Erreur interne"})
//         }
//         const token = req.headers.authorization.split(' ')[1];
//         const decodedToken = jwt.verify(token, 'TOKEN');
//         const messageId = decodedToken.userId;
//         if (result[0].id !== messageId){
//             return res.status(401).json({ message: 'Accès non autorisé' })
//         }
//         const modifyMessage = req.body.values;
//         conDb.query('UPDATE publications SET ? WHERE id=?'[modifyMessage.content, req.params.id], (err, result) => {
//             if (err) {
//                 console.log(err);
//                 return res.status(400).json({ message : "Erreur interne"})
//             }
//             return res.status(200).json({ message: 'Votre publications a bien été modifié !' })   
//         })
//     })
// };

// exports.deletePublication = (req, res, next) => {
//     conDb.query('SELECT * FROM publications', req.params.id, (err, result) => {
//         if (err){
//             console.log(err);
//             return res.status(400).json({ message : "Erreur interne"})
//         }
//         const token = req.headers.authorization.split(' ')[1];
//         const decodedToken = jwt.verify(token, 'TOKEN');
//         const messageDelete = decodedToken.userId;
//         if (result[0].id !== messageDelete){
//             return res.status(401).json({ message: 'Accès non autorisé' })
//         }
//         conDb.query('DELETE FROM publications WHERE id=?', req.params.id, (err, result) => {
//             if (err) {
//                 console.log(err);
//                 return res.status(400).json({ message : "Erreur interne"})
//             }
//             return res.status(200).json({ message: 'Publication supprimée.' })   
//         })
//     })
// };

// exports.likeMessages = (req, res, next) => {
//     const addLike = +1;
//     conDb.query('INSERT INTO publications (likes) SET ?', addLike, (err, result) => {
//         if (err) {
//             console.log(err);
//             return res.status(400).json({ message : "Erreur interne"})
//         }
//         return res.status(201).json({ message: 'Like pris en compte.' })
//     })
// };

// exports.removeLike = (req, res, next) => {
//     const token = req.headers.authorisation.split(' ')[1];
//     const decodedToken = jwt.verify(token, 'pGQ6IkWDhhns7Qzqb52dsHFNJYLfZ5NO');
//     const userId = decodedToken.userId;
//     connect.query(`DELETE FROM likes WHERE idMESSAGES=${req.params.id} && idUSERS=${userId}`,
//     function (error, results){
//         if (error) {
//             return res.status(400).json({ error });
//         }
//         return res.status(200).json({ message : 'Like enlevé.'})
//     })
// };