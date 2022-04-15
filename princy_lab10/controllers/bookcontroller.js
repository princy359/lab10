const books = require("../models/book");

exports.getAllBooks = (req, res, next) => {
  books.find({}, (error, books) => {
    if (error) next(error);
    req.data = books;
    next();
  });
};

exports.getBook = (req, res, next) => {
  let book = req.params.book;
  if (book == "1") {
    books.findOne({ book: "Ugly love" }, (error, books) => {
      if (error) next(error);
      req.data = books;
      next();
    });
  } else if (book == "2") {
    books.findOne(
      { book: "It ends with us" },
      (error, books) => {
        if (error) next(error);
        req.data = books;
        next();
      }
    );
  } else if (book == "3") {
    books.findOne(
      { book: "Versity" },
      (error, books) => {
        if (error) next(error);
        req.data = books;
        next();
      }
    );
  }
};