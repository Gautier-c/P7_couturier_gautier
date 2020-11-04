const conDb = require('../mysqlDbConnect');
const fs = require('fs');

exports.getAllPublications = (req, res, next) => {
    conDb.query('SELECT * FROM publications', (err, result) => {
        if(err) {
            console.log(err);
            return res.status(400).json({ message : "Erreur interne"})
        }
        return res.status(200).json({result});
    })
};

exports.publish = (req, res, next) => {
    const attachmentUrl = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`;
    const publications = {
        authorname: req.body.authorname,
        authorfirstname: req.body.authorfirstname,
        authorid: req.body.authorid,
        title: req.body.title,
        attachment: attachmentUrl
    }
    conDb.query('INSERT INTO publications SET ?', publications, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(400).json({ message : "Erreur interne"})
        }
    return res.status(201).json({ message: 'Votre message a bien été posté !' })
    })
};

exports.getOnePublications = (req, res, next) => {
    const publicationsId = req.params.id
    conDb.query('SELECT * FROM publications WHERE id="'+publicationsId+'"', function(err,result){
      if (err){
          console.log(err);
          return res.status(400).json({ message : "Erreur interne" })
      }
      return res.status(201).json({ result })
  })
};


exports.deletePublication = (req, res, next) => {
    const publicationId = req.params.id
    conDb.query('DELETE FROM publications WHERE id=?', publicationId, function(err,result){
        if (err){
            console.log(err);
            return res.status(400).json({ message : "Erreur interne" })
        }
        
        return res.status(201).json({ message : "Publication supprimée."})
    })
};

// exports.answer = (req, res, next) => {
//     const userAnswer = req.body
//     connect.query('INSERT INTO answer SET ?', userAnswer, function(error,results){
//         if (error) {
//             return res.status(400).json({ error })
//         }
//         return res.status(201).json({ message : 'Réponse envoyée.'})
//     })
// };

// exports.modifyAnswer = (req, res, next) => {
//     connect.query('SELECT * FROM answer WHERE idANSWER=?', req.params.id, function(error,results){
//         if (error){
//             return res.status(400).json({ error })
//         }
//         const token = req.headers.authorisation.split(' ')[1];
//         const decodedToken = jwt.verify(token, 'pGQ6IkWDhhns7Qzqb52dsHFNJYLfZ5NO');
//         const userId = decodedToken.userId;
//         const role = decodedToken.role
//         const answerId = results[0].idUSERS
//         if (userId !== answerId && role !== 'admin') {
//             return res.status(401).json({ message : 'Impossible de modifier ce message.'})
//         }
//         const modifyAnswer = req.body;
//         connect.query('UPDATE answer SET ? WHERE idANSWER=?',[modifyAnswer, req.params.id], function (error,results){
//             if (error){
//                 return res.status(400).json({ error })
//             }
//             return res.status(200).json({ message : 'Message modifié.'})
//         })
//     })
// };

// exports.deleteAnswer = (req, res, next) => {
//     connect.query('SELECT * FROM answer WHERE idANSWER=?', req.params.id, function(error,results){
//         if (error) {
//             return res.status(400).json({ error })
//         }
//         const token = req.headers.authorisation.split(' ')[1];
//         const decodedToken = jwt.verify(token, 'pGQ6IkWDhhns7Qzqb52dsHFNJYLfZ5NO');
//         const userId = decodedToken.userId;
//         const role = decodedToken.role
//         const answerId = results[0].idUSERS
//         if (userId !== answerId && role !== 'admin') {
//             return res.status(401).json({ message : 'Impossible de supprimer ce message.'})
//         }
//         connect.query(`DELETE FROM answer WHERE idANSWER=${req.params.id}`, req.params.id, function (error,results){
//             if (error){
//                 return res.status(400).json({ error })
//             }
//             return res.status(200).json({ message : 'Message supprimé.'})
//         })
//     })
// };

// exports.likeMessages = (req, res, next) => {
//     const userLike = req.body;
//     connect.query('INSERT INTO likes SET ?', userLike, function(error,results){
//         if (error){
//             return res.status(400).json({ error })
//         }
//         return res.status(201).json({ message : 'Like ajouté.'})
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