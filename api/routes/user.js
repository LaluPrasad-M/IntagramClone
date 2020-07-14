const express = require('express');
const router = express.Router();
const multer = require('multer');

const UserController = require("../controllers/user");

router.get('/login',UserController.user_get_login);

router.post('/login',UserController.user_post_login);


module.exports = router;