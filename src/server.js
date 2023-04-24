const express = require ("express");
const app = express();
app.use(express.json())
require("dotenv").config()

const port = process.env.PORT || 5001;
const Book = require("./books/model")
const bookRouter = require("./books/routes");

const Author = require("./authors/model")
const authorRouter = require("./authors/routes");

const Genre = require("./genres/model")
const genreRouter = require("./genres/routes");

const syncTables = () => {
    Author.hasMany(Book)
    Book.belongsTo(Author)
    Genre.hasMany(Book)
    Book.belongsTo(Genre)
    Book.sync({alter: true})
    Author.sync()
    Genre.sync()
}

app.use(bookRouter);
app.use(authorRouter);
app.use(genreRouter)

app.get("/health", (req, res) => {
    res.status(200).json({message: "App healthy!"});
}) ;

app.listen(port, () => {
    syncTables();
    console.log("Server is listening")})


