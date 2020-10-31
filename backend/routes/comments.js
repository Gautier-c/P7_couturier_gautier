const express = require('express');
const router = express.Router();      
const commentsCtrl = require('../controllers/comments');
// const auth = require('../middleware/auth');


router.get('/', commentsCtrl.getAllComments);
router.post('/', commentsCtrl.comments);


module.exports = router;