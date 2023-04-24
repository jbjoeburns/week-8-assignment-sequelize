const Author = require('./model')
const Book = require('../books/model')

const addAuthor = async (req, res) => {
	try{
		const author = await Author.create({
			name: req.body.name,
		})
		const successResponse = {
			message: "success",
			author: author,
		}
		res.status(201).json({message:"success",author:author})
	}

	catch (error) {
		console.log(error)
	}
}

const getAllAuthors = async (req, res) => {
	try {
		const author = await Author.findAll({include:Book});
		res.status(201).json({message:"success",author:author})
	}
	catch (error) {
		console.log(error)
	}
}

const getByName = async (req, res) => {
	try {
		const author = await Author.findOne({
			where: {
				name: req.params.name
			}, include: Book,
		});
		res.status(201).json({message:"success",author:author})
	}
	catch (error) {
		console.log(error)
	}
}

const deleteAuthor = async (req, res) => {
	try{
		const {name} = req.body;
		const author = await Author.destroy({
			where: {
				name: name,
			}
		})
		res.status(201).json({message:"success",author:author})
	} catch (error) {
		console.log(error)
	}
}

const deleteAll = async (req, res) => {
	try{
		const author = await Author.destroy({ truncate: { cascade: true } })
		res.status(201).json({message:"success",author:author})
	} catch (error) {
		console.log(error)
	}
}

module.exports = {addAuthor, getAllAuthors, getByName, deleteAuthor, deleteAll}

