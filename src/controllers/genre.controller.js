import { sequelize } from '../db/connection.js'
import { Genre } from '../models/Genre.js'

const getAllGenres = async (req, res) => {
  const { genreName } = req.query
  try {
    await sequelize.authenticate()
    await Genre.sync()
    if (!genreName) {
      const allGenres = await Genre.findAll()
      allGenres.length === 0
        ? res.status(404).json({ message: 'ERROR 404 - Not Found: get all Genres.' })
        : res.status(200).json(allGenres)
    } else {
      const genre = await Genre.findOne({ where: { genreName } })
      !genre
        ? res.status(404).json({ message: 'ERROR 404 - Not Found: get all Genres.' })
        : res.status(200).json({ message: 'Find one.' })
    }
  } catch (err) {
    res.status(500).json({ message: 'ERROR 500 - Internal Server Error: get all Genres', err })
  }
}

const getGenreByPK = async (req, res) => {
  const { genreID } = req.params
  try {
    await sequelize.authenticate()
    await Genre.sync()
    const genre = await Genre.findByPk(genreID)
    !genre
      ? res.status(404).json({ message: 'ERROR 404 - Not Found: get Genre by PK.' })
      : res.status(200).json(genre)
  } catch (err) {
    res.status(500).json({ message: 'ERROR 500 - Internal Server Error: get Genre by PK.', err })
  }
}

const createGenre = async (req, res) => {
  const { genreName } = req.body
  try {
    const response = await fetch(`http://localhost:${process.env.PORT}/genre?genreName=${genreName}`)
    if (response.status === 200) return res.status(409).json({ message: `Genre already exists with this name: ${genreName}` })
    await sequelize.authenticate()
    await Genre.sync()
    const genre = await Genre.create({ genreName })
    res.status(201).json(genre)
  } catch (err) {
    res.status(500).json({ message: 'ERROR 500 - Internal Server Error: create Genre.', err })
  }
}

const updateGenre = async (req, res) => {
  const { genreID } = req.params
  const { genreName } = req.body
  try {
    const response = await fetch(`http://localhost:${process.env.PORT}/genre?genreName=${genreName}`)
    if (response.status === 200) return res.status(409).json({ message: `Genre already exists with this name: ${genreName}` })
    await sequelize.authenticate()
    await Genre.sync()
    const result = await Genre.update({ genreName }, { where: { genreID } })
    result === 0
      ? res.status(404).json({ message: 'ERROR 404 - Not Found: update Genre.' })
      : res.status(200).json({ message: 'Genre Updated.', result })
  } catch (err) {
    res.status(500).json({ message: 'ERROR 500 - Internal Server Error: update Genre.', err })
  }
}

const deleteGenre = async (req, res) => {
  const { genreID } = req.params
  try {
    const genre = await Genre.findByPk(genreID)
    if (!genre) return res.status(404).json({ message: 'ERROR 404 - Not Found: get Actor by PK on delete Genre.' })
    await sequelize.authenticate()
    await Genre.sync()
    await genre.destroy()
    res.status(204).json({ message: 'Genre Deleted.' })
  } catch (err) {
    res.status(500).json({ message: 'ERROR 500 - Internal Server Error: delete Genre.', err })
  }
}

const genreController = { getAllGenres, getGenreByPK, createGenre, updateGenre, deleteGenre }

export { genreController }
