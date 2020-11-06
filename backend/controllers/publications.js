const conDb = require('../mysqlDbConnect');
const mysql = require('mysql');
const fs = require('fs');

exports.getAllPublications = (req, res, next) => {
    conDb.query('SELECT * FROM publications ORDER BY date DESC', (err, result) => {
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
        const publicationId = req.params.id
        connection.query('DELETE FROM publications WHERE id=?', publicationId, function(err,result){
            if (err){
                console.log(err);
                return res.status(400).json({ message : "Erreur interne" })
            } else {
                connection.query('DELETE FROM comments WHERE publicationid=?', publicationId, function(err,result){
                    if (err){
                        console.log(err);
                        return res.status(400).json({ message : "Erreur interne" })
                    }
                    return res.status(201).json({message : 'Publication supprimé avec ses commentaires'})
                });
                connection.release();
            }
        })
    })
};