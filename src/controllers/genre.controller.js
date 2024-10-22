import { Genre } from '../models/Genre.js'

const getAllGenres = async (req, res) => {
  const { genreName } = req.query
  try {
    if (!genreName) {
      const allGenres = await Genre.findAll({ attributes: ['id_genre', 'genre_name'] })
      allGenres.length === 0
        ? res.status(404).json({ message: 'ERROR 404 - Not Found: get all Genres.' })
        : res.status(200).json(allGenres)
    } else {
      const genre = await Genre.findOne({ where: { genreName }, attributes: ['id_genre', 'genre_name'] })
      !genre
        ? res.status(404).json({ message: 'ERROR 404 - Not Found: get all Genres.' })
        : res.status(200).json({ message: 'Find one.' })
    }
  } catch (err) {
    res.status(500).json({ message: 'ERROR 500 - Internal Server Error: get all Genres', error: err.message })
  }
}

const getGenreByPK = async (req, res) => {
  const { genreID } = req.params
  try {
    const genre = await Genre.findByPk(genreID, { attributes: ['id_genre', 'genre_name'] })
    !genre
      ? res.status(404).json({ message: 'ERROR 404 - Not Found: get Genre by PK.' })
      : res.status(200).json(genre)
  } catch (err) {
    res.status(500).json({ message: 'ERROR 500 - Internal Server Error: get Genre by PK.', error: err.message })
  }
}

const createGenre = async (req, res) => {
  const { genreName } = req.body
  try {
    const genreFound = await Genre.findOne({ where: { genreName }, attributes: ['id_genre'] })
    if (genreFound) return res.status(409).json({ message: `Genre already exists with this name: ${genreName}` })
    const genre = await Genre.create({ genreName })
    res.status(201).json(genre)
  } catch (err) {
    res.status(500).json({ message: 'ERROR 500 - Internal Server Error: create Genre.', error: err.message })
  }
}

const updateGenre = async (req, res) => {
  const { genreID } = req.params
  const { genreName } = req.body
  try {
    const genreFound = await Genre.findOne({ where: { genreName }, attributes: ['id_genre'] })
    if (genreFound) return res.status(409).json({ message: `Genre already exists with this name: ${genreName}` })
    const result = await Genre.update({ genreName }, { where: { genreID } })
    result === 0
      ? res.status(404).json({ message: 'ERROR 404 - Not Found: update Genre.' })
      : res.status(200).json({ message: 'Genre Updated.', result })
  } catch (err) {
    res.status(500).json({ message: 'ERROR 500 - Internal Server Error: update Genre.', error: err.message })
  }
}

const deleteGenre = async (req, res) => {
  const { genreID } = req.params
  try {
    const genre = await Genre.findByPk(genreID, { attributes: ['id_genre'] })
    if (!genre) return res.status(404).json({ message: 'ERROR 404 - Not Found: get Actor by PK on delete Genre.' })
    await genre.destroy()
    res.status(204).json({ message: 'Genre Deleted.' })
  } catch (err) {
    res.status(500).json({ message: 'ERROR 500 - Internal Server Error: delete Genre.', error: err.message })
  }
}

const genreController = {
  getAllGenres,
  getGenreByPK,
  createGenre,
  updateGenre,
  deleteGenre
}

export { genreController }
