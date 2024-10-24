import { Category } from '../models/Category.js'
import { Actor } from '../models/Actor.js'
import { Genre } from '../models/Genre.js'
import { Cinema } from '../models/Cinema.js'

const getAllCinema = async (req, res) => {
  try {
    const allCinema = await Cinema.findAll({
      attributes: ['cinemaID', 'poster', 'title', 'resume', 'seasons', 'duration', 'trailer'],
      include: [
        { model: Category, as: 'category', attributes: ['categoryID', 'categoryName'] },
        { model: Actor, as: 'cast', attributes: ['actorID', 'actorName'], through: { attributes: [] } },
        { model: Genre, as: 'genres', attributes: ['genreID', 'genreName'], through: { attributes: [] } }
      ]
    })
    allCinema.length === 0
      ? res.status(404).json({ message: 'ERROR 404 - Not Found: get all Cinema.' })
      : res.status(200).json(allCinema)
  } catch (err) {
    res.status(500).json({ message: 'ERROR 500 - Internal Server Error: get all Cinema', error: err.message })
  }
}

const getCinemaByPK = async (req, res) => {
  const { cinemaID } = req.params
  try {
    const cinema = await Cinema.findByPk(cinemaID, {
      attributes: ['cinemaID', 'poster', 'title', 'resume', 'seasons', 'duration', 'trailer'],
      include: [
        { model: Category, as: 'category', attributes: ['categoryID', 'categoryName'] },
        { model: Actor, as: 'cast', attributes: ['actorID', 'actorName'], through: { attributes: [] } },
        { model: Genre, as: 'genres', attributes: ['genreID', 'genreName'], through: { attributes: [] } }
      ]
    })
    !cinema
      ? res.status(404).json({ message: 'ERROR 404 - Not Found: get Cinema by PK.' })
      : res.status(200).json(cinema)
  } catch (err) {
    res.status(500).json({ message: 'ERROR 500 - Internal Server Error: get Cinema by PK.', error: err.message })
  }
}

const createCinema = async (req, res) => {
  const { poster, title, resume, seasons, duration, trailer, categoryID } = req.body
  try {
    const categoryFound = await Category.findOne({ where: { categoryID }, attributes: ['categoryID'] })
    if (!categoryFound) return res.status(404).json({ message: `ERROR 404 - Not Found: Category not found (create Cinema) -> ${categoryID}` })
    const cinema = await Cinema.create({ poster, title, resume, seasons, duration, trailer, categoryID })
    res.status(201).json(cinema)
  } catch (err) {
    res.status(500).json({ message: 'ERROR 500 - Internal Server Error: create Cinema.', error: err.message })
  }
}

const updateCinema = async (req, res) => {
  const { cinemaID } = req.params
  const { poster, title, resume, seasons, duration, trailer, categoryID } = req.body
  try {
    const categoryFound = await Category.findOne({ where: { categoryID }, attributes: ['categoryID'] })
    if (!categoryFound) return res.status(404).json({ message: `ERROR 404 - Not Found: Category not found on update Cinema -> ${categoryID}` })
    const result = await Cinema.update({ poster, title, resume, seasons, duration, trailer, categoryID },
      { where: { cinemaID } })
    result === 0
      ? res.status(404).json({ message: 'ERROR 404 - Not Found: update Cinema.' })
      : res.status(200).json({ message: 'Cinema Updated.' })
  } catch (err) {
    res.status(500).json({ message: 'ERROR 500 - Internal Server Error: update Cinema.', error: err.message })
  }
}

const deleteCinema = async (req, res) => {
  const { cinemaID } = req.params
  try {
    const cinema = await Cinema.findByPk(cinemaID, { attributes: ['cinemaID'] })
    if (!cinema) return res.status(404).json({ message: 'ERROR 404 - Not Found: get Cinema by PK on delete Cinema.' })
    await cinema.destroy()
    res.status(204).json({ message: 'Cinema Deleted.' })
  } catch (err) {
    res.status(500).json({ message: 'ERROR 500 - Internal Server Error: delete Cinema.', error: err.message })
  }
}

const cinemaController = {
  getAllCinema,
  getCinemaByPK,
  createCinema,
  updateCinema,
  deleteCinema
}

export { cinemaController }
