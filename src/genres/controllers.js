const Genre = require('./model')
const Book = require('../books/model')

const addGenre = async (req, res) => {
	try{
		const genreName = await Genre.create({
			genreName: req.body.genreName,
		})
		const successResponse = {
			message: "success",
			genreName: genreName,
		}
		res.status(201).json({message:"success",genreName:genreName})
	}

	catch (error) {
		console.log(error)
	}
}

const getAllGenres = async (req, res) => {
	try {
		const genreName = await Genre.findAll({include:Book});
		res.status(201).json({message:"success",genreName:genreName})
	}
	catch (error) {
		console.log(error)
	}
}

const getByGenreName = async (req, res) => {
	try {
		const genreName = await Genre.findOne({
			where: {
				genreName: req.params.name
			}, include: Book,
		});
		res.status(201).json({message:"success",genreName:genreName})
	}
	catch (error) {
		console.log(error)
	}
}

const deleteGenre = async (req, res) => {
	try{
		const {genreName} = req.body;
		const genre = await Genre.destroy({
			where: {
				genreName: genreName,
			}
		})
		res.status(201).json({message:"success",genre:genre})
	} catch (error) {
		console.log(error)
	}
}

const deleteAll = async (req, res) => {
	try{
		const genreName = await Genre.destroy({ truncate: { cascade: true } })
		res.status(201).json({message:"success",genreName:genreName})
	} catch (error) {
		console.log(error)
	}
}

module.exports = {addGenre, getAllGenres, getByGenreName, deleteGenre, deleteAll}

