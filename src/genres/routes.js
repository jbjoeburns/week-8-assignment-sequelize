const { Router } = require("express")
const genreRouter = Router();
const {addGenre, getAllGenres, getByGenreName, deleteGenre, deleteAll} = require("./controllers")

genreRouter.post("/genres/addgenre", addGenre)
genreRouter.get("/genres/getall", getAllGenres)
genreRouter.get("/genres/:name", getByGenreName)
genreRouter.delete("/genres/deletegenre", deleteGenre)
genreRouter.delete("/genres/deleteall", deleteAll)

module.exports = genreRouter;