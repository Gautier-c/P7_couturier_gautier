const express = require('express');
const router = express.Router();      
const messageCtrl = require('../controllers/sauces');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

router.post('/', auth, messageCtrl.getAllMessages);
router.post('/:id', auth, multer, messageCtrl.publish);
router.put('/:id', auth, multer, messageCtrl.modifyPublication);
router.delete('/:id', auth, messageCtrl.deletePublication);
router.post('/:id', auth, multer, messageCtrl.answer);
router.put('/:id', auth, multer, messageCtrl.modifyAnswer);
router.delete('/:id', auth, messageCtrl.deleteAnswer);
router.post('/:id/like', auth, messageCtrl.likeMessages);

module.exports = router;