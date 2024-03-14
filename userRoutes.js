const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
const authenticatemiddleware = require('../middleware/auth');
router.get('/user/alreadyexist/:id', userController.alreadyauser);
router.post('/user/signin',userController.registeruser);
router.post('/user/login', userController.finduser);




module.exports = router;
