const mongoose = require('mongoose');


const bookSchema = new mongoose.Schema({
    bookname: { type: String, required: true },
    author: { type: String, required: true },
    description: { type: String },
    image : {type: String, required : true},
    price : { type: Number }
});

module.exports = mongoose.model('books', bookSchema);
