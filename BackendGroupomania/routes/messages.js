const express = require('express');
const router = express.Router();      
const messageCtrl = require('../controllers/messages');
const auth = require('../middleware/auth');
// const multer = require('../middleware/multer-config');

router.get('/', messageCtrl.getAllMessages);
router.post('/publish', auth, messageCtrl.publish);
// router.put('/:id', auth, messageCtrl.modifyPublication);
// router.delete('/:id', auth, messageCtrl.deletePublication);
// router.post('/:id/like', auth, messageCtrl.likeMessages);
// router.post('/:id/like', auth, messageCtrl.removeLike);

module.exports = router;