const mongoose = require("mongoose");
const books = require("./models/book");

const booksController = require("./controllers/bookcontroller");
const express = require("express"),
  app = express();
app.set("view engine", "ejs");

app.set("port", process.env.PORT || 3000);

app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());
require("dotenv").config();
const uri = process.env.ATLAS_URI;

console.log(uri);

mongoose.connect(uri, { useUnifiedTopology: true });

const db = mongoose.connection;

db.once("open", () => {
  console.log("Successfully connected to MongoDB using Mongoose!");
});

app.get("/home", booksController.getAllBooks, (req, res, next) => {
  console.log(req.data);
  res.render("home", { books: req.data });
});

app.get("/books/:book", booksController.getBook, (req, res, next) => {
  let book = req.params.book;
  console.log(req.data);
  res.render(book, { books: req.data });
});

app.listen(app.get("port"), () => {
  console.log(`Server Running on http://localhost:${app.get("port")}`);
});