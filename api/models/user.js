const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {type : String, unique:false},
    password: {type : String , unique:false},
    num: Number
});

module.exports = mongoose.model('others', UserSchema);