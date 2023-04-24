const Book = require('./model')

const addBook = async (req, res) =>{
	try{
		const book = await Book.create({
			title: req.body.title,
			author: req.body.author,
			genre: req.body.genre,
			AuthorId: req.body.authorID,
			GenreId: req.body.genreID
		})
		const successResponse = {
			message: "success",
			book: book,
		}
		res.status(201).json({message:"success",book:book})
	}

	catch (error) {
		console.log(error)
	}
}

const getAllBooks = async (req, res) => {
	try {
		const books = await Book.findAll();
		res.status(201).json({message:"success",book:books})
	}
	catch (error) {
		console.log(error)
	}
}

const getByAuthor = async (req, res) => {
	try {
		const books = await Book.findAll({
			where: {
				author: req.body.author
			}
		});
		res.status(201).json({message:"success",book:books})
	}
	catch (error) {
		console.log(error)
	}
}

const updateBook = async (req, res) => {
	try {
		const updateBook = await Book.update({
			author: req.body.newAuthor,
			genre: req.body.newGenre
		},
		{ where: {
			title: req.body.title
		}
		})
		res.status(201).json({message:"success",updateResult:updateBook})
	}
	catch (error) {
		console.log(error)
	}
}

const deleteBook = async (req, res) => {
	try{
		const {title} = req.body;
		const book = await Book.destroy({
			where: {
				title: title,
			}
		})
		res.status(201).json({message:"success",book:book})
	} catch (error) {
		console.log(error)
	}
}

const deleteAll = async (req, res) => {
	try{
		const {title} = req.body;
		const book = await Book.destroy({ truncate : true })
		res.status(201).json({message:"success",book:book})
	} catch (error) {
		console.log(error)
	}
}

module.exports = {addBook, getAllBooks, getByAuthor, updateBook, deleteBook, deleteAll}

