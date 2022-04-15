const mongoose = require("mongoose"),
  booksSchema = mongoose.Schema({
    book: String,
    author: String,
    link: String,
  });
module.exports = mongoose.model("books", booksSchema);