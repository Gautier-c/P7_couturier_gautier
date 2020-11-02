const express = require('express');
const router = express.Router();      
const commentsCtrl = require('../controllers/comments');
const auth = require('../middleware/auth');


router.get('/', auth, commentsCtrl.getAllComments);
router.post('/', auth, commentsCtrl.comments);


module.exports = router;