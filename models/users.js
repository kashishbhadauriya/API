const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});
console.log("users.js loaded");

module.exports = mongoose.model('User', userSchema);