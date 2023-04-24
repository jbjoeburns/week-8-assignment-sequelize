const { Router } = require("express")
const authorRouter = Router();
const {addAuthor, getAllAuthors, getByName, deleteAuthor, deleteAll} = require("./controllers")

authorRouter.post("/authors/addauthor", addAuthor)
authorRouter.get("/authors/getall", getAllAuthors)
authorRouter.get("/authors/:name", getByName)
authorRouter.delete("/authors/deleteauthor", deleteAuthor)
authorRouter.delete("/authors/deleteall", deleteAll)

module.exports = authorRouter;