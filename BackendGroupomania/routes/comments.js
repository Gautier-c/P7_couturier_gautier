const express = require('express');
const router = express.Router();      
const commentsCtrl = require('../controllers/comments');
// const auth = require('../middleware/auth');


router.get('/', commentsCtrl.getAllComments);   //afficher les commentaires
router.post('/', commentsCtrl.comments);        //Crée commentaire
// router.put('/:id', commentsCtrl.modifyComment);    //modifier un commentaire
// router.delete('/:id', commentsCtrl.deleteComment);
// router.post(':id/like', auth, commentsCtrl.like);


module.exports = router;