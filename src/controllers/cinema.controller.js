import { Category } from '../models/Category.js'
import { Actor } from '../models/Actor.js'
import { Genre } from '../models/Genre.js'
import { Cinema } from '../models/Cinema.js'
import { CinemaActor } from '../models/CinemaActor.js'
import { CinemaGenre } from '../models/CinemaGenre.js'
import { sequelize } from '../db/connection.js'

const getAllCinema = async (req, res) => {
  try {
    const allCinema = await Cinema.findAll({
      attributes: ['id_cinema', 'poster', 'title', 'resume', 'seasons', 'duration', 'trailer'],
      include: [
        { model: Category, as: 'category', attributes: ['id_category', 'category_name'] },
        { model: Actor, as: 'cast', attributes: ['id_actor', 'actor_name'], through: { attributes: [] } },
        { model: Genre, as: 'genres', attributes: ['id_genre', 'genre_name'], through: { attributes: [] } }
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
      attributes: ['id_cinema', 'poster', 'title', 'resume', 'seasons', 'duration', 'trailer'],
      include: [
        { model: Category, as: 'category', attributes: ['id_category', 'category_name'] },
        { model: Actor, as: 'cast', attributes: ['id_actor', 'actor_name'], through: { attributes: [] } },
        { model: Genre, as: 'genres', attributes: ['id_genre', 'genre_name'], through: { attributes: [] } }
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
    const categoryFound = await Category.findOne({ where: { categoryID } })
    if (!categoryFound) return res.status(404).json({ message: `ERROR 404 - Not Found: Category not found (create Cinema): ${categoryID}` })
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
    const categoryFound = await Category.findOne({ where: { categoryID } })
    if (!categoryFound) return res.status(404).json({ message: `ERROR 404 - Not Found: Category not found on create Cinema: ${categoryID}` })
    const result = await Cinema.update({ poster, title, resume, seasons, duration, trailer, categoryID },
      { where: { cinemaID } })
    result === 0
      ? res.status(404).json({ message: 'ERROR 404 - Not Found: update Cinema.' })
      : res.status(200).json({ message: 'Cinema Updated.', result })
  } catch (err) {
    res.status(500).json({ message: 'ERROR 500 - Internal Server Error: update Cinema.', error: err.message })
  }
}

const deleteCinema = async (req, res) => {
  const { cinemaID } = req.params
  try {
    const cinema = await Cinema.findByPk(cinemaID)
    if (!cinema) return res.status(404).json({ message: 'ERROR 404 - Not Found: get Cinema by PK on delete Cinema.' })
    await cinema.destroy()
    res.status(204).json({ message: 'Cinema Deleted.' })
  } catch (err) {
    res.status(500).json({ message: 'ERROR 500 - Internal Server Error: delete Cinema.', error: err.message })
  }
}

const addActorsOnCinema = async (req, res) => {
  const { cinemaID } = req.params
  const { actors } = req.body
  try {
    await sequelize.transaction(async (t) => {
      const cinema = await Cinema.findByPk(cinemaID, { transaction: t, attributes: ['id_cinema'] })
      if (!cinema) {
        return res.status(404).json({ message: 'ERROR 404 - Not Found: Cinema not found (add Actor on Cinema)' })
      }
      const records = actors.map((actorID) => ({ cinemaID: parseInt(cinemaID), actorID }))
      await CinemaActor.bulkCreate(records, { transaction: t })
    })
    res.status(200).json({ message: 'Actors added successfully' })
  } catch (err) {
    res.status(500).json({ message: 'ERROR 500 - Internal Server Error: add Actors on Cinema.', error: err.message })
  }
}

const addGenresOnCinema = async (req, res) => {
  const { cinemaID } = req.params
  const { genres } = req.body

  try {
    await sequelize.transaction(async (t) => {
      const cinema = await Cinema.findByPk(cinemaID, { transaction: t, attributes: ['id_cinema'] })
      if (!cinema) {
        return res.status(404).json({ message: 'ERROR 404 - Not Found: Cinema not found (add Genre on Cinema)' })
      }
      const records = genres.map((genreID) => ({ cinemaID: parseInt(cinemaID), genreID }))
      await CinemaGenre.bulkCreate(records, { transaction: t })
    })
    res.status(200).json({ message: 'Genres added successfully' })
  } catch (err) {
    res.status(500).json({ message: 'ERROR 500 - Internal Server Error: add Genres on Cinema.', error: err.message })
  }
}

const cinemaController = {
  getAllCinema,
  getCinemaByPK,
  createCinema,
  updateCinema,
  deleteCinema,
  addActorsOnCinema,
  addGenresOnCinema
}

export { cinemaController }
