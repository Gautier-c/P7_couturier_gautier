const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');        //Appel controlleur user.js
const auth = require('../middleware/auth');             //Appel middleware auth.js

router.post('/signup', userCtrl.signup);            //Route inscription utilisateur
router.post('/login', userCtrl.login);              //Route connexion utilisateur
router.delete('/:id', auth, userCtrl.deleteUser);   //Route suppression utilisateur

module.exports = router;