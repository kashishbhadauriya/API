const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    title: String,
    name: String
});
console.log("notes.js loaded");
module.exports = mongoose.model('Note', noteSchema);