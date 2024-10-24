import { Cinema } from '../models/Cinema.js'
import { CinemaGenre } from '../models/CinemaGenre.js'
import { sequelize } from '../db/connection.js'

const addGenresOnCinema = async (req, res) => {
  const { cinemaID } = req.params
  const { genres } = req.body

  try {
    await sequelize.transaction(async (t) => {
      const cinema = await Cinema.findByPk(cinemaID, { transaction: t, attributes: ['cinemaID'] })
      if (!cinema) {
        return res.status(404).json({ message: 'ERROR 404 - Not Found: Cinema not found (add Genres on Cinema).' })
      }
      const records = genres.map((genreID) => ({ cinemaID: parseInt(cinemaID), genreID }))
      await CinemaGenre.bulkCreate(records, { transaction: t })
    })
    res.status(201).json({ message: 'Genres added successfully.' })
  } catch (err) {
    res.status(500).json({ message: 'ERROR 500 - Internal Server Error: add Genres on Cinema.', error: err.message })
  }
}

const editGenreOnCinema = async (req, res) => {
  const { cinemaID } = req.params
  const { genre } = req.body
  try {
    const cinema = await Cinema.findByPk(cinemaID, { attributes: ['cinemaID'] })
    if (!cinema) {
      return res.status(404).json({ message: 'ERROR 404 - Not Found: Cinema not found (edit Genre on Cinema).' })
    }
    await CinemaGenre.update({ genreID: genre.old }, { where: { cinemaID, genreID: genre.new } })
    res.status(200).json({ message: 'Genre edit successfully from Cinema.' })
  } catch (err) {
    res.status(500).json({ message: 'ERROR 500 - Internal Server Error: edit Genre on Cinema.', error: err.message })
  }
}

const deleteGenresOnCinema = async (req, res) => {
  const { cinemaID } = req.params
  const { genres } = req.body
  try {
    const cinema = await Cinema.findByPk(cinemaID, { attributes: ['cinemaID'] })
    if (!cinema) {
      return res.status(404).json({ message: 'ERROR 404 - Not Found: Cinema not found (delete Genres on Cinema).' })
    }
    await CinemaGenre.destroy({ where: { cinemaID, genreID: genres } })
    res.status(204).json({ message: 'Genres deleted successfully from Cinema.' })
  } catch (err) {
    res.status(500).json({ message: 'ERROR 500 - Internal Server Error: delete Genres on Cinema.', error: err.message })
  }
}

const cinemaGenreController = {
  addGenresOnCinema,
  editGenreOnCinema,
  deleteGenresOnCinema
}

export { cinemaGenreController }
