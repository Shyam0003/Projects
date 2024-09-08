const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    username: String,
    email: String
});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
