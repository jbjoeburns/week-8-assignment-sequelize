const { Router } = require("express")
const bookRouter = Router();
const {addBook, getAllBooks, getByAuthor, updateBook, deleteBook, deleteAll} = require("./controllers")
bookRouter.post("/books/addbook", addBook)
bookRouter.get("/books/getallbooks", getAllBooks)
bookRouter.get("/books/getbyauthor", getByAuthor)
bookRouter.put("/books/updatebook", updateBook)
bookRouter.delete("/books/deletebook", deleteBook)
bookRouter.delete("/books/deleteall", deleteAll)


module.exports = bookRouter;
