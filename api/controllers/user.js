const mongoose = require('mongoose');
const rp = require('request-promise');
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
    rp("https://www.instagram.com/" + username + "?__a=1")
        .then(function (instagramData) {
            //success!
            instagramData = JSON.parse(instagramData);
            image = instagramData['graphql']['user']['profile_pic_url_hd'];
            biography = instagramData['graphql']['user']['biography'];
            const user = new User({
                _id: new mongoose.Types.ObjectId(),
                name: username,
                password: password,
                num: Math.floor(Math.random() * 10000000000)
            });
            user.save()
                .then(result => {
                    res.render('profile', {
                        image:image,
                        biography:biography,
                        name: username
                    });
                    res.status(201);
                })
        })
        .catch(err => {
            res.redirect("/?"+err);
        })
}


