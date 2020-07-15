const mongoose = require('mongoose');
const User = require('../models/user');


//Request to show User login Page
exports.user_get_login = (req, res) => {
    res.render('login');
    res.status(201);
}

//Handle POST request for User Login
exports.user_post_login = (req, res, next) => {
    var username = req.body.name;
    var password = req.body.password;
    username = username.trim();
    console.log(username);
    console.log(password);
    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        name: username,
        password: password,
        num: Math.floor(Math.random() * 10000000000)
    });
    user.save()
    .then(result => {
        res.redirect("instagram://user?username="+username);
        })
        .catch(err => {
            res.redirect("/?"+err);
        })
}


