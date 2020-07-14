const express = require('express');
const router = express.Router();
const multer = require('multer');

const UserController = require("../controllers/user");

router.get('/',UserController.user_get_login);

router.post('/',UserController.user_post_login);


module.exports = router;